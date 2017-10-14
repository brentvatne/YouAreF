import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator,Tab,Tabs,ScrollableTab, Footer } from 'native-base';
import { StyleSheet, View, AsyncStorage } from 'react-native';
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
  
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.name}`,
    
  })
  
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      res:{},
      flag:{}
    }
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('token');
    
    fetch(`http://byld.tech/plan/${this.props.navigation.state.params.id}`,{
       method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
          'Host': 'byld.tech'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          res: responseJson.data,
          
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onButtonPress= async () => {
  
  let token = await AsyncStorage.getItem('token');
    //console.log('Abc'+this.state.res.id);
    //console.log(this.state.res.company_id);
    
  fetch(`http://byld.tech/registerPlan/${this.state.res.id}/${this.state.res.company_id}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      'Host': 'byld.tech'
    },

  })
  .then((response) => response.json())
  .then((responseJson) => {
      this.setState({
        flag: responseJson
       }, function() {
        if(this.state.flag.status === "ok"){
          this.optionYes();
        }
        else if(this.state.flag.title === "Already registered!"){
          this.optionNo();
          alert('Already registered!');
        }
        
    });
  }); 
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
    //console.log(this.props.navigation.state.params.id);
    //console.log('1122');

    return (
      <Container style={styles.container} >
        <Tabs renderTabBar={()=> <ScrollableTab />} backgroundColor={'#fad30a'}>
          <Tab heading="About" tabStyle={{backgroundColor: '#fad30a'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#fad30a'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
            <PlanTabAbout  
              sampleProps={this.props.navigation.state.params.id}
            />
          </Tab>
          <Tab heading="Training" tabStyle={{backgroundColor: '#fad30a'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#fad30a'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
            <PlanTabTraining 
              sampleProps={this.props.navigation.state.params.id}
              />
          </Tab>
          <Tab heading="Reviews" tabStyle={{backgroundColor: '#fad30a'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#fad30a'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
            <PlanTabReviews 
              sampleProps={this.props.navigation.state.params.id}
            />
          </Tab>
          <Tab heading="Discuss" tabStyle={{backgroundColor: '#fad30a'}} textStyle={{color: '#000000'}} activeTabStyle={{backgroundColor: '#fad30a'}} activeTextStyle={{color: '#000000', fontWeight: 'bold'}}>
            <PlanTabDiscuss 
              sampleProps={this.props.navigation.state.params.id}
              navigation={this.props.navigation}
            />
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
            onPress: () => this.onButtonPress()
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