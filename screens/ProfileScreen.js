import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Button } from 'native-base';
import { ScrollView, StyleSheet, View, Image } from 'react-native';

export default class PlansScreen extends Component {
  
  static navigationOptions = {
    title: 'Profile',
    headerLeft: null,
  };

  render() {
    
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container} >
        <Content>
          <Image 
            style={styles.thumbnailStyle} 
            source={{ uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg' }}
          />

          <List>
            <ListItem>
              <Text>Anshul Mehta</Text>
            </ListItem>
            <ListItem>
              <Text>anshul.mk97@gmail.com</Text>
            </ListItem>
            <ListItem>
              <Text>+919717953260</Text>
            </ListItem>
            <ListItem>
              <Text>Male</Text>
            </ListItem>
            <ListItem>
              <Text>New Delhi,India</Text>
            </ListItem>
            <ListItem>
              <Text>CV link</Text>
            </ListItem>
          </List>

          <Button info rounded style={styles.loginButton}>
              <Text style={styles.loginButtonText}> Add Bank Details </Text>
          </Button>

          <Button danger rounded style={styles.loginButton}>
              <Text style={styles.loginButtonText}> Logout </Text>
          </Button>
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
  loginButton: {
    marginTop: 25,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  loginButtonText: {
    fontSize: 18,
  },
});