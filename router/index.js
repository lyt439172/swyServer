const Router = require('koa-router');
const router = new Router();
const appController = require('../controllers/app.js');

const userController = require('../controllers/user.js');

router.get('/',(ctx, next )=>{
    ctx.body="<div style='text-align:center'><h1> Welcome to node-koa-cli </h1><h2>Version:1.1.2</h2> </div>"
});
router.post('/upload', appController.updateFile);


// user
router.post('/user', userController.store);
router.get('/user', userController.index);
router.get('/user/:id', userController.show);
router.delete('/user/:id', userController.destory); // 传入要删除的id 如 1,2,3,4,5
router.put('/user/:id', userController.update);

module.exports = {
    router
}