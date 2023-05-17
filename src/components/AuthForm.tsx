// Refactored TypeScript React-Native Component
import { styled } from 'nativewind';
import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

import Button from './Button';

interface LoginFieldProps {
  errorMessage: string;
  submitButtonText: string;
  onSubmit: ({ email, password }) => void;
  style?: StyleSheet.NamedStyles<any>;
}

const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);

const AuthForm: React.FC<LoginFieldProps> = ({
  errorMessage,
  submitButtonText,
  onSubmit,
  style,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <>
      <StyledTextInput
        className="pl-4 text-white"
        style={style}
        placeholder="Email"
        placeholderTextColor={'white'}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <StyledTextInput
        className="pl-4 text-white"
        style={style}
        placeholder="Password"
        placeholderTextColor={'white'}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setPassword}
      />
      {errorMessage && <Text className="pl-4 text-red-500">{errorMessage}</Text>}
      <StyledButton
        className="flex bg-[#ea5a4e] text-white rounded-3xl w-40 h-10"
        title={submitButtonText}
        onPress={() => onSubmit({ email, password })}
      />
    </>
  );
};
export default AuthForm;
