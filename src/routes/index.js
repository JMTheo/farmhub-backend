var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.render('home', { title: 'home', message: 'Hello world caraio', menuOpt: 'Home' })
})

router.get('/plantas', (req, res) => {
  res.render('plantas')
})

module.exports = router
