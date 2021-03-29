'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  // 更新用户信息
  async addUser() {
    const {
      ctx,
    } = this;
    const result = await ctx.model.User.create({
      userName: 'huruqing12sss3',
    });
    return result;
  }
}

module.exports = UserService;
