const { User } = require('../db');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const { username, password } = req.headers;
    // we can also use the async await method for this.
    User.findOne({
        username,
        password
    }).then(function (value) {
        if (value) {
            next();
        } else {
            res.status(403).json({
                msg: "User doesnt exists"
            })
        }
    })

}

//Note : always remeber to call next middleware using next() else it will get stuck


module.exports = userMiddleware;