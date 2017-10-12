import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput, WebView } from 'react-native';

export default class FaqScreen extends Component {
  
  static navigationOptions = {
    title: 'Chat',
  };

  render() {
    
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container} >
        <WebView source={{uri: 'https://github.com/singhalok641'}} style={{marginTop: 20}} />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  questionStyle: {
    fontWeight:'bold',
    fontSize:18
  },
  answerStyle: {
    fontSize:16
  },
});