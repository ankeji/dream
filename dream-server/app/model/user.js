'use strict';
const { v4: uuidv4 } = require('uuid');
module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;
    // 登录加注册
    const UserSchema = new Schema({
        // 修改和新增用到，规定字段得类型和其他条件等
        username:{
            type: String,
            required:true
        },
        //用户唯一标识
        openid:{
            type:String,
            unique:true,
            required:true,
            default:uuidv4()
        },
        p_money:{
            type:Number,
            default:10
        },
        // 是否认证  -2 认证失败  -1未认证   0 认证中  1 已认证
        isAuthon:{
            type:Number,
            default:-1
        },
        //注册时间
        date: { type: Date, default: Date.now }
        
    });

    return mongoose.model('User', UserSchema); // 我的理解：User是指定查找的入口，随便取；UserSchema是参数；user是你数据集合表的名称
};