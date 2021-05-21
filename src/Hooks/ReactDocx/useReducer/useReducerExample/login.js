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