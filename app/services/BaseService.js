import axios from 'axios';

export const get = (path, params, body) => {
    const url = `http://localhost:3000/${path}?${params}`;

    axios.get(url, body)
            .then( function(r){ return r })
            .catch(function(error) { return error });
}

module.exports = {get};