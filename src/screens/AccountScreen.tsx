import React, { useContext, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Context as AuthContext } from 'src/components/context/AuthContext';
import { useAppSelector, useAppDispatch } from 'src/redux/hooks';
import { selectAuth } from 'src/slices/authSlice';
import tw from 'twrnc';

import Button from '../components/Button';

const AccountScreen = ({ navigation }) => {
  const { state } = useContext(AuthContext);
  const dispatch = useAppDispatch();
  const authState = useAppSelector(selectAuth);

  const { user } = state;

  return (
    <View style={tw`flex items-center gap-3 flex-1 bg-[#d5d7da]`}>
      <View style={tw`flex-col justify-center h-1/5`}>
        <Text style={tw`text-3xl font-bold`}>{authState.display_name}</Text>
      </View>

      <View style={tw`flex justify-around items-center h-3/5`}>
        <Text style={tw`flex text-2xl font-bold`}>{authState.email}</Text>
        <Button
          buttonStyle={tw`flex bg-[#ea5a4e] rounded-3xl w-[40] h-[10] flex justify-center items-center`}
          textStyle={tw`text-xl font-bold text-white`}
          title="Sign out"
          titleColor="white"
          onPress={console.log('For Sign out')}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
