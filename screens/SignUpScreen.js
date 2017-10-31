import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator} from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationActions } from 'react-navigation';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

export default class SignUpScreen extends Component {
  
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email: '',
      gender: '',
      cv: '',
      address:'',
      contact:'',
      auth:{},
      types1: [{label: 'Male', value: 1}, {label: 'Female', value: 0}],
      value3: 0,
      value3Index: 0,
    };

    this.onButtonPress = this.onButtonPress.bind(this);
  }

  onButtonPress() {

  const resetActionApprove = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'approveScreen'})
      ]
    });
    
  fetch('http://byld.tech/signup', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      google_id: this.props.navigation.state.params.id,
      user_name: this.props.navigation.state.params.name,
      college: this.state.college,
      gender: this.state.gender,
      email: this.props.navigation.state.params.email,
      phone: this.state.contact,
      address: this.state.address,
      degree: this.state.degree,
      cv: this.state.cv,

    })

  })
  .then((response) => response.json())
  .then((responseJson) => {
      this.setState({
        auth: responseJson
       }, function() {
      AsyncStorage.setItem("token",this.state.auth.token);
      this.props.navigation.dispatch(resetActionApprove);
    });
  });
  //console.log(this.props.navigation.state.params.id);
   
  }

  render() {
    const { navigate } = this.props.navigation;
    const { params } = this.props.navigation.state;

    console.log(this.state.gender);

    return (
      <Container style={styles.container} >
        <Content>
          <View style={styles.view}>
            <Text style={styles.text}>
              Become a Gabby
            </Text>
            <TextInput
              style={{height: 50}}
              placeholder="Full Name"
              value={params.name}
              editable={false}
            />
            <TextInput
              style={{height: 50}}
              placeholder="Email"
              value={params.email}
              editable={false}
            />
            <TextInput
              style={{height: 50}}
              placeholder="Contact Number"
              keyboardType = 'numeric'
              onChangeText={(contact) => this.setState({contact})}
              value={this.state.contact}
              maxLength = {10}
            />
            {/*<TextInput
              style={{height: 50}}
              placeholder="Gender"
              onChangeText={(gender) => this.setState({gender})}
              value={this.state.gender}
            />*/}
            <View style={{ flex:1,flexDirection:'row',paddingTop: 12}}>
              <Text>Gender: </Text>
              <RadioForm formHorizontal={true} animation={true} >
                {this.state.types1.map((obj, i) => {
                var onPress = (value, index) => {
                    this.setState({
                      value3: value,
                      value3Index: index,
                      gender: obj.label,
                    })
                  }

                return (
                  <RadioButton labelHorizontal={true} key={i} >
                    {/*  You can set RadioButtonLabel before RadioButtonInput */}
                    <RadioButtonInput
                      obj={obj}
                      index={i}
                      isSelected={this.state.value3Index === i}
                      onPress={onPress}
                      buttonInnerColor={'#fad30a'}
                      buttonOuterColor={this.state.value3Index === i ? '#000' : '#000'}
                      buttonSize={12}
                      buttonOuterSize={20}
                      buttonStyle={{}}
                      buttonWrapStyle={{marginLeft: 10}}
                    />
                    <RadioButtonLabel
                      obj={obj}
                      index={i}
                      onPress={onPress}
                      labelStyle={{fontWeight: 'normal', color: '#000'}}
                      labelWrapStyle={{}}
                    />
                  </RadioButton>
                    )
                  })}
              </RadioForm>
            </View>

            <TextInput
              style={{height: 50}}
              placeholder="Address"
              onChangeText={(address) => this.setState({address})}
              value={this.state.address}
            />
            <TextInput
              style={{height: 50}}
              placeholder="Degree"
              onChangeText={(degree) => this.setState({degree})}
              value={this.state.degree}
            />
            <TextInput
              style={{height: 50}}
              placeholder="College"
              onChangeText={(college) => this.setState({college})}
              value={this.state.college}
            />
            <TextInput
              style={{height: 50}}
              placeholder="Link to CV"
              onChangeText={(cv) => this.setState({cv})}
              value={this.state.cv}
            />
            </View>

            <Button 
              title="SIGN UP"
              color='white'
              backgroundColor='black'
              fontWeight='bold'
              borderRadius={10}
              buttonStyle = {styles.signupButton}
              onPress={this.onButtonPress}
            />

        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  signupButton: {
    marginTop: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  signupButtonText: {
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    alignSelf:'center',
    marginBottom:24
  },
  view: {
    flex:1,
    padding:32,
  },
});