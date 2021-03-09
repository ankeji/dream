/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-03-09 10:13:42
 * @LastEditors: ankeji
 * @LastEditTime: 2021-03-09 18:33:13
 */
'use strict';

const Controller = require('egg').Controller;

class TestController extends Controller {
  async test() {
    var test = await this.service.test.test()
    console.log(test);
    this.ctx.body = "安科技的测试"
  }
}

module.exports = TestController;
