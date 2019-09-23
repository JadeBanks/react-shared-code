import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class PortableLabel extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }  
}