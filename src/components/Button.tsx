import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props {
  title: string;
}

const Button: React.FC<Props> = ({ title }) => {
  const handlePress = () => {
    console.log("Button pressed!");
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  button: {
    alignItems: "center",
    backgroundColor: "#FF8C00",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
};
export default Button;
