import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class PortableButton extends Component {
  render() {
    return (
      <TouchableHighlight onPress={this.props.onClick} underlayColor="white">
        <View>
          <Text>{this.props.text}</Text>
        </View>
      </TouchableHighlight>
    );
  }
}