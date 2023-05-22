import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  return (
    <>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button title="Log out" onPress={signout} />
    </>
  );
};

export default AccountScreen;
