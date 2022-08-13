
const router = require('express').Router()
const account = require("../controllers/accountController")

router.post('/create', account.create())

module.exports = router