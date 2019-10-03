import React, { Component } from 'react';
import PortableLabel from 'shared/components/PortableLabel';
import PortableButton from 'shared/components/PortableButton';

export default class Component1 extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = { clickCount: 0 };
    }

    handleClick() {
        this.setState({ clickCount: this.state.clickCount + 1 });
    }

    formatLabel() {
        switch(this.state.clickCount)
        {
            case 0: return 'Click Button to Start';
            case 1: return 'Clicked Once';
            case 2: return 'Clicked Twice';
            default: return `Clicked ${this.state.clickCount} Times`;
        }
    }

    render() {
      return (
          <>
            <PortableLabel text={this.formatLabel()} />
            <PortableButton text='Click Here' onClick={this.handleClick} />
          </>
      );
    }
  }