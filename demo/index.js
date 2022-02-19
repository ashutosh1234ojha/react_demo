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
import GlobalHomeScreenPass from './globalstyle/screens/GlobalHomeScreenPass';
import BaseApi from './apihit/BaseApi'
import BaseNotification from './notification/BaseNotification'
import PushNotification from "react-native-push-notification";


PushNotification.configure({

      // (required) Called when a remote is received or opened, or local notification is opened
  onNotification: function (notification) {
    console.log("NOTIFICATION:", notification);

    // process the notification

    // (required) Called when a remote is received or opened, or local notification is opened
    notification.finish(PushNotificationIOS.FetchResult.NoData);
  },
  requestPermissions: Platform.OS === 'ios'
});










// AppRegistry.registerComponent(appName, () => HomeScreen);
AppRegistry.registerComponent(appName, () => BaseNotification);

