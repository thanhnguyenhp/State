import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ColorButton = ({ title, backgroundColor, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress} // Gọi hàm khi nhấn
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    marginVertical: 5,
    alignItems: "center",
    borderRadius: 5,
  },
  text: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default ColorButton;
