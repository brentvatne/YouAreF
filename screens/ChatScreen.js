import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Body, Separator, Button } from 'native-base';
import { ScrollView, StyleSheet, View, Image, Text, TextInput } from 'react-native';

export default class FaqScreen extends Component {
  
  static navigationOptions = {
    title: 'Chat',
  };

  

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
  questionStyle: {
    fontWeight:'bold',
    fontSize:18
  },
  answerStyle: {
    fontSize:16
  },
});