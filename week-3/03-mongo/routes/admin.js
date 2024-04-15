const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index')
// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    const admin = await Admin.create({
        username,
        password
    })
    res.json({
        message: `Admin has created ${admin}`
    })
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const imageLink = req.body.imageLink
    const price = req.body.price

    const courses = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message: 'Course has been created', courseId: courses._id
    })
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})

    res.json({
        courses: response
    })
});

module.exports = router;