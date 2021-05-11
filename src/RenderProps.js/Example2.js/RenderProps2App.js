import React, { Component } from 'react'
import Wrapper from './Wrapper'
import Component1 from './Component1';
import Component2 from './Component2';


class RenderProps2App extends Component {

    render() {
        return (
            <div>
                <Wrapper render={(count, incrementCount) => {
                    return <Component1 count={count} incrementCount={incrementCount} />
                }} />
                <Wrapper render={(count, incrementCount) => {
                    return <Component2 count={count} incrementCount={incrementCount} />
                }} />
            </div>
        )
    }
}

export default RenderProps2App;
