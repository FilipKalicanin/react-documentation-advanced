import React, { Component } from 'react'
import ClickCounter from './clickCounter'
import HoverCounter from './hoverCounter'

export class AppHOC extends Component {

    render() {
        return (
            <div>
                <ClickCounter />
                <HoverCounter />
            </div>
        )
    }
}

export default AppHOC
