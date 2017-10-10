import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Button } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput } from 'react-native';

export default class SignUpScreen extends Component {
  
  static navigationOptions = {
    header: null,
  };

  constructor(props,navigation) {
    super(props);
    this.state = {
      name: '',
      email: '',
      gender: '',
      cv: '',
      address:'',
      contact:'',
    };
  }

  onButtonPress = async () => {
  fetch('http://192.168.43.197/api/public/userdetail/7', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: '7',
      user_name: 'yourOtherValue',
      college: 'yourOtherValue',
      gender: 'yourOtherValue',
      email: 'anshul.mk97@gmail.com',
      phone: '9717953260',
      address: 'yourOtherValue',
      degree: 'yourOtherValue',
      cv: 'yourOtherValue',
    })
  });
  this.props.navigation.navigate('approveScreen') 
  }

  render() {
    
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    return (
      <Container style={styles.container} >
        <Content>
          <View style={styles.view}>
            <Text style={styles.text}>
              Become an Ambassador
            </Text>
            <TextInput
              style={{height: 50}}
              placeholder="Full Name"
              value={params.name}
              editable={false}
            />
            <TextInput
              style={{height: 50}}
              placeholder="Email"
              value={params.email}
              editable={false}
            />
            <TextInput
              style={{height: 50}}
              placeholder="Contact Number"
              onChangeText={(contact) => this.setState({contact})}
              value={this.state.contact}
            />
            <TextInput
              style={{height: 50}}
              placeholder="Gender"
              onChangeText={(gender) => this.setState({gender})}
              value={this.state.gender}
            />
            <TextInput
              style={{height: 50}}
              placeholder="Address"
              onChangeText={(address) => this.setState({address})}
              value={this.state.address}
            />
            <TextInput
              style={{height: 50}}
              placeholder="Link to CV"
              onChangeText={(cv) => this.setState({cv})}
              value={this.state.cv}
            />
          </View>
          <Button 
           info 
           rounded 
           style={styles.signupButton}
           onPress={this.onButtonPress}
           >
              <Text style={styles.signupButtonText}>Sign Up</Text>
          </Button>

           <Button 
           info 
           rounded 
           style={styles.signupButton}
           onPress={() => navigate('Main')}
           >
            <Text style={styles.signupButtonText}>Go ahead</Text>
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
  signupButton: {
    marginTop: 24,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  signupButtonText: {
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    alignSelf:'center',
    marginBottom:24
  },
  view: {
    flex:1,
    padding:32,
  },
});