import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import ColorButton from "./ColorButton";

export default function App() {
  const [bgColor, setBgColor] = useState("white"); // Màu nền mặc định

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <ColorButton title="GREEN" backgroundColor="green" onPress={() => setBgColor("green")} />
      <ColorButton title="BLUE" backgroundColor="blue" onPress={() => setBgColor("blue")} />
      <ColorButton title="BROWN" backgroundColor="brown" onPress={() => setBgColor("brown")} />
      <ColorButton title="YELLOW" backgroundColor="yellow" onPress={() => setBgColor("yellow")} />
      <ColorButton title="RED" backgroundColor="red" onPress={() => setBgColor("red")} />
      <ColorButton title="BLACK" backgroundColor="black" onPress={() => setBgColor("black")} />
      <ColorButton title="RESET" backgroundColor="gray" onPress={() => setBgColor("white")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
