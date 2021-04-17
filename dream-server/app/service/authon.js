'use strict';

const Service = require('egg').Service;

class AuthonService extends Service {
    //用户认证跑男
    async userAuthon(data) {
        const {
            ctx,
        } = this;
        const result = await ctx.model.Authon.create(data);
        return result;
    }
}

module.exports = AuthonService;
