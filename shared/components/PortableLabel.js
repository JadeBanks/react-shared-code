import React, { Component } from 'react';

export default class PortableLabel extends Component {
  render() {
    return <div>{this.props.text}</div>;
  }
}