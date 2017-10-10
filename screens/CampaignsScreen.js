import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';
import { StyleSheet, Image, View, ActivityIndicator } from 'react-native';

export default class CampaignsScreen extends Component {
  
  static navigationOptions = {
    title: 'Companies',
    headerLeft: null,
    headerTitleStyle: { alignSelf: 'center' },
  };

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      companies:{}
    }
  }

  componentDidMount() {
    return fetch('http://192.168.43.197/api/public/companies')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          companies: responseJson.data
        }, function() {
          
        });
      })
      .catch((error) => {
        console.error(error);
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
    
    const { navigate } = this.props.navigation;
    
    return (
      <Container style={styles.container} >
        <Content>
          <List dataArray={this.state.companies}
            renderRow={(camp) =>
            <ListItem onPress={() => navigate('CampaignsDetScreen', { id: `${camp.company_id}`, name: `${camp.name}`})}>
              <Image style={styles.thumbnailStyle} source={{ uri: 'http://media.corporate-ir.net/media_files/IROL/17/176060/img/logos/amazon_logo_RGB.jpg' }} />
              <Body>
                <View style={styles.viewTextStyle}>
                  <Text>{camp.name}</Text>
                  <Text note>{camp.rating}/5.0</Text>
                </View>
                <View style={styles.viewTextStyle}>
                  <Text note>{camp.type}</Text>
                  <Text note>{camp.enrolled} Enrolled</Text>
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
  thumbnailStyle: {
    resizeMode: 'contain',
    borderColor: '#ddd',
    borderWidth: 1,
    height: 60,
    width: 60,
  },
  viewTextStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});