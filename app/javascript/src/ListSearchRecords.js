const ListSearchRecords = (address, searches) => {
    console.log('my records', searches);
    const listItems = document.getElementById('search-records');
    listItems.innerHTML = '';
    const ip = document.getElementById('ip_address');
    
    if(searches.length > 0) {
        ip.textContent = `Searches IP: ${address}`;
        searches.forEach(record => {
            const li = document.createElement('li');
            li.textContent = record.query;
            listItems.appendChild(li);
        })
    }
}

export default(ListSearchRecords);