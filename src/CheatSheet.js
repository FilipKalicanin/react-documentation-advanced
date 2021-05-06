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

// SetState in <App />

// fetchData() {
//     getData().then(res => {
//         return res.data
//     })
//         .then(newData => {
//             this.setState({
//                 requestState: 'finishedLoading',
//                 data: newData
//             })
//             //catch error and display error screen
//         }).catch(() => {
//             this.setState({
//                 requestState: 'error'
//             })
//         })
// }
//////////// call fetch method within component did mount /////

// componentDidMount() {
//     this.fetchData()
// }

//////////////////////////////////////////////////
//////////////////////////////////////////////////

// LocalStorage Get and Set
set - JSON.parse(localStorage.getItem('loggedUser'));
get - localStorage.setItem('loggedUser', JSON.stringify(res.id));