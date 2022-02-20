import { useMemo, useRef } from "react";
import {
  useWindowDimensions,
  Animated,
  Image,
  PanResponder,
} from "react-native";
import { ZStack, Box } from "native-base";

export function SReveal({ post }) {
  const { width } = useWindowDimensions();
  const pan = useRef(new Animated.Value(width / 2)).current;
  const opacity = useMemo(
    () =>
      pan.interpolate({
        inputRange: [0, width],
        outputRange: [0, 1],
        extrapolate: "clamp",
      }),
    [pan, width]
  );

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        pan.setOffset(gestureState.x0);
      },
      onPanResponderMove: (evt, gestureState) => {
        pan.setValue(gestureState.dx);
      },
      onPanResponderRelease: (evt, gestureState) => {
        pan.flattenOffset();
      },
    })
  ).current;

  return (
    <ZStack width={"full"} height={"xs"}>
      <Image
        source={{ uri: post.photo }}
        style={{ width: "100%", height: "100%" }}
        resizeMode="cover"
      />
      {post.postType === "comparacao" && (
        <Animated.Image
          source={{ uri: post.new_photo }}
          style={{ width: "100%", height: "100%", opacity: opacity }}
          resizeMode="cover"
        />
      )}
      {post.postType === "comparacao" && (
        <Animated.View
          style={{
            top: 0,
            bottom: 0,
            width: 5,
            backgroundColor: "rgba(rgba(255,255,255, 1))",
            transform: [{ translateX: pan }],
          }}
        />
      )}
      {post.postType === "comparacao" && (
        <Box
          style={{ width: "100%", height: "100%" }}
          {...panResponder.panHandlers}
        />
      )}
    </ZStack>
  );
}
