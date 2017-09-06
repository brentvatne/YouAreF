import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import CampaignsScreen from '../screens/CampaignsScreen';
import ChatScreen from '../screens/ChatScreen';
import DealsScreen from '../screens/DealsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Campaigns: {
      screen: CampaignsScreen,
    },
    Deals: {
      screen: DealsScreen,
    },
    Chat: {
      screen: ChatScreen,
    },
    Profile: {
      screen: LinksScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName = Platform.OS === 'ios'
              ? `ios-home${focused ? '' : '-outline'}`
              : 'md-home';
            break;
          case 'Campaigns':
            iconName = Platform.OS === 'ios'
              ? `ios-search${focused ? '' : '-outline'}`
              : 'md-search';
              break;
          case 'Deals':
            iconName = Platform.OS === 'ios'
              ? `ios-checkbox${focused ? '' : '-outline'}`
              : 'md-checkbox';
              break;
          case 'Chat':
            iconName = Platform.OS === 'ios'
              ? `ios-chatboxes${focused ? '' : '-outline'}`
              : 'md-chatboxes';
            break;
          case 'Profile':
            iconName = Platform.OS === 'ios'
              ? `ios-person${focused ? '' : '-outline'}`
              : 'md-person';
            break;
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
