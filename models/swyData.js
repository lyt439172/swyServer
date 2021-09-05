const { makePageData }= require('../lib/common.js')
const { Model, Op } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class SwyData extends Model {
        static associate(models) {
        // define association here
        }
        
        static async createSwyData(obj) {
            return new Promise(async (res,rej)=> {
                try{
                    const swyData = await this.create(obj)
                    if(swyData.id){
                        res(swyData.toJSON())
                    }else{
                        rej('创建失败')
                    }
                }catch(error){
                    console.log('error',error)
                }
            })
        }

        static async removeSwyDataById(id) {
            const ids = id.split(',')
            return new Promise(async (res,rej) => {
                try{
                    const swyData = await this.destroy({ where: { id:{ [Op.in]:ids } } });
                    if(swyData){
                        res(swyData)
                    }else{
                        rej('删除失败')
                    }
                }catch(error){
                    console.log('error',error)
                }
               
            })

        }

            static async updateSwyDataById(id,obj) {
            return new Promise(async (res,rej) => {
                try{
                    const swyData = await this.update(obj, { where:{ id }});
                    if(swyData){
                        res(swyData)
                    }else{
                        rej('更新失败')
                    }
                }catch(error){
                    console.log('error',error)
                }
               
            })
        }

        // static async getSwyData(pg = 1){
        //     return new Promise(async (res,rej)=> {
        //         try{
        //             const swyData = await makePageData(pg, SwyData)
        //             if(swyData.allCount > 0){
        //                 res(swyData)
        //             }else{
        //                 res(undefined)
        //             }
        //         }catch(error){
        //             console.log('error',error)
        //         }
               
        //     })
        // }

        static async getSwyDataById(id, pg=1) {
            return new Promise(async (res,rej)=> {
                try{
                    const swyData = await makePageData(pg, SwyData,{ id })
                    if(swyData.allCount > 0){
                        res(swyData)
                    }else{
                        res(undefined)
                    }
                }catch(error){
                    console.log('error',error)
                }
               
            })
        }

        static async getSwyDataBySearch(pg, seachData = '') {
            const data = seachData ? JSON.parse(seachData) : {}
            return new Promise(async (res,rej)=> {
                try{
                    const swyData = await makePageData(pg, SwyData, data)
                    if(swyData.allCount > 0){
                        res(swyData)
                    }else{
                        res(undefined)
                    }
                }catch(error){
                    console.log('error',error)
                }
               
            })
        }

    };
    
    SwyData.init(
    {
        represent:DataTypes.INTEGER,
        representExtra:DataTypes.STRING,
        reason:DataTypes.STRING,
        position:DataTypes.STRING,
        status:DataTypes.INTEGER,
        solution:DataTypes.STRING,
    }, {
        sequelize,
        modelName: "SwyData",
    });
    return SwyData;
};