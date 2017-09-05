import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import { StyleSheet, Image } from 'react-native';
export default class CampaignsScreen extends Component {
  
  static navigationOptions = {
    title: 'Campaigns',
  };

  render() {
    
    const { navigate } = this.props.navigation;

    var camp = [    {"name":"Anshul Mehta","details":"Anshul Mehta 123"},
                    {"name":"Alok Singh","details":"Anshul 123"},
                    {"name":"Anirudh Khandelwal","details":"Anirudh 123"},
                    {"name":"Amazon","details":"Amazon 123"},
                    {"name":"Flipkart","details":"Anirudh 123"},
                    {"name":"Snapdeal","details":"Snapdeal 123"}
                ];
    return (
      <Container style={styles.container} >
        <Content>
          <List dataArray={camp}
            renderRow={(camp) =>
            <ListItem onPress={() => navigate('CampaignsDetScreen', { name: `${camp.name}`})}>
              <Image style={styles.thumbnailStyle} source={{ uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg' }} />
              <Body>
                <Text>{camp.name}</Text>
                <Text note>{camp.details}</Text>
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
});