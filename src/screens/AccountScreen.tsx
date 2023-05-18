import React from 'react';
import { StyleSheet, Text, Button } from 'react-native';

const AccountScreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button title="Log out" onPress={() => navigation.navigate('Login')} />
    </>
  );
};

export default AccountScreen;
