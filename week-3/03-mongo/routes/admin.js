const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
     await Admin.create({
        username: username,
        password: password
    })
    res.json({
        msg: "admin created"
    })

});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imagelink = req.body.imagelink;
    const price = req.body.price
});
const cource_new = await Course.create({
    title, 
    description,  
    imageLink, 
    price
}) 
res.json({
    message: "cource created successfully",
    cource_id: cource_new._id
}) 
router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const responce = await Course.find({})
    res.json({
        data: responce
    })

});

module.exports = router;