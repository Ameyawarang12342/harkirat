const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require('../db/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Admin Routes
router.post('/signup', async (req, res) => {
  const { username, password } = req.body
  const existingAdmin = await Admin.findOne({ username }).exec()
  if (existingAdmin) return res.status(409).json({ message: 'Admin already exist' })
  try {
    const hashedPwd = await bcrypt.hash(password, 10)
    const adminCreated = await Admin.create({
      username,
      password: hashedPwd
    })
    res.status(200).json({ message: 'Admin created successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

router.post('/signin', async (req, res) => {
  const { username, password } = req.body;
  const adminExists = await Admin.findOne({ username }).exec();
  if (!adminExists) res.status(404).json({ message: "UNAUTHORISED: admin does not exist" })
  if (!(bcrypt.compare(password, adminExists.password))) return res.status(401).json({ message: "wrong password" })
  const token = jwt.sign({ username: username }, process.env.ACCESS_TOKEN_SECRET)
  res.status(200).json({ token })
});

router.post('/courses', adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink, published } = req.body
  try {
    const courseCreated = await Course.create({
      title,
      description,
      price,
      imageLink,
      published
    })
    res.status(200).json({ message: 'Course created successfully', courseId: courseCreated._id })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

router.get('/courses', adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find()
    res.status(200).json({ courses: courses })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
});

module.exports = router;