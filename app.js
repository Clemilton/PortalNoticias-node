app = require('./config/server');

var home = require('./app/routes/home')(app);

var portalNoticias = require('./app/routes/noticias')(app);

var form = require('./app/routes/formulario_inclusao_noticia')(app);



app.listen(3000,function(){
	console.log("Servidor rodando com express");


});