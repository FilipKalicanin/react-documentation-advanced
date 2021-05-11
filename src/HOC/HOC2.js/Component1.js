import React from 'react';
import HigherOrderComponent from './HigherOrderComponent.js';

class Component1 extends React.Component {
    render() {
        return (
            <button onClick={this.props.incrementCount}>
                {this.props.count}
            </button>
        )
    }
}

export default HigherOrderComponent(Component1);