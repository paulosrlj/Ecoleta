const express = require('express')
const app = express()


//configurar rotas(caminhos)
//página inicial
app.get('/', (req, res) => {
    console.log(__dirname)
    return res.render('index.html', {
        title: "Um título"
    })
})

app.get('/create-point', (req, res) => {
    console.log(__dirname)
    return res.render('create-point.html')
})

app.get('/search', (req, res) => {
    return res.render('search-results.html')
})

//Configurar pasta pública
app.use(express.static('public'))

// Utilizando template engine
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: app,
    noCache: true
})

const porta = 3000
app.listen(3000, () => {
    console.log('Servidor executando na porta ', porta)
})