
const express = require('express')
const router = express.Router()
const transaction = require('../controllers/transactionController')

router.post("/transact", transaction.transact)
router.post("/transfer", transaction.transfer)


module.exports = router;