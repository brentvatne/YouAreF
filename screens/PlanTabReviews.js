import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Input, Item, Label } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput, Button, AsyncStorage } from 'react-native';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

export default class PlanTabReviews extends Component {

   constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      reviews:{

      }
    }
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('token');
    
    fetch('http://192.168.43.217/api/public/plan/1',{
       method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
          'Host': '192.168.43.217'
        }
      })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          reviews: responseJson.data.reviews.data,
          
        }, function() {
          console.log(this.state.plans)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    return (
      <Container style={styles.container}>
      
        <View  style={styles.reviewButtonStyle}>
          <Button
            onPress={() => {this.popupDialog.show();}}
            title="ADD A REVIEW"
            color="#000000"
          />
        </View>
          <View>
            <List dataArray = {this.state.reviews}
              renderRow = {(review) =>
                <ListItem>
                  <Body> 
                    <View style={styles.viewTextStyle}>
                      <Text>{review.name}</Text>
                      <Text note>{review.message}</Text>
                      <View style={styles.nameTextStyle}>
                        <Text note>By {review.user_name} on {review.date}</Text>
                      </View>
                    </View>
                  </Body>
                </ListItem>
              }>
            </List>  
          </View> 
        <PopupDialog dialogTitle={<DialogTitle title="Add review" />} width={330} height={250} ref={(popupDialog) => { this.popupDialog = popupDialog; }}>
              <View>
                <Item>
                  <Input placeholder='Title' />
                </Item>
                <Item floatingLabel>
                  <Input 
                    placeholder='Description'
                    multiline={true}
                    numberOfLines={5}
                    style={{ height: 80}}
                    />
                </Item>
                <View  style={{ top:30,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Button
                    title="SUBMIT"
                    color="#000000"
                  />
                </View>
              </View>
            </PopupDialog>
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
  },
  nameTextStyle:{
    paddingTop: 8,
  },
  reviewButtonStyle:{
    flexDirection:'row',
    paddingTop: 20,
    justifyContent:'center',
  }
});