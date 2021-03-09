/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-03-09 10:13:42
 * @LastEditors: ankeji
 * @LastEditTime: 2021-03-09 10:14:08
 */
'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async test() {
    this.ctx.body = "安科技的测试"
  }
}

module.exports = TestController;
