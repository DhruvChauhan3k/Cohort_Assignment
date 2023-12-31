const { Router } = require("express");
const {User}=require("../db/index");
const {Course}=require("../db/index")
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const a=new User({ username: req.body.username,password:req.body.password})
    await a.save();
    res.send("User created")
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const a=await Course.find({});
    res.send(a);
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const a=req.params.courseId;
    const b=req.headers.username;
    const c=req.headers.password;
    const d= await User.findOne({username:b,password:c});
    d.course.push(a);
    await d.save();
    res.send('Done Purchase')
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const a=req.headers.username
    const b=req.headers.password
    const c=await User.findOne({username:a,password:b})
    const d=await Course.find({_id:{$in: c.course}})
    res.send(d);
});

module.exports = router