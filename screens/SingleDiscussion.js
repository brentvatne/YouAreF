import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Button, Input, Item } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput } from 'react-native';

export default class SingleDiscussion extends Component {

  render() {

    var discussions = [ {id:0,discussionHead:"Does amazon charges extra tax from the seller ?"},
                        {id:0,discussionHead:"What all skills are necessary to apply for this plan ?"},
                        {id:0,discussionHead:"Can anyone share his/her experience ?"},
                        {id:0,discussionHead:"In how many will the payment reflect in my account ?"},
                      ]; 

    return (
      <Container style={styles.container} >
        <Content>
          <View>
            <List dataArray={discussions}
              renderRow={(discussions) =>
                <ListItem>
                  <Body> 
                    <View style={styles.viewTextStyle}>
                      <Text>{discussions.discussionHead}</Text>
                    </View>
                    <View style={styles.viewTextStyle}>
                      <Text note>{discussions.discussionHead}</Text>
                    </View>
                  </Body>
                </ListItem>
              }>
            </List>  
          </View>
          
          <View style={ {flex:1, flexDirection:'row', alignSelf:'stretch' ,position:'relative',paddingTop: 15,paddingLeft:5} }>
            <View style={{ flex:3,height:60, alignSelf:'stretch', position:'relative' }}>
              <Item rounded>
                <Input placeholder='Add a comment' />
              </Item>
            </View>
            <View style={{ flex:1, alignSelf:'stretch',position:'relative',paddingTop:5,paddingLeft:5}}> 
              <Button rounded dark onPress={() => {}}> 
                <Text>Comment</Text>
              </Button>
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