import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createAppContainer(
  createStackNavigator({
    Main: {
      screen: Main,
      navigationOptions: {
        title: 'DevMap'
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        title: 'Perfil do GitHub',
      }
    }
  },  {
    defaultNavigationOptions: {
      headerTintColor: '#fff', 
      headerStyle: {
        backgroundColor: '#7D40E7'
      },
    }
  }

  )
)

export default Routes;