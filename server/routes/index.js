const router = require('express').Router();
const controller = require('../controller/index');

const Authenticate = require('../middleware/authenticate');
const Authorization = require('../middleware/authorization');


router.post('/register', controller.register);
router.post('/login', controller.login);



module.exports = router