import React, { Component } from 'react'
import withCounter from './withCounter';

//First import HOC UpdatedComponent and then export it as UpdatedComponent(HoverCounter)

class HoverCounter extends Component {
    render() {
        return (
            <div>
                <h2 onMouseOver={this.props.incrementCount}>{this.props.name} Hovered {this.props.count} times</h2>
            </div>
        )
    }
}

export default withCounter(HoverCounter);
