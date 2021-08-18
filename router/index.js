const Router = require('koa-router');
const router = new Router();
const appController = require('../controllers/app.js');

const swyDataController = require('../controllers/swyData.js');

router.get('/',(ctx, next )=>{
    ctx.body="<div style='text-align:center'><h1> Welcome to node-koa-cli </h1><h2>Version:1.1.2</h2> </div>"
});
router.post('/upload', appController.updateFile);


// swyData
router.post('/swyData', swyDataController.store);
router.get('/swyData', swyDataController.index);
router.get('/swyData/:id', swyDataController.show);
router.delete('/swyData/:id', swyDataController.destory); // 传入要删除的id 如 1,2,3,4,5
router.put('/swyData/:id', swyDataController.update);

module.exports = {
    router
}