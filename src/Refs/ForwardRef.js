import React from 'react'

// Create input in return and forward to parent element FRParentInput

// function ForwardRef() {
//     return (
//         <div>
//             <input type="text"></input>
//         </div>
//     )
// }

// after ref was created in Parent element, create input in child element using React.forwardRef(props, ref)
const ForwardRef = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type="text" ref={ref}></input>
        </div>
    )
})


export default ForwardRef
