import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text, Body, Icon } from 'native-base';
import { StyleSheet, Image, View, TabNavigator, ListView, ActivityIndicator, AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

export default class SplashScreen extends Component {
  
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      checkstatus:{},
    }
  }


  componentDidMount = async () => {
    const resetActionLogin = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Main'})
      ]
    });

    const resetActionApprove = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'approveScreen'})
      ]
    });

    try {
      let token = await AsyncStorage.getItem('token');
      console.log(token);
      if(token!== null) {
      fetch('http://byld.tech/checkstatus',{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
          'Host': 'byld.tech'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          checkstatus: responseJson
        }, function() {
          if(this.state.checkstatus.status === "accepted"){
          this.props.navigation.dispatch(resetActionLogin);  
          }
          else {
           this.props.navigation.dispatch(resetActionApprove); 
          }
          
        });
      })
      .catch((error) => {
        console.error(error);
      });
        

      }
      else {
       this.props.navigation.navigate('Login'); 
      }
    } 
    catch (error) {
      alert(error);
    }
  }


	render() {	

	
    const { navigate } = this.props.navigation;

    
    return (
      <Container style={styles.container} >
        <Content>
          <Image
           style={styles.imageStyle}
             source={require('../assets/images/YOUAREF.png')}
          />
        </Content>
      </Container>
    );
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
    marginTop:108,
  },
});