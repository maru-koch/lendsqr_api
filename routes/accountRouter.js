const express = require('express')
const router = express.router()
const account = require('../controllers/accountController')

router.post('/create', account.create)
router.get('/getDetails', account.getDetails)

module.exports = router