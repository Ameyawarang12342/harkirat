const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db/index')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config');

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

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink
    const price = req.body.price

    const courses = Course.find({
        title,
        description,
        imageLink,
        price
    })

    if(courses){
        return res.json({
            msg: "Listed all the course"
        })
    } else {
        return res.status(411).json({
            msg: "Courses not found"
        })
    }

});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.body.courseId
    const username = req.body.username

    await User.findOneAndUpdate({
        username: username
    }, {
        $push: {
            purchesedCourse: courseId
        }
    })
    
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.finOne({
        username: req.body.username
    })

    const userId = user._id

    let course = await Course.find({
        '_id': {
            $in: userId.purchesedCourse
        }
    })

    res.json({
        courses: course
    })
});

module.exports = router