var express = require('express');
var path = require('path');
var app = express();
var port = 3000;
app.get('/',function(req, res){
 res.sendFile(path.join(__dirname+'/index.html'));
});
app.listen(port, function() {
 console.log('server ready on http://localhost:' + port);
});

app.use(express.static(path.join(__dirname+'/src')));
app.use(express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.static(__dirname + '/node_modules/jquery/dist'));