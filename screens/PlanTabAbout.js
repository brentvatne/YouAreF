import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body, Separator, Button } from 'native-base';
import { ScrollView, StyleSheet, View, Image, TextInput } from 'react-native';

export default class PlanTabAbout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      About:{}
    }
  }

  componentDidMount() {
    return fetch('http://192.168.43.197/api/public/plan/1')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          About: responseJson.data
        }, function() {
          
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {

    return (
      <Container style={styles.container} >
        <Content>
          <List>
            <ListItem>
              <Body>
                <View>
                  <Text>About the plan</Text>
                  <Text note>{this.state.About.about}</Text>
                </View>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <View>
                  <Text>Conversion</Text>
                  <Text note>{this.state.About.conversion}</Text>
                </View>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <View>
                  <Text>Earn per conversion</Text>
                  <Text note>{this.state.About.earn_per_conversion}</Text>
                </View>
              </Body>
            </ListItem>
            <ListItem>
              <Body>
                <View>
                  <Text>Price of the product</Text>
                  <Text note>{this.state.About.price_per_product}</Text>
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