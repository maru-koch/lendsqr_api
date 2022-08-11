
const express = require('express')
const router = express.Router()

router.post("/signup", ()=>{
    console.log("signed up")
})


module.exports = router