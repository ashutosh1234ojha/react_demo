/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Appp from './Appp';
import MyFlex from './MyFlex';
import MyFlatList from './MyFlatList';
import CustomAlert from './CustomAlert';






// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => CustomAlert);

