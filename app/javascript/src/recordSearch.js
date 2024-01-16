import getCSRFToken from "./getCSRFToken";

const recordSearch = (query, ip_address_id) => {
    console.log('I am about to record search');

    fetch('/searches', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRF-Token': getCSRFToken(),
        },
        body: JSON.stringify({ query, ip_address_id }),
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
    })
    .catch(error => console.error('Error recording search:', error));
}

export default recordSearch;