const user = require("../controllers/userController")

const express = require('express')
const router = express.Router()

// paths to the user controller methods

router.post("/signup", user.signup)
router.post("/login", user.login)

module.exports = router