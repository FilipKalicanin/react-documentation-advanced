import React, { useEffect, useRef } from 'react'

function FocusInput() {

    // 1. Create a ref variable by calling useRef and passing in initial value
    // 2. Attach ref to an component using ref={}

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    return (
        <div>
            <input ref={inputRef} type='text' />
        </div>
    )
}

export default FocusInput
