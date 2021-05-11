import React from 'react';

const Counter2 = (props) => {
    return (
        <button onClick={props.incrementCount}>
            {props.count}
        </button>
    )
}

export default Counter2;