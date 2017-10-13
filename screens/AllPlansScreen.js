import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Icon } from 'native-base';
import { StyleSheet, Image, View, TabNavigator, ListView, ActivityIndicator, AsyncStorage, TouchableOpacity } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class CampaignsScreen extends Component {
  
  static navigationOptions = {
    title: 'Plans',
    headerLeft: null,
  }

   constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      plans:{}
    }
  }
  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('token');
    
    fetch('http://192.168.43.217/api/public/plans',{
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
          'Host': '192.168.43.217'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          plans: responseJson.data,
          
        }, function() {
          console.log(this.state.plans)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onButtonPress= async (id) => {
  
  let token = await AsyncStorage.getItem('token');
    
  fetch(`http://192.168.43.217/api/public/likePlan/${id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      'Host': '192.168.43.217'
    }

  })
  .then((response) => response.json())
  .then((responseJson) => {
      this.setState({
        res: responseJson
       }, function() {
        if(this.state.res.status === "ok"){
          alert('Liked');
        }
        else if(this.state.res.title === "Already Liked!"){
          alert('Already Liked');
        }
        
    });
  }); 
  }

	render() {	

	if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
    
    const { navigate } = this.props.navigation;
    
    return (
      <Container style={styles.container} >
        <Content>
          <List dataArray={this.state.plans}
            renderRow={(plan) =>
            <ListItem onPress={() => navigate('PlansScreen', { id: `${plan.id}`, name: `${plan.name}`})}>
              <Image style={styles.thumbnailStyle} source={{ uri: plan.logo }} />
              <Body>
                <View style={styles.viewTextStyle}>
                  <Text>{plan.name}</Text>
                  <Text note>Rs {plan.price_of_product}</Text>
                </View>
                <View style={styles.viewTextStyle}>
                  <Text note >{plan.difficulty}</Text>
                  <View style={{ left:90 }}>
                  <TouchableOpacity onPress={() => this.onButtonPress(plan.id)}>
                    <EvilIcons name="like" size={30} color="#000000" />
                  </TouchableOpacity>
                  </View>
                  <View style={{ top:5 }}>
                    <Text note> 
                      {plan.likes}
                    </Text>
                  </View>
                </View>
              </Body>
            </ListItem>
          }>
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
  thumbnailStyle: {
    resizeMode: 'contain',
    borderColor: '#ddd',
    borderWidth: 1,
    height: 60,
    width: 60,
  },
  viewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});