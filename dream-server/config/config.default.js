/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-03-09 22:26:32
 * @LastEditors: ankeji
 * @LastEditTime: 2021-03-10 10:06:47
 */
/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1615254420455_9910';

  // add your middleware config here
  config.middleware = ['errorHandler', 'isAuthon'];
  // 统一错误信息配置（注：match和ignore不可以同时配置）
  config.errorHandler = {
    enable: true, // 中间件开启配置
    match: '/user', // 设置请求中间件的请求路由
    ignore: '', // 设置不经过这个中间件的请求路由
  };
  config.isAuthon = {
    enable: true, // 中间件开启配置
    match: '/user', // 设置请求中间件的请求路由
    ignore: '', // 设置不经过这个中间件的请求路由
  };
  config.security = {
    csrf: { 
      enable: false
    }
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  config.cors = {
    origin: '*', // 访问白名单,根据你自己的需要进行设置
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  };
  config.mongoose = {
    url: 'mongodb://127.0.0.1:27017/runman',
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true
    },
  };
  return {
    ...config,
    ...userConfig,
  };
};
