'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 下面得操作是连接数据库
    const authonSchema = new Schema({
        //姓名 
        name:{
            type: String,
            required:true
        },
        //用户唯一标识
        openid:{
            type:String,
            unique:true,
            required:true
        },
        //学校code
        sh_code:{
            type:Number,
            required:true,
            default:null
        },
        //学校name
        sh_name:{
            type:String,
            required:true,
            default:null
        },
        //身份证ID
        id_code:{
            type:Number,
            required:true,
            default:null
        },
        //身份证照片
        Z_idurl:{
            type:String,
            required:true,
            default:null
        },
        //身份证照片
        F_idurl:{
            type:String,
            required:true,
            default:null
        },
        //注册时间
        date: { type: Date, default: Date.now }
    });

    return mongoose.model('Authon', authonSchema,'authon'); // 我的理解：User是指定查找的入口，随便取；authonSchema是参数；user是你数据集合表的名称
};