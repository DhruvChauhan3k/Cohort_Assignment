const { Router } = require("express");
const {Admin}=require("../db/index")
const {Course}=require("../db/index")
const adminMiddleware=require("../middleware/admin")
const router = Router();

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const a=req.body.Username;
    const b=req.body.Password;
    const admin = new Admin({ username: a, password: b })
    await admin.save();
    res.json({message:"admin created successfully"})
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
           const c=req.body.title
           const d=req.body.description
           const e=req.body.price
           const f=req.body.imageLink
           const g=new Course({title:c,description:d,price:e,imageLink:f})
           await g.save()
           res.send(`course created ${g._id}`)
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const a= await Course.find({})
    res.send(a.map(x=>x._id))
});

module.exports = router;