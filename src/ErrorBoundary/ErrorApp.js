import React from 'react';
import Car from './Car';
import ErrorBoundary from './ErrorBoundary';

class ErrorApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            useless: 'state'
        }
    }

    render() {
        return (
            //wrap components to error boundary that we imported
            <>
                <ErrorBoundary>
                    <Car carBrand="Audi" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Car carBrand="Porsche" />
                </ErrorBoundary>
                <ErrorBoundary>
                    <Car carBrand="Fiat" />
                </ErrorBoundary>
            </>
        );
    }
}

export default ErrorApp;