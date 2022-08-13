const express = require('express')
const router = express.Router()
const account = require('../controllers/accountController')
const { isValidID } = require('../middlewares/userMiddleware')

router.post('/create', account.create)
router.get('/:user_id', isValidID, account.getDetails)

module.exports = router