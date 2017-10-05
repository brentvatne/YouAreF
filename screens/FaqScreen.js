import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Body, Separator, Button } from 'native-base';
import { ScrollView, StyleSheet, View, Image, Text, TextInput } from 'react-native';

export default class FaqScreen extends Component {
  
  static navigationOptions = {
    title: 'FAQs',
    headerLeft: null,
  };

  

  render() {
    
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container} >
        <Content>

        <List>
            <ListItem>
              <Body>
                <Text style={styles.questionStyle} >What is YouAreF ?</Text>
                <Text style={styles.answerStyle} >Its an app to connect offline retailers to online sellers.</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={styles.questionStyle}>Where is it available ?</Text>
                <Text style={styles.answerStyle} >Its an app to connect offline retailers to online sellers.</Text>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <Text style={styles.questionStyle}>How will i get my money ?</Text>
                <Text style={styles.answerStyle} >Its an app to connect offline retailers to online sellers.</Text>
              </Body>
            </ListItem>
          </List>

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