var App = require("../..").App,
    query = require("../..").query,
    app = new App;

    // 加入query中间件
    app.use(query);

    app.get("/about",function(req,res){
        res.write("my name is "+req.query.name);
        res.end();
    })

    app.listen(3000);
