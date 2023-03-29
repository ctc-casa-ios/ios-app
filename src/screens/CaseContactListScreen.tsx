import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const CaseContactListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>CaseContactListScreen</Text>
      <Text onPress={() => navigation.navigate('CaseContactDetail')}>
        Case #1: Press me to see more details
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CaseContactListScreen;
