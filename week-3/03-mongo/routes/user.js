const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const router = Router();

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const {username , password} = req.body;

    await User.create({
        username,
        password
    })

    res.status(200).json({
        msg :"User Created successfully !!!"
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});

    if(courses){
        res.status(200).json({
            courses : courses,
            msg : "Success !!"
        })
    }

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    await User.updateOne({
        username: username
    }, {
        "$push": {
            purchasedCourses: courseId
        }
    })
    res.json({
        message: "Purchase complete!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    // for this we have to pass the username and fetch 
    // the info of all the bought courses

    //step1) get user first 
    
    const user = await User.findOne({
        username: req.headers.username
    });

    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router