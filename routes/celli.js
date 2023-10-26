var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render("celli/celli",{
      layout:"celli/layout"
  });
});

module.exports = router;
