var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('cadastro');
});


router.post('/y', function(req, res, next){
  console.log('teste');
  console.log(req.body);
});
module.exports = router;
