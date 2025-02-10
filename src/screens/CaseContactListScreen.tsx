import { View, Text, FlatList, SafeAreaView, Modal, Alert, Pressable, StyleSheet } from 'react-native';
import tw from 'twrnc';
import { useState, useEffect } from 'react'
import React from 'react';

import CaseContactListCard from '../components/CaseContactListCard';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const CaseContactListScreen = ({ navigation, route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const data = [{ name: '🦋CINA-11-1002' }, { name: '🦋CINA-11-1003' }, { name: '🦋CINA-11-1004' }];

  useEffect(() => {
    if (route.params.staySignedIn) {
      setModalVisible(true)
    }
  }, []);
  
  return (
    <>
    <View style={tw`flex items-center gap-3 flex-1 bg-[#d5d7da]`}>
      <View style={tw`flex-col justify-center h-1/5`}>
        <Text style={tw`text-3xl font-bold`}>MY CASES</Text>
      </View>

      <View style={tw`flex items-center h-3/5`}>
        <View
          style={tw`flex flex-row h-10 bg-[#c0c5cd] justify-between w-80 shadow-lg flex justify-center items-center`}>
          <Text style={tw`pl-2 text-xl font-bold`}>Filter By</Text>
          <Text style={tw`pl-30 text-xl font-bold`}>Show/Hide</Text>
        </View>

        <View style={tw`flex flex-col justify-center my-10 h-80`}>
          <FlatList
            data={data}
            renderItem={({ item }) => <CaseContactListCard item={item} navigation={navigation} />}
            keyExtractor={(item) => item.name}
          />
        </View>
      </View>
    </View>
    <SafeAreaProvider>
    <SafeAreaView style={tw`flex-1 justify-center items-center`}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
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
    </SafeAreaView>
  </SafeAreaProvider>   
  </>   
  );
};

export default CaseContactListScreen;
