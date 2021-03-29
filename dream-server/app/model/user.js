'use strict';
 
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;
  // 下面得操作是连接数据库
  const UserSchema = new Schema({
    // 修改和新增用到，规定字段得类型和其他条件等
    userName: {
      type: String,
      unique: true,
      required: true,
    },
  });
 
  return mongoose.model('User', UserSchema); // 我的理解：User是指定查找的入口，随便取；UserSchema是参数；user是你数据集合表的名称
};