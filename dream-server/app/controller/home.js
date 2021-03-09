/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-03-09 09:47:08
 * @LastEditors: ankeji
 * @LastEditTime: 2021-03-09 10:08:49
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;

