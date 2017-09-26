import { Notifications } from 'expo';
import React from 'react';
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import CampaignsDetScreen from '../screens/CampaignsDetScreen';
import PlansScreen from '../screens/PlansScreen';
import DealsDetScreen from '../screens/DealsDetScreen';
import ChatScreen from '../screens/ChatScreen';
import DealsScreen from '../screens/DealsScreen';
import CampaignsScreen from '../screens/CampaignsScreen';
import TrainingScreen from '../screens/TrainingScreen';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
    CampaignsDetScreen: {
      screen: CampaignsDetScreen,
    },
    PlansScreen: {
      screen: PlansScreen,
    },
    DealsDetScreen: {
      screen: DealsDetScreen,
    },
    ChatScreen: {
      screen: ChatScreen,
    },
    CampaignsScreen: {
      screen: CampaignsScreen,
    },
    DealsScreen: {
      screen: DealsScreen,
    },
    TrainingScreen: {
      screen: TrainingScreen,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this._notificationSubscription = this._registerForPushNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  _registerForPushNotifications() {
    // Send our push token over to our backend so we can receive notifications
    // You can comment the following line out if you want to stop receiving
    // a notification every time you open the app. Check out the source
    // for this function in api/registerForPushNotificationsAsync.js
    registerForPushNotificationsAsync();

    // Watch for incoming notifications
    this._notificationSubscription = Notifications.addListener(
      this._handleNotification
    );
  }

  _handleNotification = ({ origin, data }) => {
    console.log(
      `Push notification ${origin} with data: ${JSON.stringify(data)}`
    );
  };
}