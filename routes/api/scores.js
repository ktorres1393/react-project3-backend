const express = require('express');
const router = express.Router();
const scoresCtrl = require('../../controllers/scores');

router.get('/', scoresCtrl.highScores);

/*---------- Protected Routes ----------*/
router.use(require("../../config/auth"));
// adds check auth so if user is not sign in or token is not valis, gives "not auth " error

router.post('/', checkAuth, scoresCtrl.create);

//restrict access so ONLY valid authenticated users can access the route
function checkAuth(req, res, next){
    if(req.user) return next();
    return res.status(401).json({msg: "Not Authorized"})
}

module.exports = router;