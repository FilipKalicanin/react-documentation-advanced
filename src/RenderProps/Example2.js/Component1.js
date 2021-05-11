import React from 'react';

const Counter1 = (props) => {
    return (
        <button onClick={props.incrementCount}>
            {props.count}
        </button>
    )
}

export default Counter1;