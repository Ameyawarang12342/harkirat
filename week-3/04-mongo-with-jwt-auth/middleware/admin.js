const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const authHeader = req.headers.authentication
    const words = authHeader.split(" ")
    const token = words[1]

    try{
        const decodedValue = jwt.verify(token, JWT_SECRET)
        if(decodedValue){
            next()
        } else {
            return res.json({
                msg: "Admin not found"
            })
        }
        
    } catch(e) {
        res.json({
            msg: `${e}`
        })
    }
}

module.exports = adminMiddleware;