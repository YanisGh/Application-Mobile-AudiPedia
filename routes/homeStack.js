import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ConnexionPage from "../screens/ConnexionPage";

const screens = {
    
    ConnexionPage: {
        screen: ConnexionPage,
        navigationOptions: {
            headerShown: false,
          }
    },
    Home: {
        screen: Home,
        navigationOptions: {
            headerShown: false,
          }
    }
    
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);