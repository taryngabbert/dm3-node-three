const videoGameCtrl = require('./videoGameCtrl');


module.exports= app => {
  app.get(`/api/videoGames`, videoGameCtrl.getGames);
}
