const express = require('express');
const router = express.Router();

// @route   GET api/Profile/test
// @desc    Test Profile route
// @acess   Public
router.get('/test', (req, res) => res.json({
    msg: "Profile route work"
}))

module.exports = router;