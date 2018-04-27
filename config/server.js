var express = require('express');
//Executando a funcao que o modulo express retorna

var app= express();

//Ajustando a view engine do express
app.set('view engine','ejs');
//Ajusta a pasta de views
app.set('views','./app/views');

module.exports =app;