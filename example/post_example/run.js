var fk = require("../..")
   ,App = fk.App
   ,app = new App
   ,static = fk.static
   ,post_t = fk.post_t;

    app.use(static(__dirname+"/public"));
    app.use(post_t);

    app.post("/post",function(req,res){

        res.write("post success!\n");
        res.write("----------------\n")
        res.write("title: \n")
        res.write(req.body.title+"\n");
        res.write("content: \n");
        res.write(req.body.content);

        res.end();

    })

    app.listen(3000)
