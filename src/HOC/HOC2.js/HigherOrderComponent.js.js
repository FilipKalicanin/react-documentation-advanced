import React from 'react';

const HigherOrderComponent = (WrappedComponent) => {

    class WithStateAndMethod extends React.Component {
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
                <WrappedComponent count={this.state.count} incrementCount={this.incrementCount} />
            );
        }
    }
    return WithStateAndMethod;
}

export default HigherOrderComponent;