const express = require('express');

const router = express.Router();

router.get('/posts', (req, res, next) => {
    res.json({ posts: ["wer", "iuy"]})
});

// router.post('/posts');

// router.delete('/posts');

module.exports={router}