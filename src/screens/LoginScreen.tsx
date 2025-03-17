import { View, Image } from 'react-native';
import AuthForm from '../components/AuthForm';
import tw from 'twrnc';

// note to self: removed previously added "w-65 h-auto pb-20 z-1" from rfgLogo

const casaLogo = require('../../assets/casaLogo.png');
const rfgLogo = require('../../assets/rfgLogo.png');

function LoginScreen() {
  return (
    <View style={tw`justify-between items-center gap-3 flex-1 bg-[#345073]`}>
      <View style={tw`flex flex-1 flex-col h-1/3 w-screen justify-end`}>
        <Image source={casaLogo} style={tw`w-20 h-20 self-center`} />
      </View>

      <View style={tw`justify-start items-center gap-4 flex h-1/3 w-screen bg-[#345073] pb-20`}>
        <AuthForm />
      </View>

      <View style={tw`flex h-1/3 w-screen items-center`}>
        <Image source={rfgLogo} style={tw``} />
      </View>
    </View>
  );
}

export default LoginScreen;
