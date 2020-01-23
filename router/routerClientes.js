const express = require('express');
const router = express.Router();
const execute = require('./connection');

// LISTA DE CLIENTES
router.get("/lista", async(req,res)=>{
  
  const {token, codruta} = req.query;
  
  let qr = `SELECT
  clientes.CODCLIE,
  clientes.NIT,
  clientes.NOMCLIE,
  clientes.DIRCLIE,
  municipios.DESMUN,
  departamentos.DESDEPTO,
  clientes.TELEFONO,
  clientes.EMAIL,
  clientes.TIPOPRECIO,
  clientes.LATITUD,
  clientes.LONGITUD,
  clientes.SALDO,
  clientes.ACTIVO
FROM clientes
  LEFT OUTER JOIN municipios
    ON clientes.CODMUN = municipios.CODMUN
  LEFT OUTER JOIN departamentos
    ON clientes.CODDEPTO = departamentos.CODDEPTO
WHERE clientes.TOKEN = '${token}'
AND clientes.CODRUTA = '${codruta}'`;

	execute.Query(res,qr,0);

});

// EDITAR UN CLIENTE
router.post("/editar", async(req,res)=>{
  
  const {token} = req.body;
  
  let qr = ``;

	execute.Query(res,qr);

});

// NUEVO CLIENTE
router.post("/nuevo", async(req,res)=>{
  
  const {token, nit, nomclie, dirclie, codmun, coddepto, telefono,email, tipoprecio,saldo,latitud,longitud, codruta} = req.body;
  
  let qr = `INSERT INTO CLIENTES (TOKEN,NIT,NOMCLIE,DIRCLIE,CODMUN,CODDEPTO,TELEFONO,EMAIL,TIPOPRECIO,SALDO,LATITUD,LONGITUD,ACTIVO,CODRUTA)
                          VALUES ('${token}','${nit}','${nomclie}','${dirclie}','${codmun}','${coddepto}','${telefono}','${email}','${tipoprecio}',${saldo},${latitud},${longitud},'SI','${codruta}')`;

  execute.Query(res,qr,0);
});

// ELIMINAR CLIENTE
router.delete("/eliminar", async(req,res)=>{
  
  const {token,codclie} = req.body;
  
  let qr = `DELETE FROM CLIENTES WHERE CODCLIE=${codclie} AND TOKEN='${token}'`;

	execute.Query(res,qr,1);

});

module.exports = router;
