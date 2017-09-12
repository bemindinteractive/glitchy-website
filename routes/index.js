var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Glitchy | Glitch your f***ing world!' });
});

module.exports = router;
