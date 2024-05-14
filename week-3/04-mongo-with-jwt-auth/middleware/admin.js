const db = require("../db/index");
const {MY_SECRET_KEY} = require("../config");
const adminModel = db.Admin;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        /*
        const username = req.headers.username;
        const password = req.headers.password;
        // Check if password is correct
        const user = await adminModel.findOne({username});
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (isPasswordCorrect){
            console.log("Admin verifed.");
            next();
        }
        */

        const token = req.headers.authorization;
        const words = token.split(" ");
        const jwtToken = words[1];
        const decodedValue = jwt.decode(jwtToken, MY_SECRET_KEY);
        if (decodedValue.username){
            console.log("Admin verifed.");
            req.headers.username = decodedValue.username;
            next();
        } else {
            res.status(403).json({
                msg: "You are not authenticated."
            })
        }
    }
    catch(err){
        res.status(500).json({error: err});
    }
}

module.exports = adminMiddleware;