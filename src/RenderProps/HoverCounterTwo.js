import React, { Component } from 'react'

// in this component we render what we want to see on UI and we take functionality
// from parent component int this case <Counter />

class HoverCounterTwo extends Component {

    render() {
        return (
            <div>
                <h3 onMouseOver={this.props.incrementCount}>Hovered {this.props.count} times</h3>
            </div>
        )
    }
}

export default HoverCounterTwo