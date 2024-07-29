//require the http module
var http = require('http');
//Require your custom module
var dt = require('./myModule');
//create an HTTP Server
http.createServer(function (req,res){
    //Set the response header
    res.writeHead(200,{'Content-Type':'text/html'});
    //Use the custom module to get the date and time
    res.write('The date and time is currently: '+dt.myDateTime());
    //End the response
    res.end();
}).listen(8000);//server listens on port 8000