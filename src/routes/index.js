var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.send('index');
})

router.get('/plantas', (req, res) => {
})

module.exports = router
