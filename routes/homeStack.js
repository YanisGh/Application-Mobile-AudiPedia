import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ConnexionPage from "../screens/ConnexionPage";
import AudiR8 from "../screens/AudiR8";
import allModels from "../screens/allModels";
import AudiETron from "../screens/AudiETron";
import searchedModel from "../screens/searchedModel"
import AudiSQ5 from "../screens/AudiSQ5";
import Database from "../screens/Database";
import Favorites from "../screens/Favorites";

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
            gestureEnabled: false
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
    AudiSQ5: {
        screen: AudiSQ5,
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
    Database: {
        screen: Database,
        navigationOptions: {
            headerShown: false,
        }
    },
    Favorites: {
        screen: Favorites,
        navigationOptions: {
            headerShown: false,
        }
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
