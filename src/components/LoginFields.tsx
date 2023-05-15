// Refactored TypeScript React-Native Component
import React, { useState } from 'react';
import { TextInput, StyleSheet, View } from 'react-native';
import { styled } from 'nativewind';

interface LoginFieldProps {
  style?: StyleSheet.NamedStyles<any>;
}

const StyledTextInput = styled(TextInput);

const LoginField: React.FC<LoginFieldProps> = ({ style }) => {
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
      <View>
        <StyledTextInput
          className="pl-4 text-white"
          style={style}
          placeholder="Email"
          placeholderTextColor={'white'}
          onChangeText={handleEmailChange}
        />
      </View>
      <View>
        <StyledTextInput
          className="pl-4 text-white"
          style={style}
          placeholder="Password"
          placeholderTextColor={'white'}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />
      </View>
    </>
  );
};
export default LoginField;
