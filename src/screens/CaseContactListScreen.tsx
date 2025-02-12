import { View, Text, FlatList} from 'react-native';
import tw from 'twrnc';
import React from 'react';

import CaseContactListCard from '../components/CaseContactListCard';

const CaseContactListScreen = ({ navigation, route }) => {
  const data = [{ name: '🦋CINA-11-1002' }, { name: '🦋CINA-11-1003' }, { name: '🦋CINA-11-1004' }];

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
  </>   
  );
};

export default CaseContactListScreen;
