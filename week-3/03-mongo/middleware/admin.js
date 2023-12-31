// Middleware for handling auth
const {Admin}=require("../db/index")

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const a=req.headers.username;
    const b=req.headers.password;
    const c=await Admin.findOne({username:a,password:b})
    if(!c)res.send("wrong info")
    next();
}

module.exports = adminMiddleware;