import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import LogInScreen from "@screens/LogInScreen";
import NameDobScreen from "../screens/NameDobScreen";
import CreateProfileScreen from "../screens/CreateProfileScreen";
import AddFriendsScreen from "../screens/AddFriendsScreen";
import AccountCreatedScreen from "../screens/AccountCreatedScreen";
import HomeScreen from "../screens/HomeScreen";

// Define TypeScript types for navigation
export type RootStackParamList = {
  Login: undefined;
  NameDob: undefined;
  CreateProfile: undefined;
  AddFriends: undefined;
  AccountCreated: undefined;
  Home: undefined;
};

// Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

const StartupNavigator = () => {
    console.log("LogIN Screeen",LogInScreen.name);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login"  component={LogInScreen}/>
        <Stack.Screen name="NameDob" component={NameDobScreen} />
        <Stack.Screen name="CreateProfile" component={CreateProfileScreen} />
        <Stack.Screen name="AddFriends" component={AddFriendsScreen} />
        <Stack.Screen name="AccountCreated" component={AccountCreatedScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StartupNavigator;
