import React from 'react';
import ComponentC from './ComponentC';
import UserContext from './userContext';

// Forward info from <App />  to <ComponentF /> using context

// 1. create context --> userContext.js
// 2. provide a context value --> line 22. added value
// 3. Consume the context value  --> ComponentF within return

export class ContextApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 'Filip'
        }
    }

    render() {
        return (
            //user contextProvider to forward value that you want to use
            <div>
                <UserContext.Provider value={this.state.user}>
                    <ComponentC />
                </UserContext.Provider>
            </div>
        )
    }
}

export default ContextApp;
