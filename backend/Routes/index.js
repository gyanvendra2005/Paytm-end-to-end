const express = require('express');
const userrouter = require('./userrouter');
const bankrouter = require('./bankrouter');
const router = express.Router();


router.use('/user',userrouter)
router.use('/bank',bankrouter)

module.exports = router;