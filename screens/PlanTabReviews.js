import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Input, Item, Label } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput, Button, AsyncStorage, ActivityIndicator } from 'react-native';
import PopupDialog, { DialogTitle } from 'react-native-popup-dialog';

export default class PlanTabReviews extends Component {

   constructor(props) {
    super(props);
    this.sampleProps = this.props;
    this.state = {
      isLoading: true,
      reviews:{

      },
      title:'',
      message:'',
      res:{}
    }
  }

  componentDidMount = async () => {
    let token = await AsyncStorage.getItem('token');
    
    fetch(`http://byld.tech/plan/${this.sampleProps.sampleProps}`,{
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
          reviews: responseJson.data.reviews.data,
          
        }, function() {
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  onButtonPress= async () => {
  
  let token = await AsyncStorage.getItem('token');
    
  fetch(`http://byld.tech/reviewPlan/${this.sampleProps.sampleProps}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token,
      'Host': 'byld.tech'
    },
    body: JSON.stringify({
      title: this.state.title,
      message: this.state.message,
    })

  })
  .then((response) => response.json())
  .then((responseJson) => {
      this.setState({
        res: responseJson
       }, function() {
        if(this.state.res.status === "ok"){
          this.popupDialog.dismiss();
          this.refs.titleInput.setNativeProps({text:''});
          this.refs.descriptionInput.setNativeProps({text:''})
        }
        
    });
  }); 
  }

  render() {

    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }

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
                  <Input 
                    placeholder='Title'
                    ref='titleInput'
                    onChangeText={(title) => this.setState({title})}
                  />
                </Item>
                <Item>
                  <Input 
                    placeholder='Description'
                    ref='descriptionInput'
                    multiline={true}
                    numberOfLines={5}
                    style={{ height: 80}}
                    onChangeText={(message) => this.setState({message})}
                    />
                </Item>
                <View  style={{ top:30,flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Button
                    title="SUBMIT"
                    onPress={this.onButtonPress}
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