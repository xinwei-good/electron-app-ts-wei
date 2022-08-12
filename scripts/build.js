
const {execSync}=require('child_process');
const path = require('path');

function webBuild(cb){
    execSync('npx vue-tsc --noEmit && npx vite build',{
        cwd:path.join(__dirname,'../packages/web-app')
    },(err,stdout,stderr)=>{
        if(err){
            console.log(err);
            return
        }
    });
   cb()
}

function nodeBuild(cb){
    execSync('npx electron-builder --win --x64',{
        cwd:path.join(__dirname,'../packages/my-electron-app')
    },(err,stdout,stderr)=>{
        if(err){
            console.log(err);
            return
        }
    });
    cb()
}



module.exports={
    webBuild,
    nodeBuild
}