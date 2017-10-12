import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Input, Item } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput, Button} from 'react-native';

export default class PlanTabDiscuss extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      discuss:{
      }
    }
  }

  componentDidMount() {
    return fetch('http://192.168.43.197/api/public/plan/1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          discuss: responseJson.data.discussions.data
        }, function() {

        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    /*var discussions = [{id:0,discussionHead:"Does amazon charges extra tax from the seller ?"},
                      {id:0,discussionHead:"What all skills are necessary to apply for this plan ?"},
                      {id:0,discussionHead:"Can anyone share his/her experience ?"},
                      {id:0,discussionHead:"In how many will the payment reflect in my account ?"},
                      ]; */

    return (
      <Container style={styles.container} >
        <Content>
          <View>
            <List dataArray={this.state.discuss}
              renderRow={(discussions) =>
                <ListItem>
                  <Body> 
                    <View style={styles.viewTextStyle}>
                      <Text>{discussions.question}</Text>
                    </View>
                  </Body>
                </ListItem>
              }>
            </List>  
          </View>
          
          <View style={ {flex:1, flexDirection:'row', alignSelf:'stretch' ,position:'relative',paddingTop: 15,paddingLeft:5} }>
            <View style={{ flex:3,height:60, alignSelf:'stretch', position:'relative' }}>
              <Item regular>
                <Input placeholder='Ask a question' />
              </Item>
            </View>
            <View style={{ flex:1, alignSelf:'stretch',position:'relative',paddingTop:9,paddingLeft:10}}> 
              <Button
                title="Submit"
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