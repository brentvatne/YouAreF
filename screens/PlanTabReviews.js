import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Button } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput } from 'react-native';

export default class PlanTabReviews extends Component {
  render() {

    var reviews = [{reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                   {reviewHead:"Really worth it",description:"It was good experience working with amazon. All the payments and transactions were on time",user:"Alok Singh", date:"9/6/2017"},
                  ]; 

    return (
      <Container style={styles.container} >
        <Content>
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
  }
});