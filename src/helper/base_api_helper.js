const fetch = require("node-fetch");

exports.postApi = async (url, requestBody) => {
    let options = {
        method : 'post',
        headers :{
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(requestBody)
    }
    try {
        return await fetch(url, options);
    }catch (err) {
        console.log('Error in sending POST Request: ', err);
    }
};

exports.getApi = async (url, queryParams) => {
    let options = {
        method : 'get',
        headers :{
            'Content-Type': 'application/json',
        }
    }
    const params = new URLSearchParams(queryParams);
    try {
        return await fetch( url + params, options);
    } catch (err) {
        console.log('Error in sending GET request: ', err);
    }
};