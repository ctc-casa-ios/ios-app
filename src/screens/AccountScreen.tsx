// import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import BottomTabNavigator from '../components/BottomTabNavigator';
import Button from '../components/Button';

import tw from 'twrnc';

const AccountScreen = ({ navigation }) => {
  return (
    <View style={tw`flex items-center gap-3 flex-1 bg-[#d5d7da]`}>
      
      <View style={tw`flex-col justify-center h-1/5`}>
        <Text style={tw`text-3xl font-bold`}>{`Amy Santiago`}</Text>
      </View>


      <View style={tw`flex justify-around items-center h-3/5`}>

        <Text style={tw`flex text-2xl font-bold`}>{`amy.santiago@example.com`}</Text>
        <Button
          buttonStyle={tw`flex bg-[#ea5a4e] rounded-3xl w-[40] h-[10] flex justify-center items-center`}
	  textStyle={tw`text-xl font-bold text-white`}
          title="Sign out"
          titleColor="white"
          onPress={console.log("For Sign out")}
        />

      </View>
      <BottomTabNavigator
        style={tw`flex-row pb-10 items-center justify-around h-1/5 w-full bg-[#345073]`}
        navigation={console.log("tab nav")}
      />

      </View>

  );
};

export default AccountScreen;
