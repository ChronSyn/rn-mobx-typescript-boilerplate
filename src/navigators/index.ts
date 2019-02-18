import { createStackNavigator, createAppContainer } from "react-navigation";
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import DemoScreen from '../screens/DemoScreen/DemoScreen';

const AppMainStack = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Demo: {
    screen: DemoScreen
  }
});

const AppContainer = createAppContainer(AppMainStack)
export default AppContainer;