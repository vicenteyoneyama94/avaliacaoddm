import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TodoListScreen from './src/screens/TodoListScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Listagem" component={TodoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;