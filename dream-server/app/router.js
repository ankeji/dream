/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-03-09 09:47:08
 * @LastEditors: ankeji
 * @LastEditTime: 2021-03-10 10:08:15
 */
'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/test', controller.test.test);
  router.get('/article', controller.article.index);
};
