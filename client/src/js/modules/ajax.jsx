// XHR
export function sendDataXHR (URL, data, setReqHeader = {name: 'Content-Type', value: 'application/json'}, callback) {
    const xhr = new XMLHttpRequest();

    xhr.upload.onload = () => callback(null);
    xhr.upload.onerror = () => callback(new Error('XHR post fail'));

    xhr.open('POST', URL, true);
    xhr.setRequestHeader(setReqHeader.name, setReqHeader.value);   
    xhr.send(data);
};
// END XHR

// FETCH
export function getDataFetch(URL) {
    return fetch(URL)
};

export function sendDataFetch(URL, headers, data) {
    fetch(URL, {
        method : 'POST',
        headers : headers,
        body : data
    });
};

export function deleteDataFetch(URL, headers) {
    return fetch(URL, {
        method: 'DELETE',
        headers: headers
    });
};
// END FETCH