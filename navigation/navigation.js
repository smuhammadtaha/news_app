// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { StatusBar } from 'react-native';
import COLORS from '../assest/const/colors';
import Details from '../screens/Details';
import Saved from '../screens/Saved';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
        <StatusBar barStyle='dark-content' backgroundColor={COLORS.white}/>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="Saved" component={Saved} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;