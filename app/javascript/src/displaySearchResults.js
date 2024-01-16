function displaySearchResults(articles) {
    const searchResultsContainer = document.getElementById('articles-wrapper');
    searchResultsContainer.innerHTML = '';
    console.log('filtered articles', articles);

    if(articles.length > 0) {
        const ul = document.createElement('ul');

        articles.forEach(article => {
            const li = document.createElement('li');

            const a = document.createElement('a');
            a.setAttribute('href', `/articles/${article.id}`)
            
            const h2 = document.createElement('h2');
            h2.textContent = article.title;
            h2.classList.add('article-title')

            const p = document.createElement('p');
            p.textContent = article.body;
            p.classList.add('article-body');

            a.appendChild(h2);

            li.appendChild(a);
            li.appendChild(p);
        
            ul.appendChild(li);
        });

        searchResultsContainer.appendChild(ul);
    } 
}

export default displaySearchResults;