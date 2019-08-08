const DevController = require('./controllers/DevController');
const LikeCotroller = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

const routes = require("express").Router()

routes.get('/devs', DevController.index);
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeCotroller.store);
routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes