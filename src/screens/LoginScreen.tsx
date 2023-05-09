import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';
const LoginScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  const email = 'volunteer1@example.com';
  const password = '12345678';
  return (
    <>
      <Text style={{ fontSize: 48 }}>LoginScreen</Text>
      <Button
        title="Log in"
        onPress={() => {
          signin({ email, password });
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
