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
import fontawesomeIcon from 'react-native-vector-icons/FontAwesome';
import call from 'react-native-phone-call';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome';

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

    var camp = [    {"name":"Plan B","date":"30 Sep 2017","status":"Approved"},
                    {"name":"Plan A","date":"31 Sep 2017","status":"Rejected"},
                    {"name":"Plan D","date":"5 Oct 2017","status":"Approved"},
                    {"name":"Plan C","date":"7 Oct 2017","status":"Approved"}
                ];

    var plan = [    {"name":"Amazon A","status":"Accepted","date":"30 Sep 2017"},
                    {"name":"Snapdeal B","status":"Accepted","date":"30 Sep 2017"},
                    {"name":"Flipkart A","status":"Rejected","date":"30 Sep 2017"},
                    {"name":"Instamojo A","status":"Accepted","date":"30 Sep 2017"},
                    {"name":"Thyrocare C","status":"Accepted","date":"30 Sep 2017"},
                    {"name":"MakeMyTrips B","status":"Rejected","date":"30 Sep 2017"},
                ];


    return (
        <Container style={styles.container}>
          <Content>
              <Card style={{backgroundColor:"#0077b5"}}>
                <View style={ styles.notificationActionButtonView }>
                  <Ionicons name="md-notifications" style={styles.notificationButtonIcon} />
                </View>
                <CardItem style={{ alignItems: 'center',justifyContent: 'center',backgroundColor:'#0077b5' }}>
                  <Text style={{ fontSize:30,color:'#ffffff' }}> Hello Alok !</Text>
                </CardItem>
                <CardItem style={{alignItems: 'center',justifyContent: 'center',paddingTop:0,backgroundColor:'#0077b5'}}>
                  <View style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomColor: 'white',
                    borderBottomWidth: 1.0,
                    width: 250}}/>
                </CardItem>
                <CardItem  style={styles.normalText}>
                  <Body style={{ alignItems:"center",justifyContent:"center"}}>
                    <View style={{flexDirection:'column',justifyContent:'center'}}>
                      <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Text style={{ fontSize:35,color:'#ffffff' }}> 110 </Text>
                        <FontAwesomeIcons name="rupee" size={30} color="#ffffff" /> 
                      </View>
                        <Text style={{ fontSize:15,color:'#ffffff' }}> earnings so far</Text>
                    </View>
                  </Body>
                </CardItem>
              </Card>

            <View style={{ flex: 1, flexDirection: 'row', alignSelf:'stretch' ,position:'relative'}}>
              <View style={{ flex:1,height: 80, alignSelf:'stretch', position:'relative' }}>
                <Body style={{ alignItems:"center",justifyContent:"center" }}>
                  <Text style={{fontSize: 30}}> 2 </Text>
                  <Text  style={styles.smallText}>campaigns</Text>
                </Body>
              </View>
              <View style={{ flex:1,height: 80, alignSelf:'stretch',position:'relative'}}>
                <Body style={{ alignItems:"center",justifyContent:"center"}}>
                  <Text style={{fontSize: 30}}> 1 </Text>
                  <Text  style={styles.smallText}>total deals</Text>
                </Body>
              </View>  
              <View style={{ flex:1,height: 80, alignSelf:'stretch',position:'relative'}}>
                <Body style={{ alignItems:"center",justifyContent:"center"}}>
                  <Text style={{fontSize: 30}}> 0 </Text>
                  <Text  style={styles.smallText} >approved</Text>
                </Body>
              </View>
            </View>

          <Text style={{paddingTop:10}}> Your Plans </Text>
            <List dataArray={plan}
              renderRow={(plan) =>
                <ListItem onPress={() => navigate('CampaignsDetScreen', { name: `${plan.name}`})}>
                  <Image style={styles.thumbnailStyle} source={{ uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg' }} />
                  <Body>
                    <View style={styles.viewTextStyle}>
                      <Text>{plan.name}</Text>
                      {
                        plan.status == 'Accepted' ? (
                          <Badge style={{ backgroundColor: 'green' }}>
                            <Text style={{ color: 'white' }}>{plan.status}</Text>
                          </Badge>
                          )
                          :
                          (
                          <Badge style={{ backgroundColor: 'red' }}>
                            <Text style={{ color: 'white' }}>{plan.status}</Text>
                          </Badge>
                          )
                      }
                    </View>
                    <View style={styles.viewTextStyle}>
                      <Text note>{plan.date}</Text>
                    </View>
                  </Body>
                </ListItem>
              }>
            </List>

          <Text style={{paddingTop:30}}> Campaigns recommended for you </Text>
            <List dataArray={camp}
              renderRow={(camp) =>
                <ListItem onPress={() => navigate('CampaignsDetScreen', { name: `${camp.name}`})}>
                  <Image style={styles.thumbnailStyle} source={{ uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg' }} />
                  <Body>
                    <Text> {camp.name} </Text>
                    <Text note> {camp.date} </Text>
                  </Body>
                </ListItem>
              }>
            </List>
          </Content>
          
          <ActionButton buttonColor="rgba(231,76,60,1)" degrees={0} icon={<Ionicons name="md-call" style={styles.actionButtonIcon} /> }>
            <ActionButton.Item buttonColor='#9b59b6' title="Call" onPress={() => call(args).catch(console.error)}>
              <Ionicons name="md-call" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#1abc9c' title="Chat" onPress={() => navigate('ChatScreen')}>
              <Ionicons name="md-chatboxes" style={styles.actionButtonIcon} />
            </ActionButton.Item>
          </ActionButton>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  headerText :{
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#0077b5',
  },
  viewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  notificationButtonIcon: {
    fontSize: 28,
    height: 30,
    color: 'white',
  },
  notificationActionButtonView: {
    height: 50,
    paddingTop: 10,
    left: 300,
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
