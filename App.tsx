import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import { View, Text, Image } from "react-native";

// import the screens of our app
import LoginScreen from "./src/screens/LoginScreen";
import CaseContactListScreen from "./src/screens/CaseContactListScreen";
import CaseContactDetailScreen from "./src/screens/CaseContactDetailScreen";
import CaseContactCreateScreen from "./src/screens/CaseContactCreateScreen";
import AccountScreen from "./src/screens/AccountScreen";

// this variable holds the navigation structure of our app
const switchNavigator = createSwitchNavigator({
  loginFlow: createStackNavigator({
    Login: LoginScreen,
  }),
  mainFlow: createMaterialBottomTabNavigator({
    caseContactListFlow: createStackNavigator({
      CaseContactList: CaseContactListScreen,
      CaseContactDetail: CaseContactDetailScreen,
    }),
    CaseContactCreate: CaseContactCreateScreen,
    Account: AccountScreen,
  }),
});

export default createAppContainer(switchNavigator);
