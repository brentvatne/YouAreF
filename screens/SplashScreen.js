import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Icon } from 'native-base';
import { StyleSheet, Image, View, TabNavigator, ListView, ActivityIndicator } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class SplashScreen extends Component {
  
  static navigationOptions = {
    header: null,
  };


  componentDidMount() {
    
  }


	render() {	

	
    const { navigate } = this.props.navigation;

    
    return (
      <Container style={styles.container} >
        <Content>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
});