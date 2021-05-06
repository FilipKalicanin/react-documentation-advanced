import React, { Component } from 'react'
import ComponentE from './ComponentE';

export class ComponentC extends Component {
    render() {
        console.log(this.context)
        return (
            <div>
                <ComponentE />
            </div>
        )
    }
}

export default ComponentC
