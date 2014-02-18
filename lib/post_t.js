var qs = require("querystring");

module.exports = function post(req,res,next){

    var body_data ="";

    req.on("data",function(chunk){
        body_data += chunk;
    })

    req.on("end",function(){
        try{
            req.body = qs.parse(body_data);
        }catch(e){}
        next();
    });
}


