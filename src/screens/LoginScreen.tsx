import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>LoginScreen</Text>
      <Button title="Log in" onPress={() => navigation.navigate('CaseContactList')} />
    </>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;
