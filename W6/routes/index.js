var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { id: '405418053', name: '陳思樺' });
});

module.exports = router;