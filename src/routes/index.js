var express = require('express')
var router = express.Router()

router.get('/', (req, res) => {
  res.send('opa');
  console.log('opa');
})

router.get('/plantas', (req, res) => {
})

module.exports = router
