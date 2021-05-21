import React, {useReducer} from 'react'
import login from './login';

function loginReducer(state, action) {
    switch(action.type) {
        case 'field': {
            return {
                ...state,
                [action.field]: action.value,
            };
        }

        case 'login': {
            return {
                ...state,
                isLoading: true,
                error: '',
            };
        }

        case 'success': {
            return {
                ...state,
                isLoggedIn: true,

            }
        }

        case 'error': {
            return {
                ...state,
                error: 'Incorrect username or password',
                isLoading: false,
                username: '',
                password: '',
            }
        }

        case 'logout': {
            return {
                ...state,
                isLoggedIn: false,
                username: '',
                password: '',
            }
        }
        default: {
            return state
        }
    }
}

const initialState = {
    username: '',
    password: '',
    isLoading: false,
    error: '',
    isLoggedIn: false
}

function App() {
    const [state, dispatch] = useReducer(loginReducer, initialState);
    const { username, password, isLoading, error, isLoggedIn } = state;

    const onSubmit = async e => {
        e.preventDefault();

       dispatch({type: 'login'});

        try {
            await login({ username, password });
            dispatch({type: 'success'});
        } catch(error) {
            dispatch({type: 'error'})
        }
    };

    return (
        <div>
            {isLoggedIn ? (
                <>
                <h2>Welcome {username}</h2>
                <button onClick={() => dispatch({type: 'logout'})}>LogOut</button>
                </>
            ) :
            <form onSubmit={onSubmit}>
                {error && <p>{error}</p>}
                <p>Please Login</p>
                <input
                type='text'
                placeholder="username"
                value={username}
                onChange={(e) => dispatch({ type: 'field', field: 'username', value: e.target.value})} />
                <input
                type="password"
                placeholder="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => dispatch({ type: 'field', field: 'password', value: e.target.value})} />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in' : 'Log-In'}
                </button>
            </form>
            }
        </div>
    )
}

export default App
