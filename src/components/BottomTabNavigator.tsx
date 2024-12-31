import React from 'react';
import { View } from 'react-native';

import tw from 'twrnc';

import Button from '../components/Button';

interface Props {
  navigation: any;
  style?: any;
  className?: string;
}

const BottomTabNavigator: React.FC<Props> = ({ style, navigation }) => {
  return (
    <View style={style}>
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#ea5a4e] rounded-3xl w-[30] h-[10]`}
	textStyle={tw`text-xl font-bold text-white`}
        title="My Cases"
        onPress={console.log("1")}
      />
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#ea5a4e] rounded-3xl w-[25] h-[10]`}
	textStyle={tw`text-xl font-bold text-white`}
        title="Create"
        onPress={console.log("2")}
      />
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#ea5a4e] rounded-3xl w-[30] h-[10]`}a
	textStyle={tw`text-xl font-bold text-white`}
        title="Account"
        onPress={console.log("3")}
      />
    </View>
  );
};

export default BottomTabNavigator;
