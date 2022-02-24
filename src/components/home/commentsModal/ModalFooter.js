//Packages Imports
import { useState, useEffect } from "react";
import { Keyboard, Alert, Image } from "react-native";
import { HStack, Divider, Input, Pressable } from "native-base";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MotiView } from "moti";
import auth from "@react-native-firebase/auth";
import uuid from "react-native-uuid";
//Custom Hooks
import { useKeyboard } from "../../../hooks/useKeyboard";
// Svg
import SendOutline from "../../../../assets/images/sendOutline.svg";
//db
import db from "../../../../server/db.json";

export function ModalFooter({ id }) {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);
  const [comment, setComment] = useState("");
  const insets = useSafeAreaInsets();
  const currentUser = auth().currentUser;
  const keyboardHeight = useKeyboard();

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardWillShow",
      () => {
        setKeyboardVisible(true);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardWillHide",
      () => {
        setKeyboardVisible(false);
      }
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, [isKeyboardVisible]);

  function handleSubmit() {
    if (comment.length === 0) {
      return Alert.alert(
        "Erro",
        "É necessário que área de comentário seja preenchida para puder submeter",
        [{ text: "Fechar" }]
      );
    } else {
      submitComment = {
        id: uuid.v4(),
        postId: id,
        userId: currentUser.uid,
        body: comment,
      };
      db.comments.push(submitComment);
      setComment("");
    }
  }

  return (
    <MotiView
      style={{
        paddingBottom: isKeyboardVisible ? 0 : insets.bottom,
        backgroundColor: "white",
      }}
      animate={{
        paddingBottom: isKeyboardVisible ? 0 + keyboardHeight : insets.bottom,
      }}
      transition={{
        type: "timing",
        duration: 250,
      }}
    >
      <Divider />
      <HStack px={4} py={3.5} space={2}>
        <Image
          style={{
            width: 40,
            height: 40,
            borderRadius: 100,
            borderWidth: 1.3,
            borderColor: "#37B780",
          }}
          source={
            currentUser === null
              ? require("../../../../assets/images/user_img.png")
              : {
                  uri: currentUser.photoURL,
                }
          }
        />

        <Input
          isDisabled={currentUser === null ? true : false}
          value={comment}
          onChangeText={setComment}
          flexGrow={1}
          size="lg"
          variant="unstyled"
          borderRadius="full"
          placeholderTextColor="#909090"
          borderWidth={1.5}
          _focus={{ borderColor: "#e6e6e6" }}
          borderColor="#e6e6e6"
          placeholder="Insira um comentário"
          fontFamily="Poppins_400Regular"
          fontSize={"sm"}
          keyboardAppearance="light"
          InputRightElement={
            <Pressable pr={2} onPress={handleSubmit}>
              <SendOutline
                width={20}
                color={comment?.length === 0 ? "#909090" : "black"}
              />
            </Pressable>
          }
        />
      </HStack>
    </MotiView>
  );
}
