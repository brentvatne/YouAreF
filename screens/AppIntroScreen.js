import React, { Component } from 'react';
import { Container, Header, Content, Thumbnail, Text, Body, Icon } from 'native-base';
import { StyleSheet, Image, View, TabNavigator, ListView, ActivityIndicator, AsyncStorage,Alert,Dimensions } from 'react-native';
import { NavigationActions } from 'react-navigation';
import AppIntro from 'react-native-app-intro';

const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

export default class AppIntroScreen extends Component {
  
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      checkstatus:{},
    }
  }
  
  nextBtnHandle = (index) => {
      //Alert.alert('Next');
      console.log(index);
  }
  onSlideChangeHandle = (index, total) => {
      console.log(index, total);
  }

	render() {	
    const { navigate } = this.props.navigation;
    return (
       <AppIntro
        onNextBtnClick={this.nextBtnHandle}
        onDoneBtnClick={() => navigate('Login')}
        onSkipBtnClick={() => navigate('Login')}
        onSlideChange={this.onSlideChangeHandle}
        activeDotColor={'#000'}
        rightTextColor={'#666666'}
        leftTextColor={'#666666'}
      >
      <View style={[styles.slide, { backgroundColor: '#fad30a' }]}>
        <View style={[styles.header, {width: windowsWidth}]}>
          <View>
            <Image style={styles.imageStyle} source={require('../assets/images/YOUAREF.png')} />
          </View>
        </View>
        <View style={styles.info}>
          <View level={10}><Text style={styles.title}>You Are F</Text></View>
          <View level={15}><Text style={styles.description}>Where F Stands For Found</Text></View>
        </View>
      </View>
      <View style={[styles.slide, { backgroundColor: '#fad30a' }]}>
        <View style={[styles.header, {width: windowsWidth}]}>
          <View>
            <Image style={styles.imageStyle} source={require('../assets/images/youarefChotu.png')} />
          </View>
        </View>
        <View style={styles.info}>
          <View level={10}><Text style={styles.title}>Are You A Bakchod?</Text></View>
          <View level={10}><Text style={styles.title}>A Gabby?</Text></View>
          <View level={10}><Text style={styles.title}>A Social Butterfly?</Text></View>
        </View>
      </View>
      <View style={[styles.slide, { backgroundColor: '#fad30a' }]}>
        <View style={[styles.header, {width: windowsWidth}]}>
          <View>
            <Image style={styles.imageStyle} source={require('../assets/images/youarefChotu.png')} />
          </View>
        </View>
        <View style={styles.info}>
          <View level={10}><Text style={styles.title}>Walk and talk for ₹100</Text></View>
          <View level={10}><Text style={styles.title}>and more and more</Text></View>
          <View level={15}><Text style={styles.description}>Top employers are</Text></View>
          <View level={15}><Text style={styles.description}>searching for you.</Text></View>
        </View>
      </View>
  </AppIntro>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fad30a',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
  },

  imageStyle: {
    height: 200,
    width: 150,
    alignSelf:'center',
    marginTop:110,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15,
  },
  header: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pic: {
    width: 75 * 2,
    height: 63 * 2,
  },
  text: {
    color: '#000',
    fontSize: 30,
  },
  info: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: '#000',
    fontSize: 30,
    paddingBottom: 20,
  },
  description: {
    color: '#000',
    fontSize: 20,
},
});