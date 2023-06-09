import { styled } from 'nativewind';
import React, { useContext } from 'react';
import { View, Text } from 'react-native';

import BottomTabNavigator from '../components/BottomTabNavigator';
import Button from '../components/Button';
import { Context as AuthContext } from '../context/AuthContext';

const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledText = styled(Text);

const AccountScreen = ({ navigation }) => {
  const { signout } = useContext(AuthContext);
  return (
    <StyledView className="flex items-center gap-3 flex-1 bg-[#d5d7da]">
      <StyledView className="flex-col justify-center h-1/5">
        <StyledText className="text-3xl font-bold">{`Rick Astley`}</StyledText>
      </StyledView>
      <StyledView className="flex justify-around items-center h-3/5">
        <StyledText className="flex text-2xl font-bold">{`volunteer@casa.com`}</StyledText>
        <StyledButton
          className="flex bg-[#ea5a4e] text-white rounded-3xl w-[160] h-[40]"
          title="Sign out"
          titleColor="white"
          onPress={signout}
        />
      </StyledView>
      <BottomTabNavigator
        className="flex-row pb-10 items-center justify-around h-1/5 w-screen bg-[#345073]"
        navigation={navigation}
      />
    </StyledView>
  );
};

export default AccountScreen;
