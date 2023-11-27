import React from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BemVindo from './src/components/Bem-vindo';
import TeladePerfil from './src/components/Perfil';
import Cabecalho from './src/components/Cabeçalho';
import InformacaoUser from './src/components/InformacaoUser';
import Header from './src/components/Cabeçalho';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={BemVindo} />
        <Stack.Screen name="Profile" component={TeladePerfil} />
        <Stack.Screen name="Cabecalho" component={Header}/>
        <Stack.Screen name="InformacaoUser" component={InformacaoUser}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
