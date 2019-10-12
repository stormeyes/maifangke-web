const axios = require('axios').default;

const fetch_data = function (method, ...params) {
    return axios({
        method: 'post',
        url: MODE == 'production' ? "http://api.kongkongyzt.com" : "http://127.0.0.1:6061",
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        },
        data: JSON.stringify({
            method,
            params,
            "jsonrpc": "2.0",
            "id": 0
        })
    });
};

module.exports = {
    query_rank: function(event='UP', limit=20) {
        return fetch_data('query_rank', event, limit).then(function (resp) {
            return Promise.resolve(resp.data.result)
        })
    },
    query_department_by_name: function(query_string) {
        return fetch_data('query_department_by_name', query_string).then(function (resp) {
            return Promise.resolve(resp.data.result)
        })
    },
    query_houses_by_condition: function(form, page) {
        return fetch_data('query_houses_by_condition', form, page).then(function (resp) {

            return Promise.resolve(resp.data.result);
        })
    },
    query_bargains_by_condition: function (form, page) {
        return fetch_data('query_bargains_by_condition', form, page).then(function (resp) {

            return Promise.resolve(resp.data.result);
        })
    }
};