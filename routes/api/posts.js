const express = require('express');
const router = express.Router();

// @route   GET api/posts/test
// @desc    Test post route
// @acess   Public
router.get('/test', (req, res) => res.json({
    msg: "Posts route work"
}))

module.exports = router;