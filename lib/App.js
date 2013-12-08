
var http = require("http")
	,pathRegexp = require("./pathRegexp")
	,url = require("url");

module.exports = App;

function App(){
    // 插件有序列表
    var middleList = this._middleList = [];

    var self = this;

//    this._getHandle = null;

//    this._postHandle = null;
    this._route_post_handles = []

    this._route_get_handles = []

    // request事件响应函数
    function handle(req,res){
	   req.parmas = {};

       /* if(middleList.length === 0){
            // 如果没有功能插件什么都不做。
        }else{*/

            // 循环执行插件
            var middleIndex = 0; // 插件索引

            execMiddle();

            // 执行这个函数时，会自动执行下一个middle插件。
            // 至于这个函数的执行，是由插件所控制。
            function next(){
                middleIndex += 1;
                execMiddle();
            }

            // 执行插件函数
            function execMiddle(){
                var middle = middleList[middleIndex];
                if(middle){
                    middle(req,res,next);
                }else{
		    var handle;
		    var path = url.parse(req.url).pathname;

		    function findHandle(route_handles){
		    	for(var i=0,len= route_handles.length;i<len;i++){
				var route_handle = route_handles[i];
				var pass = route_handle.route.test(path);
				if(pass){
					route_handle.route.paramNames.forEach(function(name,index){
					req.params[name] = RegExp["$"+(index+1)];
				 })
				handle = route_handle.handle;
				break;
				}
			}
		    }
		    switch(req.method){
		    	case "GET":
				findHandle(self._route_get_handles);
			break;
			case "POST":
				findHandle(self._route_post_handles);
			break;
		    }
		    if(handle)
		    	handle(req,res);
		    else{
		    	res.statusCode = 404;
			res.end();
		    }
		}
            }        

       // }


    }

    this._server = http.createServer(handle);

}

// 加入功能栈
App.prototype.use = function(middle){
    this._middleList.push(middle);
}

// 监听端口
App.prototype.listen = function(){
    this._server.listen.apply(this._server,arguments);
}

App.prototype.get = function(route,handle){
    this._route_get_handles.push({route:pathRegexp(route),handle:handle})
}

App.prototype.post = function(route,handle){
    this._server.post_handles.push({route:pathRegexp(route),handle:handle})
}
module.exports = App;
