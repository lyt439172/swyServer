const { makePageData }= require('../lib/common.js')
const { Model, Op } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
        // define association here
        }
        
        static async createUser(obj) {
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

        static async removeUserById(id) {
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

            static async updateUserById(id,obj) {
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

        static async getUser(pg=1){
            return new Promise(async (res,rej)=> {
                try{
                    const user = await makePageData(pg, User)
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

        static async getUserById(id, pg=1) {
            return new Promise(async (res,rej)=> {
                try{
                    const user = await makePageData(pg, User,{ id })
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

        static async getUserByNick(nick, pg=1) {
            return new Promise(async (res,rej)=> {
                try{
                    const user = await makePageData(pg, User,{ nick })
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

        static async getUserByEmail(email, pg=1) {
            return new Promise(async (res,rej)=> {
                try{
                    const user = await makePageData(pg, User,{ email })
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

        static async getUserByEmailAndPassword(email,password, pg=1) {
            return new Promise(async (res,rej)=> {
                try{
                    const user = await makePageData(pg, User,{ email,password })
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
    
    User.init(
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
        modelName: "User",
    });
    return User;
};