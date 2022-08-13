
const express = require('express')
const router = express.Router()
const transaction = require('../controllers/transactionController')

router.post("/transact", transaction.transact)


module.exports = router;