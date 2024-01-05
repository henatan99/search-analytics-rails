import debounce from './debounce';
import displaySearchResults  from './displaySearchResult';
import recordSearch from './recordSearch';

const search = document.addEventListener('DOMContentLoaded', function() {
    // const searchInput = document.getElementById('search-input');

    // let lastSearchQuery = '';
    // const debounceDelay = 1000;

    // const handleSearchInput = debounce((event) =>  {
    //     const query = event.target.value.trim();
    
    //     if(query && query !== lastSearchQuery) {
    //         recordSearch(query);
    //         lastSearchQuery = query;
    
    //         fetch(`articles?query=${encodeURIComponent(query)}`)
    //             .then(response => response.json())
    //             .then(data => displaySearchResults(data))
    //             .then(error => console.error('Error fetching search results:', error));
    //     }
    // }, debounceDelay);

    // searchInput.addEventListener('input', handleSearchInput);
    
    fetch(`articles`)
                .then(response => response.json())
                .then(data => displaySearchResults(data))
                .then(error => console.error('Error fetching search results:', error));
});

export default search;