import React from 'react';
import { View, Text, Image } from 'react-native';

const App = () => {
  return (

    <View className="flex-1 items-center justify-center bg-white">
            <Image
              source={require('./ctc-logo.png')}
              style={{ width: 100, height: 100 }}
              className="mb-5"
              />
      <Text className="text-red-500 text-3xl font-bold">🎉 Congratulations 🥳</Text>
      <Text className="text-red-500 text-xl mt-2">Setup Complete</Text>
    </View>
  );
};

export default App;
