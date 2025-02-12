import React, { useState, useContext } from 'react';
import { TextInput, Text, StyleSheet, Modal, Alert, Pressable, View} from 'react-native';
import { Context as AuthContext } from 'src/components/context/AuthContext';
import tw from 'twrnc';

import Button from './Button';
import CheckBox from './CheckBox';

interface LoginFieldProps {
  errorMessage: string;
  submitButtonText: string;
  onSubmit: ({ email, password}) => void;
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
  const [modalVisible, setModalVisible] = useState(false);

  const { signin } = useContext(AuthContext);

  const handleSignIn = async () => {
    try {
      await signin(email, password);
    } catch (err) {
      console.error('Error during sign-in:', err);
    }
  };

  const handleStaySignInToggle = () => {
    if (staySignedIn) {
      setStaySignedIn(false)
    }else {
      setStaySignedIn(true)
      setModalVisible(true)
    }
  }
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
        onPress={handleStaySignInToggle}
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
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={tw`flex-1 justify-center items-center`}>
          <View style={tw`m-5 bg-white rounded-2xl p-9 items-center shadow-lg`}>
            <Text style={tw`mb-4 text-center`}>Your session will stay active until you sign out.</Text>
            <Pressable
              style={tw`rounded-2xl px-4 py-2 bg-[#345073]`}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={tw`text-white font-bold text-center`}>OK</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default AuthForm;
