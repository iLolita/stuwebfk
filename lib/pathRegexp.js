module.exports = pathRegexp;
//var path;
function pathRegexp (path){
    var paramNames = [];
    path = path.replace(/\?(.*)$/,"")
               .replace(/((\*{1}(?=\/))|(\*{1}(?=$)))/g,"(..*)")
	       //.replace(/((\{1}(?=\/|$)))/g,"(,*)")
               .replace(/((:(.*(?=\/)))|(:(.*(?=$))))/g,function(){
			var len = arguments.length-3;
			for(var i=0;i<len;i++){
			    var avg = argumentsp[i+1];
			    if(typeof avg === "string" && avg !== ":"){
			    	paramNames.push(avg);
			    }
			}
			return "(.*)"
		})
               .replace(/\//g,"\\\/")

    var regexp = new RegExp(path+"$");
    regexp.paramNames = paramNames;
    return regexp;
}
//var path_regexp = pathRegexp("/article/:id/*/:name");
//console.log(path_regexp);


