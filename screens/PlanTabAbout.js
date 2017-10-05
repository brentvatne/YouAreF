import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Button } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput } from 'react-native';

export default class PlanTabAbout extends Component {

  render() {

    return (
      <Container style={styles.container} >
        <Content>
          <List>
            <ListItem>
              <Body>
                <View>
                  <Text>About the plan</Text>
                  <Text note>Basic 15-34 products to sell</Text>
                </View>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <View>
                  <Text>Conversion</Text>
                  <Text note>Sign up offline merchant to sell on amazon. Get paid when seller is active for 30 days</Text>
                </View>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <View>
                  <Text>Earn per conversion</Text>
                  <Text note>Rs. 500 per conversion</Text>
                </View>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <View>
                  <Text>Price of the product</Text>
                  <Text note>Free to sign up</Text>
                </View>
              </Body>
            </ListItem>
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

});