import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput, Button } from 'react-native';

export default class PlanTabReviews extends Component {

  render() {

    var reviews = [{reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                  ]; 

    return (
      <Container style={styles.container}>
        <Content>
          <View  style={styles.reviewButtonStyle}>
            <Button
              title="ADD A REVIEW"
              color="#000000"
              accessibilityLabel="Learn more about this purple button"
            />
          </View>

          <View>
            <List dataArray={reviews}
              renderRow={(reviews) =>
                <ListItem>
                  <Body> 
                    <View style={styles.viewTextStyle}>
                      <Text>{reviews.reviewHead}</Text>
                      <Text note>{reviews.description}</Text>
                      <View style={styles.nameTextStyle}>
                        <Text note>By {reviews.user} on {reviews.date}</Text>
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