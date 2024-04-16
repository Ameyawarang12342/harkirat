const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    // Extract the data and add to the database
    const {username , password} = req.body;
    await Admin.create({
        username,
        password
    })

    res.status(200).json({
        msg : "Admin created succesfully !!!"
    })
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const {title , description ,price,imageLink} = req.body;

    await Course.create({
        title,
        description,
        price,
        imageLink
    })
    res.status(200).json({
        msg : "Course Created Successfully !!!"
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});

    res.status(200).json({
        courses
    })
});

module.exports = router;