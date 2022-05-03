const express = require('express')
const router = express.Router()
const path = require('path')
const UserController = require('../controllers/userController')

router
    .route('/')
    .get((req,res) => {
        res.render(path.resolve('views/signup.ejs'));
    })
module.exports = router