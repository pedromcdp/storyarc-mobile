import { useEffect, useState } from "react";
import { Keyboard } from "react-native";

export const useKeyboard = () => {
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  function onKeyboardDidShow(e) {
    setKeyboardHeight(e.endCoordinates.height);
  }

  function onKeyboardDidHide() {
    setKeyboardHeight(0);
  }

  useEffect(() => {
    Keyboard.addListener("keyboardWillShow", onKeyboardDidShow);
    Keyboard.addListener("keyboardWillHide", onKeyboardDidHide);
    return () => {
      Keyboard.removeListener("keyboardWillShow", onKeyboardDidShow);
      Keyboard.removeListener("keyboardWillHide", onKeyboardDidHide);
    };
  }, []);

  return keyboardHeight;
};
