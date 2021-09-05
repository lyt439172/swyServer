const { SwyData } = require('../models/index');
const RetJson  = require('../lib/retjson');

module.exports = {
    
    async store(ctx) {
        const swyData = await SwyData.createSwyData({
            represent: ctx.request.body.represent,
            representExtra: ctx.request.body.representExtra || '',
            reason: ctx.request.body.reason,
            position: ctx.request.body.position || '',
            status: ctx.request.body.status,
            solution: ctx.request.body.solution || ''
        })
        ctx.body = new RetJson(0 ,'success', swyData)
    },

    async destory(ctx) {
        const swyData = await SwyData.removeSwyDataById(ctx.params.id)
        ctx.body = new RetJson(0, 'success', swyData)
    },

    async update(ctx) {
        const swyData = await SwyData.updateSwyDataById(ctx.params.id,{
            represent: ctx.request.body.represent,
            representExtra: ctx.request.body.representExtra,
            reason: ctx.request.body.reason,
            position: ctx.request.body.position,
            status: ctx.request.body.status,
            solution: ctx.request.body.solution
        })
        ctx.body = new RetJson(0, 'success', swyData)
    },

    async index(ctx){
        const swyData = await SwyData.getSwyDataBySearch(ctx.query.pg, ctx.query.data)
        ctx.body = new RetJson(0, 'success', swyData)
    },

    async show(ctx){
        const swyData = await SwyData.getSwyDataById(ctx.params.id)
        ctx.body = new RetJson(0, 'success', swyData)
    }

}