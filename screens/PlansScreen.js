import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator,Tab,Tabs,ScrollableTab } from 'native-base';
import { StyleSheet, View } from 'react-native';
import PlanTabAbout from './PlanTabAbout';
import PlanTabTraining from './PlanTabTraining';
import PlanTabReviews from './PlanTabReviews';
import PlanTabDiscuss from './PlanTabDiscuss';

export default class PlansScreen extends Component {
  
  static navigationOptions = {
    title: 'Plans',
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container style={styles.container} >
        <Tabs renderTabBar={()=> <ScrollableTab />}>
          <Tab heading="About" tabStyle={{backgroundColor: '#fad30a'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#fad30a'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
            <PlanTabAbout />
          </Tab>
          <Tab heading="Training" tabStyle={{backgroundColor: '#fad30a'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#fad30a'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
            <PlanTabTraining />
          </Tab>
          <Tab heading="Reviews" tabStyle={{backgroundColor: '#fad30a'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#fad30a'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
            <PlanTabReviews />
          </Tab>
          <Tab heading="Discuss" tabStyle={{backgroundColor: '#fad30a'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#fad30a'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
            <PlanTabDiscuss />
          </Tab>
        </Tabs>
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