import ListSearchRecords from "./ListSearchRecords";

const fetchSearchesListSearchRecords = () => {
    fetch(`ip_addresses.json`)
    .then(response => response.json())
    .then(data => ListSearchRecords(data.address, data.searches))
    .catch(error => console.error('Error fetching search records:', error));
}

export default fetchSearchesListSearchRecords;