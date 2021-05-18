import React, { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 10
};

// reducer function accepts the current state and an action and returns state based on an action
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}


function CounterTwo() {
    // 1. call useReducer passing in reducer function and initialState
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <div>1stCount: {count.firstCounter}</div>
            <div>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            </div>
            <div>2ndCount: {count.secondCounter}</div>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment2nd</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement2nd</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>reset</button>
        </div>
    )
}

export default CounterTwo;