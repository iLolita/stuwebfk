var fk = require("../..")
   ,App = fk.App
   ,post = fk.post
   ,static = fk.static
   ,app = new App

    app.use(static(__dirname+"/public"));
    app.use(post);

    app.post("/post",function(req,res){
        var fs = require("fs");
        fs.writeFile(__dirname+"/public/file.txt",req.files.txt,function(){
            res.write("ok!");
            res.end();
        })

    })


    app.listen(3000)
