import React from 'react';
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
      headerBackTitleVisible: false,
      defaultNavigationOptions: navigation => ({
        headerTitle: <Header {...navigation} />,
        headerStyle: {
          backgroundColor: '#191920',
        },
        headerLeft: null,
      }),
    }
  )
);

export default Routes;
