/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Greycalc extends Component {
  render() {
    return (
      <Container>
                <Header>
                    <Button transparent>
                        <Icon name='ios-arrow-back' />
                    </Button>
                    
                    <Title>Header</Title>
                    
                    <Button transparent>
                        <Icon name='ios-menu' />
                    </Button>
                </Header>
            </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Greycalc', () => Greycalc);
