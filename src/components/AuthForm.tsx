import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { TextInput, Text, StyleSheet} from 'react-native';
import { Context as AuthContext } from 'src/components/context/AuthContext';
import tw from 'twrnc';

import Button from './Button';
import CheckBox from './CheckBox';

interface LoginFieldProps {
  errorMessage: string;
  submitButtonText: string;
  onSubmit: ({ email, password, staySignedin}) => void;
  style?: StyleSheet.NamedStyles<any>;
}

const AuthForm: React.FC<LoginFieldProps> = ({
  errorMessage,
  submitButtonText,
  onSubmit,
  style,
}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [staySignedIn, setStaySignedIn] = useState<boolean>(false)

  const navigation = useNavigation();

  const { state, signin } = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      await signin(email, password, staySignedIn);

      if (state.isSignedIn) {
        navigation.navigate('MainTabs');
      }
    } catch (err) {
      console.error('Error during sign-in:', err);
    }
  };

  return (
    <>
      <TextInput
        style={tw`flex text-white border-white border border-2 border-rounded rounded-3xl w-[70] h-10`}
        placeholder="Email"
        placeholderTextColor="white"
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setEmail}
      />
      <TextInput
        style={tw`flex text-white border-white border border-2 border-rounded rounded-3xl w-[70] h-10`}
        placeholder="Password"
        placeholderTextColor="white"
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={setPassword}
      />
      <CheckBox
        onPress={() => setStaySignedIn(!staySignedIn)}
        title="Stay Logged In"
        isChecked={staySignedIn}
      />
      {errorMessage && <Text className="pl-4 text-red-500">{errorMessage}</Text>}
      <Button
        buttonStyle={tw`flex bg-[#ea5a4e] rounded-3xl w-40 h-10  flex justify-center items-center`}
        textStyle={tw`text-xl font-bold text-white`}
        title="Sign In"
        onPress={handleSignIn}
      />
    </>
  );
};

export default AuthForm;
