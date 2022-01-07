// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { StatusBar } from 'react-native';
import COLORS from '../assest/const/colors';


const Stack = createNativeStackNavigator();

function Navigation() {
  return (
    <NavigationContainer >
        <StatusBar barStyle='dark-content' backgroundColor={COLORS.white}/>
      <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;