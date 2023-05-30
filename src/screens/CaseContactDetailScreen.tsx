import React from 'react';
import { styled } from 'nativewind';
import tw from 'tailwind-react-native-classnames';

import { View, Text, FlatList } from 'react-native';

import Button from '../components/Button';
import CaseContactDetailCard from '../components/CaseContactDetailCard';

const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledText = styled(Text);
const StyledCaseContactDetailCard = styled(CaseContactDetailCard);
const StyledFlatList = styled(FlatList);

const CaseContactDetailScreen = ({ navigation }) => {
  const data = [
    {
      name: `CASA, Education`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      input: 'luctus rutrum turpis. Aliquam erat volutpat.',
    },
    {
      name: `CASA, Health`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      input: 'luctus rutrum turpis. Aliquam erat volutpat.',
    },
    {
      name: `CASA, Family`,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      input: 'luctus rutrum turpis. Aliquam erat volutpat.',
    },
  ];

  return (
    <StyledView className="flex items-center gap-3 flex-1 bg-[#d5d7da]">
      <StyledView className="flex-col justify-center h-1/6">
        <StyledText className="flex pt-4 text-3xl font-bold">🦋CINA-11-1002</StyledText>
      </StyledView>
      <StyledView
        className="flex flex-col bg-white rounded-xl items-center w-80 py-4 h-4/6"
        style={tw`shadow-xl`}>
        <StyledFlatList
          data={data}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ height: 40 }} />}
          renderItem={({ item }) => <StyledCaseContactDetailCard item={item} />}
          keyExtractor={(item) => item.name}
        />
      </StyledView>
      <StyledView className="flex-row pb-10 items-center justify-around h-1/6 w-screen bg-[#345073]">
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

export default CaseContactDetailScreen;
