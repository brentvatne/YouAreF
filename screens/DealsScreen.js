import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text,
  Card,
  CardItem} from 'native-base';

import { Font } from 'expo';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Deals',
  };

  render() {
    var deals = [    {"name":"Anshul Mehta","details":"Anshul Mehta 123"},
                    {"name":"Alok Singh","details":"Anshul 123"}
                ];
    return(
      
    );
  }
}

  
