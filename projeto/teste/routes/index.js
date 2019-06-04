var express = require('express');
var router = express.Router();
const mssql = require('../configs/db')








/* GET home page. */
router.get('/cadastro', async function(req, res, next) {
  const sql = await mssql.connect();

  sql.query('select * from cadastro',(err,result)=>{

    res.send(result);
  });
  

});

router.get('/',  function(req, res, next) {
 
  res.render('cadastro');
  

});

router.get('/login',  function(req, res, next) {
 
  res.render('login');
  

});

router.post('/login', async function(req, res, next) {
  console.log(req.body);
  const sql = await mssql.connect();

  sql.query( `select * from cadastro where email ='${req.body.email}' and senha = '${req.body.senha}'`,(err,result)=>{

    if(result.recordset.length > 0){
      res.render('index');
    }
  });
   
  

});








router.post('/', async function(req, res, next){
  const sql = await mssql.connect();

  sql.query(`insert into cadastro values ('${req.body.nome}',
      '${req.body.email}',
      '${req.body.telefone}',
      '${req.body.cpf}',
      '${req.body.senha}')
      `, (err,result) => {
    

      if(err){
        console.log("entrou")
        console.log(err);
      }else{
        console.log("entrou2")
        res.redirect('/login');
      }
    });
  
  
});
module.exports = router;
