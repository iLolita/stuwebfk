var App = require("../..").App,
    app = new App,
    static = require("../../lib/static.js");

    app.use(static("/public"));

    app.get("/about",function(req,res){
        res.write("my name is o");
        res.end();
    })

    app.get("/contact",function(req,res){
        res.write("contact me use");
        res.end();
    })

    app.listen(3000);
