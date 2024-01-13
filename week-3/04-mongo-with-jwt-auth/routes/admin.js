const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const jwt = require("jsonwebtoken")
const { Admin, Course } = require('../db/index')
const router = Router();
const jwtPassword = "devaccesskey"

// Admin Routes
router.post('/signup', async function(req, res) {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;

    let newAdmin = Admin({
        username : username,
        password : password
    })

    console.log("Received Ping at /signup")

    try {
        const savedEntry = await newAdmin.save();
        res.json({ message: 'Admin created successfully' })
    }
    catch(err) {
        res.status(500).json({message : "Internal Server Error"})
    }
    
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;
    let auth_token = "Bearer " + jwt.sign({username : username, password : password}, jwtPassword);

    try {
        let user = await Admin.findOne({username : username, password : password});
        if(!user) {
            res.status(404).json({message : "User is not signed up!"})
            return ;
        }
        user.auth_token = auth_token;
        const savedEntry = await user.save();
        res.json({token : auth_token});
    }
    catch (err) {
        res.status(500).json({message : "Internal Server Error"})
    }
});

router.post('/courses', adminMiddleware, async function(req, res) {
    // Implement course creation logic
    let numCourses;
    try {
        numCourses = await Course.countDocuments({});
    } catch (err) {
        res.status(500).json("Internal Server Error");
        return;
    }

    let title = req.body.title;
    let description = req.body.description;
    let imageLink = req.body.imageLink;
    let price = parseInt(req.body.price);

    let newCourse = Course({
        id : numCourses + 1,
        title : title,
        description : description,
        price : price,
        imageLink : imageLink,
        published : true
    })

    try {
        const savedEntry = await newCourse.save();
        res.json({ message : "Course created successfully", courseId : numCourses + 1} )
    }
    catch(err) {
        res.status(500).json({message : "Internal Server Error"})
    }
});

router.get('/courses', adminMiddleware, async function(req, res) {
    // Implement fetching all courses logic
    try {
        let entries = await Course.find({});
        res.json({courses : entries});
    } catch(err) {
        res.status(500).json({ message : "Internal Server Error"});
    }
});



module.exports = router;