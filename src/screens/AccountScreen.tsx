import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { Context as AuthContext } from 'src/components/context/AuthContext';
import tw from 'twrnc';

import Button from '../components/Button';

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);

  const { user } = state;

  const handleSignOut = async () => {
    try {
      await signout();
    } catch (err) {
      console.error('Error during sign-out:', err);
    }
  };

  return (
    <View style={tw`flex items-center gap-3 flex-1 bg-[#d5d7da]`}>
      <View style={tw`flex-col justify-center h-1/5`}>
        <Text style={tw`text-3xl font-bold`}>{user.display_name}</Text>
      </View>

      <View style={tw`flex justify-around items-center h-3/5`}>
        <Text style={tw`flex text-2xl font-bold`}>{user.email}</Text>
        <Button
          buttonStyle={tw`flex bg-[#ea5a4e] rounded-3xl w-[40] h-[10] flex justify-center items-center`}
          textStyle={tw`text-xl font-bold text-white`}
          title="Sign out"
          titleColor="white"
          onPress={handleSignOut}
        />
      </View>
    </View>
  );
};

export default AccountScreen;
