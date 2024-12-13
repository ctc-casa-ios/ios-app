import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

import tw from 'twrnc';

interface Props {
  title: string;
  onPress: () => void;
  style?: any;
  titleColor?: string;
}

const Button: React.FC<Props> = ({ title, onPress, style, titleColor }) => {
  return (
    <TouchableOpacity style={style}  onPress={onPress}>
      <Text className="text-lg" style={{ color: titleColor, fontWeight: 'bold' }} onPress={onPress}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
