import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Input, Item, Label } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput, Button } from 'react-native';
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

  componentDidMount() {
    return fetch('http://192.168.43.197/api/public/plan/1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          reviews: responseJson.data.reviews.data
        }, function() {
          console.log(this.state.reviews);
          
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
  
    /*var reviews = [{reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                  ]; */

    return (
      <Container style={styles.container}>
        <Content>
          <View  style={styles.reviewButtonStyle}>
            <Button
              onPress={() => {this.popupDialog.show();}}
              title="ADD A REVIEW"
              color="#000000"
            />
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
  nameTextStyle:{
    paddingTop: 8,
  },
  reviewButtonStyle:{
    flex:1,
    flexDirection:'row',
    paddingTop: 20,
    justifyContent:'center',
    alignItems:'center',
  }
});