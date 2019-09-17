exports.enrollStudent = function (req, res) {
    var fs = require('fs');
    req.on("data", function (reqData) {
        var data2 = JSON.parse(reqData);
        var filename = data2.sub1.split(" ").join("-");
        fs.appendFile("./class/"+filename + ".csv", data2.sub1 + 
        "," + data2.name1 + "," + data2.email + "," + data2.cy + "\n", function (err) {
        if (err) throw err;         
           res.end();
        
        });
    });
} 
