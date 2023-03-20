// Refactored TypeScript React-Native Component
import React, { useState } from "react";
import { TextInput } from "react-native";

interface LoginFieldProps {}

const LoginField: React.FC<LoginFieldProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handlePasswordChange = (text: string) => {
    setPassword(text);
  };

  return (
    <>
      <TextInput
        placeholder="Enter your email"
        onChangeText={handleEmailChange}
      />

      <TextInput
        placeholder="Enter your password"
        secureTextEntry={true}
        onChangeText={handlePasswordChange}
      />
    </>
  );
};
export default LoginField;
