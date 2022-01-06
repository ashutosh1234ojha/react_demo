/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Appp from './Appp';
import MyFlex from './MyFlex';
import MyFlatList from './MyFlatList';
import MainNav from './bottomTabs/MainNav';
import CustomRoute from './CustomRoute';
import HomeScreen from './stacknavigator/HomeScreen';








// AppRegistry.registerComponent(appName, () => HomeScreen);
AppRegistry.registerComponent(appName, () => MainNav);

