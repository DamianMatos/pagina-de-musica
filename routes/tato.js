var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render("tato/tato",{
      layout:"tato/layout"
  });
});

module.exports = router;
