import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import handlePress from '../helper/onPressHelper';
import { StyleSheet } from 'react-native';

interface Props {
  title: string;
  onPress: () => void;
}

const Button: React.FC<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#FF8C00',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
  },
});
export default Button;
