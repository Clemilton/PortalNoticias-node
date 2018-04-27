var express = require('express');
//Executando a funcao que o modulo express retorna
var app= express();

//Ajustando a view engine do express
app.set('view engine','ejs');
app.get('/',function(req,res){

	res.render("<html><body>Portal de notícias</body></html>");
});

app.get('/tecnologia',function(req,res){
	res.render("secao/tecnologia");
});

app.listen(3000,function(){
	console.log("Servidor rodando com express");

});