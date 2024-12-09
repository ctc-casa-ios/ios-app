import React, { useState } from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';

function AuthForm() {
  return (

      <>
      <TextInput
        className="pl-4 text-white"
        placeholder="Email"
        placeholderTextColor={'white'}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        className="pl-4 text-white"
        placeholder="Password"
        placeholderTextColor={'white'}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        
      />
     </>

   );
};

export default AuthForm;
