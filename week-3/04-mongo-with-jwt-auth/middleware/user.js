const { json } = require('express')
const {JWT_SECRET} = require('../config')
const jwt = require('jsonwebtoken')

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const authHeader = req.headers.authorization
    const words = authHeader.split(" ")
    const jwtToken = words[1]
    const decodedToken = jwt.decode(jwtToken, JWT_SECRET)

    if(decodedToken.username){
        req.username = decodedToken.username
        next()
    } else {
        res.json({
            msg: "You are not authenticated"
        })
    }
}

module.exports = userMiddleware;