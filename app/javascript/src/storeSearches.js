const storeSearches = (newKeyword) => {
    if (!sessionStorage.getItem('searchKeywords')) {
        sessionStorage.setItem('searchKeywords', JSON.stringify([]));
    }
    if (newKeyword !== '') {
        const existingKeywords = JSON.parse(sessionStorage.getItem('searchKeywords')) || [];
        const newKeywords = [];
        let valid = true;
        let newKeyWordRegex = new RegExp(newKeyword);
        for (let i = 0; i < existingKeywords.length; i++) {
            let keyword = existingKeywords[i];
            let keywordRegex = new RegExp(keyword);
            if(keyword.match(newKeyWordRegex)) {
                valid = false;
                break;
            } 
            if(!newKeyword.match(keywordRegex)) {
                newKeywords.push(keyword);
            }
        }

        if (valid) {
            newKeywords.push(newKeyword);
            sessionStorage.setItem('searchKeywords', JSON.stringify(newKeywords));

            console.log('Updated Search Keywords:', newKeywords);
        } else {
            console.log('Keyword already exists:', newKeyword);
        }
    }
}

export default storeSearches;