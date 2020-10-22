// Importando os modulos
const path = require('path')
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const dotenv = require('dotenv')

// Iniciando as variaveis de configurações
dotenv.config()

// Importando as rotas
const routes = require('./routes/index')
const sensores = require('./routes/sensores')

// Instanciando o framework backend
const app = express()

// Atribuindo os middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(compression())

// Configurando a engine do html
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'views'))
// Configurando a pasta publica de arquivos estáticos
app.use('/public', express.static('public'))

// Definindo o mapeamento das rotas
app.use('/', routes)
app.use('/sensores/', sensores)

module.exports = app
