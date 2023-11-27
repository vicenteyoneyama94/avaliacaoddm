import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../screens/Home';

const Navegacao = createStackNavigator(
  {
    Home: Home,
  },
  {
    initialRouteName: 'Home',
  }
);

export default createAppContainer(Navegacao);
