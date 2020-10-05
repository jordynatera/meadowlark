//import express from 'express';
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));//usando middleware para servir archivos estaticos 
app.set('port', process.env.PORT || 3000);

var handlebars = require('express3-handlebars')//importando handlebars
    .create({ defaultLayout:'main' });//layout para las vistas
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
//routes
app.get('/', function(req, res){
    //res.type('text/plain'); tipo de contenido
    //res.send('Meadowlark Travel'); enviar msj
    res.render('home'); 
});

app.get('/about', function(req, res){
    var randomFortune = 
        fortunes[Math.floor(Math.random() * fortunes.length)];//devuelve una fortuna aleatoria
    res.render('about', {fortune : randomFortune});//renderiza la fortuna aleatoria y la manda a la página About
});
//middleware for 404 Not Found/ Catch-all handler
app.use(function(req, res, next) {
    res.status(404);
    res.render('404');
});
//middleware for 500 - Server Error
app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function(){//set listen port
    console.log( 'Express started on http://localhost:'+app.get('port')+'; press Ctrl C to terminate.');
});

var fortunes = [
    "Conquista tus sueños o ellos te conquistarán",
    "Los ríos necesitan de la primavera",
    "No le temas a lo desconocido",
    "Tendrás una agradable sorpresa",
    "Cuando sea posible, mantenlo simple"
];