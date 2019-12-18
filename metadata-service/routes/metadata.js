const express = require('express');
const metadataService = require('../services/metadataService');
const router = express.Router();

router.get('/films/:id', function(req, res, next) {
    setTimeout(() => {
        metadataService.getFilmMetadata(req.params.id)
            .then(metadata => res.json(metadata));
    }, 8000);
});

router.get('/people/:id', function(req, res, next) {
    setTimeout(() => {
        metadataService.getPersonMetadata(req.params.id)
            .then(metadata => res.json(metadata));
    }, 8000);
})

module.exports = router;