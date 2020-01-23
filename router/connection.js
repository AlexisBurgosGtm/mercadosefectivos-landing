const mysql = require('mysql');

const config = {
  host            : 'mysql7003.site4now.net',
  user            : 'a45479_mysql',
  password        : 'razors1805',
  database        : 'db_a45479_mysql'
};

const configx = {
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'logistica',
  multipleStatements: true
};

let execute ={
	Query : (res,qry,send)=>{
		var pool  = mysql.createPool(config);
		   
	   pool.getConnection(async function(err, connection) {
		 //if (err) throw err; // not connected!
		 if (err){
			 console.log('el error es.. ' + err)
		   //res.send(err);
		   connection.release();
		   }
	  
	   // Use the connection
	   connection.query(qry, function (error, results, fields) {
		   
	   //console.log('Consulta enviada...' + results + ' RS') 
	   
	   if(send==0){
		   res.send(results);
	   }else{
		   res.send('Consulta ejecutada')
	   }
			   
		 // When done with the connection, release it.
		 connection.release();
	  
		 // Handle error after the release.
		 //if (error) throw error;
		 if (error){
			 console.log('El otro error es... ' + error)
			 connection.release();
			 res.send(error);
		 }
				   
		 // Don't use the connection here, it has been returned to the pool.
	   });
	 });	
	}	
};


module.exports =  execute;


