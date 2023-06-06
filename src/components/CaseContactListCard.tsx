import React from 'react';
import { styled } from 'nativewind';
import tw from 'tailwind-react-native-classnames';

import { View, Text, TouchableOpacity } from 'react-native';

import Button from '../components/Button';

const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledText = styled(Text);

const CaseContactListCard = ({ item, navigation }) => {
  return (
    <TouchableOpacity style={tw`py-3`}>
      <StyledButton
        className="flex w-80 h-[60] bg-[#ffffff] text-black rounded-3xl font-bold"
        style={tw`shadow-lg text-lg`}
        title={item.name}
        titleColor="black"
        onPress={() => navigation.navigate('CaseContactDetail')}
      />
    </TouchableOpacity>
  );
};

export default CaseContactListCard;
