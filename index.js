let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f6c3ae25887b49d4b108c546909dc4ca
`;

async function getNews() {
    const response = await fetch(url)
    const jsonData = await response.json();

    console.log('jsonData', jsonData.articles[0])

    const newsHTML = jsonData.articles.map(renderArticle);
    document.getElementById('newsList').innerHTML = newsHTML.join(' ')
}


function renderArticle(article) {
    if (article.author === null) return ''
   return `
    
            <div class="card" style="width: 20rem; margin: 1rem;">
                <div class="card-header">
                    <h4>${article.title}</h4>
                </div>
                <img class="card-img-top" src="${article.urlToImage}" alt="Card image cap">
                <div class="card-body">
                    <div class="row card-content">
                        <div class="col-md-6">
                        <h6 class="card-title">${article.author}</h6>
                        </div>
                        <div class="col-md-6">
                            <a href="${article.url}">
                                <h6 class="card-title">${article.source.name}</h6>
                            </a>
                            </div>
                    </div>
                    <div class="row card-content">
                        <p>${article.description}</p>
                        <p><small class="text-muted">${moment(article.publishedAt).format('MMMM Do YYYY, h:mm:ss a')}</small></p>
                    </div>        
                </div>
            </div>
        
    `
}

getNews()

// EXAMPLE PROPERTIES
// author: "Aaron Rupar"
// content: "People who tu.."
// description: "Republican weren’t onstage during the Democratic debate — but were living rent-free inside moderators’ heads."
// publishedAt: "2019-07-31T02:45:00Z"
// source:
//     id: null
//     name: "Vox.com"
// title: "Democratic debate: CNN moderators’ questions echo GOP talking points - Vox.com"
// url: "https://www.vox.com/2019/7/30/20748009/democratic-debate-cnn-moderator-questions-republican-talking-points-bernie-sanders"
// urlToImage: "https://cd