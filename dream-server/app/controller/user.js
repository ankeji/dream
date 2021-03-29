'use strict';
const Controller = require('../core/base_controller');
// const Controller = require('egg').Controller;

class UserController extends Controller {
    async userUpAndIn() {
        const { ctx } = this;
        const res = await ctx.service.user.addUser();
        this.success(res)
        // ctx.body = res; // 返回值显示
    }
    async getUser() {
        const { ctx } = this;
        var query = this.ctx.query;//返回对象格式
        const res = await ctx.service.user.getUser(query.username);
        ctx.body = res; // 返回值显示
    }
}

module.exports = UserController;
