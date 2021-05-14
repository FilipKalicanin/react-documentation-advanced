import React, { useState, useEffect } from 'react';

// custom hook for storing input values
const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    return [values, e => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }]
}

const App = () => {
    const [values, handleChange] = useForm({ email: '', password: '' });

    // gets called with every render/rerender,
    // in dependecy array we can specify wich component changes will bi tracked
    useEffect(() => {
        console.log('render');
    }, [values.password])

    return (
        <div>
            <input
                name='email'
                value={values.email}
                onChange={handleChange}
            />
            <input
                name='password'
                type='password'
                value={values.password}
                onChange={handleChange}
            />
        </div>
    )
}

export default App;