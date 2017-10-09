import React from 'react'
import Expo from 'expo'
import Button from 'react-native-button'

export default class LoginScreen extends React.Component {

  static navigationOptions = {
    header: null,
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
        this.props.navigation.navigate('Main')
      }

    // if there is no result.error or result.cancelled, the user is logged in
    // do something with the result
  }

  render() {
  	 const { navigate } = this.props.navigation;

    return (
    	<Button 
    	 onPress={this.onLoginPress}>
    	 Login
    	 </Button>
    )
  }
}