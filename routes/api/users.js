const express = require('express');
const router = express.Router();

// @route   GET api/Users/test
// @desc    Test Users route
// @acess   Public
router.get('/test', (req, res) => res.json({
    msg: "Users route work"
}))

module.exports = router;