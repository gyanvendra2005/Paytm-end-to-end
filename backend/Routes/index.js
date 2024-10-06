const express = require('express');
const userrouter = require('./userrouter');
const router = express.Router();


router.use('/user',userrouter)


module.exports = router;