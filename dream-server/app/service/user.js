'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    // 注册用户信息
    async addUser() {
        const {
            ctx,
        } = this;
        const result = await ctx.model.User.create({
            username: 'huruqinankeji6331'
        });
        return result;
    }
    // 查找用户信息
    async getUser(id) {
        const {
            ctx,
        } = this;
        const result = await ctx.model.User.find({ 'username': id }, (err, data) => {
            if (!err) {
                if (data.length) {
                    res.send({ code: 1, msg: "注册成功！" });
                } else {
                    res.send({ code: 0, msg: "注册失败！" });
                }
            } else {
                res.send({ code: 0, msg: "注册失败！" });
            }
        })
        return result;
    }
    
}

module.exports = UserService;
