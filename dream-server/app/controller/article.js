/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-03-10 09:13:22
 * @LastEditors: ankeji
 * @LastEditTime: 2021-03-10 10:07:58
 */
'use strict';
const Controller = require('egg').Controller;
 
class ArticleController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.article.getProjectById();
    ctx.body = res; // 返回值显示
  }
}
module.exports = ArticleController;