import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text, Body, Icon } from 'native-base';
import { StyleSheet, Image, View, TabNavigator, ListView, ActivityIndicator, AsyncStorage } from 'react-native';

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
    try {
      let token = await AsyncStorage.getItem('token');
      console.log(token);
      if(token!== null) {
      fetch('http://192.168.43.197/api/public/checkstatus',{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
          'Host': '192.168.43.197'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          checkstatus: responseJson
        }, function() {
          if(this.state.checkstatus.status === "accepted"){
          this.props.navigation.navigate('Main');  
          }
          else {
           this.props.navigation.navigate('approveScreen'); 
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
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3498db',
  },
});