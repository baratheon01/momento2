const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
 
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.json({
      'mensaje' : 'Bienvenido a la app de nombre y fecha'
    })
});

app.get('/saludo/nombre', function (req, res) {
    let datos = req.body;
    var saludo ="hola"
    if(datos.nombre == undefined){
        res.status(400).json({
            "err" : "Datos incompletos"
        });
    }else{
        res.json({
            'data' : `${req.body} ${saludo}`
        })
    }
});

app.get('/edad/xy', function (req, res) {
    let datos = req.body;
    if(datos.edad == 18){
        res.json({
            "mensaje":"Eres mayor de edad"
        });
    }else{
        res.json({
            "mensaje":"no eres mayor de edad"
        })
    }
});

app.get('/dabase', function(req, res){
    mongoose.connect('mongodb://localhost:27017/momento2', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }, (err, res) => {
          if(err) throw err;
          console.log("Conectado a la DB");
      });
})



let port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor ONLINE en el puerto ${ port }`);
});