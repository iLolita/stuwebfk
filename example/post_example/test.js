var App = require("../..").App,
    app = new App;

    app.post("/post",function(req,res){
        var body_data = "";
        req.on("data",function(chunk){
            body_data += chunk;
        });
        req.on("end",function(){
            console.log(body_data.toString());
        })
    })

    app.listen(3000);
