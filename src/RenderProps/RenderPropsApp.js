import React from 'react';
import ClickCounterTwo from './ClickCounterTwo';
import Counter from './Counter';
import HoverCounterTwo from './HoverCounterTwo';

// Here in final render we will call <Component /> wich contains functionality
// And within <ClickCounterTwo /> || <HoverCounterTwo /> components

class RenderPropsApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Counter render={(count, incrementCount) => (
                    <ClickCounterTwo count={count} incrementCount={incrementCount} />
                )} />
                <Counter render={(count, incrementCount) => (
                    <HoverCounterTwo count={count} incrementCount={incrementCount} />
                )} />
            </>
        );
    }
}

export default RenderPropsApp;