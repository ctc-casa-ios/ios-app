

/*

import { View, Image } from 'react-native';

// import AuthForm from 'src/components/AuthForm';

const casaLogo = require('assets/casaLogo.png');
const rfgLogo = require('assets/rfgLogo.png');

function LoginScreen() {
  return (

    <View
     className="flex-1 justify-between items-center gap-3"
     style={{ backgroundColor: "#345073" }}>

      <View className="flex flex-1 justify-end">

        <Image
         source={casaLogo}
         className="self-center"
         style={{ width: 80, height: 80 }}
        />

      </View>

      <View className="flex flex-1 justify-start items-center gap-4 w-full">





      </View>

      <View className="flex flex-1 items-center">

        <Image
         source={rfgLogo}
         style={{ width: 256, resizeMode: 'contain' }}
        />

      </View>
    </View>

  );
};

export default LoginScreen;
 

*/

/*
import { View, Image } from 'react-native';

// import AuthForm from 'src/components/AuthForm';
const casaLogo = require('assets/casaLogo.png');
const rfgLogo = require('assets/rfgLogo.png');

function LoginScreen(
) {
  return (

    <View className="h-full w-full flex-1 justify-between items-center gap-3" style={{ backgroundColor: "#345073" }}>

       <View className="flex flex-1 justify-end">

        <Image
         source={casaLogo}
         className="self-center"
         style={{ width: 80, height: 80 }}
        />

      </View>

       <View className="flex flex-1 justify-start items-center gap-4 w-full">





      </View>

       <View className="flex flex-1 items-center">

        <Image
         source={rfgLogo}
         style={{ width: 256, resizeMode: 'contain' }}
        />

      </View>
    </View>

  );
};

export default LoginScreen;
*/








import { View, Image } from 'react-native';

import AuthForm from 'src/components/AuthForm';
const casaLogo = require('assets/casaLogo.png');
const rfgLogo = require('assets/rfgLogo.png');

function LoginScreen(
) {
  return (

    <View
     style={{ backgroundColor: "#345073"}} 
     className="flex flex-1 justify-between items-center gap-3"> 
     
      {/* Logo Section */}
      <View className="flex flex-1 justify-end">

        <Image
         source={casaLogo} 
         className="self-center"
         style={{ width: 80, height: 80 }}	 
             />

      </View>

      {/* Authentication Form Section */}
      <View className="flex flex-1 justify-start items-center gap-4 w-full">


	<AuthForm
          className="flex text-white border-white border border-2 border-rounded rounded-3xl w-[300] h-10"
        />


      </View>

      {/* Footer Section */}
      <View className="flex flex-1 items-center">

        <Image
         source={rfgLogo}
         style={{ width: 256, resizeMode: 'contain' }}
        />

      </View>
    </View>

  );
};

export default LoginScreen;

