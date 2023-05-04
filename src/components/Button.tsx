import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import handlePress from '../helper/onPressHelper';
import { StyleSheet } from 'react-native';
import { styled } from 'nativewind';

interface Props {
  title: string;
  onPress: () => void;
  style?: StyleSheet.NamedStyles<any>;
}

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(TouchableOpacity);

const Button: React.FC<Props> = ({ title, onPress, style }) => {
  return (
    <>
      <TouchableOpacity
        className="flex justify-center items-center"
        style={style}
        onPress={onPress}>
        <Text className="text-white" onPress={onPress}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
