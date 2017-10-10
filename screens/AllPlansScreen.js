import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Icon } from 'native-base';
import { StyleSheet, Image, View, TabNavigator, ListView, ActivityIndicator } from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
export default class CampaignsScreen extends Component {
  
  static navigationOptions = {
    title: 'Plans',
    headerLeft: null,
    headerTitleStyle: { alignSelf: 'center' },
  };

   constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      plans:{}
    }
  }

  componentDidMount() {
    return fetch('http://192.168.43.197/api/public/plans')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          plans: responseJson.data
        }, function() {
          
        });
      })
      .catch((error) => {
        console.error(error);
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

    // var plans = [    {"id":"1","name":"Amazon A","difficulty":"Easy",likes:"20",price:"200"},
    //                 {"id":"2","name":"Snapdeal B","difficulty":"Easy",likes:"63",price:"350"},
    //                 {"id":"4","name":"Instamojo A","difficulty":"Easy",likes:"2",price:"2000"},
    //                 {"id":"5","name":"Thyrocare C","difficulty":"Hard",likes:"59",price:"2400"},
    //                 {"id":"6","name":"MakeMyTrips B","difficulty":"Easy",likes:"12",price:"1200"},
    //             ];
    
    return (
      <Container style={styles.container} >
        <Content>
          <List dataArray={plans}
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
                  <View style={{ left:110 }}>
                    <EvilIcons name="like" size={30} color="#000000" />
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