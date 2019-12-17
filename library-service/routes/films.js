const express = require('express');
const filmsService = require('../services/filmsService');
const router = express.Router();

router.get('/films', function(req, res, next) {
    res.json(filmsService.getAllFilms());
});

router.get('/films/:id', function(req, res, next) {
    res.json(filmsService.getFilm(req.params.id));
});

router.get('/people', function(req, res, next) {
    res.json(filmsService.getAllPeople());
});

router.get('/people/:id', function(req, res, next) {
    res.json(filmsService.getPerson(req.params.id));
});


module.exports = router;