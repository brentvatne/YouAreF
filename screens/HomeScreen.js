import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  TouchableHighlight,} from 'react-native';

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
  Thumbnail,
  Fab,
  Badge } from 'native-base';

import { Font } from 'expo';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import ActionButton from 'react-native-action-button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import call from 'react-native-phone-call';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      active: 'true'
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const args = {
      number: '8505960948', // String value with the number to call 
      prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call  
    }

    var camp = [    {"name":"Anshul Mehta","details":"Anshul Mehta 123"},
                    {"name":"Alok Singh","details":"Anshul 123"},
                    {"name":"Anirudh Khandelwal","details":"Anirudh 123"},
                    {"name":"Amazon","details":"Amazon 123"}

                ];

    return (
        <Container style={styles.container}>
          <Content>
              <Card style={{backgroundColor:"#0077b5"}}>
                <CardItem header style={styles.headerText}>
                  <Text style={{ fontSize:50,color:'#ffffff' }}> Hello Anshul </Text>
                </CardItem>
                <CardItem style={{ alignItems: 'center',justifyContent: 'center',backgroundColor:'#0077b5' }}>
                  <Text style={{ fontSize:20,color:'#ffffff' }}> Hello Alok !</Text>
                </CardItem>
                <CardItem style={styles.normalText}>
                  <Text style={{ fontSize:30,color:'#ffffff' }}> 0 </Text>
                  <Text style={{ fontSize:30,color:'#ffffff' }}> INR </Text>
                </CardItem>
                <CardItem style={{alignItems: 'center',justifyContent: 'center',paddingTop:0,backgroundColor:'#0077b5'}}>
                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomColor: 'black',
                    borderBottomWidth: 1.0,
                    width: 250}}/>
                </CardItem>
                <CardItem style={{ alignItems: 'center',justifyContent: 'center',paddingTop:0,backgroundColor:'#0077b5' }}>
                  <Text style={{ color:'#ffffff' }}> earnings so far </Text>
                </CardItem>
              </Card>

            <View style={{ flex: 1, flexDirection: 'row', alignSelf:'stretch' ,position:'relative'}}>
              <View style={{ flex:1,height: 110, alignSelf:'stretch', position:'relative' }}>
                <Card>
                  <CardItem>
                    <Body style={{ alignItems:"center",justifyContent:"center",paddingTop:10 }}>
                      <Text style={{fontSize: 30}} onPress={() => navigate('CampaignsScreen')}> 2 </Text>
                      <Text  style={styles.smallText} onPress={() => navigate('CampaignsScreen')}>campaigns</Text>
                    </Body>
                  </CardItem>
                </Card> 
              </View>
              <View style={{ flex:1, alignSelf:'stretch',position:'relative'}}>
                <Card>
                  <CardItem>
                    <Body style={{ alignItems:"center",justifyContent:"center",paddingTop:10 }}>
                      <Text style={{fontSize: 30}} onPress={() => navigate('DealsScreen')}> 1 </Text>
                      <Text  style={styles.smallText} onPress={() => navigate('DealsScreen')}>total deals</Text>
                    </Body>
                  </CardItem>
                </Card> 
              </View>  
              <View style={{ flex:1, alignSelf:'stretch',position:'relative'}}>
                <Card>
                  <CardItem>
                    <Body style={{ alignItems:"center",justifyContent:"center",paddingTop:10 }}>
                      <Text style={{fontSize: 30}} onPress={() => navigate('DealsScreen')}> 0 </Text>
                      <Text  style={styles.smallText} onPress={() => navigate('DealsScreen')}>approved</Text>
                    </Body>
                  </CardItem>
                </Card> 
              </View>
            </View>

            {/*<Card>
              <CardItem onPress={() => navigate('CampaignsScreen')}>
                <Text onPress={() => navigate('CampaignsScreen')}>Campaigns</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
              <CardItem onPress={() => navigate('DealsScreen')}>
                <Text onPress={() => navigate('DealsScreen')}>Deals</Text>
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
            </Card>*/}

            <List>
            <ListItem onPress={() => navigate('CampaignsScreen')}>
              <Text>Campaigns</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => navigate('DealsScreen')}>
              <Text>Deals</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => navigate('ChatScreen')}>
              <Text>Chats</Text>
            </ListItem>
            <ListItem>
              <Text>Discussions</Text>
            </ListItem>
            <ListItem>
              <Text>Notifications</Text>
            </ListItem>
          </List>

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
          <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="Call" onPress={() => call(args).catch(console.error)}>
              <Ionicons name="md-call" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="Chat" onPress={() => navigate('ChatScreen')}>
              <Ionicons name="md-chatboxes" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
          {/*<Fab
            active={this.state.active}
            direction="up"
            containerStyle={{ }}
            style={{ backgroundColor: '#5067FF' }}
            position="bottomRight"
            onPress={() => this.setState({ active: !this.state.active })}>
            <Icon name="share" />
            <Button style={{ backgroundColor: '#34A34F' }}>
              <Icon name="logo-whatsapp" />
            </Button>
            <Button style={{ backgroundColor: '#3B5998' }}>
              <Icon name="logo-facebook" />
            </Button>
            <Button disabled style={{ backgroundColor: '#DD5144' }}>
              <Icon name="mail" />
            </Button>
          </Fab>*/}
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
    backgroundColor:'#0077b5',
  },
  normalText :{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#0077b5',
  },
  smallText :{
    fontSize: 12,
    color: '#0077b5'
  },
  thumbnailStyle: {
    resizeMode: 'contain',
    borderColor: '#ddd',
    borderWidth: 1,
    height: 60,
    width: 60,
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
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
