const { Sequelize } = require("../../models");

module.exports = {
    modelName:'swyData', // 数据模型
    fields: {
        // id: {
        //     type: "Integer",
        //     isUnique: true
        // },
        represent: { // 故障现象
            type: "Integer" // 存储枚举类型
        },
        representExtra: { // 故障现象扩展
            type: "String"
        },
        reason:{ // 故障原因
            type: Sequelize.TEXT
        },
        position: { // 故障位置
            type: "String"
        },
        status: { // 处理状态
            type:"Integer" // 0 - 未处理， 1 - 已处理
        },
        solution: { // 处理结果
            type:"String"
        }
        
    },
    actions: {
        create: {
            fields: ['represent','representExtra','reason','position','status','solution']
        },
        remove: {
            by: ['id']
        },
        update: {
            by: ['id'],
            fields:['represent','representExtra','reason','position','status','solution']
        },
        find: {
            by:['id','represent']
        }
    },
    other: {
        uniqueDesc: '故障已经存在'
    }
}