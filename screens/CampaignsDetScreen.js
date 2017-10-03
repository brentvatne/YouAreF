import React, { Component } from 'react';
import { Container, Header, Content, List, Icon, ListItem, Thumbnail, Body, Card, CardItem, Button, Text } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';
import StarRating from 'react-native-star-rating';


export default class CampaignsDetScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`
    
  });

constructor(props) {
    super(props);
    this.state = {
      starCount: 0
    };
  }  


onStarRatingPress(rating) {
  this.setState({
    starCount: rating
  });
}            

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    var company = {
                   "id":"1",
                   "name":"Amazon",
                   "logo":"asas",
                   "type":"Wholesale",
                   "rating":"4.6",
                   "enrolled":"933",
                   "about":"Amazon.com, Inc., doing business as Amazon, is an American electronic commerce and cloud computing company based in Seattle, Washington that was founded by Jeff Bezos on July 5, 1994",
                   "plans": [
                    {
                     "id":1,
                     "name":"Plan A",
                     "price":"200",
                     "difficulty":"Easy",
                     "conversion":100,
                     "likes":10
                    },
                    {
                     "id":2,
                     "name":"Plan B",
                     "price":"230",
                     "difficulty":"Easy",
                     "conversion":100,
                     "likes":10
                    },
                    {
                     "id":3,
                     "name":"Plan C",
                     "price":"360",
                     "difficulty":"Easy",
                     "conversion":100,
                     "likes":10
                    },
                   ]
                  }
    return (
      <Container style={styles.container}>
        <Content>
          <Image style={styles.image}  borderRadius={10} source={{uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg'}} />
          <Text style={styles.thumbnailText}>{params.name}</Text>

          <View style={styles.viewSubHeadStyle}>
            <Text note>{company.enrolled} enrolled | </Text>
            <Text note>{company.plans.length} plans | </Text>
            <Text note>{company.rating}/5.0</Text>
          </View>

          <View style={styles.aboutViewStyle}>
              <Text style={styles.aboutTextStyle} note>{company.about}</Text>
            </View>

          <Text note style={{textAlign:'center'}}>Rate this company</Text>

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
          </View>
          
          <List dataArray={company.plans}
            renderRow={(plan) =>
            <ListItem>
              <Image style={styles.thumbnailStyle} source={{ uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg' }} />
              <Body>
                <View style={styles.viewTextStyle}>
                  <Text>{plan.name}</Text>
                  <Text note>Rs {plan.price}</Text>
                </View>
                <View style={styles.viewTextStyle}>
                  <Text note>{plan.difficulty}</Text>
                  <Text note> 
                    {plan.likes}
                  </Text>
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
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom:15,
    paddingTop:8
  },

  aboutViewStyle: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom:20,
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