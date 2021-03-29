'use strict';

const Controller = require('egg').Controller;

class AuthonController extends Controller {
    async userAuthon() {
        const { ctx } = this;
        const res = await ctx.service.authon.userAuthon();
        ctx.body = res; // 返回值显示
    }
}

module.exports = AuthonController;
