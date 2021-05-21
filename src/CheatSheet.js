///////////////////////////////////////////////////////////////////
// FETCH GET METHOD
export function getData() {
    let data = fetch(`http://localhost:3001/users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-CMC_PRO_API_KEY': ''
        }
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`${res.status}`);
            } else {
                return res.json();
            }
        }).then(data => {
            return data;
        })
    return data;
}

///////////////////////////////////////////////////////////////////
// FETCH POST METHOD
export function postRequest(user) {
    let newUser = fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then((res) => {
            if (!res.ok) {
                throw new Error(`${res.status}`);
            } else {
                return res.json()
            }
        }).then(res => {
            return res
        })
    return newUser
}

///////////////////////////////////////////////////////////////////
// FETCH PUT METHOD
export function putRequest(id, newData) {
    let newUser = fetch(`http://localhost:3001/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newData)
    }).then((res) => {
        if (!res.ok) {
            throw new Error(`${res.status}`);
        } else {
            return res
        }
    }).then(res => {
        return res.json()
    })
    return newUser;
}

///////////////////////////////////////////////////////////////////
// FETCH DELETE METHOD
export function deleteRequest(id) {
    let deleted = fetch(`http://localhost:3001/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then((res) => {
        if (!res.ok) {
            throw new Error(`${res.status}`);
        }
    });
    return deleted;
}

//////////////////////////////////////////////////
//////////////////////////////////////////////////

/* SetState in <App />

fetchData() {
    getData().then(res => {
        return res.data
    })
        .then(newData => {
            this.setState({
                requestState: 'finishedLoading',
                data: newData
            })
            //catch error and display error screen
        }).catch(() => {
            this.setState({
                requestState: 'error'
            })
        })
}
////////// call fetch method within component did mount /////

componentDidMount() {
    this.fetchData()
} */

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// LocalStorage Get and Set
set - JSON.parse(localStorage.getItem('loggedUser'));
get - localStorage.setItem('loggedUser', JSON.stringify(res.id));

/*

ELEMENT TYPE || VALUE PROPERTY    || CHANGE CALLBACK || NEW VALUE IN THE CB

text         || value="string"    || onChange        || event.target.value

checkbox     || cheched={boolean} || onChange        || event.target.checked

radio        || cheched={boolean} || onChange        || event.target.checked

<textarea/>  || value="string"    || onChange        || event.target.value

<select/>    || value="option val"|| onChange        || event.target.value

*/

//////////////
// LOG IN CLASSIC
//////////////

function App() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onSubmit = async e => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await login({ username, password });
            setIsLoggedIn(true);
            setUsername('');
            setPassword('');
            setError('');
        } catch(error) {
            setError('Incorrect username or password!');
        }
        setIsLoading(false);
    }

    return (
        <div>
            {isLoggedIn ? (
                <>
                <h2>Welcome {username}</h2>
                <button onClick={() => setIsLoggedIn(false)}>LogOut</button>
                </>
            ) :
            <form onSubmit={onSubmit}>
                {error && <p>{error}</p>}
                <p>Please Login</p>
                <input
                type='text'
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
                <input
                type="password"
                placeholder="password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" disabled={isLoading}>
                    {isLoading ? 'Logging in' : 'Log-In'}
                </button>
            </form>
            }
        </div>
    )
}

export default async function login({username, password}) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(username === 'filip' && password === '123') {
                resolve();
            } else {
                reject();
            }
        }, 1000);
    });
}