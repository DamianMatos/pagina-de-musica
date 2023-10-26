var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render("kyez/kyez",{
      layout:"kyez/layout"
  });
});

module.exports = router;
