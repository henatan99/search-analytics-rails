const recordSearch = (query) => {
    fetch('/record-search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
    })
    .then(response => response.json())
    .then(data => console.log(data)
    .then(error => console.error('Error recording search:', error)));
}

export default recordSearch;