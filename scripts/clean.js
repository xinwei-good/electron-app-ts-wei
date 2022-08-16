var fs = require('fs'); // 引入fs模块
 
function deleteall(path) {
    var files = [];
    if(fs.existsSync(path)) {
    files = fs.readdirSync(path);
    files.forEach(function(file, index) {
    var curPath = path + "/" + file;
    if(fs.statSync(curPath).isDirectory()) { // recurse
    deleteall(curPath);
    } else { // delete file
    fs.unlinkSync(curPath);
    }
    });
    fs.rmdirSync(path);
    }
}

function cleanWeb(cb){
    deleteall('./packages/web-app/dist')
    cb()
}

function cleanNode(cb){
    deleteall('./packages/my-electron-app/dist')
   cb()
}

function cleanWebDist(cb){
    deleteall('./packages/my-electron-app/src/web-dist')
   cb()
}


module.exports={
    cleanWeb,
    cleanNode,
    cleanWebDist
}