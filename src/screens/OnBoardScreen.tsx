import { View, Image, Text } from 'react-native';

import tw from 'twrnc';

const ctcLogo = require('assets/ctc-logo.png');

function OnBoardScreen() {
  return (

	<View style={tw`flex-1 items-center justify-center bg-white`}>
    <Image
      source={ctcLogo}
      style={tw`w-25 h-25 mb-5`}
    />
    <Text style={tw`text-red-500 text-3xl font-bold`}>🎉 Congratulations 🥳</Text>
    <Text style={tw`text-red-500 text-xl mt-2`}>Setup Done 🚀</Text>
    </View>

  );
};

export default OnBoardScreen;
