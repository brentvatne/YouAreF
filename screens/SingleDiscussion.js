import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Input, Item } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput, Button, AsyncStorage } from 'react-native';

export default class SingleDiscussion extends Component {

  static navigationOptions = ({ navigation }) => ({
    title:`${navigation.state.params.question}`,
    
  })

  constructor(props) {
    super(props);
    this.sampleProps = this.props;
    this.state = {
      isLoading: true,
      answers:{
      },
    };
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('token');
    
    fetch(`http://byld.tech/discussionAnswer/22`,
    {
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
          answers: responseJson.data,
          
        }, function() {
          console.log(this.state.plans)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    console.log(this.state.answers);
    console.log(this.state.answers.answer);

    return (
      <Container style={styles.container} >
        <Content>
          <View>
            <List dataArray={this.state.answers}
              renderRow={(answer) =>
                <ListItem>
                  <Body> 
                    <View style={styles.viewTextStyle}>
                      <Text>{answer.answer}</Text>
                    </View>
                    <View style={styles.viewTextStyle}>
                      <Text note>{answer.user_name}</Text>
                    </View>
                  </Body>
                </ListItem>
              }>
            </List>  
          </View>
          
          <View style={ {flex:1, flexDirection:'row', alignSelf:'stretch' ,position:'relative',paddingTop: 15,paddingLeft:5} }>
            <View style={{ flex:3,height:60, alignSelf:'stretch', position:'relative' }}>
              <Item regular>
                <Input placeholder='Your comment here' />
              </Item>
            </View>
            <View style={{ flex:1, alignSelf:'stretch',position:'relative',paddingTop:9,paddingLeft:10}}> 
              <Button
                onPress={this.onButtonPress}
                title="Comment"
                color="#000000"
                accessibilityLabel="Learn more about this purple button"
              />
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
  viewTextStyle: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  viewTextBoxStyle: {
    flex:1,
    flexDirection: 'row'
  }

});