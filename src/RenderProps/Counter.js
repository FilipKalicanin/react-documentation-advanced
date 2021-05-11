import React, { Component } from 'react'

// container component where we implement common functionality
// state and method is the same for both components

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }

        this.incrementCount = this.incrementCount.bind(this);
    }

    incrementCount() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                {this.props.render(this.state.count, this.incrementCount)}
            </div>
        )
    }
}

export default Counter
