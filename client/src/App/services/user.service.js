import config from 'config';
import { authHeader } from '../../auth-header';

const bcrypt = require(bcrypt);

export const userService = {
    login,
    logout,
    register,
    update,
    delete: _delete
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username })
    };

    return fetch(`${config.apiUrl}/user/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (err) throw err;
                if (res === true) {
                    localStorage.setItem('user', JSON.stringify(user));

                    return user;
                }
                return ("Incorrect password.");
            });
            // store user details and jwt token in local storage to keep user logged in between page refreshes
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        if (err) throw err;
        bcrypt.hash(myPlaintextPassword, salt, (err, hash) => {
            if (err) throw err;
            user.password = hash;
        });
    });
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/user/register`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}