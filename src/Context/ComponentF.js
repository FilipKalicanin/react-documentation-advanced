import React, { Component } from 'react';
import UserContext from './userContext';

// if this is the place where you want to consume value from context,
// set contextType under component and use it as {this.context} (line 15)

export class ComponentF extends Component {
    render() {
        return (
            <h2>Hello, {this.context}</h2>
        )
    }
}

ComponentF.contextType = UserContext;

export default ComponentF;