import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

import Button from './Button';

import tw from 'twrnc';

function AuthForm() {
  return (

      <>
      <TextInput
        style={tw`flex text-white border-white border border-2 border-rounded rounded-3xl w-[70] h-10`}
        placeholder="Email"
        placeholderTextColor={'white'}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={tw`flex text-white border-white border border-2 border-rounded rounded-3xl w-[70] h-10`}
        placeholder="Password"
        placeholderTextColor={'white'}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        
      />
     
     <Button style={tw`flex bg-[#ea5a4e] text-white rounded-3xl w-40 h-10  flex justify-center items-center`}
             titleColor="white"
	     title="Sign In"
	     onPress={console.log("")}
	/> 


     </>

   );
};

export default AuthForm;
