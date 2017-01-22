/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var {s_height, s_width} = Dimensions.get('window');
var s = require('./styles/styling.js');
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Title, Content, H1,Footer, FooterTab, Icon } from 'native-base';
import React, { Component } from 'react';
import {
  Dimensions,
  AppRegistry,
  TouchableOpacity ,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from 'react-native';
class InputCell extends Component
{
  _onClick(token)
  {
      console.log(token);
  }
  render()
  {
    return(
      <TouchableHighlight style={s.middleRow} 
          underlayColor = "grey"
          onPress={() => this.props._pushToken(this.props.token)}>
          <Row style={{justifyContent: 'center'}} >
              <Text style={s.calculationText}>{this.props.token}</Text>
          </Row>
      </TouchableHighlight>
    )
  }
};
class InputCellBottom extends Component
{
  _onClick(token)
  {
      console.log(token);
  }
  render()
  {
    return(
      <TouchableHighlight style={s.middleRowBottom} 
          underlayColor = "grey"
          onPress={() => this.props._pushToken(this.props.token)}>
          <Row style={{justifyContent: 'center'}} >
              <Text style={s.calculationText}>{this.props.token}</Text>
          </Row>
      </TouchableHighlight>
    )
  }
};
export default class Greycalc extends Component {
  _pushToken(token)
  {
      console.log("Parent : "+ token);
  }
  render() {
    return (
      <Container>     
          <Content contentContainerStyle={{flex: 1}} style={{padding: 0}}>
            <Grid >
                  <Row size={20} style={s.topBar}>
                      <Text style={s.calculationText}> 5 + 5 = 10 </Text>
                  </Row>
                  <Row size={55} style={s.middleBar}>
                      <Col style={s.middleColumn}>
                           <InputCell token={1} _pushToken = {this._pushToken} ></InputCell>         
                           <InputCell token={4} _pushToken = {this._pushToken} ></InputCell>
                           <InputCell token={7} _pushToken = {this._pushToken} ></InputCell>
                           <InputCellBottom token={""} _pushToken = {this._pushToken} ></InputCellBottom>
                      </Col>
                      <Col style={s.middleColumn}>
                            <InputCell token={2} _pushToken = {this._pushToken} ></InputCell>         
                            <InputCell token={5} _pushToken = {this._pushToken} ></InputCell>
                            <InputCell token={8} _pushToken = {this._pushToken} ></InputCell>
                            <InputCellBottom token={0} _pushToken = {this._pushToken} ></InputCellBottom>
                      </Col>
                      <Col style={s.middleColumn}>
                            <InputCell token={3} _pushToken = {this._pushToken} ></InputCell>         
                            <InputCell token={6} _pushToken = {this._pushToken} ></InputCell>
                            <InputCell token={9} _pushToken = {this._pushToken} ></InputCell>
                            <InputCellBottom token={"="} _pushToken = {this._pushToken} ></InputCellBottom>                  
                      </Col>
                  </Row>
                  <Row size={12.5} style={{backgroundColor : "#757575"}}></Row>
                  <Row size={12.5} style={{backgroundColor : "#424242"}}></Row>
            </Grid>
          </Content>
      </Container>
    );
  }
}
AppRegistry.registerComponent('Greycalc', () => Greycalc);
