var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Code-155/20000' });
});

/* GET Tibet page. */
router.get('/tibet', function(req, res, next) {
    res.render('tibet');
});

/* GET Yunnan page. */
router.get('/yunnan', function(req, res, next) {
    res.render('yunnan');
});

/* GET northwest page. */
router.get('/northwest', function(req, res, next) {
    res.render('northwest');
});

/* GET myanmar page. */
router.get('/myanmar', function(req, res, next) {
    res.render('myanmar');
});

/* GET Lanka Mountain page. */
router.get('/lanka_mountain', function(req, res, next) {
    res.render('lanka_mountain');
});

module.exports = router;