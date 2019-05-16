var express = require('express');
var router = express.Router();
var sql = require('mssql');




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
  
  

  res.render('cadastro');
});



router.post('/', function(req, res, next){


  
  sql.connect(config, err => {
    new sql.Request().query(`insert into cadastro values ('${req.body.nome}',
                                                          '${req.body.email}',
                                                          '${req.body.telefone}',
                                                          '${req.body.cpf}',
                                                          '${req.body.senha}')
                                                           `, (result, err) => {
        // ... error checks
 
        console.dir(result)
        console.dir(err)
    });
  });
  
  sql.close(function(value) {
    console.log("connection6 close")
  });
});
module.exports = router;
