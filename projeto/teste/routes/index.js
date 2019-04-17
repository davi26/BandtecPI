var express = require('express');
var router = express.Router();
var sql = require('mssql');

sql.close();


const config = {
  user: 'davi.teixeira',
  password: '#Gf31772308897',
  server: 'davi-server.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
  database: 'Davi-Bandtec',

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
 
    new sql.Request().query('select * from cadastro', (err, result) => {
        // ... error checks
 
        //console.dir(result)
        console.dir(err)
    });
  });

  res.render('cadastro');
});


router.post('/y', function(req, res, next){

  //console.log('teste');
  //console.log(req.body);
});
module.exports = router;
