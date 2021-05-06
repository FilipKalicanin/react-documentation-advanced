import React from 'react';

// functional component HOC that takes in wrappedComponent and then creates and returns new component
const withCounter = (WrappedComponent) => {

    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

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
                <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
            )
        }
    }
    return WithCounter
}

export default withCounter;