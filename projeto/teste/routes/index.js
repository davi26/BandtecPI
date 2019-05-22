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
 
  res.render('login');
  

});





router.post('/', async function(req, res, next){
  const sql = await mssql.connect();

  sql.query(`insert into cadastro values ('${req.body.nome}',
      '${req.body.email}',
      '${req.body.telefone}',
      '${req.body.cpf}',
      '${req.body.senha}')
      `, (result, err) => {
    

    console.dir(result)
    console.dir(err)
    });
  
  
});
module.exports = router;
