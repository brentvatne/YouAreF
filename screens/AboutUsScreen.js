import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Body, Separator, Button } from 'native-base';
import { ScrollView, StyleSheet, View, Image, Text, TextInput } from 'react-native';
import ReadMore from '@expo/react-native-read-more-text';
import { RegularText, BoldText } from '../components/StyledText';

import Colors from '../constants/Colors';

export default class AboutUsScreen extends Component {
  
  static navigationOptions = {
    title: 'About Us',
  };

  _renderTruncatedFooter = handlePress => {
    return (
      <RegularText
        style={{ color: Colors.tintColor, marginTop: 5 }}
        onPress={handlePress}>
        Read more
      </RegularText>
    );
  };

  _renderRevealedFooter = handlePress => {
    return (
      <RegularText
        style={{ color: Colors.tintColor, marginTop: 5 }}
        onPress={handlePress}>
        Show less
      </RegularText>
    );
  };

  render() {
    
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container} >
        <Content>
          <Body>
            <Image
           style={styles.imageStyle}
             source={require('../assets/images/AboutUs.png')}
            />
          </Body>
          <View style={styles.card}>
          <View style={styles.cardBody}>
            <ReadMore
              numberOfLines={15}
              renderTruncatedFooter={this._renderTruncatedFooter}
              renderRevealedFooter={this._renderRevealedFooter}>
              <RegularText style={styles.cardText}>Simply put, we identify the customers and potential customers most 
              likely to talk about your brand (we call these people “Influencers”) and then use creative tactics 
              to encourage communications between Influencers and members of their social network. Bring all of 
              this together and you have “Word of Mouth Marketing,” the most effective technique available for growing 
              your brand and increasing your sales.{"\n"}</RegularText>
              <RegularText style={styles.cardText}>WOMM includes tactics such as evangelist, viral, grassroots and 
              seeding, to name a few. Although these may seem like buzzwords, each is a distinct tactic that has its 
              proper time and place. They are often used together to create great stories about your brand that people 
              will want to share with one another over an extended period of time.
              All WOMM techniques are based on the concepts of customer satisfaction, two-way dialog and transparent 
              communications. The basic elements are:{"\n"}{"\n"}
              Identifying the people most likely to share their opinions
              Studying how, where and when opinions are being shared
              Providing the tools to make it easier to share information
              Listening and responding to people that have good, bad or indifferent things to say{"\n"}{"\n"}
              Conventional Marketing
              {"\n"}{"\n"}  
              Broadcast
              Push
              Company scheduled
              Lag time
              Company to audience
              Expected
              {"\n"}{"\n"}
              Word of Mouth Marketing
              {"\n"}{"\n"}
              Narrowcast
              Pull
              Consumer requested
              Real time
              Peer to peer
              Interesting
              </RegularText>

            </ReadMore>
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
  questionStyle: {
    fontWeight:'bold',
    fontSize:18
  },
  answerStyle: {
    fontSize:16
  },
  imageStyle: {
    height: 200,
    width: 150,
    alignSelf:'center',
    marginTop:10,
  },
  card: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#E8E8E8',
    backgroundColor: '#fff',
  },
  cardBody: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  cardText: {
    fontSize: 16,
    color: '#424242',
  },
});