import recordSearch from "./recordSearch";

const handleSearchesRecord = (ip_address_id) => {
    console.log('handleSearchesReecored trigered')
    const searchKeywords = JSON.parse(sessionStorage.getItem('searchKeywords'));
    console.log('The searchKeywords', searchKeywords);
    console.log('The ip_address_id', ip_address_id);

    if (ip_address_id && searchKeywords && searchKeywords.length > 0) {
        searchKeywords.forEach(keyword => {
            recordSearch(keyword, ip_address_id);
        });
    }
    sessionStorage.removeItem('searchKeywords');
};

export default handleSearchesRecord;