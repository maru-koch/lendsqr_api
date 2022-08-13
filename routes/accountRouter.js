const express = require('express')
const router = express.router()
const account = require('../controllers/accountController')
const { isValidID } = require('../middlewares/accountMiddleware')

router.post('/create', account.create)
router.get('/getDetails', isValidID, account.getDetails)

module.exports = router