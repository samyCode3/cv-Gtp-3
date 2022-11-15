const express = require("express")
const router =  express()
const generator = require("../controllers/cvGenerator")

router.post("/generate-cv", generator.myGenerator)

module.exports = router