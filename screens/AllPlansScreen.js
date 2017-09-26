import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Icon, View } from 'native-base';
import { StyleSheet, Image } from 'react-native';
export default class CampaignsScreen extends Component {
  
  static navigationOptions = {
    title: 'Plans',
  };

  render() {
    
    const { navigate } = this.props.navigation;

    var plan = [    {"name":"Amazon A","difficulty":"Easy",rating:"",price:"200"},
                    {"name":"Snapdeal B","difficulty":"Easy",rating:"",price:"350"},
                    {"name":"Flipkart A","difficulty":"Medium",rating:"",price:"400"},
                    {"name":"Instamojo A","difficulty":"Easy",rating:"",price:"2000"},
                    {"name":"Thyrocare C","difficulty":"Hard",rating:"",price:"2400"},
                    {"name":"MakeMyTrips B","difficulty":"Easy",rating:"",price:"1200"},
                ];
    return (
      <Container style={styles.container} >
        <Content>
          <List dataArray={plan}
            renderRow={(plan) =>
            <ListItem onPress={() => navigate('CampaignsDetScreen', { name: `${plan.name}`})}>
              <Image style={styles.thumbnailStyle} source={{ uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg' }} />
              
              <Body>
                <Text>{plan.name}</Text>
                <Text note>{plan.difficulty}</Text>
                <Text note>Rs {plan.price}</Text>
              </Body>
              
              <View style={styles.ratingViewStyle}>
              <Text style={styles.ratingTextStyle}>4.3</Text>
              <Icon style={styles.ratingIconStyle} ios='ios-star' android="md-star"/>
              </View>
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
  ratingIconStyle: {
    fontSize: 16,
    color: '#ffb400',
  },
  ratingTextStyle: {
    fontSize: 12,
  },
  ratingViewStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
});