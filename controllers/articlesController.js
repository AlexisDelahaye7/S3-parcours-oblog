const articles = require('../data/articles.json')

function showCategory(req, res){
    const arrayOfCat = articles.filter(element => element.category == req.query.category)
    res.render('index', { articles: arrayOfCat })
}

function showArticles(req, res, next){
    let index = articles.findIndex(element => element.id == req.params.id)
    if(index === -1) next()
    res.render('article.ejs', { element: articles[index] })
}

module.exports = { showCategory, showArticles }