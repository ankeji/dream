/*
 * @Descripttion: 
 * @version: 
 * @Author: ankeji
 * @Date: 2021-03-09 22:26:32
 * @LastEditors: ankeji
 * @LastEditTime: 2021-03-10 09:11:19
 */
'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // }
  // cors: {
  //   enable: true,
  //   package: 'egg-cors',
  // }
};

exports.cors = {
  enable: true,
  package: 'egg-cors',
};
exports.mongoose = {
  enable: true,
  package: 'egg-mongoose',
};