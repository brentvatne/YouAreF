import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Container, Content, Button, Input, Item } from 'native-base';

export default class LoginScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  
  render() {

    const { navigate } = this.props.navigation;
    
    return (
      <Container style={styles.container}>
        <Content>
          <View >
            <Image 
             style={styles.image} 
             source={require('../logo.jpg')} 
             />
             <Item>
              <Input placeholder="Email" />
            </Item>
            <Item>
              <Input placeholder="Password" />
            </Item>
            <Button info style={styles.loginButton} onPress={() => navigate('Main')}>
              <Text style={styles.loginButtonText}> Login </Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
  alignSelf: 'center',
  marginTop: 20, 
  resizeMode: 'contain',
  height: 300,
  width: 300,
  },
  loginButton: {
  alignItems: 'center',  
  alignSelf: 'center',
  marginTop: 20, 
  width: 300,
  },
  loginButtonText: {
    textAlign: 'center',
    color:'#fff',
    fontSize: 18,
    fontWeight: '200'
  },
});