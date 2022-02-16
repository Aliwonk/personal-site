import { sendDataFetch } from "./ajax.jsx";

userInfo();

// INFORMATION ABOUT USER
function userInfo() {
    // GET IP USER
    fetch('https://api.db-ip.com/v2/free/self').then(function (res) {
        return res.json();
    }).then(function (result) {
        var date = new Date();
        var data = {
            statistic: {
                date: date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear(),
                time: date.getHours() + ':' + date.getMinutes(),
                timezone: date.getTimezoneOffset() / -60,
                pathname: window.location.pathname,
                referrer: document.referrer,
                fullInfo: result
            }
        };

        // SEND DATA ON SERVER
        sendDataFetch('/', { 'Content-Type': 'application/json' }, JSON.stringify(data));
    });

    // SEND DATA ON SERVE
};