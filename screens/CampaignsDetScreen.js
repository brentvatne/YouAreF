import React, { Component } from 'react';
import { Container, Header, Content, List, Icon, ListItem, Thumbnail, Body, Card, CardItem, Text } from 'native-base';
import { View, Image, StyleSheet, AsyncStorage, ActivityIndicator, TouchableOpacity} from 'react-native';
import StarRating from 'react-native-star-rating';
import { Button } from 'react-native-elements';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

export default class CampaignsDetScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
    
  })

constructor(props) {
    super(props);
    this.state = {
      starCount: 0,
      isLoading: true,
      company:{
      },
      plans:{
      },
      res:{}
    };
  }  

componentDidMount = async () => {
    let token = await AsyncStorage.getItem('token');
    fetch(`http://192.168.43.217/api/public/company/${this.props.navigation.state.params.id}`,
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
          company: responseJson.data,
          plans: responseJson.data.plans.data
        }, function() {
          
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onStarRatingPress(rating) {
  this.setState({
    starCount: rating
  });

}

  onsubmitrating = async () => {
  
  let token = await AsyncStorage.getItem('token');
    
  fetch(`http://192.168.43.197/api/public/ratecompany/${this.props.navigation.state.params.id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      'Host': '192.168.43.197'
    },
    body: JSON.stringify({
      rating: this.state.starCount,
      
    })

  })
  .then((response) => response.json())
  .then((responseJson) => {
      this.setState({
        res: responseJson
       }, function() {
          if(this.state.res.status === "ok"){
            alert('Rating Submitted');
          }
          else if(this.state.res.title === "Already Rated!") {
           alert('You Have already rated'); 
          }
    });
  });
  }


            

  render() {

    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    var company_logo = this.state.company.logo;

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <Container style={styles.container}>
        <Content>
          <Image style={styles.image}  borderRadius={10} source={{uri: company_logo}} />
          <Text style={styles.thumbnailText}>{params.name}</Text>

          <View style={styles.viewSubHeadStyle}>
            <Text note>{this.state.company.enrolled} enrolled | </Text>
            <Text note>{this.state.company.total_plans} plans | </Text>
            <Text note>{this.state.company.rating}/5.0</Text>
          </View>

          <View style={styles.aboutViewStyle}>
            <Text style={styles.aboutTextStyle} note>{this.state.company.about}</Text>
          </View>

          <Text note style={{textAlign:'center',paddingTop:10}}>Rate this company</Text>

          <View style={styles.ratingViewStyle}>
            <View style={styles.ratingStyle}>
              <StarRating
                disabled={false}
                maxStars={5}
                starSize={18}
                rating={this.state.starCount}
                selectedStar={(rating) => this.onStarRatingPress(rating)}
              />
            </View>
            <TouchableOpacity onPress={this.submitrating}>
              <Text style={{ fontWeight:'bold', paddingTop:10}}>Submit</Text>
            </TouchableOpacity>
          </View>
          
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

  image: {
  alignSelf: 'center', 
  marginTop: 20,
  marginBottom: 10,  
  resizeMode: 'contain',
  borderColor: '#ddd',
  borderWidth: 1,
  height: 100,
  width: 100,
  },

  thumbnailText: {
    fontSize: 18,
    alignSelf: 'center',
  },

  viewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  ratingStyle: {
    width:130,
  },
  ratingViewStyle: {
    flexDirection: 'column',
    justifyContent: 'center',
    paddingBottom:15,
    paddingTop:8,
    alignItems: 'center',
  },

  aboutViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',

  },
  aboutTextStyle: {
    textAlign: 'justify',
    fontWeight: '100',
    lineHeight: 22
  },
  viewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewSubHeadStyle: {
    paddingTop: 10,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  

});