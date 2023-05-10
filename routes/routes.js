const path = require('path')
const express = require('express')
const router = express.Router()
const articles = require('../data/articles.json')
const articlesController = require('../controllers/articlesController')

router.get('/', (req, res) => {
    res.render('index', { articles })
})

// localhost:3000/article?category=coucou

router.get('/article', (req, res) => articlesController.showCategory(req, res))

router.get('/article/:id', (req, res, next) => articlesController.showArticles(req, res, next))

module.exports = router