import React from "react";
import { View } from "react-native";
import { MotiView } from "moti";
import { useDispatch } from "react-redux";
import { toggleShowSearch } from "../../features/HomeSlice";

export default function Blur() {
  const dispatch = useDispatch();
  return (
    <MotiView
      onStartShouldSetResponder={() => dispatch(toggleShowSearch())}
      from={{ opacity: 0 }}
      animate={{ opacity: 0.8 }}
      exit={{
        opacity: 0,
      }}
      style={{
        position: "absolute",
        backgroundColor: "black",
        flex: 1,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
      }}
    />
  );
}
