import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text,
  Card,
  CardItem,
  List, 
  ListItem, 
  Thumbnail } from 'native-base';

import { Font } from 'expo';

import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  // state = {
  //   fontLoaded: false,
  // };

  // componentDidMount() {
  //   Font.loadAsync({
  //     'Insanibu': require('./assets/fonts/Insanibu.ttf'),
  //   });
  //   this.setState({ fontLoaded: true });
  // }

  render() {
    const { navigate } = this.props.navigation;
    var camp = [    {"name":"Anshul Mehta","details":"Anshul Mehta 123"},
                    {"name":"Alok Singh","details":"Anshul 123"},
                    {"name":"Anirudh Khandelwal","details":"Anirudh 123"},
                    {"name":"Amazon","details":"Amazon 123"}

                ];

    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem header style={styles.headerText}>
              <Text style={{ fontSize:50 }}> YouAreF </Text>
            </CardItem>
            <CardItem style={{ alignItems: 'center',justifyContent: 'center' }}>
              <Text style={{ fontSize:20 }}> Hello Alok !</Text>
            </CardItem>
            <CardItem style={styles.normalText}>
              <Text style={{ fontSize:30 }}> 0 </Text>
              <Text style={{ fontSize:30 }}> INR </Text>
            </CardItem>
            <CardItem style={{alignItems: 'center',justifyContent: 'center',paddingTop:0}}>
              <View style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderBottomColor: 'black',
                borderBottomWidth: 0.5,
                width: 250}}/>
            </CardItem>
            <CardItem style={{alignItems: 'center',justifyContent: 'center',paddingTop:0}}>
              <Text> earnings so far </Text>
            </CardItem>
          </Card>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 118, height: 110}}>
              <Card>
                <CardItem style={{ alignItems:"center",justifyContent:"center",paddingTop:40 }}>
                  <Text>Campaigns</Text>
                </CardItem>
              </Card> 
            </View>
            <View style={{width: 118, height: 110}}>
              <Card>
                <CardItem style={{ alignItems:"center",justifyContent:"center",paddingTop:40 }}>
                  <Text>Deals</Text>
                </CardItem>
              </Card> 
            </View>  
            <View style={{width: 118, height: 110}}>
              <Card>
                <CardItem style={{ alignItems:"center",justifyContent:"center",paddingTop:40 }}>
                  <Text>Approved</Text>
                </CardItem>
              </Card> 
            </View>
          </View>

          <Card>
            <CardItem>
              <Text>Campaigns</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Deals</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Chats</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Discussions</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Text>Notifications</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>

          <Text style={{paddingTop:30}}> Campaigns recommended for you </Text>
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

          <Text style={{paddingTop:30}}> Activity around you </Text>
          <Card>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  headerText :{
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalText :{
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbnailStyle: {
    resizeMode: 'contain',
    borderColor: '#ddd',
    borderWidth: 1,
    height: 60,
    width: 60,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
