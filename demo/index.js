/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Appp from './Appp';
import MyFlex from './MyFlex';
import MyFlatList from './MyFlatList';
import TopTabMain from './bottomTabs/TopTabMain';
import DrawerMain from './navigationDrawer/DrawerMain';
import HomeScreenPass from './passingData/HomeScreenPass';
import CustomRoute from './CustomRoute';









// AppRegistry.registerComponent(appName, () => HomeScreen);
AppRegistry.registerComponent(appName, () => HomeScreenPass);

