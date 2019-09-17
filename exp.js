console.log("good");
var express = require('express');
var app = express();
var enroll = require('./module/enrollStudent.js');
var table = require('./module/classEnroll.js');

app.all('/', function (req, res) {
   res.sendFile(__dirname + '/main/index.html');
   
});

app.all('/enroll', function (req, res) {
    enroll.enrollStudent(req,res);   
 });



app.get('/class/:classname', function (req, res) {
    var filename = req.params.classname;
    table.classEnroll(filename,res);
    console.log(filename);
    
 });


 app.get('*',function(req,res){
    res.send("<center>Not found!</center>");
});

 
app.listen(8080)