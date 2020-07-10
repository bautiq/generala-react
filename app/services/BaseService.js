import axios from 'axios';

const baseUrl = "http://localhost:3000/";

export function get(callback, path, params, body) {
    var url = `${baseUrl}`;

   
    if (!!path) {
        url+= path
    }

    if (!!params) {
        url += params
    }



    axios.get(url, body)
            .then( function(r) { callback(r) })
            .catch(function(error) { callback(error) });
}