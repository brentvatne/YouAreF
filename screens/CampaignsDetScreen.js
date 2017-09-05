import React, { Component } from 'react';
import { Container, Header, Content, List, Icon, ListItem, Thumbnail, Text, Body, Card, CardItem, Button } from 'native-base';
import { View, Image, StyleSheet } from 'react-native';

export default class CampaignsDetScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
  });

  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Content>
          <Image style={styles.image}  borderRadius={10} source={{uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg'}} />
          <Text style={styles.thumbnailText}> {params.name} </Text>
          
          <List>
              <View style={styles.viewStyle}>
              <Body>
                <Text>6776</Text>
                <Text style={styles.paraFont} >enrolled</Text>
              </Body>
              
              <Body>
                <Text>6776</Text>
                <Text style={styles.paraFont} >reviews</Text>
              </Body>
              
              <Body>
                <Text>6776</Text>
                <Text style={styles.paraFont} >ratings</Text>
              </Body>
            </View>
            
            <ListItem>
            <Body>
                <Text>Difficulty Level</Text>
                <Text style={styles.paraFont} >Easy</Text>
              </Body>
              
              <Body>
                <Text>Closure Time</Text>
                <Text style={styles.paraFont} >1 Day</Text>
              </Body>
            </ListItem>

            <ListItem>
            <Body>
                <Text>What is a conversion?</Text>
                <Text style={styles.paraFont} >When the prospect you refer signs up for Preventive health checkup from Thyrocare.</Text>
              </Body>
            </ListItem>

            <ListItem>
            <Body>
                <Text>How much can I earn ?</Text>
                <Text style={styles.paraFont}>Up to Rs.2500 per conversion.</Text>
              </Body>
            </ListItem>

            <ListItem>
            <Body>
                <Text>How do I get started ?</Text>
                <Text style={styles.paraFont}>Meet offline retail stores and convince them to sell online.</Text>
              </Body>
            </ListItem>
            
          </List>

          <View style={styles.viewStyle}>
            <Button light>
              <Icon ios='ios-paper' android="md-paper" style={{fontSize: 20}}/>
              <Text>Training</Text>
            </Button>
            <Button light onPress={() => navigate('PlansScreen')}>
              <Icon ios='ios-alarm' android="md-alarm" style={{fontSize: 20}}/>
              <Text>Plans</Text>
            </Button>
            <Button light>
              <Icon ios='ios-chatboxes' android="md-chatboxes" style={{fontSize: 20}}/>
              <Text>Discuss</Text>
            </Button>
          </View>

          <Text style={{ paddingLeft: 20, paddingTop: 20,}}>Reviews</Text>

          <View style={{ padding: 20, paddingTop: 5,}}>
            <View style={styles.reviewsStyle} >
              <List>
                <ListItem>
                  <Text>Simon Mignolet</Text>
                </ListItem>
                <ListItem>
                  <Text>Nathaniel Clyne</Text>
                </ListItem>
                <ListItem>
                  <Text>Dejan Lovren</Text>
                </ListItem>
              </List>
            </View>
          </View>

          <Text style={{ paddingLeft: 20, paddingTop: 20,}}>Discussions</Text>

          <View style={{ padding: 20, paddingTop: 5,}}>
            <View style={styles.reviewsStyle} >
              <List>
                <ListItem>
                  <Text>Simon Mignolet</Text>
                </ListItem>
                <ListItem>
                  <Text>Nathaniel Clyne</Text>
                </ListItem>
                <ListItem>
                  <Text>Dejan Lovren</Text>
                </ListItem>
              </List>
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

  image: {
  alignSelf: 'center', 
  marginTop: 10,
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
    padding: 20,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },

  reviewsStyle: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5
  },

  headFont: {
  },

  paraFont: {
    fontSize: 13,
    color : '#5f7f94',
    lineHeight: 25,
    fontWeight: '100'
  },
  CardItemStyle: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },

});