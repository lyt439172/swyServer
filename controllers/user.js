const { User } = require('../models/index');
const RetJson  = require('../lib/retjson');
const md5 = require('md5');
module.exports = {
    
    async store(ctx) {
        if( await  User.getUserByNick(ctx.request.body.nick) ||  await  User.getUserByEmail(ctx.request.body.email) ){
            ctx.body = new RetJson(403, '账户已经存在')
            return;
        }
        const user = await User.createUser({
            nick: ctx.request.body.nick,
            email: ctx.request.body.email,
            password: md5(ctx.request.body.password),
            verify_token: ctx.request.body.verify_token,
            status: ctx.request.body.status,
            type: ctx.request.body.type,
            cover: ctx.request.body.cover,
        })
        ctx.body = new RetJson(0 ,'success', user)
    },

    async destory(ctx) {
        const user = await User.removeUserById(ctx.params.id)
        ctx.body = new RetJson(0, 'success', user)
    },

    async update(ctx) {
        const user = await User.updateUserById(ctx.params.id,{
            nick: ctx.request.body.nick,
            email: ctx.request.body.email,
            password: ctx.request.body.password,
            verify_token: ctx.request.body.verify_token,
            status: ctx.request.body.status,
            type: ctx.request.body.type,
            cover: ctx.request.body.cover,
        })
        ctx.body = new RetJson(0, 'success', user)
    },

    async  index(ctx){
        const user = await User.getUser(ctx.query.pg)
        ctx.body = new RetJson(0, 'success', user)
    },

    async  show(ctx){
        const user = await User.getUserById(ctx.params.id)
        ctx.body = new RetJson(0, 'success', user)
    },

}