const checkSuperAdmin = (req,res,next) => {
    if(req.session.User.role === "super-admin"){
        next();
    }
    else{
        res.status(401).send("Needs to be super admin");
    }
}

module.exports = checkSuperAdmin;