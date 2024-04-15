const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin } = require('../db')
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const user = await Admin.create({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            user
        }, JWT_SECRET)

        return res.json({
            token
        })
    } else {
        res.status(411).json({
            msg: "Admin create"
        })
    }
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    const user = await Admin.findOne({
        username,
        password
    })
    if(user){
        const token = jwt.sign({
            user
        }, JWT_SECRET)
        
        res.json({
            token
        })
    } else {
        res.status(411).json({
            msg: "Admin not found"
        })
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink
    const price = req.body.price

    const course = await Admin.create({
        title,
        description,
        imageLink,
        price
    })

    res.json({
        msg: "Courses have been created", courseId: course._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const admin = await Admin.find({
        username: req.body.username
    })
    .populate('Courses')

    res.json({
        msg: "courses have found"
    })

    // if(admin){
    //     return res.json({
    //         msg: "courses have feteched", course: admin
    //     })
    // }
});

module.exports = router;