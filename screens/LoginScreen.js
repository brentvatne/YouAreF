import React from 'react';
import Expo from 'expo';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Icon } from 'native-base';
import { StyleSheet, Image, View, TabNavigator, ListView, ActivityIndicator, TouchableOpacity, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
        auth:{},
    }
  }

  /*componentDidMount() {
    AsyncStorage.getItem("key").then((value) => {
    	this.setState({"key":value});
    });
  }

  getInitialState() {
  	return { };
  }*/

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

  /*displayData = async () => {
    try {
      let key = await AsyncStorage.getItem('key');
      alert(key);
      
    } catch (error) {
      alert(error);
    }
  }

  saveData() {
    
      let key = 'Anshul'
      AsyncStorage.setItem('key',key);
     
  } */




  onLoginPress = async () => {
    const result = await this.signInWithGoogleAsync();
    if (result.type === 'success') {
    	fetch('http://192.168.43.197/api/public/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          gid: result.user.id,
          email: result.user.email,
        })
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          auth: responseJson
        }, function() {
          console.log(this.state.auth);
          
        });
      });

        /*let key = 'Anshul';
           AsyncStorage.setItem("key",key); */

		  this.props.navigation.navigate('SignUpScreen', { id: `${result.user.id}`, name: `${result.user.name}`, email: `${result.user.email}`})
      }

  }

  render() {
  	 const { navigate } = this.props.navigation;

    return (
    	<Container style={styles.container}>
	    	<Content>
	    		{/*<Text>{this.state.mykey}</Text>*/}
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

	   			{/*<TouchableOpacity onPress={this.displayData}> 
		       		<Text>Display</Text>
		       	</TouchableOpacity>
		       	<TouchableOpacity onPress={this.saveData}> 
		       		<Text>Save</Text>
		       	</TouchableOpacity> */}

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