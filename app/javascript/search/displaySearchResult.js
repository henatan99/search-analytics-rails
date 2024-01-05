function displaySearchResults(articles) {
    const searchResultsContainer = document.getElementById('articles-wrapper');
    searchResultsContainer.innerHTML = '';

    if(articles.length > 0) {
        const ul = document.createElement('ul');

        articles.forEach(article => {
            const li = document.createElement('li');

            const h2 = document.createElement('h2');
            h2.textContent = article.title;
            h2.classList.add('article-title')

            const p = document.createElement('p');
            p.textContent = article.body;
            p.classList.add('article-body');

            li.appendChild(li);
            li.appendChild(h2);
        
            ul.appendChild(li);
        });

        searchResultsContainer.appendChild(ul);
    } else {
        const p = document.createElement('p');
        p.textContent = 'No articles found.';
        searchResultsContainer.appendChild(p);
    }
}

export default displaySearchResults;