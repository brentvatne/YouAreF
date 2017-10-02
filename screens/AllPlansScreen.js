import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Icon } from 'native-base';
import { StyleSheet, Image, View } from 'react-native';
export default class CampaignsScreen extends Component {
  
  static navigationOptions = {
    title: 'Plans',
  };

  render() {
    
    const { navigate } = this.props.navigation;

    var plan = [    {"name":"Amazon A","difficulty":"Easy",likes:"20",price:"200"},
                    {"name":"Snapdeal B","difficulty":"Easy",likes:"63",price:"350"},
                    {"name":"Flipkart A","difficulty":"Medium",likes:"36",price:"400"},
                    {"name":"Instamojo A","difficulty":"Easy",likes:"2",price:"2000"},
                    {"name":"Thyrocare C","difficulty":"Hard",likes:"59",price:"2400"},
                    {"name":"MakeMyTrips B","difficulty":"Easy",likes:"12",price:"1200"},
                ];
    return (
      <Container style={styles.container} >
        <Content>
          <List dataArray={plan}
            renderRow={(plan) =>
            <ListItem onPress={() => navigate('CampaignsDetScreen', { name: `${plan.name}`})}>
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