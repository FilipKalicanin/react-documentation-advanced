import React from 'react';
import Component1 from './Component1';
import Component2 from './Component2';


class AppHoc2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Component1 />
                <Component2 />
            </>
        );
    }
}

export default AppHoc2;