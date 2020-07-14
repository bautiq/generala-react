import axios from 'axios';

const baseUrl = "http://localhost:3000/";

function generateUrl(path, params) {
    var url = `${baseUrl}`;

    if (!!path) {
        url+= path
    }

    if (!!params) {
        url += params
    }
    return url;
}

export function get(callback, path, params, body) {
    const url = generateUrl(path, params);
    axios({method: 'get', url: url, headers: {}, data: body})
            .then( function(r) { callback(r, undefined) })
            .catch(function(error) { callback(undefined, error) });
}

export function post(callback, path, params, body) {
    const url = generateUrl(path, params);
    axios({method: 'post', url: url, headers: {}, data: body})
            .then( function(r) { callback(r, undefined) })
            .catch(function(error) { callback(undefined, error) });
}

export function put(callback, path, params, body) {
    const url = generateUrl(path, params);
    axios({method: 'put', url: url, headers: {}, data: body})
            .then( function(r) { callback(r, undefined) })
            .catch(function(error) { callback(undefined, error) });
}