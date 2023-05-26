import React from 'react';
import { styled } from 'nativewind';

import { View, Text } from 'react-native';

import Button from '../components/Button';

const StyledView = styled(View);
const StyledButton = styled(Button);
const StyledText = styled(Text);

const CaseContactDetailCard = ({ item }) => {
  return (
    <StyledView className="flex justify-between flex-col items-center rounded-xl border-b-4 w-[300] border-slate-300/70 border-x-2 h-[180] pb-8 px-6">
      <StyledView>
        <StyledText className="flex text-center text-lg font-bold text-[#345073]">
          {item.name}
        </StyledText>
        <StyledText className="flex text-center text-md text-[#b6b6b6] font-bold">
          {item.description}
        </StyledText>
      </StyledView>
      <StyledText className="flex text-center justify-end text-md font-bold">
        {item.input}
      </StyledText>
    </StyledView>
  );
};

export default CaseContactDetailCard;
