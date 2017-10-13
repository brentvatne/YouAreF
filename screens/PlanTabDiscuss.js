import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Input, Item } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput, Button, AsyncStorage} from 'react-native';

export default class PlanTabDiscuss extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      discuss:{
      },
      question:'',
    };
    this.onButtonPress = this.onButtonPress.bind(this);
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('token');
    
    fetch('http://192.168.43.217/api/public/plan/2',
    {
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
          discuss: responseJson.data.discussions.data
          
        }, function() {
          console.log(this.state.plans)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

/*  onButtonPress() {
  fetch('http://192.168.43.197/api/public/plan/2', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      google_id: this.props.navigation.state.params.id,
      user_name: this.props.navigation.state.params.name,
      college: this.state.college,
      gender: this.state.gender,
      email: this.props.navigation.state.params.email,
      phone: this.state.contact,
      address: this.state.address,
      degree: this.state.degree,
      cv: this.state.cv,
    })
  });
  console.log(this.props.navigation.state.params.id);
     
  }*/


  render() {

    return (
      <Container style={styles.container} >
        <Content>
          <View>
            <List dataArray={this.state.discuss}
              renderRow={(discussions) =>
                <ListItem>
                  <Body> 
                    <View style={styles.viewTextStyle}>
                      <Text>{discussions.question}</Text>
                    </View>
                  </Body>
                </ListItem>
              }>
            </List>  
          </View>
          
          <View style={ {flex:1, flexDirection:'row', alignSelf:'stretch' ,position:'relative',paddingTop: 15,paddingLeft:5} }>
            <View style={{ flex:3,height:60, alignSelf:'stretch', position:'relative' }}>
              <Item regular>
                <Input placeholder='Ask a question' />
              </Item>
            </View>
            <View style={{ flex:1, alignSelf:'stretch',position:'relative',paddingTop:9,paddingLeft:10}}> 
              <Button
                onPress={this.onButtonPress}
                title="Submit"
                color="#000000"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
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
  viewTextStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  viewTextBoxStyle: {
    flex:1,
    flexDirection: 'row'
  }

});