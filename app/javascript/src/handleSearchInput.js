import storeSearches from "./storeSearches";
import fecthArticlesDisplaySearchResults from "./fecthArticlesDisplaySearchResults";
import ListSessionSearchRecords from "./ListSessionSearchRecords";

const handleSearchInput = (event) =>  {
    const query = event.target.value.trim();
    console.log('query', query)
    storeSearches(query);
    
    if(query && query.length > 0) {
        fecthArticlesDisplaySearchResults(query);
    }
    console.log('next create ip');
    console.log('now check session storage', sessionStorage.getItem('searchKeywords'));
    const records = sessionStorage.getItem('searchKeywords')
    if(records) ListSessionSearchRecords(JSON.parse(records));
};

export default handleSearchInput;