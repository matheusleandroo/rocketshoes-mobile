import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Header from './components/Header';

import Home from './pages/Home';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      // headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerTitle: Header,
        headerStyle: {
          backgroundColor: '#191920',
        },
        headerTintColor: 'red',
        headerLeft: null,
      },
    }
  )
);

export default Routes;
