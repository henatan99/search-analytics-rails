import displaySearchResults from "./displaySearchResults";

const fecthArticlesDisplaySearchResults = (query) => {
    fetch(`articles.json?query=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => displaySearchResults(data))
    .catch(error => console.error('Error fetching search results:', error));
}

export default fecthArticlesDisplaySearchResults;