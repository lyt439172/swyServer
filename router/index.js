const Router = require('koa-router');
const router = new Router();
const appController = require('../controllers/app.js');

const swyDataController = require('../controllers/swyData.js');

router.get('/',(ctx, next )=>{
    ctx.body="<div style='text-align:center'><h1> Welcome to node-koa-cli </h1><h2>Version:1.1.2</h2> </div>"
});
router.post('/upload', appController.updateFile);


// swyData
router.post('/swyData', swyDataController.store); // 添加1条数据
router.get('/findData', swyDataController.index); // 根据条件获取列表数据
router.get('/swyData/:id', swyDataController.show); // 根据id获取1条数据
router.delete('/swyData/:id', swyDataController.destory); // 传入要删除的id
router.post('/swyData/:id', swyDataController.update); // 根据id更新一条数据

module.exports = {
    router
}