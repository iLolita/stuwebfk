var fk = require("../..")
   ,App = fk.App
   ,post = fk.post
   ,fs = require('fs')
   ,app = new App
   ,static = fk.static

   app.use(static(__dirname+"/public"));
   app.use(post);

    app.post("/post_n",function(req,res){
        fs.writeFileSync(req.body.fileName,req.files.img);
        res.write("upload ok!");
        res.end();
    })

    app.listen(3000);
