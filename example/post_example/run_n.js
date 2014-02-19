var fk = require("../..")
   ,App = fk.App
   ,post_n = fk.post_n
   ,fs = require('fs')
   ,app = new App
   ,static = fk.static

   app.use(static(__dirname+"/public"));
   app.use(post_n);

    app.post("/post_n",function(req,res){
        console.log(req.body.filename);
        fs.writeFileSync(__dirname+"/public/"+req.body.filename,req.files.img);
        //fs.writeFileSync(__dirname+"/public/1.img",req.files.img);
        res.write("upload ok!");
        res.end();
    })

    app.listen(3000);
