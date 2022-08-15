const  {series ,parallel} =require('gulp');
const {cleanWeb,cleanNode} =require('./scripts/clean');
const {webBuild,nodeBuild}=require('./scripts/build');
const {copyWebDist}=require('./scripts/copy');


exports.cleanWeb=cleanWeb
exports.cleanNode=cleanNode
exports.clean=parallel(cleanWeb,cleanNode)
  
       
exports.webBuild=webBuild
exports.nodeBuild=nodeBuild
exports.copyWeb=copyWebDist

async function gulps(cb){
    await series(
         cleanWeb(cb),
         cleanNode(cb),
        console.log('清除dist包完成'),
          webBuild(cb),
        console.log('web打包完成'),
         copyWebDist(cb),
        console.log('复制web包完成'),
         nodeBuild(cb),
        console.log('electron打包完成'),
        )
    // cb()
}

exports.default=gulps