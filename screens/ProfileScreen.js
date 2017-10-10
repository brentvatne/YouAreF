import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator } from 'native-base';
import { ScrollView, StyleSheet, View, Image,} from 'react-native';
import { Button } from 'react-native-elements';
import Hyperlink from 'react-native-hyperlink';

export default class ProfileScreen extends Component {
  
  static navigationOptions = {
    title: 'Profile',
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
              <Hyperlink linkDefault={ true }>
                <Text style={styles.linkStyle} > singhalok641.github.io </Text>
              </Hyperlink>
            </ListItem>
          </List>

          <View style = {styles.loginButton}>
            <Button
                onPress={() => navigate('BankDetailsScreen')}
                title="ADD BANK DETAILS"
                color='white'
                raised
                backgroundColor='black'
                fontWeight='bold'
                fontSize={18}
              />
          </View>

          <View style = {styles.loginButton}>
            <Button
                onPress={() => navigate('BankDetailsScreen')}
                title="LOGOUT"
                raised
                color='white'
                backgroundColor='black'
                fontWeight='bold'
                style = {styles.loginButton}
              />
          </View>         
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
  linkStyle: {
    fontSize:16,
    color: '#2980b9',
    paddingTop: 10,
  },
});