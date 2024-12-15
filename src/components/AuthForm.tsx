import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

import tw from 'twrnc';
import axios from 'axios';

import { useNavigation } from '@react-navigation/native';

import Button from './Button';


interface LoginFieldProps {
  errorMessage: string;
  submitButtonText: string;
  onSubmit: ({ email, password }) => void;
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

  const navigation = useNavigation();


// // For Testing Purposes Remember to re-add this and axios to auth context // 
  const signedin = async (email, password) => {

  const authApi = axios.create({
    baseURL: 'https://example-url/',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });



  try {
    const response = await authApi.post('/api/v1/users/sign_in', {
      email,
      password,
    });

    console.log(response.headers.toJSON());
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.data);

    return true
    
    
  } catch (err) {
    console.error('Error:', err.response);
    
    return false

    
  }


};
// // // // // // // // // // // // // // // // // // // // // // // // // // 




  return (

      <>
      <TextInput
        style={tw`flex text-white border-white border border-2 border-rounded rounded-3xl w-[70] h-10`}
        placeholder="Email"
        placeholderTextColor={'white'}
        autoCapitalize="none"
        autoCorrect={false}
	onChangeText={setEmail} 
	/>
      <TextInput
        style={tw`flex text-white border-white border border-2 border-rounded rounded-3xl w-[70] h-10`}
        placeholder="Password"
        placeholderTextColor={'white'}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
	onChangeText={setPassword} 
      />
     {errorMessage && <Text className="pl-4 text-red-500">{errorMessage}</Text>}
     <Button style={tw`flex bg-[#ea5a4e] text-white rounded-3xl w-40 h-10  flex justify-center items-center`}
             titleColor="white"
	     title="Sign In"
	     onPress={a => { signedin(email, password).then((success) => {
    				if (success) {
      					console.log('Signed in successfully');
      					navigation.navigate('HomeScreen');
    				} else {
      					console.log('Failed to sign in');
    				}
  				}).catch((error) => {
    					console.error('An unexpected error occurred', error);
  				});

				}} 

	/> 

     </>

   );
};

export default AuthForm;
