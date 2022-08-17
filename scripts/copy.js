const fs = require('fs');


  function copyWebDist(cb){
    fs.cp('./packages/web-app/dist', './packages/my-electron-app/src/web-dist', { recursive: true }, (err) => {
      if (err) {
        console.error(err);
      }
    })
    cb()
  }

  module.exports={
    copyWebDist
  }
