// Refactored TypeScript React-Native Component
import { styled } from 'nativewind';
import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import Button from './Button';

interface LoginFieldProps {
  submitButtonText: string;
  onSubmit: ({ email, password }) => void;
  style?: StyleSheet.NamedStyles<any>;
}

const StyledTextInput = styled(TextInput);
const StyledButton = styled(Button);

const AuthForm: React.FC<LoginFieldProps> = ({ submitButtonText, onSubmit, style }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  return (
    <>
      <StyledTextInput
        className="pl-4 text-white"
        style={style}
        placeholder="Email"
        placeholderTextColor={'white'}
        onChangeText={handleEmailChange}
      />
      <StyledTextInput
        className="pl-4 text-white"
        style={style}
        placeholder="Password"
        placeholderTextColor={'white'}
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
      />
      <StyledButton
        className="flex bg-[#ea5a4e] text-white rounded-3xl w-40 h-10"
        title={submitButtonText}
        onPress={() => onSubmit({ email, password })}
      />
    </>
  );
};
export default AuthForm;
