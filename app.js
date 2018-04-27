var express = require('express');
//Executando a funcao que o modulo express retorna
var app= express();

app.get('/',function(req,res){

	res.send("<html><body>Portal de notícias</body></html>");
});

app.get('/tecnologia',function(req,res){
	res.send("<html><body>Portal de tecnologia</body></html>");
})

app.listen(3000,function(){
	console.log("Servidor rodando com express");

});