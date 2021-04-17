const tool = {}


/**
 * @name 过滤函数实现搜索提示
 * @arr 要过滤的数组
 * @ele 要删选的字段
 * @item 输入的字符
 * */
tool.searchTip = (arr, ele, item) => {
  return arr.filter((e) => {
    return e[ele].indexOf(item) > -1
  })
}

export default tool