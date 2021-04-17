(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["common/vendor"],{

/***/ 1:
/*!************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.createApp = createApp;exports.createComponent = createComponent;exports.createPage = createPage;exports.createSubpackageApp = createSubpackageApp;exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isStr(str) {
  return typeof str === 'string';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var HOOKS = [
'invoke',
'success',
'fail',
'complete',
'returnValue'];


var globalInterceptors = {};
var scopedInterceptors = {};

function mergeHook(parentVal, childVal) {
  var res = childVal ?
  parentVal ?
  parentVal.concat(childVal) :
  Array.isArray(childVal) ?
  childVal : [childVal] :
  parentVal;
  return res ?
  dedupeHooks(res) :
  res;
}

function dedupeHooks(hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res;
}

function removeHook(hooks, hook) {
  var index = hooks.indexOf(hook);
  if (index !== -1) {
    hooks.splice(index, 1);
  }
}

function mergeInterceptorHook(interceptor, option) {
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      interceptor[hook] = mergeHook(interceptor[hook], option[hook]);
    }
  });
}

function removeInterceptorHook(interceptor, option) {
  if (!interceptor || !option) {
    return;
  }
  Object.keys(option).forEach(function (hook) {
    if (HOOKS.indexOf(hook) !== -1 && isFn(option[hook])) {
      removeHook(interceptor[hook], option[hook]);
    }
  });
}

function addInterceptor(method, option) {
  if (typeof method === 'string' && isPlainObject(option)) {
    mergeInterceptorHook(scopedInterceptors[method] || (scopedInterceptors[method] = {}), option);
  } else if (isPlainObject(method)) {
    mergeInterceptorHook(globalInterceptors, method);
  }
}

function removeInterceptor(method, option) {
  if (typeof method === 'string') {
    if (isPlainObject(option)) {
      removeInterceptorHook(scopedInterceptors[method], option);
    } else {
      delete scopedInterceptors[method];
    }
  } else if (isPlainObject(method)) {
    removeInterceptorHook(globalInterceptors, method);
  }
}

function wrapperHook(hook) {
  return function (data) {
    return hook(data) || data;
  };
}

function isPromise(obj) {
  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

function queue(hooks, data) {
  var promise = false;
  for (var i = 0; i < hooks.length; i++) {
    var hook = hooks[i];
    if (promise) {
      promise = Promise.resolve(wrapperHook(hook));
    } else {
      var res = hook(data);
      if (isPromise(res)) {
        promise = Promise.resolve(res);
      }
      if (res === false) {
        return {
          then: function then() {} };

      }
    }
  }
  return promise || {
    then: function then(callback) {
      return callback(data);
    } };

}

function wrapperOptions(interceptor) {var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  ['success', 'fail', 'complete'].forEach(function (name) {
    if (Array.isArray(interceptor[name])) {
      var oldCallback = options[name];
      options[name] = function callbackInterceptor(res) {
        queue(interceptor[name], res).then(function (res) {
          /* eslint-disable no-mixed-operators */
          return isFn(oldCallback) && oldCallback(res) || res;
        });
      };
    }
  });
  return options;
}

function wrapperReturnValue(method, returnValue) {
  var returnValueHooks = [];
  if (Array.isArray(globalInterceptors.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(globalInterceptors.returnValue));
  }
  var interceptor = scopedInterceptors[method];
  if (interceptor && Array.isArray(interceptor.returnValue)) {
    returnValueHooks.push.apply(returnValueHooks, _toConsumableArray(interceptor.returnValue));
  }
  returnValueHooks.forEach(function (hook) {
    returnValue = hook(returnValue) || returnValue;
  });
  return returnValue;
}

function getApiInterceptorHooks(method) {
  var interceptor = Object.create(null);
  Object.keys(globalInterceptors).forEach(function (hook) {
    if (hook !== 'returnValue') {
      interceptor[hook] = globalInterceptors[hook].slice();
    }
  });
  var scopedInterceptor = scopedInterceptors[method];
  if (scopedInterceptor) {
    Object.keys(scopedInterceptor).forEach(function (hook) {
      if (hook !== 'returnValue') {
        interceptor[hook] = (interceptor[hook] || []).concat(scopedInterceptor[hook]);
      }
    });
  }
  return interceptor;
}

function invokeApi(method, api, options) {for (var _len = arguments.length, params = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {params[_key - 3] = arguments[_key];}
  var interceptor = getApiInterceptorHooks(method);
  if (interceptor && Object.keys(interceptor).length) {
    if (Array.isArray(interceptor.invoke)) {
      var res = queue(interceptor.invoke, options);
      return res.then(function (options) {
        return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
      });
    } else {
      return api.apply(void 0, [wrapperOptions(interceptor, options)].concat(params));
    }
  }
  return api.apply(void 0, [options].concat(params));
}

var promiseInterceptor = {
  returnValue: function returnValue(res) {
    if (!isPromise(res)) {
      return res;
    }
    return res.then(function (res) {
      return res[1];
    }).catch(function (res) {
      return res[0];
    });
  } };


var SYNC_API_RE =
/^\$|Window$|WindowStyle$|sendNativeEvent|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/;

var CONTEXT_API_RE = /^create|Manager$/;

// Context例外情况
var CONTEXT_API_RE_EXC = ['createBLEConnection'];

// 同步例外情况
var ASYNC_API = ['createBLEConnection'];

var CALLBACK_API_RE = /^on|^off/;

function isContextApi(name) {
  return CONTEXT_API_RE.test(name) && CONTEXT_API_RE_EXC.indexOf(name) === -1;
}
function isSyncApi(name) {
  return SYNC_API_RE.test(name) && ASYNC_API.indexOf(name) === -1;
}

function isCallbackApi(name) {
  return CALLBACK_API_RE.test(name) && name !== 'onPush';
}

function handlePromise(promise) {
  return promise.then(function (data) {
    return [null, data];
  }).
  catch(function (err) {return [err];});
}

function shouldPromise(name) {
  if (
  isContextApi(name) ||
  isSyncApi(name) ||
  isCallbackApi(name))
  {
    return false;
  }
  return true;
}

/* eslint-disable no-extend-native */
if (!Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

function promisify(name, api) {
  if (!shouldPromise(name)) {
    return api;
  }
  return function promiseApi() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};for (var _len2 = arguments.length, params = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {params[_key2 - 1] = arguments[_key2];}
    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {
      return wrapperReturnValue(name, invokeApi.apply(void 0, [name, api, options].concat(params)));
    }
    return wrapperReturnValue(name, handlePromise(new Promise(function (resolve, reject) {
      invokeApi.apply(void 0, [name, api, Object.assign({}, options, {
        success: resolve,
        fail: reject })].concat(
      params));
    })));
  };
}

var EPS = 1e-4;
var BASE_DEVICE_WIDTH = 750;
var isIOS = false;
var deviceWidth = 0;
var deviceDPR = 0;

function checkDeviceWidth() {var _wx$getSystemInfoSync =




  wx.getSystemInfoSync(),platform = _wx$getSystemInfoSync.platform,pixelRatio = _wx$getSystemInfoSync.pixelRatio,windowWidth = _wx$getSystemInfoSync.windowWidth; // uni=>wx runtime 编译目标是 uni 对象，内部不允许直接使用 uni

  deviceWidth = windowWidth;
  deviceDPR = pixelRatio;
  isIOS = platform === 'ios';
}

function upx2px(number, newDeviceWidth) {
  if (deviceWidth === 0) {
    checkDeviceWidth();
  }

  number = Number(number);
  if (number === 0) {
    return 0;
  }
  var result = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);
  if (result < 0) {
    result = -result;
  }
  result = Math.floor(result + EPS);
  if (result === 0) {
    if (deviceDPR === 1 || !isIOS) {
      result = 1;
    } else {
      result = 0.5;
    }
  }
  return number < 0 ? -result : result;
}

var interceptors = {
  promiseInterceptor: promiseInterceptor };


var baseApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  upx2px: upx2px,
  addInterceptor: addInterceptor,
  removeInterceptor: removeInterceptor,
  interceptors: interceptors });


function findExistsPageIndex(url) {
  var pages = getCurrentPages();
  var len = pages.length;
  while (len--) {
    var page = pages[len];
    if (page.$page && page.$page.fullPath === url) {
      return len;
    }
  }
  return -1;
}

var redirectTo = {
  name: function name(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.delta) {
      return 'navigateBack';
    }
    return 'redirectTo';
  },
  args: function args(fromArgs) {
    if (fromArgs.exists === 'back' && fromArgs.url) {
      var existsPageIndex = findExistsPageIndex(fromArgs.url);
      if (existsPageIndex !== -1) {
        var delta = getCurrentPages().length - 1 - existsPageIndex;
        if (delta > 0) {
          fromArgs.delta = delta;
        }
      }
    }
  } };


var previewImage = {
  args: function args(fromArgs) {
    var currentIndex = parseInt(fromArgs.current);
    if (isNaN(currentIndex)) {
      return;
    }
    var urls = fromArgs.urls;
    if (!Array.isArray(urls)) {
      return;
    }
    var len = urls.length;
    if (!len) {
      return;
    }
    if (currentIndex < 0) {
      currentIndex = 0;
    } else if (currentIndex >= len) {
      currentIndex = len - 1;
    }
    if (currentIndex > 0) {
      fromArgs.current = urls[currentIndex];
      fromArgs.urls = urls.filter(
      function (item, index) {return index < currentIndex ? item !== urls[currentIndex] : true;});

    } else {
      fromArgs.current = urls[0];
    }
    return {
      indicator: false,
      loop: false };

  } };


var UUID_KEY = '__DC_STAT_UUID';
var deviceId;
function addUuid(result) {
  deviceId = deviceId || wx.getStorageSync(UUID_KEY);
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7);
    wx.setStorage({
      key: UUID_KEY,
      data: deviceId });

  }
  result.deviceId = deviceId;
}

function addSafeAreaInsets(result) {
  if (result.safeArea) {
    var safeArea = result.safeArea;
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.windowWidth - safeArea.right,
      bottom: result.windowHeight - safeArea.bottom };

  }
}

var getSystemInfo = {
  returnValue: function returnValue(result) {
    addUuid(result);
    addSafeAreaInsets(result);
  } };


// import navigateTo from 'uni-helpers/navigate-to'

var protocols = {
  redirectTo: redirectTo,
  // navigateTo,  // 由于在微信开发者工具的页面参数，会显示__id__参数，因此暂时关闭mp-weixin对于navigateTo的AOP
  previewImage: previewImage,
  getSystemInfo: getSystemInfo,
  getSystemInfoSync: getSystemInfo };

var todos = [
'vibrate',
'preloadPage',
'unPreloadPage',
'loadSubPackage'];

var canIUses = [];

var CALLBACKS = ['success', 'fail', 'cancel', 'complete'];

function processCallback(methodName, method, returnValue) {
  return function (res) {
    return method(processReturnValue(methodName, res, returnValue));
  };
}

function processArgs(methodName, fromArgs) {var argsOption = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var returnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};var keepFromArgs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  if (isPlainObject(fromArgs)) {// 一般 api 的参数解析
    var toArgs = keepFromArgs === true ? fromArgs : {}; // returnValue 为 false 时，说明是格式化返回值，直接在返回值对象上修改赋值
    if (isFn(argsOption)) {
      argsOption = argsOption(fromArgs, toArgs) || {};
    }
    for (var key in fromArgs) {
      if (hasOwn(argsOption, key)) {
        var keyOption = argsOption[key];
        if (isFn(keyOption)) {
          keyOption = keyOption(fromArgs[key], fromArgs, toArgs);
        }
        if (!keyOption) {// 不支持的参数
          console.warn("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F ".concat(methodName, "\u6682\u4E0D\u652F\u6301").concat(key));
        } else if (isStr(keyOption)) {// 重写参数 key
          toArgs[keyOption] = fromArgs[key];
        } else if (isPlainObject(keyOption)) {// {name:newName,value:value}可重新指定参数 key:value
          toArgs[keyOption.name ? keyOption.name : key] = keyOption.value;
        }
      } else if (CALLBACKS.indexOf(key) !== -1) {
        if (isFn(fromArgs[key])) {
          toArgs[key] = processCallback(methodName, fromArgs[key], returnValue);
        }
      } else {
        if (!keepFromArgs) {
          toArgs[key] = fromArgs[key];
        }
      }
    }
    return toArgs;
  } else if (isFn(fromArgs)) {
    fromArgs = processCallback(methodName, fromArgs, returnValue);
  }
  return fromArgs;
}

function processReturnValue(methodName, res, returnValue) {var keepReturnValue = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  if (isFn(protocols.returnValue)) {// 处理通用 returnValue
    res = protocols.returnValue(methodName, res);
  }
  return processArgs(methodName, res, returnValue, {}, keepReturnValue);
}

function wrapper(methodName, method) {
  if (hasOwn(protocols, methodName)) {
    var protocol = protocols[methodName];
    if (!protocol) {// 暂不支持的 api
      return function () {
        console.error("\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F \u6682\u4E0D\u652F\u6301".concat(methodName));
      };
    }
    return function (arg1, arg2) {// 目前 api 最多两个参数
      var options = protocol;
      if (isFn(protocol)) {
        options = protocol(arg1);
      }

      arg1 = processArgs(methodName, arg1, options.args, options.returnValue);

      var args = [arg1];
      if (typeof arg2 !== 'undefined') {
        args.push(arg2);
      }
      if (isFn(options.name)) {
        methodName = options.name(arg1);
      } else if (isStr(options.name)) {
        methodName = options.name;
      }
      var returnValue = wx[methodName].apply(wx, args);
      if (isSyncApi(methodName)) {// 同步 api
        return processReturnValue(methodName, returnValue, options.returnValue, isContextApi(methodName));
      }
      return returnValue;
    };
  }
  return method;
}

var todoApis = Object.create(null);

var TODOS = [
'onTabBarMidButtonTap',
'subscribePush',
'unsubscribePush',
'onPush',
'offPush',
'share'];


function createTodoApi(name) {
  return function todoApi(_ref)


  {var fail = _ref.fail,complete = _ref.complete;
    var res = {
      errMsg: "".concat(name, ":fail:\u6682\u4E0D\u652F\u6301 ").concat(name, " \u65B9\u6CD5") };

    isFn(fail) && fail(res);
    isFn(complete) && complete(res);
  };
}

TODOS.forEach(function (name) {
  todoApis[name] = createTodoApi(name);
});

var providers = {
  oauth: ['weixin'],
  share: ['weixin'],
  payment: ['wxpay'],
  push: ['weixin'] };


function getProvider(_ref2)




{var service = _ref2.service,success = _ref2.success,fail = _ref2.fail,complete = _ref2.complete;
  var res = false;
  if (providers[service]) {
    res = {
      errMsg: 'getProvider:ok',
      service: service,
      provider: providers[service] };

    isFn(success) && success(res);
  } else {
    res = {
      errMsg: 'getProvider:fail:服务[' + service + ']不存在' };

    isFn(fail) && fail(res);
  }
  isFn(complete) && complete(res);
}

var extraApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  getProvider: getProvider });


var getEmitter = function () {
  var Emitter;
  return function getUniEmitter() {
    if (!Emitter) {
      Emitter = new _vue.default();
    }
    return Emitter;
  };
}();

function apply(ctx, method, args) {
  return ctx[method].apply(ctx, args);
}

function $on() {
  return apply(getEmitter(), '$on', Array.prototype.slice.call(arguments));
}
function $off() {
  return apply(getEmitter(), '$off', Array.prototype.slice.call(arguments));
}
function $once() {
  return apply(getEmitter(), '$once', Array.prototype.slice.call(arguments));
}
function $emit() {
  return apply(getEmitter(), '$emit', Array.prototype.slice.call(arguments));
}

var eventApi = /*#__PURE__*/Object.freeze({
  __proto__: null,
  $on: $on,
  $off: $off,
  $once: $once,
  $emit: $emit });


var api = /*#__PURE__*/Object.freeze({
  __proto__: null });


var MPPage = Page;
var MPComponent = Component;

var customizeRE = /:/g;

var customize = cached(function (str) {
  return camelize(str.replace(customizeRE, '-'));
});

function initTriggerEvent(mpInstance) {
  {
    if (!wx.canIUse('nextTick')) {
      return;
    }
  }
  var oldTriggerEvent = mpInstance.triggerEvent;
  mpInstance.triggerEvent = function (event) {for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {args[_key3 - 1] = arguments[_key3];}
    return oldTriggerEvent.apply(mpInstance, [customize(event)].concat(args));
  };
}

function initHook(name, options) {
  var oldHook = options[name];
  if (!oldHook) {
    options[name] = function () {
      initTriggerEvent(this);
    };
  } else {
    options[name] = function () {
      initTriggerEvent(this);for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {args[_key4] = arguments[_key4];}
      return oldHook.apply(this, args);
    };
  }
}
if (!MPPage.__$wrappered) {
  MPPage.__$wrappered = true;
  Page = function Page() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('onLoad', options);
    return MPPage(options);
  };
  Page.after = MPPage.after;

  Component = function Component() {var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    initHook('created', options);
    return MPComponent(options);
  };
}

var PAGE_EVENT_HOOKS = [
'onPullDownRefresh',
'onReachBottom',
'onAddToFavorites',
'onShareTimeline',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function initMocks(vm, mocks) {
  var mpInstance = vm.$mp[vm.mpType];
  mocks.forEach(function (mock) {
    if (hasOwn(mpInstance, mock)) {
      vm[mock] = mpInstance[mock];
    }
  });
}

function hasHook(hook, vueOptions) {
  if (!vueOptions) {
    return true;
  }

  if (_vue.default.options && Array.isArray(_vue.default.options[hook])) {
    return true;
  }

  vueOptions = vueOptions.default || vueOptions;

  if (isFn(vueOptions)) {
    if (isFn(vueOptions.extendOptions[hook])) {
      return true;
    }
    if (vueOptions.super &&
    vueOptions.super.options &&
    Array.isArray(vueOptions.super.options[hook])) {
      return true;
    }
    return false;
  }

  if (isFn(vueOptions[hook])) {
    return true;
  }
  var mixins = vueOptions.mixins;
  if (Array.isArray(mixins)) {
    return !!mixins.find(function (mixin) {return hasHook(hook, mixin);});
  }
}

function initHooks(mpOptions, hooks, vueOptions) {
  hooks.forEach(function (hook) {
    if (hasHook(hook, vueOptions)) {
      mpOptions[hook] = function (args) {
        return this.$vm && this.$vm.__call_hook(hook, args);
      };
    }
  });
}

function initVueComponent(Vue, vueOptions) {
  vueOptions = vueOptions.default || vueOptions;
  var VueComponent;
  if (isFn(vueOptions)) {
    VueComponent = vueOptions;
  } else {
    VueComponent = Vue.extend(vueOptions);
  }
  vueOptions = VueComponent.options;
  return [VueComponent, vueOptions];
}

function initSlots(vm, vueSlots) {
  if (Array.isArray(vueSlots) && vueSlots.length) {
    var $slots = Object.create(null);
    vueSlots.forEach(function (slotName) {
      $slots[slotName] = true;
    });
    vm.$scopedSlots = vm.$slots = $slots;
  }
}

function initVueIds(vueIds, mpInstance) {
  vueIds = (vueIds || '').split(',');
  var len = vueIds.length;

  if (len === 1) {
    mpInstance._$vueId = vueIds[0];
  } else if (len === 2) {
    mpInstance._$vueId = vueIds[0];
    mpInstance._$vuePid = vueIds[1];
  }
}

function initData(vueOptions, context) {
  var data = vueOptions.data || {};
  var methods = vueOptions.methods || {};

  if (typeof data === 'function') {
    try {
      data = data.call(context); // 支持 Vue.prototype 上挂的数据
    } catch (e) {
      if (Object({"VUE_APP_NAME":"dream-app","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.warn('根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。', data);
      }
    }
  } else {
    try {
      // 对 data 格式化
      data = JSON.parse(JSON.stringify(data));
    } catch (e) {}
  }

  if (!isPlainObject(data)) {
    data = {};
  }

  Object.keys(methods).forEach(function (methodName) {
    if (context.__lifecycle_hooks__.indexOf(methodName) === -1 && !hasOwn(data, methodName)) {
      data[methodName] = methods[methodName];
    }
  });

  return data;
}

var PROP_TYPES = [String, Number, Boolean, Object, Array, null];

function createObserver(name) {
  return function observer(newVal, oldVal) {
    if (this.$vm) {
      this.$vm[name] = newVal; // 为了触发其他非 render watcher
    }
  };
}

function initBehaviors(vueOptions, initBehavior) {
  var vueBehaviors = vueOptions.behaviors;
  var vueExtends = vueOptions.extends;
  var vueMixins = vueOptions.mixins;

  var vueProps = vueOptions.props;

  if (!vueProps) {
    vueOptions.props = vueProps = [];
  }

  var behaviors = [];
  if (Array.isArray(vueBehaviors)) {
    vueBehaviors.forEach(function (behavior) {
      behaviors.push(behavior.replace('uni://', "wx".concat("://")));
      if (behavior === 'uni://form-field') {
        if (Array.isArray(vueProps)) {
          vueProps.push('name');
          vueProps.push('value');
        } else {
          vueProps.name = {
            type: String,
            default: '' };

          vueProps.value = {
            type: [String, Number, Boolean, Array, Object, Date],
            default: '' };

        }
      }
    });
  }
  if (isPlainObject(vueExtends) && vueExtends.props) {
    behaviors.push(
    initBehavior({
      properties: initProperties(vueExtends.props, true) }));


  }
  if (Array.isArray(vueMixins)) {
    vueMixins.forEach(function (vueMixin) {
      if (isPlainObject(vueMixin) && vueMixin.props) {
        behaviors.push(
        initBehavior({
          properties: initProperties(vueMixin.props, true) }));


      }
    });
  }
  return behaviors;
}

function parsePropType(key, type, defaultValue, file) {
  // [String]=>String
  if (Array.isArray(type) && type.length === 1) {
    return type[0];
  }
  return type;
}

function initProperties(props) {var isBehavior = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;var file = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var properties = {};
  if (!isBehavior) {
    properties.vueId = {
      type: String,
      value: '' };

    // 用于字节跳动小程序模拟抽象节点
    properties.generic = {
      type: Object,
      value: null };

    properties.vueSlots = { // 小程序不能直接定义 $slots 的 props，所以通过 vueSlots 转换到 $slots
      type: null,
      value: [],
      observer: function observer(newVal, oldVal) {
        var $slots = Object.create(null);
        newVal.forEach(function (slotName) {
          $slots[slotName] = true;
        });
        this.setData({
          $slots: $slots });

      } };

  }
  if (Array.isArray(props)) {// ['title']
    props.forEach(function (key) {
      properties[key] = {
        type: null,
        observer: createObserver(key) };

    });
  } else if (isPlainObject(props)) {// {title:{type:String,default:''},content:String}
    Object.keys(props).forEach(function (key) {
      var opts = props[key];
      if (isPlainObject(opts)) {// title:{type:String,default:''}
        var value = opts.default;
        if (isFn(value)) {
          value = value();
        }

        opts.type = parsePropType(key, opts.type);

        properties[key] = {
          type: PROP_TYPES.indexOf(opts.type) !== -1 ? opts.type : null,
          value: value,
          observer: createObserver(key) };

      } else {// content:String
        var type = parsePropType(key, opts);
        properties[key] = {
          type: PROP_TYPES.indexOf(type) !== -1 ? type : null,
          observer: createObserver(key) };

      }
    });
  }
  return properties;
}

function wrapper$1(event) {
  // TODO 又得兼容 mpvue 的 mp 对象
  try {
    event.mp = JSON.parse(JSON.stringify(event));
  } catch (e) {}

  event.stopPropagation = noop;
  event.preventDefault = noop;

  event.target = event.target || {};

  if (!hasOwn(event, 'detail')) {
    event.detail = {};
  }

  if (hasOwn(event, 'markerId')) {
    event.detail = typeof event.detail === 'object' ? event.detail : {};
    event.detail.markerId = event.markerId;
  }

  if (isPlainObject(event.detail)) {
    event.target = Object.assign({}, event.target, event.detail);
  }

  return event;
}

function getExtraValue(vm, dataPathsArray) {
  var context = vm;
  dataPathsArray.forEach(function (dataPathArray) {
    var dataPath = dataPathArray[0];
    var value = dataPathArray[2];
    if (dataPath || typeof value !== 'undefined') {// ['','',index,'disable']
      var propPath = dataPathArray[1];
      var valuePath = dataPathArray[3];

      var vFor;
      if (Number.isInteger(dataPath)) {
        vFor = dataPath;
      } else if (!dataPath) {
        vFor = context;
      } else if (typeof dataPath === 'string' && dataPath) {
        if (dataPath.indexOf('#s#') === 0) {
          vFor = dataPath.substr(3);
        } else {
          vFor = vm.__get_value(dataPath, context);
        }
      }

      if (Number.isInteger(vFor)) {
        context = value;
      } else if (!propPath) {
        context = vFor[value];
      } else {
        if (Array.isArray(vFor)) {
          context = vFor.find(function (vForItem) {
            return vm.__get_value(propPath, vForItem) === value;
          });
        } else if (isPlainObject(vFor)) {
          context = Object.keys(vFor).find(function (vForKey) {
            return vm.__get_value(propPath, vFor[vForKey]) === value;
          });
        } else {
          console.error('v-for 暂不支持循环数据：', vFor);
        }
      }

      if (valuePath) {
        context = vm.__get_value(valuePath, context);
      }
    }
  });
  return context;
}

function processEventExtra(vm, extra, event) {
  var extraObj = {};

  if (Array.isArray(extra) && extra.length) {
    /**
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *[
                                              *    ['data.items', 'data.id', item.data.id],
                                              *    ['metas', 'id', meta.id]
                                              *],
                                              *'test'
                                              */
    extra.forEach(function (dataPath, index) {
      if (typeof dataPath === 'string') {
        if (!dataPath) {// model,prop.sync
          extraObj['$' + index] = vm;
        } else {
          if (dataPath === '$event') {// $event
            extraObj['$' + index] = event;
          } else if (dataPath === 'arguments') {
            if (event.detail && event.detail.__args__) {
              extraObj['$' + index] = event.detail.__args__;
            } else {
              extraObj['$' + index] = [event];
            }
          } else if (dataPath.indexOf('$event.') === 0) {// $event.target.value
            extraObj['$' + index] = vm.__get_value(dataPath.replace('$event.', ''), event);
          } else {
            extraObj['$' + index] = vm.__get_value(dataPath);
          }
        }
      } else {
        extraObj['$' + index] = getExtraValue(vm, dataPath);
      }
    });
  }

  return extraObj;
}

function getObjByArray(arr) {
  var obj = {};
  for (var i = 1; i < arr.length; i++) {
    var element = arr[i];
    obj[element[0]] = element[1];
  }
  return obj;
}

function processEventArgs(vm, event) {var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];var extra = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];var isCustom = arguments.length > 4 ? arguments[4] : undefined;var methodName = arguments.length > 5 ? arguments[5] : undefined;
  var isCustomMPEvent = false; // wxcomponent 组件，传递原始 event 对象
  if (isCustom) {// 自定义事件
    isCustomMPEvent = event.currentTarget &&
    event.currentTarget.dataset &&
    event.currentTarget.dataset.comType === 'wx';
    if (!args.length) {// 无参数，直接传入 event 或 detail 数组
      if (isCustomMPEvent) {
        return [event];
      }
      return event.detail.__args__ || event.detail;
    }
  }

  var extraObj = processEventExtra(vm, extra, event);

  var ret = [];
  args.forEach(function (arg) {
    if (arg === '$event') {
      if (methodName === '__set_model' && !isCustom) {// input v-model value
        ret.push(event.target.value);
      } else {
        if (isCustom && !isCustomMPEvent) {
          ret.push(event.detail.__args__[0]);
        } else {// wxcomponent 组件或内置组件
          ret.push(event);
        }
      }
    } else {
      if (Array.isArray(arg) && arg[0] === 'o') {
        ret.push(getObjByArray(arg));
      } else if (typeof arg === 'string' && hasOwn(extraObj, arg)) {
        ret.push(extraObj[arg]);
      } else {
        ret.push(arg);
      }
    }
  });

  return ret;
}

var ONCE = '~';
var CUSTOM = '^';

function isMatchEventType(eventType, optType) {
  return eventType === optType ||

  optType === 'regionchange' && (

  eventType === 'begin' ||
  eventType === 'end');


}

function getContextVm(vm) {
  var $parent = vm.$parent;
  // 父组件是 scoped slots 或者其他自定义组件时继续查找
  while ($parent && $parent.$parent && ($parent.$options.generic || $parent.$parent.$options.generic || $parent.$scope._$vuePid)) {
    $parent = $parent.$parent;
  }
  return $parent && $parent.$parent;
}

function handleEvent(event) {var _this = this;
  event = wrapper$1(event);

  // [['tap',[['handle',[1,2,a]],['handle1',[1,2,a]]]]]
  var dataset = (event.currentTarget || event.target).dataset;
  if (!dataset) {
    return console.warn('事件信息不存在');
  }
  var eventOpts = dataset.eventOpts || dataset['event-opts']; // 支付宝 web-view 组件 dataset 非驼峰
  if (!eventOpts) {
    return console.warn('事件信息不存在');
  }

  // [['handle',[1,2,a]],['handle1',[1,2,a]]]
  var eventType = event.type;

  var ret = [];

  eventOpts.forEach(function (eventOpt) {
    var type = eventOpt[0];
    var eventsArray = eventOpt[1];

    var isCustom = type.charAt(0) === CUSTOM;
    type = isCustom ? type.slice(1) : type;
    var isOnce = type.charAt(0) === ONCE;
    type = isOnce ? type.slice(1) : type;

    if (eventsArray && isMatchEventType(eventType, type)) {
      eventsArray.forEach(function (eventArray) {
        var methodName = eventArray[0];
        if (methodName) {
          var handlerCtx = _this.$vm;
          if (handlerCtx.$options.generic) {// mp-weixin,mp-toutiao 抽象节点模拟 scoped slots
            handlerCtx = getContextVm(handlerCtx) || handlerCtx;
          }
          if (methodName === '$emit') {
            handlerCtx.$emit.apply(handlerCtx,
            processEventArgs(
            _this.$vm,
            event,
            eventArray[1],
            eventArray[2],
            isCustom,
            methodName));

            return;
          }
          var handler = handlerCtx[methodName];
          if (!isFn(handler)) {
            throw new Error(" _vm.".concat(methodName, " is not a function"));
          }
          if (isOnce) {
            if (handler.once) {
              return;
            }
            handler.once = true;
          }
          var params = processEventArgs(
          _this.$vm,
          event,
          eventArray[1],
          eventArray[2],
          isCustom,
          methodName);

          params = Array.isArray(params) ? params : [];
          // 参数尾部增加原始事件对象用于复杂表达式内获取额外数据
          if (/=\s*\S+\.eventParams\s*\|\|\s*\S+\[['"]event-params['"]\]/.test(handler.toString())) {
            // eslint-disable-next-line no-sparse-arrays
            params = params.concat([,,,,,,,,,, event]);
          }
          ret.push(handler.apply(handlerCtx, params));
        }
      });
    }
  });

  if (
  eventType === 'input' &&
  ret.length === 1 &&
  typeof ret[0] !== 'undefined')
  {
    return ret[0];
  }
}

var eventChannels = {};

var eventChannelStack = [];

function getEventChannel(id) {
  if (id) {
    var eventChannel = eventChannels[id];
    delete eventChannels[id];
    return eventChannel;
  }
  return eventChannelStack.shift();
}

var hooks = [
'onShow',
'onHide',
'onError',
'onPageNotFound',
'onThemeChange',
'onUnhandledRejection'];


function initEventChannel() {
  _vue.default.prototype.getOpenerEventChannel = function () {
    // 微信小程序使用自身getOpenerEventChannel
    {
      return this.$scope.getOpenerEventChannel();
    }
  };
  var callHook = _vue.default.prototype.__call_hook;
  _vue.default.prototype.__call_hook = function (hook, args) {
    if (hook === 'onLoad' && args && args.__id__) {
      this.__eventChannel__ = getEventChannel(args.__id__);
      delete args.__id__;
    }
    return callHook.call(this, hook, args);
  };
}

function parseBaseApp(vm, _ref3)


{var mocks = _ref3.mocks,initRefs = _ref3.initRefs;
  initEventChannel();
  if (vm.$options.store) {
    _vue.default.prototype.$store = vm.$options.store;
  }

  _vue.default.prototype.mpHost = "mp-weixin";

  _vue.default.mixin({
    beforeCreate: function beforeCreate() {
      if (!this.$options.mpType) {
        return;
      }

      this.mpType = this.$options.mpType;

      this.$mp = _defineProperty({
        data: {} },
      this.mpType, this.$options.mpInstance);


      this.$scope = this.$options.mpInstance;

      delete this.$options.mpType;
      delete this.$options.mpInstance;

      if (this.mpType !== 'app') {
        initRefs(this);
        initMocks(this, mocks);
      }
    } });


  var appOptions = {
    onLaunch: function onLaunch(args) {
      if (this.$vm) {// 已经初始化过了，主要是为了百度，百度 onShow 在 onLaunch 之前
        return;
      }
      {
        if (!wx.canIUse('nextTick')) {// 事实 上2.2.3 即可，简单使用 2.3.0 的 nextTick 判断
          console.error('当前微信基础库版本过低，请将 微信开发者工具-详情-项目设置-调试基础库版本 更换为`2.3.0`以上');
        }
      }

      this.$vm = vm;

      this.$vm.$mp = {
        app: this };


      this.$vm.$scope = this;
      // vm 上也挂载 globalData
      this.$vm.globalData = this.globalData;

      this.$vm._isMounted = true;
      this.$vm.__call_hook('mounted', args);

      this.$vm.__call_hook('onLaunch', args);
    } };


  // 兼容旧版本 globalData
  appOptions.globalData = vm.$options.globalData || {};
  // 将 methods 中的方法挂在 getApp() 中
  var methods = vm.$options.methods;
  if (methods) {
    Object.keys(methods).forEach(function (name) {
      appOptions[name] = methods[name];
    });
  }

  initHooks(appOptions, hooks);

  return appOptions;
}

var mocks = ['__route__', '__wxExparserNodeId__', '__wxWebviewId__'];

function findVmByVueId(vm, vuePid) {
  var $children = vm.$children;
  // 优先查找直属(反向查找:https://github.com/dcloudio/uni-app/issues/1200)
  for (var i = $children.length - 1; i >= 0; i--) {
    var childVm = $children[i];
    if (childVm.$scope._$vueId === vuePid) {
      return childVm;
    }
  }
  // 反向递归查找
  var parentVm;
  for (var _i = $children.length - 1; _i >= 0; _i--) {
    parentVm = findVmByVueId($children[_i], vuePid);
    if (parentVm) {
      return parentVm;
    }
  }
}

function initBehavior(options) {
  return Behavior(options);
}

function isPage() {
  return !!this.route;
}

function initRelation(detail) {
  this.triggerEvent('__l', detail);
}

function selectAllComponents(mpInstance, selector, $refs) {
  var components = mpInstance.selectAllComponents(selector);
  components.forEach(function (component) {
    var ref = component.dataset.ref;
    $refs[ref] = component.$vm || component;
    {
      if (component.dataset.vueGeneric === 'scoped') {
        component.selectAllComponents('.scoped-ref').forEach(function (scopedComponent) {
          selectAllComponents(scopedComponent, selector, $refs);
        });
      }
    }
  });
}

function initRefs(vm) {
  var mpInstance = vm.$scope;
  Object.defineProperty(vm, '$refs', {
    get: function get() {
      var $refs = {};
      selectAllComponents(mpInstance, '.vue-ref', $refs);
      // TODO 暂不考虑 for 中的 scoped
      var forComponents = mpInstance.selectAllComponents('.vue-ref-in-for');
      forComponents.forEach(function (component) {
        var ref = component.dataset.ref;
        if (!$refs[ref]) {
          $refs[ref] = [];
        }
        $refs[ref].push(component.$vm || component);
      });
      return $refs;
    } });

}

function handleLink(event) {var _ref4 =



  event.detail || event.value,vuePid = _ref4.vuePid,vueOptions = _ref4.vueOptions; // detail 是微信,value 是百度(dipatch)

  var parentVm;

  if (vuePid) {
    parentVm = findVmByVueId(this.$vm, vuePid);
  }

  if (!parentVm) {
    parentVm = this.$vm;
  }

  vueOptions.parent = parentVm;
}

function parseApp(vm) {
  return parseBaseApp(vm, {
    mocks: mocks,
    initRefs: initRefs });

}

function createApp(vm) {
  App(parseApp(vm));
  return vm;
}

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function encodeReserveReplacer(c) {return '%' + c.charCodeAt(0).toString(16);};
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function encode(str) {return encodeURIComponent(str).
  replace(encodeReserveRE, encodeReserveReplacer).
  replace(commaRE, ',');};

function stringifyQuery(obj) {var encodeStr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : encode;
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encodeStr(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }
        if (val2 === null) {
          result.push(encodeStr(key));
        } else {
          result.push(encodeStr(key) + '=' + encodeStr(val2));
        }
      });
      return result.join('&');
    }

    return encodeStr(key) + '=' + encodeStr(val);
  }).filter(function (x) {return x.length > 0;}).join('&') : null;
  return res ? "?".concat(res) : '';
}

function parseBaseComponent(vueComponentOptions)


{var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},isPage = _ref5.isPage,initRelation = _ref5.initRelation;var _initVueComponent =
  initVueComponent(_vue.default, vueComponentOptions),_initVueComponent2 = _slicedToArray(_initVueComponent, 2),VueComponent = _initVueComponent2[0],vueOptions = _initVueComponent2[1];

  var options = _objectSpread({
    multipleSlots: true,
    addGlobalClass: true },
  vueOptions.options || {});


  {
    // 微信 multipleSlots 部分情况有 bug，导致内容顺序错乱 如 u-list，提供覆盖选项
    if (vueOptions['mp-weixin'] && vueOptions['mp-weixin'].options) {
      Object.assign(options, vueOptions['mp-weixin'].options);
    }
  }

  var componentOptions = {
    options: options,
    data: initData(vueOptions, _vue.default.prototype),
    behaviors: initBehaviors(vueOptions, initBehavior),
    properties: initProperties(vueOptions.props, false, vueOptions.__file),
    lifetimes: {
      attached: function attached() {
        var properties = this.properties;

        var options = {
          mpType: isPage.call(this) ? 'page' : 'component',
          mpInstance: this,
          propsData: properties };


        initVueIds(properties.vueId, this);

        // 处理父子关系
        initRelation.call(this, {
          vuePid: this._$vuePid,
          vueOptions: options });


        // 初始化 vue 实例
        this.$vm = new VueComponent(options);

        // 处理$slots,$scopedSlots（暂不支持动态变化$slots）
        initSlots(this.$vm, properties.vueSlots);

        // 触发首次 setData
        this.$vm.$mount();
      },
      ready: function ready() {
        // 当组件 props 默认值为 true，初始化时传入 false 会导致 created,ready 触发, 但 attached 不触发
        // https://developers.weixin.qq.com/community/develop/doc/00066ae2844cc0f8eb883e2a557800
        if (this.$vm) {
          this.$vm._isMounted = true;
          this.$vm.__call_hook('mounted');
          this.$vm.__call_hook('onReady');
        }
      },
      detached: function detached() {
        this.$vm && this.$vm.$destroy();
      } },

    pageLifetimes: {
      show: function show(args) {
        this.$vm && this.$vm.__call_hook('onPageShow', args);
      },
      hide: function hide() {
        this.$vm && this.$vm.__call_hook('onPageHide');
      },
      resize: function resize(size) {
        this.$vm && this.$vm.__call_hook('onPageResize', size);
      } },

    methods: {
      __l: handleLink,
      __e: handleEvent } };


  // externalClasses
  if (vueOptions.externalClasses) {
    componentOptions.externalClasses = vueOptions.externalClasses;
  }

  if (Array.isArray(vueOptions.wxsCallMethods)) {
    vueOptions.wxsCallMethods.forEach(function (callMethod) {
      componentOptions.methods[callMethod] = function (args) {
        return this.$vm[callMethod](args);
      };
    });
  }

  if (isPage) {
    return componentOptions;
  }
  return [componentOptions, VueComponent];
}

function parseComponent(vueComponentOptions) {
  return parseBaseComponent(vueComponentOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

var hooks$1 = [
'onShow',
'onHide',
'onUnload'];


hooks$1.push.apply(hooks$1, PAGE_EVENT_HOOKS);

function parseBasePage(vuePageOptions, _ref6)


{var isPage = _ref6.isPage,initRelation = _ref6.initRelation;
  var pageOptions = parseComponent(vuePageOptions);

  initHooks(pageOptions.methods, hooks$1, vuePageOptions);

  pageOptions.methods.onLoad = function (query) {
    this.options = query;
    var copyQuery = Object.assign({}, query);
    delete copyQuery.__id__;
    this.$page = {
      fullPath: '/' + (this.route || this.is) + stringifyQuery(copyQuery) };

    this.$vm.$mp.query = query; // 兼容 mpvue
    this.$vm.__call_hook('onLoad', query);
  };

  return pageOptions;
}

function parsePage(vuePageOptions) {
  return parseBasePage(vuePageOptions, {
    isPage: isPage,
    initRelation: initRelation });

}

function createPage(vuePageOptions) {
  {
    return Component(parsePage(vuePageOptions));
  }
}

function createComponent(vueOptions) {
  {
    return Component(parseComponent(vueOptions));
  }
}

function createSubpackageApp(vm) {
  var appOptions = parseApp(vm);
  var app = getApp({
    allowDefault: true });

  var globalData = app.globalData;
  if (globalData) {
    Object.keys(appOptions.globalData).forEach(function (name) {
      if (!hasOwn(globalData, name)) {
        globalData[name] = appOptions.globalData[name];
      }
    });
  }
  Object.keys(appOptions).forEach(function (name) {
    if (!hasOwn(app, name)) {
      app[name] = appOptions[name];
    }
  });
  if (isFn(appOptions.onShow) && wx.onAppShow) {
    wx.onAppShow(function () {for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {args[_key5] = arguments[_key5];}
      appOptions.onShow.apply(app, args);
    });
  }
  if (isFn(appOptions.onHide) && wx.onAppHide) {
    wx.onAppHide(function () {for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {args[_key6] = arguments[_key6];}
      appOptions.onHide.apply(app, args);
    });
  }
  if (isFn(appOptions.onLaunch)) {
    var args = wx.getLaunchOptionsSync && wx.getLaunchOptionsSync();
    appOptions.onLaunch.call(app, args);
  }
  return vm;
}

todos.forEach(function (todoApi) {
  protocols[todoApi] = false;
});

canIUses.forEach(function (canIUseApi) {
  var apiName = protocols[canIUseApi] && protocols[canIUseApi].name ? protocols[canIUseApi].name :
  canIUseApi;
  if (!wx.canIUse(apiName)) {
    protocols[canIUseApi] = false;
  }
});

var uni = {};

if (typeof Proxy !== 'undefined' && "mp-weixin" !== 'app-plus') {
  uni = new Proxy({}, {
    get: function get(target, name) {
      if (hasOwn(target, name)) {
        return target[name];
      }
      if (baseApi[name]) {
        return baseApi[name];
      }
      if (api[name]) {
        return promisify(name, api[name]);
      }
      {
        if (extraApi[name]) {
          return promisify(name, extraApi[name]);
        }
        if (todoApis[name]) {
          return promisify(name, todoApis[name]);
        }
      }
      if (eventApi[name]) {
        return eventApi[name];
      }
      if (!hasOwn(wx, name) && !hasOwn(protocols, name)) {
        return;
      }
      return promisify(name, wrapper(name, wx[name]));
    },
    set: function set(target, name, value) {
      target[name] = value;
      return true;
    } });

} else {
  Object.keys(baseApi).forEach(function (name) {
    uni[name] = baseApi[name];
  });

  {
    Object.keys(todoApis).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
    Object.keys(extraApi).forEach(function (name) {
      uni[name] = promisify(name, todoApis[name]);
    });
  }

  Object.keys(eventApi).forEach(function (name) {
    uni[name] = eventApi[name];
  });

  Object.keys(api).forEach(function (name) {
    uni[name] = promisify(name, api[name]);
  });

  Object.keys(wx).forEach(function (name) {
    if (hasOwn(wx, name) || hasOwn(protocols, name)) {
      uni[name] = promisify(name, wrapper(name, wx[name]));
    }
  });
}

wx.createApp = createApp;
wx.createPage = createPage;
wx.createComponent = createComponent;
wx.createSubpackageApp = createSubpackageApp;

var uni$1 = uni;var _default =

uni$1;exports.default = _default;

/***/ }),

/***/ 10:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 11:
/*!********************************************!*\
  !*** E:/dream/dream-app/static/js/tool.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var tool = {};


/**
                                                                                                                    * @name 过滤函数实现搜索提示
                                                                                                                    * @arr 要过滤的数组
                                                                                                                    * @ele 要删选的字段
                                                                                                                    * @item 输入的字符
                                                                                                                    * */
tool.searchTip = function (arr, ele, item) {
  return arr.filter(function (e) {
    return e[ele].indexOf(item) > -1;
  });
};var _default =

tool;exports.default = _default;

/***/ }),

/***/ 2:
/*!******************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/mp-vue/dist/mp.runtime.esm.js ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * Vue.js v2.6.11
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive.
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value, e.g., [object Object].
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

function isPromise (val) {
  return (
    isDef(val) &&
    typeof val.then === 'function' &&
    typeof val.catch === 'function'
  )
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : Array.isArray(val) || (isPlainObject(val) && val.toString === _toString)
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if an attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array.
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether an object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */
var identity = function (_) { return _; };

/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */
function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured',
  'serverPrefetch'
];

/*  */



var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
});

/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */
var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = new RegExp(("[^" + (unicodeRegExp.source) + ".$_\\d]"));
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;
var isPhantomJS = UA && /phantomjs/.test(UA);
var isFF = UA && UA.match(/firefox\/(\d+)/);

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'] && global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/(function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      if (vm.$options && vm.$options.__file) { // fixed by xxxxxx
        return ('') + vm.$options.__file
      }
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm;
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm && vm.$options.name !== 'PageBody') {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        !vm.$options.isReserved && tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */

var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.SharedObject.target) {
    Dep.SharedObject.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  if ( true && !config.async) {
    // subs aren't sorted in scheduler if not running async
    // we need to sort them now to make sure they fire in correct
    // order
    subs.sort(function (a, b) { return a.id - b.id; });
  }
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.
// fixed by xxxxxx (nvue shared vuex)
/* eslint-disable no-undef */
Dep.SharedObject = {};
Dep.SharedObject.target = null;
Dep.SharedObject.targetStack = [];

function pushTarget (target) {
  Dep.SharedObject.targetStack.push(target);
  Dep.SharedObject.target = target;
  Dep.target = target;
}

function popTarget () {
  Dep.SharedObject.targetStack.pop();
  Dep.SharedObject.target = Dep.SharedObject.targetStack[Dep.SharedObject.targetStack.length - 1];
  Dep.target = Dep.SharedObject.target;
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    vnode.children && vnode.children.slice(),
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    if (hasProto) {
      {// fixed by xxxxxx 微信小程序使用 plugins 之后，数组方法被直接挂载到了数组对象上，需要执行 copyAugment 逻辑
        if(value.push !== value.__proto__.push){
          copyAugment(value, arrayMethods, arrayKeys);
        } else {
          protoAugment(value, arrayMethods);
        }
      }
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;
  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.SharedObject.target) { // fixed by xxxxxx
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ( true && customSetter) {
        customSetter();
      }
      // #7981: for accessor properties without setter
      if (getter && !setter) { return }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ( true &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
     true && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;

  var keys = hasSymbol
    ? Reflect.ownKeys(from)
    : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    // in case the object is already observed...
    if (key === '__ob__') { continue }
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (
      toVal !== fromVal &&
      isPlainObject(toVal) &&
      isPlainObject(fromVal)
    ) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
       true && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  var res = childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal;
  return res
    ? dedupeHooks(res)
    : res
}

function dedupeHooks (hooks) {
  var res = [];
  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }
  return res
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
     true && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!new RegExp(("^[a-zA-Z][\\-\\.0-9_" + (unicodeRegExp.source) + "]*$")).test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'should conform to valid custom element name in html5 specification.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];
      if (typeof def$$1 === 'function') {
        dirs[key] = { bind: def$$1, update: def$$1 };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);

  // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.
  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }
    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ( true && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */



function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ( true && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }

  if (!valid) {
    warn(
      getInvalidTypeMessage(name, value, expectedTypes),
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

function getInvalidTypeMessage (name, value, expectedTypes) {
  var message = "Invalid prop: type check failed for prop \"" + name + "\"." +
    " Expected " + (expectedTypes.map(capitalize).join(', '));
  var expectedType = expectedTypes[0];
  var receivedType = toRawType(value);
  var expectedValue = styleValue(value, expectedType);
  var receivedValue = styleValue(value, receivedType);
  // check if we need to specify expected value
  if (expectedTypes.length === 1 &&
      isExplicable(expectedType) &&
      !isBoolean(expectedType, receivedType)) {
    message += " with value " + expectedValue;
  }
  message += ", got " + receivedType + " ";
  // check if we need to specify received value
  if (isExplicable(receivedType)) {
    message += "with value " + receivedValue + ".";
  }
  return message
}

function styleValue (value, type) {
  if (type === 'String') {
    return ("\"" + value + "\"")
  } else if (type === 'Number') {
    return ("" + (Number(value)))
  } else {
    return ("" + value)
  }
}

function isExplicable (value) {
  var explicitTypes = ['string', 'number', 'boolean'];
  return explicitTypes.some(function (elem) { return value.toLowerCase() === elem; })
}

function isBoolean () {
  var args = [], len = arguments.length;
  while ( len-- ) args[ len ] = arguments[ len ];

  return args.some(function (elem) { return elem.toLowerCase() === 'boolean'; })
}

/*  */

function handleError (err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();
  try {
    if (vm) {
      var cur = vm;
      while ((cur = cur.$parent)) {
        var hooks = cur.$options.errorCaptured;
        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;
              if (capture) { return }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }
    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling (
  handler,
  context,
  args,
  vm,
  info
) {
  var res;
  try {
    res = args ? handler.apply(context, args) : handler.call(context);
    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) { return handleError(e, vm, info + " (Promise/async)"); });
      // issue #9511
      // avoid catch triggering multiple times when nested calls
      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }
  return res
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e, null, 'config.errorHandler');
      }
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).
var timerFunc;

// The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  timerFunc = function () {
    p.then(flushCallbacks);
    // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else if (!isIE && typeof MutationObserver !== 'undefined' && (
  isNative(MutationObserver) ||
  // PhantomJS and iOS 7.x
  MutationObserver.toString() === '[object MutationObserverConstructor]'
)) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });
  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    timerFunc();
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var warnReservedPrefix = function (target, key) {
    warn(
      "Property \"" + key + "\" must be accessed with \"$data." + key + "\" because " +
      'properties starting with "$" or "_" are not proxied in the Vue instance to ' +
      'prevent conflicts with Vue internals. ' +
      'See: https://vuejs.org/v2/api/#data',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) ||
        (typeof key === 'string' && key.charAt(0) === '_' && !(key in target.$data));
      if (!has && !isAllowed) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        if (key in target.$data) { warnReservedPrefix(target, key); }
        else { warnNonPresent(target, key); }
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      // perf.clearMeasures(name)
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns, vm) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler")
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  createOnceHandler,
  vm
) {
  var name, def$$1, cur, old, event;
  for (name in on) {
    def$$1 = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (isUndef(cur)) {
       true && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }
      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }
      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

/*  */

// fixed by xxxxxx (mp properties)
function extractPropertiesFromVNodeData(data, Ctor, res, context) {
  var propOptions = Ctor.options.mpOptions && Ctor.options.mpOptions.properties;
  if (isUndef(propOptions)) {
    return res
  }
  var externalClasses = Ctor.options.mpOptions.externalClasses || [];
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      var result = checkProp(res, props, key, altKey, true) ||
          checkProp(res, attrs, key, altKey, false);
      // externalClass
      if (
        result &&
        res[key] &&
        externalClasses.indexOf(altKey) !== -1 &&
        context[camelize(res[key])]
      ) {
        // 赋值 externalClass 真正的值(模板里 externalClass 的值可能是字符串)
        res[key] = context[camelize(res[key])];
      }
    }
  }
  return res
}

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag,
  context// fixed by xxxxxx
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    // fixed by xxxxxx
    return extractPropertiesFromVNodeData(data, Ctor, {}, context)
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  // fixed by xxxxxx
  return extractPropertiesFromVNodeData(data, Ctor, res, context)
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive$$1(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject)
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      // #6574 in case the inject object is observed...
      if (key === '__ob__') { continue }
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  if (!children || !children.length) {
    return {}
  }
  var slots = {};
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      // fixed by xxxxxx 临时 hack 掉 uni-app 中的异步 name slot page
      if(child.asyncMeta && child.asyncMeta.data && child.asyncMeta.data.slot === 'page'){
        (slots['page'] || (slots['page'] = [])).push(child);
      }else{
        (slots.default || (slots.default = [])).push(child);
      }
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

/*  */

function normalizeScopedSlots (
  slots,
  normalSlots,
  prevSlots
) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;
  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized
  } else if (
    isStable &&
    prevSlots &&
    prevSlots !== emptyObject &&
    key === prevSlots.$key &&
    !hasNormalSlots &&
    !prevSlots.$hasNormal
  ) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots
  } else {
    res = {};
    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  }
  // expose normal slots on scopedSlots
  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  }
  // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error
  if (slots && Object.isExtensible(slots)) {
    (slots)._normalized = res;
  }
  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res)
      ? [res] // single vnode
      : normalizeChildren(res);
    return res && (
      res.length === 0 ||
      (res.length === 1 && res[0].isComment) // #9658
    ) ? undefined
      : res
  };
  // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.
  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }
  return normalized
}

function proxyNormalSlot(slots, key) {
  return function () { return slots[key]; }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i, i, i); // fixed by xxxxxx
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i, i, i); // fixed by xxxxxx
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();
      while (!result.done) {
        ret.push(render(result.value, ret.length, i, i++)); // fixed by xxxxxx
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i, i); // fixed by xxxxxx
      }
    }
  }
  if (!isDef(ret)) {
    ret = [];
  }
  (ret)._isVList = true;
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ( true && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    // fixed by xxxxxx app-plus scopedSlot
    nodes = scopedSlotFn(props, this, props._i) || fallback;
  } else {
    nodes = this.$slots[name] || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
       true && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);
        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
       true && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function resolveScopedSlots (
  fns, // see flow/vnode
  res,
  // the following are added in 2.6
  hasDynamicKeys,
  contentHashKey
) {
  res = res || { $stable: !hasDynamicKeys };
  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];
    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }
      res[slot.key] = slot.fn;
    }
  }
  if (contentHashKey) {
    (res).$key = contentHashKey;
  }
  return res
}

/*  */

function bindDynamicKeys (baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];
    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    } else if ( true && key !== '' && key !== null) {
      // null is a special value for explicitly removing a binding
      warn(
        ("Invalid value for dynamic directive argument (expected string or null): " + key),
        this
      );
    }
  }
  return baseObj
}

// helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.
function prependModifier (value, symbol) {
  return typeof value === 'string' ? symbol + value : value
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var this$1 = this;

  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () {
    if (!this$1.$slots) {
      normalizeScopedSlots(
        data.scopedSlots,
        this$1.$slots = resolveSlots(children, parent)
      );
    }
    return this$1.$slots
  };

  Object.defineProperty(this, 'scopedSlots', ({
    enumerable: true,
    get: function get () {
      return normalizeScopedSlots(data.scopedSlots, this.slots())
    }
  }));

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options, renderContext)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options, renderContext);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (true) {
    (clone.devtoolsMeta = clone.devtoolsMeta || {}).renderContext = renderContext;
  }
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */

/*  */

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (vnode, hydrating) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      callHook(componentInstance, 'onServiceCreated');
      callHook(componentInstance, 'onServiceAttached');
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag, context); // fixed by xxxxxx

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent // activeInstance in lifecycle state
) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];
    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1 (f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };
  merged._merged = true;
  return merged
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input'
  ;(data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;
  if (isDef(existing)) {
    if (
      Array.isArray(existing)
        ? existing.indexOf(callback) === -1
        : existing !== callback
    ) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
     true && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ( true &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      if ( true && isDef(data) && isDef(data.nativeOn)) {
        warn(
          ("The .native modifier for v-on is only valid on components but it was used on <" + tag + ">."),
          context
        );
      }
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

var currentRenderingInstance = null;

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(
        _parentVnode.data.scopedSlots,
        vm.$slots,
        vm.$scopedSlots
      );
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if ( true && vm.$options.renderError) {
        try {
          vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
        } catch (e) {
          handleError(e, vm, "renderError");
          vnode = vm._vnode;
        }
      } else {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    }
    // if the returned array contains only a single node, allow it
    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ( true && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  var owner = currentRenderingInstance;
  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null

    ;(owner).$on('hook:destroyed', function () { return remove(owners, owner); });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        (owners[i]).$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;
        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }
        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });

    var reject = once(function (reason) {
       true && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn) {
  target.$on(event, fn);
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function createOnceHandler (event, fn) {
  var _target = target;
  return function onceHandler () {
    var res = fn.apply(null, arguments);
    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  }
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";
      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }
    return vm
  };
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  }
}

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false /* removeOnly */);
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    restoreActiveInstance();
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren.

  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.
  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(
    (newScopedSlots && !newScopedSlots.$stable) ||
    (oldScopedSlots !== emptyObject && !oldScopedSlots.$stable) ||
    (newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key)
  );

  // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.
  var needsForceUpdate = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    hasDynamicScopedSlot
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  
  // fixed by xxxxxx update properties(mp runtime)
  vm._$updateProperties && vm._$updateProperties(vm);
  
  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */

var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

// Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.
var currentFlushTimestamp = 0;

// Async edge case fix requires storing an event listener's attach timestamp.
var getNow = Date.now;

// Determine what event timestamp the browser is using. Annoyingly, the
// timestamp can either be hi-res (relative to page load) or low-res
// (relative to UNIX epoch), so in order to compare time we have to use the
// same timestamp type when saving the flush timestamp.
// All IE versions use low-res event timestamps, and have problematic clock
// implementations (#9632)
if (inBrowser && !isIE) {
  var performance = window.performance;
  if (
    performance &&
    typeof performance.now === 'function' &&
    getNow() > document.createEvent('Event').timeStamp
  ) {
    // if the event timestamp, although evaluated AFTER the Date.now(), is
    // smaller than it, it means the event is using a hi-res timestamp,
    // and we need to use the hi-res version for event listener timestamps as
    // well.
    getNow = function () { return performance.now(); };
  }
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    if (watcher.before) {
      watcher.before();
    }
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ( true && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;

      if ( true && !config.async) {
        flushSchedulerQueue();
        return
      }
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */



var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = noop;
       true && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
  var i = this.deps.length;
  while (i--) {
    var dep = this.deps[i];
    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
  var i = this.deps.length;
  while (i--) {
    this.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this.deps[i].removeSub(this);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (!isRoot && !isUpdatingChildComponent) {
          {
            if(vm.mpHost === 'mp-baidu'){//百度 observer 在 setData callback 之后触发，直接忽略该 warn
                return
            }
            //fixed by xxxxxx __next_tick_pending,uni://form-field 时不告警
            if(
                key === 'value' && 
                Array.isArray(vm.$options.behaviors) &&
                vm.$options.behaviors.indexOf('uni://form-field') !== -1
              ){
              return
            }
            if(vm._getFormData){
              return
            }
            var $parent = vm.$parent;
            while($parent){
              if($parent.__next_tick_pending){
                return  
              }
              $parent = $parent.$parent;
            }
          }
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
     true && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
       true && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ( true && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : createGetterInvoker(userDef.get)
      : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }
  if ( true &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.SharedObject.target) {// fixed by xxxxxx
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function createGetterInvoker(fn) {
  return function computedGetter () {
    return fn.call(this, this)
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (typeof methods[key] !== 'function') {
        warn(
          "Method \"" + key + "\" has type \"" + (typeof methods[key]) + "\" in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function () {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      try {
        cb.call(vm, watcher.value);
      } catch (error) {
        handleError(error, vm, ("callback for immediate watcher \"" + (watcher.expression) + "\""));
      }
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    !vm._$fallback && initInjections(vm); // resolve injections before data/props  
    initState(vm);
    !vm._$fallback && initProvide(vm); // resolve provide after data/props
    !vm._$fallback && callHook(vm, 'created');      

    /* istanbul ignore if */
    if ( true && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = latest[key];
    }
  }
  return modified
}

function Vue (options) {
  if ( true &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ( true && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ( true && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */



function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  // 2.6 explicit observable API
  Vue.observable = function (obj) {
    observe(obj);
    return obj
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.6.11';

/**
 * https://raw.githubusercontent.com/Tencent/westore/master/packages/westore/utils/diff.js
 */
var ARRAYTYPE = '[object Array]';
var OBJECTTYPE = '[object Object]';
// const FUNCTIONTYPE = '[object Function]'

function diff(current, pre) {
    var result = {};
    syncKeys(current, pre);
    _diff(current, pre, '', result);
    return result
}

function syncKeys(current, pre) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE && rootPreType == OBJECTTYPE) {
        if(Object.keys(current).length >= Object.keys(pre).length){
            for (var key in pre) {
                var currentValue = current[key];
                if (currentValue === undefined) {
                    current[key] = null;
                } else {
                    syncKeys(currentValue, pre[key]);
                }
            }
        }
    } else if (rootCurrentType == ARRAYTYPE && rootPreType == ARRAYTYPE) {
        if (current.length >= pre.length) {
            pre.forEach(function (item, index) {
                syncKeys(current[index], item);
            });
        }
    }
}

function _diff(current, pre, path, result) {
    if (current === pre) { return }
    var rootCurrentType = type(current);
    var rootPreType = type(pre);
    if (rootCurrentType == OBJECTTYPE) {
        if (rootPreType != OBJECTTYPE || Object.keys(current).length < Object.keys(pre).length) {
            setResult(result, path, current);
        } else {
            var loop = function ( key ) {
                var currentValue = current[key];
                var preValue = pre[key];
                var currentType = type(currentValue);
                var preType = type(preValue);
                if (currentType != ARRAYTYPE && currentType != OBJECTTYPE) {
                    if (currentValue != pre[key]) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    }
                } else if (currentType == ARRAYTYPE) {
                    if (preType != ARRAYTYPE) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        if (currentValue.length < preValue.length) {
                            setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                        } else {
                            currentValue.forEach(function (item, index) {
                                _diff(item, preValue[index], (path == '' ? '' : path + ".") + key + '[' + index + ']', result);
                            });
                        }
                    }
                } else if (currentType == OBJECTTYPE) {
                    if (preType != OBJECTTYPE || Object.keys(currentValue).length < Object.keys(preValue).length) {
                        setResult(result, (path == '' ? '' : path + ".") + key, currentValue);
                    } else {
                        for (var subKey in currentValue) {
                            _diff(currentValue[subKey], preValue[subKey], (path == '' ? '' : path + ".") + key + '.' + subKey, result);
                        }
                    }
                }
            };

            for (var key in current) loop( key );
        }
    } else if (rootCurrentType == ARRAYTYPE) {
        if (rootPreType != ARRAYTYPE) {
            setResult(result, path, current);
        } else {
            if (current.length < pre.length) {
                setResult(result, path, current);
            } else {
                current.forEach(function (item, index) {
                    _diff(item, pre[index], path + '[' + index + ']', result);
                });
            }
        }
    } else {
        setResult(result, path, current);
    }
}

function setResult(result, k, v) {
    // if (type(v) != FUNCTIONTYPE) {
        result[k] = v;
    // }
}

function type(obj) {
    return Object.prototype.toString.call(obj)
}

/*  */

function flushCallbacks$1(vm) {
    if (vm.__next_tick_callbacks && vm.__next_tick_callbacks.length) {
        if (Object({"VUE_APP_NAME":"dream-app","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:flushCallbacks[' + vm.__next_tick_callbacks.length + ']');
        }
        var copies = vm.__next_tick_callbacks.slice(0);
        vm.__next_tick_callbacks.length = 0;
        for (var i = 0; i < copies.length; i++) {
            copies[i]();
        }
    }
}

function hasRenderWatcher(vm) {
    return queue.find(function (watcher) { return vm._watcher === watcher; })
}

function nextTick$1(vm, cb) {
    //1.nextTick 之前 已 setData 且 setData 还未回调完成
    //2.nextTick 之前存在 render watcher
    if (!vm.__next_tick_pending && !hasRenderWatcher(vm)) {
        if(Object({"VUE_APP_NAME":"dream-app","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + vm._uid +
                ']:nextVueTick');
        }
        return nextTick(cb, vm)
    }else{
        if(Object({"VUE_APP_NAME":"dream-app","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG){
            var mpInstance$1 = vm.$scope;
            console.log('[' + (+new Date) + '][' + (mpInstance$1.is || mpInstance$1.route) + '][' + vm._uid +
                ']:nextMPTick');
        }
    }
    var _resolve;
    if (!vm.__next_tick_callbacks) {
        vm.__next_tick_callbacks = [];
    }
    vm.__next_tick_callbacks.push(function () {
        if (cb) {
            try {
                cb.call(vm);
            } catch (e) {
                handleError(e, vm, 'nextTick');
            }
        } else if (_resolve) {
            _resolve(vm);
        }
    });
    // $flow-disable-line
    if (!cb && typeof Promise !== 'undefined') {
        return new Promise(function (resolve) {
            _resolve = resolve;
        })
    }
}

/*  */

function cloneWithData(vm) {
  // 确保当前 vm 所有数据被同步
  var ret = Object.create(null);
  var dataKeys = [].concat(
    Object.keys(vm._data || {}),
    Object.keys(vm._computedWatchers || {}));

  dataKeys.reduce(function(ret, key) {
    ret[key] = vm[key];
    return ret
  }, ret);

  // vue-composition-api
  var compositionApiState = vm.__composition_api_state__ || vm.__secret_vfa_state__;
  var rawBindings = compositionApiState && compositionApiState.rawBindings;
  if (rawBindings) {
    Object.keys(rawBindings).forEach(function (key) {
      ret[key] = vm[key];
    });
  }

  //TODO 需要把无用数据处理掉，比如 list=>l0 则 list 需要移除，否则多传输一份数据
  Object.assign(ret, vm.$mp.data || {});
  if (
    Array.isArray(vm.$options.behaviors) &&
    vm.$options.behaviors.indexOf('uni://form-field') !== -1
  ) { //form-field
    ret['name'] = vm.name;
    ret['value'] = vm.value;
  }

  return JSON.parse(JSON.stringify(ret))
}

var patch = function(oldVnode, vnode) {
  var this$1 = this;

  if (vnode === null) { //destroy
    return
  }
  if (this.mpType === 'page' || this.mpType === 'component') {
    var mpInstance = this.$scope;
    var data = Object.create(null);
    try {
      data = cloneWithData(this);
    } catch (err) {
      console.error(err);
    }
    data.__webviewId__ = mpInstance.data.__webviewId__;
    var mpData = Object.create(null);
    Object.keys(data).forEach(function (key) { //仅同步 data 中有的数据
      mpData[key] = mpInstance.data[key];
    });
    var diffData = this.$shouldDiffData === false ? data : diff(data, mpData);
    if (Object.keys(diffData).length) {
      if (Object({"VUE_APP_NAME":"dream-app","VUE_APP_PLATFORM":"mp-weixin","NODE_ENV":"development","BASE_URL":"/"}).VUE_APP_DEBUG) {
        console.log('[' + (+new Date) + '][' + (mpInstance.is || mpInstance.route) + '][' + this._uid +
          ']差量更新',
          JSON.stringify(diffData));
      }
      this.__next_tick_pending = true;
      mpInstance.setData(diffData, function () {
        this$1.__next_tick_pending = false;
        flushCallbacks$1(this$1);
      });
    } else {
      flushCallbacks$1(this);
    }
  }
};

/*  */

function createEmptyRender() {

}

function mountComponent$1(
  vm,
  el,
  hydrating
) {
  if (!vm.mpType) {//main.js 中的 new Vue
    return vm
  }
  if (vm.mpType === 'app') {
    vm.$options.render = createEmptyRender;
  }
  if (!vm.$options.render) {
    vm.$options.render = createEmptyRender;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  
  !vm._$fallback && callHook(vm, 'beforeMount');

  var updateComponent = function () {
    vm._update(vm._render(), hydrating);
  };

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true /* isRenderWatcher */);
  hydrating = false;
  return vm
}

/*  */

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/*  */

var MP_METHODS = ['createSelectorQuery', 'createIntersectionObserver', 'selectAllComponents', 'selectComponent'];

function getTarget(obj, path) {
  var parts = path.split('.');
  var key = parts[0];
  if (key.indexOf('__$n') === 0) { //number index
    key = parseInt(key.replace('__$n', ''));
  }
  if (parts.length === 1) {
    return obj[key]
  }
  return getTarget(obj[key], parts.slice(1).join('.'))
}

function internalMixin(Vue) {

  Vue.config.errorHandler = function(err, vm, info) {
    Vue.util.warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
    console.error(err);
    /* eslint-disable no-undef */
    var app = getApp();
    if (app && app.onError) {
      app.onError(err);
    }
  };

  var oldEmit = Vue.prototype.$emit;

  Vue.prototype.$emit = function(event) {
    if (this.$scope && event) {
      this.$scope['triggerEvent'](event, {
        __args__: toArray(arguments, 1)
      });
    }
    return oldEmit.apply(this, arguments)
  };

  Vue.prototype.$nextTick = function(fn) {
    return nextTick$1(this, fn)
  };

  MP_METHODS.forEach(function (method) {
    Vue.prototype[method] = function(args) {
      if (this.$scope && this.$scope[method]) {
        return this.$scope[method](args)
      }
      // mp-alipay
      if (typeof my === 'undefined') {
        return
      }
      if (method === 'createSelectorQuery') {
        /* eslint-disable no-undef */
        return my.createSelectorQuery(args)
      } else if (method === 'createIntersectionObserver') {
        /* eslint-disable no-undef */
        return my.createIntersectionObserver(args)
      }
      // TODO mp-alipay 暂不支持 selectAllComponents,selectComponent
    };
  });

  Vue.prototype.__init_provide = initProvide;

  Vue.prototype.__init_injections = initInjections;

  Vue.prototype.__call_hook = function(hook, args) {
    var vm = this;
    // #7573 disable dep collection when invoking lifecycle hooks
    pushTarget();
    var handlers = vm.$options[hook];
    var info = hook + " hook";
    var ret;
    if (handlers) {
      for (var i = 0, j = handlers.length; i < j; i++) {
        ret = invokeWithErrorHandling(handlers[i], vm, args ? [args] : null, vm, info);
      }
    }
    if (vm._hasHookEvent) {
      vm.$emit('hook:' + hook, args);
    }
    popTarget();
    return ret
  };

  Vue.prototype.__set_model = function(target, key, value, modifiers) {
    if (Array.isArray(modifiers)) {
      if (modifiers.indexOf('trim') !== -1) {
        value = value.trim();
      }
      if (modifiers.indexOf('number') !== -1) {
        value = this._n(value);
      }
    }
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__set_sync = function(target, key, value) {
    if (!target) {
      target = this;
    }
    target[key] = value;
  };

  Vue.prototype.__get_orig = function(item) {
    if (isPlainObject(item)) {
      return item['$orig'] || item
    }
    return item
  };

  Vue.prototype.__get_value = function(dataPath, target) {
    return getTarget(target || this, dataPath)
  };


  Vue.prototype.__get_class = function(dynamicClass, staticClass) {
    return renderClass(staticClass, dynamicClass)
  };

  Vue.prototype.__get_style = function(dynamicStyle, staticStyle) {
    if (!dynamicStyle && !staticStyle) {
      return ''
    }
    var dynamicStyleObj = normalizeStyleBinding(dynamicStyle);
    var styleObj = staticStyle ? extend(staticStyle, dynamicStyleObj) : dynamicStyleObj;
    return Object.keys(styleObj).map(function (name) { return ((hyphenate(name)) + ":" + (styleObj[name])); }).join(';')
  };

  Vue.prototype.__map = function(val, iteratee) {
    //TODO 暂不考虑 string
    var ret, i, l, keys, key;
    if (Array.isArray(val)) {
      ret = new Array(val.length);
      for (i = 0, l = val.length; i < l; i++) {
        ret[i] = iteratee(val[i], i);
      }
      return ret
    } else if (isObject(val)) {
      keys = Object.keys(val);
      ret = Object.create(null);
      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[key] = iteratee(val[key], key, i);
      }
      return ret
    } else if (typeof val === 'number') {
      ret = new Array(val);
      for (i = 0, l = val; i < l; i++) {
        // 第一个参数暂时仍和小程序一致
        ret[i] = iteratee(i, i);
      }
      return ret
    }
    return []
  };

}

/*  */

var LIFECYCLE_HOOKS$1 = [
    //App
    'onLaunch',
    'onShow',
    'onHide',
    'onUniNViewMessage',
    'onPageNotFound',
    'onThemeChange',
    'onError',
    'onUnhandledRejection',
    //Page
    'onInit',
    'onLoad',
    // 'onShow',
    'onReady',
    // 'onHide',
    'onUnload',
    'onPullDownRefresh',
    'onReachBottom',
    'onTabItemTap',
    'onAddToFavorites',
    'onShareTimeline',
    'onShareAppMessage',
    'onResize',
    'onPageScroll',
    'onNavigationBarButtonTap',
    'onBackPress',
    'onNavigationBarSearchInputChanged',
    'onNavigationBarSearchInputConfirmed',
    'onNavigationBarSearchInputClicked',
    //Component
    // 'onReady', // 兼容旧版本，应该移除该事件
    'onPageShow',
    'onPageHide',
    'onPageResize'
];
function lifecycleMixin$1(Vue) {

    //fixed vue-class-component
    var oldExtend = Vue.extend;
    Vue.extend = function(extendOptions) {
        extendOptions = extendOptions || {};

        var methods = extendOptions.methods;
        if (methods) {
            Object.keys(methods).forEach(function (methodName) {
                if (LIFECYCLE_HOOKS$1.indexOf(methodName)!==-1) {
                    extendOptions[methodName] = methods[methodName];
                    delete methods[methodName];
                }
            });
        }

        return oldExtend.call(this, extendOptions)
    };

    var strategies = Vue.config.optionMergeStrategies;
    var mergeHook = strategies.created;
    LIFECYCLE_HOOKS$1.forEach(function (hook) {
        strategies[hook] = mergeHook;
    });

    Vue.prototype.__lifecycle_hooks__ = LIFECYCLE_HOOKS$1;
}

/*  */

// install platform patch function
Vue.prototype.__patch__ = patch;

// public mount method
Vue.prototype.$mount = function(
    el ,
    hydrating 
) {
    return mountComponent$1(this, el, hydrating)
};

lifecycleMixin$1(Vue);
internalMixin(Vue);

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 3)))

/***/ }),

/***/ 3:
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ 4:
/*!*************************************!*\
  !*** E:/dream/dream-app/pages.json ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 56:
/*!**************************************************!*\
  !*** E:/dream/dream-app/static/json/school.json ***!
  \**************************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250, 251, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 283, 284, 285, 286, 287, 288, 289, 290, 291, 292, 293, 294, 295, 296, 297, 298, 299, 300, 301, 302, 303, 304, 305, 306, 307, 308, 309, 310, 311, 312, 313, 314, 315, 316, 317, 318, 319, 320, 321, 322, 323, 324, 325, 326, 327, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 349, 350, 351, 352, 353, 354, 355, 356, 357, 358, 359, 360, 361, 362, 363, 364, 365, 366, 367, 368, 369, 370, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 427, 428, 429, 430, 431, 432, 433, 434, 435, 436, 437, 438, 439, 440, 441, 442, 443, 444, 445, 446, 447, 448, 449, 450, 451, 452, 453, 454, 455, 456, 457, 458, 459, 460, 461, 462, 463, 464, 465, 466, 467, 468, 469, 470, 471, 472, 473, 474, 475, 476, 477, 478, 479, 480, 481, 482, 483, 484, 485, 486, 487, 488, 489, 490, 491, 492, 493, 494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 661, 662, 663, 664, 665, 666, 667, 668, 669, 670, 671, 672, 673, 674, 675, 676, 677, 678, 679, 680, 681, 682, 683, 684, 685, 686, 687, 688, 689, 690, 691, 692, 693, 694, 695, 696, 697, 698, 699, 700, 701, 702, 703, 704, 705, 706, 707, 708, 709, 710, 711, 712, 713, 714, 715, 716, 717, 718, 719, 720, 721, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 736, 737, 738, 739, 740, 741, 742, 743, 744, 745, 746, 747, 748, 749, 750, 751, 752, 753, 754, 755, 756, 757, 758, 759, 760, 761, 762, 763, 764, 765, 766, 767, 768, 769, 770, 771, 772, 773, 774, 775, 776, 777, 778, 779, 780, 781, 782, 783, 784, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808, 809, 810, 811, 812, 813, 814, 815, 816, 817, 818, 819, 820, 821, 822, 823, 824, 825, 826, 827, 828, 829, 830, 831, 832, 833, 834, 835, 836, 837, 838, 839, 840, 841, 842, 843, 844, 845, 846, 847, 848, 849, 850, 851, 852, 853, 854, 855, 856, 857, 858, 859, 860, 861, 862, 863, 864, 865, 866, 867, 868, 869, 870, 871, 872, 873, 874, 875, 876, 877, 878, 879, 880, 881, 882, 883, 884, 885, 886, 887, 888, 889, 890, 891, 892, 893, 894, 895, 896, 897, 898, 899, 900, 901, 902, 903, 904, 905, 906, 907, 908, 909, 910, 911, 912, 913, 914, 915, 916, 917, 918, 919, 920, 921, 922, 923, 924, 925, 926, 927, 928, 929, 930, 931, 932, 933, 934, 935, 936, 937, 938, 939, 940, 941, 942, 943, 944, 945, 946, 947, 948, 949, 950, 951, 952, 953, 954, 955, 956, 957, 958, 959, 960, 961, 962, 963, 964, 965, 966, 967, 968, 969, 970, 971, 972, 973, 974, 975, 976, 977, 978, 979, 980, 981, 982, 983, 984, 985, 986, 987, 988, 989, 990, 991, 992, 993, 994, 995, 996, 997, 998, 999, 1000, 1001, 1002, 1003, 1004, 1005, 1006, 1007, 1008, 1009, 1010, 1011, 1012, 1013, 1014, 1015, 1016, 1017, 1018, 1019, 1020, 1021, 1022, 1023, 1024, 1025, 1026, 1027, 1028, 1029, 1030, 1031, 1032, 1033, 1034, 1035, 1036, 1037, 1038, 1039, 1040, 1041, 1042, 1043, 1044, 1045, 1046, 1047, 1048, 1049, 1050, 1051, 1052, 1053, 1054, 1055, 1056, 1057, 1058, 1059, 1060, 1061, 1062, 1063, 1064, 1065, 1066, 1067, 1068, 1069, 1070, 1071, 1072, 1073, 1074, 1075, 1076, 1077, 1078, 1079, 1080, 1081, 1082, 1083, 1084, 1085, 1086, 1087, 1088, 1089, 1090, 1091, 1092, 1093, 1094, 1095, 1096, 1097, 1098, 1099, 1100, 1101, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1112, 1113, 1114, 1115, 1116, 1117, 1118, 1119, 1120, 1121, 1122, 1123, 1124, 1125, 1126, 1127, 1128, 1129, 1130, 1131, 1132, 1133, 1134, 1135, 1136, 1137, 1138, 1139, 1140, 1141, 1142, 1143, 1144, 1145, 1146, 1147, 1148, 1149, 1150, 1151, 1152, 1153, 1154, 1155, 1156, 1157, 1158, 1159, 1160, 1161, 1162, 1163, 1164, 1165, 1166, 1167, 1168, 1169, 1170, 1171, 1172, 1173, 1174, 1175, 1176, 1177, 1178, 1179, 1180, 1181, 1182, 1183, 1184, 1185, 1186, 1187, 1188, 1189, 1190, 1191, 1192, 1193, 1194, 1195, 1196, 1197, 1198, 1199, 1200, 1201, 1202, 1203, 1204, 1205, 1206, 1207, 1208, 1209, 1210, 1211, 1212, 1213, 1214, 1215, 1216, 1217, 1218, 1219, 1220, 1221, 1222, 1223, 1224, 1225, 1226, 1227, 1228, 1229, 1230, 1231, 1232, 1233, 1234, 1235, 1236, 1237, 1238, 1239, 1240, 1241, 1242, 1243, 1244, 1245, 1246, 1247, 1248, 1249, 1250, 1251, 1252, 1253, 1254, 1255, 1256, 1257, 1258, 1259, 1260, 1261, 1262, 1263, 1264, 1265, 1266, 1267, 1268, 1269, 1270, 1271, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286, 1287, 1288, 1289, 1290, 1291, 1292, 1293, 1294, 1295, 1296, 1297, 1298, 1299, 1300, 1301, 1302, 1303, 1304, 1305, 1306, 1307, 1308, 1309, 1310, 1311, 1312, 1313, 1314, 1315, 1316, 1317, 1318, 1319, 1320, 1321, 1322, 1323, 1324, 1325, 1326, 1327, 1328, 1329, 1330, 1331, 1332, 1333, 1334, 1335, 1336, 1337, 1338, 1339, 1340, 1341, 1342, 1343, 1344, 1345, 1346, 1347, 1348, 1349, 1350, 1351, 1352, 1353, 1354, 1355, 1356, 1357, 1358, 1359, 1360, 1361, 1362, 1363, 1364, 1365, 1366, 1367, 1368, 1369, 1370, 1371, 1372, 1373, 1374, 1375, 1376, 1377, 1378, 1379, 1380, 1381, 1382, 1383, 1384, 1385, 1386, 1387, 1388, 1389, 1390, 1391, 1392, 1393, 1394, 1395, 1396, 1397, 1398, 1399, 1400, 1401, 1402, 1403, 1404, 1405, 1406, 1407, 1408, 1409, 1410, 1411, 1412, 1413, 1414, 1415, 1416, 1417, 1418, 1419, 1420, 1421, 1422, 1423, 1424, 1425, 1426, 1427, 1428, 1429, 1430, 1431, 1432, 1433, 1434, 1435, 1436, 1437, 1438, 1439, 1440, 1441, 1442, 1443, 1444, 1445, 1446, 1447, 1448, 1449, 1450, 1451, 1452, 1453, 1454, 1455, 1456, 1457, 1458, 1459, 1460, 1461, 1462, 1463, 1464, 1465, 1466, 1467, 1468, 1469, 1470, 1471, 1472, 1473, 1474, 1475, 1476, 1477, 1478, 1479, 1480, 1481, 1482, 1483, 1484, 1485, 1486, 1487, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1515, 1516, 1517, 1518, 1519, 1520, 1521, 1522, 1523, 1524, 1525, 1526, 1527, 1528, 1529, 1530, 1531, 1532, 1533, 1534, 1535, 1536, 1537, 1538, 1539, 1540, 1541, 1542, 1543, 1544, 1545, 1546, 1547, 1548, 1549, 1550, 1551, 1552, 1553, 1554, 1555, 1556, 1557, 1558, 1559, 1560, 1561, 1562, 1563, 1564, 1565, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1611, 1612, 1613, 1614, 1615, 1616, 1617, 1618, 1619, 1620, 1621, 1622, 1623, 1624, 1625, 1626, 1627, 1628, 1629, 1630, 1631, 1632, 1633, 1634, 1635, 1636, 1637, 1638, 1639, 1640, 1641, 1642, 1643, 1644, 1645, 1646, 1647, 1648, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1750, 1751, 1752, 1753, 1754, 1755, 1756, 1757, 1758, 1759, 1760, 1761, 1762, 1763, 1764, 1765, 1766, 1767, 1768, 1769, 1770, 1771, 1772, 1773, 1774, 1775, 1776, 1777, 1778, 1779, 1780, 1781, 1782, 1783, 1784, 1785, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1806, 1807, 1808, 1809, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1840, 1841, 1842, 1843, 1844, 1845, 1846, 1847, 1848, 1849, 1850, 1851, 1852, 1853, 1854, 1855, 1856, 1857, 1858, 1859, 1860, 1861, 1862, 1863, 1864, 1865, 1866, 1867, 1868, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044, 2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077, 2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088, 2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145, 2146, 2147, 2148, 2149, 2150, 2151, 2152, 2153, 2154, 2155, 2156, 2157, 2158, 2159, 2160, 2161, 2162, 2163, 2164, 2165, 2166, 2167, 2168, 2169, 2170, 2171, 2172, 2173, 2174, 2175, 2176, 2177, 2178, 2179, 2180, 2181, 2182, 2183, 2184, 2185, 2186, 2187, 2188, 2189, 2190, 2191, 2192, 2193, 2194, 2195, 2196, 2197, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 2221, 2222, 2223, 2224, 2225, 2226, 2227, 2228, 2229, 2230, 2231, 2232, 2233, 2234, 2235, 2236, 2237, 2238, 2239, 2240, 2241, 2242, 2243, 2244, 2245, 2246, 2247, 2248, 2249, 2250, 2251, 2252, 2253, 2254, 2255, 2256, 2257, 2258, 2259, 2260, 2261, 2262, 2263, 2264, 2265, 2266, 2267, 2268, 2269, 2270, 2271, 2272, 2273, 2274, 2275, 2276, 2277, 2278, 2279, 2280, 2281, 2282, 2283, 2284, 2285, 2286, 2287, 2288, 2289, 2290, 2291, 2292, 2293, 2294, 2295, 2296, 2297, 2298, 2299, 2300, 2301, 2302, 2303, 2304, 2305, 2306, 2307, 2308, 2309, 2310, 2311, 2312, 2313, 2314, 2315, 2316, 2317, 2318, 2319, 2320, 2321, 2322, 2323, 2324, 2325, 2326, 2327, 2328, 2329, 2330, 2331, 2332, 2333, 2334, 2335, 2336, 2337, 2338, 2339, 2340, 2341, 2342, 2343, 2344, 2345, 2346, 2347, 2348, 2349, 2350, 2351, 2352, 2353, 2354, 2355, 2356, 2357, 2358, 2359, 2360, 2361, 2362, 2363, 2364, 2365, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2384, 2385, 2386, 2387, 2388, 2389, 2390, 2391, 2392, 2393, 2394, 2395, 2396, 2397, 2398, 2399, 2400, 2401, 2402, 2403, 2404, 2405, 2406, 2407, 2408, 2409, 2410, 2411, 2412, 2413, 2414, 2415, 2416, 2417, 2418, 2419, 2420, 2421, 2422, 2423, 2424, 2425, 2426, 2427, 2428, 2429, 2430, 2431, 2432, 2433, 2434, 2435, 2436, 2437, 2438, 2439, 2440, 2441, 2442, 2443, 2444, 2445, 2446, 2447, 2448, 2449, 2450, 2451, 2452, 2453, 2454, 2455, 2456, 2457, 2458, 2459, 2460, 2461, 2462, 2463, 2464, 2465, 2466, 2467, 2468, 2469, 2470, 2471, 2472, 2473, 2474, 2475, 2476, 2477, 2478, 2479, 2480, 2481, 2482, 2483, 2484, 2485, 2486, 2487, 2488, 2489, 2490, 2491, 2492, 2493, 2494, 2495, 2496, 2497, 2498, 2499, 2500, 2501, 2502, 2503, 2504, 2505, 2506, 2507, 2508, 2509, 2510, 2511, 2512, 2513, 2514, 2515, 2516, 2517, 2518, 2519, 2520, 2521, 2522, 2523, 2524, 2525, 2526, 2527, 2528, 2529, 2530, 2531, 2532, 2533, 2534, 2535, 2536, 2537, 2538, 2539, 2540, 2541, 2542, 2543, 2544, 2545, 2546, 2547, 2548, 2549, 2550, 2551, 2552, 2553, 2554, 2555, 2556, 2557, 2558, 2559, 2560, 2561, 2562, 2563, 2564, 2565, 2566, 2567, 2568, 2569, 2570, 2571, 2572, 2573, 2574, 2575, 2576, 2577, 2578, 2579, 2580, 2581, 2582, 2583, 2584, 2585, 2586, 2587, 2588, 2589, 2590, 2591, 2592, 2593, 2594, 2595, 2596, 2597, 2598, 2599, 2600, 2601, 2602, 2603, 2604, 2605, 2606, 2607, 2608, 2609, 2610, 2611, 2612, 2613, 2614, 2615, 2616, 2617, 2618, 2619, 2620, 2621, 2622, 2623, 2624, 2625, 2626, 2627, 2628, 2629, 2630, 2631, 2632, 2633, 2634, 2635, 2636, 2637, 2638, 2639, 2640, 2641, 2642, 2643, 2644, 2645, 2646, 2647, 2648, 2649, 2650, 2651, 2652, 2653, 2654, 2655, 2656, 2657, 2658, 2659, 2660, 2661, 2662, 2663, 2664, 2665, 2666, 2667, 2668, 2669, 2670, 2671, 2672, 2673, 2674, 2675, 2676, 2677, 2678, 2679, 2680, 2681, 2682, 2683, 2684, 2685, 2686, 2687, 2688, 2689, 2690, 2691, 2692, 2693, 2694, 2695, 2696, 2697, 2698, 2699, 2700, 2701, 2702, 2703, 2704, 2705, 2706, 2707, 2708, 2709, 2710, 2711, 2712, 2713, 2714, 2715, 2716, 2717, 2718, 2719, 2720, 2721, 2722, 2723, 2724, 2725, 2726, 2727, 2728, 2729, 2730, 2731, 2732, 2733, 2734, 2735, 2736, 2737, 2738, 2739, default */
/***/ (function(module) {

module.exports = JSON.parse("[{\"schoolName\":\"北京大学\",\"schoolCode\":4111010001,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国人民大学\",\"schoolCode\":4111010002,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"清华大学\",\"schoolCode\":4111010003,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京交通大学\",\"schoolCode\":4111010004,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京工业大学\",\"schoolCode\":4111010005,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京航空航天大学\",\"schoolCode\":4111010006,\"department\":\"工业和信息化部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京理工大学\",\"schoolCode\":4111010007,\"department\":\"工业和信息化部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京科技大学\",\"schoolCode\":4111010008,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北方工业大学\",\"schoolCode\":4111010009,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京化工大学\",\"schoolCode\":4111010010,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京工商大学\",\"schoolCode\":4111010011,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京服装学院\",\"schoolCode\":4111010012,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京邮电大学\",\"schoolCode\":4111010013,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京印刷学院\",\"schoolCode\":4111010015,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京建筑大学\",\"schoolCode\":4111010016,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京石油化工学院\",\"schoolCode\":4111010017,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京电子科技学院\",\"schoolCode\":4111010018,\"department\":\"中央办公厅\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国农业大学\",\"schoolCode\":4111010019,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京农学院\",\"schoolCode\":4111010020,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京林业大学\",\"schoolCode\":4111010022,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京协和医学院\",\"schoolCode\":4111010023,\"department\":\"国家卫生健康委员会\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"首都医科大学\",\"schoolCode\":4111010025,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京中医药大学\",\"schoolCode\":4111010026,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京师范大学\",\"schoolCode\":4111010027,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"首都师范大学\",\"schoolCode\":4111010028,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"首都体育学院\",\"schoolCode\":4111010029,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京外国语大学\",\"schoolCode\":4111010030,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京第二外国语学院\",\"schoolCode\":4111010031,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京语言大学\",\"schoolCode\":4111010032,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国传媒大学\",\"schoolCode\":4111010033,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中央财经大学\",\"schoolCode\":4111010034,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"对外经济贸易大学\",\"schoolCode\":4111010036,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京物资学院\",\"schoolCode\":4111010037,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"首都经济贸易大学\",\"schoolCode\":4111010038,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国消防救援学院\",\"schoolCode\":4111010039,\"department\":\"应急管理部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"外交学院\",\"schoolCode\":4111010040,\"department\":\"外交部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国人民公安大学\",\"schoolCode\":4111010041,\"department\":\"公安部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"国际关系学院\",\"schoolCode\":4111010042,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京体育大学\",\"schoolCode\":4111010043,\"department\":\"国家体育总局\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中央音乐学院\",\"schoolCode\":4111010045,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国音乐学院\",\"schoolCode\":4111010046,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中央美术学院\",\"schoolCode\":4111010047,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中央戏剧学院\",\"schoolCode\":4111010048,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国戏曲学院\",\"schoolCode\":4111010049,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京电影学院\",\"schoolCode\":4111010050,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京舞蹈学院\",\"schoolCode\":4111010051,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中央民族大学\",\"schoolCode\":4111010052,\"department\":\"国家民委\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国政法大学\",\"schoolCode\":4111010053,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"华北电力大学\",\"schoolCode\":4111010054,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中华女子学院\",\"schoolCode\":4111011149,\"department\":\"中华妇女联合会\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京信息科技大学\",\"schoolCode\":4111011232,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国矿业大学（北京）\",\"schoolCode\":4111011413,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国石油大学（北京）\",\"schoolCode\":4111011414,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国地质大学（北京）\",\"schoolCode\":4111011415,\"department\":\"教育部\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京联合大学\",\"schoolCode\":4111011417,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京城市学院\",\"schoolCode\":4111011418,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国青年政治学院\",\"schoolCode\":4111011625,\"department\":\"共青团中央\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"首钢工学院\",\"schoolCode\":4111011831,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国劳动关系学院\",\"schoolCode\":4111012453,\"department\":\"中华全国总工会\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"首都师范大学科德学院\",\"schoolCode\":4111013629,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京工商大学嘉华学院\",\"schoolCode\":4111013630,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京邮电大学世纪学院\",\"schoolCode\":4111013901,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京工业大学耿丹学院\",\"schoolCode\":4111013904,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京警察学院\",\"schoolCode\":4111014019,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京第二外国语学院中瑞酒店管理学院\",\"schoolCode\":4111014201,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国科学院大学\",\"schoolCode\":4111014430,\"department\":\"中国科学院\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"中国社会科学院大学\",\"schoolCode\":4111014596,\"department\":\"中国社会科学院\",\"location\":\"北京市\",\"level\":\"本科\"},{\"schoolName\":\"北京工业职业技术学院\",\"schoolCode\":4111010853,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京信息职业技术学院\",\"schoolCode\":4111010857,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京电子科技职业学院\",\"schoolCode\":4111010858,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京京北职业技术学院\",\"schoolCode\":4111011090,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京交通职业技术学院\",\"schoolCode\":4111011092,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京青年政治学院\",\"schoolCode\":4111011626,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京农业职业学院\",\"schoolCode\":4111012448,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京政法职业学院\",\"schoolCode\":4111012451,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京财贸职业学院\",\"schoolCode\":4111012561,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京北大方正软件职业技术学院\",\"schoolCode\":4111012564,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京经贸职业学院\",\"schoolCode\":4111012565,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京经济技术职业学院\",\"schoolCode\":4111012566,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京戏曲艺术职业学院\",\"schoolCode\":4111012567,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京汇佳职业学院\",\"schoolCode\":4111012568,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京科技经营管理学院\",\"schoolCode\":4111012733,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京科技职业学院\",\"schoolCode\":4111013703,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京培黎职业学院\",\"schoolCode\":4111013728,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京经济管理职业学院\",\"schoolCode\":4111014073,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京劳动保障职业学院\",\"schoolCode\":4111014075,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京社会管理职业学院\",\"schoolCode\":4111014139,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京艺术传媒职业学院\",\"schoolCode\":4111014140,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京体育职业学院\",\"schoolCode\":4111014215,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京交通运输职业学院\",\"schoolCode\":4111014279,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京卫生职业学院\",\"schoolCode\":4111014395,\"department\":\"北京市\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"北京网络职业学院\",\"schoolCode\":4111014588,\"department\":\"北京市教委\",\"location\":\"北京市\",\"level\":\"专科\"},{\"schoolName\":\"南开大学\",\"schoolCode\":4112010055,\"department\":\"教育部\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津大学\",\"schoolCode\":4112010056,\"department\":\"教育部\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津科技大学\",\"schoolCode\":4112010057,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津工业大学\",\"schoolCode\":4112010058,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"中国民航大学\",\"schoolCode\":4112010059,\"department\":\"交通运输部（中国民用航空局）\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津理工大学\",\"schoolCode\":4112010060,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津农学院\",\"schoolCode\":4112010061,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津医科大学\",\"schoolCode\":4112010062,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津中医药大学\",\"schoolCode\":4112010063,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津师范大学\",\"schoolCode\":4112010065,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津职业技术师范大学\",\"schoolCode\":4112010066,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津外国语大学\",\"schoolCode\":4112010068,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津商业大学\",\"schoolCode\":4112010069,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津财经大学\",\"schoolCode\":4112010070,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津体育学院\",\"schoolCode\":4112010071,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津音乐学院\",\"schoolCode\":4112010072,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津美术学院\",\"schoolCode\":4112010073,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津城建大学\",\"schoolCode\":4112010792,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津天狮学院\",\"schoolCode\":4112010859,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津中德应用技术大学\",\"schoolCode\":4112012105,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津外国语大学滨海外事学院\",\"schoolCode\":4112013658,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津体育学院运动与文化艺术学院\",\"schoolCode\":4112013659,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津商业大学宝德学院\",\"schoolCode\":4112013660,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津医科大学临床医学院\",\"schoolCode\":4112013661,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"南开大学滨海学院\",\"schoolCode\":4112013663,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津师范大学津沽学院\",\"schoolCode\":4112013896,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津理工大学中环信息学院\",\"schoolCode\":4112013897,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"北京科技大学天津学院\",\"schoolCode\":4112013898,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津大学仁爱学院\",\"schoolCode\":4112014038,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津财经大学珠江学院\",\"schoolCode\":4112014087,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"天津市职业大学\",\"schoolCode\":4112011032,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津滨海职业学院\",\"schoolCode\":4112012484,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津工程职业技术学院\",\"schoolCode\":4112012487,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津渤海职业技术学院\",\"schoolCode\":4112012719,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津电子信息职业技术学院\",\"schoolCode\":4112012720,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津机电职业技术学院\",\"schoolCode\":4112012721,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津现代职业技术学院\",\"schoolCode\":4112012722,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津公安警官职业学院\",\"schoolCode\":4112012723,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津轻工职业技术学院\",\"schoolCode\":4112012732,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津商务职业学院\",\"schoolCode\":4112012788,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津国土资源和房屋职业学院\",\"schoolCode\":4112012803,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津医学高等专科学校\",\"schoolCode\":4112012880,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津开发区职业技术学院\",\"schoolCode\":4112012881,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津艺术职业学院\",\"schoolCode\":4112012882,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津交通职业学院\",\"schoolCode\":4112012883,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津工业职业学院\",\"schoolCode\":4112013700,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津石油职业技术学院\",\"schoolCode\":4112013701,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津城市职业学院\",\"schoolCode\":4112013702,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津铁道职业技术学院\",\"schoolCode\":4112013863,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津工艺美术职业学院\",\"schoolCode\":4112013911,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津城市建设管理职业技术学院\",\"schoolCode\":4112014020,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津生物工程职业技术学院\",\"schoolCode\":4112014021,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津海运职业学院\",\"schoolCode\":4112014022,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津广播影视职业学院\",\"schoolCode\":4112014102,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津体育职业学院\",\"schoolCode\":4112014599,\"department\":\"天津市\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"天津滨海汽车工程职业学院\",\"schoolCode\":4112014600,\"department\":\"天津市教委\",\"location\":\"天津市\",\"level\":\"专科\"},{\"schoolName\":\"河北大学\",\"schoolCode\":4113010075,\"department\":\"河北省\",\"location\":\"保定市\",\"level\":\"本科\"},{\"schoolName\":\"河北工程大学\",\"schoolCode\":4113010076,\"department\":\"河北省\",\"location\":\"邯郸市\",\"level\":\"本科\"},{\"schoolName\":\"河北地质大学\",\"schoolCode\":4113010077,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北工业大学\",\"schoolCode\":4113010080,\"department\":\"河北省\",\"location\":\"天津市\",\"level\":\"本科\"},{\"schoolName\":\"华北理工大学\",\"schoolCode\":4113010081,\"department\":\"河北省\",\"location\":\"唐山市\",\"level\":\"本科\"},{\"schoolName\":\"河北科技大学\",\"schoolCode\":4113010082,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北建筑工程学院\",\"schoolCode\":4113010084,\"department\":\"河北省\",\"location\":\"张家口市\",\"level\":\"本科\"},{\"schoolName\":\"河北水利电力学院\",\"schoolCode\":4113010085,\"department\":\"河北省\",\"location\":\"沧州市\",\"level\":\"本科\"},{\"schoolName\":\"河北农业大学\",\"schoolCode\":4113010086,\"department\":\"河北省\",\"location\":\"保定市\",\"level\":\"本科\"},{\"schoolName\":\"河北医科大学\",\"schoolCode\":4113010089,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北北方学院\",\"schoolCode\":4113010092,\"department\":\"河北省\",\"location\":\"张家口市\",\"level\":\"本科\"},{\"schoolName\":\"承德医学院\",\"schoolCode\":4113010093,\"department\":\"河北省\",\"location\":\"承德市\",\"level\":\"本科\"},{\"schoolName\":\"河北师范大学\",\"schoolCode\":4113010094,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"保定学院\",\"schoolCode\":4113010096,\"department\":\"河北省\",\"location\":\"保定市\",\"level\":\"本科\"},{\"schoolName\":\"河北民族师范学院\",\"schoolCode\":4113010098,\"department\":\"河北省\",\"location\":\"承德市\",\"level\":\"本科\"},{\"schoolName\":\"唐山师范学院\",\"schoolCode\":4113010099,\"department\":\"河北省\",\"location\":\"唐山市\",\"level\":\"本科\"},{\"schoolName\":\"廊坊师范学院\",\"schoolCode\":4113010100,\"department\":\"河北省\",\"location\":\"廊坊市\",\"level\":\"本科\"},{\"schoolName\":\"衡水学院\",\"schoolCode\":4113010101,\"department\":\"河北省\",\"location\":\"衡水市\",\"level\":\"本科\"},{\"schoolName\":\"石家庄学院\",\"schoolCode\":4113010102,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"邯郸学院\",\"schoolCode\":4113010103,\"department\":\"河北省\",\"location\":\"邯郸市\",\"level\":\"本科\"},{\"schoolName\":\"邢台学院\",\"schoolCode\":4113010104,\"department\":\"河北省\",\"location\":\"邢台市\",\"level\":\"本科\"},{\"schoolName\":\"沧州师范学院\",\"schoolCode\":4113010105,\"department\":\"河北省\",\"location\":\"沧州市\",\"level\":\"本科\"},{\"schoolName\":\"石家庄铁道大学\",\"schoolCode\":4113010107,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"燕山大学\",\"schoolCode\":4113010216,\"department\":\"河北省\",\"location\":\"秦皇岛市\",\"level\":\"本科\"},{\"schoolName\":\"河北科技师范学院\",\"schoolCode\":4113010798,\"department\":\"河北省\",\"location\":\"秦皇岛市\",\"level\":\"本科\"},{\"schoolName\":\"唐山学院\",\"schoolCode\":4113011033,\"department\":\"河北省\",\"location\":\"唐山市\",\"level\":\"本科\"},{\"schoolName\":\"华北科技学院\",\"schoolCode\":4113011104,\"department\":\"应急管理部\",\"location\":\"廊坊市\",\"level\":\"本科\"},{\"schoolName\":\"中国人民警察大学\",\"schoolCode\":4113011105,\"department\":\"公安部\",\"location\":\"廊坊市\",\"level\":\"本科\"},{\"schoolName\":\"河北体育学院\",\"schoolCode\":4113011236,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北金融学院\",\"schoolCode\":4113011420,\"department\":\"河北省\",\"location\":\"保定市\",\"level\":\"本科\"},{\"schoolName\":\"北华航天工业学院\",\"schoolCode\":4113011629,\"department\":\"河北省\",\"location\":\"廊坊市\",\"level\":\"本科\"},{\"schoolName\":\"防灾科技学院\",\"schoolCode\":4113011775,\"department\":\"中国地震局\",\"location\":\"廊坊市\",\"level\":\"本科\"},{\"schoolName\":\"河北经贸大学\",\"schoolCode\":4113011832,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"中央司法警官学院\",\"schoolCode\":4113011903,\"department\":\"司法部\",\"location\":\"保定市\",\"level\":\"本科\"},{\"schoolName\":\"河北传媒学院\",\"schoolCode\":4113012784,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北工程技术学院\",\"schoolCode\":4113012796,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北美术学院\",\"schoolCode\":4113013075,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北科技学院\",\"schoolCode\":4113013391,\"department\":\"河北省教育厅\",\"location\":\"保定市\",\"level\":\"本科\"},{\"schoolName\":\"河北外国语学院\",\"schoolCode\":4113013402,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北大学工商学院\",\"schoolCode\":4113013404,\"department\":\"河北省教育厅\",\"location\":\"保定市\",\"level\":\"本科\"},{\"schoolName\":\"华北理工大学轻工学院\",\"schoolCode\":4113013408,\"department\":\"河北省教育厅\",\"location\":\"唐山市\",\"level\":\"本科\"},{\"schoolName\":\"河北科技大学理工学院\",\"schoolCode\":4113013409,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北师范大学汇华学院\",\"schoolCode\":4113013411,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北经贸大学经济管理学院\",\"schoolCode\":4113013414,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北医科大学临床学院\",\"schoolCode\":4113013415,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"华北电力大学科技学院\",\"schoolCode\":4113013417,\"department\":\"河北省教育厅\",\"location\":\"保定市\",\"level\":\"本科\"},{\"schoolName\":\"河北工程大学科信学院\",\"schoolCode\":4113013578,\"department\":\"河北省教育厅\",\"location\":\"邯郸市\",\"level\":\"本科\"},{\"schoolName\":\"河北工业大学城市学院\",\"schoolCode\":4113013584,\"department\":\"河北省教育厅\",\"location\":\"廊坊市\",\"level\":\"本科\"},{\"schoolName\":\"燕山大学里仁学院\",\"schoolCode\":4113013592,\"department\":\"河北省教育厅\",\"location\":\"秦皇岛市\",\"level\":\"本科\"},{\"schoolName\":\"石家庄铁道大学四方学院\",\"schoolCode\":4113013593,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北地质大学华信学院\",\"schoolCode\":4113013594,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"河北农业大学现代科技学院\",\"schoolCode\":4113013595,\"department\":\"河北省教育厅\",\"location\":\"保定市\",\"level\":\"本科\"},{\"schoolName\":\"华北理工大学冀唐学院\",\"schoolCode\":4113013596,\"department\":\"河北省教育厅\",\"location\":\"唐山市\",\"level\":\"本科\"},{\"schoolName\":\"保定理工学院\",\"schoolCode\":4113013891,\"department\":\"河北省教育厅\",\"location\":\"保定市\",\"level\":\"本科\"},{\"schoolName\":\"燕京理工学院\",\"schoolCode\":4113013895,\"department\":\"河北省教育厅\",\"location\":\"廊坊市\",\"level\":\"本科\"},{\"schoolName\":\"北京中医药大学东方学院\",\"schoolCode\":4113013899,\"department\":\"河北省教育厅\",\"location\":\"廊坊市\",\"level\":\"本科\"},{\"schoolName\":\"北京交通大学海滨学院\",\"schoolCode\":4113014202,\"department\":\"河北省教育厅\",\"location\":\"沧州市\",\"level\":\"本科\"},{\"schoolName\":\"河北东方学院\",\"schoolCode\":4113014225,\"department\":\"河北省教育厅\",\"location\":\"廊坊市\",\"level\":\"本科\"},{\"schoolName\":\"河北中医学院\",\"schoolCode\":4113014432,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"本科\"},{\"schoolName\":\"张家口学院\",\"schoolCode\":4113014458,\"department\":\"河北省\",\"location\":\"张家口市\",\"level\":\"本科\"},{\"schoolName\":\"河北环境工程学院\",\"schoolCode\":4213051721,\"department\":\"河北省\",\"location\":\"秦皇岛市\",\"level\":\"本科\"},{\"schoolName\":\"河北工业职业技术学院\",\"schoolCode\":4113010873,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"邯郸职业技术学院\",\"schoolCode\":4113011034,\"department\":\"河北省\",\"location\":\"邯郸市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄职业技术学院\",\"schoolCode\":4113011238,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"张家口职业技术学院\",\"schoolCode\":4113011423,\"department\":\"河北省\",\"location\":\"张家口市\",\"level\":\"专科\"},{\"schoolName\":\"承德石油高等专科学校\",\"schoolCode\":4113011777,\"department\":\"河北省\",\"location\":\"承德市\",\"level\":\"专科\"},{\"schoolName\":\"邢台职业技术学院\",\"schoolCode\":4113011821,\"department\":\"河北省\",\"location\":\"邢台市\",\"level\":\"专科\"},{\"schoolName\":\"河北软件职业技术学院\",\"schoolCode\":4113012352,\"department\":\"河北省\",\"location\":\"保定市\",\"level\":\"专科\"},{\"schoolName\":\"河北石油职业技术学院\",\"schoolCode\":4113012367,\"department\":\"河北省\",\"location\":\"廊坊市\",\"level\":\"专科\"},{\"schoolName\":\"河北建材职业技术学院\",\"schoolCode\":4113012389,\"department\":\"河北省\",\"location\":\"秦皇岛市\",\"level\":\"专科\"},{\"schoolName\":\"河北政法职业学院\",\"schoolCode\":4113012408,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"沧州职业技术学院\",\"schoolCode\":4113012415,\"department\":\"河北省\",\"location\":\"沧州市\",\"level\":\"专科\"},{\"schoolName\":\"河北能源职业技术学院\",\"schoolCode\":4113012418,\"department\":\"河北省\",\"location\":\"唐山市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄铁路职业技术学院\",\"schoolCode\":4113012424,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"保定职业技术学院\",\"schoolCode\":4113012543,\"department\":\"河北省\",\"location\":\"保定市\",\"level\":\"专科\"},{\"schoolName\":\"秦皇岛职业技术学院\",\"schoolCode\":4113012773,\"department\":\"河北省\",\"location\":\"秦皇岛市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄工程职业学院\",\"schoolCode\":4113012782,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄城市经济职业学院\",\"schoolCode\":4113012783,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"唐山职业技术学院\",\"schoolCode\":4113012785,\"department\":\"河北省\",\"location\":\"唐山市\",\"level\":\"专科\"},{\"schoolName\":\"衡水职业技术学院\",\"schoolCode\":4113012786,\"department\":\"河北省\",\"location\":\"衡水市\",\"level\":\"专科\"},{\"schoolName\":\"唐山工业职业技术学院\",\"schoolCode\":4113012787,\"department\":\"河北省\",\"location\":\"唐山市\",\"level\":\"专科\"},{\"schoolName\":\"邢台医学高等专科学校\",\"schoolCode\":4113012884,\"department\":\"河北省\",\"location\":\"邢台市\",\"level\":\"专科\"},{\"schoolName\":\"河北艺术职业学院\",\"schoolCode\":4113012885,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"河北旅游职业学院\",\"schoolCode\":4113012887,\"department\":\"河北省\",\"location\":\"承德市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄财经职业学院\",\"schoolCode\":4113013070,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"河北交通职业技术学院\",\"schoolCode\":4113013071,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"河北化工医药职业技术学院\",\"schoolCode\":4113013072,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄信息工程职业学院\",\"schoolCode\":4113013073,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"河北对外经贸职业学院\",\"schoolCode\":4113013074,\"department\":\"河北省\",\"location\":\"秦皇岛市\",\"level\":\"专科\"},{\"schoolName\":\"保定电力职业技术学院\",\"schoolCode\":4113013392,\"department\":\"河北省\",\"location\":\"保定市\",\"level\":\"专科\"},{\"schoolName\":\"河北机电职业技术学院\",\"schoolCode\":4113013393,\"department\":\"河北省\",\"location\":\"邢台市\",\"level\":\"专科\"},{\"schoolName\":\"渤海石油职业学院\",\"schoolCode\":4113013394,\"department\":\"河北省\",\"location\":\"沧州市\",\"level\":\"专科\"},{\"schoolName\":\"廊坊职业技术学院\",\"schoolCode\":4113013395,\"department\":\"河北省\",\"location\":\"廊坊市\",\"level\":\"专科\"},{\"schoolName\":\"唐山科技职业技术学院\",\"schoolCode\":4113013396,\"department\":\"河北省\",\"location\":\"唐山市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄邮电职业技术学院\",\"schoolCode\":4113013397,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"河北公安警察职业学院\",\"schoolCode\":4113013398,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄工商职业学院\",\"schoolCode\":4113013399,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄理工职业学院\",\"schoolCode\":4113013400,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄科技信息职业学院\",\"schoolCode\":4113013403,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"河北司法警官职业学院\",\"schoolCode\":4113013690,\"department\":\"河北省\",\"location\":\"邯郸市\",\"level\":\"专科\"},{\"schoolName\":\"沧州医学高等专科学校\",\"schoolCode\":4113013779,\"department\":\"河北省\",\"location\":\"沧州市\",\"level\":\"专科\"},{\"schoolName\":\"河北女子职业技术学院\",\"schoolCode\":4113013822,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄医学高等专科学校\",\"schoolCode\":4113014018,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄经济职业学院\",\"schoolCode\":4113014047,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"冀中职业学院\",\"schoolCode\":4113014103,\"department\":\"河北省\",\"location\":\"保定市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄人民医学高等专科学校\",\"schoolCode\":4113014158,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄科技工程职业学院\",\"schoolCode\":4113014185,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"河北劳动关系职业学院\",\"schoolCode\":4113014208,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄科技职业学院\",\"schoolCode\":4113014213,\"department\":\"河北省教育厅\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"泊头职业学院\",\"schoolCode\":4113014259,\"department\":\"河北省\",\"location\":\"沧州市\",\"level\":\"专科\"},{\"schoolName\":\"宣化科技职业学院\",\"schoolCode\":4113014260,\"department\":\"河北省\",\"location\":\"张家口市\",\"level\":\"专科\"},{\"schoolName\":\"廊坊燕京职业技术学院\",\"schoolCode\":4113014280,\"department\":\"河北省\",\"location\":\"廊坊市\",\"level\":\"专科\"},{\"schoolName\":\"承德护理职业学院\",\"schoolCode\":4113014281,\"department\":\"河北省\",\"location\":\"承德市\",\"level\":\"专科\"},{\"schoolName\":\"石家庄幼儿师范高等专科学校\",\"schoolCode\":4113014328,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"廊坊卫生职业学院\",\"schoolCode\":4113014335,\"department\":\"河北省\",\"location\":\"廊坊市\",\"level\":\"专科\"},{\"schoolName\":\"河北轨道运输职业技术学院\",\"schoolCode\":4113014396,\"department\":\"河北省\",\"location\":\"石家庄市\",\"level\":\"专科\"},{\"schoolName\":\"保定幼儿师范高等专科学校\",\"schoolCode\":4113014460,\"department\":\"河北省\",\"location\":\"保定市\",\"level\":\"专科\"},{\"schoolName\":\"河北工艺美术职业学院\",\"schoolCode\":4113014471,\"department\":\"河北省\",\"location\":\"保定市\",\"level\":\"专科\"},{\"schoolName\":\"渤海理工职业学院\",\"schoolCode\":4113014472,\"department\":\"河北省教育厅\",\"location\":\"沧州市\",\"level\":\"专科\"},{\"schoolName\":\"唐山幼儿师范高等专科学校\",\"schoolCode\":4113014586,\"department\":\"河北省\",\"location\":\"唐山市\",\"level\":\"专科\"},{\"schoolName\":\"曹妃甸职业技术学院\",\"schoolCode\":4113014601,\"department\":\"河北省教育厅\",\"location\":\"唐山市\",\"level\":\"专科\"},{\"schoolName\":\"承德应用技术职业学院\",\"schoolCode\":4113014632,\"department\":\"河北省\",\"location\":\"承德市\",\"level\":\"专科\"},{\"schoolName\":\"邯郸幼儿师范高等专科学校\",\"schoolCode\":4113014686,\"department\":\"河北省\",\"location\":\"邯郸市\",\"level\":\"专科\"},{\"schoolName\":\"邯郸科技职业学院\",\"schoolCode\":4113014695,\"department\":\"河北省\",\"location\":\"邯郸市\",\"level\":\"专科\"},{\"schoolName\":\"唐山海运职业学院\",\"schoolCode\":4113014696,\"department\":\"河北省教育厅\",\"location\":\"唐山市\",\"level\":\"专科\"},{\"schoolName\":\"山西大学\",\"schoolCode\":4114010108,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"太原科技大学\",\"schoolCode\":4114010109,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"中北大学\",\"schoolCode\":4114010110,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"太原理工大学\",\"schoolCode\":4114010112,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"山西农业大学\",\"schoolCode\":4114010113,\"department\":\"山西省\",\"location\":\"晋中市\",\"level\":\"本科\"},{\"schoolName\":\"山西医科大学\",\"schoolCode\":4114010114,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"长治医学院\",\"schoolCode\":4114010117,\"department\":\"山西省\",\"location\":\"长治市\",\"level\":\"本科\"},{\"schoolName\":\"山西师范大学\",\"schoolCode\":4114010118,\"department\":\"山西省\",\"location\":\"临汾市\",\"level\":\"本科\"},{\"schoolName\":\"太原师范学院\",\"schoolCode\":4114010119,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"山西大同大学\",\"schoolCode\":4114010120,\"department\":\"山西省\",\"location\":\"大同市\",\"level\":\"本科\"},{\"schoolName\":\"晋中学院\",\"schoolCode\":4114010121,\"department\":\"山西省\",\"location\":\"晋中市\",\"level\":\"本科\"},{\"schoolName\":\"长治学院\",\"schoolCode\":4114010122,\"department\":\"山西省\",\"location\":\"长治市\",\"level\":\"本科\"},{\"schoolName\":\"运城学院\",\"schoolCode\":4114010123,\"department\":\"山西省\",\"location\":\"运城市\",\"level\":\"本科\"},{\"schoolName\":\"忻州师范学院\",\"schoolCode\":4114010124,\"department\":\"山西省\",\"location\":\"忻州市\",\"level\":\"本科\"},{\"schoolName\":\"山西财经大学\",\"schoolCode\":4114010125,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"山西中医药大学\",\"schoolCode\":4114010809,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"吕梁学院\",\"schoolCode\":4114010812,\"department\":\"山西省\",\"location\":\"吕梁市\",\"level\":\"本科\"},{\"schoolName\":\"太原学院\",\"schoolCode\":4114011242,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"山西警察学院\",\"schoolCode\":4114012111,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"山西应用科技学院\",\"schoolCode\":4114012779,\"department\":\"山西省教育厅\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"山西大学商务学院\",\"schoolCode\":4114013533,\"department\":\"山西省教育厅\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"太原理工大学现代科技学院\",\"schoolCode\":4114013534,\"department\":\"山西省教育厅\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"山西农业大学信息学院\",\"schoolCode\":4114013535,\"department\":\"山西省教育厅\",\"location\":\"晋中市\",\"level\":\"本科\"},{\"schoolName\":\"山西师范大学现代文理学院\",\"schoolCode\":4114013537,\"department\":\"山西省教育厅\",\"location\":\"临汾市\",\"level\":\"本科\"},{\"schoolName\":\"中北大学信息商务学院\",\"schoolCode\":4114013538,\"department\":\"山西省教育厅\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"太原科技大学华科学院\",\"schoolCode\":4114013597,\"department\":\"山西省教育厅\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"山西医科大学晋祠学院\",\"schoolCode\":4114013598,\"department\":\"山西省教育厅\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"山西财经大学华商学院\",\"schoolCode\":4114013608,\"department\":\"山西省教育厅\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"山西工商学院\",\"schoolCode\":4114013691,\"department\":\"山西省教育厅\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"太原工业学院\",\"schoolCode\":4114014101,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"运城职业技术大学\",\"schoolCode\":4114014226,\"department\":\"山西省教育厅\",\"location\":\"运城市\",\"level\":\"本科\"},{\"schoolName\":\"山西传媒学院\",\"schoolCode\":4114014434,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"本科\"},{\"schoolName\":\"山西工程技术学院\",\"schoolCode\":4114014527,\"department\":\"山西省\",\"location\":\"阳泉市\",\"level\":\"本科\"},{\"schoolName\":\"山西能源学院\",\"schoolCode\":4214051189,\"department\":\"山西省\",\"location\":\"晋中市\",\"level\":\"本科\"},{\"schoolName\":\"山西省财政税务专科学校\",\"schoolCode\":4114011630,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"长治职业技术学院\",\"schoolCode\":4114012388,\"department\":\"山西省\",\"location\":\"长治市\",\"level\":\"专科\"},{\"schoolName\":\"山西艺术职业学院\",\"schoolCode\":4114012704,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"晋城职业技术学院\",\"schoolCode\":4114012774,\"department\":\"山西省\",\"location\":\"晋城市\",\"level\":\"专科\"},{\"schoolName\":\"山西建筑职业技术学院\",\"schoolCode\":4114012775,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西药科职业学院\",\"schoolCode\":4114012776,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西交通职业技术学院\",\"schoolCode\":4114012778,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"大同煤炭职业技术学院\",\"schoolCode\":4114012780,\"department\":\"山西省\",\"location\":\"大同市\",\"level\":\"专科\"},{\"schoolName\":\"山西机电职业技术学院\",\"schoolCode\":4114012888,\"department\":\"山西省\",\"location\":\"长治市\",\"level\":\"专科\"},{\"schoolName\":\"山西戏剧职业学院\",\"schoolCode\":4114012889,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西财贸职业技术学院\",\"schoolCode\":4114012890,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西林业职业技术学院\",\"schoolCode\":4114012891,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西水利职业技术学院\",\"schoolCode\":4114012892,\"department\":\"山西省\",\"location\":\"运城市\",\"level\":\"专科\"},{\"schoolName\":\"阳泉职业技术学院\",\"schoolCode\":4114012893,\"department\":\"山西省\",\"location\":\"阳泉市\",\"level\":\"专科\"},{\"schoolName\":\"临汾职业技术学院\",\"schoolCode\":4114013171,\"department\":\"山西省\",\"location\":\"临汾市\",\"level\":\"专科\"},{\"schoolName\":\"山西职业技术学院\",\"schoolCode\":4114013528,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西金融职业学院\",\"schoolCode\":4114013530,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"太原城市职业技术学院\",\"schoolCode\":4114013532,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西信息职业技术学院\",\"schoolCode\":4114013541,\"department\":\"山西省教育厅\",\"location\":\"临汾市\",\"level\":\"专科\"},{\"schoolName\":\"山西体育职业学院\",\"schoolCode\":4114013692,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西警官职业学院\",\"schoolCode\":4114013693,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西国际商务职业学院\",\"schoolCode\":4114013694,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"潞安职业技术学院\",\"schoolCode\":4114013695,\"department\":\"山西省\",\"location\":\"长治市\",\"level\":\"专科\"},{\"schoolName\":\"太原旅游职业学院\",\"schoolCode\":4114013696,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西旅游职业学院\",\"schoolCode\":4114013697,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西管理职业学院\",\"schoolCode\":4114013698,\"department\":\"山西省\",\"location\":\"临汾市\",\"level\":\"专科\"},{\"schoolName\":\"山西电力职业技术学院\",\"schoolCode\":4114013745,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"忻州职业技术学院\",\"schoolCode\":4114013821,\"department\":\"山西省\",\"location\":\"忻州市\",\"level\":\"专科\"},{\"schoolName\":\"山西同文职业技术学院\",\"schoolCode\":4114013862,\"department\":\"山西省教育厅\",\"location\":\"晋中市\",\"level\":\"专科\"},{\"schoolName\":\"晋中职业技术学院\",\"schoolCode\":4114013913,\"department\":\"山西省\",\"location\":\"晋中市\",\"level\":\"专科\"},{\"schoolName\":\"山西华澳商贸职业学院\",\"schoolCode\":4114013914,\"department\":\"山西省教育厅\",\"location\":\"晋中市\",\"level\":\"专科\"},{\"schoolName\":\"山西运城农业职业技术学院\",\"schoolCode\":4114013934,\"department\":\"山西省\",\"location\":\"运城市\",\"level\":\"专科\"},{\"schoolName\":\"运城幼儿师范高等专科学校\",\"schoolCode\":4114014093,\"department\":\"山西省\",\"location\":\"运城市\",\"level\":\"专科\"},{\"schoolName\":\"山西老区职业技术学院\",\"schoolCode\":4114014105,\"department\":\"山西省教育厅\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西经贸职业学院\",\"schoolCode\":4114014177,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"朔州职业技术学院\",\"schoolCode\":4114014186,\"department\":\"山西省\",\"location\":\"朔州市\",\"level\":\"专科\"},{\"schoolName\":\"山西铁道职业技术学院\",\"schoolCode\":4114014247,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"晋中师范高等专科学校\",\"schoolCode\":4114014270,\"department\":\"山西省\",\"location\":\"晋中市\",\"level\":\"专科\"},{\"schoolName\":\"阳泉师范高等专科学校\",\"schoolCode\":4114014271,\"department\":\"山西省\",\"location\":\"阳泉市\",\"level\":\"专科\"},{\"schoolName\":\"山西青年职业学院\",\"schoolCode\":4114014336,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"运城护理职业学院\",\"schoolCode\":4114014397,\"department\":\"山西省\",\"location\":\"运城市\",\"level\":\"专科\"},{\"schoolName\":\"运城师范高等专科学校\",\"schoolCode\":4114014461,\"department\":\"山西省\",\"location\":\"运城市\",\"level\":\"专科\"},{\"schoolName\":\"朔州师范高等专科学校\",\"schoolCode\":4114014462,\"department\":\"山西省\",\"location\":\"朔州市\",\"level\":\"专科\"},{\"schoolName\":\"吕梁职业技术学院\",\"schoolCode\":4114014500,\"department\":\"山西省\",\"location\":\"吕梁市\",\"level\":\"专科\"},{\"schoolName\":\"大同师范高等专科学校\",\"schoolCode\":4114014627,\"department\":\"山西省\",\"location\":\"大同市\",\"level\":\"专科\"},{\"schoolName\":\"太原幼儿师范高等专科学校\",\"schoolCode\":4114014628,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"山西工程职业学院\",\"schoolCode\":4114014681,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"长治幼儿师范高等专科学校\",\"schoolCode\":4114014687,\"department\":\"山西省\",\"location\":\"长治市\",\"level\":\"专科\"},{\"schoolName\":\"山西通用航空职业技术学院\",\"schoolCode\":4114014697,\"department\":\"山西省\",\"location\":\"大同市\",\"level\":\"专科\"},{\"schoolName\":\"朔州陶瓷职业技术学院\",\"schoolCode\":4114014698,\"department\":\"山西省\",\"location\":\"朔州市\",\"level\":\"专科\"},{\"schoolName\":\"山西卫生健康职业学院\",\"schoolCode\":4214050166,\"department\":\"山西省\",\"location\":\"太原市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古大学\",\"schoolCode\":4115010126,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"本科\"},{\"schoolName\":\"内蒙古科技大学\",\"schoolCode\":4115010127,\"department\":\"内蒙古自治区\",\"location\":\"包头市\",\"level\":\"本科\"},{\"schoolName\":\"内蒙古工业大学\",\"schoolCode\":4115010128,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"本科\"},{\"schoolName\":\"内蒙古农业大学\",\"schoolCode\":4115010129,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"本科\"},{\"schoolName\":\"内蒙古医科大学\",\"schoolCode\":4115010132,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"本科\"},{\"schoolName\":\"内蒙古师范大学\",\"schoolCode\":4115010135,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"本科\"},{\"schoolName\":\"内蒙古民族大学\",\"schoolCode\":4115010136,\"department\":\"内蒙古自治区\",\"location\":\"通辽市\",\"level\":\"本科\"},{\"schoolName\":\"赤峰学院\",\"schoolCode\":4115010138,\"department\":\"内蒙古自治区\",\"location\":\"赤峰市\",\"level\":\"本科\"},{\"schoolName\":\"内蒙古财经大学\",\"schoolCode\":4115010139,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"本科\"},{\"schoolName\":\"呼伦贝尔学院\",\"schoolCode\":4115010819,\"department\":\"内蒙古自治区\",\"location\":\"呼伦贝尔市\",\"level\":\"本科\"},{\"schoolName\":\"集宁师范学院\",\"schoolCode\":4115011427,\"department\":\"内蒙古自治区\",\"location\":\"乌兰察布市\",\"level\":\"本科\"},{\"schoolName\":\"河套学院\",\"schoolCode\":4115011631,\"department\":\"内蒙古自治区\",\"location\":\"巴彦淖尔市\",\"level\":\"本科\"},{\"schoolName\":\"呼和浩特民族学院\",\"schoolCode\":4115011709,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"本科\"},{\"schoolName\":\"内蒙古大学创业学院\",\"schoolCode\":4115014199,\"department\":\"内蒙古自治区教育厅\",\"location\":\"呼和浩特市\",\"level\":\"本科\"},{\"schoolName\":\"内蒙古鸿德文理学院\",\"schoolCode\":4115014205,\"department\":\"内蒙古自治区教育厅\",\"location\":\"呼和浩特市\",\"level\":\"本科\"},{\"schoolName\":\"内蒙古艺术学院\",\"schoolCode\":4115014531,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"本科\"},{\"schoolName\":\"鄂尔多斯应用技术学院\",\"schoolCode\":4115014532,\"department\":\"内蒙古自治区\",\"location\":\"鄂尔多斯市\",\"level\":\"本科\"},{\"schoolName\":\"内蒙古建筑职业技术学院\",\"schoolCode\":4115010871,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古丰州职业学院\",\"schoolCode\":4115011429,\"department\":\"内蒙古自治区教育厅\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"包头职业技术学院\",\"schoolCode\":4115012057,\"department\":\"内蒙古自治区\",\"location\":\"包头市\",\"level\":\"专科\"},{\"schoolName\":\"兴安职业技术学院\",\"schoolCode\":4115012443,\"department\":\"内蒙古自治区\",\"location\":\"兴安盟\",\"level\":\"专科\"},{\"schoolName\":\"呼和浩特职业学院\",\"schoolCode\":4115012670,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"包头轻工职业技术学院\",\"schoolCode\":4115012671,\"department\":\"内蒙古自治区\",\"location\":\"包头市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古电子信息职业技术学院\",\"schoolCode\":4115012673,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古机电职业技术学院\",\"schoolCode\":4115012674,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古化工职业学院\",\"schoolCode\":4115012675,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古商贸职业学院\",\"schoolCode\":4115012676,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"锡林郭勒职业学院\",\"schoolCode\":4115012677,\"department\":\"内蒙古自治区\",\"location\":\"锡林郭勒盟\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古警察职业学院\",\"schoolCode\":4115012797,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古体育职业学院\",\"schoolCode\":4115012894,\"department\":\"内蒙古自治区\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"乌兰察布职业学院\",\"schoolCode\":4115013699,\"department\":\"内蒙古自治区\",\"location\":\"乌兰察布市\",\"level\":\"专科\"},{\"schoolName\":\"通辽职业学院\",\"schoolCode\":4115013740,\"department\":\"内蒙古自治区\",\"location\":\"通辽市\",\"level\":\"专科\"},{\"schoolName\":\"科尔沁艺术职业学院\",\"schoolCode\":4115013741,\"department\":\"内蒙古自治区\",\"location\":\"通辽市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古交通职业技术学院\",\"schoolCode\":4115013824,\"department\":\"内蒙古自治区\",\"location\":\"赤峰市\",\"level\":\"专科\"},{\"schoolName\":\"包头钢铁职业技术学院\",\"schoolCode\":4115013864,\"department\":\"内蒙古自治区\",\"location\":\"包头市\",\"level\":\"专科\"},{\"schoolName\":\"乌海职业技术学院\",\"schoolCode\":4115013915,\"department\":\"内蒙古自治区\",\"location\":\"乌海市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古科技职业学院\",\"schoolCode\":4115014048,\"department\":\"内蒙古自治区教育厅\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古北方职业技术学院\",\"schoolCode\":4115014049,\"department\":\"内蒙古自治区教育厅\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"赤峰职业技术学院\",\"schoolCode\":4115014050,\"department\":\"内蒙古自治区教育厅\",\"location\":\"赤峰市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古经贸外语职业学院\",\"schoolCode\":4115014051,\"department\":\"内蒙古自治区教育厅\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"包头铁道职业技术学院\",\"schoolCode\":4115014187,\"department\":\"内蒙古自治区\",\"location\":\"包头市\",\"level\":\"专科\"},{\"schoolName\":\"乌兰察布医学高等专科学校\",\"schoolCode\":4115014219,\"department\":\"内蒙古自治区\",\"location\":\"乌兰察布市\",\"level\":\"专科\"},{\"schoolName\":\"鄂尔多斯职业学院\",\"schoolCode\":4115014248,\"department\":\"内蒙古自治区\",\"location\":\"鄂尔多斯市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古工业职业学院\",\"schoolCode\":4115014282,\"department\":\"内蒙古自治区教育厅\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"呼伦贝尔职业技术学院\",\"schoolCode\":4115014283,\"department\":\"内蒙古自治区\",\"location\":\"呼伦贝尔市\",\"level\":\"专科\"},{\"schoolName\":\"满洲里俄语职业学院\",\"schoolCode\":4115014285,\"department\":\"内蒙古自治区\",\"location\":\"呼伦贝尔市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古能源职业学院\",\"schoolCode\":4115014337,\"department\":\"内蒙古自治区教育厅\",\"location\":\"呼和浩特市\",\"level\":\"专科\"},{\"schoolName\":\"赤峰工业职业技术学院\",\"schoolCode\":4115014338,\"department\":\"内蒙古自治区\",\"location\":\"赤峰市\",\"level\":\"专科\"},{\"schoolName\":\"阿拉善职业技术学院\",\"schoolCode\":4115014339,\"department\":\"内蒙古自治区\",\"location\":\"阿拉善盟\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古美术职业学院\",\"schoolCode\":4115014387,\"department\":\"内蒙古自治区教育厅\",\"location\":\"巴彦淖尔市\",\"level\":\"专科\"},{\"schoolName\":\"内蒙古民族幼儿师范高等专科学校\",\"schoolCode\":4115014463,\"department\":\"内蒙古自治区\",\"location\":\"鄂尔多斯市\",\"level\":\"专科\"},{\"schoolName\":\"鄂尔多斯生态环境职业学院\",\"schoolCode\":4115014501,\"department\":\"内蒙古自治区\",\"location\":\"鄂尔多斯市\",\"level\":\"专科\"},{\"schoolName\":\"扎兰屯职业学院\",\"schoolCode\":4115014539,\"department\":\"内蒙古自治区\",\"location\":\"呼伦贝尔市\",\"level\":\"专科\"},{\"schoolName\":\"赤峰应用技术职业学院\",\"schoolCode\":4115014699,\"department\":\"内蒙古自治区\",\"location\":\"赤峰市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁大学\",\"schoolCode\":4121010140,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"大连理工大学\",\"schoolCode\":4121010141,\"department\":\"教育部\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳工业大学\",\"schoolCode\":4121010142,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳航空航天大学\",\"schoolCode\":4121010143,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳理工大学\",\"schoolCode\":4121010144,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"东北大学\",\"schoolCode\":4121010145,\"department\":\"教育部\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁科技大学\",\"schoolCode\":4121010146,\"department\":\"辽宁省\",\"location\":\"鞍山市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁工程技术大学\",\"schoolCode\":4121010147,\"department\":\"辽宁省\",\"location\":\"阜新市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁石油化工大学\",\"schoolCode\":4121010148,\"department\":\"辽宁省\",\"location\":\"抚顺市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳化工大学\",\"schoolCode\":4121010149,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"大连交通大学\",\"schoolCode\":4121010150,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"大连海事大学\",\"schoolCode\":4121010151,\"department\":\"交通运输部\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"大连工业大学\",\"schoolCode\":4121010152,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳建筑大学\",\"schoolCode\":4121010153,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁工业大学\",\"schoolCode\":4121010154,\"department\":\"辽宁省\",\"location\":\"锦州市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳农业大学\",\"schoolCode\":4121010157,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"大连海洋大学\",\"schoolCode\":4121010158,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"中国医科大学\",\"schoolCode\":4121010159,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"锦州医科大学\",\"schoolCode\":4121010160,\"department\":\"辽宁省\",\"location\":\"锦州市\",\"level\":\"本科\"},{\"schoolName\":\"大连医科大学\",\"schoolCode\":4121010161,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁中医药大学\",\"schoolCode\":4121010162,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳药科大学\",\"schoolCode\":4121010163,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳医学院\",\"schoolCode\":4121010164,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁师范大学\",\"schoolCode\":4121010165,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳师范大学\",\"schoolCode\":4121010166,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"渤海大学\",\"schoolCode\":4121010167,\"department\":\"辽宁省\",\"location\":\"锦州市\",\"level\":\"本科\"},{\"schoolName\":\"鞍山师范学院\",\"schoolCode\":4121010169,\"department\":\"辽宁省\",\"location\":\"鞍山市\",\"level\":\"本科\"},{\"schoolName\":\"大连外国语大学\",\"schoolCode\":4121010172,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"东北财经大学\",\"schoolCode\":4121010173,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"中国刑事警察学院\",\"schoolCode\":4121010175,\"department\":\"公安部\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳体育学院\",\"schoolCode\":4121010176,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳音乐学院\",\"schoolCode\":4121010177,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"鲁迅美术学院\",\"schoolCode\":4121010178,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁对外经贸学院\",\"schoolCode\":4121010841,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳大学\",\"schoolCode\":4121011035,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"大连大学\",\"schoolCode\":4121011258,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁科技学院\",\"schoolCode\":4121011430,\"department\":\"辽宁省\",\"location\":\"本溪市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁警察学院\",\"schoolCode\":4121011432,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳工程学院\",\"schoolCode\":4121011632,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"辽东学院\",\"schoolCode\":4121011779,\"department\":\"辽宁省\",\"location\":\"丹东市\",\"level\":\"本科\"},{\"schoolName\":\"大连民族大学\",\"schoolCode\":4121012026,\"department\":\"国家民委\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁理工职业大学\",\"schoolCode\":4121012595,\"department\":\"辽宁省教育厅\",\"location\":\"锦州市\",\"level\":\"本科\"},{\"schoolName\":\"大连理工大学城市学院\",\"schoolCode\":4121013198,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳工业大学工程学院\",\"schoolCode\":4121013199,\"department\":\"辽宁省教育厅\",\"location\":\"辽阳市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳航空航天大学北方科技学院\",\"schoolCode\":4121013200,\"department\":\"辽宁省教育厅\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳工学院\",\"schoolCode\":4121013201,\"department\":\"辽宁省教育厅\",\"location\":\"抚顺市\",\"level\":\"本科\"},{\"schoolName\":\"大连工业大学艺术与信息工程学院\",\"schoolCode\":4121013203,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"大连科技学院\",\"schoolCode\":4121013207,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳城市建设学院\",\"schoolCode\":4121013208,\"department\":\"辽宁省教育厅\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"中国医科大学临床医药学院\",\"schoolCode\":4121013211,\"department\":\"辽宁省教育厅\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"大连医科大学中山学院\",\"schoolCode\":4121013212,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"锦州医科大学医疗学院\",\"schoolCode\":4121013213,\"department\":\"辽宁省教育厅\",\"location\":\"锦州市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁师范大学海华学院\",\"schoolCode\":4121013215,\"department\":\"辽宁省教育厅\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁理工学院\",\"schoolCode\":4121013217,\"department\":\"辽宁省教育厅\",\"location\":\"锦州市\",\"level\":\"本科\"},{\"schoolName\":\"大连财经学院\",\"schoolCode\":4121013218,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳城市学院\",\"schoolCode\":4121013220,\"department\":\"辽宁省教育厅\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁石油化工大学顺华能源学院\",\"schoolCode\":4121013583,\"department\":\"辽宁省教育厅\",\"location\":\"抚顺市\",\"level\":\"本科\"},{\"schoolName\":\"大连艺术学院\",\"schoolCode\":4121013599,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁中医药大学杏林学院\",\"schoolCode\":4121013609,\"department\":\"辽宁省教育厅\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁何氏医学院\",\"schoolCode\":4121013610,\"department\":\"辽宁省教育厅\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"沈阳科技学院\",\"schoolCode\":4121013621,\"department\":\"辽宁省教育厅\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"大连东软信息学院\",\"schoolCode\":4121013631,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁财贸学院\",\"schoolCode\":4121013900,\"department\":\"辽宁省教育厅\",\"location\":\"葫芦岛市\",\"level\":\"本科\"},{\"schoolName\":\"辽宁传媒学院\",\"schoolCode\":4121013957,\"department\":\"辽宁省教育厅\",\"location\":\"沈阳市\",\"level\":\"本科\"},{\"schoolName\":\"营口理工学院\",\"schoolCode\":4121014435,\"department\":\"辽宁省\",\"location\":\"营口市\",\"level\":\"本科\"},{\"schoolName\":\"朝阳师范高等专科学校\",\"schoolCode\":4121010171,\"department\":\"辽宁省\",\"location\":\"朝阳市\",\"level\":\"专科\"},{\"schoolName\":\"抚顺师范高等专科学校\",\"schoolCode\":4121010179,\"department\":\"辽宁省\",\"location\":\"抚顺市\",\"level\":\"专科\"},{\"schoolName\":\"锦州师范高等专科学校\",\"schoolCode\":4121010180,\"department\":\"辽宁省\",\"location\":\"锦州市\",\"level\":\"专科\"},{\"schoolName\":\"营口职业技术学院\",\"schoolCode\":4121010181,\"department\":\"辽宁省\",\"location\":\"营口市\",\"level\":\"专科\"},{\"schoolName\":\"铁岭师范高等专科学校\",\"schoolCode\":4121010182,\"department\":\"辽宁省\",\"location\":\"铁岭市\",\"level\":\"专科\"},{\"schoolName\":\"大连职业技术学院\",\"schoolCode\":4121010845,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁农业职业技术学院\",\"schoolCode\":4121010957,\"department\":\"辽宁省\",\"location\":\"营口市\",\"level\":\"专科\"},{\"schoolName\":\"抚顺职业技术学院\",\"schoolCode\":4121011037,\"department\":\"辽宁省\",\"location\":\"抚顺市\",\"level\":\"专科\"},{\"schoolName\":\"辽阳职业技术学院\",\"schoolCode\":4121011249,\"department\":\"辽宁省\",\"location\":\"辽阳市\",\"level\":\"专科\"},{\"schoolName\":\"阜新高等专科学校\",\"schoolCode\":4121011250,\"department\":\"辽宁省\",\"location\":\"阜新市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁省交通高等专科学校\",\"schoolCode\":4121011500,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁税务高等专科学校\",\"schoolCode\":4121011735,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"专科\"},{\"schoolName\":\"盘锦职业技术学院\",\"schoolCode\":4121012063,\"department\":\"辽宁省\",\"location\":\"盘锦市\",\"level\":\"专科\"},{\"schoolName\":\"沈阳航空职业技术学院\",\"schoolCode\":4121012590,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁体育运动职业技术学院\",\"schoolCode\":4121012591,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁职业学院\",\"schoolCode\":4121012592,\"department\":\"辽宁省\",\"location\":\"铁岭市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁生态工程职业学院\",\"schoolCode\":4121012593,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"沈阳职业技术学院\",\"schoolCode\":4121012594,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"大连商务职业学院\",\"schoolCode\":4121012730,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁金融职业学院\",\"schoolCode\":4121012895,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁轨道交通职业学院\",\"schoolCode\":4121012896,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁广告职业学院\",\"schoolCode\":4121012897,\"department\":\"辽宁省教育厅\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁机电职业技术学院\",\"schoolCode\":4121012898,\"department\":\"辽宁省\",\"location\":\"丹东市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁经济职业技术学院\",\"schoolCode\":4121012899,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁石化职业技术学院\",\"schoolCode\":4121012900,\"department\":\"辽宁省\",\"location\":\"锦州市\",\"level\":\"专科\"},{\"schoolName\":\"渤海船舶职业学院\",\"schoolCode\":4121012931,\"department\":\"辽宁省\",\"location\":\"葫芦岛市\",\"level\":\"专科\"},{\"schoolName\":\"大连软件职业学院\",\"schoolCode\":4121013958,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"专科\"},{\"schoolName\":\"大连翻译职业学院\",\"schoolCode\":4121013959,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁商贸职业学院\",\"schoolCode\":4121013960,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"大连枫叶职业技术学院\",\"schoolCode\":4121013961,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁装备制造职业技术学院\",\"schoolCode\":4121014076,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽河石油职业技术学院\",\"schoolCode\":4121014077,\"department\":\"辽宁省\",\"location\":\"盘锦市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁地质工程职业学院\",\"schoolCode\":4121014106,\"department\":\"辽宁省\",\"location\":\"丹东市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁铁道职业技术学院\",\"schoolCode\":4121014188,\"department\":\"辽宁省\",\"location\":\"锦州市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁建筑职业学院\",\"schoolCode\":4121014189,\"department\":\"辽宁省\",\"location\":\"辽阳市\",\"level\":\"专科\"},{\"schoolName\":\"大连航运职业技术学院\",\"schoolCode\":4121014209,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"专科\"},{\"schoolName\":\"大连装备制造职业技术学院\",\"schoolCode\":4121014227,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"专科\"},{\"schoolName\":\"大连汽车职业技术学院\",\"schoolCode\":4121014228,\"department\":\"辽宁省教育厅\",\"location\":\"大连市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁现代服务职业技术学院\",\"schoolCode\":4121014240,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁冶金职业技术学院\",\"schoolCode\":4121014286,\"department\":\"辽宁省\",\"location\":\"本溪市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁工程职业学院\",\"schoolCode\":4121014287,\"department\":\"辽宁省\",\"location\":\"铁岭市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁城市建设职业技术学院\",\"schoolCode\":4121014288,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁医药职业学院\",\"schoolCode\":4121014289,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"铁岭卫生职业学院\",\"schoolCode\":4121014290,\"department\":\"辽宁省\",\"location\":\"铁岭市\",\"level\":\"专科\"},{\"schoolName\":\"沈阳北软信息职业技术学院\",\"schoolCode\":4121014385,\"department\":\"辽宁省教育厅\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁政法职业学院\",\"schoolCode\":4121014398,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁民族师范高等专科学校\",\"schoolCode\":4121014464,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁轻工职业学院\",\"schoolCode\":4121014473,\"department\":\"辽宁省\",\"location\":\"大连市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁特殊教育师范高等专科学校\",\"schoolCode\":4121014526,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"辽宁师范高等专科学校\",\"schoolCode\":4121014662,\"department\":\"辽宁省\",\"location\":\"沈阳市\",\"level\":\"专科\"},{\"schoolName\":\"鞍山职业技术学院\",\"schoolCode\":4121014700,\"department\":\"辽宁省\",\"location\":\"鞍山市\",\"level\":\"专科\"},{\"schoolName\":\"吉林大学\",\"schoolCode\":4122010183,\"department\":\"教育部\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"延边大学\",\"schoolCode\":4122010184,\"department\":\"吉林省\",\"location\":\"延边朝鲜族自治州\",\"level\":\"本科\"},{\"schoolName\":\"长春理工大学\",\"schoolCode\":4122010186,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"东北电力大学\",\"schoolCode\":4122010188,\"department\":\"吉林省\",\"location\":\"吉林市\",\"level\":\"本科\"},{\"schoolName\":\"长春工业大学\",\"schoolCode\":4122010190,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"吉林建筑大学\",\"schoolCode\":4122010191,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"吉林化工学院\",\"schoolCode\":4122010192,\"department\":\"吉林省\",\"location\":\"吉林市\",\"level\":\"本科\"},{\"schoolName\":\"吉林农业大学\",\"schoolCode\":4122010193,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"长春中医药大学\",\"schoolCode\":4122010199,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"东北师范大学\",\"schoolCode\":4122010200,\"department\":\"教育部\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"北华大学\",\"schoolCode\":4122010201,\"department\":\"吉林省\",\"location\":\"吉林市\",\"level\":\"本科\"},{\"schoolName\":\"通化师范学院\",\"schoolCode\":4122010202,\"department\":\"吉林省\",\"location\":\"通化市\",\"level\":\"本科\"},{\"schoolName\":\"吉林师范大学\",\"schoolCode\":4122010203,\"department\":\"吉林省\",\"location\":\"四平市\",\"level\":\"本科\"},{\"schoolName\":\"吉林工程技术师范学院\",\"schoolCode\":4122010204,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"长春师范大学\",\"schoolCode\":4122010205,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"白城师范学院\",\"schoolCode\":4122010206,\"department\":\"吉林省\",\"location\":\"白城市\",\"level\":\"本科\"},{\"schoolName\":\"吉林财经大学\",\"schoolCode\":4122010207,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"吉林体育学院\",\"schoolCode\":4122010208,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"吉林艺术学院\",\"schoolCode\":4122010209,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"吉林外国语大学\",\"schoolCode\":4122010964,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"吉林工商学院\",\"schoolCode\":4122011261,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"长春工程学院\",\"schoolCode\":4122011437,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"吉林农业科技学院\",\"schoolCode\":4122011439,\"department\":\"吉林省\",\"location\":\"吉林市\",\"level\":\"本科\"},{\"schoolName\":\"吉林警察学院\",\"schoolCode\":4122011441,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"长春大学\",\"schoolCode\":4122011726,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"长春光华学院\",\"schoolCode\":4122013600,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"长春工业大学人文信息学院\",\"schoolCode\":4122013601,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"长春理工大学光电信息学院\",\"schoolCode\":4122013602,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"长春财经学院\",\"schoolCode\":4122013603,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"吉林建筑科技学院\",\"schoolCode\":4122013604,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"长春建筑学院\",\"schoolCode\":4122013605,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"长春科技学院\",\"schoolCode\":4122013606,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"吉林动画学院\",\"schoolCode\":4122013607,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"吉林师范大学博达学院\",\"schoolCode\":4122013622,\"department\":\"吉林省教育厅\",\"location\":\"四平市\",\"level\":\"本科\"},{\"schoolName\":\"长春大学旅游学院\",\"schoolCode\":4122013623,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"东北师范大学人文学院\",\"schoolCode\":4122013662,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"本科\"},{\"schoolName\":\"吉林医药学院\",\"schoolCode\":4122013706,\"department\":\"吉林省\",\"location\":\"吉林市\",\"level\":\"本科\"},{\"schoolName\":\"长春师范高等专科学校\",\"schoolCode\":3622000335,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"辽源职业技术学院\",\"schoolCode\":4122010847,\"department\":\"吉林省\",\"location\":\"辽源市\",\"level\":\"专科\"},{\"schoolName\":\"四平职业大学\",\"schoolCode\":4122011044,\"department\":\"吉林省\",\"location\":\"四平市\",\"level\":\"专科\"},{\"schoolName\":\"长春汽车工业高等专科学校\",\"schoolCode\":4122011436,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"长春金融高等专科学校\",\"schoolCode\":4122011440,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"长春医学高等专科学校\",\"schoolCode\":4122011823,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"吉林交通职业技术学院\",\"schoolCode\":4122012049,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"长春东方职业学院\",\"schoolCode\":4122012306,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"吉林司法警官职业学院\",\"schoolCode\":4122012901,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"吉林电子信息职业技术学院\",\"schoolCode\":4122012902,\"department\":\"吉林省\",\"location\":\"吉林市\",\"level\":\"专科\"},{\"schoolName\":\"吉林工业职业技术学院\",\"schoolCode\":4122012903,\"department\":\"吉林省\",\"location\":\"吉林市\",\"level\":\"专科\"},{\"schoolName\":\"吉林工程职业学院\",\"schoolCode\":4122012904,\"department\":\"吉林省\",\"location\":\"四平市\",\"level\":\"专科\"},{\"schoolName\":\"长春职业技术学院\",\"schoolCode\":4122013161,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"白城医学高等专科学校\",\"schoolCode\":4122013743,\"department\":\"吉林省\",\"location\":\"白城市\",\"level\":\"专科\"},{\"schoolName\":\"长春信息技术职业学院\",\"schoolCode\":4122013916,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"松原职业技术学院\",\"schoolCode\":4122013917,\"department\":\"吉林省\",\"location\":\"松原市\",\"level\":\"专科\"},{\"schoolName\":\"吉林铁道职业技术学院\",\"schoolCode\":4122014052,\"department\":\"吉林省\",\"location\":\"吉林市\",\"level\":\"专科\"},{\"schoolName\":\"白城职业技术学院\",\"schoolCode\":4122014107,\"department\":\"吉林省\",\"location\":\"白城市\",\"level\":\"专科\"},{\"schoolName\":\"长白山职业技术学院\",\"schoolCode\":4122014190,\"department\":\"吉林省\",\"location\":\"白山市\",\"level\":\"专科\"},{\"schoolName\":\"吉林科技职业技术学院\",\"schoolCode\":4122014291,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"延边职业技术学院\",\"schoolCode\":4122014340,\"department\":\"吉林省\",\"location\":\"延边朝鲜族自治州\",\"level\":\"专科\"},{\"schoolName\":\"吉林城市职业技术学院\",\"schoolCode\":4122014426,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"吉林职业技术学院\",\"schoolCode\":4122014567,\"department\":\"吉林省教育厅\",\"location\":\"延边朝鲜族自治州\",\"level\":\"专科\"},{\"schoolName\":\"吉林水利电力职业学院\",\"schoolCode\":4122014602,\"department\":\"吉林省\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"长春健康职业学院\",\"schoolCode\":4122014603,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"长春早期教育职业学院\",\"schoolCode\":4122014701,\"department\":\"吉林省教育厅\",\"location\":\"长春市\",\"level\":\"专科\"},{\"schoolName\":\"梅河口康美职业技术学院\",\"schoolCode\":4122014702,\"department\":\"吉林省教育厅\",\"location\":\"梅河口市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江大学\",\"schoolCode\":4123010212,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨工业大学\",\"schoolCode\":4123010213,\"department\":\"工业和信息化部\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨理工大学\",\"schoolCode\":4123010214,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨工程大学\",\"schoolCode\":4123010217,\"department\":\"工业和信息化部\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"黑龙江科技大学\",\"schoolCode\":4123010219,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"东北石油大学\",\"schoolCode\":4123010220,\"department\":\"黑龙江省\",\"location\":\"大庆市\",\"level\":\"本科\"},{\"schoolName\":\"佳木斯大学\",\"schoolCode\":4123010222,\"department\":\"黑龙江省\",\"location\":\"佳木斯市\",\"level\":\"本科\"},{\"schoolName\":\"黑龙江八一农垦大学\",\"schoolCode\":4123010223,\"department\":\"黑龙江省\",\"location\":\"大庆市\",\"level\":\"本科\"},{\"schoolName\":\"东北农业大学\",\"schoolCode\":4123010224,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"东北林业大学\",\"schoolCode\":4123010225,\"department\":\"教育部\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨医科大学\",\"schoolCode\":4123010226,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"黑龙江中医药大学\",\"schoolCode\":4123010228,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"牡丹江医学院\",\"schoolCode\":4123010229,\"department\":\"黑龙江省\",\"location\":\"牡丹江市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨师范大学\",\"schoolCode\":4123010231,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"齐齐哈尔大学\",\"schoolCode\":4123010232,\"department\":\"黑龙江省\",\"location\":\"齐齐哈尔市\",\"level\":\"本科\"},{\"schoolName\":\"牡丹江师范学院\",\"schoolCode\":4123010233,\"department\":\"黑龙江省\",\"location\":\"牡丹江市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨学院\",\"schoolCode\":4123010234,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"大庆师范学院\",\"schoolCode\":4123010235,\"department\":\"黑龙江省\",\"location\":\"大庆市\",\"level\":\"本科\"},{\"schoolName\":\"绥化学院\",\"schoolCode\":4123010236,\"department\":\"黑龙江省\",\"location\":\"绥化市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨商业大学\",\"schoolCode\":4123010240,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨体育学院\",\"schoolCode\":4123010242,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨金融学院\",\"schoolCode\":4123010245,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"齐齐哈尔医学院\",\"schoolCode\":4123011230,\"department\":\"黑龙江省\",\"location\":\"齐齐哈尔市\",\"level\":\"本科\"},{\"schoolName\":\"黑龙江工业学院\",\"schoolCode\":4123011445,\"department\":\"黑龙江省\",\"location\":\"鸡西市\",\"level\":\"本科\"},{\"schoolName\":\"黑龙江东方学院\",\"schoolCode\":4123011446,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨信息工程学院\",\"schoolCode\":4123011635,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"黑龙江工程学院\",\"schoolCode\":4123011802,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"齐齐哈尔工程学院\",\"schoolCode\":4123012729,\"department\":\"黑龙江省教育厅\",\"location\":\"齐齐哈尔市\",\"level\":\"本科\"},{\"schoolName\":\"黑龙江外国语学院\",\"schoolCode\":4123013296,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"黑龙江财经学院\",\"schoolCode\":4123013298,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨石油学院\",\"schoolCode\":4123013299,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"黑龙江工商学院\",\"schoolCode\":4123013300,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨远东理工学院\",\"schoolCode\":4123013301,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨剑桥学院\",\"schoolCode\":4123013303,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"黑龙江工程学院昆仑旅游学院\",\"schoolCode\":4123013304,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨广厦学院\",\"schoolCode\":4123013306,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨华德学院\",\"schoolCode\":4123013307,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"黑河学院\",\"schoolCode\":4123013744,\"department\":\"黑龙江省\",\"location\":\"黑河市\",\"level\":\"本科\"},{\"schoolName\":\"哈尔滨音乐学院\",\"schoolCode\":4123014560,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"本科\"},{\"schoolName\":\"齐齐哈尔高等师范专科学校\",\"schoolCode\":4123010238,\"department\":\"黑龙江省\",\"location\":\"齐齐哈尔市\",\"level\":\"专科\"},{\"schoolName\":\"伊春职业学院\",\"schoolCode\":4123010872,\"department\":\"黑龙江省\",\"location\":\"伊春市\",\"level\":\"专科\"},{\"schoolName\":\"牡丹江大学\",\"schoolCode\":4123011046,\"department\":\"黑龙江省\",\"location\":\"牡丹江市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江职业学院\",\"schoolCode\":4123011449,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江建筑职业技术学院\",\"schoolCode\":4123012053,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江艺术职业学院\",\"schoolCode\":4123012490,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"大庆职业学院\",\"schoolCode\":4123012718,\"department\":\"黑龙江省\",\"location\":\"大庆市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江林业职业技术学院\",\"schoolCode\":4123012724,\"department\":\"黑龙江省\",\"location\":\"牡丹江市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江农业职业技术学院\",\"schoolCode\":4123012725,\"department\":\"黑龙江省\",\"location\":\"佳木斯市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江农业工程职业学院\",\"schoolCode\":4123012726,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江农垦职业学院\",\"schoolCode\":4123012727,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江司法警官职业学院\",\"schoolCode\":4123012728,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"鹤岗师范高等专科学校\",\"schoolCode\":4123012905,\"department\":\"黑龙江省\",\"location\":\"鹤岗市\",\"level\":\"专科\"},{\"schoolName\":\"哈尔滨电力职业技术学院\",\"schoolCode\":4123012906,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"哈尔滨铁道职业技术学院\",\"schoolCode\":4123012907,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"大兴安岭职业学院\",\"schoolCode\":4123012908,\"department\":\"黑龙江省\",\"location\":\"大兴安岭地区\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江农业经济职业学院\",\"schoolCode\":4123012910,\"department\":\"黑龙江省\",\"location\":\"牡丹江市\",\"level\":\"专科\"},{\"schoolName\":\"哈尔滨职业技术学院\",\"schoolCode\":4123012911,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"哈尔滨传媒职业学院\",\"schoolCode\":4123013302,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江生物科技职业学院\",\"schoolCode\":4123013447,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江商业职业学院\",\"schoolCode\":4123013448,\"department\":\"黑龙江省\",\"location\":\"牡丹江市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江公安警官职业学院\",\"schoolCode\":4123013449,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"哈尔滨城市职业学院\",\"schoolCode\":4123013451,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江农垦科技职业学院\",\"schoolCode\":4123013453,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江旅游职业技术学院\",\"schoolCode\":4123013729,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江三江美术职业学院\",\"schoolCode\":4123013730,\"department\":\"黑龙江省教育厅\",\"location\":\"佳木斯市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江生态工程职业学院\",\"schoolCode\":4123013731,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江能源职业学院\",\"schoolCode\":4123013732,\"department\":\"黑龙江省\",\"location\":\"双鸭山市\",\"level\":\"专科\"},{\"schoolName\":\"七台河职业学院\",\"schoolCode\":4123013918,\"department\":\"黑龙江省\",\"location\":\"七台河市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江民族职业学院\",\"schoolCode\":4123013935,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"大庆医学高等专科学校\",\"schoolCode\":4123014017,\"department\":\"黑龙江省\",\"location\":\"大庆市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江交通职业技术学院\",\"schoolCode\":4123014053,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"哈尔滨应用职业技术学院\",\"schoolCode\":4123014055,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江幼儿师范高等专科学校\",\"schoolCode\":4123014095,\"department\":\"黑龙江省\",\"location\":\"牡丹江市\",\"level\":\"专科\"},{\"schoolName\":\"哈尔滨科学技术职业学院\",\"schoolCode\":4123014108,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"佳木斯职业学院\",\"schoolCode\":4123014178,\"department\":\"黑龙江省\",\"location\":\"佳木斯市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江护理高等专科学校\",\"schoolCode\":4123014272,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"齐齐哈尔理工职业学院\",\"schoolCode\":4123014400,\"department\":\"黑龙江省教育厅\",\"location\":\"齐齐哈尔市\",\"level\":\"专科\"},{\"schoolName\":\"哈尔滨幼儿师范高等专科学校\",\"schoolCode\":4123014425,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"黑龙江冰雪体育职业学院\",\"schoolCode\":4123014540,\"department\":\"黑龙江省\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"哈尔滨北方航空职业技术学院\",\"schoolCode\":4123014633,\"department\":\"黑龙江省教育厅\",\"location\":\"哈尔滨市\",\"level\":\"专科\"},{\"schoolName\":\"复旦大学\",\"schoolCode\":4131010246,\"department\":\"教育部\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"同济大学\",\"schoolCode\":4131010247,\"department\":\"教育部\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海交通大学\",\"schoolCode\":4131010248,\"department\":\"教育部\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"华东理工大学\",\"schoolCode\":4131010251,\"department\":\"教育部\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海理工大学\",\"schoolCode\":4131010252,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海海事大学\",\"schoolCode\":4131010254,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"东华大学\",\"schoolCode\":4131010255,\"department\":\"教育部\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海电力大学\",\"schoolCode\":4131010256,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海应用技术大学\",\"schoolCode\":4131010259,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海健康医学院\",\"schoolCode\":4131010262,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海海洋大学\",\"schoolCode\":4131010264,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海中医药大学\",\"schoolCode\":4131010268,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"华东师范大学\",\"schoolCode\":4131010269,\"department\":\"教育部\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海师范大学\",\"schoolCode\":4131010270,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海外国语大学\",\"schoolCode\":4131010271,\"department\":\"教育部\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海财经大学\",\"schoolCode\":4131010272,\"department\":\"教育部\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海对外经贸大学\",\"schoolCode\":4131010273,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海海关学院\",\"schoolCode\":4131010274,\"department\":\"海关总署\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"华东政法大学\",\"schoolCode\":4131010276,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海体育学院\",\"schoolCode\":4131010277,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海音乐学院\",\"schoolCode\":4131010278,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海戏剧学院\",\"schoolCode\":4131010279,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海大学\",\"schoolCode\":4131010280,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海公安学院\",\"schoolCode\":4131010283,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海工程技术大学\",\"schoolCode\":4131010856,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海立信会计金融学院\",\"schoolCode\":4131011047,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海电机学院\",\"schoolCode\":4131011458,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海杉达学院\",\"schoolCode\":4131011833,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海政法学院\",\"schoolCode\":4131011835,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海第二工业大学\",\"schoolCode\":4131012044,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海商学院\",\"schoolCode\":4131012050,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海立达学院\",\"schoolCode\":4131012587,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海建桥学院\",\"schoolCode\":4131012799,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海兴伟学院\",\"schoolCode\":4131012914,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海中侨职业技术大学\",\"schoolCode\":4131012915,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海视觉艺术学院\",\"schoolCode\":4131013632,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海外国语大学贤达经济人文学院\",\"schoolCode\":4131013636,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海师范大学天华学院\",\"schoolCode\":4131013893,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海科技大学\",\"schoolCode\":4131014423,\"department\":\"上海市 中国科学院\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海纽约大学\",\"schoolCode\":4131016404,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"本科\"},{\"schoolName\":\"上海旅游高等专科学校\",\"schoolCode\":4131010275,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海东海职业技术学院\",\"schoolCode\":4131010851,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海工商职业技术学院\",\"schoolCode\":4131010852,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海出版印刷高等专科学校\",\"schoolCode\":4131011733,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海行健职业学院\",\"schoolCode\":4131012493,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海城建职业学院\",\"schoolCode\":4131012495,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海交通职业技术学院\",\"schoolCode\":4131012497,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海海事职业技术学院\",\"schoolCode\":4131012498,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海电子信息职业技术学院\",\"schoolCode\":4131012499,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海震旦职业学院\",\"schoolCode\":4131012583,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海民远职业技术学院\",\"schoolCode\":4131012584,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海欧华职业技术学院\",\"schoolCode\":4131012585,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海思博职业技术学院\",\"schoolCode\":4131012586,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海工艺美术职业学院\",\"schoolCode\":4131012588,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海济光职业技术学院\",\"schoolCode\":4131012798,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海工商外国语职业学院\",\"schoolCode\":4131012800,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海科学技术职业学院\",\"schoolCode\":4131012801,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海农林职业技术学院\",\"schoolCode\":4131012912,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海邦德职业技术学院\",\"schoolCode\":4131012913,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海电影艺术职业学院\",\"schoolCode\":4131013747,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海中华职业技术学院\",\"schoolCode\":4131013907,\"department\":\"上海市教委\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海工会管理职业学院\",\"schoolCode\":4131014023,\"department\":\"上海市\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"上海民航职业技术学院\",\"schoolCode\":4131014394,\"department\":\"交通运输部（中国民用航空局）\",\"location\":\"上海市\",\"level\":\"专科\"},{\"schoolName\":\"南京大学\",\"schoolCode\":4132010284,\"department\":\"教育部\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"苏州大学\",\"schoolCode\":4132010285,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"本科\"},{\"schoolName\":\"东南大学\",\"schoolCode\":4132010286,\"department\":\"教育部\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京航空航天大学\",\"schoolCode\":4132010287,\"department\":\"工业和信息化部\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京理工大学\",\"schoolCode\":4132010288,\"department\":\"工业和信息化部\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"江苏科技大学\",\"schoolCode\":4132010289,\"department\":\"江苏省\",\"location\":\"镇江市\",\"level\":\"本科\"},{\"schoolName\":\"中国矿业大学\",\"schoolCode\":4132010290,\"department\":\"教育部\",\"location\":\"徐州市\",\"level\":\"本科\"},{\"schoolName\":\"南京工业大学\",\"schoolCode\":4132010291,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"常州大学\",\"schoolCode\":4132010292,\"department\":\"江苏省\",\"location\":\"常州市\",\"level\":\"本科\"},{\"schoolName\":\"南京邮电大学\",\"schoolCode\":4132010293,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"河海大学\",\"schoolCode\":4132010294,\"department\":\"教育部\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"江南大学\",\"schoolCode\":4132010295,\"department\":\"教育部\",\"location\":\"无锡市\",\"level\":\"本科\"},{\"schoolName\":\"南京林业大学\",\"schoolCode\":4132010298,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"江苏大学\",\"schoolCode\":4132010299,\"department\":\"江苏省\",\"location\":\"镇江市\",\"level\":\"本科\"},{\"schoolName\":\"南京信息工程大学\",\"schoolCode\":4132010300,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南通大学\",\"schoolCode\":4132010304,\"department\":\"江苏省\",\"location\":\"南通市\",\"level\":\"本科\"},{\"schoolName\":\"盐城工学院\",\"schoolCode\":4132010305,\"department\":\"江苏省\",\"location\":\"盐城市\",\"level\":\"本科\"},{\"schoolName\":\"南京农业大学\",\"schoolCode\":4132010307,\"department\":\"教育部\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京医科大学\",\"schoolCode\":4132010312,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"徐州医科大学\",\"schoolCode\":4132010313,\"department\":\"江苏省\",\"location\":\"徐州市\",\"level\":\"本科\"},{\"schoolName\":\"南京中医药大学\",\"schoolCode\":4132010315,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"中国药科大学\",\"schoolCode\":4132010316,\"department\":\"教育部\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京师范大学\",\"schoolCode\":4132010319,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"江苏师范大学\",\"schoolCode\":4132010320,\"department\":\"江苏省\",\"location\":\"徐州市\",\"level\":\"本科\"},{\"schoolName\":\"淮阴师范学院\",\"schoolCode\":4132010323,\"department\":\"江苏省\",\"location\":\"淮安市\",\"level\":\"本科\"},{\"schoolName\":\"盐城师范学院\",\"schoolCode\":4132010324,\"department\":\"江苏省\",\"location\":\"盐城市\",\"level\":\"本科\"},{\"schoolName\":\"南京财经大学\",\"schoolCode\":4132010327,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"江苏警官学院\",\"schoolCode\":4132010329,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京体育学院\",\"schoolCode\":4132010330,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京艺术学院\",\"schoolCode\":4132010331,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"苏州科技大学\",\"schoolCode\":4132010332,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"本科\"},{\"schoolName\":\"常熟理工学院\",\"schoolCode\":4132010333,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"本科\"},{\"schoolName\":\"南京工业职业技术大学\",\"schoolCode\":4132010850,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"淮阴工学院\",\"schoolCode\":4132011049,\"department\":\"江苏省\",\"location\":\"淮安市\",\"level\":\"本科\"},{\"schoolName\":\"常州工学院\",\"schoolCode\":4132011055,\"department\":\"江苏省\",\"location\":\"常州市\",\"level\":\"本科\"},{\"schoolName\":\"扬州大学\",\"schoolCode\":4132011117,\"department\":\"江苏省\",\"location\":\"扬州市\",\"level\":\"本科\"},{\"schoolName\":\"三江学院\",\"schoolCode\":4132011122,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京工程学院\",\"schoolCode\":4132011276,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京审计大学\",\"schoolCode\":4132011287,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京晓庄学院\",\"schoolCode\":4132011460,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"江苏理工学院\",\"schoolCode\":4132011463,\"department\":\"江苏省\",\"location\":\"常州市\",\"level\":\"本科\"},{\"schoolName\":\"江苏海洋大学\",\"schoolCode\":4132011641,\"department\":\"江苏省\",\"location\":\"连云港市\",\"level\":\"本科\"},{\"schoolName\":\"徐州工程学院\",\"schoolCode\":4132011998,\"department\":\"江苏省\",\"location\":\"徐州市\",\"level\":\"本科\"},{\"schoolName\":\"南京特殊教育师范学院\",\"schoolCode\":4132012048,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南通理工学院\",\"schoolCode\":4132012056,\"department\":\"江苏省教育厅\",\"location\":\"南通市\",\"level\":\"本科\"},{\"schoolName\":\"南京森林警察学院\",\"schoolCode\":4132012213,\"department\":\"公安部\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"东南大学成贤学院\",\"schoolCode\":4132012689,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"泰州学院\",\"schoolCode\":4132012917,\"department\":\"江苏省\",\"location\":\"泰州市\",\"level\":\"本科\"},{\"schoolName\":\"无锡太湖学院\",\"schoolCode\":4132013571,\"department\":\"江苏省教育厅\",\"location\":\"无锡市\",\"level\":\"本科\"},{\"schoolName\":\"金陵科技学院\",\"schoolCode\":4132013573,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"中国矿业大学徐海学院\",\"schoolCode\":4132013579,\"department\":\"江苏省教育厅\",\"location\":\"徐州市\",\"level\":\"本科\"},{\"schoolName\":\"南京大学金陵学院\",\"schoolCode\":4132013646,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京理工大学紫金学院\",\"schoolCode\":4132013654,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京航空航天大学金城学院\",\"schoolCode\":4132013655,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京传媒学院\",\"schoolCode\":4132013687,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京理工大学泰州科技学院\",\"schoolCode\":4132013842,\"department\":\"江苏省教育厅\",\"location\":\"泰州市\",\"level\":\"本科\"},{\"schoolName\":\"南京师范大学泰州学院\",\"schoolCode\":4132013843,\"department\":\"江苏省教育厅\",\"location\":\"泰州市\",\"level\":\"本科\"},{\"schoolName\":\"南京工业大学浦江学院\",\"schoolCode\":4132013905,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"南京师范大学中北学院\",\"schoolCode\":4132013906,\"department\":\"江苏省教育厅\",\"location\":\"镇江市\",\"level\":\"本科\"},{\"schoolName\":\"南京医科大学康达学院\",\"schoolCode\":4132013980,\"department\":\"江苏省教育厅\",\"location\":\"连云港市\",\"level\":\"本科\"},{\"schoolName\":\"南京中医药大学翰林学院\",\"schoolCode\":4132013981,\"department\":\"江苏省教育厅\",\"location\":\"泰州市\",\"level\":\"本科\"},{\"schoolName\":\"南京信息工程大学滨江学院\",\"schoolCode\":4132013982,\"department\":\"江苏省教育厅\",\"location\":\"无锡市\",\"level\":\"本科\"},{\"schoolName\":\"苏州大学文正学院\",\"schoolCode\":4132013983,\"department\":\"江苏省教育厅\",\"location\":\"苏州市\",\"level\":\"本科\"},{\"schoolName\":\"苏州大学应用技术学院\",\"schoolCode\":4132013984,\"department\":\"江苏省教育厅\",\"location\":\"苏州市\",\"level\":\"本科\"},{\"schoolName\":\"苏州科技大学天平学院\",\"schoolCode\":4132013985,\"department\":\"江苏省教育厅\",\"location\":\"苏州市\",\"level\":\"本科\"},{\"schoolName\":\"江苏大学京江学院\",\"schoolCode\":4132013986,\"department\":\"江苏省教育厅\",\"location\":\"镇江市\",\"level\":\"本科\"},{\"schoolName\":\"扬州大学广陵学院\",\"schoolCode\":4132013987,\"department\":\"江苏省教育厅\",\"location\":\"扬州市\",\"level\":\"本科\"},{\"schoolName\":\"江苏师范大学科文学院\",\"schoolCode\":4132013988,\"department\":\"江苏省教育厅\",\"location\":\"徐州市\",\"level\":\"本科\"},{\"schoolName\":\"南京邮电大学通达学院\",\"schoolCode\":4132013989,\"department\":\"江苏省教育厅\",\"location\":\"扬州市\",\"level\":\"本科\"},{\"schoolName\":\"南京财经大学红山学院\",\"schoolCode\":4132013990,\"department\":\"江苏省教育厅\",\"location\":\"镇江市\",\"level\":\"本科\"},{\"schoolName\":\"江苏科技大学苏州理工学院\",\"schoolCode\":4132013991,\"department\":\"江苏省教育厅\",\"location\":\"苏州市\",\"level\":\"本科\"},{\"schoolName\":\"常州大学怀德学院\",\"schoolCode\":4132013992,\"department\":\"江苏省教育厅\",\"location\":\"泰州市\",\"level\":\"本科\"},{\"schoolName\":\"南通大学杏林学院\",\"schoolCode\":4132013993,\"department\":\"江苏省教育厅\",\"location\":\"南通市\",\"level\":\"本科\"},{\"schoolName\":\"南京审计大学金审学院\",\"schoolCode\":4132013994,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"宿迁学院\",\"schoolCode\":4132014160,\"department\":\"江苏省\",\"location\":\"宿迁市\",\"level\":\"本科\"},{\"schoolName\":\"江苏第二师范学院\",\"schoolCode\":4132014436,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"本科\"},{\"schoolName\":\"西交利物浦大学\",\"schoolCode\":4132016403,\"department\":\"江苏省教育厅\",\"location\":\"苏州市\",\"level\":\"本科\"},{\"schoolName\":\"昆山杜克大学\",\"schoolCode\":4132016406,\"department\":\"江苏省教育厅\",\"location\":\"昆山市\",\"level\":\"本科\"},{\"schoolName\":\"盐城幼儿师范高等专科学校\",\"schoolCode\":3632000466,\"department\":\"江苏省\",\"location\":\"盐城市\",\"level\":\"专科\"},{\"schoolName\":\"苏州幼儿师范高等专科学校\",\"schoolCode\":3632000583,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"明达职业技术学院\",\"schoolCode\":4132010826,\"department\":\"江苏省教育厅\",\"location\":\"盐城市\",\"level\":\"专科\"},{\"schoolName\":\"无锡职业技术学院\",\"schoolCode\":4132010848,\"department\":\"江苏省\",\"location\":\"无锡市\",\"level\":\"专科\"},{\"schoolName\":\"江苏建筑职业技术学院\",\"schoolCode\":4132010849,\"department\":\"江苏省\",\"location\":\"徐州市\",\"level\":\"专科\"},{\"schoolName\":\"江苏工程职业技术学院\",\"schoolCode\":4132010958,\"department\":\"江苏省\",\"location\":\"南通市\",\"level\":\"专科\"},{\"schoolName\":\"苏州工艺美术职业技术学院\",\"schoolCode\":4132010960,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"连云港职业技术学院\",\"schoolCode\":4132011050,\"department\":\"江苏省\",\"location\":\"连云港市\",\"level\":\"专科\"},{\"schoolName\":\"镇江市高等专科学校\",\"schoolCode\":4132011051,\"department\":\"江苏省\",\"location\":\"镇江市\",\"level\":\"专科\"},{\"schoolName\":\"南通职业大学\",\"schoolCode\":4132011052,\"department\":\"江苏省\",\"location\":\"南通市\",\"level\":\"专科\"},{\"schoolName\":\"苏州职业大学\",\"schoolCode\":4132011054,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"沙洲职业工学院\",\"schoolCode\":4132011288,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"扬州市职业大学\",\"schoolCode\":4132011462,\"department\":\"江苏省\",\"location\":\"扬州市\",\"level\":\"专科\"},{\"schoolName\":\"连云港师范高等专科学校\",\"schoolCode\":4132011585,\"department\":\"江苏省\",\"location\":\"连云港市\",\"level\":\"专科\"},{\"schoolName\":\"江苏经贸职业技术学院\",\"schoolCode\":4132012047,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"九州职业技术学院\",\"schoolCode\":4132012054,\"department\":\"江苏省教育厅\",\"location\":\"徐州市\",\"level\":\"专科\"},{\"schoolName\":\"硅湖职业技术学院\",\"schoolCode\":4132012078,\"department\":\"江苏省教育厅\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"泰州职业技术学院\",\"schoolCode\":4132012106,\"department\":\"江苏省\",\"location\":\"泰州市\",\"level\":\"专科\"},{\"schoolName\":\"常州信息职业技术学院\",\"schoolCode\":4132012317,\"department\":\"江苏省\",\"location\":\"常州市\",\"level\":\"专科\"},{\"schoolName\":\"江苏联合职业技术学院\",\"schoolCode\":4132012678,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"江苏海事职业技术学院\",\"schoolCode\":4132012679,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"应天职业技术学院\",\"schoolCode\":4132012680,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"无锡科技职业学院\",\"schoolCode\":4132012681,\"department\":\"江苏省\",\"location\":\"无锡市\",\"level\":\"专科\"},{\"schoolName\":\"江苏医药职业学院\",\"schoolCode\":4132012682,\"department\":\"江苏省\",\"location\":\"盐城市\",\"level\":\"专科\"},{\"schoolName\":\"扬州环境资源职业技术学院\",\"schoolCode\":4132012683,\"department\":\"江苏省\",\"location\":\"扬州市\",\"level\":\"专科\"},{\"schoolName\":\"南通科技职业学院\",\"schoolCode\":4132012684,\"department\":\"江苏省\",\"location\":\"南通市\",\"level\":\"专科\"},{\"schoolName\":\"苏州经贸职业技术学院\",\"schoolCode\":4132012685,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"苏州工业职业技术学院\",\"schoolCode\":4132012686,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"苏州托普信息职业技术学院\",\"schoolCode\":4132012687,\"department\":\"江苏省教育厅\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"苏州卫生职业技术学院\",\"schoolCode\":4132012688,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"无锡商业职业技术学院\",\"schoolCode\":4132012702,\"department\":\"江苏省\",\"location\":\"无锡市\",\"level\":\"专科\"},{\"schoolName\":\"江苏航运职业技术学院\",\"schoolCode\":4132012703,\"department\":\"江苏省\",\"location\":\"南通市\",\"level\":\"专科\"},{\"schoolName\":\"南京交通职业技术学院\",\"schoolCode\":4132012804,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"江苏电子信息职业学院\",\"schoolCode\":4132012805,\"department\":\"江苏省\",\"location\":\"淮安市\",\"level\":\"专科\"},{\"schoolName\":\"江苏农牧科技职业学院\",\"schoolCode\":4132012806,\"department\":\"江苏省\",\"location\":\"泰州市\",\"level\":\"专科\"},{\"schoolName\":\"常州纺织服装职业技术学院\",\"schoolCode\":4132012807,\"department\":\"江苏省\",\"location\":\"常州市\",\"level\":\"专科\"},{\"schoolName\":\"苏州农业职业技术学院\",\"schoolCode\":4132012808,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"苏州工业园区职业技术学院\",\"schoolCode\":4132012809,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"太湖创意职业技术学院\",\"schoolCode\":4132012918,\"department\":\"江苏省教育厅\",\"location\":\"无锡市\",\"level\":\"专科\"},{\"schoolName\":\"炎黄职业技术学院\",\"schoolCode\":4132012919,\"department\":\"江苏省教育厅\",\"location\":\"淮安市\",\"level\":\"专科\"},{\"schoolName\":\"南京科技职业学院\",\"schoolCode\":4132012920,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"正德职业技术学院\",\"schoolCode\":4132012921,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"钟山职业技术学院\",\"schoolCode\":4132012922,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"无锡南洋职业技术学院\",\"schoolCode\":4132012923,\"department\":\"江苏省教育厅\",\"location\":\"无锡市\",\"level\":\"专科\"},{\"schoolName\":\"江南影视艺术职业学院\",\"schoolCode\":4132013017,\"department\":\"江苏省教育厅\",\"location\":\"无锡市\",\"level\":\"专科\"},{\"schoolName\":\"金肯职业技术学院\",\"schoolCode\":4132013100,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"常州工业职业技术学院\",\"schoolCode\":4132013101,\"department\":\"江苏省\",\"location\":\"常州市\",\"level\":\"专科\"},{\"schoolName\":\"常州工程职业技术学院\",\"schoolCode\":4132013102,\"department\":\"江苏省\",\"location\":\"常州市\",\"level\":\"专科\"},{\"schoolName\":\"江苏农林职业技术学院\",\"schoolCode\":4132013103,\"department\":\"江苏省\",\"location\":\"镇江市\",\"level\":\"专科\"},{\"schoolName\":\"江苏食品药品职业技术学院\",\"schoolCode\":4132013104,\"department\":\"江苏省\",\"location\":\"淮安市\",\"level\":\"专科\"},{\"schoolName\":\"建东职业技术学院\",\"schoolCode\":4132013105,\"department\":\"江苏省教育厅\",\"location\":\"常州市\",\"level\":\"专科\"},{\"schoolName\":\"南京铁道职业技术学院\",\"schoolCode\":4132013106,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"徐州工业职业技术学院\",\"schoolCode\":4132013107,\"department\":\"江苏省\",\"location\":\"徐州市\",\"level\":\"专科\"},{\"schoolName\":\"江苏信息职业技术学院\",\"schoolCode\":4132013108,\"department\":\"江苏省\",\"location\":\"无锡市\",\"level\":\"专科\"},{\"schoolName\":\"宿迁职业技术学院\",\"schoolCode\":4132013110,\"department\":\"江苏省\",\"location\":\"宿迁市\",\"level\":\"专科\"},{\"schoolName\":\"南京信息职业技术学院\",\"schoolCode\":4132013112,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"江海职业技术学院\",\"schoolCode\":4132013113,\"department\":\"江苏省教育厅\",\"location\":\"扬州市\",\"level\":\"专科\"},{\"schoolName\":\"常州机电职业技术学院\",\"schoolCode\":4132013114,\"department\":\"江苏省\",\"location\":\"常州市\",\"level\":\"专科\"},{\"schoolName\":\"江阴职业技术学院\",\"schoolCode\":4132013137,\"department\":\"江苏省\",\"location\":\"无锡市\",\"level\":\"专科\"},{\"schoolName\":\"无锡城市职业技术学院\",\"schoolCode\":4132013748,\"department\":\"江苏省\",\"location\":\"无锡市\",\"level\":\"专科\"},{\"schoolName\":\"无锡工艺职业技术学院\",\"schoolCode\":4132013749,\"department\":\"江苏省\",\"location\":\"无锡市\",\"level\":\"专科\"},{\"schoolName\":\"金山职业技术学院\",\"schoolCode\":4132013750,\"department\":\"江苏省教育厅\",\"location\":\"镇江市\",\"level\":\"专科\"},{\"schoolName\":\"苏州健雄职业技术学院\",\"schoolCode\":4132013751,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"盐城工业职业技术学院\",\"schoolCode\":4132013752,\"department\":\"江苏省\",\"location\":\"盐城市\",\"level\":\"专科\"},{\"schoolName\":\"江苏财经职业技术学院\",\"schoolCode\":4132013753,\"department\":\"江苏省\",\"location\":\"淮安市\",\"level\":\"专科\"},{\"schoolName\":\"扬州工业职业技术学院\",\"schoolCode\":4132013754,\"department\":\"江苏省\",\"location\":\"扬州市\",\"level\":\"专科\"},{\"schoolName\":\"苏州百年职业学院\",\"schoolCode\":4132013962,\"department\":\"江苏省教育厅\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"昆山登云科技职业学院\",\"schoolCode\":4132013963,\"department\":\"江苏省教育厅\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"南京视觉艺术职业学院\",\"schoolCode\":4132013964,\"department\":\"江苏省教育厅\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"江苏城市职业学院\",\"schoolCode\":4132014000,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"南京城市职业学院\",\"schoolCode\":4132014001,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"南京机电职业技术学院\",\"schoolCode\":4132014056,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"苏州高博软件技术职业学院\",\"schoolCode\":4132014163,\"department\":\"江苏省教育厅\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"南京旅游职业学院\",\"schoolCode\":4132014180,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"江苏卫生健康职业学院\",\"schoolCode\":4132014255,\"department\":\"江苏省\",\"location\":\"南京市\",\"level\":\"专科\"},{\"schoolName\":\"苏州信息职业技术学院\",\"schoolCode\":4132014256,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"宿迁泽达职业技术学院\",\"schoolCode\":4132014293,\"department\":\"江苏省教育厅\",\"location\":\"宿迁市\",\"level\":\"专科\"},{\"schoolName\":\"苏州工业园区服务外包职业学院\",\"schoolCode\":4132014295,\"department\":\"江苏省\",\"location\":\"苏州市\",\"level\":\"专科\"},{\"schoolName\":\"徐州幼儿师范高等专科学校\",\"schoolCode\":4132014329,\"department\":\"江苏省\",\"location\":\"徐州市\",\"level\":\"专科\"},{\"schoolName\":\"徐州生物工程职业技术学院\",\"schoolCode\":4132014401,\"department\":\"江苏省\",\"location\":\"徐州市\",\"level\":\"专科\"},{\"schoolName\":\"江苏商贸职业学院\",\"schoolCode\":4132014475,\"department\":\"江苏省\",\"location\":\"南通市\",\"level\":\"专科\"},{\"schoolName\":\"南通师范高等专科学校\",\"schoolCode\":4132014493,\"department\":\"江苏省\",\"location\":\"南通市\",\"level\":\"专科\"},{\"schoolName\":\"扬州中瑞酒店职业学院\",\"schoolCode\":4132014528,\"department\":\"江苏省教育厅\",\"location\":\"扬州市\",\"level\":\"专科\"},{\"schoolName\":\"江苏护理职业学院\",\"schoolCode\":4132014541,\"department\":\"江苏省\",\"location\":\"淮安市\",\"level\":\"专科\"},{\"schoolName\":\"江苏财会职业学院\",\"schoolCode\":4132014542,\"department\":\"江苏省\",\"location\":\"连云港市\",\"level\":\"专科\"},{\"schoolName\":\"江苏城乡建设职业学院\",\"schoolCode\":4132014543,\"department\":\"江苏省\",\"location\":\"常州市\",\"level\":\"专科\"},{\"schoolName\":\"江苏航空职业技术学院\",\"schoolCode\":4132014568,\"department\":\"江苏省\",\"location\":\"镇江市\",\"level\":\"专科\"},{\"schoolName\":\"江苏安全技术职业学院\",\"schoolCode\":4132014589,\"department\":\"江苏省\",\"location\":\"徐州市\",\"level\":\"专科\"},{\"schoolName\":\"江苏旅游职业学院\",\"schoolCode\":4132014604,\"department\":\"江苏省\",\"location\":\"扬州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江大学\",\"schoolCode\":4133010335,\"department\":\"教育部\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"杭州电子科技大学\",\"schoolCode\":4133010336,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江工业大学\",\"schoolCode\":4133010337,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江理工大学\",\"schoolCode\":4133010338,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江海洋大学\",\"schoolCode\":4133010340,\"department\":\"浙江省\",\"location\":\"舟山市\",\"level\":\"本科\"},{\"schoolName\":\"浙江农林大学\",\"schoolCode\":4133010341,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"温州医科大学\",\"schoolCode\":4133010343,\"department\":\"浙江省\",\"location\":\"温州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江中医药大学\",\"schoolCode\":4133010344,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江师范大学\",\"schoolCode\":4133010345,\"department\":\"浙江省\",\"location\":\"金华市\",\"level\":\"本科\"},{\"schoolName\":\"杭州师范大学\",\"schoolCode\":4133010346,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"湖州师范学院\",\"schoolCode\":4133010347,\"department\":\"浙江省\",\"location\":\"湖州市\",\"level\":\"本科\"},{\"schoolName\":\"绍兴文理学院\",\"schoolCode\":4133010349,\"department\":\"浙江省\",\"location\":\"绍兴市\",\"level\":\"本科\"},{\"schoolName\":\"台州学院\",\"schoolCode\":4133010350,\"department\":\"浙江省\",\"location\":\"台州市\",\"level\":\"本科\"},{\"schoolName\":\"温州大学\",\"schoolCode\":4133010351,\"department\":\"浙江省\",\"location\":\"温州市\",\"level\":\"本科\"},{\"schoolName\":\"丽水学院\",\"schoolCode\":4133010352,\"department\":\"浙江省\",\"location\":\"丽水市\",\"level\":\"本科\"},{\"schoolName\":\"浙江工商大学\",\"schoolCode\":4133010353,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"嘉兴学院\",\"schoolCode\":4133010354,\"department\":\"浙江省\",\"location\":\"嘉兴市\",\"level\":\"本科\"},{\"schoolName\":\"中国美术学院\",\"schoolCode\":4133010355,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"中国计量大学\",\"schoolCode\":4133010356,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江万里学院\",\"schoolCode\":4133010876,\"department\":\"浙江省\",\"location\":\"宁波市\",\"level\":\"本科\"},{\"schoolName\":\"浙江科技学院\",\"schoolCode\":4133011057,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"宁波工程学院\",\"schoolCode\":4133011058,\"department\":\"浙江省\",\"location\":\"宁波市\",\"level\":\"本科\"},{\"schoolName\":\"浙江水利水电学院\",\"schoolCode\":4133011481,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江财经大学\",\"schoolCode\":4133011482,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江警察学院\",\"schoolCode\":4133011483,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"衢州学院\",\"schoolCode\":4133011488,\"department\":\"浙江省\",\"location\":\"衢州市\",\"level\":\"本科\"},{\"schoolName\":\"宁波大学\",\"schoolCode\":4133011646,\"department\":\"浙江省\",\"location\":\"宁波市\",\"level\":\"本科\"},{\"schoolName\":\"浙江传媒学院\",\"schoolCode\":4133011647,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江树人学院\",\"schoolCode\":4133011842,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江越秀外国语学院\",\"schoolCode\":4133012792,\"department\":\"浙江省教育厅\",\"location\":\"绍兴市\",\"level\":\"本科\"},{\"schoolName\":\"宁波财经学院\",\"schoolCode\":4133013001,\"department\":\"浙江省教育厅\",\"location\":\"宁波市\",\"level\":\"本科\"},{\"schoolName\":\"浙大城市学院\",\"schoolCode\":4133013021,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙大宁波理工学院\",\"schoolCode\":4133013022,\"department\":\"浙江省\",\"location\":\"宁波市\",\"level\":\"本科\"},{\"schoolName\":\"杭州医学院\",\"schoolCode\":4133013023,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江广厦建设职业技术大学\",\"schoolCode\":4133013029,\"department\":\"浙江省教育厅\",\"location\":\"金华市\",\"level\":\"本科\"},{\"schoolName\":\"浙江工业大学之江学院\",\"schoolCode\":4133013275,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江师范大学行知学院\",\"schoolCode\":4133013276,\"department\":\"浙江省教育厅\",\"location\":\"金华市\",\"level\":\"本科\"},{\"schoolName\":\"宁波大学科学技术学院\",\"schoolCode\":4133013277,\"department\":\"浙江省教育厅\",\"location\":\"宁波市\",\"level\":\"本科\"},{\"schoolName\":\"杭州电子科技大学信息工程学院\",\"schoolCode\":4133013279,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江理工大学科技与艺术学院\",\"schoolCode\":4133013280,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江海洋大学东海科学技术学院\",\"schoolCode\":4133013282,\"department\":\"浙江省教育厅\",\"location\":\"舟山市\",\"level\":\"本科\"},{\"schoolName\":\"浙江农林大学暨阳学院\",\"schoolCode\":4133013283,\"department\":\"浙江省教育厅\",\"location\":\"绍兴市\",\"level\":\"本科\"},{\"schoolName\":\"温州医科大学仁济学院\",\"schoolCode\":4133013284,\"department\":\"浙江省教育厅\",\"location\":\"温州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江中医药大学滨江学院\",\"schoolCode\":4133013285,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"杭州师范大学钱江学院\",\"schoolCode\":4133013286,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"湖州师范学院求真学院\",\"schoolCode\":4133013287,\"department\":\"浙江省教育厅\",\"location\":\"湖州市\",\"level\":\"本科\"},{\"schoolName\":\"绍兴文理学院元培学院\",\"schoolCode\":4133013288,\"department\":\"浙江省教育厅\",\"location\":\"绍兴市\",\"level\":\"本科\"},{\"schoolName\":\"温州大学瓯江学院\",\"schoolCode\":4133013289,\"department\":\"浙江省教育厅\",\"location\":\"温州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江工商大学杭州商学院\",\"schoolCode\":4133013290,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"嘉兴学院南湖学院\",\"schoolCode\":4133013291,\"department\":\"浙江省教育厅\",\"location\":\"嘉兴市\",\"level\":\"本科\"},{\"schoolName\":\"中国计量大学现代科技学院\",\"schoolCode\":4133013292,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江财经大学东方学院\",\"schoolCode\":4133013294,\"department\":\"浙江省教育厅\",\"location\":\"嘉兴市\",\"level\":\"本科\"},{\"schoolName\":\"温州商学院\",\"schoolCode\":4133013637,\"department\":\"浙江省教育厅\",\"location\":\"温州市\",\"level\":\"本科\"},{\"schoolName\":\"同济大学浙江学院\",\"schoolCode\":4133014206,\"department\":\"浙江省教育厅\",\"location\":\"嘉兴市\",\"level\":\"本科\"},{\"schoolName\":\"上海财经大学浙江学院\",\"schoolCode\":4133014207,\"department\":\"浙江省教育厅\",\"location\":\"金华市\",\"level\":\"本科\"},{\"schoolName\":\"浙江外国语学院\",\"schoolCode\":4133014275,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"浙江音乐学院\",\"schoolCode\":4133014535,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"西湖大学\",\"schoolCode\":4133014626,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"本科\"},{\"schoolName\":\"宁波诺丁汉大学\",\"schoolCode\":4133016301,\"department\":\"浙江省教育厅\",\"location\":\"宁波市\",\"level\":\"本科\"},{\"schoolName\":\"温州肯恩大学\",\"schoolCode\":4133016405,\"department\":\"浙江省教育厅\",\"location\":\"温州市\",\"level\":\"本科\"},{\"schoolName\":\"宁波职业技术学院\",\"schoolCode\":4133010863,\"department\":\"浙江省\",\"location\":\"宁波市\",\"level\":\"专科\"},{\"schoolName\":\"温州职业技术学院\",\"schoolCode\":4133010864,\"department\":\"浙江省\",\"location\":\"温州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江交通职业技术学院\",\"schoolCode\":4133012036,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"金华职业技术学院\",\"schoolCode\":4133012061,\"department\":\"浙江省\",\"location\":\"金华市\",\"level\":\"专科\"},{\"schoolName\":\"宁波城市职业技术学院\",\"schoolCode\":4133012645,\"department\":\"浙江省\",\"location\":\"宁波市\",\"level\":\"专科\"},{\"schoolName\":\"浙江电力职业技术学院\",\"schoolCode\":4133012646,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江同济科技职业学院\",\"schoolCode\":4133012647,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江工商职业技术学院\",\"schoolCode\":4133012789,\"department\":\"浙江省\",\"location\":\"宁波市\",\"level\":\"专科\"},{\"schoolName\":\"台州职业技术学院\",\"schoolCode\":4133012790,\"department\":\"浙江省\",\"location\":\"台州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江工贸职业技术学院\",\"schoolCode\":4133012791,\"department\":\"浙江省\",\"location\":\"温州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江医药高等专科学校\",\"schoolCode\":4133012860,\"department\":\"浙江省\",\"location\":\"宁波市\",\"level\":\"专科\"},{\"schoolName\":\"浙江机电职业技术学院\",\"schoolCode\":4133012861,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江建设职业技术学院\",\"schoolCode\":4133012862,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江艺术职业学院\",\"schoolCode\":4133012863,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江经贸职业技术学院\",\"schoolCode\":4133012864,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江商业职业技术学院\",\"schoolCode\":4133012865,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江经济职业技术学院\",\"schoolCode\":4133012866,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江旅游职业学院\",\"schoolCode\":4133012867,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江育英职业技术学院\",\"schoolCode\":4133012868,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江警官职业学院\",\"schoolCode\":4133012869,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江金融职业学院\",\"schoolCode\":4133012870,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江工业职业技术学院\",\"schoolCode\":4133012871,\"department\":\"浙江省\",\"location\":\"绍兴市\",\"level\":\"专科\"},{\"schoolName\":\"杭州职业技术学院\",\"schoolCode\":4133012872,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"嘉兴职业技术学院\",\"schoolCode\":4133012874,\"department\":\"浙江省\",\"location\":\"嘉兴市\",\"level\":\"专科\"},{\"schoolName\":\"湖州职业技术学院\",\"schoolCode\":4133012875,\"department\":\"浙江省\",\"location\":\"湖州市\",\"level\":\"专科\"},{\"schoolName\":\"绍兴职业技术学院\",\"schoolCode\":4133012876,\"department\":\"浙江省教育厅\",\"location\":\"绍兴市\",\"level\":\"专科\"},{\"schoolName\":\"衢州职业技术学院\",\"schoolCode\":4133012877,\"department\":\"浙江省\",\"location\":\"衢州市\",\"level\":\"专科\"},{\"schoolName\":\"丽水职业技术学院\",\"schoolCode\":4133012878,\"department\":\"浙江省\",\"location\":\"丽水市\",\"level\":\"专科\"},{\"schoolName\":\"浙江东方职业技术学院\",\"schoolCode\":4133013002,\"department\":\"浙江省教育厅\",\"location\":\"温州市\",\"level\":\"专科\"},{\"schoolName\":\"义乌工商职业技术学院\",\"schoolCode\":4133013003,\"department\":\"浙江省\",\"location\":\"金华市\",\"level\":\"专科\"},{\"schoolName\":\"浙江纺织服装职业技术学院\",\"schoolCode\":4133013025,\"department\":\"浙江省\",\"location\":\"宁波市\",\"level\":\"专科\"},{\"schoolName\":\"杭州科技职业技术学院\",\"schoolCode\":4133013026,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江长征职业技术学院\",\"schoolCode\":4133013027,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"嘉兴南洋职业技术学院\",\"schoolCode\":4133013028,\"department\":\"浙江省教育厅\",\"location\":\"嘉兴市\",\"level\":\"专科\"},{\"schoolName\":\"杭州万向职业技术学院\",\"schoolCode\":4133013030,\"department\":\"浙江省教育厅\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江邮电职业技术学院\",\"schoolCode\":4133013688,\"department\":\"浙江省\",\"location\":\"绍兴市\",\"level\":\"专科\"},{\"schoolName\":\"宁波卫生职业技术学院\",\"schoolCode\":4133013742,\"department\":\"浙江省\",\"location\":\"宁波市\",\"level\":\"专科\"},{\"schoolName\":\"台州科技职业学院\",\"schoolCode\":4133013746,\"department\":\"浙江省\",\"location\":\"台州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江国际海运职业技术学院\",\"schoolCode\":4133013853,\"department\":\"浙江省\",\"location\":\"舟山市\",\"level\":\"专科\"},{\"schoolName\":\"浙江体育职业技术学院\",\"schoolCode\":4133013854,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"温州科技职业学院\",\"schoolCode\":4133014088,\"department\":\"浙江省\",\"location\":\"温州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江汽车职业技术学院\",\"schoolCode\":4133014089,\"department\":\"浙江省教育厅\",\"location\":\"台州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江横店影视职业学院\",\"schoolCode\":4133014090,\"department\":\"浙江省教育厅\",\"location\":\"金华市\",\"level\":\"专科\"},{\"schoolName\":\"浙江农业商贸职业学院\",\"schoolCode\":4133014269,\"department\":\"浙江省\",\"location\":\"绍兴市\",\"level\":\"专科\"},{\"schoolName\":\"浙江特殊教育职业学院\",\"schoolCode\":4133014431,\"department\":\"浙江省\",\"location\":\"杭州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江安防职业技术学院\",\"schoolCode\":4133014492,\"department\":\"浙江省\",\"location\":\"温州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江宇翔职业技术学院\",\"schoolCode\":4133014703,\"department\":\"浙江省教育厅\",\"location\":\"湖州市\",\"level\":\"专科\"},{\"schoolName\":\"浙江舟山群岛新区旅游与健康职业学院\",\"schoolCode\":4133016408,\"department\":\"浙江省\",\"location\":\"舟山市\",\"level\":\"专科\"},{\"schoolName\":\"宁波幼儿师范高等专科学校\",\"schoolCode\":4233050559,\"department\":\"浙江省\",\"location\":\"宁波市\",\"level\":\"专科\"},{\"schoolName\":\"安徽大学\",\"schoolCode\":4134010357,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"中国科学技术大学\",\"schoolCode\":4134010358,\"department\":\"中国科学院\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"合肥工业大学\",\"schoolCode\":4134010359,\"department\":\"教育部\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"安徽工业大学\",\"schoolCode\":4134010360,\"department\":\"安徽省\",\"location\":\"马鞍山市\",\"level\":\"本科\"},{\"schoolName\":\"安徽理工大学\",\"schoolCode\":4134010361,\"department\":\"安徽省\",\"location\":\"淮南市\",\"level\":\"本科\"},{\"schoolName\":\"安徽工程大学\",\"schoolCode\":4134010363,\"department\":\"安徽省\",\"location\":\"芜湖市\",\"level\":\"本科\"},{\"schoolName\":\"安徽农业大学\",\"schoolCode\":4134010364,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"安徽医科大学\",\"schoolCode\":4134010366,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"蚌埠医学院\",\"schoolCode\":4134010367,\"department\":\"安徽省\",\"location\":\"蚌埠市\",\"level\":\"本科\"},{\"schoolName\":\"皖南医学院\",\"schoolCode\":4134010368,\"department\":\"安徽省\",\"location\":\"芜湖市\",\"level\":\"本科\"},{\"schoolName\":\"安徽中医药大学\",\"schoolCode\":4134010369,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"安徽师范大学\",\"schoolCode\":4134010370,\"department\":\"安徽省\",\"location\":\"芜湖市\",\"level\":\"本科\"},{\"schoolName\":\"阜阳师范大学\",\"schoolCode\":4134010371,\"department\":\"安徽省\",\"location\":\"阜阳市\",\"level\":\"本科\"},{\"schoolName\":\"安庆师范大学\",\"schoolCode\":4134010372,\"department\":\"安徽省\",\"location\":\"安庆市\",\"level\":\"本科\"},{\"schoolName\":\"淮北师范大学\",\"schoolCode\":4134010373,\"department\":\"安徽省\",\"location\":\"淮北市\",\"level\":\"本科\"},{\"schoolName\":\"黄山学院\",\"schoolCode\":4134010375,\"department\":\"安徽省\",\"location\":\"黄山市\",\"level\":\"本科\"},{\"schoolName\":\"皖西学院\",\"schoolCode\":4134010376,\"department\":\"安徽省\",\"location\":\"六安市\",\"level\":\"本科\"},{\"schoolName\":\"滁州学院\",\"schoolCode\":4134010377,\"department\":\"安徽省\",\"location\":\"滁州市\",\"level\":\"本科\"},{\"schoolName\":\"安徽财经大学\",\"schoolCode\":4134010378,\"department\":\"安徽省\",\"location\":\"蚌埠市\",\"level\":\"本科\"},{\"schoolName\":\"宿州学院\",\"schoolCode\":4134010379,\"department\":\"安徽省\",\"location\":\"宿州市\",\"level\":\"本科\"},{\"schoolName\":\"巢湖学院\",\"schoolCode\":4134010380,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"淮南师范学院\",\"schoolCode\":4134010381,\"department\":\"安徽省\",\"location\":\"淮南市\",\"level\":\"本科\"},{\"schoolName\":\"铜陵学院\",\"schoolCode\":4134010383,\"department\":\"安徽省\",\"location\":\"铜陵市\",\"level\":\"本科\"},{\"schoolName\":\"安徽建筑大学\",\"schoolCode\":4134010878,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"安徽科技学院\",\"schoolCode\":4134010879,\"department\":\"安徽省\",\"location\":\"滁州市\",\"level\":\"本科\"},{\"schoolName\":\"安徽三联学院\",\"schoolCode\":4134010959,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"合肥学院\",\"schoolCode\":4134011059,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"蚌埠学院\",\"schoolCode\":4134011305,\"department\":\"安徽省\",\"location\":\"蚌埠市\",\"level\":\"本科\"},{\"schoolName\":\"池州学院\",\"schoolCode\":4134011306,\"department\":\"安徽省\",\"location\":\"池州市\",\"level\":\"本科\"},{\"schoolName\":\"安徽新华学院\",\"schoolCode\":4134012216,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"安徽文达信息工程学院\",\"schoolCode\":4134012810,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"亳州学院\",\"schoolCode\":4134012926,\"department\":\"安徽省\",\"location\":\"亳州市\",\"level\":\"本科\"},{\"schoolName\":\"安徽外国语学院\",\"schoolCode\":4134013065,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"蚌埠工商学院\",\"schoolCode\":4134013611,\"department\":\"安徽省教育厅\",\"location\":\"蚌埠市\",\"level\":\"本科\"},{\"schoolName\":\"安徽大学江淮学院\",\"schoolCode\":4134013612,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"安徽信息工程学院\",\"schoolCode\":4134013613,\"department\":\"安徽省教育厅\",\"location\":\"芜湖市\",\"level\":\"本科\"},{\"schoolName\":\"马鞍山学院\",\"schoolCode\":4134013614,\"department\":\"安徽省教育厅\",\"location\":\"马鞍山市\",\"level\":\"本科\"},{\"schoolName\":\"安徽建筑大学城市建设学院\",\"schoolCode\":4134013615,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"安徽农业大学经济技术学院\",\"schoolCode\":4134013616,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"安徽师范大学皖江学院\",\"schoolCode\":4134013617,\"department\":\"安徽省教育厅\",\"location\":\"芜湖市\",\"level\":\"本科\"},{\"schoolName\":\"安徽医科大学临床医学院\",\"schoolCode\":4134013618,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"阜阳师范大学信息工程学院\",\"schoolCode\":4134013619,\"department\":\"安徽省教育厅\",\"location\":\"阜阳市\",\"level\":\"本科\"},{\"schoolName\":\"淮北师范大学信息学院\",\"schoolCode\":4134013620,\"department\":\"安徽省教育厅\",\"location\":\"淮北市\",\"level\":\"本科\"},{\"schoolName\":\"合肥师范学院\",\"schoolCode\":4134014098,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"皖江工学院\",\"schoolCode\":4134014203,\"department\":\"安徽省教育厅\",\"location\":\"马鞍山市\",\"level\":\"本科\"},{\"schoolName\":\"安徽艺术学院\",\"schoolCode\":4134014682,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"本科\"},{\"schoolName\":\"安徽职业技术学院\",\"schoolCode\":4134010869,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"淮北职业技术学院\",\"schoolCode\":4134010963,\"department\":\"安徽省\",\"location\":\"淮北市\",\"level\":\"专科\"},{\"schoolName\":\"芜湖职业技术学院\",\"schoolCode\":4134011061,\"department\":\"安徽省\",\"location\":\"芜湖市\",\"level\":\"专科\"},{\"schoolName\":\"淮南联合大学\",\"schoolCode\":4134011308,\"department\":\"安徽省\",\"location\":\"淮南市\",\"level\":\"专科\"},{\"schoolName\":\"安徽商贸职业技术学院\",\"schoolCode\":4134012072,\"department\":\"安徽省\",\"location\":\"芜湖市\",\"level\":\"专科\"},{\"schoolName\":\"安徽水利水电职业技术学院\",\"schoolCode\":4134012073,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"阜阳职业技术学院\",\"schoolCode\":4134012074,\"department\":\"安徽省\",\"location\":\"阜阳市\",\"level\":\"专科\"},{\"schoolName\":\"铜陵职业技术学院\",\"schoolCode\":4134012217,\"department\":\"安徽省\",\"location\":\"铜陵市\",\"level\":\"专科\"},{\"schoolName\":\"民办万博科技职业学院\",\"schoolCode\":4134012218,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽警官职业学院\",\"schoolCode\":4134012219,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"淮南职业技术学院\",\"schoolCode\":4134012220,\"department\":\"安徽省\",\"location\":\"淮南市\",\"level\":\"专科\"},{\"schoolName\":\"安徽工业经济职业技术学院\",\"schoolCode\":4134012334,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"合肥通用职业技术学院\",\"schoolCode\":4134012410,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽工贸职业技术学院\",\"schoolCode\":4134012811,\"department\":\"安徽省\",\"location\":\"淮南市\",\"level\":\"专科\"},{\"schoolName\":\"宿州职业技术学院\",\"schoolCode\":4134012812,\"department\":\"安徽省\",\"location\":\"宿州市\",\"level\":\"专科\"},{\"schoolName\":\"六安职业技术学院\",\"schoolCode\":4134012813,\"department\":\"安徽省\",\"location\":\"六安市\",\"level\":\"专科\"},{\"schoolName\":\"安徽电子信息职业技术学院\",\"schoolCode\":4134012814,\"department\":\"安徽省\",\"location\":\"蚌埠市\",\"level\":\"专科\"},{\"schoolName\":\"民办合肥经济技术职业学院\",\"schoolCode\":4134012815,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽交通职业技术学院\",\"schoolCode\":4134012816,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽体育运动职业技术学院\",\"schoolCode\":4134012817,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽中医药高等专科学校\",\"schoolCode\":4134012924,\"department\":\"安徽省\",\"location\":\"芜湖市\",\"level\":\"专科\"},{\"schoolName\":\"安徽医学高等专科学校\",\"schoolCode\":4134012925,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"合肥职业技术学院\",\"schoolCode\":4134013058,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"滁州职业技术学院\",\"schoolCode\":4134013059,\"department\":\"安徽省\",\"location\":\"滁州市\",\"level\":\"专科\"},{\"schoolName\":\"池州职业技术学院\",\"schoolCode\":4134013060,\"department\":\"安徽省\",\"location\":\"池州市\",\"level\":\"专科\"},{\"schoolName\":\"宣城职业技术学院\",\"schoolCode\":4134013061,\"department\":\"安徽省\",\"location\":\"宣城市\",\"level\":\"专科\"},{\"schoolName\":\"安徽广播影视职业技术学院\",\"schoolCode\":4134013062,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"民办合肥滨湖职业技术学院\",\"schoolCode\":4134013064,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽电气工程职业技术学院\",\"schoolCode\":4134013336,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽冶金科技职业学院\",\"schoolCode\":4134013337,\"department\":\"安徽省\",\"location\":\"马鞍山市\",\"level\":\"专科\"},{\"schoolName\":\"安徽城市管理职业学院\",\"schoolCode\":4134013338,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽机电职业技术学院\",\"schoolCode\":4134013339,\"department\":\"安徽省\",\"location\":\"芜湖市\",\"level\":\"专科\"},{\"schoolName\":\"安徽工商职业学院\",\"schoolCode\":4134013340,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽中澳科技职业学院\",\"schoolCode\":4134013341,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"阜阳科技职业学院\",\"schoolCode\":4134013342,\"department\":\"安徽省教育厅\",\"location\":\"阜阳市\",\"level\":\"专科\"},{\"schoolName\":\"亳州职业技术学院\",\"schoolCode\":4134013343,\"department\":\"安徽省\",\"location\":\"亳州市\",\"level\":\"专科\"},{\"schoolName\":\"安徽国防科技职业学院\",\"schoolCode\":4134013344,\"department\":\"安徽省\",\"location\":\"六安市\",\"level\":\"专科\"},{\"schoolName\":\"安庆职业技术学院\",\"schoolCode\":4134013345,\"department\":\"安徽省\",\"location\":\"安庆市\",\"level\":\"专科\"},{\"schoolName\":\"安徽艺术职业学院\",\"schoolCode\":4134013346,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"马鞍山师范高等专科学校\",\"schoolCode\":4134013760,\"department\":\"安徽省\",\"location\":\"马鞍山市\",\"level\":\"专科\"},{\"schoolName\":\"安徽财贸职业学院\",\"schoolCode\":4134013845,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽国际商务职业学院\",\"schoolCode\":4134013846,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽公安职业学院\",\"schoolCode\":4134013847,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽林业职业技术学院\",\"schoolCode\":4134013848,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽审计职业学院\",\"schoolCode\":4134013849,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽新闻出版职业技术学院\",\"schoolCode\":4134013850,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽邮电职业技术学院\",\"schoolCode\":4134013851,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽工业职业技术学院\",\"schoolCode\":4134013852,\"department\":\"安徽省\",\"location\":\"铜陵市\",\"level\":\"专科\"},{\"schoolName\":\"民办合肥财经职业学院\",\"schoolCode\":4134014058,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安庆医药高等专科学校\",\"schoolCode\":4134014096,\"department\":\"安徽省\",\"location\":\"安庆市\",\"level\":\"专科\"},{\"schoolName\":\"安徽涉外经济职业学院\",\"schoolCode\":4134014132,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽绿海商务职业学院\",\"schoolCode\":4134014133,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"合肥共达职业技术学院\",\"schoolCode\":4134014135,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"蚌埠经济技术职业学院\",\"schoolCode\":4134014137,\"department\":\"安徽省教育厅\",\"location\":\"蚌埠市\",\"level\":\"专科\"},{\"schoolName\":\"民办安徽旅游职业学院\",\"schoolCode\":4134014165,\"department\":\"安徽省教育厅\",\"location\":\"阜阳市\",\"level\":\"专科\"},{\"schoolName\":\"徽商职业学院\",\"schoolCode\":4134014191,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"马鞍山职业技术学院\",\"schoolCode\":4134014192,\"department\":\"安徽省\",\"location\":\"马鞍山市\",\"level\":\"专科\"},{\"schoolName\":\"安徽现代信息工程职业学院\",\"schoolCode\":4134014210,\"department\":\"安徽省教育厅\",\"location\":\"淮南市\",\"level\":\"专科\"},{\"schoolName\":\"安徽矿业职业技术学院\",\"schoolCode\":4134014229,\"department\":\"安徽省教育厅\",\"location\":\"淮北市\",\"level\":\"专科\"},{\"schoolName\":\"合肥信息技术职业学院\",\"schoolCode\":4134014230,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"桐城师范高等专科学校\",\"schoolCode\":4134014273,\"department\":\"安徽省\",\"location\":\"安庆市\",\"level\":\"专科\"},{\"schoolName\":\"黄山职业技术学院\",\"schoolCode\":4134014296,\"department\":\"安徽省\",\"location\":\"黄山市\",\"level\":\"专科\"},{\"schoolName\":\"滁州城市职业学院\",\"schoolCode\":4134014297,\"department\":\"安徽省\",\"location\":\"滁州市\",\"level\":\"专科\"},{\"schoolName\":\"安徽汽车职业技术学院\",\"schoolCode\":4134014298,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"皖西卫生职业学院\",\"schoolCode\":4134014299,\"department\":\"安徽省\",\"location\":\"六安市\",\"level\":\"专科\"},{\"schoolName\":\"合肥幼儿师范高等专科学校\",\"schoolCode\":4134014330,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽扬子职业技术学院\",\"schoolCode\":4134014342,\"department\":\"安徽省教育厅\",\"location\":\"芜湖市\",\"level\":\"专科\"},{\"schoolName\":\"安徽黄梅戏艺术职业学院\",\"schoolCode\":4134014378,\"department\":\"安徽省\",\"location\":\"安庆市\",\"level\":\"专科\"},{\"schoolName\":\"安徽粮食工程职业学院\",\"schoolCode\":4134014418,\"department\":\"安徽省\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"安徽卫生健康职业学院\",\"schoolCode\":4134014419,\"department\":\"安徽省\",\"location\":\"池州市\",\"level\":\"专科\"},{\"schoolName\":\"合肥科技职业学院\",\"schoolCode\":4134014420,\"department\":\"安徽省教育厅\",\"location\":\"合肥市\",\"level\":\"专科\"},{\"schoolName\":\"皖北卫生职业学院\",\"schoolCode\":4134014502,\"department\":\"安徽省\",\"location\":\"宿州市\",\"level\":\"专科\"},{\"schoolName\":\"阜阳幼儿师范高等专科学校\",\"schoolCode\":4134014536,\"department\":\"安徽省\",\"location\":\"阜阳市\",\"level\":\"专科\"},{\"schoolName\":\"黄山健康职业学院\",\"schoolCode\":4134014704,\"department\":\"安徽省教育厅\",\"location\":\"黄山市\",\"level\":\"专科\"},{\"schoolName\":\"厦门大学\",\"schoolCode\":4135010384,\"department\":\"教育部\",\"location\":\"厦门市\",\"level\":\"本科\"},{\"schoolName\":\"华侨大学\",\"schoolCode\":4135010385,\"department\":\"中央统战部\",\"location\":\"泉州市\",\"level\":\"本科\"},{\"schoolName\":\"福州大学\",\"schoolCode\":4135010386,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"福建工程学院\",\"schoolCode\":4135010388,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"福建农林大学\",\"schoolCode\":4135010389,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"集美大学\",\"schoolCode\":4135010390,\"department\":\"福建省\",\"location\":\"厦门市\",\"level\":\"本科\"},{\"schoolName\":\"福建医科大学\",\"schoolCode\":4135010392,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"福建中医药大学\",\"schoolCode\":4135010393,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"福建师范大学\",\"schoolCode\":4135010394,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"闽江学院\",\"schoolCode\":4135010395,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"武夷学院\",\"schoolCode\":4135010397,\"department\":\"福建省\",\"location\":\"南平市\",\"level\":\"本科\"},{\"schoolName\":\"宁德师范学院\",\"schoolCode\":4135010398,\"department\":\"福建省\",\"location\":\"宁德市\",\"level\":\"本科\"},{\"schoolName\":\"泉州师范学院\",\"schoolCode\":4135010399,\"department\":\"福建省\",\"location\":\"泉州市\",\"level\":\"本科\"},{\"schoolName\":\"闽南师范大学\",\"schoolCode\":4135010402,\"department\":\"福建省\",\"location\":\"漳州市\",\"level\":\"本科\"},{\"schoolName\":\"厦门理工学院\",\"schoolCode\":4135011062,\"department\":\"福建省\",\"location\":\"厦门市\",\"level\":\"本科\"},{\"schoolName\":\"三明学院\",\"schoolCode\":4135011311,\"department\":\"福建省\",\"location\":\"三明市\",\"level\":\"本科\"},{\"schoolName\":\"龙岩学院\",\"schoolCode\":4135011312,\"department\":\"福建省\",\"location\":\"龙岩市\",\"level\":\"本科\"},{\"schoolName\":\"福建商学院\",\"schoolCode\":4135011313,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"福建警察学院\",\"schoolCode\":4135011495,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"莆田学院\",\"schoolCode\":4135011498,\"department\":\"福建省\",\"location\":\"莆田市\",\"level\":\"本科\"},{\"schoolName\":\"仰恩大学\",\"schoolCode\":4135011784,\"department\":\"福建省教育厅\",\"location\":\"泉州市\",\"level\":\"本科\"},{\"schoolName\":\"厦门医学院\",\"schoolCode\":4135012631,\"department\":\"福建省\",\"location\":\"厦门市\",\"level\":\"本科\"},{\"schoolName\":\"厦门华厦学院\",\"schoolCode\":4135012709,\"department\":\"福建省教育厅\",\"location\":\"厦门市\",\"level\":\"本科\"},{\"schoolName\":\"闽南理工学院\",\"schoolCode\":4135012710,\"department\":\"福建省教育厅\",\"location\":\"泉州市\",\"level\":\"本科\"},{\"schoolName\":\"泉州职业技术大学\",\"schoolCode\":4135012928,\"department\":\"福建省教育厅\",\"location\":\"泉州市\",\"level\":\"本科\"},{\"schoolName\":\"闽南科技学院\",\"schoolCode\":4135012992,\"department\":\"福建省教育厅\",\"location\":\"泉州市\",\"level\":\"本科\"},{\"schoolName\":\"福州工商学院\",\"schoolCode\":4135012993,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"厦门工学院\",\"schoolCode\":4135013115,\"department\":\"福建省教育厅\",\"location\":\"厦门市\",\"level\":\"本科\"},{\"schoolName\":\"阳光学院\",\"schoolCode\":4135013468,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"厦门大学嘉庚学院\",\"schoolCode\":4135013469,\"department\":\"福建省教育厅\",\"location\":\"漳州市\",\"level\":\"本科\"},{\"schoolName\":\"福州大学至诚学院\",\"schoolCode\":4135013470,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"集美大学诚毅学院\",\"schoolCode\":4135013471,\"department\":\"福建省教育厅\",\"location\":\"厦门市\",\"level\":\"本科\"},{\"schoolName\":\"福建师范大学协和学院\",\"schoolCode\":4135013472,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"福州外语外贸学院\",\"schoolCode\":4135013762,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"福建江夏学院\",\"schoolCode\":4135013763,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"泉州信息工程学院\",\"schoolCode\":4135013766,\"department\":\"福建省教育厅\",\"location\":\"泉州市\",\"level\":\"本科\"},{\"schoolName\":\"福州理工学院\",\"schoolCode\":4135013773,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"福建农林大学金山学院\",\"schoolCode\":4135014046,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"福建技术师范学院\",\"schoolCode\":4135014683,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"本科\"},{\"schoolName\":\"福建船政交通职业学院\",\"schoolCode\":4135010866,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"漳州职业技术学院\",\"schoolCode\":4135011314,\"department\":\"福建省\",\"location\":\"漳州市\",\"level\":\"专科\"},{\"schoolName\":\"闽西职业技术学院\",\"schoolCode\":4135011315,\"department\":\"福建省\",\"location\":\"龙岩市\",\"level\":\"专科\"},{\"schoolName\":\"黎明职业大学\",\"schoolCode\":4135011317,\"department\":\"福建省\",\"location\":\"泉州市\",\"level\":\"专科\"},{\"schoolName\":\"福建华南女子职业学院\",\"schoolCode\":4135011499,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"福州职业技术学院\",\"schoolCode\":4135011502,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"福建林业职业技术学院\",\"schoolCode\":4135012625,\"department\":\"福建省\",\"location\":\"南平市\",\"level\":\"专科\"},{\"schoolName\":\"福建信息职业技术学院\",\"schoolCode\":4135012626,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"福建水利电力职业技术学院\",\"schoolCode\":4135012627,\"department\":\"福建省\",\"location\":\"三明市\",\"level\":\"专科\"},{\"schoolName\":\"福建电力职业技术学院\",\"schoolCode\":4135012628,\"department\":\"福建省\",\"location\":\"泉州市\",\"level\":\"专科\"},{\"schoolName\":\"厦门海洋职业技术学院\",\"schoolCode\":4135012629,\"department\":\"福建省\",\"location\":\"厦门市\",\"level\":\"专科\"},{\"schoolName\":\"福建农业职业技术学院\",\"schoolCode\":4135012630,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"福建卫生职业技术学院\",\"schoolCode\":4135012633,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"泉州医学高等专科学校\",\"schoolCode\":4135012634,\"department\":\"福建省\",\"location\":\"泉州市\",\"level\":\"专科\"},{\"schoolName\":\"福州英华职业学院\",\"schoolCode\":4135012708,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"泉州纺织服装职业学院\",\"schoolCode\":4135012711,\"department\":\"福建省教育厅\",\"location\":\"泉州市\",\"level\":\"专科\"},{\"schoolName\":\"泉州华光职业学院\",\"schoolCode\":4135012927,\"department\":\"福建省教育厅\",\"location\":\"泉州市\",\"level\":\"专科\"},{\"schoolName\":\"闽北职业技术学院\",\"schoolCode\":4135013764,\"department\":\"福建省\",\"location\":\"南平市\",\"level\":\"专科\"},{\"schoolName\":\"福州黎明职业技术学院\",\"schoolCode\":4135013765,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"厦门演艺职业学院\",\"schoolCode\":4135013767,\"department\":\"福建省教育厅\",\"location\":\"厦门市\",\"level\":\"专科\"},{\"schoolName\":\"厦门华天涉外职业技术学院\",\"schoolCode\":4135013768,\"department\":\"福建省教育厅\",\"location\":\"厦门市\",\"level\":\"专科\"},{\"schoolName\":\"福州科技职业技术学院\",\"schoolCode\":4135013769,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"泉州经贸职业技术学院\",\"schoolCode\":4135013770,\"department\":\"福建省\",\"location\":\"泉州市\",\"level\":\"专科\"},{\"schoolName\":\"福建对外经济贸易职业技术学院\",\"schoolCode\":4135013771,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"湄洲湾职业技术学院\",\"schoolCode\":4135013772,\"department\":\"福建省\",\"location\":\"莆田市\",\"level\":\"专科\"},{\"schoolName\":\"福建生物工程职业技术学院\",\"schoolCode\":4135013969,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"福建艺术职业学院\",\"schoolCode\":4135013970,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"福建幼儿师范高等专科学校\",\"schoolCode\":4135013972,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"厦门城市职业学院\",\"schoolCode\":4135013973,\"department\":\"福建省\",\"location\":\"厦门市\",\"level\":\"专科\"},{\"schoolName\":\"泉州工艺美术职业学院\",\"schoolCode\":4135013975,\"department\":\"福建省\",\"location\":\"泉州市\",\"level\":\"专科\"},{\"schoolName\":\"三明医学科技职业学院\",\"schoolCode\":4135013976,\"department\":\"福建省\",\"location\":\"三明市\",\"level\":\"专科\"},{\"schoolName\":\"宁德职业技术学院\",\"schoolCode\":4135013977,\"department\":\"福建省\",\"location\":\"宁德市\",\"level\":\"专科\"},{\"schoolName\":\"福州软件职业技术学院\",\"schoolCode\":4135013978,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"厦门兴才职业技术学院\",\"schoolCode\":4135013979,\"department\":\"福建省教育厅\",\"location\":\"厦门市\",\"level\":\"专科\"},{\"schoolName\":\"厦门软件职业技术学院\",\"schoolCode\":4135014059,\"department\":\"福建省教育厅\",\"location\":\"厦门市\",\"level\":\"专科\"},{\"schoolName\":\"福建体育职业技术学院\",\"schoolCode\":4135014060,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"漳州城市职业学院\",\"schoolCode\":4135014110,\"department\":\"福建省\",\"location\":\"漳州市\",\"level\":\"专科\"},{\"schoolName\":\"厦门南洋职业学院\",\"schoolCode\":4135014111,\"department\":\"福建省教育厅\",\"location\":\"厦门市\",\"level\":\"专科\"},{\"schoolName\":\"厦门东海职业技术学院\",\"schoolCode\":4135014112,\"department\":\"福建省教育厅\",\"location\":\"厦门市\",\"level\":\"专科\"},{\"schoolName\":\"漳州科技职业学院\",\"schoolCode\":4135014113,\"department\":\"福建省教育厅\",\"location\":\"漳州市\",\"level\":\"专科\"},{\"schoolName\":\"漳州理工职业学院\",\"schoolCode\":4135014115,\"department\":\"福建省教育厅\",\"location\":\"漳州市\",\"level\":\"专科\"},{\"schoolName\":\"武夷山职业学院\",\"schoolCode\":4135014116,\"department\":\"福建省教育厅\",\"location\":\"南平市\",\"level\":\"专科\"},{\"schoolName\":\"漳州卫生职业学院\",\"schoolCode\":4135014117,\"department\":\"福建省\",\"location\":\"漳州市\",\"level\":\"专科\"},{\"schoolName\":\"泉州海洋职业学院\",\"schoolCode\":4135014231,\"department\":\"福建省教育厅\",\"location\":\"泉州市\",\"level\":\"专科\"},{\"schoolName\":\"泉州轻工职业学院\",\"schoolCode\":4135014232,\"department\":\"福建省教育厅\",\"location\":\"泉州市\",\"level\":\"专科\"},{\"schoolName\":\"厦门安防科技职业学院\",\"schoolCode\":4135014257,\"department\":\"福建省教育厅\",\"location\":\"厦门市\",\"level\":\"专科\"},{\"schoolName\":\"泉州幼儿师范高等专科学校\",\"schoolCode\":4135014331,\"department\":\"福建省\",\"location\":\"泉州市\",\"level\":\"专科\"},{\"schoolName\":\"闽江师范高等专科学校\",\"schoolCode\":4135014490,\"department\":\"福建省\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"泉州工程职业技术学院\",\"schoolCode\":4135014503,\"department\":\"福建省教育厅\",\"location\":\"泉州市\",\"level\":\"专科\"},{\"schoolName\":\"福州墨尔本理工职业学院\",\"schoolCode\":4135016411,\"department\":\"福建省教育厅\",\"location\":\"福州市\",\"level\":\"专科\"},{\"schoolName\":\"南昌大学\",\"schoolCode\":4136010403,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"华东交通大学\",\"schoolCode\":4136010404,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"东华理工大学\",\"schoolCode\":4136010405,\"department\":\"江西省\",\"location\":\"抚州市\",\"level\":\"本科\"},{\"schoolName\":\"南昌航空大学\",\"schoolCode\":4136010406,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"江西理工大学\",\"schoolCode\":4136010407,\"department\":\"江西省\",\"location\":\"赣州市\",\"level\":\"本科\"},{\"schoolName\":\"景德镇陶瓷大学\",\"schoolCode\":4136010408,\"department\":\"江西省\",\"location\":\"景德镇市\",\"level\":\"本科\"},{\"schoolName\":\"江西农业大学\",\"schoolCode\":4136010410,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"江西中医药大学\",\"schoolCode\":4136010412,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"赣南医学院\",\"schoolCode\":4136010413,\"department\":\"江西省\",\"location\":\"赣州市\",\"level\":\"本科\"},{\"schoolName\":\"江西师范大学\",\"schoolCode\":4136010414,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"上饶师范学院\",\"schoolCode\":4136010416,\"department\":\"江西省\",\"location\":\"上饶市\",\"level\":\"本科\"},{\"schoolName\":\"宜春学院\",\"schoolCode\":4136010417,\"department\":\"江西省\",\"location\":\"宜春市\",\"level\":\"本科\"},{\"schoolName\":\"赣南师范大学\",\"schoolCode\":4136010418,\"department\":\"江西省\",\"location\":\"赣州市\",\"level\":\"本科\"},{\"schoolName\":\"井冈山大学\",\"schoolCode\":4136010419,\"department\":\"江西省\",\"location\":\"吉安市\",\"level\":\"本科\"},{\"schoolName\":\"江西财经大学\",\"schoolCode\":4136010421,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"江西科技学院\",\"schoolCode\":4136010846,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"景德镇学院\",\"schoolCode\":4136010894,\"department\":\"江西省\",\"location\":\"景德镇市\",\"level\":\"本科\"},{\"schoolName\":\"萍乡学院\",\"schoolCode\":4136010895,\"department\":\"江西省\",\"location\":\"萍乡市\",\"level\":\"本科\"},{\"schoolName\":\"江西科技师范大学\",\"schoolCode\":4136011318,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"南昌工程学院\",\"schoolCode\":4136011319,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"江西警察学院\",\"schoolCode\":4136011504,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"新余学院\",\"schoolCode\":4136011508,\"department\":\"江西省\",\"location\":\"新余市\",\"level\":\"本科\"},{\"schoolName\":\"九江学院\",\"schoolCode\":4136011843,\"department\":\"江西省\",\"location\":\"九江市\",\"level\":\"本科\"},{\"schoolName\":\"江西工程学院\",\"schoolCode\":4136012766,\"department\":\"江西省教育厅\",\"location\":\"新余市\",\"level\":\"本科\"},{\"schoolName\":\"南昌理工学院\",\"schoolCode\":4136012795,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"江西应用科技学院\",\"schoolCode\":4136012938,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"江西服装学院\",\"schoolCode\":4136013418,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"南昌职业大学\",\"schoolCode\":4136013420,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"南昌工学院\",\"schoolCode\":4136013421,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"南昌大学科学技术学院\",\"schoolCode\":4136013429,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"南昌大学共青学院\",\"schoolCode\":4136013430,\"department\":\"江西省教育厅\",\"location\":\"九江市\",\"level\":\"本科\"},{\"schoolName\":\"华东交通大学理工学院\",\"schoolCode\":4136013431,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"东华理工大学长江学院\",\"schoolCode\":4136013432,\"department\":\"江西省教育厅\",\"location\":\"抚州市\",\"level\":\"本科\"},{\"schoolName\":\"南昌航空大学科技学院\",\"schoolCode\":4136013433,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"江西理工大学应用科学学院\",\"schoolCode\":4136013434,\"department\":\"江西省教育厅\",\"location\":\"赣州市\",\"level\":\"本科\"},{\"schoolName\":\"景德镇陶瓷大学科技艺术学院\",\"schoolCode\":4136013435,\"department\":\"江西省教育厅\",\"location\":\"景德镇市\",\"level\":\"本科\"},{\"schoolName\":\"江西农业大学南昌商学院\",\"schoolCode\":4136013436,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"江西中医药大学科技学院\",\"schoolCode\":4136013437,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"江西师范大学科学技术学院\",\"schoolCode\":4136013438,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"赣南师范大学科技学院\",\"schoolCode\":4136013439,\"department\":\"江西省教育厅\",\"location\":\"赣州市\",\"level\":\"本科\"},{\"schoolName\":\"江西科技师范大学理工学院\",\"schoolCode\":4136013440,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"江西财经大学现代经济管理学院\",\"schoolCode\":4136013441,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"豫章师范学院\",\"schoolCode\":4136013774,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"江西软件职业技术大学\",\"schoolCode\":4136013776,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"南昌师范学院\",\"schoolCode\":4136014437,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"本科\"},{\"schoolName\":\"上饶幼儿师范高等专科学校\",\"schoolCode\":3636000312,\"department\":\"江西省\",\"location\":\"上饶市\",\"level\":\"专科\"},{\"schoolName\":\"抚州幼儿师范高等专科学校\",\"schoolCode\":3636000519,\"department\":\"江西省\",\"location\":\"抚州市\",\"level\":\"专科\"},{\"schoolName\":\"江西工业职业技术学院\",\"schoolCode\":4136010839,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西医学高等专科学校\",\"schoolCode\":4136010888,\"department\":\"江西省\",\"location\":\"上饶市\",\"level\":\"专科\"},{\"schoolName\":\"九江职业大学\",\"schoolCode\":4136011505,\"department\":\"江西省\",\"location\":\"九江市\",\"level\":\"专科\"},{\"schoolName\":\"九江职业技术学院\",\"schoolCode\":4136011785,\"department\":\"江西省\",\"location\":\"九江市\",\"level\":\"专科\"},{\"schoolName\":\"江西司法警官职业学院\",\"schoolCode\":4136012929,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西陶瓷工艺美术职业技术学院\",\"schoolCode\":4136012930,\"department\":\"江西省\",\"location\":\"景德镇市\",\"level\":\"专科\"},{\"schoolName\":\"江西旅游商贸职业学院\",\"schoolCode\":4136012932,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西电力职业技术学院\",\"schoolCode\":4136012933,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西环境工程职业学院\",\"schoolCode\":4136012934,\"department\":\"江西省\",\"location\":\"赣州市\",\"level\":\"专科\"},{\"schoolName\":\"江西艺术职业学院\",\"schoolCode\":4136012936,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"鹰潭职业技术学院\",\"schoolCode\":4136012937,\"department\":\"江西省\",\"location\":\"鹰潭市\",\"level\":\"专科\"},{\"schoolName\":\"江西信息应用职业技术学院\",\"schoolCode\":4136012939,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西交通职业技术学院\",\"schoolCode\":4136012940,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西财经职业学院\",\"schoolCode\":4136012941,\"department\":\"江西省\",\"location\":\"九江市\",\"level\":\"专科\"},{\"schoolName\":\"江西应用技术职业学院\",\"schoolCode\":4136012942,\"department\":\"江西省\",\"location\":\"赣州市\",\"level\":\"专科\"},{\"schoolName\":\"江西现代职业技术学院\",\"schoolCode\":4136012943,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西工业工程职业技术学院\",\"schoolCode\":4136012944,\"department\":\"江西省\",\"location\":\"萍乡市\",\"level\":\"专科\"},{\"schoolName\":\"江西机电职业技术学院\",\"schoolCode\":4136012976,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西科技职业学院\",\"schoolCode\":4136013419,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西外语外贸职业学院\",\"schoolCode\":4136013422,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西工业贸易职业技术学院\",\"schoolCode\":4136013423,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"宜春职业技术学院\",\"schoolCode\":4136013424,\"department\":\"江西省\",\"location\":\"宜春市\",\"level\":\"专科\"},{\"schoolName\":\"江西应用工程职业学院\",\"schoolCode\":4136013425,\"department\":\"江西省\",\"location\":\"萍乡市\",\"level\":\"专科\"},{\"schoolName\":\"江西生物科技职业学院\",\"schoolCode\":4136013426,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西建设职业技术学院\",\"schoolCode\":4136013427,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"抚州职业技术学院\",\"schoolCode\":4136013428,\"department\":\"江西省\",\"location\":\"抚州市\",\"level\":\"专科\"},{\"schoolName\":\"江西中医药高等专科学校\",\"schoolCode\":4136013775,\"department\":\"江西省\",\"location\":\"抚州市\",\"level\":\"专科\"},{\"schoolName\":\"江西经济管理职业学院\",\"schoolCode\":4136013866,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西制造职业技术学院\",\"schoolCode\":4136013867,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西工程职业学院\",\"schoolCode\":4136013868,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西青年职业学院\",\"schoolCode\":4136013869,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"上饶职业技术学院\",\"schoolCode\":4136013870,\"department\":\"江西省\",\"location\":\"上饶市\",\"level\":\"专科\"},{\"schoolName\":\"江西航空职业技术学院\",\"schoolCode\":4136013871,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西农业工程职业学院\",\"schoolCode\":4136013872,\"department\":\"江西省\",\"location\":\"宜春市\",\"level\":\"专科\"},{\"schoolName\":\"赣西科技职业学院\",\"schoolCode\":4136013873,\"department\":\"江西省教育厅\",\"location\":\"新余市\",\"level\":\"专科\"},{\"schoolName\":\"江西卫生职业学院\",\"schoolCode\":4136013965,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西新能源科技职业学院\",\"schoolCode\":4136014166,\"department\":\"江西省教育厅\",\"location\":\"新余市\",\"level\":\"专科\"},{\"schoolName\":\"江西枫林涉外经贸职业学院\",\"schoolCode\":4136014167,\"department\":\"江西省教育厅\",\"location\":\"九江市\",\"level\":\"专科\"},{\"schoolName\":\"江西泰豪动漫职业学院\",\"schoolCode\":4136014168,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西冶金职业技术学院\",\"schoolCode\":4136014241,\"department\":\"江西省\",\"location\":\"新余市\",\"level\":\"专科\"},{\"schoolName\":\"江西管理职业学院\",\"schoolCode\":4136014249,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西传媒职业学院\",\"schoolCode\":4136014250,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"江西工商职业技术学院\",\"schoolCode\":4136014321,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"景德镇陶瓷职业技术学院\",\"schoolCode\":4136014402,\"department\":\"江西省教育厅\",\"location\":\"景德镇市\",\"level\":\"专科\"},{\"schoolName\":\"共青科技职业学院\",\"schoolCode\":4136014403,\"department\":\"江西省教育厅\",\"location\":\"九江市\",\"level\":\"专科\"},{\"schoolName\":\"赣州师范高等专科学校\",\"schoolCode\":4136014465,\"department\":\"江西省\",\"location\":\"赣州市\",\"level\":\"专科\"},{\"schoolName\":\"江西水利职业学院\",\"schoolCode\":4136014476,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"宜春幼儿师范高等专科学校\",\"schoolCode\":4136014494,\"department\":\"江西省\",\"location\":\"宜春市\",\"level\":\"专科\"},{\"schoolName\":\"吉安职业技术学院\",\"schoolCode\":4136014504,\"department\":\"江西省\",\"location\":\"吉安市\",\"level\":\"专科\"},{\"schoolName\":\"江西洪州职业学院\",\"schoolCode\":4136014505,\"department\":\"江西省教育厅\",\"location\":\"宜春市\",\"level\":\"专科\"},{\"schoolName\":\"江西师范高等专科学校\",\"schoolCode\":4136014537,\"department\":\"江西省       \",\"location\":\"鹰潭市\",\"level\":\"专科\"},{\"schoolName\":\"南昌影视传播职业学院\",\"schoolCode\":4136014544,\"department\":\"江西省教育厅\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"赣南卫生健康职业学院\",\"schoolCode\":4136014569,\"department\":\"江西省\",\"location\":\"赣州市\",\"level\":\"专科\"},{\"schoolName\":\"萍乡卫生职业学院\",\"schoolCode\":4136014656,\"department\":\"江西省\",\"location\":\"萍乡市\",\"level\":\"专科\"},{\"schoolName\":\"江西婺源茶业职业学院\",\"schoolCode\":4136014657,\"department\":\"江西省\",\"location\":\"上饶市\",\"level\":\"专科\"},{\"schoolName\":\"赣州职业技术学院\",\"schoolCode\":4136014665,\"department\":\"江西省\",\"location\":\"赣州市\",\"level\":\"专科\"},{\"schoolName\":\"南昌健康职业技术学院\",\"schoolCode\":4136014705,\"department\":\"江西省\",\"location\":\"南昌市\",\"level\":\"专科\"},{\"schoolName\":\"九江理工职业学院\",\"schoolCode\":4136014706,\"department\":\"江西省教育厅\",\"location\":\"九江市\",\"level\":\"专科\"},{\"schoolName\":\"山东大学\",\"schoolCode\":4137010422,\"department\":\"教育部\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"中国海洋大学\",\"schoolCode\":4137010423,\"department\":\"教育部\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"山东科技大学\",\"schoolCode\":4137010424,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"中国石油大学（华东）\",\"schoolCode\":4137010425,\"department\":\"教育部\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"青岛科技大学\",\"schoolCode\":4137010426,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"济南大学\",\"schoolCode\":4137010427,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"青岛理工大学\",\"schoolCode\":4137010429,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"山东建筑大学\",\"schoolCode\":4137010430,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"齐鲁工业大学\",\"schoolCode\":4137010431,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东理工大学\",\"schoolCode\":4137010433,\"department\":\"山东省\",\"location\":\"淄博市\",\"level\":\"本科\"},{\"schoolName\":\"山东农业大学\",\"schoolCode\":4137010434,\"department\":\"山东省\",\"location\":\"泰安市\",\"level\":\"本科\"},{\"schoolName\":\"青岛农业大学\",\"schoolCode\":4137010435,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"潍坊医学院\",\"schoolCode\":4137010438,\"department\":\"山东省\",\"location\":\"潍坊市\",\"level\":\"本科\"},{\"schoolName\":\"山东第一医科大学\",\"schoolCode\":4137010439,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"滨州医学院\",\"schoolCode\":4137010440,\"department\":\"山东省\",\"location\":\"滨州市\",\"level\":\"本科\"},{\"schoolName\":\"山东中医药大学\",\"schoolCode\":4137010441,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"济宁医学院\",\"schoolCode\":4137010443,\"department\":\"山东省\",\"location\":\"济宁市\",\"level\":\"本科\"},{\"schoolName\":\"山东师范大学\",\"schoolCode\":4137010445,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"曲阜师范大学\",\"schoolCode\":4137010446,\"department\":\"山东省\",\"location\":\"济宁市\",\"level\":\"本科\"},{\"schoolName\":\"聊城大学\",\"schoolCode\":4137010447,\"department\":\"山东省\",\"location\":\"聊城市\",\"level\":\"本科\"},{\"schoolName\":\"德州学院\",\"schoolCode\":4137010448,\"department\":\"山东省\",\"location\":\"德州市\",\"level\":\"本科\"},{\"schoolName\":\"滨州学院\",\"schoolCode\":4137010449,\"department\":\"山东省\",\"location\":\"滨州市\",\"level\":\"本科\"},{\"schoolName\":\"鲁东大学\",\"schoolCode\":4137010451,\"department\":\"山东省\",\"location\":\"烟台市\",\"level\":\"本科\"},{\"schoolName\":\"临沂大学\",\"schoolCode\":4137010452,\"department\":\"山东省\",\"location\":\"临沂市\",\"level\":\"本科\"},{\"schoolName\":\"泰山学院\",\"schoolCode\":4137010453,\"department\":\"山东省\",\"location\":\"泰安市\",\"level\":\"本科\"},{\"schoolName\":\"济宁学院\",\"schoolCode\":4137010454,\"department\":\"山东省\",\"location\":\"济宁市\",\"level\":\"本科\"},{\"schoolName\":\"菏泽学院\",\"schoolCode\":4137010455,\"department\":\"山东省\",\"location\":\"菏泽市\",\"level\":\"本科\"},{\"schoolName\":\"山东财经大学\",\"schoolCode\":4137010456,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东体育学院\",\"schoolCode\":4137010457,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东艺术学院\",\"schoolCode\":4137010458,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"齐鲁医药学院\",\"schoolCode\":4137010825,\"department\":\"山东省教育厅\",\"location\":\"淄博市\",\"level\":\"本科\"},{\"schoolName\":\"青岛滨海学院\",\"schoolCode\":4137010868,\"department\":\"山东省教育厅\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"枣庄学院\",\"schoolCode\":4137010904,\"department\":\"山东省\",\"location\":\"枣庄市\",\"level\":\"本科\"},{\"schoolName\":\"山东工艺美术学院\",\"schoolCode\":4137010908,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"青岛大学\",\"schoolCode\":4137011065,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"烟台大学\",\"schoolCode\":4137011066,\"department\":\"山东省\",\"location\":\"烟台市\",\"level\":\"本科\"},{\"schoolName\":\"潍坊学院\",\"schoolCode\":4137011067,\"department\":\"山东省\",\"location\":\"潍坊市\",\"level\":\"本科\"},{\"schoolName\":\"山东警察学院\",\"schoolCode\":4137011324,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东交通学院\",\"schoolCode\":4137011510,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东工商学院\",\"schoolCode\":4137011688,\"department\":\"山东省\",\"location\":\"烟台市\",\"level\":\"本科\"},{\"schoolName\":\"山东女子学院\",\"schoolCode\":4137012331,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"烟台南山学院\",\"schoolCode\":4137012332,\"department\":\"山东省教育厅\",\"location\":\"烟台市\",\"level\":\"本科\"},{\"schoolName\":\"潍坊科技学院\",\"schoolCode\":4137012843,\"department\":\"山东省教育厅\",\"location\":\"潍坊市\",\"level\":\"本科\"},{\"schoolName\":\"山东英才学院\",\"schoolCode\":4137013006,\"department\":\"山东省教育厅\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"青岛恒星科技学院\",\"schoolCode\":4137013015,\"department\":\"山东省教育厅\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"青岛黄海学院\",\"schoolCode\":4137013320,\"department\":\"山东省教育厅\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"山东现代学院\",\"schoolCode\":4137013322,\"department\":\"山东省教育厅\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东协和学院\",\"schoolCode\":4137013324,\"department\":\"山东省教育厅\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东工程职业技术大学\",\"schoolCode\":4137013356,\"department\":\"山东省教育厅\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"烟台大学文经学院\",\"schoolCode\":4137013359,\"department\":\"山东省教育厅\",\"location\":\"烟台市\",\"level\":\"本科\"},{\"schoolName\":\"聊城大学东昌学院\",\"schoolCode\":4137013373,\"department\":\"山东省教育厅\",\"location\":\"聊城市\",\"level\":\"本科\"},{\"schoolName\":\"青岛理工大学琴岛学院\",\"schoolCode\":4137013378,\"department\":\"山东省教育厅\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"潍坊理工学院\",\"schoolCode\":4137013379,\"department\":\"山东省教育厅\",\"location\":\"潍坊市\",\"level\":\"本科\"},{\"schoolName\":\"山东财经大学燕山学院\",\"schoolCode\":4137013383,\"department\":\"山东省教育厅\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"中国石油大学胜利学院\",\"schoolCode\":4137013386,\"department\":\"山东省教育厅\",\"location\":\"东营市\",\"level\":\"本科\"},{\"schoolName\":\"山东外国语职业技术大学\",\"schoolCode\":4137013387,\"department\":\"山东省教育厅\",\"location\":\"日照市\",\"level\":\"本科\"},{\"schoolName\":\"山东科技大学泰山科技学院\",\"schoolCode\":4137013624,\"department\":\"山东省教育厅\",\"location\":\"泰安市\",\"level\":\"本科\"},{\"schoolName\":\"山东华宇工学院\",\"schoolCode\":4137013857,\"department\":\"山东省教育厅\",\"location\":\"德州市\",\"level\":\"本科\"},{\"schoolName\":\"山东外事职业大学\",\"schoolCode\":4137013874,\"department\":\"山东省教育厅\",\"location\":\"威海市\",\"level\":\"本科\"},{\"schoolName\":\"青岛工学院\",\"schoolCode\":4137013995,\"department\":\"山东省教育厅\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"青岛农业大学海都学院\",\"schoolCode\":4137013997,\"department\":\"山东省教育厅\",\"location\":\"烟台市\",\"level\":\"本科\"},{\"schoolName\":\"齐鲁理工学院\",\"schoolCode\":4137013998,\"department\":\"山东省教育厅\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东财经大学东方学院\",\"schoolCode\":4137013999,\"department\":\"山东省教育厅\",\"location\":\"泰安市\",\"level\":\"本科\"},{\"schoolName\":\"济南大学泉城学院\",\"schoolCode\":4137014002,\"department\":\"山东省教育厅\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东政法学院\",\"schoolCode\":4137014100,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"齐鲁师范学院\",\"schoolCode\":4137014276,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东青年政治学院\",\"schoolCode\":4137014277,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"北京电影学院现代创意媒体学院\",\"schoolCode\":4137014327,\"department\":\"山东省教育厅\",\"location\":\"青岛市\",\"level\":\"本科\"},{\"schoolName\":\"山东管理学院\",\"schoolCode\":4137014438,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东农业工程学院\",\"schoolCode\":4137014439,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"本科\"},{\"schoolName\":\"山东医学高等专科学校\",\"schoolCode\":4137010442,\"department\":\"山东省\",\"location\":\"临沂市\",\"level\":\"专科\"},{\"schoolName\":\"菏泽医学专科学校\",\"schoolCode\":4137010444,\"department\":\"山东省\",\"location\":\"菏泽市\",\"level\":\"专科\"},{\"schoolName\":\"山东商业职业技术学院\",\"schoolCode\":4137010832,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"山东电力高等专科学校\",\"schoolCode\":4137011827,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"日照职业技术学院\",\"schoolCode\":4137012062,\"department\":\"山东省\",\"location\":\"日照市\",\"level\":\"专科\"},{\"schoolName\":\"曲阜远东职业技术学院\",\"schoolCode\":4137012070,\"department\":\"山东省教育厅\",\"location\":\"济宁市\",\"level\":\"专科\"},{\"schoolName\":\"青岛职业技术学院\",\"schoolCode\":4137012324,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"专科\"},{\"schoolName\":\"威海职业学院\",\"schoolCode\":4137012326,\"department\":\"山东省\",\"location\":\"威海市\",\"level\":\"专科\"},{\"schoolName\":\"山东职业学院\",\"schoolCode\":4137012328,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"山东劳动职业技术学院\",\"schoolCode\":4137012329,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"莱芜职业技术学院\",\"schoolCode\":4137012330,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"济宁职业技术学院\",\"schoolCode\":4137012335,\"department\":\"山东省\",\"location\":\"济宁市\",\"level\":\"专科\"},{\"schoolName\":\"潍坊职业学院\",\"schoolCode\":4137012391,\"department\":\"山东省\",\"location\":\"潍坊市\",\"level\":\"专科\"},{\"schoolName\":\"烟台职业学院\",\"schoolCode\":4137012396,\"department\":\"山东省\",\"location\":\"烟台市\",\"level\":\"专科\"},{\"schoolName\":\"东营职业学院\",\"schoolCode\":4137012440,\"department\":\"山东省\",\"location\":\"东营市\",\"level\":\"专科\"},{\"schoolName\":\"聊城职业技术学院\",\"schoolCode\":4137012441,\"department\":\"山东省\",\"location\":\"聊城市\",\"level\":\"专科\"},{\"schoolName\":\"滨州职业学院\",\"schoolCode\":4137012818,\"department\":\"山东省\",\"location\":\"滨州市\",\"level\":\"专科\"},{\"schoolName\":\"山东科技职业学院\",\"schoolCode\":4137012819,\"department\":\"山东省\",\"location\":\"潍坊市\",\"level\":\"专科\"},{\"schoolName\":\"山东服装职业学院\",\"schoolCode\":4137012841,\"department\":\"山东省\",\"location\":\"泰安市\",\"level\":\"专科\"},{\"schoolName\":\"德州科技职业学院\",\"schoolCode\":4137012842,\"department\":\"山东省教育厅\",\"location\":\"德州市\",\"level\":\"专科\"},{\"schoolName\":\"山东力明科技职业学院\",\"schoolCode\":4137012844,\"department\":\"山东省教育厅\",\"location\":\"泰安市\",\"level\":\"专科\"},{\"schoolName\":\"山东圣翰财贸职业学院\",\"schoolCode\":4137012945,\"department\":\"山东省教育厅\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"山东水利职业学院\",\"schoolCode\":4137012946,\"department\":\"山东省\",\"location\":\"日照市\",\"level\":\"专科\"},{\"schoolName\":\"山东畜牧兽医职业学院\",\"schoolCode\":4137012947,\"department\":\"山东省\",\"location\":\"潍坊市\",\"level\":\"专科\"},{\"schoolName\":\"青岛飞洋职业技术学院\",\"schoolCode\":4137013005,\"department\":\"山东省教育厅\",\"location\":\"青岛市\",\"level\":\"专科\"},{\"schoolName\":\"东营科技职业学院\",\"schoolCode\":4137013007,\"department\":\"山东省教育厅\",\"location\":\"东营市\",\"level\":\"专科\"},{\"schoolName\":\"山东交通职业学院\",\"schoolCode\":4137013008,\"department\":\"山东省\",\"location\":\"潍坊市\",\"level\":\"专科\"},{\"schoolName\":\"淄博职业学院\",\"schoolCode\":4137013009,\"department\":\"山东省\",\"location\":\"淄博市\",\"level\":\"专科\"},{\"schoolName\":\"山东外贸职业学院\",\"schoolCode\":4137013010,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"专科\"},{\"schoolName\":\"青岛酒店管理职业技术学院\",\"schoolCode\":4137013011,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"专科\"},{\"schoolName\":\"山东信息职业技术学院\",\"schoolCode\":4137013012,\"department\":\"山东省\",\"location\":\"潍坊市\",\"level\":\"专科\"},{\"schoolName\":\"青岛港湾职业技术学院\",\"schoolCode\":4137013014,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"专科\"},{\"schoolName\":\"山东胜利职业学院\",\"schoolCode\":4137013316,\"department\":\"山东省\",\"location\":\"东营市\",\"level\":\"专科\"},{\"schoolName\":\"山东经贸职业学院\",\"schoolCode\":4137013317,\"department\":\"山东省\",\"location\":\"潍坊市\",\"level\":\"专科\"},{\"schoolName\":\"山东工业职业学院\",\"schoolCode\":4137013318,\"department\":\"山东省\",\"location\":\"淄博市\",\"level\":\"专科\"},{\"schoolName\":\"山东化工职业学院\",\"schoolCode\":4137013319,\"department\":\"山东省\",\"location\":\"淄博市\",\"level\":\"专科\"},{\"schoolName\":\"青岛求实职业技术学院\",\"schoolCode\":4137013321,\"department\":\"山东省教育厅\",\"location\":\"青岛市\",\"level\":\"专科\"},{\"schoolName\":\"济南职业学院\",\"schoolCode\":4137013323,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"烟台工程职业技术学院\",\"schoolCode\":4137013355,\"department\":\"山东省\",\"location\":\"烟台市\",\"level\":\"专科\"},{\"schoolName\":\"潍坊工商职业学院\",\"schoolCode\":4137013388,\"department\":\"山东省教育厅\",\"location\":\"潍坊市\",\"level\":\"专科\"},{\"schoolName\":\"德州职业技术学院\",\"schoolCode\":4137013389,\"department\":\"山东省\",\"location\":\"德州市\",\"level\":\"专科\"},{\"schoolName\":\"枣庄科技职业学院\",\"schoolCode\":4137013390,\"department\":\"山东省\",\"location\":\"枣庄市\",\"level\":\"专科\"},{\"schoolName\":\"淄博师范高等专科学校\",\"schoolCode\":4137013777,\"department\":\"山东省\",\"location\":\"淄博市\",\"level\":\"专科\"},{\"schoolName\":\"山东中医药高等专科学校\",\"schoolCode\":4137013778,\"department\":\"山东省\",\"location\":\"烟台市\",\"level\":\"专科\"},{\"schoolName\":\"济南工程职业技术学院\",\"schoolCode\":4137013855,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"山东电子职业技术学院\",\"schoolCode\":4137013856,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"山东旅游职业学院\",\"schoolCode\":4137013858,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"山东铝业职业学院\",\"schoolCode\":4137013859,\"department\":\"山东省\",\"location\":\"淄博市\",\"level\":\"专科\"},{\"schoolName\":\"山东杏林科技职业学院\",\"schoolCode\":4137013860,\"department\":\"山东省教育厅\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"泰山职业技术学院\",\"schoolCode\":4137013861,\"department\":\"山东省\",\"location\":\"泰安市\",\"level\":\"专科\"},{\"schoolName\":\"山东药品食品职业学院\",\"schoolCode\":4137013966,\"department\":\"山东省\",\"location\":\"威海市\",\"level\":\"专科\"},{\"schoolName\":\"山东商务职业学院\",\"schoolCode\":4137014078,\"department\":\"山东省\",\"location\":\"烟台市\",\"level\":\"专科\"},{\"schoolName\":\"山东轻工职业学院\",\"schoolCode\":4137014079,\"department\":\"山东省\",\"location\":\"淄博市\",\"level\":\"专科\"},{\"schoolName\":\"山东城市建设职业学院\",\"schoolCode\":4137014080,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"烟台汽车工程职业学院\",\"schoolCode\":4137014081,\"department\":\"山东省\",\"location\":\"烟台市\",\"level\":\"专科\"},{\"schoolName\":\"山东司法警官职业学院\",\"schoolCode\":4137014082,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"菏泽家政职业学院\",\"schoolCode\":4137014118,\"department\":\"山东省\",\"location\":\"菏泽市\",\"level\":\"专科\"},{\"schoolName\":\"山东传媒职业学院\",\"schoolCode\":4137014193,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"临沂职业学院\",\"schoolCode\":4137014195,\"department\":\"山东省\",\"location\":\"临沂市\",\"level\":\"专科\"},{\"schoolName\":\"枣庄职业学院\",\"schoolCode\":4137014196,\"department\":\"山东省\",\"location\":\"枣庄市\",\"level\":\"专科\"},{\"schoolName\":\"山东理工职业学院\",\"schoolCode\":4137014242,\"department\":\"山东省\",\"location\":\"济宁市\",\"level\":\"专科\"},{\"schoolName\":\"山东文化产业职业学院\",\"schoolCode\":4137014261,\"department\":\"山东省教育厅\",\"location\":\"烟台市\",\"level\":\"专科\"},{\"schoolName\":\"青岛远洋船员职业学院\",\"schoolCode\":4137014320,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"专科\"},{\"schoolName\":\"济南幼儿师范高等专科学校\",\"schoolCode\":4137014332,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"济南护理职业学院\",\"schoolCode\":4137014343,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"泰山护理职业学院\",\"schoolCode\":4137014345,\"department\":\"山东省\",\"location\":\"泰安市\",\"level\":\"专科\"},{\"schoolName\":\"山东海事职业学院\",\"schoolCode\":4137014346,\"department\":\"山东省教育厅\",\"location\":\"潍坊市\",\"level\":\"专科\"},{\"schoolName\":\"潍坊护理职业学院\",\"schoolCode\":4137014347,\"department\":\"山东省\",\"location\":\"潍坊市\",\"level\":\"专科\"},{\"schoolName\":\"潍坊工程职业学院\",\"schoolCode\":4137014379,\"department\":\"山东省\",\"location\":\"潍坊市\",\"level\":\"专科\"},{\"schoolName\":\"菏泽职业学院\",\"schoolCode\":4137014477,\"department\":\"山东省\",\"location\":\"菏泽市\",\"level\":\"专科\"},{\"schoolName\":\"山东艺术设计职业学院\",\"schoolCode\":4137014506,\"department\":\"山东省教育厅\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"威海海洋职业学院\",\"schoolCode\":4137014507,\"department\":\"山东省\",\"location\":\"威海市\",\"level\":\"专科\"},{\"schoolName\":\"山东特殊教育职业学院\",\"schoolCode\":4137014545,\"department\":\"山东省\",\"location\":\"济南市\",\"level\":\"专科\"},{\"schoolName\":\"烟台黄金职业学院\",\"schoolCode\":4137014570,\"department\":\"山东省教育厅\",\"location\":\"烟台市\",\"level\":\"专科\"},{\"schoolName\":\"日照航海工程职业学院\",\"schoolCode\":4137014605,\"department\":\"山东省教育厅\",\"location\":\"日照市\",\"level\":\"专科\"},{\"schoolName\":\"青岛工程职业学院\",\"schoolCode\":4137014666,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"专科\"},{\"schoolName\":\"青岛幼儿师范高等专科学校\",\"schoolCode\":4137014688,\"department\":\"山东省\",\"location\":\"青岛市\",\"level\":\"专科\"},{\"schoolName\":\"烟台幼儿师范高等专科学校\",\"schoolCode\":4137014689,\"department\":\"山东省\",\"location\":\"烟台市\",\"level\":\"专科\"},{\"schoolName\":\"烟台文化旅游职业学院\",\"schoolCode\":4137014707,\"department\":\"山东省\",\"location\":\"烟台市\",\"level\":\"专科\"},{\"schoolName\":\"临沂科技职业学院\",\"schoolCode\":4137014708,\"department\":\"山东省\",\"location\":\"临沂市\",\"level\":\"专科\"},{\"schoolName\":\"青岛航空科技职业学院\",\"schoolCode\":4137014709,\"department\":\"山东省教育厅\",\"location\":\"青岛市\",\"level\":\"专科\"},{\"schoolName\":\"潍坊环境工程职业学院\",\"schoolCode\":4137014710,\"department\":\"山东省教育厅\",\"location\":\"潍坊市\",\"level\":\"专科\"},{\"schoolName\":\"华北水利水电大学\",\"schoolCode\":4141010078,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"郑州大学\",\"schoolCode\":4141010459,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"河南理工大学\",\"schoolCode\":4141010460,\"department\":\"河南省\",\"location\":\"焦作市\",\"level\":\"本科\"},{\"schoolName\":\"郑州轻工业大学\",\"schoolCode\":4141010462,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"河南工业大学\",\"schoolCode\":4141010463,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"河南科技大学\",\"schoolCode\":4141010464,\"department\":\"河南省\",\"location\":\"洛阳市\",\"level\":\"本科\"},{\"schoolName\":\"中原工学院\",\"schoolCode\":4141010465,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"河南农业大学\",\"schoolCode\":4141010466,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"河南科技学院\",\"schoolCode\":4141010467,\"department\":\"河南省\",\"location\":\"新乡市\",\"level\":\"本科\"},{\"schoolName\":\"河南牧业经济学院\",\"schoolCode\":4141010469,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"河南中医药大学\",\"schoolCode\":4141010471,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"新乡医学院\",\"schoolCode\":4141010472,\"department\":\"河南省\",\"location\":\"新乡市\",\"level\":\"本科\"},{\"schoolName\":\"河南大学\",\"schoolCode\":4141010475,\"department\":\"河南省\",\"location\":\"开封市\",\"level\":\"本科\"},{\"schoolName\":\"河南师范大学\",\"schoolCode\":4141010476,\"department\":\"河南省\",\"location\":\"新乡市\",\"level\":\"本科\"},{\"schoolName\":\"信阳师范学院\",\"schoolCode\":4141010477,\"department\":\"河南省\",\"location\":\"信阳市\",\"level\":\"本科\"},{\"schoolName\":\"周口师范学院\",\"schoolCode\":4141010478,\"department\":\"河南省\",\"location\":\"周口市\",\"level\":\"本科\"},{\"schoolName\":\"安阳师范学院\",\"schoolCode\":4141010479,\"department\":\"河南省\",\"location\":\"安阳市\",\"level\":\"本科\"},{\"schoolName\":\"许昌学院\",\"schoolCode\":4141010480,\"department\":\"河南省\",\"location\":\"许昌市\",\"level\":\"本科\"},{\"schoolName\":\"南阳师范学院\",\"schoolCode\":4141010481,\"department\":\"河南省\",\"location\":\"南阳市\",\"level\":\"本科\"},{\"schoolName\":\"洛阳师范学院\",\"schoolCode\":4141010482,\"department\":\"河南省\",\"location\":\"洛阳市\",\"level\":\"本科\"},{\"schoolName\":\"商丘师范学院\",\"schoolCode\":4141010483,\"department\":\"河南省\",\"location\":\"商丘市\",\"level\":\"本科\"},{\"schoolName\":\"河南财经政法大学\",\"schoolCode\":4141010484,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"郑州航空工业管理学院\",\"schoolCode\":4141010485,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"黄淮学院\",\"schoolCode\":4141010918,\"department\":\"河南省\",\"location\":\"驻马店市\",\"level\":\"本科\"},{\"schoolName\":\"平顶山学院\",\"schoolCode\":4141010919,\"department\":\"河南省\",\"location\":\"平顶山市\",\"level\":\"本科\"},{\"schoolName\":\"郑州工程技术学院\",\"schoolCode\":4141011068,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"洛阳理工学院\",\"schoolCode\":4141011070,\"department\":\"河南省\",\"location\":\"洛阳市\",\"level\":\"本科\"},{\"schoolName\":\"新乡学院\",\"schoolCode\":4141011071,\"department\":\"河南省\",\"location\":\"新乡市\",\"level\":\"本科\"},{\"schoolName\":\"信阳农林学院\",\"schoolCode\":4141011326,\"department\":\"河南省\",\"location\":\"信阳市\",\"level\":\"本科\"},{\"schoolName\":\"河南工学院\",\"schoolCode\":4141011329,\"department\":\"河南省\",\"location\":\"新乡市\",\"level\":\"本科\"},{\"schoolName\":\"安阳工学院\",\"schoolCode\":4141011330,\"department\":\"河南省\",\"location\":\"安阳市\",\"level\":\"本科\"},{\"schoolName\":\"河南工程学院\",\"schoolCode\":4141011517,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"河南财政金融学院\",\"schoolCode\":4141011652,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"南阳理工学院\",\"schoolCode\":4141011653,\"department\":\"河南省\",\"location\":\"南阳市\",\"level\":\"本科\"},{\"schoolName\":\"河南城建学院\",\"schoolCode\":4141011765,\"department\":\"河南省\",\"location\":\"平顶山市\",\"level\":\"本科\"},{\"schoolName\":\"河南警察学院\",\"schoolCode\":4141011788,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"黄河科技学院\",\"schoolCode\":4141011834,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"铁道警察学院\",\"schoolCode\":4141012735,\"department\":\"公安部\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"郑州科技学院\",\"schoolCode\":4141012746,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"郑州工业应用技术学院\",\"schoolCode\":4141012747,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"郑州师范学院\",\"schoolCode\":4141012949,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"郑州财经学院\",\"schoolCode\":4141013497,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"黄河交通学院\",\"schoolCode\":4141013498,\"department\":\"河南省教育厅\",\"location\":\"焦作市\",\"level\":\"本科\"},{\"schoolName\":\"商丘工学院\",\"schoolCode\":4141013500,\"department\":\"河南省教育厅\",\"location\":\"商丘市\",\"level\":\"本科\"},{\"schoolName\":\"河南大学民生学院\",\"schoolCode\":4141013501,\"department\":\"河南省教育厅\",\"location\":\"开封市\",\"level\":\"本科\"},{\"schoolName\":\"河南师范大学新联学院\",\"schoolCode\":4141013502,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"信阳学院\",\"schoolCode\":4141013503,\"department\":\"河南省教育厅\",\"location\":\"信阳市\",\"level\":\"本科\"},{\"schoolName\":\"安阳学院\",\"schoolCode\":4141013504,\"department\":\"河南省教育厅\",\"location\":\"安阳市\",\"level\":\"本科\"},{\"schoolName\":\"新乡医学院三全学院\",\"schoolCode\":4141013505,\"department\":\"河南省教育厅\",\"location\":\"新乡市\",\"level\":\"本科\"},{\"schoolName\":\"河南科技学院新科学院\",\"schoolCode\":4141013506,\"department\":\"河南省教育厅\",\"location\":\"新乡市\",\"level\":\"本科\"},{\"schoolName\":\"郑州工商学院\",\"schoolCode\":4141013507,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"郑州经贸学院\",\"schoolCode\":4141013508,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"商丘学院\",\"schoolCode\":4141014003,\"department\":\"河南省教育厅\",\"location\":\"商丘市\",\"level\":\"本科\"},{\"schoolName\":\"郑州商学院\",\"schoolCode\":4141014040,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"河南科技职业大学\",\"schoolCode\":4141014169,\"department\":\"河南省教育厅\",\"location\":\"周口市\",\"level\":\"本科\"},{\"schoolName\":\"郑州升达经贸管理学院\",\"schoolCode\":4141014333,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"郑州西亚斯学院\",\"schoolCode\":4141014654,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"本科\"},{\"schoolName\":\"河南职业技术学院\",\"schoolCode\":4141010824,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"漯河职业技术学院\",\"schoolCode\":4141010835,\"department\":\"河南省\",\"location\":\"漯河市\",\"level\":\"专科\"},{\"schoolName\":\"三门峡职业技术学院\",\"schoolCode\":4141010842,\"department\":\"河南省\",\"location\":\"三门峡市\",\"level\":\"专科\"},{\"schoolName\":\"郑州铁路职业技术学院\",\"schoolCode\":4141010843,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"开封大学\",\"schoolCode\":4141011069,\"department\":\"河南省\",\"location\":\"开封市\",\"level\":\"专科\"},{\"schoolName\":\"焦作大学\",\"schoolCode\":4141011522,\"department\":\"河南省\",\"location\":\"焦作市\",\"level\":\"专科\"},{\"schoolName\":\"濮阳职业技术学院\",\"schoolCode\":4141011787,\"department\":\"河南省\",\"location\":\"濮阳市\",\"level\":\"专科\"},{\"schoolName\":\"郑州电力高等专科学校\",\"schoolCode\":4141011828,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"黄河水利职业技术学院\",\"schoolCode\":4141012058,\"department\":\"河南省\",\"location\":\"开封市\",\"level\":\"专科\"},{\"schoolName\":\"许昌职业技术学院\",\"schoolCode\":4141012067,\"department\":\"河南省\",\"location\":\"许昌市\",\"level\":\"专科\"},{\"schoolName\":\"河南工业和信息化职业学院\",\"schoolCode\":4141012581,\"department\":\"河南省\",\"location\":\"焦作市\",\"level\":\"专科\"},{\"schoolName\":\"河南水利与环境职业学院\",\"schoolCode\":4141012582,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"商丘职业技术学院\",\"schoolCode\":4141012745,\"department\":\"河南省\",\"location\":\"商丘市\",\"level\":\"专科\"},{\"schoolName\":\"平顶山工业职业技术学院\",\"schoolCode\":4141012748,\"department\":\"河南省\",\"location\":\"平顶山市\",\"level\":\"专科\"},{\"schoolName\":\"周口职业技术学院\",\"schoolCode\":4141012750,\"department\":\"河南省\",\"location\":\"周口市\",\"level\":\"专科\"},{\"schoolName\":\"济源职业技术学院\",\"schoolCode\":4141012768,\"department\":\"河南省\",\"location\":\"济源市\",\"level\":\"专科\"},{\"schoolName\":\"河南司法警官职业学院\",\"schoolCode\":4141012781,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"鹤壁职业技术学院\",\"schoolCode\":4141012793,\"department\":\"河南省\",\"location\":\"鹤壁市\",\"level\":\"专科\"},{\"schoolName\":\"河南工业职业技术学院\",\"schoolCode\":4141012794,\"department\":\"河南省\",\"location\":\"南阳市\",\"level\":\"专科\"},{\"schoolName\":\"郑州澍青医学高等专科学校\",\"schoolCode\":4141012948,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"焦作师范高等专科学校\",\"schoolCode\":4141012950,\"department\":\"河南省\",\"location\":\"焦作市\",\"level\":\"专科\"},{\"schoolName\":\"河南检察职业学院\",\"schoolCode\":4141013499,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南质量工程职业学院\",\"schoolCode\":4141013564,\"department\":\"河南省\",\"location\":\"平顶山市\",\"level\":\"专科\"},{\"schoolName\":\"郑州信息科技职业学院\",\"schoolCode\":4141013565,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"漯河医学高等专科学校\",\"schoolCode\":4141013780,\"department\":\"河南省\",\"location\":\"漯河市\",\"level\":\"专科\"},{\"schoolName\":\"南阳医学高等专科学校\",\"schoolCode\":4141013781,\"department\":\"河南省\",\"location\":\"南阳市\",\"level\":\"专科\"},{\"schoolName\":\"商丘医学高等专科学校\",\"schoolCode\":4141013782,\"department\":\"河南省\",\"location\":\"商丘市\",\"level\":\"专科\"},{\"schoolName\":\"郑州电子信息职业技术学院\",\"schoolCode\":4141013783,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"信阳职业技术学院\",\"schoolCode\":4141013784,\"department\":\"河南省\",\"location\":\"信阳市\",\"level\":\"专科\"},{\"schoolName\":\"嵩山少林武术职业学院\",\"schoolCode\":4141013785,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"郑州工业安全职业学院\",\"schoolCode\":4141013786,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"永城职业学院\",\"schoolCode\":4141013787,\"department\":\"河南省\",\"location\":\"商丘市\",\"level\":\"专科\"},{\"schoolName\":\"河南经贸职业学院\",\"schoolCode\":4141013788,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南交通职业技术学院\",\"schoolCode\":4141013789,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南农业职业学院\",\"schoolCode\":4141013790,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"郑州旅游职业学院\",\"schoolCode\":4141013791,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"郑州职业技术学院\",\"schoolCode\":4141013792,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南信息统计职业学院\",\"schoolCode\":4141013885,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南林业职业学院\",\"schoolCode\":4141013889,\"department\":\"河南省\",\"location\":\"洛阳市\",\"level\":\"专科\"},{\"schoolName\":\"河南工业贸易职业学院\",\"schoolCode\":4141013936,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"郑州电力职业技术学院\",\"schoolCode\":4141014062,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南建筑职业技术学院\",\"schoolCode\":4141014181,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"漯河食品职业学院\",\"schoolCode\":4141014233,\"department\":\"河南省教育厅\",\"location\":\"漯河市\",\"level\":\"专科\"},{\"schoolName\":\"郑州城市职业学院\",\"schoolCode\":4141014235,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"安阳职业技术学院\",\"schoolCode\":4141014243,\"department\":\"河南省\",\"location\":\"安阳市\",\"level\":\"专科\"},{\"schoolName\":\"新乡职业技术学院\",\"schoolCode\":4141014245,\"department\":\"河南省\",\"location\":\"新乡市\",\"level\":\"专科\"},{\"schoolName\":\"驻马店职业技术学院\",\"schoolCode\":4141014251,\"department\":\"河南省\",\"location\":\"驻马店市\",\"level\":\"专科\"},{\"schoolName\":\"焦作工贸职业学院\",\"schoolCode\":4141014300,\"department\":\"河南省教育厅\",\"location\":\"焦作市\",\"level\":\"专科\"},{\"schoolName\":\"许昌陶瓷职业学院\",\"schoolCode\":4141014301,\"department\":\"河南省教育厅\",\"location\":\"许昌市\",\"level\":\"专科\"},{\"schoolName\":\"郑州理工职业学院\",\"schoolCode\":4141014302,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"郑州信息工程职业学院\",\"schoolCode\":4141014303,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"长垣烹饪职业技术学院\",\"schoolCode\":4141014305,\"department\":\"河南省教育厅\",\"location\":\"新乡市\",\"level\":\"专科\"},{\"schoolName\":\"开封文化艺术职业学院\",\"schoolCode\":4141014306,\"department\":\"河南省\",\"location\":\"开封市\",\"level\":\"专科\"},{\"schoolName\":\"河南应用技术职业学院\",\"schoolCode\":4141014307,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南艺术职业学院\",\"schoolCode\":4141014308,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南机电职业学院\",\"schoolCode\":4141014348,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南护理职业学院\",\"schoolCode\":4141014349,\"department\":\"河南省\",\"location\":\"安阳市\",\"level\":\"专科\"},{\"schoolName\":\"许昌电气职业学院\",\"schoolCode\":4141014350,\"department\":\"河南省\",\"location\":\"许昌市\",\"level\":\"专科\"},{\"schoolName\":\"信阳涉外职业技术学院\",\"schoolCode\":4141014351,\"department\":\"河南省教育厅\",\"location\":\"信阳市\",\"level\":\"专科\"},{\"schoolName\":\"鹤壁汽车工程职业学院\",\"schoolCode\":4141014352,\"department\":\"河南省教育厅\",\"location\":\"鹤壁市\",\"level\":\"专科\"},{\"schoolName\":\"南阳职业学院\",\"schoolCode\":4141014353,\"department\":\"河南省教育厅\",\"location\":\"南阳市\",\"level\":\"专科\"},{\"schoolName\":\"郑州商贸旅游职业学院\",\"schoolCode\":4141014380,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南推拿职业学院\",\"schoolCode\":4141014382,\"department\":\"河南省\",\"location\":\"洛阳市\",\"level\":\"专科\"},{\"schoolName\":\"洛阳职业技术学院\",\"schoolCode\":4141014383,\"department\":\"河南省\",\"location\":\"洛阳市\",\"level\":\"专科\"},{\"schoolName\":\"郑州幼儿师范高等专科学校\",\"schoolCode\":4141014391,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"安阳幼儿师范高等专科学校\",\"schoolCode\":4141014392,\"department\":\"河南省\",\"location\":\"安阳市\",\"level\":\"专科\"},{\"schoolName\":\"郑州黄河护理职业学院\",\"schoolCode\":4141014405,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南医学高等专科学校\",\"schoolCode\":4141014466,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"郑州财税金融职业学院\",\"schoolCode\":4141014478,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"南阳农业职业学院\",\"schoolCode\":4141014479,\"department\":\"河南省\",\"location\":\"南阳市\",\"level\":\"专科\"},{\"schoolName\":\"洛阳科技职业学院\",\"schoolCode\":4141014480,\"department\":\"河南省教育厅\",\"location\":\"洛阳市\",\"level\":\"专科\"},{\"schoolName\":\"鹤壁能源化工职业学院\",\"schoolCode\":4141014529,\"department\":\"河南省教育厅\",\"location\":\"鹤壁市\",\"level\":\"专科\"},{\"schoolName\":\"平顶山文化艺术职业学院\",\"schoolCode\":4141014530,\"department\":\"河南省教育厅\",\"location\":\"平顶山市\",\"level\":\"专科\"},{\"schoolName\":\"濮阳医学高等专科学校\",\"schoolCode\":4141014597,\"department\":\"河南省\",\"location\":\"濮阳市\",\"level\":\"专科\"},{\"schoolName\":\"驻马店幼儿师范高等专科学校\",\"schoolCode\":4141014598,\"department\":\"河南省\",\"location\":\"驻马店市\",\"level\":\"专科\"},{\"schoolName\":\"三门峡社会管理职业学院\",\"schoolCode\":4141014606,\"department\":\"河南省\",\"location\":\"三门峡市\",\"level\":\"专科\"},{\"schoolName\":\"河南轻工职业学院\",\"schoolCode\":4141014607,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南测绘职业学院\",\"schoolCode\":4141014608,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"信阳航空职业学院\",\"schoolCode\":4141014634,\"department\":\"河南省教育厅\",\"location\":\"信阳市\",\"level\":\"专科\"},{\"schoolName\":\"郑州卫生健康职业学院\",\"schoolCode\":4141014635,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南物流职业学院\",\"schoolCode\":4141014636,\"department\":\"河南省\",\"location\":\"新乡市\",\"level\":\"专科\"},{\"schoolName\":\"河南地矿职业学院\",\"schoolCode\":4141014637,\"department\":\"河南省\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"郑州亚欧交通职业学院\",\"schoolCode\":4141014685,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"河南女子职业学院\",\"schoolCode\":4141014711,\"department\":\"河南省\",\"location\":\"新乡市\",\"level\":\"专科\"},{\"schoolName\":\"河南对外经济贸易职业学院\",\"schoolCode\":4141014712,\"department\":\"河南省\",\"location\":\"开封市\",\"level\":\"专科\"},{\"schoolName\":\"濮阳石油化工职业技术学院\",\"schoolCode\":4141014713,\"department\":\"河南省\",\"location\":\"濮阳市\",\"level\":\"专科\"},{\"schoolName\":\"南阳科技职业学院\",\"schoolCode\":4141014714,\"department\":\"河南省\",\"location\":\"南阳市\",\"level\":\"专科\"},{\"schoolName\":\"兰考三农职业学院\",\"schoolCode\":4141014715,\"department\":\"河南省\",\"location\":\"开封市\",\"level\":\"专科\"},{\"schoolName\":\"汝州职业技术学院\",\"schoolCode\":4141014716,\"department\":\"河南省\",\"location\":\"平顶山市\",\"level\":\"专科\"},{\"schoolName\":\"林州建筑职业技术学院\",\"schoolCode\":4141014717,\"department\":\"河南省教育厅\",\"location\":\"安阳市\",\"level\":\"专科\"},{\"schoolName\":\"郑州电子商务职业学院\",\"schoolCode\":4141014718,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"郑州轨道工程职业学院\",\"schoolCode\":4141014719,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"郑州体育职业学院\",\"schoolCode\":4141014720,\"department\":\"河南省教育厅\",\"location\":\"郑州市\",\"level\":\"专科\"},{\"schoolName\":\"平顶山职业技术学院\",\"schoolCode\":4241050709,\"department\":\"河南省\",\"location\":\"平顶山市\",\"level\":\"专科\"},{\"schoolName\":\"武汉大学\",\"schoolCode\":4142010486,\"department\":\"教育部\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"华中科技大学\",\"schoolCode\":4142010487,\"department\":\"教育部\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉科技大学\",\"schoolCode\":4142010488,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"长江大学\",\"schoolCode\":4142010489,\"department\":\"湖北省\",\"location\":\"荆州市\",\"level\":\"本科\"},{\"schoolName\":\"武汉工程大学\",\"schoolCode\":4142010490,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"中国地质大学（武汉）\",\"schoolCode\":4142010491,\"department\":\"教育部\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉纺织大学\",\"schoolCode\":4142010495,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉轻工大学\",\"schoolCode\":4142010496,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉理工大学\",\"schoolCode\":4142010497,\"department\":\"教育部\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北工业大学\",\"schoolCode\":4142010500,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"华中农业大学\",\"schoolCode\":4142010504,\"department\":\"教育部\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北中医药大学\",\"schoolCode\":4142010507,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"华中师范大学\",\"schoolCode\":4142010511,\"department\":\"教育部\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北大学\",\"schoolCode\":4142010512,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北师范大学\",\"schoolCode\":4142010513,\"department\":\"湖北省\",\"location\":\"黄石市\",\"level\":\"本科\"},{\"schoolName\":\"黄冈师范学院\",\"schoolCode\":4142010514,\"department\":\"湖北省\",\"location\":\"黄冈市\",\"level\":\"本科\"},{\"schoolName\":\"湖北民族大学\",\"schoolCode\":4142010517,\"department\":\"湖北省\",\"location\":\"恩施土家族苗族自治州\",\"level\":\"本科\"},{\"schoolName\":\"汉江师范学院\",\"schoolCode\":4142010518,\"department\":\"湖北省\",\"location\":\"十堰市\",\"level\":\"本科\"},{\"schoolName\":\"湖北文理学院\",\"schoolCode\":4142010519,\"department\":\"湖北省\",\"location\":\"襄阳市\",\"level\":\"本科\"},{\"schoolName\":\"中南财经政法大学\",\"schoolCode\":4142010520,\"department\":\"教育部\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉体育学院\",\"schoolCode\":4142010522,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北美术学院\",\"schoolCode\":4142010523,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"中南民族大学\",\"schoolCode\":4142010524,\"department\":\"国家民委\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北汽车工业学院\",\"schoolCode\":4142010525,\"department\":\"湖北省\",\"location\":\"十堰市\",\"level\":\"本科\"},{\"schoolName\":\"湖北工程学院\",\"schoolCode\":4142010528,\"department\":\"湖北省\",\"location\":\"孝感市\",\"level\":\"本科\"},{\"schoolName\":\"湖北理工学院\",\"schoolCode\":4142010920,\"department\":\"湖北省\",\"location\":\"黄石市\",\"level\":\"本科\"},{\"schoolName\":\"湖北科技学院\",\"schoolCode\":4142010927,\"department\":\"湖北省\",\"location\":\"咸宁市\",\"level\":\"本科\"},{\"schoolName\":\"湖北医药学院\",\"schoolCode\":4142010929,\"department\":\"湖北省\",\"location\":\"十堰市\",\"level\":\"本科\"},{\"schoolName\":\"江汉大学\",\"schoolCode\":4142011072,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"三峡大学\",\"schoolCode\":4142011075,\"department\":\"湖北省\",\"location\":\"宜昌市\",\"level\":\"本科\"},{\"schoolName\":\"湖北警官学院\",\"schoolCode\":4142011332,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"荆楚理工学院\",\"schoolCode\":4142011336,\"department\":\"湖北省\",\"location\":\"荆门市\",\"level\":\"本科\"},{\"schoolName\":\"武汉音乐学院\",\"schoolCode\":4142011524,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北经济学院\",\"schoolCode\":4142011600,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉商学院\",\"schoolCode\":4142011654,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉东湖学院\",\"schoolCode\":4142011798,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"汉口学院\",\"schoolCode\":4142011800,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武昌首义学院\",\"schoolCode\":4142012309,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武昌理工学院\",\"schoolCode\":4142012310,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉生物工程学院\",\"schoolCode\":4142012362,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉晴川学院\",\"schoolCode\":4142013188,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北大学知行学院\",\"schoolCode\":4142013234,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉科技大学城市学院\",\"schoolCode\":4142013235,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"三峡大学科技学院\",\"schoolCode\":4142013236,\"department\":\"湖北省教育厅\",\"location\":\"宜昌市\",\"level\":\"本科\"},{\"schoolName\":\"武汉文理学院\",\"schoolCode\":4142013237,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北工业大学工程技术学院\",\"schoolCode\":4142013238,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉工程大学邮电与信息工程学院\",\"schoolCode\":4142013239,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉纺织大学外经贸学院\",\"schoolCode\":4142013240,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武昌工学院\",\"schoolCode\":4142013241,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉工商学院\",\"schoolCode\":4142013242,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"长江大学工程技术学院\",\"schoolCode\":4142013245,\"department\":\"湖北省教育厅\",\"location\":\"荆州市\",\"level\":\"本科\"},{\"schoolName\":\"长江大学文理学院\",\"schoolCode\":4142013246,\"department\":\"湖北省教育厅\",\"location\":\"荆州市\",\"level\":\"本科\"},{\"schoolName\":\"湖北商贸学院\",\"schoolCode\":4142013247,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北汽车工业学院科技学院\",\"schoolCode\":4142013248,\"department\":\"湖北省教育厅\",\"location\":\"十堰市\",\"level\":\"本科\"},{\"schoolName\":\"湖北医药学院药护学院\",\"schoolCode\":4142013249,\"department\":\"湖北省教育厅\",\"location\":\"十堰市\",\"level\":\"本科\"},{\"schoolName\":\"湖北民族大学科技学院\",\"schoolCode\":4142013250,\"department\":\"湖北省教育厅\",\"location\":\"恩施土家族苗族自治州\",\"level\":\"本科\"},{\"schoolName\":\"湖北经济学院法商学院\",\"schoolCode\":4142013251,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉体育学院体育科技学院\",\"schoolCode\":4142013253,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北师范大学文理学院\",\"schoolCode\":4142013256,\"department\":\"湖北省教育厅\",\"location\":\"黄石市\",\"level\":\"本科\"},{\"schoolName\":\"湖北文理学院理工学院\",\"schoolCode\":4142013257,\"department\":\"湖北省教育厅\",\"location\":\"襄阳市\",\"level\":\"本科\"},{\"schoolName\":\"湖北工程学院新技术学院\",\"schoolCode\":4142013258,\"department\":\"湖北省教育厅\",\"location\":\"孝感市\",\"level\":\"本科\"},{\"schoolName\":\"文华学院\",\"schoolCode\":4142013262,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉学院\",\"schoolCode\":4142013634,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉工程科技学院\",\"schoolCode\":4142013664,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉华夏理工学院\",\"schoolCode\":4142013666,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉传媒学院\",\"schoolCode\":4142013686,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉设计工程学院\",\"schoolCode\":4142014035,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"湖北第二师范学院\",\"schoolCode\":4142014099,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"本科\"},{\"schoolName\":\"武汉职业技术学院\",\"schoolCode\":4142010834,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"黄冈职业技术学院\",\"schoolCode\":4142010955,\"department\":\"湖北省\",\"location\":\"黄冈市\",\"level\":\"专科\"},{\"schoolName\":\"长江职业学院\",\"schoolCode\":4142010956,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"荆州理工职业学院\",\"schoolCode\":4142011074,\"department\":\"湖北省\",\"location\":\"荆州市\",\"level\":\"专科\"},{\"schoolName\":\"湖北工业职业技术学院\",\"schoolCode\":4142011334,\"department\":\"湖北省\",\"location\":\"十堰市\",\"level\":\"专科\"},{\"schoolName\":\"鄂州职业大学\",\"schoolCode\":4142011335,\"department\":\"湖北省\",\"location\":\"鄂州市\",\"level\":\"专科\"},{\"schoolName\":\"武汉城市职业学院\",\"schoolCode\":4142011796,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北职业技术学院\",\"schoolCode\":4142012051,\"department\":\"湖北省\",\"location\":\"孝感市\",\"level\":\"专科\"},{\"schoolName\":\"武汉船舶职业技术学院\",\"schoolCode\":4142012052,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"恩施职业技术学院\",\"schoolCode\":4142012347,\"department\":\"湖北省\",\"location\":\"恩施土家族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"襄阳职业技术学院\",\"schoolCode\":4142012354,\"department\":\"湖北省\",\"location\":\"襄阳市\",\"level\":\"专科\"},{\"schoolName\":\"武汉工贸职业学院\",\"schoolCode\":4142012369,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"荆州职业技术学院\",\"schoolCode\":4142012737,\"department\":\"湖北省\",\"location\":\"荆州市\",\"level\":\"专科\"},{\"schoolName\":\"武汉工程职业技术学院\",\"schoolCode\":4142012738,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"仙桃职业学院\",\"schoolCode\":4142012740,\"department\":\"湖北省\",\"location\":\"仙桃市\",\"level\":\"专科\"},{\"schoolName\":\"湖北轻工职业技术学院\",\"schoolCode\":4142012744,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北交通职业技术学院\",\"schoolCode\":4142012752,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北中医药高等专科学校\",\"schoolCode\":4142012951,\"department\":\"湖北省\",\"location\":\"荆州市\",\"level\":\"专科\"},{\"schoolName\":\"武汉航海职业技术学院\",\"schoolCode\":4142012952,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"武汉铁路职业技术学院\",\"schoolCode\":4142012977,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"武汉软件工程职业学院\",\"schoolCode\":4142012978,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北三峡职业技术学院\",\"schoolCode\":4142012979,\"department\":\"湖北省\",\"location\":\"宜昌市\",\"level\":\"专科\"},{\"schoolName\":\"随州职业技术学院\",\"schoolCode\":4142012980,\"department\":\"湖北省\",\"location\":\"随州市\",\"level\":\"专科\"},{\"schoolName\":\"武汉电力职业技术学院\",\"schoolCode\":4142012981,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北水利水电职业技术学院\",\"schoolCode\":4142012982,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北城市建设职业技术学院\",\"schoolCode\":4142012983,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"武汉警官职业学院\",\"schoolCode\":4142012984,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北生物科技职业学院\",\"schoolCode\":4142012985,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北开放职业学院\",\"schoolCode\":4142012986,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"武汉科技职业学院\",\"schoolCode\":4142012987,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"武汉外语外事职业学院\",\"schoolCode\":4142012988,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"武汉信息传播职业技术学院\",\"schoolCode\":4142012989,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"武昌职业学院\",\"schoolCode\":4142012990,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"武汉商贸职业学院\",\"schoolCode\":4142012991,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北艺术职业学院\",\"schoolCode\":4142013263,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"武汉交通职业学院\",\"schoolCode\":4142013264,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"咸宁职业技术学院\",\"schoolCode\":4142013265,\"department\":\"湖北省\",\"location\":\"咸宁市\",\"level\":\"专科\"},{\"schoolName\":\"长江工程职业技术学院\",\"schoolCode\":4142013266,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"江汉艺术职业学院\",\"schoolCode\":4142013793,\"department\":\"湖北省\",\"location\":\"潜江市\",\"level\":\"专科\"},{\"schoolName\":\"武汉民政职业学院\",\"schoolCode\":4142013796,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"鄂东职业技术学院\",\"schoolCode\":4142013797,\"department\":\"湖北省\",\"location\":\"黄冈市\",\"level\":\"专科\"},{\"schoolName\":\"湖北财税职业学院\",\"schoolCode\":4142013798,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"黄冈科技职业学院\",\"schoolCode\":4142013799,\"department\":\"湖北省教育厅\",\"location\":\"黄冈市\",\"level\":\"专科\"},{\"schoolName\":\"湖北国土资源职业学院\",\"schoolCode\":4142013800,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北生态工程职业技术学院\",\"schoolCode\":4142013801,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"三峡电力职业学院\",\"schoolCode\":4142014061,\"department\":\"湖北省\",\"location\":\"宜昌市\",\"level\":\"专科\"},{\"schoolName\":\"湖北科技职业学院\",\"schoolCode\":4142014119,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北青年职业学院\",\"schoolCode\":4142014120,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北工程职业学院\",\"schoolCode\":4142014197,\"department\":\"湖北省\",\"location\":\"黄石市\",\"level\":\"专科\"},{\"schoolName\":\"三峡旅游职业技术学院\",\"schoolCode\":4142014258,\"department\":\"湖北省\",\"location\":\"宜昌市\",\"level\":\"专科\"},{\"schoolName\":\"天门职业学院\",\"schoolCode\":4142014355,\"department\":\"湖北省\",\"location\":\"天门市\",\"level\":\"专科\"},{\"schoolName\":\"湖北体育职业学院\",\"schoolCode\":4142014356,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"襄阳汽车职业技术学院\",\"schoolCode\":4142014357,\"department\":\"湖北省\",\"location\":\"襄阳市\",\"level\":\"专科\"},{\"schoolName\":\"湖北幼儿师范高等专科学校\",\"schoolCode\":4142014467,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北铁道运输职业学院\",\"schoolCode\":4142014553,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"武汉海事职业学院\",\"schoolCode\":4142014554,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"长江艺术工程职业学院\",\"schoolCode\":4142014555,\"department\":\"湖北省教育厅\",\"location\":\"荆州市\",\"level\":\"专科\"},{\"schoolName\":\"荆门职业学院\",\"schoolCode\":4142014571,\"department\":\"湖北省\",\"location\":\"荆门市\",\"level\":\"专科\"},{\"schoolName\":\"武汉铁路桥梁职业学院\",\"schoolCode\":4142014590,\"department\":\"湖北省\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"武汉光谷职业学院\",\"schoolCode\":4142014591,\"department\":\"湖北省教育厅\",\"location\":\"武汉市\",\"level\":\"专科\"},{\"schoolName\":\"湖北健康职业学院\",\"schoolCode\":4142014721,\"department\":\"湖北省教育厅\",\"location\":\"咸宁市\",\"level\":\"专科\"},{\"schoolName\":\"湘潭大学\",\"schoolCode\":4143010530,\"department\":\"湖南省\",\"location\":\"湘潭市\",\"level\":\"本科\"},{\"schoolName\":\"吉首大学\",\"schoolCode\":4143010531,\"department\":\"湖南省\",\"location\":\"湘西土家族苗族自治州\",\"level\":\"本科\"},{\"schoolName\":\"湖南大学\",\"schoolCode\":4143010532,\"department\":\"教育部\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"中南大学\",\"schoolCode\":4143010533,\"department\":\"教育部\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南科技大学\",\"schoolCode\":4143010534,\"department\":\"湖南省\",\"location\":\"湘潭市\",\"level\":\"本科\"},{\"schoolName\":\"长沙理工大学\",\"schoolCode\":4143010536,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南农业大学\",\"schoolCode\":4143010537,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"中南林业科技大学\",\"schoolCode\":4143010538,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南中医药大学\",\"schoolCode\":4143010541,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南师范大学\",\"schoolCode\":4143010542,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南理工学院\",\"schoolCode\":4143010543,\"department\":\"湖南省\",\"location\":\"岳阳市\",\"level\":\"本科\"},{\"schoolName\":\"湘南学院\",\"schoolCode\":4143010545,\"department\":\"湖南省\",\"location\":\"郴州市\",\"level\":\"本科\"},{\"schoolName\":\"衡阳师范学院\",\"schoolCode\":4143010546,\"department\":\"湖南省\",\"location\":\"衡阳市\",\"level\":\"本科\"},{\"schoolName\":\"邵阳学院\",\"schoolCode\":4143010547,\"department\":\"湖南省\",\"location\":\"邵阳市\",\"level\":\"本科\"},{\"schoolName\":\"怀化学院\",\"schoolCode\":4143010548,\"department\":\"湖南省\",\"location\":\"怀化市\",\"level\":\"本科\"},{\"schoolName\":\"湖南文理学院\",\"schoolCode\":4143010549,\"department\":\"湖南省\",\"location\":\"常德市\",\"level\":\"本科\"},{\"schoolName\":\"湖南科技学院\",\"schoolCode\":4143010551,\"department\":\"湖南省\",\"location\":\"永州市\",\"level\":\"本科\"},{\"schoolName\":\"湖南人文科技学院\",\"schoolCode\":4143010553,\"department\":\"湖南省\",\"location\":\"娄底市\",\"level\":\"本科\"},{\"schoolName\":\"湖南工商大学\",\"schoolCode\":4143010554,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"南华大学\",\"schoolCode\":4143010555,\"department\":\"湖南省\",\"location\":\"衡阳市\",\"level\":\"本科\"},{\"schoolName\":\"长沙医学院\",\"schoolCode\":4143010823,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"长沙学院\",\"schoolCode\":4143011077,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南工程学院\",\"schoolCode\":4143011342,\"department\":\"湖南省\",\"location\":\"湘潭市\",\"level\":\"本科\"},{\"schoolName\":\"湖南城市学院\",\"schoolCode\":4143011527,\"department\":\"湖南省\",\"location\":\"益阳市\",\"level\":\"本科\"},{\"schoolName\":\"湖南工学院\",\"schoolCode\":4143011528,\"department\":\"湖南省\",\"location\":\"衡阳市\",\"level\":\"本科\"},{\"schoolName\":\"湖南财政经济学院\",\"schoolCode\":4143011532,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南警察学院\",\"schoolCode\":4143011534,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南工业大学\",\"schoolCode\":4143011535,\"department\":\"湖南省\",\"location\":\"株洲市\",\"level\":\"本科\"},{\"schoolName\":\"湖南女子学院\",\"schoolCode\":4143011538,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南第一师范学院\",\"schoolCode\":4143012034,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南医药学院\",\"schoolCode\":4143012214,\"department\":\"湖南省\",\"location\":\"怀化市\",\"level\":\"本科\"},{\"schoolName\":\"湖南涉外经济学院\",\"schoolCode\":4143012303,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湘潭大学兴湘学院\",\"schoolCode\":4143012599,\"department\":\"湖南省教育厅\",\"location\":\"湘潭市\",\"level\":\"本科\"},{\"schoolName\":\"湖南工业大学科技学院\",\"schoolCode\":4143012604,\"department\":\"湖南省教育厅\",\"location\":\"株洲市\",\"level\":\"本科\"},{\"schoolName\":\"湖南科技大学潇湘学院\",\"schoolCode\":4143012649,\"department\":\"湖南省教育厅\",\"location\":\"湘潭市\",\"level\":\"本科\"},{\"schoolName\":\"南华大学船山学院\",\"schoolCode\":4143012650,\"department\":\"湖南省教育厅\",\"location\":\"衡阳市\",\"level\":\"本科\"},{\"schoolName\":\"湘潭理工学院\",\"schoolCode\":4143012651,\"department\":\"湖南省教育厅\",\"location\":\"湘潭市\",\"level\":\"本科\"},{\"schoolName\":\"湖南师范大学树达学院\",\"schoolCode\":4143012652,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南农业大学东方科技学院\",\"schoolCode\":4143012653,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"中南林业科技大学涉外学院\",\"schoolCode\":4143012656,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南文理学院芙蓉学院\",\"schoolCode\":4143012657,\"department\":\"湖南省教育厅\",\"location\":\"常德市\",\"level\":\"本科\"},{\"schoolName\":\"湖南理工学院南湖学院\",\"schoolCode\":4143012658,\"department\":\"湖南省教育厅\",\"location\":\"岳阳市\",\"level\":\"本科\"},{\"schoolName\":\"衡阳师范学院南岳学院\",\"schoolCode\":4143012659,\"department\":\"湖南省教育厅\",\"location\":\"衡阳市\",\"level\":\"本科\"},{\"schoolName\":\"湖南工程学院应用技术学院\",\"schoolCode\":4143012660,\"department\":\"湖南省教育厅\",\"location\":\"湘潭市\",\"level\":\"本科\"},{\"schoolName\":\"湖南中医药大学湘杏学院\",\"schoolCode\":4143012661,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"吉首大学张家界学院\",\"schoolCode\":4143012662,\"department\":\"湖南省教育厅\",\"location\":\"张家界市\",\"level\":\"本科\"},{\"schoolName\":\"长沙理工大学城南学院\",\"schoolCode\":4143013635,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"长沙师范学院\",\"schoolCode\":4143013806,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南应用技术学院\",\"schoolCode\":4143013809,\"department\":\"湖南省教育厅\",\"location\":\"常德市\",\"level\":\"本科\"},{\"schoolName\":\"湖南信息学院\",\"schoolCode\":4143013836,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"本科\"},{\"schoolName\":\"湖南交通工程学院\",\"schoolCode\":4143013924,\"department\":\"湖南省教育厅\",\"location\":\"衡阳市\",\"level\":\"本科\"},{\"schoolName\":\"湖南软件职业学院（本科）\",\"schoolCode\":4143013925,\"department\":\"湖南省教育厅\",\"location\":\"湘潭市\",\"level\":\"本科\"},{\"schoolName\":\"湘中幼儿师范高等专科学校\",\"schoolCode\":3643000496,\"department\":\"湖南省\",\"location\":\"邵阳市\",\"level\":\"专科\"},{\"schoolName\":\"长沙民政职业技术学院\",\"schoolCode\":4143010827,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南工业职业技术学院\",\"schoolCode\":4143010830,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"株洲师范高等专科学校\",\"schoolCode\":4143010836,\"department\":\"湖南省\",\"location\":\"株洲市\",\"level\":\"专科\"},{\"schoolName\":\"湖南信息职业技术学院\",\"schoolCode\":4143010865,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南税务高等专科学校\",\"schoolCode\":4143011601,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南冶金职业技术学院\",\"schoolCode\":4143011604,\"department\":\"湖南省\",\"location\":\"株洲市\",\"level\":\"专科\"},{\"schoolName\":\"长沙航空职业技术学院\",\"schoolCode\":4143012055,\"department\":\"空军装备部\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南大众传媒职业技术学院\",\"schoolCode\":4143012300,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"永州职业技术学院\",\"schoolCode\":4143012301,\"department\":\"湖南省\",\"location\":\"永州市\",\"level\":\"专科\"},{\"schoolName\":\"湖南铁道职业技术学院\",\"schoolCode\":4143012302,\"department\":\"湖南省\",\"location\":\"株洲市\",\"level\":\"专科\"},{\"schoolName\":\"湖南科技职业学院\",\"schoolCode\":4143012304,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南生物机电职业技术学院\",\"schoolCode\":4143012343,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南交通职业技术学院\",\"schoolCode\":4143012397,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南商务职业技术学院\",\"schoolCode\":4143012401,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南体育职业学院\",\"schoolCode\":4143012423,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南工程职业技术学院\",\"schoolCode\":4143012425,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"保险职业学院\",\"schoolCode\":4143012596,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南外贸职业学院\",\"schoolCode\":4143012597,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南网络工程职业学院\",\"schoolCode\":4143012598,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"邵阳职业技术学院\",\"schoolCode\":4143012600,\"department\":\"湖南省\",\"location\":\"邵阳市\",\"level\":\"专科\"},{\"schoolName\":\"湖南司法警官职业学院\",\"schoolCode\":4143012601,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"长沙商贸旅游职业技术学院\",\"schoolCode\":4143012603,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南环境生物职业技术学院\",\"schoolCode\":4143012739,\"department\":\"湖南省\",\"location\":\"衡阳市\",\"level\":\"专科\"},{\"schoolName\":\"湖南邮电职业技术学院\",\"schoolCode\":4143012845,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湘潭医卫职业技术学院\",\"schoolCode\":4143012846,\"department\":\"湖南省\",\"location\":\"湘潭市\",\"level\":\"专科\"},{\"schoolName\":\"郴州职业技术学院\",\"schoolCode\":4143012847,\"department\":\"湖南省\",\"location\":\"郴州市\",\"level\":\"专科\"},{\"schoolName\":\"娄底职业技术学院\",\"schoolCode\":4143012848,\"department\":\"湖南省\",\"location\":\"娄底市\",\"level\":\"专科\"},{\"schoolName\":\"张家界航空工业职业技术学院\",\"schoolCode\":4143012849,\"department\":\"湖南省\",\"location\":\"张家界市\",\"level\":\"专科\"},{\"schoolName\":\"长沙环境保护职业技术学院\",\"schoolCode\":4143013031,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南艺术职业学院\",\"schoolCode\":4143013032,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南机电职业技术学院\",\"schoolCode\":4143013033,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"长沙职业技术学院\",\"schoolCode\":4143013036,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"怀化职业技术学院\",\"schoolCode\":4143013037,\"department\":\"湖南省\",\"location\":\"怀化市\",\"level\":\"专科\"},{\"schoolName\":\"岳阳职业技术学院\",\"schoolCode\":4143013038,\"department\":\"湖南省\",\"location\":\"岳阳市\",\"level\":\"专科\"},{\"schoolName\":\"常德职业技术学院\",\"schoolCode\":4143013039,\"department\":\"湖南省\",\"location\":\"常德市\",\"level\":\"专科\"},{\"schoolName\":\"长沙南方职业学院\",\"schoolCode\":4143013041,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"潇湘职业学院\",\"schoolCode\":4143013042,\"department\":\"湖南省教育厅\",\"location\":\"娄底市\",\"level\":\"专科\"},{\"schoolName\":\"湖南化工职业技术学院\",\"schoolCode\":4143013043,\"department\":\"湖南省\",\"location\":\"株洲市\",\"level\":\"专科\"},{\"schoolName\":\"湖南城建职业技术学院\",\"schoolCode\":4143013044,\"department\":\"湖南省\",\"location\":\"湘潭市\",\"level\":\"专科\"},{\"schoolName\":\"湖南石油化工职业技术学院\",\"schoolCode\":4143013045,\"department\":\"湖南省\",\"location\":\"岳阳市\",\"level\":\"专科\"},{\"schoolName\":\"湖南中医药高等专科学校\",\"schoolCode\":4143013802,\"department\":\"湖南省\",\"location\":\"株洲市\",\"level\":\"专科\"},{\"schoolName\":\"湖南民族职业学院\",\"schoolCode\":4143013804,\"department\":\"湖南省\",\"location\":\"岳阳市\",\"level\":\"专科\"},{\"schoolName\":\"湘西民族职业技术学院\",\"schoolCode\":4143013805,\"department\":\"湖南省\",\"location\":\"湘西土家族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"湖南财经工业职业技术学院\",\"schoolCode\":4143013807,\"department\":\"湖南省\",\"location\":\"衡阳市\",\"level\":\"专科\"},{\"schoolName\":\"益阳职业技术学院\",\"schoolCode\":4143013808,\"department\":\"湖南省\",\"location\":\"益阳市\",\"level\":\"专科\"},{\"schoolName\":\"湖南工艺美术职业学院\",\"schoolCode\":4143013921,\"department\":\"湖南省\",\"location\":\"益阳市\",\"level\":\"专科\"},{\"schoolName\":\"湖南九嶷职业技术学院\",\"schoolCode\":4143013922,\"department\":\"湖南省\",\"location\":\"永州市\",\"level\":\"专科\"},{\"schoolName\":\"湖南理工职业技术学院\",\"schoolCode\":4143013923,\"department\":\"湖南省\",\"location\":\"湘潭市\",\"level\":\"专科\"},{\"schoolName\":\"湖南汽车工程职业学院\",\"schoolCode\":4143013937,\"department\":\"湖南省\",\"location\":\"株洲市\",\"level\":\"专科\"},{\"schoolName\":\"长沙电力职业技术学院\",\"schoolCode\":4143013938,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南水利水电职业技术学院\",\"schoolCode\":4143013939,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南现代物流职业技术学院\",\"schoolCode\":4143013940,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南高速铁路职业技术学院\",\"schoolCode\":4143013941,\"department\":\"湖南省\",\"location\":\"衡阳市\",\"level\":\"专科\"},{\"schoolName\":\"湖南铁路科技职业技术学院\",\"schoolCode\":4143013942,\"department\":\"湖南省\",\"location\":\"株洲市\",\"level\":\"专科\"},{\"schoolName\":\"湖南安全技术职业学院\",\"schoolCode\":4143014025,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南电气职业技术学院\",\"schoolCode\":4143014071,\"department\":\"湖南省\",\"location\":\"湘潭市\",\"level\":\"专科\"},{\"schoolName\":\"湖南外国语职业学院\",\"schoolCode\":4143014072,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"益阳医学高等专科学校\",\"schoolCode\":4143014097,\"department\":\"湖南省\",\"location\":\"益阳市\",\"level\":\"专科\"},{\"schoolName\":\"湖南都市职业学院\",\"schoolCode\":4143014121,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南电子科技职业学院\",\"schoolCode\":4143014122,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南国防工业职业技术学院\",\"schoolCode\":4143014182,\"department\":\"湖南省\",\"location\":\"湘潭市\",\"level\":\"专科\"},{\"schoolName\":\"湖南高尔夫旅游职业学院\",\"schoolCode\":4143014309,\"department\":\"湖南省教育厅\",\"location\":\"常德市\",\"level\":\"专科\"},{\"schoolName\":\"湖南工商职业学院\",\"schoolCode\":4143014310,\"department\":\"湖南省教育厅\",\"location\":\"衡阳市\",\"level\":\"专科\"},{\"schoolName\":\"湖南三一工业职业技术学院\",\"schoolCode\":4143014322,\"department\":\"湖南省教育厅\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"长沙卫生职业学院\",\"schoolCode\":4143014358,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南食品药品职业学院\",\"schoolCode\":4143014359,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"湖南有色金属职业技术学院\",\"schoolCode\":4143014360,\"department\":\"湖南省\",\"location\":\"株洲市\",\"level\":\"专科\"},{\"schoolName\":\"湖南吉利汽车职业技术学院\",\"schoolCode\":4143014406,\"department\":\"湖南省教育厅\",\"location\":\"湘潭市\",\"level\":\"专科\"},{\"schoolName\":\"湖南幼儿师范高等专科学校\",\"schoolCode\":4143014468,\"department\":\"湖南省\",\"location\":\"常德市\",\"level\":\"专科\"},{\"schoolName\":\"湘南幼儿师范高等专科学校\",\"schoolCode\":4143014495,\"department\":\"湖南省\",\"location\":\"郴州市\",\"level\":\"专科\"},{\"schoolName\":\"湖南劳动人事职业学院\",\"schoolCode\":4143014508,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"怀化师范高等专科学校\",\"schoolCode\":4143014663,\"department\":\"湖南省\",\"location\":\"怀化市\",\"level\":\"专科\"},{\"schoolName\":\"永州师范高等专科学校\",\"schoolCode\":4143014690,\"department\":\"湖南省\",\"location\":\"永州市\",\"level\":\"专科\"},{\"schoolName\":\"衡阳幼儿师范高等专科学校\",\"schoolCode\":4143014691,\"department\":\"湖南省\",\"location\":\"衡阳市\",\"level\":\"专科\"},{\"schoolName\":\"长沙幼儿师范高等专科学校\",\"schoolCode\":4143014692,\"department\":\"湖南省\",\"location\":\"长沙市\",\"level\":\"专科\"},{\"schoolName\":\"中山大学\",\"schoolCode\":4144010558,\"department\":\"教育部\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"暨南大学\",\"schoolCode\":4144010559,\"department\":\"中央统战部\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"汕头大学\",\"schoolCode\":4144010560,\"department\":\"广东省\",\"location\":\"汕头市\",\"level\":\"本科\"},{\"schoolName\":\"华南理工大学\",\"schoolCode\":4144010561,\"department\":\"教育部\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"华南农业大学\",\"schoolCode\":4144010564,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东海洋大学\",\"schoolCode\":4144010566,\"department\":\"广东省\",\"location\":\"湛江市\",\"level\":\"本科\"},{\"schoolName\":\"广州医科大学\",\"schoolCode\":4144010570,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东医科大学\",\"schoolCode\":4144010571,\"department\":\"广东省\",\"location\":\"湛江市\",\"level\":\"本科\"},{\"schoolName\":\"广州中医药大学\",\"schoolCode\":4144010572,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东药科大学\",\"schoolCode\":4144010573,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"华南师范大学\",\"schoolCode\":4144010574,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"韶关学院\",\"schoolCode\":4144010576,\"department\":\"广东省\",\"location\":\"韶关市\",\"level\":\"本科\"},{\"schoolName\":\"惠州学院\",\"schoolCode\":4144010577,\"department\":\"广东省\",\"location\":\"惠州市\",\"level\":\"本科\"},{\"schoolName\":\"韩山师范学院\",\"schoolCode\":4144010578,\"department\":\"广东省\",\"location\":\"潮州市\",\"level\":\"本科\"},{\"schoolName\":\"岭南师范学院\",\"schoolCode\":4144010579,\"department\":\"广东省\",\"location\":\"湛江市\",\"level\":\"本科\"},{\"schoolName\":\"肇庆学院\",\"schoolCode\":4144010580,\"department\":\"广东省\",\"location\":\"肇庆市\",\"level\":\"本科\"},{\"schoolName\":\"嘉应学院\",\"schoolCode\":4144010582,\"department\":\"广东省\",\"location\":\"梅州市\",\"level\":\"本科\"},{\"schoolName\":\"广州体育学院\",\"schoolCode\":4144010585,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广州美术学院\",\"schoolCode\":4144010586,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"星海音乐学院\",\"schoolCode\":4144010587,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东技术师范大学\",\"schoolCode\":4144010588,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"深圳大学\",\"schoolCode\":4144010590,\"department\":\"广东省\",\"location\":\"深圳市\",\"level\":\"本科\"},{\"schoolName\":\"广东财经大学\",\"schoolCode\":4144010592,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东白云学院\",\"schoolCode\":4144010822,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广州大学\",\"schoolCode\":4144011078,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广州航海学院\",\"schoolCode\":4144011106,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东警官学院\",\"schoolCode\":4144011110,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"仲恺农业工程学院\",\"schoolCode\":4144011347,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"五邑大学\",\"schoolCode\":4144011349,\"department\":\"广东省\",\"location\":\"江门市\",\"level\":\"本科\"},{\"schoolName\":\"广东金融学院\",\"schoolCode\":4144011540,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"电子科技大学中山学院\",\"schoolCode\":4144011545,\"department\":\"广东省教育厅\",\"location\":\"中山市\",\"level\":\"本科\"},{\"schoolName\":\"广东石油化工学院\",\"schoolCode\":4144011656,\"department\":\"广东省\",\"location\":\"茂名市\",\"level\":\"本科\"},{\"schoolName\":\"东莞理工学院\",\"schoolCode\":4144011819,\"department\":\"广东省\",\"location\":\"东莞市\",\"level\":\"本科\"},{\"schoolName\":\"广东工业大学\",\"schoolCode\":4144011845,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东外语外贸大学\",\"schoolCode\":4144011846,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"佛山科学技术学院\",\"schoolCode\":4144011847,\"department\":\"广东省\",\"location\":\"佛山市\",\"level\":\"本科\"},{\"schoolName\":\"广东培正学院\",\"schoolCode\":4144012059,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"南方医科大学\",\"schoolCode\":4144012121,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东东软学院\",\"schoolCode\":4144012574,\"department\":\"广东省教育厅\",\"location\":\"佛山市\",\"level\":\"本科\"},{\"schoolName\":\"华南理工大学广州学院\",\"schoolCode\":4144012617,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广州大学华软软件学院\",\"schoolCode\":4144012618,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"中山大学南方学院\",\"schoolCode\":4144012619,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东外语外贸大学南国商学院\",\"schoolCode\":4144012620,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东财经大学华商学院\",\"schoolCode\":4144012621,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东海洋大学寸金学院\",\"schoolCode\":4144012622,\"department\":\"广东省教育厅\",\"location\":\"湛江市\",\"level\":\"本科\"},{\"schoolName\":\"华南农业大学珠江学院\",\"schoolCode\":4144012623,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广州理工学院\",\"schoolCode\":4144012668,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"北京师范大学珠海分校\",\"schoolCode\":4144013177,\"department\":\"广东省教育厅\",\"location\":\"珠海市\",\"level\":\"本科\"},{\"schoolName\":\"广东工业大学华立学院\",\"schoolCode\":4144013656,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广州大学松田学院\",\"schoolCode\":4144013657,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广州商学院\",\"schoolCode\":4144013667,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"北京理工大学珠海学院\",\"schoolCode\":4144013675,\"department\":\"广东省教育厅\",\"location\":\"珠海市\",\"level\":\"本科\"},{\"schoolName\":\"吉林大学珠海学院\",\"schoolCode\":4144013684,\"department\":\"广东省教育厅\",\"location\":\"珠海市\",\"level\":\"本科\"},{\"schoolName\":\"广州工商学院\",\"schoolCode\":4144013714,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广州科技职业技术大学\",\"schoolCode\":4144013717,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东科技学院\",\"schoolCode\":4144013719,\"department\":\"广东省教育厅\",\"location\":\"东莞市\",\"level\":\"本科\"},{\"schoolName\":\"广东理工学院\",\"schoolCode\":4144013720,\"department\":\"广东省教育厅\",\"location\":\"肇庆市\",\"level\":\"本科\"},{\"schoolName\":\"广东工商职业技术大学\",\"schoolCode\":4144013721,\"department\":\"广东省教育厅\",\"location\":\"肇庆市\",\"level\":\"本科\"},{\"schoolName\":\"东莞理工学院城市学院\",\"schoolCode\":4144013844,\"department\":\"广东省教育厅\",\"location\":\"东莞市\",\"level\":\"本科\"},{\"schoolName\":\"中山大学新华学院\",\"schoolCode\":4144013902,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"广东第二师范学院\",\"schoolCode\":4144014278,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"本科\"},{\"schoolName\":\"南方科技大学\",\"schoolCode\":4144014325,\"department\":\"广东省\",\"location\":\"深圳市\",\"level\":\"本科\"},{\"schoolName\":\"深圳技术大学\",\"schoolCode\":4144014655,\"department\":\"广东省\",\"location\":\"深圳市\",\"level\":\"本科\"},{\"schoolName\":\"北京师范大学-香港浸会大学联合国际学院\",\"schoolCode\":4144016401,\"department\":\"广东省教育厅\",\"location\":\"珠海市\",\"level\":\"本科\"},{\"schoolName\":\"香港中文大学（深圳）\",\"schoolCode\":4144016407,\"department\":\"广东省教育厅\",\"location\":\"深圳市\",\"level\":\"本科\"},{\"schoolName\":\"深圳北理莫斯科大学\",\"schoolCode\":4144016409,\"department\":\"广东省\",\"location\":\"深圳市\",\"level\":\"本科\"},{\"schoolName\":\"广东以色列理工学院\",\"schoolCode\":4144016410,\"department\":\"广东省\",\"location\":\"汕头市\",\"level\":\"本科\"},{\"schoolName\":\"顺德职业技术学院\",\"schoolCode\":4144010831,\"department\":\"广东省\",\"location\":\"佛山市\",\"level\":\"专科\"},{\"schoolName\":\"广东轻工职业技术学院\",\"schoolCode\":4144010833,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东交通职业技术学院\",\"schoolCode\":4144010861,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东水利电力职业技术学院\",\"schoolCode\":4144010862,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"潮汕职业技术学院\",\"schoolCode\":4144010965,\"department\":\"广东省教育厅\",\"location\":\"揭阳市\",\"level\":\"专科\"},{\"schoolName\":\"深圳职业技术学院\",\"schoolCode\":4144011113,\"department\":\"广东省\",\"location\":\"深圳市\",\"level\":\"专科\"},{\"schoolName\":\"广东南华工商职业学院\",\"schoolCode\":4144011114,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"私立华联学院\",\"schoolCode\":4144011121,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州民航职业技术学院\",\"schoolCode\":4144012040,\"department\":\"交通运输部（中国民用航空局）\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州番禺职业技术学院\",\"schoolCode\":4144012046,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东松山职业技术学院\",\"schoolCode\":4144012060,\"department\":\"广东省\",\"location\":\"韶关市\",\"level\":\"专科\"},{\"schoolName\":\"广东农工商职业技术学院\",\"schoolCode\":4144012322,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东新安职业技术学院\",\"schoolCode\":4144012325,\"department\":\"广东省教育厅\",\"location\":\"深圳市\",\"level\":\"专科\"},{\"schoolName\":\"佛山职业技术学院\",\"schoolCode\":4144012327,\"department\":\"广东省\",\"location\":\"佛山市\",\"level\":\"专科\"},{\"schoolName\":\"广东科学技术职业学院\",\"schoolCode\":4144012572,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东食品药品职业学院\",\"schoolCode\":4144012573,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州康大职业技术学院\",\"schoolCode\":4144012575,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"珠海艺术职业学院\",\"schoolCode\":4144012576,\"department\":\"广东省教育厅\",\"location\":\"珠海市\",\"level\":\"专科\"},{\"schoolName\":\"广东行政职业学院\",\"schoolCode\":4144012577,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东体育职业技术学院\",\"schoolCode\":4144012578,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东职业技术学院\",\"schoolCode\":4144012736,\"department\":\"广东省\",\"location\":\"佛山市\",\"level\":\"专科\"},{\"schoolName\":\"广东建设职业技术学院\",\"schoolCode\":4144012741,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东女子职业技术学院\",\"schoolCode\":4144012742,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东机电职业技术学院\",\"schoolCode\":4144012743,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东岭南职业技术学院\",\"schoolCode\":4144012749,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"汕尾职业技术学院\",\"schoolCode\":4144012765,\"department\":\"广东省\",\"location\":\"汕尾市\",\"level\":\"专科\"},{\"schoolName\":\"罗定职业技术学院\",\"schoolCode\":4144012770,\"department\":\"广东省\",\"location\":\"云浮市\",\"level\":\"专科\"},{\"schoolName\":\"阳江职业技术学院\",\"schoolCode\":4144012771,\"department\":\"广东省\",\"location\":\"阳江市\",\"level\":\"专科\"},{\"schoolName\":\"河源职业技术学院\",\"schoolCode\":4144012772,\"department\":\"广东省\",\"location\":\"河源市\",\"level\":\"专科\"},{\"schoolName\":\"广东邮电职业技术学院\",\"schoolCode\":4144012953,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"汕头职业技术学院\",\"schoolCode\":4144012954,\"department\":\"广东省\",\"location\":\"汕头市\",\"level\":\"专科\"},{\"schoolName\":\"揭阳职业技术学院\",\"schoolCode\":4144012956,\"department\":\"广东省\",\"location\":\"揭阳市\",\"level\":\"专科\"},{\"schoolName\":\"深圳信息职业技术学院\",\"schoolCode\":4144012957,\"department\":\"广东省\",\"location\":\"深圳市\",\"level\":\"专科\"},{\"schoolName\":\"清远职业技术学院\",\"schoolCode\":4144012958,\"department\":\"广东省\",\"location\":\"清远市\",\"level\":\"专科\"},{\"schoolName\":\"广东工贸职业技术学院\",\"schoolCode\":4144012959,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东司法警官职业学院\",\"schoolCode\":4144012960,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东亚视演艺职业学院\",\"schoolCode\":4144012961,\"department\":\"广东省教育厅\",\"location\":\"东莞市\",\"level\":\"专科\"},{\"schoolName\":\"广东省外语艺术职业学院\",\"schoolCode\":4144012962,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东文艺职业学院\",\"schoolCode\":4144013707,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州体育职业技术学院\",\"schoolCode\":4144013708,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州工程技术职业学院\",\"schoolCode\":4144013709,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"中山火炬职业技术学院\",\"schoolCode\":4144013710,\"department\":\"广东省\",\"location\":\"中山市\",\"level\":\"专科\"},{\"schoolName\":\"江门职业技术学院\",\"schoolCode\":4144013711,\"department\":\"广东省\",\"location\":\"江门市\",\"level\":\"专科\"},{\"schoolName\":\"茂名职业技术学院\",\"schoolCode\":4144013712,\"department\":\"广东省\",\"location\":\"茂名市\",\"level\":\"专科\"},{\"schoolName\":\"珠海城市职业技术学院\",\"schoolCode\":4144013713,\"department\":\"广东省\",\"location\":\"珠海市\",\"level\":\"专科\"},{\"schoolName\":\"广州涉外经济职业技术学院\",\"schoolCode\":4144013715,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州南洋理工职业学院\",\"schoolCode\":4144013716,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"惠州经济职业技术学院\",\"schoolCode\":4144013718,\"department\":\"广东省教育厅\",\"location\":\"惠州市\",\"level\":\"专科\"},{\"schoolName\":\"肇庆医学高等专科学校\",\"schoolCode\":4144013810,\"department\":\"广东省\",\"location\":\"肇庆市\",\"level\":\"专科\"},{\"schoolName\":\"广州现代信息工程职业技术学院\",\"schoolCode\":4144013912,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东理工职业学院\",\"schoolCode\":4144013919,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州华南商贸职业学院\",\"schoolCode\":4144013927,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州华立科技职业学院\",\"schoolCode\":4144013928,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州城市职业学院\",\"schoolCode\":4144013929,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东工程职业技术学院\",\"schoolCode\":4144013930,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州铁路职业技术学院\",\"schoolCode\":4144013943,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东科贸职业学院\",\"schoolCode\":4144014063,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州科技贸易职业学院\",\"schoolCode\":4144014065,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"中山职业技术学院\",\"schoolCode\":4144014066,\"department\":\"广东省\",\"location\":\"中山市\",\"level\":\"专科\"},{\"schoolName\":\"广州珠江职业技术学院\",\"schoolCode\":4144014123,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州松田职业学院\",\"schoolCode\":4144014125,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东文理职业学院\",\"schoolCode\":4144014126,\"department\":\"广东省教育厅\",\"location\":\"湛江市\",\"level\":\"专科\"},{\"schoolName\":\"广州城建职业学院\",\"schoolCode\":4144014136,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"东莞职业技术学院\",\"schoolCode\":4144014263,\"department\":\"广东省\",\"location\":\"东莞市\",\"level\":\"专科\"},{\"schoolName\":\"广东南方职业学院\",\"schoolCode\":4144014265,\"department\":\"广东省教育厅\",\"location\":\"江门市\",\"level\":\"专科\"},{\"schoolName\":\"广州华商职业学院\",\"schoolCode\":4144014266,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州华夏职业学院\",\"schoolCode\":4144014268,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东环境保护工程职业学院\",\"schoolCode\":4144014311,\"department\":\"广东省\",\"location\":\"佛山市\",\"level\":\"专科\"},{\"schoolName\":\"广东青年职业学院\",\"schoolCode\":4144014361,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广州东华职业学院\",\"schoolCode\":4144014362,\"department\":\"广东省教育厅\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"广东创新科技职业学院\",\"schoolCode\":4144014363,\"department\":\"广东省教育厅\",\"location\":\"东莞市\",\"level\":\"专科\"},{\"schoolName\":\"广东舞蹈戏剧职业学院\",\"schoolCode\":4144014407,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"惠州卫生职业技术学院\",\"schoolCode\":4144014408,\"department\":\"广东省\",\"location\":\"惠州市\",\"level\":\"专科\"},{\"schoolName\":\"广东信息工程职业学院\",\"schoolCode\":4144014427,\"department\":\"广东省教育厅\",\"location\":\"肇庆市\",\"level\":\"专科\"},{\"schoolName\":\"广东生态工程职业学院\",\"schoolCode\":4144014509,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"惠州城市职业学院\",\"schoolCode\":4144014510,\"department\":\"广东省\",\"location\":\"惠州市\",\"level\":\"专科\"},{\"schoolName\":\"广东碧桂园职业学院\",\"schoolCode\":4144014511,\"department\":\"广东省教育厅\",\"location\":\"清远市\",\"level\":\"专科\"},{\"schoolName\":\"广东茂名健康职业学院\",\"schoolCode\":4144014556,\"department\":\"广东省\",\"location\":\"茂名市\",\"level\":\"专科\"},{\"schoolName\":\"广东酒店管理职业技术学院\",\"schoolCode\":4144014572,\"department\":\"广东省教育厅\",\"location\":\"东莞市\",\"level\":\"专科\"},{\"schoolName\":\"广东茂名幼儿师范专科学校\",\"schoolCode\":4144014587,\"department\":\"广东省\",\"location\":\"茂名市\",\"level\":\"专科\"},{\"schoolName\":\"广州卫生职业技术学院\",\"schoolCode\":4144014592,\"department\":\"广东省\",\"location\":\"广州市\",\"level\":\"专科\"},{\"schoolName\":\"惠州工程职业学院\",\"schoolCode\":4144014609,\"department\":\"广东省\",\"location\":\"惠州市\",\"level\":\"专科\"},{\"schoolName\":\"广东江门中医药职业学院\",\"schoolCode\":4144014610,\"department\":\"广东省\",\"location\":\"江门市\",\"level\":\"专科\"},{\"schoolName\":\"广东茂名农林科技职业学院\",\"schoolCode\":4144014638,\"department\":\"广东省\",\"location\":\"茂名市\",\"level\":\"专科\"},{\"schoolName\":\"广东江门幼儿师范高等专科学校\",\"schoolCode\":4144014664,\"department\":\"广东省\",\"location\":\"江门市\",\"level\":\"专科\"},{\"schoolName\":\"广东财贸职业学院\",\"schoolCode\":4144014667,\"department\":\"广东省\",\"location\":\"清远市\",\"level\":\"专科\"},{\"schoolName\":\"湛江幼儿师范专科学校\",\"schoolCode\":4244050853,\"department\":\"广东省\",\"location\":\"湛江市\",\"level\":\"专科\"},{\"schoolName\":\"广西大学\",\"schoolCode\":4145010593,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"广西科技大学\",\"schoolCode\":4145010594,\"department\":\"广西壮族自治区\",\"location\":\"柳州市\",\"level\":\"本科\"},{\"schoolName\":\"桂林电子科技大学\",\"schoolCode\":4145010595,\"department\":\"广西壮族自治区\",\"location\":\"桂林市\",\"level\":\"本科\"},{\"schoolName\":\"桂林理工大学\",\"schoolCode\":4145010596,\"department\":\"广西壮族自治区\",\"location\":\"桂林市\",\"level\":\"本科\"},{\"schoolName\":\"广西医科大学\",\"schoolCode\":4145010598,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"右江民族医学院\",\"schoolCode\":4145010599,\"department\":\"广西壮族自治区\",\"location\":\"百色市\",\"level\":\"本科\"},{\"schoolName\":\"广西中医药大学\",\"schoolCode\":4145010600,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"桂林医学院\",\"schoolCode\":4145010601,\"department\":\"广西壮族自治区\",\"location\":\"桂林市\",\"level\":\"本科\"},{\"schoolName\":\"广西师范大学\",\"schoolCode\":4145010602,\"department\":\"广西壮族自治区\",\"location\":\"桂林市\",\"level\":\"本科\"},{\"schoolName\":\"南宁师范大学\",\"schoolCode\":4145010603,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"广西民族师范学院\",\"schoolCode\":4145010604,\"department\":\"广西壮族自治区\",\"location\":\"崇左市\",\"level\":\"本科\"},{\"schoolName\":\"河池学院\",\"schoolCode\":4145010605,\"department\":\"广西壮族自治区\",\"location\":\"河池市\",\"level\":\"本科\"},{\"schoolName\":\"玉林师范学院\",\"schoolCode\":4145010606,\"department\":\"广西壮族自治区\",\"location\":\"玉林市\",\"level\":\"本科\"},{\"schoolName\":\"广西艺术学院\",\"schoolCode\":4145010607,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"广西民族大学\",\"schoolCode\":4145010608,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"百色学院\",\"schoolCode\":4145010609,\"department\":\"广西壮族自治区\",\"location\":\"百色市\",\"level\":\"本科\"},{\"schoolName\":\"梧州学院\",\"schoolCode\":4145011354,\"department\":\"广西壮族自治区\",\"location\":\"梧州市\",\"level\":\"本科\"},{\"schoolName\":\"广西科技师范学院\",\"schoolCode\":4145011546,\"department\":\"广西壮族自治区\",\"location\":\"来宾市\",\"level\":\"本科\"},{\"schoolName\":\"广西财经学院\",\"schoolCode\":4145011548,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"南宁学院\",\"schoolCode\":4145011549,\"department\":\"广西自治区教育厅\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"北部湾大学\",\"schoolCode\":4145011607,\"department\":\"广西壮族自治区\",\"location\":\"钦州市\",\"level\":\"本科\"},{\"schoolName\":\"桂林航天工业学院\",\"schoolCode\":4145011825,\"department\":\"广西壮族自治区\",\"location\":\"桂林市\",\"level\":\"本科\"},{\"schoolName\":\"桂林旅游学院\",\"schoolCode\":4145011837,\"department\":\"广西壮族自治区\",\"location\":\"桂林市\",\"level\":\"本科\"},{\"schoolName\":\"贺州学院\",\"schoolCode\":4145011838,\"department\":\"广西壮族自治区\",\"location\":\"贺州市\",\"level\":\"本科\"},{\"schoolName\":\"广西警察学院\",\"schoolCode\":4145013520,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"北海艺术设计学院\",\"schoolCode\":4145013524,\"department\":\"广西自治区教育厅\",\"location\":\"北海市\",\"level\":\"本科\"},{\"schoolName\":\"广西大学行健文理学院\",\"schoolCode\":4145013638,\"department\":\"广西自治区教育厅\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"柳州工学院\",\"schoolCode\":4145013639,\"department\":\"广西自治区教育厅\",\"location\":\"柳州市\",\"level\":\"本科\"},{\"schoolName\":\"广西民族大学相思湖学院\",\"schoolCode\":4145013640,\"department\":\"广西自治区教育厅\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"广西师范大学漓江学院\",\"schoolCode\":4145013641,\"department\":\"广西自治区教育厅\",\"location\":\"桂林市\",\"level\":\"本科\"},{\"schoolName\":\"南宁师范大学师园学院\",\"schoolCode\":4145013642,\"department\":\"广西自治区教育厅\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"广西中医药大学赛恩斯新医药学院\",\"schoolCode\":4145013643,\"department\":\"广西自治区教育厅\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"桂林电子科技大学信息科技学院\",\"schoolCode\":4145013644,\"department\":\"广西自治区教育厅\",\"location\":\"桂林市\",\"level\":\"本科\"},{\"schoolName\":\"桂林理工大学博文管理学院\",\"schoolCode\":4145013645,\"department\":\"广西自治区教育厅\",\"location\":\"桂林市\",\"level\":\"本科\"},{\"schoolName\":\"广西外国语学院\",\"schoolCode\":4145013830,\"department\":\"广西自治区教育厅\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"北京航空航天大学北海学院\",\"schoolCode\":4145013890,\"department\":\"广西自治区教育厅\",\"location\":\"北海市\",\"level\":\"本科\"},{\"schoolName\":\"广西城市职业大学\",\"schoolCode\":4145013920,\"department\":\"广西自治区教育厅\",\"location\":\"崇左市\",\"level\":\"本科\"},{\"schoolName\":\"广西职业师范学院\",\"schoolCode\":4145014684,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"本科\"},{\"schoolName\":\"桂林生命与健康职业技术学院\",\"schoolCode\":4145010035,\"department\":\"广西自治区教育厅\",\"location\":\"桂林市\",\"level\":\"专科\"},{\"schoolName\":\"广西机电职业技术学院\",\"schoolCode\":4145010867,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西体育高等专科学校\",\"schoolCode\":4145011350,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"南宁职业技术学院\",\"schoolCode\":4145011355,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西水利电力职业技术学院\",\"schoolCode\":4145011608,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"桂林师范高等专科学校\",\"schoolCode\":4145011671,\"department\":\"广西壮族自治区\",\"location\":\"桂林市\",\"level\":\"专科\"},{\"schoolName\":\"广西职业技术学院\",\"schoolCode\":4145011773,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"柳州职业技术学院\",\"schoolCode\":4145012104,\"department\":\"广西壮族自治区\",\"location\":\"柳州市\",\"level\":\"专科\"},{\"schoolName\":\"广西生态工程职业技术学院\",\"schoolCode\":4145012344,\"department\":\"广西壮族自治区\",\"location\":\"柳州市\",\"level\":\"专科\"},{\"schoolName\":\"广西交通职业技术学院\",\"schoolCode\":4145012356,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西工业职业技术学院\",\"schoolCode\":4145012364,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西国际商务职业技术学院\",\"schoolCode\":4145012379,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西农业职业技术学院\",\"schoolCode\":4145012382,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"柳州铁道职业技术学院\",\"schoolCode\":4145012392,\"department\":\"广西壮族自治区\",\"location\":\"柳州市\",\"level\":\"专科\"},{\"schoolName\":\"广西建设职业技术学院\",\"schoolCode\":4145013138,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西现代职业技术学院\",\"schoolCode\":4145013522,\"department\":\"广西壮族自治区\",\"location\":\"河池市\",\"level\":\"专科\"},{\"schoolName\":\"北海职业学院\",\"schoolCode\":4145013523,\"department\":\"广西壮族自治区\",\"location\":\"北海市\",\"level\":\"专科\"},{\"schoolName\":\"桂林山水职业学院\",\"schoolCode\":4145013526,\"department\":\"广西自治区教育厅\",\"location\":\"桂林市\",\"level\":\"专科\"},{\"schoolName\":\"广西经贸职业技术学院\",\"schoolCode\":4145013827,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西工商职业技术学院\",\"schoolCode\":4145013828,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西演艺职业学院\",\"schoolCode\":4145013829,\"department\":\"广西自治区教育厅\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西电力职业技术学院\",\"schoolCode\":4145013831,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西英华国际职业学院\",\"schoolCode\":4145014026,\"department\":\"广西自治区教育厅\",\"location\":\"钦州市\",\"level\":\"专科\"},{\"schoolName\":\"柳州城市职业学院\",\"schoolCode\":4145014067,\"department\":\"广西壮族自治区\",\"location\":\"柳州市\",\"level\":\"专科\"},{\"schoolName\":\"百色职业学院\",\"schoolCode\":4145014068,\"department\":\"广西壮族自治区\",\"location\":\"百色市\",\"level\":\"专科\"},{\"schoolName\":\"广西工程职业学院\",\"schoolCode\":4145014127,\"department\":\"广西自治区教育厅\",\"location\":\"百色市\",\"level\":\"专科\"},{\"schoolName\":\"广西理工职业技术学院\",\"schoolCode\":4145014170,\"department\":\"广西自治区教育厅\",\"location\":\"崇左市\",\"level\":\"专科\"},{\"schoolName\":\"梧州职业学院\",\"schoolCode\":4145014171,\"department\":\"广西壮族自治区\",\"location\":\"梧州市\",\"level\":\"专科\"},{\"schoolName\":\"广西经济职业学院\",\"schoolCode\":4145014211,\"department\":\"广西自治区教育厅\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西幼儿师范高等专科学校\",\"schoolCode\":4145014220,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西科技职业学院\",\"schoolCode\":4145014312,\"department\":\"广西自治区教育厅\",\"location\":\"崇左市\",\"level\":\"专科\"},{\"schoolName\":\"广西卫生职业技术学院\",\"schoolCode\":4145014313,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西培贤国际职业学院\",\"schoolCode\":4145014481,\"department\":\"广西自治区教育厅\",\"location\":\"百色市\",\"level\":\"专科\"},{\"schoolName\":\"广西金融职业技术学院\",\"schoolCode\":4145014512,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西中远职业学院\",\"schoolCode\":4145014546,\"department\":\"广西自治区教育厅\",\"location\":\"崇左市\",\"level\":\"专科\"},{\"schoolName\":\"玉柴职业技术学院\",\"schoolCode\":4145014573,\"department\":\"广西自治区教育厅\",\"location\":\"玉林市\",\"level\":\"专科\"},{\"schoolName\":\"广西蓝天航空职业学院\",\"schoolCode\":4145014574,\"department\":\"广西自治区教育厅\",\"location\":\"来宾市\",\"level\":\"专科\"},{\"schoolName\":\"广西安全工程职业技术学院\",\"schoolCode\":4145014611,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西自然资源职业技术学院\",\"schoolCode\":4145014668,\"department\":\"广西壮族自治区\",\"location\":\"崇左市\",\"level\":\"专科\"},{\"schoolName\":\"钦州幼儿师范高等专科学校\",\"schoolCode\":4145014693,\"department\":\"广西壮族自治区\",\"location\":\"钦州市\",\"level\":\"专科\"},{\"schoolName\":\"梧州医学高等专科学校\",\"schoolCode\":4145014694,\"department\":\"广西壮族自治区教育厅\",\"location\":\"梧州市\",\"level\":\"专科\"},{\"schoolName\":\"广西制造工程职业技术学院\",\"schoolCode\":4145014722,\"department\":\"广西壮族自治区\",\"location\":\"南宁市\",\"level\":\"专科\"},{\"schoolName\":\"广西物流职业技术学院\",\"schoolCode\":4145014723,\"department\":\"广西壮族自治区\",\"location\":\"贵港市\",\"level\":\"专科\"},{\"schoolName\":\"崇左幼儿师范高等专科学校\",\"schoolCode\":4245051675,\"department\":\"广西壮族自治区\",\"location\":\"崇左市\",\"level\":\"专科\"},{\"schoolName\":\"海南大学\",\"schoolCode\":4146010589,\"department\":\"海南省\",\"location\":\"海口市\",\"level\":\"本科\"},{\"schoolName\":\"海南热带海洋学院\",\"schoolCode\":4146011100,\"department\":\"海南省\",\"location\":\"三亚市\",\"level\":\"本科\"},{\"schoolName\":\"海南师范大学\",\"schoolCode\":4146011658,\"department\":\"海南省\",\"location\":\"海口市\",\"level\":\"本科\"},{\"schoolName\":\"海南医学院\",\"schoolCode\":4146011810,\"department\":\"海南省\",\"location\":\"海口市\",\"level\":\"本科\"},{\"schoolName\":\"海口经济学院\",\"schoolCode\":4146012308,\"department\":\"海南省教育厅\",\"location\":\"海口市\",\"level\":\"本科\"},{\"schoolName\":\"琼台师范学院\",\"schoolCode\":4146013811,\"department\":\"海南省\",\"location\":\"海口市\",\"level\":\"本科\"},{\"schoolName\":\"三亚学院\",\"schoolCode\":4146013892,\"department\":\"海南省教育厅\",\"location\":\"三亚市\",\"level\":\"本科\"},{\"schoolName\":\"海南科技职业大学\",\"schoolCode\":4146014172,\"department\":\"海南省教育厅\",\"location\":\"海口市\",\"level\":\"本科\"},{\"schoolName\":\"海南职业技术学院\",\"schoolCode\":4146011999,\"department\":\"海南省\",\"location\":\"海口市\",\"level\":\"专科\"},{\"schoolName\":\"三亚城市职业学院\",\"schoolCode\":4146012717,\"department\":\"海南省教育厅\",\"location\":\"三亚市\",\"level\":\"专科\"},{\"schoolName\":\"海南软件职业技术学院\",\"schoolCode\":4146013575,\"department\":\"海南省\",\"location\":\"琼海市\",\"level\":\"专科\"},{\"schoolName\":\"海南政法职业学院\",\"schoolCode\":4146013576,\"department\":\"海南省\",\"location\":\"海口市\",\"level\":\"专科\"},{\"schoolName\":\"海南外国语职业学院\",\"schoolCode\":4146013577,\"department\":\"海南省\",\"location\":\"文昌市\",\"level\":\"专科\"},{\"schoolName\":\"海南经贸职业技术学院\",\"schoolCode\":4146013875,\"department\":\"海南省\",\"location\":\"海口市\",\"level\":\"专科\"},{\"schoolName\":\"海南工商职业学院\",\"schoolCode\":4146013876,\"department\":\"海南省教育厅\",\"location\":\"海口市\",\"level\":\"专科\"},{\"schoolName\":\"三亚航空旅游职业学院\",\"schoolCode\":4146013931,\"department\":\"海南省教育厅\",\"location\":\"三亚市\",\"level\":\"专科\"},{\"schoolName\":\"三亚理工职业学院\",\"schoolCode\":4146014236,\"department\":\"海南省教育厅\",\"location\":\"三亚市\",\"level\":\"专科\"},{\"schoolName\":\"海南体育职业技术学院\",\"schoolCode\":4146014575,\"department\":\"海南省\",\"location\":\"海口市\",\"level\":\"专科\"},{\"schoolName\":\"三亚中瑞酒店管理职业学院\",\"schoolCode\":4146014612,\"department\":\"海南省教育厅\",\"location\":\"三亚市\",\"level\":\"专科\"},{\"schoolName\":\"海南健康管理职业技术学院\",\"schoolCode\":4146014639,\"department\":\"海南省教育厅\",\"location\":\"海口市\",\"level\":\"专科\"},{\"schoolName\":\"海南卫生健康职业学院\",\"schoolCode\":4146014724,\"department\":\"海南省\",\"location\":\"海口市\",\"level\":\"专科\"},{\"schoolName\":\"重庆大学\",\"schoolCode\":4150010611,\"department\":\"教育部\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆邮电大学\",\"schoolCode\":4150010617,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆交通大学\",\"schoolCode\":4150010618,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆医科大学\",\"schoolCode\":4150010631,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"西南大学\",\"schoolCode\":4150010635,\"department\":\"教育部\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆师范大学\",\"schoolCode\":4150010637,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆文理学院\",\"schoolCode\":4150010642,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆三峡学院\",\"schoolCode\":4150010643,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"长江师范学院\",\"schoolCode\":4150010647,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"四川外国语大学\",\"schoolCode\":4150010650,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"西南政法大学\",\"schoolCode\":4150010652,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"四川美术学院\",\"schoolCode\":4150010655,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆科技学院\",\"schoolCode\":4150011551,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆理工大学\",\"schoolCode\":4150011660,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆工商大学\",\"schoolCode\":4150011799,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆机电职业技术大学\",\"schoolCode\":4150012607,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆工程学院\",\"schoolCode\":4150012608,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆大学城市科技学院\",\"schoolCode\":4150012616,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆警察学院\",\"schoolCode\":4150012757,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆人文科技学院\",\"schoolCode\":4150013548,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"四川外国语大学重庆南方翻译学院\",\"schoolCode\":4150013588,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆师范大学涉外商贸学院\",\"schoolCode\":4150013589,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆工商大学融智学院\",\"schoolCode\":4150013590,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆工商大学派斯学院\",\"schoolCode\":4150013591,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆邮电大学移通学院\",\"schoolCode\":4150013627,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆第二师范学院\",\"schoolCode\":4150014388,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"本科\"},{\"schoolName\":\"重庆航天职业技术学院\",\"schoolCode\":4150010870,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆电力高等专科学校\",\"schoolCode\":4150011848,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆工业职业技术学院\",\"schoolCode\":4150012215,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆三峡职业学院\",\"schoolCode\":4150012605,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆工贸职业技术学院\",\"schoolCode\":4150012606,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆电子工程职业学院\",\"schoolCode\":4150012609,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆海联职业技术学院\",\"schoolCode\":4150012754,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆信息技术职业学院\",\"schoolCode\":4150012755,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆传媒职业学院\",\"schoolCode\":4150012756,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆城市管理职业学院\",\"schoolCode\":4150012758,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆工程职业技术学院\",\"schoolCode\":4150012759,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆建筑科技职业学院\",\"schoolCode\":4150012820,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆城市职业学院\",\"schoolCode\":4150013734,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆水利电力职业技术学院\",\"schoolCode\":4150013735,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆工商职业学院\",\"schoolCode\":4150013967,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆应用技术职业学院\",\"schoolCode\":4150013968,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆三峡医药高等专科学校\",\"schoolCode\":4150014008,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆医药高等专科学校\",\"schoolCode\":4150014009,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆青年职业技术学院\",\"schoolCode\":4150014069,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆财经职业学院\",\"schoolCode\":4150014128,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆科创职业学院\",\"schoolCode\":4150014173,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆建筑工程职业学院\",\"schoolCode\":4150014183,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆电讯职业学院\",\"schoolCode\":4150014237,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆能源职业学院\",\"schoolCode\":4150014238,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆商务职业学院\",\"schoolCode\":4150014246,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆交通职业学院\",\"schoolCode\":4150014267,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆化工职业学院\",\"schoolCode\":4150014315,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆旅游职业学院\",\"schoolCode\":4150014316,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆安全技术职业学院\",\"schoolCode\":4150014365,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆公共运输职业学院\",\"schoolCode\":4150014366,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆艺术工程职业学院\",\"schoolCode\":4150014367,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆轻工职业学院\",\"schoolCode\":4150014368,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆电信职业学院\",\"schoolCode\":4150014369,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆经贸职业学院\",\"schoolCode\":4150014370,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆幼儿师范高等专科学校\",\"schoolCode\":4150014428,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆文化艺术职业学院\",\"schoolCode\":4150014482,\"department\":\"重庆市\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆科技职业学院\",\"schoolCode\":4150014491,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆资源与环境保护职业学院\",\"schoolCode\":4150014557,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆护理职业学院\",\"schoolCode\":4150014576,\"department\":\"重庆市教委\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆理工职业学院\",\"schoolCode\":4150014725,\"department\":\"重庆市教育厅\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆智能工程职业学院\",\"schoolCode\":4150014726,\"department\":\"重庆市教育厅\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"重庆健康职业学院\",\"schoolCode\":4150014727,\"department\":\"重庆市教育厅\",\"location\":\"重庆市\",\"level\":\"专科\"},{\"schoolName\":\"四川大学\",\"schoolCode\":4151010610,\"department\":\"教育部\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"西南交通大学\",\"schoolCode\":4151010613,\"department\":\"教育部\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"电子科技大学\",\"schoolCode\":4151010614,\"department\":\"教育部\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"西南石油大学\",\"schoolCode\":4151010615,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"成都理工大学\",\"schoolCode\":4151010616,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"西南科技大学\",\"schoolCode\":4151010619,\"department\":\"四川省\",\"location\":\"绵阳市\",\"level\":\"本科\"},{\"schoolName\":\"成都信息工程大学\",\"schoolCode\":4151010621,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"四川轻化工大学\",\"schoolCode\":4151010622,\"department\":\"四川省\",\"location\":\"自贡市\",\"level\":\"本科\"},{\"schoolName\":\"西华大学\",\"schoolCode\":4151010623,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"中国民用航空飞行学院\",\"schoolCode\":4151010624,\"department\":\"交通运输部（中国民用航空局）\",\"location\":\"德阳市\",\"level\":\"本科\"},{\"schoolName\":\"四川农业大学\",\"schoolCode\":4151010626,\"department\":\"四川省\",\"location\":\"雅安市\",\"level\":\"本科\"},{\"schoolName\":\"西昌学院\",\"schoolCode\":4151010628,\"department\":\"四川省\",\"location\":\"凉山彝族自治州\",\"level\":\"本科\"},{\"schoolName\":\"西南医科大学\",\"schoolCode\":4151010632,\"department\":\"四川省\",\"location\":\"泸州市\",\"level\":\"本科\"},{\"schoolName\":\"成都中医药大学\",\"schoolCode\":4151010633,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"川北医学院\",\"schoolCode\":4151010634,\"department\":\"四川省\",\"location\":\"南充市\",\"level\":\"本科\"},{\"schoolName\":\"四川师范大学\",\"schoolCode\":4151010636,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"西华师范大学\",\"schoolCode\":4151010638,\"department\":\"四川省\",\"location\":\"南充市\",\"level\":\"本科\"},{\"schoolName\":\"绵阳师范学院\",\"schoolCode\":4151010639,\"department\":\"四川省\",\"location\":\"绵阳市\",\"level\":\"本科\"},{\"schoolName\":\"内江师范学院\",\"schoolCode\":4151010640,\"department\":\"四川省\",\"location\":\"内江市\",\"level\":\"本科\"},{\"schoolName\":\"宜宾学院\",\"schoolCode\":4151010641,\"department\":\"四川省\",\"location\":\"宜宾市\",\"level\":\"本科\"},{\"schoolName\":\"四川文理学院\",\"schoolCode\":4151010644,\"department\":\"四川省\",\"location\":\"达州市\",\"level\":\"本科\"},{\"schoolName\":\"阿坝师范学院\",\"schoolCode\":4151010646,\"department\":\"四川省\",\"location\":\"阿坝藏族羌族自治州\",\"level\":\"本科\"},{\"schoolName\":\"乐山师范学院\",\"schoolCode\":4151010649,\"department\":\"四川省\",\"location\":\"乐山市\",\"level\":\"本科\"},{\"schoolName\":\"西南财经大学\",\"schoolCode\":4151010651,\"department\":\"教育部\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"成都体育学院\",\"schoolCode\":4151010653,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"四川音乐学院\",\"schoolCode\":4151010654,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"西南民族大学\",\"schoolCode\":4151010656,\"department\":\"国家民委\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"成都大学\",\"schoolCode\":4151011079,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"成都工业学院\",\"schoolCode\":4151011116,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"攀枝花学院\",\"schoolCode\":4151011360,\"department\":\"四川省\",\"location\":\"攀枝花市\",\"level\":\"本科\"},{\"schoolName\":\"四川旅游学院\",\"schoolCode\":4151011552,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"四川民族学院\",\"schoolCode\":4151011661,\"department\":\"四川省\",\"location\":\"甘孜藏族自治州\",\"level\":\"本科\"},{\"schoolName\":\"四川警察学院\",\"schoolCode\":4151012212,\"department\":\"四川省\",\"location\":\"泸州市\",\"level\":\"本科\"},{\"schoolName\":\"成都东软学院\",\"schoolCode\":4151012636,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"成都艺术职业大学\",\"schoolCode\":4151012969,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"电子科技大学成都学院\",\"schoolCode\":4151013665,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"成都理工大学工程技术学院\",\"schoolCode\":4151013668,\"department\":\"四川省教育厅\",\"location\":\"乐山市\",\"level\":\"本科\"},{\"schoolName\":\"四川传媒学院\",\"schoolCode\":4151013669,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"成都银杏酒店管理学院\",\"schoolCode\":4151013670,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"成都文理学院\",\"schoolCode\":4151013671,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"四川工商学院\",\"schoolCode\":4151013672,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"四川外国语大学成都学院\",\"schoolCode\":4151013673,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"成都医学院\",\"schoolCode\":4151013705,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"四川工业科技学院\",\"schoolCode\":4151013816,\"department\":\"四川省教育厅\",\"location\":\"德阳市\",\"level\":\"本科\"},{\"schoolName\":\"四川大学锦城学院\",\"schoolCode\":4151013903,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"西南财经大学天府学院\",\"schoolCode\":4151014037,\"department\":\"四川省教育厅\",\"location\":\"绵阳市\",\"level\":\"本科\"},{\"schoolName\":\"四川大学锦江学院\",\"schoolCode\":4151014039,\"department\":\"四川省教育厅\",\"location\":\"眉山市\",\"level\":\"本科\"},{\"schoolName\":\"四川文化艺术学院\",\"schoolCode\":4151014043,\"department\":\"四川省教育厅\",\"location\":\"绵阳市\",\"level\":\"本科\"},{\"schoolName\":\"西南科技大学城市学院\",\"schoolCode\":4151014045,\"department\":\"四川省教育厅\",\"location\":\"绵阳市\",\"level\":\"本科\"},{\"schoolName\":\"西南交通大学希望学院\",\"schoolCode\":4151014262,\"department\":\"四川省教育厅\",\"location\":\"南充市\",\"level\":\"本科\"},{\"schoolName\":\"成都师范学院\",\"schoolCode\":4151014389,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"四川电影电视学院\",\"schoolCode\":4151014410,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"吉利学院\",\"schoolCode\":4111012802,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"本科\"},{\"schoolName\":\"成都纺织高等专科学校\",\"schoolCode\":4151011553,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"民办四川天一学院\",\"schoolCode\":4151011841,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"成都航空职业技术学院\",\"schoolCode\":4151012064,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川电力职业技术学院\",\"schoolCode\":4151012065,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"成都职业技术学院\",\"schoolCode\":4151012635,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川化工职业技术学院\",\"schoolCode\":4151012637,\"department\":\"四川省\",\"location\":\"泸州市\",\"level\":\"专科\"},{\"schoolName\":\"四川水利职业技术学院\",\"schoolCode\":4151012638,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"南充职业技术学院\",\"schoolCode\":4151012639,\"department\":\"四川省\",\"location\":\"南充市\",\"level\":\"专科\"},{\"schoolName\":\"内江职业技术学院\",\"schoolCode\":4151012640,\"department\":\"四川省\",\"location\":\"内江市\",\"level\":\"专科\"},{\"schoolName\":\"四川航天职业技术学院\",\"schoolCode\":4151012641,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川邮电职业技术学院\",\"schoolCode\":4151012642,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川机电职业技术学院\",\"schoolCode\":4151012751,\"department\":\"四川省\",\"location\":\"攀枝花市\",\"level\":\"专科\"},{\"schoolName\":\"绵阳职业技术学院\",\"schoolCode\":4151012753,\"department\":\"四川省\",\"location\":\"绵阳市\",\"level\":\"专科\"},{\"schoolName\":\"四川交通职业技术学院\",\"schoolCode\":4151012761,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川工商职业技术学院\",\"schoolCode\":4151012762,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川工程职业技术学院\",\"schoolCode\":4151012763,\"department\":\"四川省\",\"location\":\"德阳市\",\"level\":\"专科\"},{\"schoolName\":\"四川建筑职业技术学院\",\"schoolCode\":4151012764,\"department\":\"四川省\",\"location\":\"德阳市\",\"level\":\"专科\"},{\"schoolName\":\"达州职业技术学院\",\"schoolCode\":4151012767,\"department\":\"四川省\",\"location\":\"达州市\",\"level\":\"专科\"},{\"schoolName\":\"四川托普信息技术职业学院\",\"schoolCode\":4151012963,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川国际标榜职业学院\",\"schoolCode\":4151012964,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"成都农业科技职业学院\",\"schoolCode\":4151012965,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"宜宾职业技术学院\",\"schoolCode\":4151012966,\"department\":\"四川省\",\"location\":\"宜宾市\",\"level\":\"专科\"},{\"schoolName\":\"泸州职业技术学院\",\"schoolCode\":4151012967,\"department\":\"四川省\",\"location\":\"泸州市\",\"level\":\"专科\"},{\"schoolName\":\"眉山职业技术学院\",\"schoolCode\":4151012968,\"department\":\"四川省\",\"location\":\"眉山市\",\"level\":\"专科\"},{\"schoolName\":\"四川职业技术学院\",\"schoolCode\":4151012970,\"department\":\"四川省\",\"location\":\"遂宁市\",\"level\":\"专科\"},{\"schoolName\":\"乐山职业技术学院\",\"schoolCode\":4151013048,\"department\":\"四川省\",\"location\":\"乐山市\",\"level\":\"专科\"},{\"schoolName\":\"雅安职业技术学院\",\"schoolCode\":4151013049,\"department\":\"四川省\",\"location\":\"雅安市\",\"level\":\"专科\"},{\"schoolName\":\"四川商务职业学院\",\"schoolCode\":4151013812,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川司法警官职业学院\",\"schoolCode\":4151013813,\"department\":\"四川省\",\"location\":\"德阳市\",\"level\":\"专科\"},{\"schoolName\":\"广安职业技术学院\",\"schoolCode\":4151013814,\"department\":\"四川省\",\"location\":\"广安市\",\"level\":\"专科\"},{\"schoolName\":\"四川信息职业技术学院\",\"schoolCode\":4151013815,\"department\":\"四川省\",\"location\":\"广元市\",\"level\":\"专科\"},{\"schoolName\":\"四川文化传媒职业学院\",\"schoolCode\":4151014004,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川华新现代职业学院\",\"schoolCode\":4151014005,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川铁道职业学院\",\"schoolCode\":4151014006,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川艺术职业学院\",\"schoolCode\":4151014007,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川中医药高等专科学校\",\"schoolCode\":4151014010,\"department\":\"四川省\",\"location\":\"绵阳市\",\"level\":\"专科\"},{\"schoolName\":\"四川科技职业学院\",\"schoolCode\":4151014070,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川文化产业职业学院\",\"schoolCode\":4151014086,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川财经职业学院\",\"schoolCode\":4151014091,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川城市职业学院\",\"schoolCode\":4151014175,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川现代职业学院\",\"schoolCode\":4151014176,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川幼儿师范高等专科学校\",\"schoolCode\":4151014221,\"department\":\"四川省\",\"location\":\"绵阳市\",\"level\":\"专科\"},{\"schoolName\":\"四川长江职业学院\",\"schoolCode\":4151014323,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川三河职业学院\",\"schoolCode\":4151014386,\"department\":\"四川省教育厅\",\"location\":\"泸州市\",\"level\":\"专科\"},{\"schoolName\":\"川北幼儿师范高等专科学校\",\"schoolCode\":4151014393,\"department\":\"四川省\",\"location\":\"广元市\",\"level\":\"专科\"},{\"schoolName\":\"四川卫生康复职业学院\",\"schoolCode\":4151014409,\"department\":\"四川省\",\"location\":\"自贡市\",\"level\":\"专科\"},{\"schoolName\":\"四川汽车职业技术学院\",\"schoolCode\":4151014411,\"department\":\"四川省教育厅\",\"location\":\"绵阳市\",\"level\":\"专科\"},{\"schoolName\":\"巴中职业技术学院\",\"schoolCode\":4151014483,\"department\":\"四川省教育厅\",\"location\":\"巴中市\",\"level\":\"专科\"},{\"schoolName\":\"四川希望汽车职业学院\",\"schoolCode\":4151014484,\"department\":\"四川省教育厅\",\"location\":\"资阳市\",\"level\":\"专科\"},{\"schoolName\":\"四川电子机械职业技术学院\",\"schoolCode\":4151014485,\"department\":\"四川省教育厅\",\"location\":\"绵阳市\",\"level\":\"专科\"},{\"schoolName\":\"四川文轩职业学院\",\"schoolCode\":4151014486,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"川南幼儿师范高等专科学校\",\"schoolCode\":4151014496,\"department\":\"四川省\",\"location\":\"内江市\",\"level\":\"专科\"},{\"schoolName\":\"四川护理职业学院\",\"schoolCode\":4151014513,\"department\":\"四川省\",\"location\":\"德阳市\",\"level\":\"专科\"},{\"schoolName\":\"成都工业职业技术学院\",\"schoolCode\":4151014514,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川西南航空职业学院\",\"schoolCode\":4151014515,\"department\":\"四川省教育厅\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"成都工贸职业技术学院\",\"schoolCode\":4151014547,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"四川应用技术职业学院\",\"schoolCode\":4151014548,\"department\":\"四川省教育厅\",\"location\":\"凉山彝族自治州\",\"level\":\"专科\"},{\"schoolName\":\"西昌民族幼儿师范高等专科学校\",\"schoolCode\":4151014629,\"department\":\"四川省\",\"location\":\"凉山彝族自治州\",\"level\":\"专科\"},{\"schoolName\":\"眉山药科职业学院\",\"schoolCode\":4151014640,\"department\":\"四川省教育厅\",\"location\":\"眉山市\",\"level\":\"专科\"},{\"schoolName\":\"天府新区信息职业学院\",\"schoolCode\":4151014641,\"department\":\"四川省教育厅\",\"location\":\"眉山市\",\"level\":\"专科\"},{\"schoolName\":\"德阳城市轨道交通职业学院\",\"schoolCode\":4151014642,\"department\":\"四川省教育厅\",\"location\":\"德阳市\",\"level\":\"专科\"},{\"schoolName\":\"德阳科贸职业学院\",\"schoolCode\":4151014643,\"department\":\"四川省教育厅\",\"location\":\"德阳市\",\"level\":\"专科\"},{\"schoolName\":\"江阳城建职业学院\",\"schoolCode\":4151014644,\"department\":\"四川省教育厅\",\"location\":\"泸州市\",\"level\":\"专科\"},{\"schoolName\":\"天府新区航空旅游职业学院\",\"schoolCode\":4151014645,\"department\":\"四川省教育厅\",\"location\":\"眉山市\",\"level\":\"专科\"},{\"schoolName\":\"天府新区通用航空职业学院\",\"schoolCode\":4151014646,\"department\":\"四川省教育厅\",\"location\":\"眉山市\",\"level\":\"专科\"},{\"schoolName\":\"阿坝职业学院\",\"schoolCode\":4151014647,\"department\":\"四川省\",\"location\":\"阿坝藏族羌族自治州\",\"level\":\"专科\"},{\"schoolName\":\"达州中医药职业学院\",\"schoolCode\":4151014669,\"department\":\"四川省\",\"location\":\"达州市\",\"level\":\"专科\"},{\"schoolName\":\"内江卫生与健康职业学院\",\"schoolCode\":4151014670,\"department\":\"四川省\",\"location\":\"内江市\",\"level\":\"专科\"},{\"schoolName\":\"南充科技职业学院\",\"schoolCode\":4151014671,\"department\":\"四川省教育厅\",\"location\":\"南充市\",\"level\":\"专科\"},{\"schoolName\":\"攀枝花攀西职业学院\",\"schoolCode\":4151014672,\"department\":\"四川省教育厅\",\"location\":\"攀枝花市\",\"level\":\"专科\"},{\"schoolName\":\"资阳口腔职业学院\",\"schoolCode\":4151014673,\"department\":\"四川省教育厅\",\"location\":\"资阳市\",\"level\":\"专科\"},{\"schoolName\":\"资阳环境科技职业学院\",\"schoolCode\":4151014674,\"department\":\"四川省教育厅\",\"location\":\"资阳市\",\"level\":\"专科\"},{\"schoolName\":\"南充文化旅游职业学院\",\"schoolCode\":4151014728,\"department\":\"四川省\",\"location\":\"南充市\",\"level\":\"专科\"},{\"schoolName\":\"南充电影工业职业学院\",\"schoolCode\":4151014729,\"department\":\"四川省教育厅\",\"location\":\"南充市\",\"level\":\"专科\"},{\"schoolName\":\"绵阳飞行职业学院\",\"schoolCode\":4151014730,\"department\":\"四川省教育厅\",\"location\":\"绵阳市\",\"level\":\"专科\"},{\"schoolName\":\"德阳农业科技职业学院\",\"schoolCode\":4151014731,\"department\":\"四川省教育厅\",\"location\":\"德阳市\",\"level\":\"专科\"},{\"schoolName\":\"泸州医疗器械职业学院\",\"schoolCode\":4151014732,\"department\":\"四川省教育厅\",\"location\":\"泸州市\",\"level\":\"专科\"},{\"schoolName\":\"广元中核职业技术学院\",\"schoolCode\":4251050881,\"department\":\"四川省教育厅\",\"location\":\"广元市\",\"level\":\"专科\"},{\"schoolName\":\"四川体育职业学院\",\"schoolCode\":4251051351,\"department\":\"四川省\",\"location\":\"成都市\",\"level\":\"专科\"},{\"schoolName\":\"贵州大学\",\"schoolCode\":4152010657,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州医科大学\",\"schoolCode\":4152010660,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"遵义医科大学\",\"schoolCode\":4152010661,\"department\":\"贵州省\",\"location\":\"遵义市\",\"level\":\"本科\"},{\"schoolName\":\"贵州中医药大学\",\"schoolCode\":4152010662,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州师范大学\",\"schoolCode\":4152010663,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"遵义师范学院\",\"schoolCode\":4152010664,\"department\":\"贵州省\",\"location\":\"遵义市\",\"level\":\"本科\"},{\"schoolName\":\"铜仁学院\",\"schoolCode\":4152010665,\"department\":\"贵州省\",\"location\":\"铜仁市\",\"level\":\"本科\"},{\"schoolName\":\"兴义民族师范学院\",\"schoolCode\":4152010666,\"department\":\"贵州省\",\"location\":\"黔西南布依族苗族自治州\",\"level\":\"本科\"},{\"schoolName\":\"安顺学院\",\"schoolCode\":4152010667,\"department\":\"贵州省\",\"location\":\"安顺市\",\"level\":\"本科\"},{\"schoolName\":\"贵州工程应用技术学院\",\"schoolCode\":4152010668,\"department\":\"贵州省\",\"location\":\"毕节市\",\"level\":\"本科\"},{\"schoolName\":\"凯里学院\",\"schoolCode\":4152010669,\"department\":\"贵州省\",\"location\":\"黔东南苗族侗族自治州\",\"level\":\"本科\"},{\"schoolName\":\"黔南民族师范学院\",\"schoolCode\":4152010670,\"department\":\"贵州省\",\"location\":\"黔南布依族苗族自治州\",\"level\":\"本科\"},{\"schoolName\":\"贵州财经大学\",\"schoolCode\":4152010671,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州民族大学\",\"schoolCode\":4152010672,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵阳学院\",\"schoolCode\":4152010976,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"六盘水师范学院\",\"schoolCode\":4152010977,\"department\":\"贵州省\",\"location\":\"六盘水市\",\"level\":\"本科\"},{\"schoolName\":\"贵州商学院\",\"schoolCode\":4152011731,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州警察学院\",\"schoolCode\":4152012107,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州中医药大学时珍学院\",\"schoolCode\":4152013647,\"department\":\"贵州省教育厅\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州财经大学商务学院\",\"schoolCode\":4152013648,\"department\":\"贵州省教育厅\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州大学科技学院\",\"schoolCode\":4152013649,\"department\":\"贵州省教育厅\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州大学明德学院\",\"schoolCode\":4152013650,\"department\":\"贵州省教育厅\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州民族大学人文科技学院\",\"schoolCode\":4152013651,\"department\":\"贵州省教育厅\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州师范大学求是学院\",\"schoolCode\":4152013652,\"department\":\"贵州省教育厅\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"遵义医科大学医学与科技学院\",\"schoolCode\":4152013653,\"department\":\"贵州省教育厅\",\"location\":\"遵义市\",\"level\":\"本科\"},{\"schoolName\":\"贵州医科大学神奇民族医药学院\",\"schoolCode\":4152013676,\"department\":\"贵州省教育厅\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州师范学院\",\"schoolCode\":4152014223,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"贵州理工学院\",\"schoolCode\":4152014440,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"本科\"},{\"schoolName\":\"茅台学院\",\"schoolCode\":4152014625,\"department\":\"贵州省教育厅\",\"location\":\"遵义市\",\"level\":\"本科\"},{\"schoolName\":\"黔南民族医学高等专科学校\",\"schoolCode\":4152011663,\"department\":\"贵州省\",\"location\":\"黔南布依族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"贵州交通职业技术学院\",\"schoolCode\":4152012222,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵州航天职业技术学院\",\"schoolCode\":4152012223,\"department\":\"贵州省\",\"location\":\"遵义市\",\"level\":\"专科\"},{\"schoolName\":\"贵州电子信息职业技术学院\",\"schoolCode\":4152012336,\"department\":\"贵州省\",\"location\":\"黔东南苗族侗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"安顺职业技术学院\",\"schoolCode\":4152012821,\"department\":\"贵州省\",\"location\":\"安顺市\",\"level\":\"专科\"},{\"schoolName\":\"黔东南民族职业技术学院\",\"schoolCode\":4152012822,\"department\":\"贵州省\",\"location\":\"黔东南苗族侗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"黔南民族职业技术学院\",\"schoolCode\":4152012823,\"department\":\"贵州省\",\"location\":\"黔南布依族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"遵义职业技术学院\",\"schoolCode\":4152012824,\"department\":\"贵州省\",\"location\":\"遵义市\",\"level\":\"专科\"},{\"schoolName\":\"贵州城市职业学院\",\"schoolCode\":4152012850,\"department\":\"贵州省教育厅\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵州工业职业技术学院\",\"schoolCode\":4152013052,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵州电力职业技术学院\",\"schoolCode\":4152013053,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"六盘水职业技术学院\",\"schoolCode\":4152013054,\"department\":\"贵州省\",\"location\":\"六盘水市\",\"level\":\"专科\"},{\"schoolName\":\"铜仁职业技术学院\",\"schoolCode\":4152013055,\"department\":\"贵州省\",\"location\":\"铜仁市\",\"level\":\"专科\"},{\"schoolName\":\"黔西南民族职业技术学院\",\"schoolCode\":4152013817,\"department\":\"贵州省\",\"location\":\"黔西南布依族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"贵州轻工职业技术学院\",\"schoolCode\":4152013818,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"遵义医药高等专科学校\",\"schoolCode\":4152014011,\"department\":\"贵州省\",\"location\":\"遵义市\",\"level\":\"专科\"},{\"schoolName\":\"贵阳护理职业学院\",\"schoolCode\":4152014083,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵阳职业技术学院\",\"schoolCode\":4152014129,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"毕节职业技术学院\",\"schoolCode\":4152014198,\"department\":\"贵州省\",\"location\":\"毕节市\",\"level\":\"专科\"},{\"schoolName\":\"贵州职业技术学院\",\"schoolCode\":4152014252,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵州盛华职业学院\",\"schoolCode\":4152014371,\"department\":\"贵州省教育厅\",\"location\":\"黔南布依族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"贵州工商职业学院\",\"schoolCode\":4152014412,\"department\":\"贵州省教育厅\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵阳幼儿师范高等专科学校\",\"schoolCode\":4152014469,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"铜仁幼儿师范高等专科学校\",\"schoolCode\":4152014470,\"department\":\"贵州省\",\"location\":\"铜仁市\",\"level\":\"专科\"},{\"schoolName\":\"黔南民族幼儿师范高等专科学校\",\"schoolCode\":4152014497,\"department\":\"贵州省\",\"location\":\"黔南布依族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"毕节医学高等专科学校\",\"schoolCode\":4152014499,\"department\":\"贵州省\",\"location\":\"毕节市\",\"level\":\"专科\"},{\"schoolName\":\"贵州建设职业技术学院\",\"schoolCode\":4152014516,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"毕节幼儿师范高等专科学校\",\"schoolCode\":4152014538,\"department\":\"贵州省\",\"location\":\"毕节市\",\"level\":\"专科\"},{\"schoolName\":\"贵州农业职业学院\",\"schoolCode\":4152014549,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵州工程职业学院\",\"schoolCode\":4152014558,\"department\":\"贵州省教育厅\",\"location\":\"铜仁市\",\"level\":\"专科\"},{\"schoolName\":\"贵州工贸职业学院\",\"schoolCode\":4152014559,\"department\":\"贵州省教育厅\",\"location\":\"毕节市\",\"level\":\"专科\"},{\"schoolName\":\"贵州水利水电职业技术学院\",\"schoolCode\":4152014577,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵州电子商务职业技术学院\",\"schoolCode\":4152014578,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵州应用技术职业学院\",\"schoolCode\":4152014579,\"department\":\"贵州省教育厅\",\"location\":\"黔南布依族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"贵州电子科技职业学院\",\"schoolCode\":4152014580,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵州装备制造职业学院\",\"schoolCode\":4152014613,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵州健康职业学院\",\"schoolCode\":4152014614,\"department\":\"贵州省\",\"location\":\"铜仁市\",\"level\":\"专科\"},{\"schoolName\":\"贵州食品工程职业学院\",\"schoolCode\":4152014615,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵州经贸职业技术学院\",\"schoolCode\":4152014616,\"department\":\"贵州省\",\"location\":\"黔南布依族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"贵州护理职业技术学院\",\"schoolCode\":4152014617,\"department\":\"贵州省\",\"location\":\"黔南布依族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"六盘水幼儿师范高等专科学校\",\"schoolCode\":4152014630,\"department\":\"贵州省\",\"location\":\"六盘水市\",\"level\":\"专科\"},{\"schoolName\":\"毕节工业职业技术学院\",\"schoolCode\":4152014648,\"department\":\"贵州省\",\"location\":\"毕节市\",\"level\":\"专科\"},{\"schoolName\":\"贵州机电职业技术学院\",\"schoolCode\":4152014733,\"department\":\"贵州省\",\"location\":\"黔南布依族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"贵州财经职业学院\",\"schoolCode\":4152014734,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"贵州民用航空职业学院\",\"schoolCode\":4152014735,\"department\":\"贵州省教育厅\",\"location\":\"安顺市\",\"level\":\"专科\"},{\"schoolName\":\"贵州航空职业技术学院\",\"schoolCode\":4252050963,\"department\":\"贵州省\",\"location\":\"贵阳市\",\"level\":\"专科\"},{\"schoolName\":\"云南大学\",\"schoolCode\":4153010673,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"昆明理工大学\",\"schoolCode\":4153010674,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"云南农业大学\",\"schoolCode\":4153010676,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"西南林业大学\",\"schoolCode\":4153010677,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"昆明医科大学\",\"schoolCode\":4153010678,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"大理大学\",\"schoolCode\":4153010679,\"department\":\"云南省\",\"location\":\"大理白族自治州\",\"level\":\"本科\"},{\"schoolName\":\"云南中医药大学\",\"schoolCode\":4153010680,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"云南师范大学\",\"schoolCode\":4153010681,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"昭通学院\",\"schoolCode\":4153010683,\"department\":\"云南省\",\"location\":\"昭通市\",\"level\":\"本科\"},{\"schoolName\":\"曲靖师范学院\",\"schoolCode\":4153010684,\"department\":\"云南省\",\"location\":\"曲靖市\",\"level\":\"本科\"},{\"schoolName\":\"普洱学院\",\"schoolCode\":4153010685,\"department\":\"云南省\",\"location\":\"普洱市\",\"level\":\"本科\"},{\"schoolName\":\"保山学院\",\"schoolCode\":4153010686,\"department\":\"云南省\",\"location\":\"保山市\",\"level\":\"本科\"},{\"schoolName\":\"红河学院\",\"schoolCode\":4153010687,\"department\":\"云南省\",\"location\":\"红河哈尼族彝族自治州\",\"level\":\"本科\"},{\"schoolName\":\"云南财经大学\",\"schoolCode\":4153010689,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"云南艺术学院\",\"schoolCode\":4153010690,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"云南民族大学\",\"schoolCode\":4153010691,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"玉溪师范学院\",\"schoolCode\":4153011390,\"department\":\"云南省\",\"location\":\"玉溪市\",\"level\":\"本科\"},{\"schoolName\":\"楚雄师范学院\",\"schoolCode\":4153011391,\"department\":\"云南省\",\"location\":\"楚雄彝族自治州\",\"level\":\"本科\"},{\"schoolName\":\"云南警官学院\",\"schoolCode\":4153011392,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"昆明学院\",\"schoolCode\":4153011393,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"文山学院\",\"schoolCode\":4153011556,\"department\":\"云南省\",\"location\":\"文山壮族苗族自治州\",\"level\":\"本科\"},{\"schoolName\":\"云南经济管理学院\",\"schoolCode\":4153012560,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"云南大学滇池学院\",\"schoolCode\":4153013326,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"云南大学旅游文化学院\",\"schoolCode\":4153013328,\"department\":\"云南省教育厅\",\"location\":\"丽江市\",\"level\":\"本科\"},{\"schoolName\":\"昆明理工大学津桥学院\",\"schoolCode\":4153013329,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"云南师范大学商学院\",\"schoolCode\":4153013330,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"云南师范大学文理学院\",\"schoolCode\":4153013331,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"昆明医科大学海源学院\",\"schoolCode\":4153013332,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"云南艺术学院文华学院\",\"schoolCode\":4153013333,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"云南工商学院\",\"schoolCode\":4153013909,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"本科\"},{\"schoolName\":\"滇西科技师范学院\",\"schoolCode\":4153014092,\"department\":\"云南省\",\"location\":\"临沧市\",\"level\":\"本科\"},{\"schoolName\":\"滇西应用技术大学\",\"schoolCode\":4153014623,\"department\":\"云南省\",\"location\":\"大理市\",\"level\":\"本科\"},{\"schoolName\":\"昆明冶金高等专科学校\",\"schoolCode\":4153011557,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南国土资源职业学院\",\"schoolCode\":4153012349,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南交通职业技术学院\",\"schoolCode\":4153012357,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"昆明工业职业技术学院\",\"schoolCode\":4153012393,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南农业职业技术学院\",\"schoolCode\":4153012555,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南司法警官职业学院\",\"schoolCode\":4153012556,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南文化艺术职业学院\",\"schoolCode\":4153012558,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南体育运动职业技术学院\",\"schoolCode\":4153012559,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南科技信息职业学院\",\"schoolCode\":4153012825,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"西双版纳职业技术学院\",\"schoolCode\":4153012826,\"department\":\"云南省\",\"location\":\"西双版纳傣族自治州\",\"level\":\"专科\"},{\"schoolName\":\"昆明艺术职业学院\",\"schoolCode\":4153012851,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"玉溪农业职业技术学院\",\"schoolCode\":4153012971,\"department\":\"云南省\",\"location\":\"玉溪市\",\"level\":\"专科\"},{\"schoolName\":\"云南能源职业技术学院\",\"schoolCode\":4153013136,\"department\":\"云南省\",\"location\":\"曲靖市\",\"level\":\"专科\"},{\"schoolName\":\"云南国防工业职业技术学院\",\"schoolCode\":4153013756,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南机电职业技术学院\",\"schoolCode\":4153013757,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南林业职业技术学院\",\"schoolCode\":4153013758,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南城市建设职业学院\",\"schoolCode\":4153013759,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南工程职业学院\",\"schoolCode\":4153013761,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"曲靖医学高等专科学校\",\"schoolCode\":4153014012,\"department\":\"云南省\",\"location\":\"曲靖市\",\"level\":\"专科\"},{\"schoolName\":\"楚雄医药高等专科学校\",\"schoolCode\":4153014013,\"department\":\"云南省\",\"location\":\"楚雄彝族自治州\",\"level\":\"专科\"},{\"schoolName\":\"保山中医药高等专科学校\",\"schoolCode\":4153014014,\"department\":\"云南省\",\"location\":\"保山市\",\"level\":\"专科\"},{\"schoolName\":\"丽江师范高等专科学校\",\"schoolCode\":4153014015,\"department\":\"云南省\",\"location\":\"丽江市\",\"level\":\"专科\"},{\"schoolName\":\"德宏师范高等专科学校\",\"schoolCode\":4153014016,\"department\":\"云南省\",\"location\":\"德宏傣族景颇族自治州\",\"level\":\"专科\"},{\"schoolName\":\"云南新兴职业学院\",\"schoolCode\":4153014032,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南锡业职业技术学院\",\"schoolCode\":4153014130,\"department\":\"云南省\",\"location\":\"红河哈尼族彝族自治州\",\"level\":\"专科\"},{\"schoolName\":\"云南经贸外事职业学院\",\"schoolCode\":4153014212,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南三鑫职业技术学院\",\"schoolCode\":4153014239,\"department\":\"云南省教育厅\",\"location\":\"文山壮族苗族自治州\",\"level\":\"专科\"},{\"schoolName\":\"德宏职业学院\",\"schoolCode\":4153014253,\"department\":\"云南省\",\"location\":\"德宏傣族景颇族自治州\",\"level\":\"专科\"},{\"schoolName\":\"云南商务职业学院\",\"schoolCode\":4153014317,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"昆明卫生职业学院\",\"schoolCode\":4153014372,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南现代职业技术学院\",\"schoolCode\":4153014373,\"department\":\"云南省\",\"location\":\"楚雄彝族自治州\",\"level\":\"专科\"},{\"schoolName\":\"云南旅游职业学院\",\"schoolCode\":4153014381,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"红河卫生职业学院\",\"schoolCode\":4153014413,\"department\":\"云南省\",\"location\":\"红河哈尼族彝族自治州\",\"level\":\"专科\"},{\"schoolName\":\"云南外事外语职业学院\",\"schoolCode\":4153014415,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"大理农林职业技术学院\",\"schoolCode\":4153014487,\"department\":\"云南省\",\"location\":\"大理白族自治州\",\"level\":\"专科\"},{\"schoolName\":\"公安消防部队高等专科学校\",\"schoolCode\":4153014534,\"department\":\"应急管理部\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南财经职业学院\",\"schoolCode\":4153014550,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"昆明铁道职业技术学院\",\"schoolCode\":4153014581,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"昭通卫生职业学院\",\"schoolCode\":4153014582,\"department\":\"云南省\",\"location\":\"昭通市\",\"level\":\"专科\"},{\"schoolName\":\"大理护理职业学院\",\"schoolCode\":4153014583,\"department\":\"云南省\",\"location\":\"大理白族自治州\",\"level\":\"专科\"},{\"schoolName\":\"云南水利水电职业学院\",\"schoolCode\":4153014584,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南轻纺职业学院\",\"schoolCode\":4153014618,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南特殊教育职业学院\",\"schoolCode\":4153014619,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南工贸职业技术学院\",\"schoolCode\":4153014620,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南交通运输职业学院\",\"schoolCode\":4153014621,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"昆明幼儿师范高等专科学校\",\"schoolCode\":4153014631,\"department\":\"云南省\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南医药健康职业学院\",\"schoolCode\":4153014649,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"云南理工职业学院\",\"schoolCode\":4153014675,\"department\":\"云南省教育厅\",\"location\":\"昆明市\",\"level\":\"专科\"},{\"schoolName\":\"曲靖职业技术学院\",\"schoolCode\":4153014676,\"department\":\"云南省\",\"location\":\"曲靖市\",\"level\":\"专科\"},{\"schoolName\":\"红河职业技术学院\",\"schoolCode\":4153014736,\"department\":\"云南省\",\"location\":\"红河州\",\"level\":\"专科\"},{\"schoolName\":\"西藏农牧学院\",\"schoolCode\":4154010693,\"department\":\"西藏自治区\",\"location\":\"林芝市\",\"level\":\"本科\"},{\"schoolName\":\"西藏大学\",\"schoolCode\":4154010694,\"department\":\"西藏自治区\",\"location\":\"拉萨市\",\"level\":\"本科\"},{\"schoolName\":\"西藏民族大学\",\"schoolCode\":4154010695,\"department\":\"西藏自治区\",\"location\":\"咸阳市\",\"level\":\"本科\"},{\"schoolName\":\"西藏藏医药大学\",\"schoolCode\":4154010696,\"department\":\"西藏自治区\",\"location\":\"拉萨市\",\"level\":\"本科\"},{\"schoolName\":\"西藏警官高等专科学校\",\"schoolCode\":4154010692,\"department\":\"西藏自治区\",\"location\":\"拉萨市\",\"level\":\"专科\"},{\"schoolName\":\"拉萨师范高等专科学校\",\"schoolCode\":4154012481,\"department\":\"西藏自治区\",\"location\":\"拉萨市\",\"level\":\"专科\"},{\"schoolName\":\"西藏职业技术学院\",\"schoolCode\":4154014085,\"department\":\"西藏自治区\",\"location\":\"拉萨市\",\"level\":\"专科\"},{\"schoolName\":\"西北大学\",\"schoolCode\":4161010697,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安交通大学\",\"schoolCode\":4161010698,\"department\":\"教育部\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西北工业大学\",\"schoolCode\":4161010699,\"department\":\"工业和信息化部\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安理工大学\",\"schoolCode\":4161010700,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安电子科技大学\",\"schoolCode\":4161010701,\"department\":\"教育部\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安工业大学\",\"schoolCode\":4161010702,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安建筑科技大学\",\"schoolCode\":4161010703,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安科技大学\",\"schoolCode\":4161010704,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安石油大学\",\"schoolCode\":4161010705,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"陕西科技大学\",\"schoolCode\":4161010708,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安工程大学\",\"schoolCode\":4161010709,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"长安大学\",\"schoolCode\":4161010710,\"department\":\"教育部\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西北农林科技大学\",\"schoolCode\":4161010712,\"department\":\"教育部\",\"location\":\"咸阳市\",\"level\":\"本科\"},{\"schoolName\":\"陕西中医药大学\",\"schoolCode\":4161010716,\"department\":\"陕西省\",\"location\":\"咸阳市\",\"level\":\"本科\"},{\"schoolName\":\"陕西师范大学\",\"schoolCode\":4161010718,\"department\":\"教育部\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"延安大学\",\"schoolCode\":4161010719,\"department\":\"陕西省\",\"location\":\"延安市\",\"level\":\"本科\"},{\"schoolName\":\"陕西理工大学\",\"schoolCode\":4161010720,\"department\":\"陕西省\",\"location\":\"汉中市\",\"level\":\"本科\"},{\"schoolName\":\"宝鸡文理学院\",\"schoolCode\":4161010721,\"department\":\"陕西省\",\"location\":\"宝鸡市\",\"level\":\"本科\"},{\"schoolName\":\"咸阳师范学院\",\"schoolCode\":4161010722,\"department\":\"陕西省\",\"location\":\"咸阳市\",\"level\":\"本科\"},{\"schoolName\":\"渭南师范学院\",\"schoolCode\":4161010723,\"department\":\"陕西省\",\"location\":\"渭南市\",\"level\":\"本科\"},{\"schoolName\":\"西安外国语大学\",\"schoolCode\":4161010724,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西北政法大学\",\"schoolCode\":4161010726,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安体育学院\",\"schoolCode\":4161010727,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安音乐学院\",\"schoolCode\":4161010728,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安美术学院\",\"schoolCode\":4161010729,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安文理学院\",\"schoolCode\":4161011080,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"榆林学院\",\"schoolCode\":4161011395,\"department\":\"陕西省\",\"location\":\"榆林市\",\"level\":\"本科\"},{\"schoolName\":\"商洛学院\",\"schoolCode\":4161011396,\"department\":\"陕西省\",\"location\":\"商洛市\",\"level\":\"本科\"},{\"schoolName\":\"安康学院\",\"schoolCode\":4161011397,\"department\":\"陕西省\",\"location\":\"安康市\",\"level\":\"本科\"},{\"schoolName\":\"西安培华学院\",\"schoolCode\":4161011400,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安财经大学\",\"schoolCode\":4161011560,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安邮电大学\",\"schoolCode\":4161011664,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安航空学院\",\"schoolCode\":4161011736,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安医学院\",\"schoolCode\":4161011840,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安欧亚学院\",\"schoolCode\":4161012712,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安外事学院\",\"schoolCode\":4161012713,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安翻译学院\",\"schoolCode\":4161012714,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西京学院\",\"schoolCode\":4161012715,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安思源学院\",\"schoolCode\":4161013121,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"陕西国际商贸学院\",\"schoolCode\":4161013123,\"department\":\"陕西省教育厅\",\"location\":\"咸阳市\",\"level\":\"本科\"},{\"schoolName\":\"陕西服装工程学院\",\"schoolCode\":4161013125,\"department\":\"陕西省教育厅\",\"location\":\"咸阳市\",\"level\":\"本科\"},{\"schoolName\":\"西安交通工程学院\",\"schoolCode\":4161013569,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安交通大学城市学院\",\"schoolCode\":4161013677,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西北大学现代学院\",\"schoolCode\":4161013678,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安建筑科技大学华清学院\",\"schoolCode\":4161013679,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安财经大学行知学院\",\"schoolCode\":4161013680,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"陕西科技大学镐京学院\",\"schoolCode\":4161013681,\"department\":\"陕西省教育厅\",\"location\":\"咸阳市\",\"level\":\"本科\"},{\"schoolName\":\"西安工商学院\",\"schoolCode\":4161013682,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"延安大学西安创新学院\",\"schoolCode\":4161013683,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安电子科技大学长安学院\",\"schoolCode\":4161013685,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安汽车职业大学\",\"schoolCode\":4161013738,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安明德理工学院\",\"schoolCode\":4161013894,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安信息职业大学\",\"schoolCode\":4161014030,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"长安大学兴华学院\",\"schoolCode\":4161014034,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安理工大学高科学院\",\"schoolCode\":4161014041,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"西安科技大学高新学院\",\"schoolCode\":4161014042,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"陕西学前师范学院\",\"schoolCode\":4161014390,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"本科\"},{\"schoolName\":\"陕西工业职业技术学院\",\"schoolCode\":4161010828,\"department\":\"陕西省\",\"location\":\"咸阳市\",\"level\":\"专科\"},{\"schoolName\":\"杨凌职业技术学院\",\"schoolCode\":4161010966,\"department\":\"陕西省\",\"location\":\"咸阳市\",\"level\":\"专科\"},{\"schoolName\":\"西安电力高等专科学校\",\"schoolCode\":4161011826,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"陕西能源职业技术学院\",\"schoolCode\":4161012510,\"department\":\"陕西省\",\"location\":\"咸阳市\",\"level\":\"专科\"},{\"schoolName\":\"陕西国防工业职业技术学院\",\"schoolCode\":4161012827,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"西安航空职业技术学院\",\"schoolCode\":4161012828,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"陕西财经职业技术学院\",\"schoolCode\":4161012829,\"department\":\"陕西省\",\"location\":\"咸阳市\",\"level\":\"专科\"},{\"schoolName\":\"陕西交通职业技术学院\",\"schoolCode\":4161012830,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"陕西职业技术学院\",\"schoolCode\":4161012831,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"西安高新科技职业学院\",\"schoolCode\":4161013122,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"西安城市建设职业学院\",\"schoolCode\":4161013124,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"陕西铁路工程职业技术学院\",\"schoolCode\":4161013566,\"department\":\"陕西省\",\"location\":\"渭南市\",\"level\":\"专科\"},{\"schoolName\":\"宝鸡职业技术学院\",\"schoolCode\":4161013567,\"department\":\"陕西省\",\"location\":\"宝鸡市\",\"level\":\"专科\"},{\"schoolName\":\"陕西航空职业技术学院\",\"schoolCode\":4161013568,\"department\":\"陕西省\",\"location\":\"汉中市\",\"level\":\"专科\"},{\"schoolName\":\"陕西电子信息职业技术学院\",\"schoolCode\":4161013570,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"陕西邮电职业技术学院\",\"schoolCode\":4161013736,\"department\":\"陕西省\",\"location\":\"咸阳市\",\"level\":\"专科\"},{\"schoolName\":\"西安海棠职业学院\",\"schoolCode\":4161013737,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"西安健康工程职业学院\",\"schoolCode\":4161013739,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"陕西警官职业学院\",\"schoolCode\":4161013819,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"陕西经济管理职业技术学院\",\"schoolCode\":4161013932,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"西安铁路职业技术学院\",\"schoolCode\":4161013945,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"咸阳职业技术学院\",\"schoolCode\":4161013946,\"department\":\"陕西省\",\"location\":\"咸阳市\",\"level\":\"专科\"},{\"schoolName\":\"西安职业技术学院\",\"schoolCode\":4161013947,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"商洛职业技术学院\",\"schoolCode\":4161013948,\"department\":\"陕西省\",\"location\":\"商洛市\",\"level\":\"专科\"},{\"schoolName\":\"汉中职业技术学院\",\"schoolCode\":4161013949,\"department\":\"陕西省\",\"location\":\"汉中市\",\"level\":\"专科\"},{\"schoolName\":\"延安职业技术学院\",\"schoolCode\":4161013950,\"department\":\"陕西省\",\"location\":\"延安市\",\"level\":\"专科\"},{\"schoolName\":\"渭南职业技术学院\",\"schoolCode\":4161013951,\"department\":\"陕西省\",\"location\":\"渭南市\",\"level\":\"专科\"},{\"schoolName\":\"安康职业技术学院\",\"schoolCode\":4161013952,\"department\":\"陕西省\",\"location\":\"安康市\",\"level\":\"专科\"},{\"schoolName\":\"铜川职业技术学院\",\"schoolCode\":4161013953,\"department\":\"陕西省\",\"location\":\"铜川市\",\"level\":\"专科\"},{\"schoolName\":\"陕西青年职业学院\",\"schoolCode\":4161014028,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"陕西工商职业学院\",\"schoolCode\":4161014029,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"陕西旅游烹饪职业学院\",\"schoolCode\":4161014031,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"西安医学高等专科学校\",\"schoolCode\":4161014222,\"department\":\"陕西省教育厅\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"榆林职业技术学院\",\"schoolCode\":4161014318,\"department\":\"陕西省\",\"location\":\"榆林市\",\"level\":\"专科\"},{\"schoolName\":\"陕西艺术职业学院\",\"schoolCode\":4161014488,\"department\":\"陕西省\",\"location\":\"西安市\",\"level\":\"专科\"},{\"schoolName\":\"神木职业技术学院\",\"schoolCode\":4161014650,\"department\":\"陕西省\",\"location\":\"神木市\",\"level\":\"专科\"},{\"schoolName\":\"宝鸡三和职业学院\",\"schoolCode\":4161014651,\"department\":\"陕西省教育厅\",\"location\":\"宝鸡市\",\"level\":\"专科\"},{\"schoolName\":\"榆林能源科技职业学院\",\"schoolCode\":4161014737,\"department\":\"陕西省教育厅\",\"location\":\"榆林市\",\"level\":\"专科\"},{\"schoolName\":\"陕西机电职业技术学院\",\"schoolCode\":4261050084,\"department\":\"陕西省\",\"location\":\"宝鸡市\",\"level\":\"专科\"},{\"schoolName\":\"兰州大学\",\"schoolCode\":4162010730,\"department\":\"教育部\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"兰州理工大学\",\"schoolCode\":4162010731,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"兰州交通大学\",\"schoolCode\":4162010732,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"甘肃农业大学\",\"schoolCode\":4162010733,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"甘肃中医药大学\",\"schoolCode\":4162010735,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"西北师范大学\",\"schoolCode\":4162010736,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"兰州城市学院\",\"schoolCode\":4162010737,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"陇东学院\",\"schoolCode\":4162010738,\"department\":\"甘肃省\",\"location\":\"庆阳市\",\"level\":\"本科\"},{\"schoolName\":\"天水师范学院\",\"schoolCode\":4162010739,\"department\":\"甘肃省\",\"location\":\"天水市\",\"level\":\"本科\"},{\"schoolName\":\"河西学院\",\"schoolCode\":4162010740,\"department\":\"甘肃省\",\"location\":\"张掖市\",\"level\":\"本科\"},{\"schoolName\":\"兰州财经大学\",\"schoolCode\":4162010741,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"西北民族大学\",\"schoolCode\":4162010742,\"department\":\"国家民委\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"甘肃政法大学\",\"schoolCode\":4162011406,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"甘肃民族师范学院\",\"schoolCode\":4162011561,\"department\":\"甘肃省\",\"location\":\"甘南藏族自治州\",\"level\":\"本科\"},{\"schoolName\":\"兰州文理学院\",\"schoolCode\":4162011562,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"甘肃医学院\",\"schoolCode\":4162011805,\"department\":\"甘肃省\",\"location\":\"平凉市\",\"level\":\"本科\"},{\"schoolName\":\"兰州工业学院\",\"schoolCode\":4162011807,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"西北师范大学知行学院\",\"schoolCode\":4162013510,\"department\":\"甘肃省教育厅\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"兰州财经大学陇桥学院\",\"schoolCode\":4162013511,\"department\":\"甘肃省教育厅\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"兰州财经大学长青学院\",\"schoolCode\":4162013512,\"department\":\"甘肃省教育厅\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"兰州交通大学博文学院\",\"schoolCode\":4162013514,\"department\":\"甘肃省教育厅\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"兰州理工大学技术工程学院\",\"schoolCode\":4162013515,\"department\":\"甘肃省教育厅\",\"location\":\"兰州市\",\"level\":\"本科\"},{\"schoolName\":\"兰州石化职业技术学院\",\"schoolCode\":4162010838,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"陇南师范高等专科学校\",\"schoolCode\":4162011806,\"department\":\"甘肃省\",\"location\":\"陇南市\",\"level\":\"专科\"},{\"schoolName\":\"定西师范高等专科学校\",\"schoolCode\":4162011808,\"department\":\"甘肃省\",\"location\":\"定西市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃建筑职业技术学院\",\"schoolCode\":4162012511,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"酒泉职业技术学院\",\"schoolCode\":4162012539,\"department\":\"甘肃省\",\"location\":\"酒泉市\",\"level\":\"专科\"},{\"schoolName\":\"兰州外语职业学院\",\"schoolCode\":4162012832,\"department\":\"甘肃省教育厅\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"兰州职业技术学院\",\"schoolCode\":4162012833,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃警察职业学院\",\"schoolCode\":4162012834,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃林业职业技术学院\",\"schoolCode\":4162012835,\"department\":\"甘肃省\",\"location\":\"天水市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃工业职业技术学院\",\"schoolCode\":4162012836,\"department\":\"甘肃省\",\"location\":\"天水市\",\"level\":\"专科\"},{\"schoolName\":\"武威职业学院\",\"schoolCode\":4162013518,\"department\":\"甘肃省\",\"location\":\"武威市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃交通职业技术学院\",\"schoolCode\":4162013519,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"兰州资源环境职业技术学院\",\"schoolCode\":4162013933,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃农业职业技术学院\",\"schoolCode\":4162013954,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃畜牧工程职业技术学院\",\"schoolCode\":4162013955,\"department\":\"甘肃省\",\"location\":\"武威市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃钢铁职业技术学院\",\"schoolCode\":4162014131,\"department\":\"甘肃省\",\"location\":\"嘉峪关市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃机电职业技术学院\",\"schoolCode\":4162014319,\"department\":\"甘肃省\",\"location\":\"天水市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃有色冶金职业技术学院\",\"schoolCode\":4162014375,\"department\":\"甘肃省\",\"location\":\"金昌市\",\"level\":\"专科\"},{\"schoolName\":\"白银矿冶职业技术学院\",\"schoolCode\":4162014376,\"department\":\"甘肃省\",\"location\":\"白银市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃卫生职业学院\",\"schoolCode\":4162014517,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"兰州科技职业学院\",\"schoolCode\":4162014518,\"department\":\"甘肃省教育厅\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"庆阳职业技术学院\",\"schoolCode\":4162014551,\"department\":\"甘肃省\",\"location\":\"庆阳市\",\"level\":\"专科\"},{\"schoolName\":\"临夏现代职业学院\",\"schoolCode\":4162014552,\"department\":\"甘肃省\",\"location\":\"临夏州\",\"level\":\"专科\"},{\"schoolName\":\"甘肃能源化工职业学院\",\"schoolCode\":4162014593,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"兰州现代职业学院\",\"schoolCode\":4162014594,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"平凉职业技术学院\",\"schoolCode\":4162014595,\"department\":\"甘肃省\",\"location\":\"平凉市\",\"level\":\"专科\"},{\"schoolName\":\"培黎职业学院\",\"schoolCode\":4162014738,\"department\":\"甘肃省\",\"location\":\"张掖市\",\"level\":\"专科\"},{\"schoolName\":\"甘肃财贸职业学院\",\"schoolCode\":4262051378,\"department\":\"甘肃省\",\"location\":\"兰州市\",\"level\":\"专科\"},{\"schoolName\":\"青海大学\",\"schoolCode\":4163010743,\"department\":\"青海省\",\"location\":\"西宁市\",\"level\":\"本科\"},{\"schoolName\":\"青海师范大学\",\"schoolCode\":4163010746,\"department\":\"青海省\",\"location\":\"西宁市\",\"level\":\"本科\"},{\"schoolName\":\"青海民族大学\",\"schoolCode\":4163010748,\"department\":\"青海省\",\"location\":\"西宁市\",\"level\":\"本科\"},{\"schoolName\":\"青海大学昆仑学院\",\"schoolCode\":4163013674,\"department\":\"青海省教育厅\",\"location\":\"西宁市\",\"level\":\"本科\"},{\"schoolName\":\"青海卫生职业技术学院\",\"schoolCode\":4163012562,\"department\":\"青海省\",\"location\":\"西宁市\",\"level\":\"专科\"},{\"schoolName\":\"青海警官职业学院\",\"schoolCode\":4163012852,\"department\":\"青海省\",\"location\":\"西宁市\",\"level\":\"专科\"},{\"schoolName\":\"青海畜牧兽医职业技术学院\",\"schoolCode\":4163012972,\"department\":\"青海省\",\"location\":\"西宁市\",\"level\":\"专科\"},{\"schoolName\":\"青海交通职业技术学院\",\"schoolCode\":4163012973,\"department\":\"青海省\",\"location\":\"西宁市\",\"level\":\"专科\"},{\"schoolName\":\"青海建筑职业技术学院\",\"schoolCode\":4163012974,\"department\":\"青海省\",\"location\":\"西宁市\",\"level\":\"专科\"},{\"schoolName\":\"西宁城市职业技术学院\",\"schoolCode\":4163014519,\"department\":\"青海省\",\"location\":\"西宁市\",\"level\":\"专科\"},{\"schoolName\":\"青海高等职业技术学院\",\"schoolCode\":4163014520,\"department\":\"青海省\",\"location\":\"海东市\",\"level\":\"专科\"},{\"schoolName\":\"青海柴达木职业技术学院\",\"schoolCode\":4163014521,\"department\":\"青海省\",\"location\":\"海西蒙古族藏族自治州\",\"level\":\"专科\"},{\"schoolName\":\"宁夏大学\",\"schoolCode\":4164010749,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"本科\"},{\"schoolName\":\"宁夏医科大学\",\"schoolCode\":4164010752,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"本科\"},{\"schoolName\":\"宁夏师范学院\",\"schoolCode\":4164010753,\"department\":\"宁夏回族自治区\",\"location\":\"固原市\",\"level\":\"本科\"},{\"schoolName\":\"北方民族大学\",\"schoolCode\":4164011407,\"department\":\"国家民委\",\"location\":\"银川市\",\"level\":\"本科\"},{\"schoolName\":\"宁夏理工学院\",\"schoolCode\":4164012544,\"department\":\"宁夏自治区教育厅\",\"location\":\"石嘴山市\",\"level\":\"本科\"},{\"schoolName\":\"宁夏大学新华学院\",\"schoolCode\":4164013325,\"department\":\"宁夏自治区教育厅\",\"location\":\"银川市\",\"level\":\"本科\"},{\"schoolName\":\"银川能源学院\",\"schoolCode\":4164013820,\"department\":\"宁夏自治区教育厅\",\"location\":\"银川市\",\"level\":\"本科\"},{\"schoolName\":\"中国矿业大学银川学院\",\"schoolCode\":4164014200,\"department\":\"宁夏自治区教育厅\",\"location\":\"银川市\",\"level\":\"本科\"},{\"schoolName\":\"宁夏民族职业技术学院\",\"schoolCode\":4164012716,\"department\":\"宁夏回族自治区\",\"location\":\"吴忠市\",\"level\":\"专科\"},{\"schoolName\":\"宁夏工业职业学院\",\"schoolCode\":4164012837,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"专科\"},{\"schoolName\":\"宁夏职业技术学院\",\"schoolCode\":4164013086,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"专科\"},{\"schoolName\":\"宁夏工商职业技术学院\",\"schoolCode\":4164013087,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"专科\"},{\"schoolName\":\"宁夏财经职业技术学院\",\"schoolCode\":4164013088,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"专科\"},{\"schoolName\":\"宁夏警官职业学院\",\"schoolCode\":4164013089,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"专科\"},{\"schoolName\":\"宁夏建设职业技术学院\",\"schoolCode\":4164013151,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"专科\"},{\"schoolName\":\"宁夏葡萄酒与防沙治沙职业技术学院\",\"schoolCode\":4164014377,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"专科\"},{\"schoolName\":\"宁夏幼儿师范高等专科学校\",\"schoolCode\":4164014498,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"专科\"},{\"schoolName\":\"宁夏艺术职业学院\",\"schoolCode\":4164014522,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"专科\"},{\"schoolName\":\"宁夏体育职业学院\",\"schoolCode\":4164014624,\"department\":\"宁夏回族自治区\",\"location\":\"银川市\",\"level\":\"专科\"},{\"schoolName\":\"石嘴山工贸职业技术学院\",\"schoolCode\":4164014739,\"department\":\"宁夏回族自治区\",\"location\":\"石嘴山市\",\"level\":\"专科\"},{\"schoolName\":\"新疆大学\",\"schoolCode\":4165010755,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"本科\"},{\"schoolName\":\"塔里木大学\",\"schoolCode\":4165010757,\"department\":\"新疆生产建设兵团\",\"location\":\"阿拉尔市\",\"level\":\"本科\"},{\"schoolName\":\"新疆农业大学\",\"schoolCode\":4165010758,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"本科\"},{\"schoolName\":\"石河子大学\",\"schoolCode\":4165010759,\"department\":\"新疆生产建设兵团\",\"location\":\"石河子市\",\"level\":\"本科\"},{\"schoolName\":\"新疆医科大学\",\"schoolCode\":4165010760,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"本科\"},{\"schoolName\":\"新疆师范大学\",\"schoolCode\":4165010762,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"本科\"},{\"schoolName\":\"喀什大学\",\"schoolCode\":4165010763,\"department\":\"新疆维吾尔自治区\",\"location\":\"喀什地区\",\"level\":\"本科\"},{\"schoolName\":\"伊犁师范大学\",\"schoolCode\":4165010764,\"department\":\"新疆维吾尔自治区\",\"location\":\"伊犁哈萨克自治州\",\"level\":\"本科\"},{\"schoolName\":\"新疆财经大学\",\"schoolCode\":4165010766,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"本科\"},{\"schoolName\":\"新疆艺术学院\",\"schoolCode\":4165010768,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"本科\"},{\"schoolName\":\"新疆工程学院\",\"schoolCode\":4165010994,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"本科\"},{\"schoolName\":\"昌吉学院\",\"schoolCode\":4165010997,\"department\":\"新疆维吾尔自治区\",\"location\":\"昌吉回族自治州\",\"level\":\"本科\"},{\"schoolName\":\"新疆警察学院\",\"schoolCode\":4165012734,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"本科\"},{\"schoolName\":\"新疆理工学院\",\"schoolCode\":4165013558,\"department\":\"新疆维吾尔自治区\",\"location\":\"阿克苏地区\",\"level\":\"本科\"},{\"schoolName\":\"新疆农业大学科学技术学院\",\"schoolCode\":4165013559,\"department\":\"新疆自治区教育厅\",\"location\":\"乌鲁木齐市\",\"level\":\"本科\"},{\"schoolName\":\"新疆医科大学厚博学院\",\"schoolCode\":4165013560,\"department\":\"新疆自治区教育厅\",\"location\":\"乌鲁木齐市\",\"level\":\"本科\"},{\"schoolName\":\"新疆科技学院\",\"schoolCode\":4165013561,\"department\":\"新疆维吾尔自治区\",\"location\":\"巴音郭楞蒙古自治州\",\"level\":\"本科\"},{\"schoolName\":\"石河子大学科技学院\",\"schoolCode\":4165013628,\"department\":\"新疆生产建设兵团教育局\",\"location\":\"石河子市\",\"level\":\"本科\"},{\"schoolName\":\"新疆天山职业技术大学\",\"schoolCode\":4165013727,\"department\":\"新疆自治区教育厅\",\"location\":\"乌鲁木齐市\",\"level\":\"本科\"},{\"schoolName\":\"和田师范专科学校\",\"schoolCode\":4165010765,\"department\":\"新疆维吾尔自治区\",\"location\":\"和田地区\",\"level\":\"专科\"},{\"schoolName\":\"新疆农业职业技术学院\",\"schoolCode\":4165010995,\"department\":\"新疆维吾尔自治区\",\"location\":\"昌吉回族自治州\",\"level\":\"专科\"},{\"schoolName\":\"乌鲁木齐职业大学\",\"schoolCode\":4165011565,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"新疆维吾尔医学专科学校\",\"schoolCode\":4165011818,\"department\":\"新疆维吾尔自治区\",\"location\":\"和田地区\",\"level\":\"专科\"},{\"schoolName\":\"克拉玛依职业技术学院\",\"schoolCode\":4165012482,\"department\":\"新疆维吾尔自治区\",\"location\":\"克拉玛依市\",\"level\":\"专科\"},{\"schoolName\":\"新疆机电职业技术学院\",\"schoolCode\":4165012513,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"新疆轻工职业技术学院\",\"schoolCode\":4165012514,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"新疆能源职业技术学院\",\"schoolCode\":4165012570,\"department\":\"新疆自治区教育厅\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"昌吉职业技术学院\",\"schoolCode\":4165012838,\"department\":\"新疆维吾尔自治区\",\"location\":\"昌吉回族自治州\",\"level\":\"专科\"},{\"schoolName\":\"伊犁职业技术学院\",\"schoolCode\":4165012975,\"department\":\"新疆维吾尔自治区\",\"location\":\"伊犁哈萨克自治州\",\"level\":\"专科\"},{\"schoolName\":\"阿克苏职业技术学院\",\"schoolCode\":4165013093,\"department\":\"新疆维吾尔自治区\",\"location\":\"阿克苏地区\",\"level\":\"专科\"},{\"schoolName\":\"巴音郭楞职业技术学院\",\"schoolCode\":4165013094,\"department\":\"新疆维吾尔自治区\",\"location\":\"巴音郭楞蒙古自治州\",\"level\":\"专科\"},{\"schoolName\":\"新疆建设职业技术学院\",\"schoolCode\":4165013562,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"新疆兵团警官高等专科学校\",\"schoolCode\":4165013563,\"department\":\"新疆生产建设兵团\",\"location\":\"五家渠市\",\"level\":\"专科\"},{\"schoolName\":\"新疆现代职业技术学院\",\"schoolCode\":4165013726,\"department\":\"新疆自治区教育厅\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"新疆交通职业技术学院\",\"schoolCode\":4165013926,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"新疆石河子职业技术学院\",\"schoolCode\":4165013956,\"department\":\"新疆生产建设兵团\",\"location\":\"石河子市\",\"level\":\"专科\"},{\"schoolName\":\"新疆职业大学\",\"schoolCode\":4165014138,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"新疆体育职业技术学院\",\"schoolCode\":4165014416,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"新疆应用职业技术学院\",\"schoolCode\":4165014417,\"department\":\"新疆维吾尔自治区\",\"location\":\"伊犁哈萨克自治州\",\"level\":\"专科\"},{\"schoolName\":\"新疆师范高等专科学校\",\"schoolCode\":4165014421,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"新疆铁道职业技术学院\",\"schoolCode\":4165014489,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"新疆生产建设兵团兴新职业技术学院\",\"schoolCode\":4165014523,\"department\":\"新疆生产建设兵团\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"哈密职业技术学院\",\"schoolCode\":4165014524,\"department\":\"新疆维吾尔自治区\",\"location\":\"哈密市\",\"level\":\"专科\"},{\"schoolName\":\"新疆科技职业技术学院\",\"schoolCode\":4165014525,\"department\":\"新疆自治区教育厅\",\"location\":\"五家渠市\",\"level\":\"专科\"},{\"schoolName\":\"吐鲁番职业技术学院\",\"schoolCode\":4165014585,\"department\":\"新疆维吾尔自治区\",\"location\":\"吐鲁番市\",\"level\":\"专科\"},{\"schoolName\":\"博尔塔拉职业技术学院\",\"schoolCode\":4165014622,\"department\":\"新疆维吾尔自治区\",\"location\":\"博尔塔拉蒙古自治州\",\"level\":\"专科\"},{\"schoolName\":\"和田职业技术学院\",\"schoolCode\":4165014652,\"department\":\"新疆维吾尔自治区\",\"location\":\"和田地区\",\"level\":\"专科\"},{\"schoolName\":\"石河子工程职业技术学院\",\"schoolCode\":4165014661,\"department\":\"新疆生产建设兵团\",\"location\":\"石河子市\",\"level\":\"专科\"},{\"schoolName\":\"喀什职业技术学院\",\"schoolCode\":4165014677,\"department\":\"新疆维吾尔自治区\",\"location\":\"喀什地区\",\"level\":\"专科\"},{\"schoolName\":\"克孜勒苏职业技术学院\",\"schoolCode\":4165014678,\"department\":\"新疆维吾尔自治区\",\"location\":\"克孜勒苏柯尔克孜自治州\",\"level\":\"专科\"},{\"schoolName\":\"新疆科信职业技术学院\",\"schoolCode\":4165014679,\"department\":\"新疆自治区教育厅\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"阿勒泰职业技术学院\",\"schoolCode\":4165014680,\"department\":\"新疆维吾尔自治区\",\"location\":\"阿勒泰地区\",\"level\":\"专科\"},{\"schoolName\":\"塔城职业技术学院\",\"schoolCode\":4165014740,\"department\":\"新疆维吾尔自治区\",\"location\":\"塔城地区\",\"level\":\"专科\"},{\"schoolName\":\"塔里木职业技术学院\",\"schoolCode\":4165014741,\"department\":\"新疆生产建设兵团\",\"location\":\"阿拉尔市\",\"level\":\"专科\"},{\"schoolName\":\"新疆工业职业技术学院\",\"schoolCode\":4265051060,\"department\":\"新疆维吾尔自治区\",\"location\":\"乌鲁木齐市\",\"level\":\"专科\"},{\"schoolName\":\"铁门关职业技术学院\",\"schoolCode\":4165014660,\"department\":\"新疆生产建设兵团\",\"location\":\"铁门关市\",\"level\":\"专科\"}]");

/***/ })

}]);
//# sourceMappingURL=../../.sourcemap/mp-weixin/common/vendor.js.map