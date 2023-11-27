import React from 'react';
import { AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';

const Stack = createStackNavigator();

const Main = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={App} />
    </Stack.Navigator>
  </NavigationContainer>
);

AppRegistry.registerComponent('app-ddm', () => Main);