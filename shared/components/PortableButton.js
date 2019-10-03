import React, { Component } from 'react';

export default class PortableButton extends Component {
    render() {
        return <button onClick={this.props.onClick}>{this.props.text}</button>;
    }
}