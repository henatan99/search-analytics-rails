const ListSessionSearchRecords = (records) => {
    const listItems = document.getElementById('session-search-records');
    listItems.innerHTML = '';
    console.log('session records to list', records);

    if(records.length > 0) {
        records.forEach(record => {
            const li = document.createElement('li');
            li.textContent = record;
            listItems.appendChild(li);
        })
    }
}

export default ListSessionSearchRecords;
