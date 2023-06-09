import { styled } from 'nativewind';
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
  style?: any;
  titleColor?: string;
}

const Button: React.FC<Props> = ({ title, onPress, style, titleColor }) => {
  return (
    <TouchableOpacity className="flex justify-center items-center" style={style} onPress={onPress}>
      <Text className="text-xl" style={{ color: titleColor, fontWeight: 'bold' }} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
