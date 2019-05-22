const sql = require('mssql');
const config = {
    user: 'davi.teixeira',
    password: '#Gf31772308897',
    server: 'davi-server.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'Davi-Bandtec',
  
    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
  }
module.exports={
    connect(){
        return new Promise((resolve,reject)=>{

            sql.close();
            sql.connect(config, err => {
             
                var request = new sql.Request()
            
                if(err){
                    console.log(err);
                    
                }else{
                    resolve(request);

                }
                
             
                
            });
        });
        
    }
};


