/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-03-09 18:28:54
 * @LastEditors: ankeji
 * @LastEditTime: 2021-03-09 18:29:25
 */
'use strict';

const Service = require('egg').Service;

class TestService extends Service {
  async test() {
    return '123456789'
  }
}

module.exports = TestService;
