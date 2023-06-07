import React from 'react';
import { styled } from 'nativewind';

import { View, Text, TextInput } from 'react-native';

import Button from '../components/Button';
import BottomTabNavigator from '../components/BottomTabNavigator';

const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);

const CaseContactCreateScreen = ({ navigation }) => {
  return (
    <StyledView className="flex items-center gap-3 flex-1 bg-[#d5d7da]">
      <StyledView className="flex-col justify-center h-1/6">
        <StyledText className="text-3xl flex justify-start font-bold">{`Case Contact Create`}</StyledText>
      </StyledView>
      <StyledView className="flex justify-around items-center h-4/6">
        <StyledView className="flex p-2 flex-col h-5/6 bg-[#c0c5cd] justify-around rounded-xl w-90">
          <StyledView className="flex flex-row ">
            <StyledText className="mr-2 pt-3 text-xl">Case ID:</StyledText>
            <StyledTextInput
              style={{ flexWrap: 'wrap' }}
              multiline={true}
              numberOfLines={2}
              maxLength={30}
              className="text-xl border-b w-3/5"
              placeholder="Case Contact ID"
            />
          </StyledView>
          <StyledView className="flex flex-row ">
            <StyledText className="pt-3 mr-2 text-lg">Contact Name:</StyledText>
            <StyledTextInput
              style={{ flexWrap: 'wrap' }}
              multiline={true}
              numberOfLines={2}
              maxLength={30}
              className="text-xl border-b w-3/5"
              placeholder="Name"
            />
          </StyledView>
          <StyledView className="flex flex-row ">
            <StyledText className="pt-3 mr-2 text-lg">Contact Phone:</StyledText>
            <StyledTextInput
              style={{ flexWrap: 'wrap' }}
              multiline={true}
              numberOfLines={2}
              maxLength={10}
              className="text-xl border-b w-3/5"
              placeholder="Phone"
            />
          </StyledView>
          <StyledView className="flex flex-row ">
            <StyledText className="pt-3 mr-2 text-lg">Contact Email:</StyledText>
            <StyledTextInput
              style={{ flexWrap: 'wrap' }}
              multiline={true}
              numberOfLines={4}
              maxLength={60}
              className="text-lg border bg-white pl-1 w-3/5"
              placeholder="Email"
            />
          </StyledView>
        </StyledView>
        <StyledButton
          className="flex bg-[#ea5a4e] text-white rounded-3xl w-[160] h-[40]"
          title="Create"
          titleColor="white"
          onPress={() => navigation.navigate('CaseContactList')}
        />
      </StyledView>
      <BottomTabNavigator
        className="flex-row pb-10 items-center justify-around h-1/6 w-screen bg-[#345073]"
        navigation={navigation}
      />
    </StyledView>
  );
};

export default CaseContactCreateScreen;
