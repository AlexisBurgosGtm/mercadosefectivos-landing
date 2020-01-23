var express = require("express");
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');

//ROUTERS EN MYSQL
let routerClientes = require('./router/routerClientes');
let routerRutas = require('./router/routerRutas');

var http = require('http').Server(app);
var io = require('socket.io')(http);

const PORT = process.env.PORT || 7000;

app.use(bodyParser.json());

//app.use(express.static('build'));
app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
      /*
      // Website you wish to allow to connect
      res.setHeader('Access-Control-Allow-Origin', '*');
      // Request methods you wish to allow
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        // Request headers you wish to allow
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name, application/json');
        // Set to true if you need the website to include cookies in the requests sent
      res.setHeader('Access-Control-Allow-Credentials', false);
  */
  console.log("/" + req.toString());
  next();
});


app.get("/",function(req,res){
	res.sendFile(path + 'index.html');
}); 

// ROUTER CLIENTES
 app.use('/clientes', routerClientes);
 // ROUTER RUTAS
 app.use('/rutas', routerRutas);

app.use("/",router);

app.use("*",function(req,res){
  res.send("NO ENCONTRADO")
});

io.on('connection', function(socket){

  socket.on('bienvenido', function(msg,user){
	  io.emit('bienvenido', msg, user);
  });

	socket.on('productos nuevo', function(msg,user){
	  io.emit('productos nuevo', msg, user);
  });

 
});

http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});
