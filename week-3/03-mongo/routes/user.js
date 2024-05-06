const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;
        await User.create({ username, password });
        res.json({ message: "User created successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find({});
        res.json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        const { courseId } = req.params;
        const { username } = req.headers;
        await User.updateOne({ username }, { $push: { purchasedCourses: courseId } });
        res.json({ message: "Purchase complete" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Error handling middleware
router.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({ username: req.headers.username });
        const courses = await Course.find({ _id: { $in: user.purchasedCourses } });
        res.json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
