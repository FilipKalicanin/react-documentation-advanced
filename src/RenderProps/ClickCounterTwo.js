import React, { Component } from 'react'

// in this component we render what we want to see on UI and we take functionality
// from parent component int this case <Counter />

class ClickCounterTwo extends Component {

    render() {
        return (
            <div>
                <button onClick={this.props.incrementCount}>Clicked {this.props.count} times</button>
            </div>
        )
    }
}

export default ClickCounterTwo
