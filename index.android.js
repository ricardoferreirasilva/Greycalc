/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var {s_height, s_width} = Dimensions.get('window');
var s = require('./styles/styling.js');
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Button,Container, Header, Title, Content, H1,Footer, FooterTab, Icon } from 'native-base';
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
   constructor(props)
   {
     super(props);
      this.state = {
        equation: '',
      };
       this._pushToken = this._pushToken.bind(this);
   }
  _pushToken(token)
  {
      if(token == "=")
      {
        try {
          eval("var result = "+this.state.equation);
         this.setState({
           equation : result,
         })
        } catch (error) {
          this.setState({
           equation : "",
              })
           console.error("Wrong syntax.");
        }
      }
      else if(token == "CLR")
      {
        
        this.setState({
           equation : "",
        }
      )}
      else{
         var newEquation = this.state.equation + "" + token;
         this.setState({
           equation : newEquation,
        })}
  }
  render() {
    return (
      <Container>     
          <Content contentContainerStyle={{flex: 1}} style={{padding: 0}}>
            <Grid >
                  <Row size={20} style={s.topBar}>
                      <Text style={s.calculationText}>{this.state.equation}</Text>
                  </Row>
                  <Row size={55} style={s.middleBar}>
                      <Col style={s.middleColumn}>
                           <InputCell token={1} _pushToken = {this._pushToken} ></InputCell>         
                           <InputCell token={4} _pushToken = {this._pushToken} ></InputCell>
                           <InputCell token={7} _pushToken = {this._pushToken} ></InputCell>
                           <InputCellBottom token={"CLR"} _pushToken = {this._pushToken} ></InputCellBottom>
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
                  <Row size={12.5} style={s.bottomBar}>
                      <InputCellBottom token={"+"} _pushToken = {this._pushToken} ></InputCellBottom> 
                      <InputCellBottom token={"-"} _pushToken = {this._pushToken} ></InputCellBottom>
                      <InputCellBottom token={"/"} _pushToken = {this._pushToken} ></InputCellBottom>  
                      <InputCellBottom token={"*"} _pushToken = {this._pushToken} ></InputCellBottom>  
                  </Row>
                  <Row size={12.5} style={{backgroundColor : "#424242"}}></Row>
            </Grid>
          </Content>
      </Container>
    );
  }
}
AppRegistry.registerComponent('Greycalc', () => Greycalc);
