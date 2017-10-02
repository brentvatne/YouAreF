import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import { StyleSheet, Image, View } from 'react-native';
export default class CampaignsScreen extends Component {
  
  static navigationOptions = {
    title: 'Companies',
    headerLeft: null,
    headerTitleStyle: { alignSelf: 'center' },
  };

  

  render() {
    
    const { navigate } = this.props.navigation;

    var camp = [    {"id":"1","name":"Amazon","type":"Wholesale","rating":"4.6","enrolled":"933"},
                    {"id":"2","name":"Tesla","type":"Cars","rating":"4.1","enrolled":"522"},
                    {"id":"3","name":"SpaceX","type":"Rockets","rating":"4.8","enrolled":"296"},
                    {"id":"4","name":"Adidas","type":"Retail","rating":"5.0","enrolled":"844"},
                    {"id":"5","name":"Flipkart","type":"Ecommerce","rating":"3.9","enrolled":"326"},
                    {"id":"6","name":"Snapdeal","type":"Ecommerce","rating":"4.3","enrolled":"147"}
                ];
    return (
      <Container style={styles.container} >
        <Content>
          <List dataArray={camp}
            renderRow={(camp) =>
            <ListItem onPress={() => navigate('CampaignsDetScreen', { id: `${camp.id}`, name: `${camp.name}`})}>
              <Image style={styles.thumbnailStyle} source={{ uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg' }} />
              <Body>
                <View style={styles.viewTextStyle}>
                  <Text>{camp.name}</Text>
                  <Text note>{camp.rating}/5.0</Text>
                </View>
                <View style={styles.viewTextStyle}>
                  <Text note>{camp.type}</Text>
                  <Text note>{camp.enrolled} Enrolled</Text>
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