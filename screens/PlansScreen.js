import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator,Tab,Tabs,ScrollableTab, Footer } from 'native-base';
import { StyleSheet, View} from 'react-native';
import PlanTabAbout from './PlanTabAbout';
import PlanTabTraining from './PlanTabTraining';
import PlanTabReviews from './PlanTabReviews';
import PlanTabDiscuss from './PlanTabDiscuss';
import { Button } from 'react-native-elements';
import {
    Dialog,
    ProgressDialog,
    ConfirmDialog,
} from 'react-native-simple-dialogs'

export default class PlansScreen extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
  }

  state = {}

    openDialog(show) {
        this.setState({ showDialog: show })
    }
    openConfirm(show) {
        this.setState({ showConfirm: show })
    }
    openProgress() {
        this.setState({ showProgress: true })

        setTimeout(
            () => this.setState({ showProgress: false }),
            4000
        );
    }
    optionYes() {
        this.openConfirm(false);
        // Yes, this is a workaround :(
        // Why? See this https://github.com/facebook/react-native/issues/10471
        setTimeout(() => alert("Done"), 100);
    }
    optionNo() {
        this.openConfirm(false);
        // Yes, this is a workaround :(
        // Why? See this https://github.com/facebook/react-native/issues/10471
        // setTimeout(() => alert(""), 100);
    }

  render() {
    const { navigate } = this.props.navigation;
    console.log(this.props.navigation.state.params.id);
    console.log('1122');

    return (
      <Container style={styles.container} >
        <Tabs renderTabBar={()=> <ScrollableTab />} backgroundColor={'#fad30a'}>
          <Tab heading="About" tabStyle={{backgroundColor: '#fad30a'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#fad30a'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
            <PlanTabAbout  
              sampleProps={this.props.navigation.state.params.id}
            />
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

        <Footer style={{ backgroundColor:'#000000'}}>
          <Button 
            large
            title="REGISTER"
            color='white'
            backgroundColor='black'
            fontWeight='bold'
            fontSize={20}
            onPress={() => this.openConfirm(true)} 
            />
        </Footer>

        <ConfirmDialog
          title="Confirm Dialog"
          message="Do you want to register for this plan ?"
          visible={this.state.showConfirm}
          onTouchOutside={() => this.openConfirm(false)}
          positiveButton={{
            title: "YES",
            onPress: () => this.optionYes()
          }}
          negativeButton={{
            title: "NO",
            onPress: () => this.optionNo()
          }} />
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