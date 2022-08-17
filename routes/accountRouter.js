const express = require('express')
const router = express.Router()
const account = require('../controllers/accountController')
const { isValidID } = require('../middlewares/userMiddleware')

router.post('/create', account.create)
router.get('/balance', account.checkBalance)
router.get('/confirm', account.confirmAccount)
router.get('/:user_id', account.getDetails)

module.exports = router