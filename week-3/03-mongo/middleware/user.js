const {User}=require("../db/index")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const a=req.headers.username;
    const b=req.headers.password;
    const c=await User.findOne({username:a,password:b});
    if(!c)res.send("wrong info")
    next();
}

module.exports = userMiddleware;