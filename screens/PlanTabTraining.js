import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Button } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput } from 'react-native';

export default class PlanTabTraining extends Component {

  render() {
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
  thumbnailStyle: {
    resizeMode: 'contain',
    marginTop: 20,
    borderColor: '#ddd',
    borderWidth: 1,
    height: 100,
    width: 100,
    alignSelf:'center'
  },
  Button: {
    marginTop:5,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  ButtonText: {
    fontSize: 18,
  },
  textInputViewStyle: {
    padding:20,
  },
  textInputStyle: {
    fontSize: 18,
    marginBottom:12,
    height:50,
    fontWeight: '100'
  },
});