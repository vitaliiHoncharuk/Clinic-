const router = require('express').Router();

const authUser = require('../controllers/authorization/authUser');
const authAdmin = require('../controllers/authorization/authAdmin');


router.post('/user', authUser);
router.post('/admin', authAdmin);


module.exports = router;
