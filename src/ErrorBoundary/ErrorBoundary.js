import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error);
        console.log(info);
    }

    // if there is no error cathced, continue normal rendering
    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong</h1>
        }
        return this.props.children
    }
}

// now we can wrap components in <App /> that we want to render
// While in development phase even if we made this work, it will still display an error
// but we can click an X in the right corner to see do we get acctual error message

// as well errorBoundary will catch only error where in components that are wrapped
// so IDEAL would be to wrap each component instead of all at once!
export default ErrorBoundary;