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
  H1,
  H2,
  H3 } from 'native-base';

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
    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem header style={styles.headerText}>
              <H1> YouAreF </H1>
            </CardItem>
            <CardItem style={styles.normalText}>
              <Text> Hello Alok !</Text>
            </CardItem>
            <CardItem style={styles.normalText}>
              <Text> 0 </Text>
              <Text> INR </Text>
            </CardItem>
            <CardItem style={styles.normalText}>
              <Text> earnings so far </Text>
            </CardItem>
          </Card>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: 115, height: 130}}>
              <Card>
                <CardItem style={{ alignItems:"center",justifyContent:"center",paddingTop:40 }}>
                  <Text>Campaigns</Text>
                </CardItem>
              </Card> 
            </View>
            <View style={{width: 115, height: 130}}>
              <Card>
                <CardItem style={{ alignItems:"center",justifyContent:"center",paddingTop:40 }}>
                  <Text>Deals</Text>
                </CardItem>
              </Card> 
            </View>  
            <View style={{width: 115, height: 130}}>
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
    backgroundColor: '#fff',
  },
  headerText :{
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalText :{
    alignItems: 'center',
    justifyContent: 'center',
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
