import {
  createStackNavigator,
  createNavigationContainer
} from "react-navigation";
import Home from "./screens/Home";
import DemoScreen from "./screens/DemoScreen";

const RootNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    DemoScreen: { screen: DemoScreen }
  },
  {
    initialRouteKey: "Home"
  }
);

export default createNavigationContainer(RootNavigator);
