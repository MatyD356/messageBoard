var express = require('express');
var router = express.Router();

/* GET new listing. */
router.get('/', function (req, res, next) {
  res.render('form', { title: "Mini Messageboard" });
});

module.exports = router;
