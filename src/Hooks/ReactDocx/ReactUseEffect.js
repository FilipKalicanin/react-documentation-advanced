import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    // similar to componentDidMount and componentDidUpdate
    useEffect(() => {
        //update the document title using browser API
        document.title = `You clicked ${count} times`;
    }, []);
    //If you want to run an Effect and clean it up only once(on mount and unmount),
    // pass an [] as a second argument. This tells React that effent doesnt depend on any values
    // from props or state, so it never needs to re-run.


    return(
        <div>
            <p>You clickrd {count} times</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default Example;

/*
By usin Effect we tell React that our component needs to do something afrer render

React performs clen-up effect when component unmounts.
Effect run for every re-render and not just once.

Just like with useState, we can use useEffect multiple times to separate unreleated logic.

React will apply every effect used by component in order they were specified.

We can tell React to SKIP APPLAYING an Effect if certain values havent change between re-renders
*/