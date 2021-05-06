import React, { Component } from 'react'
import FRParentInput from './FRParentInput';

// Simple create ref

// export default class CreateRef extends Component {
//   constructor(props) {
//     super(props);
//     //1. create ref in construntor
//     //2. connect ref with input element in render
//     this.inputRef = React.createRef()

//     this.clickHandler = this.clickHandler.bind(this);
//   }

//   componentDidMount() {
//     this.inputRef.current.focus()
//   }

//   clickHandler() {
//     // collect value from ref
//     alert(this.inputRef.current.value);
//   }

//   render() {
//     return (
//       <div>
//         <input type="rext" ref={this.inputRef}></input>
//         <button onClick={this.clickHandler}>Click</button>
//       </div>
//     )
//   }
// }

// FORWARD REFS ////////////////////////////////////////

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uslesConstructor: 'useless'
    }
  }
  
  render() {
    return (
      <div>
        <FRParentInput />
      </div>
    )
  }
}
