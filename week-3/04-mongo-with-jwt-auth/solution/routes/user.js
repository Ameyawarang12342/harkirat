const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config');
const { User } = require("../db");


// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username
    const password = req.body.password

    const user = await User.create({
        username,
        password
    })
    if(user) {
        const token = jwt.sign({
            user
        }, JWT_SECRET)
        return token
    }

    res.json({
        msg: 'User created'
    })

});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const user = await User.findOne({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            user
        }, JWT_SECRET)
        return token
    }

    res.json({
        msg: "User found"
    })

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    console.log(username);

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router