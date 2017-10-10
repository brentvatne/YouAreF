import React from 'react';
import Expo from 'expo';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Icon } from 'native-base';
import { StyleSheet, Image, View, TabNavigator, ListView, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
        plans:''
    }
  }

  signInWithGoogleAsync = async () => {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: "612669964630-04vbqsbsvt3mjv0nr7nsa77erika2f9p.apps.googleusercontent.com",
        iosClientId: "612669964630-68qv7vej51qnlkccrdbu7jo2s4v4a1c2.apps.googleusercontent.com",
        scopes: ['profile','email'],
        behavior: "web",
      })

      if (result.type === 'success') {
        return result
      }
      return { cancelled: true }
    } catch (e) {
      return { error: e }
    }
  }


  onLoginPress = async () => {
    const result = await this.signInWithGoogleAsync();
    if (result.type === 'success') {
    	fetch('http://192.168.43.197/api/public/userdetail/{result.user.id}/{result.user.email}')
	      .then((responseJson) => {
	        this.setState({
	          plans: responseJson
	        }, function() {
	         console.log(this.state.plans); 
	        });
	      });
		this.props.navigation.navigate('SignUpScreen', { id: `${result.user.id}`, name: `${result.user.name}`, email: `${result.user.email}`})
      }

  }

  render() {
  	 const { navigate } = this.props.navigation;

    return (
    	<Container style={styles.container}>
	    	<Content>
		    	<Image
		    	 style={styles.imageStyle}
		         source={require('../assets/images/YOUAREF.png')}
		        />
		       	<TouchableOpacity onPress={this.onLoginPress}> 
		       	 	<Image 
		       	 	 style={styles.buttonImageStyle} 
		       	 	 source={require('../assets/images/google.png')} 
		       	 	/> 
		       	</TouchableOpacity>

            <Button 
              large
              title="DO IT LATER"
              color='white'
              backgroundColor='black'
              fontWeight='bold'
              borderRadius={10}
              buttonStyle = {styles.signupButton}
              onPress={() => navigate('Main')}
            />
	    	 </Content>
    	 </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fad30a',
  },
  imageStyle: {
    height: 300,
    width: 200,
    alignSelf:'center',
    marginTop:96,
  },
  buttonImageStyle: {
    height: 50,
    width: 200,
    alignSelf:'center',
    marginTop:24,
  },
});