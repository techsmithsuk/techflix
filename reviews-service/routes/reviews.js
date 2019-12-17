const express = require('express');
const reviewsService = require('../services/reviewsService');
const router = express.Router();

router.get('/reviews/:id', function(req, res, next) {
    reviewsService.getReviewSummary(req.params.id)
        .then(summary => res.json(summary));
});

module.exports = router;