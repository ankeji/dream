/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-03-10 09:12:59
 * @LastEditors: ankeji
 * @LastEditTime: 2021-03-10 10:07:38
 */
'use strict';
 
const Service = require('egg').Service;
 
class ArticleService extends Service {
  /**
     * 根据ID获取单个项目
     */
  async getProjectById() {
    const { ctx, app } = this;
    try {
      const results = await ctx.model.Article.find({ // Article为modal/article.js里面命名的名字
        _id: app.mongoose.Types.ObjectId('5da034149b6e823ca2ea809d'),
      });
      return results;
    } catch (err) {
      ctx.body = JSON.stringify(err);
    }
  }
}
module.exports = ArticleService;