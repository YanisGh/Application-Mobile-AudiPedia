import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ConnexionPage from "../screens/ConnexionPage";
import AudiR8 from "../screens/AudiR8";
import AudiA1 from "../screens/AudiA1";
import allModels from "../screens/allModels";
import AudiETron from "../screens/AudiETron";
import searchedModel from "../screens/searchedModel"

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
    },
    allModels: {
        screen: allModels,
        navigationOptions: {
            headerShown: false,
          }
    },
    AudiR8: {
        screen: AudiR8,
        navigationOptions: {
            headerShown: false,
          }
    },
    AudiA1: {
        screen: AudiA1,
        navigationOptions: {
            headerShown: false,
          }
    },
    AudiETron: {
        screen: AudiETron,
        navigationOptions: {
            headerShown: false,
          }
    },
    searchedModel: {
        screen: searchedModel,
        navigationOptions: {
            headerShown: false,
          }
    },
    }

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);