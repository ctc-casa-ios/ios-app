import { styled } from 'nativewind';
import React from 'react';
import { View, Image } from 'react-native';

import Button from '../components/Button';
import LoginField from '../components/LoginFields';

const StyledButton = styled(Button);
const StyledView = styled(View);
const StyledLoginField = styled(LoginField);
const StyledImage = styled(Image);

const casaLogo = require('../assets/casaLogo.png');
const rfgLogo = require('../assets/rfgLogo.png');

const LoginScreen = ({ navigation }) => {
  return (
    <StyledView className="justify-between items-center gap-3 flex-1 bg-[#345073]">
      <StyledView className="flex flex-1 flex-col h-1/3 w-screen justify-end">
        <StyledImage className="w-20 h-20 self-center" source={casaLogo} />
      </StyledView>
      <StyledView className="justify-start items-center gap-4 flex h-1/3 w-screen bg-[#345073] pb-20">
        <StyledLoginField className="flex text-white border-white border border-2 border-rounded rounded-3xl w-[300] h-10" />
        <StyledButton
          className="flex bg-[#ea5a4e] text-white rounded-3xl w-40 h-10"
          title="Sign in"
          titleColor="white"
          onPress={() => navigation.navigate('CaseContactList')}
        />
      </StyledView>
      <StyledView className="flex h-1/3 w-screen items-center">
        <StyledImage className="w-65 h-auto pb-20 z-1" source={rfgLogo} />
      </StyledView>
    </StyledView>
  );
};

export default LoginScreen;
