import React, { useContext } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Context as AuthContext } from '../context/AuthContext';

const CaseContactListScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  return (
    <View>
      <Text style={{ fontSize: 48 }}>CaseContactListScreen</Text>
      <Text onPress={() => navigation.navigate('CaseContactDetail')}>
        Case #1: Press me to see more details
      </Text>
      {state.isSignedIn && <Text testID="printed-token">{state.token}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({});

export default CaseContactListScreen;
