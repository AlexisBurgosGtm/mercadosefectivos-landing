const express = require('express');
const router = express.Router();
const execute = require('./connection');

// LISTA 
router.get("/lista", async(req,res)=>{
  
  const {token} = req.query;
  
  let qr = `SELECT CODRUTA, DESRUTA FROM rutas WHERE TOKEN = '${token}' ORDER BY ID`;

	execute.Query(res,qr,0);

});


module.exports = router;