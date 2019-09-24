import { authHeader } from '../auth-header';
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");

export const userService = {
    login,
    logout,
    register,
    delete: _delete
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    };

    return fetch(`/api/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            bcrypt.compare(password, user.password, (err, res) => {
                if (err) throw err;
                if (res) {
                    localStorage.setItem('helprrUser', JSON.stringify(user));
                    return user;
                }
                return ("Incorrect password.");
            });
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('helprrUser');
}

function register(user) {
    let salt = bcrypt.genSaltSync(10);
    user.password = bcrypt.hashSync(user.password, salt);
    user.chatID = Math.floor(Math.random() * 1000000000);
    user.token = jwt.sign(user.user_name, 'thereisnospoon');
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };
    return fetch(`/api/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            localStorage.setItem('helprrUser', JSON.stringify(user));

            return user;
        });
}

// function update(user) {
//     const requestOptions = {
//         method: 'PUT',
//         headers: { ...authHeader(), 'Content-Type': 'application/json' },
//         body: JSON.stringify(user)
//     };

//     return fetch(`/users/${user.id}`, requestOptions).then(handleResponse);;
// }

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`/users/${id}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}