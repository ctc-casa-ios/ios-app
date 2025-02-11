import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { registerRootComponent } from 'expo';
import React, { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import Button from 'src/components/Button';
import {
  Provider as AuthProvider,
  Context as AuthContext,
} from 'src/components/context/AuthContext';
import { useAppSelector } from 'src/redux/hooks';
import AccountScreen from 'src/screens/AccountScreen';
import CaseContactCreateScreen from 'src/screens/CaseContactCreateScreen';
import CaseContactDetailScreen from 'src/screens/CaseContactDetailScreen';
import CaseContactListScreen from 'src/screens/CaseContactListScreen';
import LoginScreen from 'src/screens/LoginScreen';
import { selectAuth } from 'src/slices/authSlice';
import tw from 'twrnc';

import { store } from './redux/store';

const Tab = createBottomTabNavigator();
const RootStack = createNativeStackNavigator();

function CustomTabBar({ navigation }) {
  return (
    <View style={tw`flex-row pb-10 items-center justify-around h-1/8 w-full bg-[#345073] py-1`}>
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#ea5a4e] rounded-3xl w-[30] h-[10]`}
        textStyle={tw`text-xl font-bold text-white`}
        title="My Cases"
        onPress={() => navigation.navigate('CaseContactListScreen')}
      />
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#ea5a4e] rounded-3xl w-[25] h-[10]`}
        textStyle={tw`text-xl font-bold text-white`}
        title="Create"
        onPress={() => navigation.navigate('CaseContactCreateScreen')}
      />
      <Button
        buttonStyle={tw`flex justify-center items-center bg-[#ea5a4e] rounded-3xl w-[30] h-[10]`}
        textStyle={tw`text-xl font-bold text-white`}
        title="Account"
        onPress={() => navigation.navigate('AccountScreen')}
      />
    </View>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name="CaseContactListScreen" component={CaseContactListScreen} />
      <Tab.Screen name="AccountScreen" component={AccountScreen} />
      <Tab.Screen name="CaseContactCreateScreen" component={CaseContactCreateScreen} />
      <Tab.Screen name="CaseContactDetailScreen" component={CaseContactDetailScreen} />
    </Tab.Navigator>
  );
}

function MainApp() {
  const { state, tryLocalSignin } = useContext(AuthContext);
  const authState = useAppSelector(selectAuth);
  // Attempt to restore token from AsyncStorage when the app starts
  /*
  useEffect(() => {
    tryLocalSignin();
  }, []);
  */

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        {authState.isSignedIn ? (
          <RootStack.Screen
            name="MainTabs"
            component={TabNavigator}
            options={{ headerShown: false }}
          />
        ) : (
          <RootStack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function App() {
  return (
    <AuthProvider>
      <Provider store={store}>
        <MainApp />
      </Provider>
    </AuthProvider>
  );
}

registerRootComponent(App);
