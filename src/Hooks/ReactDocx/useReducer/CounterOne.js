import React, { useReducer } from 'react'

const initialState = 0;

// reducer function accepts the current state and an action and returns state based on an action
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}


function CounterOne() {
    // 1. call useReducer passing in reducer function and initialState
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('increment')}>Increment</button>
            <button onClick={() => dispatch('decrement')}>Decrement</button>
            <button onClick={() => dispatch('reset')}>reset</button>
        </div>
    )
}

export default CounterOne;
