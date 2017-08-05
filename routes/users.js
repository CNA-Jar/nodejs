var express = require('express');
var router = express.Router();
var getParams = require('../controller/getParams');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
    var id = req.params.id;
    getParams(res,id);
});

module.exports = router;
