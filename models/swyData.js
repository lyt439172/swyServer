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
                    const user = await this.create(obj)
                    if(user.id){
                        res(user.toJSON())
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
                    const user = await this.destroy({ where: { id:{ [Op.in]:ids } } });
                    if(user){
                        res(user)
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
                    const user = await this.update(obj, { where:{ id }});
                    if(user){
                        res(user)
                    }else{
                        rej('更新失败')
                    }
                }catch(error){
                    console.log('error',error)
                }
               
            })
        }

        static async getSwyData(pg=1){
            return new Promise(async (res,rej)=> {
                try{
                    const user = await makePageData(pg, SwyData)
                    if(user.allCount > 0){
                        res(user)
                    }else{
                        res(undefined)
                    }
                }catch(error){
                    console.log('error',error)
                }
               
            })
        }

        static async getSwyDataById(id, pg=1) {
            return new Promise(async (res,rej)=> {
                try{
                    const user = await makePageData(pg, SwyData,{ id })
                    if(user.allCount > 0){
                        res(user)
                    }else{
                        res(undefined)
                    }
                }catch(error){
                    console.log('error',error)
                }
               
            })
        }

        static async getSwyDataByNick(nick, pg=1) {
            return new Promise(async (res,rej)=> {
                try{
                    const user = await makePageData(pg, SwyData,{ nick })
                    if(user.allCount > 0){
                        res(user)
                    }else{
                        res(undefined)
                    }
                }catch(error){
                    console.log('error',error)
                }
               
            })
        }

        static async getSwyDataByEmail(email, pg=1) {
            return new Promise(async (res,rej)=> {
                try{
                    const user = await makePageData(pg, SwyData,{ email })
                    if(user.allCount > 0){
                        res(user)
                    }else{
                        res(undefined)
                    }
                }catch(error){
                    console.log('error',error)
                }
               
            })
        }

        static async getSwyDataByEmailAndPassword(email,password, pg=1) {
            return new Promise(async (res,rej)=> {
                try{
                    const user = await makePageData(pg, SwyData,{ email,password })
                    if(user.allCount > 0){
                        res(user)
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
        nick:DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.STRING,
        verify_token:DataTypes.STRING,
        status:DataTypes.INTEGER,
        type:DataTypes.INTEGER,
        cover:DataTypes.STRING,
    }, {
        sequelize,
        modelName: "SwyData",
    });
    return SwyData;
};