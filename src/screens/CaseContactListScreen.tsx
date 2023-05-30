import React, { useState } from 'react';
import { styled } from 'nativewind';
import tw from 'tailwind-react-native-classnames';

import { View, Text, FlatList } from 'react-native';

import Button from '../components/Button';
import CaseContactListCard from '../components/CaseContactListCard';

const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledText = styled(Text);
const StyledFlatList = styled(FlatList);

const CaseContactListScreen = ({ navigation }) => {
  const [selectedContact, setSelectedContact] = useState();
  const data = [{ name: '🦋CINA-11-1002' }, { name: '🦋CINA-11-1003' }, { name: '🦋CINA-11-1004' }];

  return (
    <StyledView className="flex items-center gap-3 flex-1 bg-[#d5d7da]">
      <StyledView className="flex-col justify-center h-1/5">
        <StyledText className="text-3xl font-bold">MY CASES</StyledText>
      </StyledView>
      <StyledView className="flex items-center h-3/5">
        <StyledView
          className="flex flex-row h-10 bg-[#c0c5cd] justify-between w-80"
          style={tw`shadow-lg`}>
          <StyledText className="pl-2 text-xl font-bold">Filter By</StyledText>
          <StyledText className="pr-2 text-xl font-bold">Show/Hide</StyledText>
        </StyledView>
        <StyledView className="flex flex-col justify-center my-10 h-80">
          <StyledFlatList
            data={data}
            renderItem={({ item }) => <CaseContactListCard item={item} navigation={navigation} />}
            keyExtractor={(item) => item.name}
          />
        </StyledView>
      </StyledView>
      <StyledView className="flex-row pb-10 items-center justify-around h-1/5 w-screen bg-[#345073]">
        <StyledButton
          className="flex bg-[#ea5a4e] text-white rounded-3xl w-[120] h-[40]"
          title="My Cases"
          titleColor="white"
          onPress={() => navigation.navigate('CaseContactList')}
        />
        <StyledButton
          className="flex bg-[#ea5a4e] text-white rounded-3xl w-[90] h-[40]"
          title="Create"
          titleColor="white"
          onPress={() => navigation.navigate('CaseContactList')}
        />
        <StyledButton
          className="flex bg-[#ea5a4e] text-white rounded-3xl w-[120] h-[40]"
          title="Account"
          titleColor="white"
          onPress={() => navigation.navigate('AccountScreen')}
        />
      </StyledView>
    </StyledView>
  );
};

export default CaseContactListScreen;
