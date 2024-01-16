import fecthArticlesDisplaySearchResults from "./fecthArticlesDisplaySearchResults";
import fetchSearchesListSearchRecords from "./fetchSearchesListSearchRecords";
import handleSearchInput from "./handleSearchInput";
import handleSearchesRecord from "./handleSearchesRecord";

document.addEventListener('turbo:load', function() {
    const controllerELem = document.getElementById('articles');
    if (controllerELem) {
        const searchInput = document.getElementById('search-input');
        const searchForm = document.getElementById('search-form');
        // const searchBtn = document.getElementById('search-submit');

        // set sessionStorage item named `searchKeywords` if it doesn't exist 
        if (!sessionStorage.getItem('searchKeywords')) {
            sessionStorage.setItem('searchKeywords', JSON.stringify([]));
        } 

        // declare ip_address_id 
        var ip_address_id;

        const createIp = () => {
            console.log('I am about to  create ip');
        
            fetch('/ip_addresses', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': getCSRFToken(),
                },
                body: JSON.stringify({}),
            })
            .then(response => response.json())
            .then(data => {ip_address_id = data.ip_address.id; console.log(data)})
            .catch(error => console.error('Error creating ip:', error));
        }

        const handleAssignIp = () => {
            fetch(`ip_addresses.json`)
            .then(response => response.json())
            .then(data => {
                if(data) {
                    ip_address_id = data.id;
                    console.log('fetched ip_address_id', ip_address_id);
                } else {
                    createIp()
                } 
            })
            .catch(error => console.error('Error fetching ip address:', error));
        }
        
        // If ip_adderss exist with the unique value of the remote ip, fetch and assign its id to the 
        // ip_address_id otherwise create a new ip_address
        handleAssignIp();
        console.log('The ip address in turbo load', ip_address_id);
    
        // fetch articles from API and display them
        fecthArticlesDisplaySearchResults('');

        // fetch searches records from api and display them 
        fetchSearchesListSearchRecords();    

        // attach eventListentes to handlers 
        searchInput.addEventListener('input', handleSearchInput);
        window.addEventListener('beforeunload', () => handleSearchesRecord(ip_address_id));
        window.addEventListener('unload', () => handleSearchesRecord(ip_address_id));
        searchForm.addEventListener('submit', () => handleSearchesRecord(ip_address_id));
    }
});
