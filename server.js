'use strict';
let app =  require('./src/app.js');


class Server{
  constructor(){
this.app =  app;
this.port = process.env.PORT || 3000;
this.init();

  }

  init(){

    this.app.listen(this.port, () => {

    console.log("App running at", this.port);
  });
}
}


new Server();
