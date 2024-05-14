const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const db = require("../db/index");
const {MY_SECRET_KEY} = require("../config");
const router = Router();
const adminModel = db.Admin;
const courseModel = db.Course;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Admin Routes
router.post('/signin', adminMiddleware, async (req, res) => {
    // Implement admin signup logic
    try{
        res.status(200).json({msg: "Admin signedIn successfully "});
    }
    catch(err){
        res.status(500).json({error: err});
    }
});

router.post('/signup', async (req, res) => {
    try{
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const admin = new adminModel({
            username:  req.body.username,
            password: hashedPassword
        });
        admin.save();

        // const mysecretkey = "HAKB";
        const payload = {
            username: req.body.username,
            password: hashedPassword,
          };
        const token = jwt.sign(payload, MY_SECRET_KEY, { expiresIn: '5d' });

        res.status(200).json({msg: "Admin registered ", token: token});
    }
    catch(err){
        res.status(500).json({error: err});
    }

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    try{
        const course = new courseModel({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageLink: req.body.imageLink
        });
        course.save();
        res.status(200).json({msg: "Course registered! "});
    }
    catch(err){
        res.status(500).json({error: err});
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
   try{
    const courses = await courseModel.find({});
    console.log("Retrived courses..!");
    res.status(200).json({courses});
   }
   catch(err){
    res.status(500).json({error: err});
   }

});

module.exports = router;