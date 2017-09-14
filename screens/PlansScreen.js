import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator } from 'native-base';
import { StyleSheet, View } from 'react-native';
export default class PlansScreen extends Component {
  
  static navigationOptions = {
    title: 'Plans',
  };

  render() {
    
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container} >
        <Content>
        
        <Thumbnail style={styles.image} large source={{uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg'}} />
        <Text style={styles.thumbnailText}> Amazon </Text>
        
        <View style={{ padding: 20, paddingTop: 5,}}>
            
            <Text style={styles.headTextStyle}>The campaign has multiple plans.Each plan has different payout as mention below.</Text>
            
            <View style={styles.listStyle} >
                <Separator bordered>
                  <Text style={{ fontSize: 15 }} >Plan #123</Text>
                </Separator>
                <ListItem>
                  <Body>
                    <Text style={styles.listHeadText}>Plan Name</Text>
                    <Text note style={styles.listDetailsText}>Basic</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Body>
                    <Text style={styles.listHeadText}>What is a conversion?</Text>
                    <Text note style={styles.listDetailsText}>When the prospect you refer signs up for Preventive health checkup from Thyrocare.</Text>
                  </Body>
                </ListItem>
                <ListItem>
                  <Text>Dejan Lovren</Text>
                </ListItem>
              
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
  listStyle: {
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5
  },
  headTextStyle: {
    alignSelf: 'center',
    paddingBottom: 15,
    paddingTop: 15,
    lineHeight: 25,
  },
  image: {
  alignSelf: 'center', 
  marginTop: 10,
  marginBottom: 10,  
  borderColor: '#ddd',
  borderWidth: 1,
  resizeMode: 'contain',
  height: 100,
  width: 100,
  },

  thumbnailText: {
    fontSize: 18,
    alignSelf: 'center',
  },
  listHeadText: {
    marginLeft: 0,
  },
  listDetailsText: {
    marginLeft: 0,
    lineHeight: 25,
  },
});