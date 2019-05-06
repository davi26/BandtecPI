var express = require('express');
var router = express.Router();
var sql = require('mssql');

sql.close();


const config = {
  user: 'igor.silva',
  password: '#Gf47633297824',
  server: 'server01191034.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
  database: 'BancoDigitalTime',

  options: {
      encrypt: true // Use this if you're on Windows Azure
  }
}


/* GET home page. */
router.get('/', function(req, res, next) {
  
  sql.close(function (value) {
    console.log("connection6 closed");
  });
  sql.connect(config, err => {
    // ... error checks
 

    // Query
 
    new sql.Request().query('select * from monitoramento', (err, result) => {
        // ... error checks
 
        //console.dir(result)
        console.dir(err)
    });
  });

  res.render('cadastro');
});


router.post('/', function(req, res, next){

  //console.log('teste');
  //console.log(req.body);
});
module.exports = router;
