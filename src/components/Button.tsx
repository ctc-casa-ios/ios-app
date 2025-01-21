import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  style?: any;
  titleColor?: string;
}

const Button: React.FC<Props> = ({ title, onPress, buttonStyle, textStyle, titleColor }) => {
  return (
    <TouchableOpacity style={buttonStyle}  onPress={onPress}>
      <Text style={textStyle} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
