var express = require('express');
var router = express.Router();
const registerInitialCheck = require('../middlewares/registerChecks');
const {register , registerSuperAdmin} = require('../controllers/register');
var checkSuperAdmin = require("../middlewares/checkSuperAdmin");
/* GET home page. */
router.get('/', function(req, res, next) {
  const session = req.session;

  session.username = 'Nikhil';

  res.render('index', { title: 'Express' });
});


router.post('/register',registerInitialCheck,register);
router.post('/register-super-admin',registerInitialCheck,registerSuperAdmin);
router.get('/super',checkSuperAdmin,(req,res)=>{
    res.send("SUCCESSFUL");
})

module.exports = router;
