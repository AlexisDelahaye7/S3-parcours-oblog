const express = require('express')
const server = express()
const path = require('path')

const PORT = 3000

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, '/integration'))
server.use(express.static(path.join(__dirname, 'static')))

/* ROUTES */
const routes = require('./routes/routes')
server.use('/', routes)

/* 404 */
server.use((req, res, next) => {
    res.status(404).send('404 not found')
})

server.listen(3000, () => {
    console.log(`Server started on http://localhost:${PORT}`)
})