import React from 'react';
import { View, ImageBackground } from 'react-native';
import { styled } from 'nativewind';
import Button from '../components/Button';
import LoginField from '../components/LoginFields';

const StyledButton = styled(Button);
const StyledView = styled(View);
const StyledLoginField = styled(LoginField);
const StyledImageBackground = styled(ImageBackground);

const casaLogo = require('./casaLogo.png');
const rfgLogo = require('./rfgLogo.png');

const LoginScreen = ({ navigation }) => {
  return (
    <StyledView className="justify-between items-center gap-3 flex-1 bg-[#345073]">
      <StyledView className="flex h-1/3 w-screen items-center">
        <StyledImageBackground className="w-20 h-20 mt-40" source={casaLogo} />
      </StyledView>
      <StyledView className="justify-start items-center gap-4 flex h-1/3 w-screen bg-[#345073] pb-20">
        <StyledLoginField className="flex text-white border-white border border-2 border-rounded rounded-3xl w-[300] h-10" />
        <StyledButton
          className="flex bg-[#ea5a4e] text-white rounded-3xl w-40 h-10"
          title="Sign in"
          onPress={() => navigation.navigate('CaseContactList')}
        />
      </StyledView>
      <StyledView className="flex h-1/3 w-screen items-center">
        <StyledImageBackground className="w-60 h-auto pb-20 z-1" source={rfgLogo} />
      </StyledView>
    </StyledView>
  );
};

export default LoginScreen;
