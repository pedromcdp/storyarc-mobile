import Modal from "react-native-modal";
import { useDispatch, useSelector } from "react-redux";
import {
  useShowCommentsModal,
  toggleShowCommentsModal,
} from "../../../features/HomeSlice";
import { VStack, ScrollView } from "native-base";
import ModalHeader from "./ModalHeader";
import ModalBody from "./ModalBody";
import { ModalFooter } from "./ModalFooter";

export default function CommentsModal() {
  const dispatch = useDispatch();
  const isVisible = useSelector(useShowCommentsModal);

  return (
    <Modal
      isVisible={isVisible}
      style={{ justifyContent: "flex-end", margin: 0 }}
      onSwipeComplete={() => {
        dispatch(toggleShowCommentsModal());
      }}
      swipeDirection={"down"}
      onBackdropPress={() => {
        dispatch(toggleShowCommentsModal());
      }}
      backdropOpacity={0.8}
      // avoidKeyboard
      propagateSwipe={true}
      hideModalContentWhileAnimating
    >
      <VStack bg="white" width="100%" height="80%" borderTopRadius="3xl">
        <ModalHeader />
        <ModalBody />
        <ModalFooter />
      </VStack>
    </Modal>
  );
}
