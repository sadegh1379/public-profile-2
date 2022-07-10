self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/next-server/lib/dynamic.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/dynamic.js ***!
  \***********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.noSSR = noSSR;
exports.default = dynamic;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _loadable = _interopRequireDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next/dist/next-server/lib/loadable.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var isServerSide = false;

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is necessary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  }

  var Loading = loadableOptions.loading; // This will only be rendered on the server side

  return function () {
    return /*#__PURE__*/_react["default"].createElement(Loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
} // function dynamic<P = {}, O extends DynamicOptions>(options: O):


function dynamic(dynamicOptions, options) {
  var loadableFn = _loadable["default"];
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return null;
        }

        if (error) {
          return /*#__PURE__*/_react["default"].createElement("p", null, error.message, /*#__PURE__*/_react["default"].createElement("br", null), error.stack);
        }
      }

      return null;
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (dynamicOptions instanceof Promise) {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), options); // coming from build/babel/plugins/react-loadable-plugin.js

  if (loadableOptions.loadableGenerated) {
    loadableOptions = _objectSpread(_objectSpread({}, loadableOptions), loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable-context.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable-context.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.LoadableContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var LoadableContext = /*#__PURE__*/_react["default"].createContext(null);

exports.LoadableContext = LoadableContext;

if (true) {
  LoadableContext.displayName = 'LoadableContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/loadable.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/loadable.js ***!
  \************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/defineProperty.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/createClass.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _useSubscription = __webpack_require__(/*! use-subscription */ "./node_modules/use-subscription/index.js");

var _loadableContext = __webpack_require__(/*! ./loadable-context */ "./node_modules/next/dist/next-server/lib/loadable-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}
/**
@copyright (c) 2017-present James Kyle <me@thejameskyle.com>
MIT License
Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE
*/
// https://github.com/jamiebuilds/react-loadable/blob/v5.5.0/src/index.js
// Modified to be compatible with webpack 4 / Next.js


var ALL_INITIALIZERS = [];
var READY_INITIALIZERS = [];
var initialized = false;

function load(loader) {
  var promise = loader();
  var state = {
    loading: true,
    loaded: null,
    error: null
  };
  state.promise = promise.then(function (loaded) {
    state.loading = false;
    state.loaded = loaded;
    return loaded;
  })["catch"](function (err) {
    state.loading = false;
    state.error = err;
    throw err;
  });
  return state;
}

function resolve(obj) {
  return obj && obj.__esModule ? obj["default"] : obj;
}

function createLoadableComponent(loadFn, options) {
  var _s = $RefreshSig$();

  var opts = Object.assign({
    loader: null,
    loading: null,
    delay: 200,
    timeout: null,
    webpack: null,
    modules: null
  }, options);
  var subscription = null;

  function init() {
    if (!subscription) {
      var sub = new LoadableSubscription(loadFn, opts);
      subscription = {
        getCurrentValue: sub.getCurrentValue.bind(sub),
        subscribe: sub.subscribe.bind(sub),
        retry: sub.retry.bind(sub),
        promise: sub.promise.bind(sub)
      };
    }

    return subscription.promise();
  } // Server only


  if (false) {} // Client only


  if (!initialized && true && typeof opts.webpack === 'function') {
    var moduleIds = opts.webpack();
    READY_INITIALIZERS.push(function (ids) {
      var _iterator = _createForOfIteratorHelper(moduleIds),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var moduleId = _step.value;

          if (ids.indexOf(moduleId) !== -1) {
            return init();
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    });
  }

  var LoadableComponent = function LoadableComponent(props, ref) {
    _s();

    init();

    var context = _react["default"].useContext(_loadableContext.LoadableContext);

    var state = (0, _useSubscription.useSubscription)(subscription);

    _react["default"].useImperativeHandle(ref, function () {
      return {
        retry: subscription.retry
      };
    }, []);

    if (context && Array.isArray(opts.modules)) {
      opts.modules.forEach(function (moduleName) {
        context(moduleName);
      });
    }

    return _react["default"].useMemo(function () {
      if (state.loading || state.error) {
        return /*#__PURE__*/_react["default"].createElement(opts.loading, {
          isLoading: state.loading,
          pastDelay: state.pastDelay,
          timedOut: state.timedOut,
          error: state.error,
          retry: subscription.retry
        });
      } else if (state.loaded) {
        return /*#__PURE__*/_react["default"].createElement(resolve(state.loaded), props);
      } else {
        return null;
      }
    }, [props, state]);
  };

  _s(LoadableComponent, "Bp87+qHhaUk8bOFGKxqLWPW1xR0=", true);

  LoadableComponent.preload = function () {
    return init();
  };

  LoadableComponent.displayName = 'LoadableComponent';
  return /*#__PURE__*/_react["default"].forwardRef(LoadableComponent);
}

var LoadableSubscription = /*#__PURE__*/function () {
  function LoadableSubscription(loadFn, opts) {
    _classCallCheck(this, LoadableSubscription);

    this._loadFn = loadFn;
    this._opts = opts;
    this._callbacks = new Set();
    this._delay = null;
    this._timeout = null;
    this.retry();
  }

  _createClass(LoadableSubscription, [{
    key: "promise",
    value: function promise() {
      return this._res.promise;
    }
  }, {
    key: "retry",
    value: function retry() {
      var _this = this;

      this._clearTimeouts();

      this._res = this._loadFn(this._opts.loader);
      this._state = {
        pastDelay: false,
        timedOut: false
      };
      var res = this._res,
          opts = this._opts;

      if (res.loading) {
        if (typeof opts.delay === 'number') {
          if (opts.delay === 0) {
            this._state.pastDelay = true;
          } else {
            this._delay = setTimeout(function () {
              _this._update({
                pastDelay: true
              });
            }, opts.delay);
          }
        }

        if (typeof opts.timeout === 'number') {
          this._timeout = setTimeout(function () {
            _this._update({
              timedOut: true
            });
          }, opts.timeout);
        }
      }

      this._res.promise.then(function () {
        _this._update({});

        _this._clearTimeouts();
      })["catch"](function (_err) {
        _this._update({});

        _this._clearTimeouts();
      });

      this._update({});
    }
  }, {
    key: "_update",
    value: function _update(partial) {
      this._state = _objectSpread(_objectSpread({}, this._state), {}, {
        error: this._res.error,
        loaded: this._res.loaded,
        loading: this._res.loading
      }, partial);

      this._callbacks.forEach(function (callback) {
        return callback();
      });
    }
  }, {
    key: "_clearTimeouts",
    value: function _clearTimeouts() {
      clearTimeout(this._delay);
      clearTimeout(this._timeout);
    }
  }, {
    key: "getCurrentValue",
    value: function getCurrentValue() {
      return this._state;
    }
  }, {
    key: "subscribe",
    value: function subscribe(callback) {
      var _this2 = this;

      this._callbacks.add(callback);

      return function () {
        _this2._callbacks["delete"](callback);
      };
    }
  }]);

  return LoadableSubscription;
}();

function Loadable(opts) {
  return createLoadableComponent(load, opts);
}

_c = Loadable;

function flushInitializers(initializers, ids) {
  var promises = [];

  while (initializers.length) {
    var init = initializers.pop();
    promises.push(init(ids));
  }

  return Promise.all(promises).then(function () {
    if (initializers.length) {
      return flushInitializers(initializers, ids);
    }
  });
}

Loadable.preloadAll = function () {
  return new Promise(function (resolveInitializers, reject) {
    flushInitializers(ALL_INITIALIZERS).then(resolveInitializers, reject);
  });
};

Loadable.preloadReady = function () {
  var ids = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return new Promise(function (resolvePreload) {
    var res = function res() {
      initialized = true;
      return resolvePreload();
    }; // We always will resolve, errors should be handled within loading UIs.


    flushInitializers(READY_INITIALIZERS, ids).then(res, res);
  });
};

if (true) {
  window.__NEXT_PRELOADREADY = Loadable.preloadReady;
}

var _default = Loadable;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Loadable");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/home/home.tsx":
/*!*****************************!*\
  !*** ./pages/home/home.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VHome; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-awesome-reveal */ "./node_modules/react-awesome-reveal/dist/react-awesome-reveal.esm.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "./utils/index.ts");
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../assets */ "./assets/index.ts");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.module.scss */ "./pages/home/home.module.scss");
/* harmony import */ var _home_module_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_home_module_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_7__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "E:\\web designer\\next js\\my_projects\\Portfolio-sadegh\\pages\\home\\home.tsx",
    _s = $RefreshSig$();










var CrispWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_7___default()(_c = function _c() {
  return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./ */ "./pages/home/index.ts"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ./ */ "./pages/home/index.ts")];
    },
    modules: ["home\\home.tsx -> " + './']
  }
});
_c2 = CrispWithNoSSR;
function VHome() {
  _s();

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = '3983abc1-02e8-4693-88a2-56310ea775a0';

    (function () {
      var d = document;
      var s = d.createElement('script');
      s.src = 'https://client.crisp.chat/l.js';
      s.async = true;
      d.getElementsByTagName('head')[0].appendChild(s);
    })();
  }, []);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().homeContainer),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CrispWithNoSSR, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "Sadegh Akbari"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "This is my portfolio page. The purpose of this page is to introduce my person, my coding style, and show off a little bit of my web development skills."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "author",
        content: "Sadegh Akbari"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "keywords",
        content: "Sadegh, Akbari, Portfolio, Frontend"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: "https://www.khudziec.com/portfolioPage.png"
      }, "ogimage", false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "shortcut icon",
        href: "/favicon.ico?",
        type: "image/x-icon"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils__WEBPACK_IMPORTED_MODULE_5__.VMenuBar, {
      activeTab: "Home"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().content),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().intro),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().introduction),
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils__WEBPACK_IMPORTED_MODULE_5__.VMainHeader, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().profilePicture),
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              alt: "Profile picture of Karolina Hudziec.",
              src: _assets__WEBPACK_IMPORTED_MODULE_6__.sadeghLogo_2
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().swipeDownIcon),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
            alt: "Chevron down icon.",
            src: _assets__WEBPACK_IMPORTED_MODULE_6__.chevronDown,
            width: "40px",
            height: "15px"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().workHistory),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkBox),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_9__.Fade, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkBoxTitle),
              children: ["Work", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 55
              }, this), "History"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkBoxTextContent),
              children: "Here you can find out more about the companies I've collaborated with, projects I've been part of and the technologies I use every day."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 15
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
              href: "/work/work",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
                className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkBoxButton),
                children: "Check out my work history"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().workHistoryBackground)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().technologiesAndTools),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_9__.Fade, {
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
            children: "Technologies & Tools I work with"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 13
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils__WEBPACK_IMPORTED_MODULE_5__.VToolsTech, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().personalProjects),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkBox),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_9__.Fade, {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkBoxTitle),
              children: "About me"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkBoxTextContent),
              children: "Here you can find out more about me, my hobbies and personal project I'm currently working on."
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().linkBoxButton),
              children: "Get to know more about me"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 19
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: (_home_module_scss__WEBPACK_IMPORTED_MODULE_8___default().personalProjectsBackground)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utils__WEBPACK_IMPORTED_MODULE_5__.VFooter, {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

_s(VHome, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c3 = VHome;

var _c, _c2, _c3;

$RefreshReg$(_c, "CrispWithNoSSR$dynamic");
$RefreshReg$(_c2, "CrispWithNoSSR");
$RefreshReg$(_c3, "VHome");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dynamic.js":
/*!**************************************!*\
  !*** ./node_modules/next/dynamic.js ***!
  \**************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js")


/***/ }),

/***/ "./node_modules/use-subscription/cjs/use-subscription.development.js":
/*!***************************************************************************!*\
  !*** ./node_modules/use-subscription/cjs/use-subscription.development.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/** @license React vundefined
 * use-subscription.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

var _assign = __webpack_require__(/*! object-assign */ "./node_modules/next/dist/build/polyfills/object-assign.js");
var react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

//
// In order to avoid removing and re-adding subscriptions each time this hook is called,
// the parameters passed to this hook should be memoized in some way–
// either by wrapping the entire params object with useMemo()
// or by wrapping the individual callbacks with useCallback().

function useSubscription(_ref) {
  var getCurrentValue = _ref.getCurrentValue,
      subscribe = _ref.subscribe;

  // Read the current value from our subscription.
  // When this value changes, we'll schedule an update with React.
  // It's important to also store the hook params so that we can check for staleness.
  // (See the comment in checkForUpdates() below for more info.)
  var _useState = react.useState(function () {
    return {
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: getCurrentValue()
    };
  }),
      state = _useState[0],
      setState = _useState[1];

  var valueToReturn = state.value; // If parameters have changed since our last render, schedule an update with its current value.

  if (state.getCurrentValue !== getCurrentValue || state.subscribe !== subscribe) {
    // If the subscription has been updated, we'll schedule another update with React.
    // React will process this update immediately, so the old subscription value won't be committed.
    // It is still nice to avoid returning a mismatched value though, so let's override the return value.
    valueToReturn = getCurrentValue();
    setState({
      getCurrentValue: getCurrentValue,
      subscribe: subscribe,
      value: valueToReturn
    });
  } // Display the current value for this hook in React DevTools.


  react.useDebugValue(valueToReturn); // It is important not to subscribe while rendering because this can lead to memory leaks.
  // (Learn more at reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects)
  // Instead, we wait until the commit phase to attach our handler.
  //
  // We intentionally use a passive effect (useEffect) rather than a synchronous one (useLayoutEffect)
  // so that we don't stretch the commit phase.
  // This also has an added benefit when multiple components are subscribed to the same source:
  // It allows each of the event handlers to safely schedule work without potentially removing an another handler.
  // (Learn more at https://codesandbox.io/s/k0yvr5970o)

  react.useEffect(function () {
    var didUnsubscribe = false;

    var checkForUpdates = function () {
      // It's possible that this callback will be invoked even after being unsubscribed,
      // if it's removed as a result of a subscription event/update.
      // In this case, React will log a DEV warning about an update from an unmounted component.
      // We can avoid triggering that warning with this check.
      if (didUnsubscribe) {
        return;
      } // We use a state updater function to avoid scheduling work for a stale source.
      // However it's important to eagerly read the currently value,
      // so that all scheduled work shares the same value (in the event of multiple subscriptions).
      // This avoids visual "tearing" when a mutation happens during a (concurrent) render.


      var value = getCurrentValue();
      setState(function (prevState) {
        // Ignore values from stale sources!
        // Since we subscribe an unsubscribe in a passive effect,
        // it's possible that this callback will be invoked for a stale (previous) subscription.
        // This check avoids scheduling an update for that stale subscription.
        if (prevState.getCurrentValue !== getCurrentValue || prevState.subscribe !== subscribe) {
          return prevState;
        } // Some subscriptions will auto-invoke the handler, even if the value hasn't changed.
        // If the value hasn't changed, no update is needed.
        // Return state as-is so React can bail out and avoid an unnecessary render.


        if (prevState.value === value) {
          return prevState;
        }

        return _assign({}, prevState, {
          value: value
        });
      });
    };

    var unsubscribe = subscribe(checkForUpdates); // Because we're subscribing in a passive effect,
    // it's possible that an update has occurred between render and our effect handler.
    // Check for this and schedule an update if work has occurred.

    checkForUpdates();
    return function () {
      didUnsubscribe = true;
      unsubscribe();
    };
  }, [getCurrentValue, subscribe]); // Return the current value for our caller to use while rendering.

  return valueToReturn;
}

exports.useSubscription = useSubscription;
  })();
}


/***/ }),

/***/ "./node_modules/use-subscription/index.js":
/*!************************************************!*\
  !*** ./node_modules/use-subscription/index.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/use-subscription.development.js */ "./node_modules/use-subscription/cjs/use-subscription.development.js");
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZHluYW1pYy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbG9hZGFibGUtY29udGV4dC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvbG9hZGFibGUuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2hvbWUvaG9tZS50c3giLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2R5bmFtaWMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy91c2Utc3Vic2NyaXB0aW9uL2Nqcy91c2Utc3Vic2NyaXB0aW9uLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvdXNlLXN1YnNjcmlwdGlvbi9pbmRleC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwibm9TU1IiLCJkeW5hbWljIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfbG9hZGFibGUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiaXNTZXJ2ZXJTaWRlIiwiTG9hZGFibGVJbml0aWFsaXplciIsImxvYWRhYmxlT3B0aW9ucyIsIndlYnBhY2siLCJtb2R1bGVzIiwiTG9hZGluZyIsImxvYWRpbmciLCJjcmVhdGVFbGVtZW50IiwiZXJyb3IiLCJpc0xvYWRpbmciLCJwYXN0RGVsYXkiLCJ0aW1lZE91dCIsImR5bmFtaWNPcHRpb25zIiwib3B0aW9ucyIsImxvYWRhYmxlRm4iLCJtZXNzYWdlIiwic3RhY2siLCJQcm9taXNlIiwibG9hZGVyIiwibG9hZGFibGVHZW5lcmF0ZWQiLCJzc3IiLCJMb2FkYWJsZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJfdXNlU3Vic2NyaXB0aW9uIiwiX2xvYWRhYmxlQ29udGV4dCIsIkFMTF9JTklUSUFMSVpFUlMiLCJSRUFEWV9JTklUSUFMSVpFUlMiLCJpbml0aWFsaXplZCIsImxvYWQiLCJwcm9taXNlIiwic3RhdGUiLCJsb2FkZWQiLCJ0aGVuIiwiZXJyIiwicmVzb2x2ZSIsImNyZWF0ZUxvYWRhYmxlQ29tcG9uZW50IiwibG9hZEZuIiwib3B0cyIsIk9iamVjdCIsImFzc2lnbiIsImRlbGF5IiwidGltZW91dCIsInN1YnNjcmlwdGlvbiIsImluaXQiLCJzdWIiLCJMb2FkYWJsZVN1YnNjcmlwdGlvbiIsImdldEN1cnJlbnRWYWx1ZSIsImJpbmQiLCJzdWJzY3JpYmUiLCJyZXRyeSIsIm1vZHVsZUlkcyIsInB1c2giLCJpZHMiLCJtb2R1bGVJZCIsImluZGV4T2YiLCJMb2FkYWJsZUNvbXBvbmVudCIsInByb3BzIiwicmVmIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJ1c2VTdWJzY3JpcHRpb24iLCJ1c2VJbXBlcmF0aXZlSGFuZGxlIiwiQXJyYXkiLCJpc0FycmF5IiwiZm9yRWFjaCIsIm1vZHVsZU5hbWUiLCJ1c2VNZW1vIiwicHJlbG9hZCIsImZvcndhcmRSZWYiLCJfbG9hZEZuIiwiX29wdHMiLCJfY2FsbGJhY2tzIiwiU2V0IiwiX2RlbGF5IiwiX3RpbWVvdXQiLCJfcmVzIiwiX2NsZWFyVGltZW91dHMiLCJfc3RhdGUiLCJyZXMiLCJzZXRUaW1lb3V0IiwiX3VwZGF0ZSIsIl9lcnIiLCJwYXJ0aWFsIiwiY2FsbGJhY2siLCJjbGVhclRpbWVvdXQiLCJhZGQiLCJMb2FkYWJsZSIsImZsdXNoSW5pdGlhbGl6ZXJzIiwiaW5pdGlhbGl6ZXJzIiwicHJvbWlzZXMiLCJsZW5ndGgiLCJwb3AiLCJhbGwiLCJwcmVsb2FkQWxsIiwicmVzb2x2ZUluaXRpYWxpemVycyIsInJlamVjdCIsInByZWxvYWRSZWFkeSIsInJlc29sdmVQcmVsb2FkIiwid2luZG93IiwiX19ORVhUX1BSRUxPQURSRUFEWSIsIl9kZWZhdWx0IiwiQ3Jpc3BXaXRoTm9TU1IiLCJWSG9tZSIsInVzZUVmZmVjdCIsIiRjcmlzcCIsIkNSSVNQX1dFQlNJVEVfSUQiLCJkIiwiZG9jdW1lbnQiLCJzIiwic3JjIiwiYXN5bmMiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImFwcGVuZENoaWxkIiwic3R5bGVzIiwic2FkZWdoTG9nb18yIiwiY2hldnJvbkRvd24iLCJ3b3JrSGlzdG9yeUJhY2tncm91bmQiLCJwZXJzb25hbFByb2plY3RzQmFja2dyb3VuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFhOzs7Ozs7OztBQUFBQSxrQkFBQSxHQUFtQixJQUFuQjtBQUF3QkEsYUFBQSxHQUFjQyxLQUFkO0FBQW9CRCxlQUFBLEdBQWdCRSxPQUFoQjs7QUFBd0IsSUFBSUMsTUFBTSxHQUFDQyxzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyw0Q0FBRCxDQUFSLENBQWpDOztBQUFvRCxJQUFJQyxTQUFTLEdBQUNGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHdFQUFELENBQVIsQ0FBcEM7O0FBQTRELFNBQVNELHNCQUFULENBQWdDRyxHQUFoQyxFQUFvQztBQUFDLFNBQU9BLEdBQUcsSUFBRUEsR0FBRyxDQUFDQyxVQUFULEdBQW9CRCxHQUFwQixHQUF3QjtBQUFDLGVBQVFBO0FBQVQsR0FBL0I7QUFBOEM7O0FBQUEsSUFBTUUsWUFBWSxRQUFsQjs7QUFBK0MsU0FBU1IsS0FBVCxDQUFlUyxtQkFBZixFQUFtQ0MsZUFBbkMsRUFBbUQ7QUFBQztBQUN2WCxTQUFPQSxlQUFlLENBQUNDLE9BQXZCO0FBQStCLFNBQU9ELGVBQWUsQ0FBQ0UsT0FBdkIsQ0FEdVYsQ0FDeFQ7O0FBQzlELE1BQUcsQ0FBQ0osWUFBSixFQUFpQjtBQUFDLFdBQU9DLG1CQUFtQixDQUFDQyxlQUFELENBQTFCO0FBQTZDOztBQUFBLE1BQU1HLE9BQU8sR0FBQ0gsZUFBZSxDQUFDSSxPQUE5QixDQUZ1VCxDQUVqUjs7QUFDckcsU0FBTTtBQUFBLFdBQUksYUFBYVosTUFBTSxXQUFOLENBQWVhLGFBQWYsQ0FB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QUNBLEdBQUcsZ0NBQWdDOztBQUVuQztBQUNBOztBQUVBLHVCQUF1QjtBQUN2QixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQzFIYTs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUM7QUFDRCxFQUFFLHdKQUFpRTtBQUNuRSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kNDBjYzc5ZDgxYzAyNDQzOGMyZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub1NTUj1ub1NTUjtleHBvcnRzLmRlZmF1bHQ9ZHluYW1pYzt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTt2YXIgX2xvYWRhYmxlPV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vbG9hZGFibGVcIikpO2Z1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKXtyZXR1cm4gb2JqJiZvYmouX19lc01vZHVsZT9vYmo6e2RlZmF1bHQ6b2JqfTt9Y29uc3QgaXNTZXJ2ZXJTaWRlPXR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJztmdW5jdGlvbiBub1NTUihMb2FkYWJsZUluaXRpYWxpemVyLGxvYWRhYmxlT3B0aW9ucyl7Ly8gUmVtb3Zpbmcgd2VicGFjayBhbmQgbW9kdWxlcyBtZWFucyByZWFjdC1sb2FkYWJsZSB3b24ndCB0cnkgcHJlbG9hZGluZ1xuZGVsZXRlIGxvYWRhYmxlT3B0aW9ucy53ZWJwYWNrO2RlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubW9kdWxlczsvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBwcmV2ZW50IHJlYWN0LWxvYWRhYmxlIGZyb20gaW5pdGlhbGl6aW5nIG9uIHRoZSBzZXJ2ZXJcbmlmKCFpc1NlcnZlclNpZGUpe3JldHVybiBMb2FkYWJsZUluaXRpYWxpemVyKGxvYWRhYmxlT3B0aW9ucyk7fWNvbnN0IExvYWRpbmc9bG9hZGFibGVPcHRpb25zLmxvYWRpbmc7Ly8gVGhpcyB3aWxsIG9ubHkgYmUgcmVuZGVyZWQgb24gdGhlIHNlcnZlciBzaWRlXG5yZXR1cm4oKT0+LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoTG9hZGluZyx7ZXJyb3I6bnVsbCxpc0xvYWRpbmc6dHJ1ZSxwYXN0RGVsYXk6ZmFsc2UsdGltZWRPdXQ6ZmFsc2V9KTt9Ly8gZnVuY3Rpb24gZHluYW1pYzxQID0ge30sIE8gZXh0ZW5kcyBEeW5hbWljT3B0aW9ucz4ob3B0aW9uczogTyk6XG5mdW5jdGlvbiBkeW5hbWljKGR5bmFtaWNPcHRpb25zLG9wdGlvbnMpe2xldCBsb2FkYWJsZUZuPV9sb2FkYWJsZS5kZWZhdWx0O2xldCBsb2FkYWJsZU9wdGlvbnM9ey8vIEEgbG9hZGluZyBjb21wb25lbnQgaXMgbm90IHJlcXVpcmVkLCBzbyB3ZSBkZWZhdWx0IGl0XG5sb2FkaW5nOih7ZXJyb3IsaXNMb2FkaW5nLHBhc3REZWxheX0pPT57aWYoIXBhc3REZWxheSlyZXR1cm4gbnVsbDtpZihwcm9jZXNzLmVudi5OT0RFX0VOVj09PSdkZXZlbG9wbWVudCcpe2lmKGlzTG9hZGluZyl7cmV0dXJuIG51bGw7fWlmKGVycm9yKXtyZXR1cm4vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcInBcIixudWxsLGVycm9yLm1lc3NhZ2UsLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJiclwiLG51bGwpLGVycm9yLnN0YWNrKTt9fXJldHVybiBudWxsO319Oy8vIFN1cHBvcnQgZm9yIGRpcmVjdCBpbXBvcnQoKSwgZWc6IGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuLy8gTm90ZSB0aGF0IHRoaXMgaXMgb25seSBrZXB0IGZvciB0aGUgZWRnZSBjYXNlIHdoZXJlIHNvbWVvbmUgaXMgcGFzc2luZyBpbiBhIHByb21pc2UgYXMgZmlyc3QgYXJndW1lbnRcbi8vIFRoZSByZWFjdC1sb2FkYWJsZSBiYWJlbCBwbHVnaW4gd2lsbCB0dXJuIGR5bmFtaWMoaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKSBpbnRvIGR5bmFtaWMoKCkgPT4gaW1wb3J0KCcuLi9oZWxsby13b3JsZCcpKVxuLy8gVG8gbWFrZSBzdXJlIHdlIGRvbid0IGV4ZWN1dGUgdGhlIGltcG9ydCB3aXRob3V0IHJlbmRlcmluZyBmaXJzdFxuaWYoZHluYW1pY09wdGlvbnMgaW5zdGFuY2VvZiBQcm9taXNlKXtsb2FkYWJsZU9wdGlvbnMubG9hZGVyPSgpPT5keW5hbWljT3B0aW9uczsvLyBTdXBwb3J0IGZvciBoYXZpbmcgaW1wb3J0IGFzIGEgZnVuY3Rpb24sIGVnOiBkeW5hbWljKCgpID0+IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSlcbn1lbHNlIGlmKHR5cGVvZiBkeW5hbWljT3B0aW9ucz09PSdmdW5jdGlvbicpe2xvYWRhYmxlT3B0aW9ucy5sb2FkZXI9ZHluYW1pY09wdGlvbnM7Ly8gU3VwcG9ydCBmb3IgaGF2aW5nIGZpcnN0IGFyZ3VtZW50IGJlaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKHtsb2FkZXI6IGltcG9ydCgnLi4vaGVsbG8td29ybGQnKX0pXG59ZWxzZSBpZih0eXBlb2YgZHluYW1pY09wdGlvbnM9PT0nb2JqZWN0Jyl7bG9hZGFibGVPcHRpb25zPXsuLi5sb2FkYWJsZU9wdGlvbnMsLi4uZHluYW1pY09wdGlvbnN9O30vLyBTdXBwb3J0IGZvciBwYXNzaW5nIG9wdGlvbnMsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge2xvYWRpbmc6ICgpID0+IDxwPkxvYWRpbmcgc29tZXRoaW5nPC9wPn0pXG5sb2FkYWJsZU9wdGlvbnM9ey4uLmxvYWRhYmxlT3B0aW9ucywuLi5vcHRpb25zfTsvLyBjb21pbmcgZnJvbSBidWlsZC9iYWJlbC9wbHVnaW5zL3JlYWN0LWxvYWRhYmxlLXBsdWdpbi5qc1xuaWYobG9hZGFibGVPcHRpb25zLmxvYWRhYmxlR2VuZXJhdGVkKXtsb2FkYWJsZU9wdGlvbnM9ey4uLmxvYWRhYmxlT3B0aW9ucywuLi5sb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWR9O2RlbGV0ZSBsb2FkYWJsZU9wdGlvbnMubG9hZGFibGVHZW5lcmF0ZWQ7fS8vIHN1cHBvcnQgZm9yIGRpc2FibGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcsIGVnOiBkeW5hbWljKGltcG9ydCgnLi4vaGVsbG8td29ybGQnKSwge3NzcjogZmFsc2V9KVxuaWYodHlwZW9mIGxvYWRhYmxlT3B0aW9ucy5zc3I9PT0nYm9vbGVhbicpe2lmKCFsb2FkYWJsZU9wdGlvbnMuc3NyKXtkZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjtyZXR1cm4gbm9TU1IobG9hZGFibGVGbixsb2FkYWJsZU9wdGlvbnMpO31kZWxldGUgbG9hZGFibGVPcHRpb25zLnNzcjt9cmV0dXJuIGxvYWRhYmxlRm4obG9hZGFibGVPcHRpb25zKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1keW5hbWljLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuTG9hZGFibGVDb250ZXh0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWNvbnN0IExvYWRhYmxlQ29udGV4dD0vKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlQ29udGV4dChudWxsKTtleHBvcnRzLkxvYWRhYmxlQ29udGV4dD1Mb2FkYWJsZUNvbnRleHQ7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpe0xvYWRhYmxlQ29udGV4dC5kaXNwbGF5TmFtZT0nTG9hZGFibGVDb250ZXh0Jzt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2FkYWJsZS1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF91c2VTdWJzY3JpcHRpb249cmVxdWlyZShcInVzZS1zdWJzY3JpcHRpb25cIik7dmFyIF9sb2FkYWJsZUNvbnRleHQ9cmVxdWlyZShcIi4vbG9hZGFibGUtY29udGV4dFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fS8qKlxuQGNvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50IEphbWVzIEt5bGUgPG1lQHRoZWphbWVza3lsZS5jb20+XG4gTUlUIExpY2Vuc2VcbiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmdcbmEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG53aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG5kaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG9cbnBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0b1xudGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlXG5pbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELFxuRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG5NRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORFxuTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRVxuTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTlxuT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OXG5XSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRVxuKi8gLy8gaHR0cHM6Ly9naXRodWIuY29tL2phbWllYnVpbGRzL3JlYWN0LWxvYWRhYmxlL2Jsb2IvdjUuNS4wL3NyYy9pbmRleC5qc1xuLy8gTW9kaWZpZWQgdG8gYmUgY29tcGF0aWJsZSB3aXRoIHdlYnBhY2sgNCAvIE5leHQuanNcbmNvbnN0IEFMTF9JTklUSUFMSVpFUlM9W107Y29uc3QgUkVBRFlfSU5JVElBTElaRVJTPVtdO2xldCBpbml0aWFsaXplZD1mYWxzZTtmdW5jdGlvbiBsb2FkKGxvYWRlcil7bGV0IHByb21pc2U9bG9hZGVyKCk7bGV0IHN0YXRlPXtsb2FkaW5nOnRydWUsbG9hZGVkOm51bGwsZXJyb3I6bnVsbH07c3RhdGUucHJvbWlzZT1wcm9taXNlLnRoZW4obG9hZGVkPT57c3RhdGUubG9hZGluZz1mYWxzZTtzdGF0ZS5sb2FkZWQ9bG9hZGVkO3JldHVybiBsb2FkZWQ7fSkuY2F0Y2goZXJyPT57c3RhdGUubG9hZGluZz1mYWxzZTtzdGF0ZS5lcnJvcj1lcnI7dGhyb3cgZXJyO30pO3JldHVybiBzdGF0ZTt9ZnVuY3Rpb24gcmVzb2x2ZShvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iai5kZWZhdWx0Om9iajt9ZnVuY3Rpb24gY3JlYXRlTG9hZGFibGVDb21wb25lbnQobG9hZEZuLG9wdGlvbnMpe2xldCBvcHRzPU9iamVjdC5hc3NpZ24oe2xvYWRlcjpudWxsLGxvYWRpbmc6bnVsbCxkZWxheToyMDAsdGltZW91dDpudWxsLHdlYnBhY2s6bnVsbCxtb2R1bGVzOm51bGx9LG9wdGlvbnMpO2xldCBzdWJzY3JpcHRpb249bnVsbDtmdW5jdGlvbiBpbml0KCl7aWYoIXN1YnNjcmlwdGlvbil7Y29uc3Qgc3ViPW5ldyBMb2FkYWJsZVN1YnNjcmlwdGlvbihsb2FkRm4sb3B0cyk7c3Vic2NyaXB0aW9uPXtnZXRDdXJyZW50VmFsdWU6c3ViLmdldEN1cnJlbnRWYWx1ZS5iaW5kKHN1Yiksc3Vic2NyaWJlOnN1Yi5zdWJzY3JpYmUuYmluZChzdWIpLHJldHJ5OnN1Yi5yZXRyeS5iaW5kKHN1YikscHJvbWlzZTpzdWIucHJvbWlzZS5iaW5kKHN1Yil9O31yZXR1cm4gc3Vic2NyaXB0aW9uLnByb21pc2UoKTt9Ly8gU2VydmVyIG9ubHlcbmlmKHR5cGVvZiB3aW5kb3c9PT0ndW5kZWZpbmVkJyl7QUxMX0lOSVRJQUxJWkVSUy5wdXNoKGluaXQpO30vLyBDbGllbnQgb25seVxuaWYoIWluaXRpYWxpemVkJiZ0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcmJnR5cGVvZiBvcHRzLndlYnBhY2s9PT0nZnVuY3Rpb24nKXtjb25zdCBtb2R1bGVJZHM9b3B0cy53ZWJwYWNrKCk7UkVBRFlfSU5JVElBTElaRVJTLnB1c2goaWRzPT57Zm9yKGNvbnN0IG1vZHVsZUlkIG9mIG1vZHVsZUlkcyl7aWYoaWRzLmluZGV4T2YobW9kdWxlSWQpIT09LTEpe3JldHVybiBpbml0KCk7fX19KTt9Y29uc3QgTG9hZGFibGVDb21wb25lbnQ9KHByb3BzLHJlZik9Pntpbml0KCk7Y29uc3QgY29udGV4dD1fcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9sb2FkYWJsZUNvbnRleHQuTG9hZGFibGVDb250ZXh0KTtjb25zdCBzdGF0ZT0oMCxfdXNlU3Vic2NyaXB0aW9uLnVzZVN1YnNjcmlwdGlvbikoc3Vic2NyaXB0aW9uKTtfcmVhY3QuZGVmYXVsdC51c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwoKT0+KHtyZXRyeTpzdWJzY3JpcHRpb24ucmV0cnl9KSxbXSk7aWYoY29udGV4dCYmQXJyYXkuaXNBcnJheShvcHRzLm1vZHVsZXMpKXtvcHRzLm1vZHVsZXMuZm9yRWFjaChtb2R1bGVOYW1lPT57Y29udGV4dChtb2R1bGVOYW1lKTt9KTt9cmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntpZihzdGF0ZS5sb2FkaW5nfHxzdGF0ZS5lcnJvcil7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQob3B0cy5sb2FkaW5nLHtpc0xvYWRpbmc6c3RhdGUubG9hZGluZyxwYXN0RGVsYXk6c3RhdGUucGFzdERlbGF5LHRpbWVkT3V0OnN0YXRlLnRpbWVkT3V0LGVycm9yOnN0YXRlLmVycm9yLHJldHJ5OnN1YnNjcmlwdGlvbi5yZXRyeX0pO31lbHNlIGlmKHN0YXRlLmxvYWRlZCl7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQocmVzb2x2ZShzdGF0ZS5sb2FkZWQpLHByb3BzKTt9ZWxzZXtyZXR1cm4gbnVsbDt9fSxbcHJvcHMsc3RhdGVdKTt9O0xvYWRhYmxlQ29tcG9uZW50LnByZWxvYWQ9KCk9PmluaXQoKTtMb2FkYWJsZUNvbXBvbmVudC5kaXNwbGF5TmFtZT0nTG9hZGFibGVDb21wb25lbnQnO3JldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5mb3J3YXJkUmVmKExvYWRhYmxlQ29tcG9uZW50KTt9Y2xhc3MgTG9hZGFibGVTdWJzY3JpcHRpb257Y29uc3RydWN0b3IobG9hZEZuLG9wdHMpe3RoaXMuX2xvYWRGbj1sb2FkRm47dGhpcy5fb3B0cz1vcHRzO3RoaXMuX2NhbGxiYWNrcz1uZXcgU2V0KCk7dGhpcy5fZGVsYXk9bnVsbDt0aGlzLl90aW1lb3V0PW51bGw7dGhpcy5yZXRyeSgpO31wcm9taXNlKCl7cmV0dXJuIHRoaXMuX3Jlcy5wcm9taXNlO31yZXRyeSgpe3RoaXMuX2NsZWFyVGltZW91dHMoKTt0aGlzLl9yZXM9dGhpcy5fbG9hZEZuKHRoaXMuX29wdHMubG9hZGVyKTt0aGlzLl9zdGF0ZT17cGFzdERlbGF5OmZhbHNlLHRpbWVkT3V0OmZhbHNlfTtjb25zdHtfcmVzOnJlcyxfb3B0czpvcHRzfT10aGlzO2lmKHJlcy5sb2FkaW5nKXtpZih0eXBlb2Ygb3B0cy5kZWxheT09PSdudW1iZXInKXtpZihvcHRzLmRlbGF5PT09MCl7dGhpcy5fc3RhdGUucGFzdERlbGF5PXRydWU7fWVsc2V7dGhpcy5fZGVsYXk9c2V0VGltZW91dCgoKT0+e3RoaXMuX3VwZGF0ZSh7cGFzdERlbGF5OnRydWV9KTt9LG9wdHMuZGVsYXkpO319aWYodHlwZW9mIG9wdHMudGltZW91dD09PSdudW1iZXInKXt0aGlzLl90aW1lb3V0PXNldFRpbWVvdXQoKCk9Pnt0aGlzLl91cGRhdGUoe3RpbWVkT3V0OnRydWV9KTt9LG9wdHMudGltZW91dCk7fX10aGlzLl9yZXMucHJvbWlzZS50aGVuKCgpPT57dGhpcy5fdXBkYXRlKHt9KTt0aGlzLl9jbGVhclRpbWVvdXRzKCk7fSkuY2F0Y2goX2Vycj0+e3RoaXMuX3VwZGF0ZSh7fSk7dGhpcy5fY2xlYXJUaW1lb3V0cygpO30pO3RoaXMuX3VwZGF0ZSh7fSk7fV91cGRhdGUocGFydGlhbCl7dGhpcy5fc3RhdGU9ey4uLnRoaXMuX3N0YXRlLGVycm9yOnRoaXMuX3Jlcy5lcnJvcixsb2FkZWQ6dGhpcy5fcmVzLmxvYWRlZCxsb2FkaW5nOnRoaXMuX3Jlcy5sb2FkaW5nLC4uLnBhcnRpYWx9O3RoaXMuX2NhbGxiYWNrcy5mb3JFYWNoKGNhbGxiYWNrPT5jYWxsYmFjaygpKTt9X2NsZWFyVGltZW91dHMoKXtjbGVhclRpbWVvdXQodGhpcy5fZGVsYXkpO2NsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTt9Z2V0Q3VycmVudFZhbHVlKCl7cmV0dXJuIHRoaXMuX3N0YXRlO31zdWJzY3JpYmUoY2FsbGJhY2spe3RoaXMuX2NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO3JldHVybigpPT57dGhpcy5fY2FsbGJhY2tzLmRlbGV0ZShjYWxsYmFjayk7fTt9fWZ1bmN0aW9uIExvYWRhYmxlKG9wdHMpe3JldHVybiBjcmVhdGVMb2FkYWJsZUNvbXBvbmVudChsb2FkLG9wdHMpO31mdW5jdGlvbiBmbHVzaEluaXRpYWxpemVycyhpbml0aWFsaXplcnMsaWRzKXtsZXQgcHJvbWlzZXM9W107d2hpbGUoaW5pdGlhbGl6ZXJzLmxlbmd0aCl7bGV0IGluaXQ9aW5pdGlhbGl6ZXJzLnBvcCgpO3Byb21pc2VzLnB1c2goaW5pdChpZHMpKTt9cmV0dXJuIFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpPT57aWYoaW5pdGlhbGl6ZXJzLmxlbmd0aCl7cmV0dXJuIGZsdXNoSW5pdGlhbGl6ZXJzKGluaXRpYWxpemVycyxpZHMpO319KTt9TG9hZGFibGUucHJlbG9hZEFsbD0oKT0+e3JldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZUluaXRpYWxpemVycyxyZWplY3QpPT57Zmx1c2hJbml0aWFsaXplcnMoQUxMX0lOSVRJQUxJWkVSUykudGhlbihyZXNvbHZlSW5pdGlhbGl6ZXJzLHJlamVjdCk7fSk7fTtMb2FkYWJsZS5wcmVsb2FkUmVhZHk9KGlkcz1bXSk9PntyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZVByZWxvYWQ9Pntjb25zdCByZXM9KCk9Pntpbml0aWFsaXplZD10cnVlO3JldHVybiByZXNvbHZlUHJlbG9hZCgpO307Ly8gV2UgYWx3YXlzIHdpbGwgcmVzb2x2ZSwgZXJyb3JzIHNob3VsZCBiZSBoYW5kbGVkIHdpdGhpbiBsb2FkaW5nIFVJcy5cbmZsdXNoSW5pdGlhbGl6ZXJzKFJFQURZX0lOSVRJQUxJWkVSUyxpZHMpLnRoZW4ocmVzLHJlcyk7fSk7fTtpZih0eXBlb2Ygd2luZG93IT09J3VuZGVmaW5lZCcpe3dpbmRvdy5fX05FWFRfUFJFTE9BRFJFQURZPUxvYWRhYmxlLnByZWxvYWRSZWFkeTt9dmFyIF9kZWZhdWx0PUxvYWRhYmxlO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvYWRhYmxlLmpzLm1hcCIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGYWRlIH0gZnJvbSBcInJlYWN0LWF3ZXNvbWUtcmV2ZWFsXCJcclxuaW1wb3J0IHtcclxuICBWRm9vdGVyLFxyXG4gIFZNYWluSGVhZGVyLFxyXG4gIFZNZW51QmFyLFxyXG4gIFZUb29sc1RlY2hcclxufSBmcm9tICcuLi8uLi91dGlscydcclxuaW1wb3J0IHtcclxuICBjaGV2cm9uRG93bixcclxuICBzYWRlZ2hMb2dvXzJcclxufSBmcm9tICcuLi8uLi9hc3NldHMnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnXHJcblxyXG5jb25zdCBDcmlzcFdpdGhOb1NTUiA9IGR5bmFtaWMoXHJcbiAgKCkgPT4gaW1wb3J0KCcuLycpLFxyXG4gIHsgc3NyOiBmYWxzZSB9XHJcbilcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZIb21lKCkge1xyXG5cclxuICB1c2VFZmZlY3QoICgpID0+IHtcclxuICAgIHdpbmRvdy4kY3Jpc3AgPSBbXTtcclxuICAgIHdpbmRvdy5DUklTUF9XRUJTSVRFX0lEID0gJzM5ODNhYmMxLTAyZTgtNDY5My04OGEyLTU2MzEwZWE3NzVhMCc7XHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICBjb25zdCBkID0gZG9jdW1lbnQ7XHJcbiAgICAgIGNvbnN0IHMgPSBkLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICBzLnNyYyA9ICdodHRwczovL2NsaWVudC5jcmlzcC5jaGF0L2wuanMnO1xyXG4gICAgICBzLmFzeW5jID0gdHJ1ZTtcclxuICAgICAgZC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHMpO1xyXG4gICAgfSkoKTtcclxuICB9LFtdKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhvbWVDb250YWluZXJ9PlxyXG4gICAgICA8Q3Jpc3BXaXRoTm9TU1IgLz5cclxuICAgICAgPEhlYWQ+XHJcbiAgICAgICAgPHRpdGxlPlNhZGVnaCBBa2Jhcmk8L3RpdGxlPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJUaGlzIGlzIG15IHBvcnRmb2xpbyBwYWdlLiBUaGUgcHVycG9zZSBvZiB0aGlzIHBhZ2UgaXMgdG8gaW50cm9kdWNlIG15IHBlcnNvbiwgbXkgY29kaW5nIHN0eWxlLCBhbmQgc2hvdyBvZmYgYSBsaXR0bGUgYml0IG9mIG15IHdlYiBkZXZlbG9wbWVudCBza2lsbHMuXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwiYXV0aG9yXCIgY29udGVudD1cIlNhZGVnaCBBa2JhcmlcIi8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD1cIlNhZGVnaCwgQWtiYXJpLCBQb3J0Zm9saW8sIEZyb250ZW5kXCIvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PVwiaHR0cHM6Ly93d3cua2h1ZHppZWMuY29tL3BvcnRmb2xpb1BhZ2UucG5nXCIga2V5PVwib2dpbWFnZVwiLz5cclxuICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljbz9cIiB0eXBlPVwiaW1hZ2UveC1pY29uXCIvPlxyXG4gICAgICA8L0hlYWQ+XHJcbiAgICAgIDxWTWVudUJhciBhY3RpdmVUYWI9XCJIb21lXCIvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW50cm99PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbnRyb2R1Y3Rpb259PlxyXG4gICAgICAgICAgICA8Vk1haW5IZWFkZXIvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVQaWN0dXJlfT5cclxuICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgIGFsdD1cIlByb2ZpbGUgcGljdHVyZSBvZiBLYXJvbGluYSBIdWR6aWVjLlwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e3NhZGVnaExvZ29fMn0vPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zd2lwZURvd25JY29ufT5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2hldnJvbiBkb3duIGljb24uXCJcclxuICAgICAgICAgICAgICBzcmM9e2NoZXZyb25Eb3dufVxyXG4gICAgICAgICAgICAgIHdpZHRoPVwiNDBweFwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTVweFwiLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMud29ya0hpc3Rvcnl9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rQm94fT5cclxuICAgICAgICAgICAgPEZhZGU+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtCb3hUaXRsZX0+V29yazxici8+SGlzdG9yeTwvaDE+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtCb3hUZXh0Q29udGVudH0+SGVyZSB5b3UgY2FuIGZpbmQgb3V0IG1vcmUgYWJvdXQgdGhlIGNvbXBhbmllcyBJJ3ZlIGNvbGxhYm9yYXRlZCB3aXRoLCBwcm9qZWN0cyBJJ3ZlIGJlZW4gcGFydCBvZiBhbmQgdGhlIHRlY2hub2xvZ2llcyBJIHVzZSBldmVyeSBkYXkuPC9oMj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3dvcmsvd29ya2B9PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtzdHlsZXMubGlua0JveEJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgICAgIENoZWNrIG91dCBteSB3b3JrIGhpc3RvcnlcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvRmFkZT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53b3JrSGlzdG9yeUJhY2tncm91bmR9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRlY2hub2xvZ2llc0FuZFRvb2xzfT5cclxuICAgICAgICAgIDxGYWRlPlxyXG4gICAgICAgICAgICA8aDE+VGVjaG5vbG9naWVzICYgVG9vbHMgSSB3b3JrIHdpdGg8L2gxPlxyXG4gICAgICAgICAgICA8VlRvb2xzVGVjaC8+XHJcbiAgICAgICAgICA8L0ZhZGU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wZXJzb25hbFByb2plY3RzfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saW5rQm94fT5cclxuICAgICAgICAgICAgICA8RmFkZT5cclxuICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5saW5rQm94VGl0bGV9PkFib3V0IG1lPC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5saW5rQm94VGV4dENvbnRlbnR9PkhlcmUgeW91IGNhbiBmaW5kIG91dCBtb3JlIGFib3V0IG1lLCBteSBob2JiaWVzIGFuZCBwZXJzb25hbCBwcm9qZWN0IEknbSBjdXJyZW50bHkgd29ya2luZyBvbi48L2gyPlxyXG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e2AvYWJvdXQvYWJvdXRgfT4gKi99XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17c3R5bGVzLmxpbmtCb3hCdXR0b259PlxyXG4gICAgICAgICAgICAgICAgICAgIEdldCB0byBrbm93IG1vcmUgYWJvdXQgbWVcclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XHJcbiAgICAgICAgICAgICAgPC9GYWRlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucGVyc29uYWxQcm9qZWN0c0JhY2tncm91bmR9Lz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxWRm9vdGVyLz5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9uZXh0LXNlcnZlci9saWIvZHluYW1pYycpXG4iLCIvKiogQGxpY2Vuc2UgUmVhY3QgdnVuZGVmaW5lZFxuICogdXNlLXN1YnNjcmlwdGlvbi5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbnZhciBfYXNzaWduID0gcmVxdWlyZSgnb2JqZWN0LWFzc2lnbicpO1xudmFyIHJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuLy9cbi8vIEluIG9yZGVyIHRvIGF2b2lkIHJlbW92aW5nIGFuZCByZS1hZGRpbmcgc3Vic2NyaXB0aW9ucyBlYWNoIHRpbWUgdGhpcyBob29rIGlzIGNhbGxlZCxcbi8vIHRoZSBwYXJhbWV0ZXJzIHBhc3NlZCB0byB0aGlzIGhvb2sgc2hvdWxkIGJlIG1lbW9pemVkIGluIHNvbWUgd2F54oCTXG4vLyBlaXRoZXIgYnkgd3JhcHBpbmcgdGhlIGVudGlyZSBwYXJhbXMgb2JqZWN0IHdpdGggdXNlTWVtbygpXG4vLyBvciBieSB3cmFwcGluZyB0aGUgaW5kaXZpZHVhbCBjYWxsYmFja3Mgd2l0aCB1c2VDYWxsYmFjaygpLlxuXG5mdW5jdGlvbiB1c2VTdWJzY3JpcHRpb24oX3JlZikge1xuICB2YXIgZ2V0Q3VycmVudFZhbHVlID0gX3JlZi5nZXRDdXJyZW50VmFsdWUsXG4gICAgICBzdWJzY3JpYmUgPSBfcmVmLnN1YnNjcmliZTtcblxuICAvLyBSZWFkIHRoZSBjdXJyZW50IHZhbHVlIGZyb20gb3VyIHN1YnNjcmlwdGlvbi5cbiAgLy8gV2hlbiB0aGlzIHZhbHVlIGNoYW5nZXMsIHdlJ2xsIHNjaGVkdWxlIGFuIHVwZGF0ZSB3aXRoIFJlYWN0LlxuICAvLyBJdCdzIGltcG9ydGFudCB0byBhbHNvIHN0b3JlIHRoZSBob29rIHBhcmFtcyBzbyB0aGF0IHdlIGNhbiBjaGVjayBmb3Igc3RhbGVuZXNzLlxuICAvLyAoU2VlIHRoZSBjb21tZW50IGluIGNoZWNrRm9yVXBkYXRlcygpIGJlbG93IGZvciBtb3JlIGluZm8uKVxuICB2YXIgX3VzZVN0YXRlID0gcmVhY3QudXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBnZXRDdXJyZW50VmFsdWU6IGdldEN1cnJlbnRWYWx1ZSxcbiAgICAgIHN1YnNjcmliZTogc3Vic2NyaWJlLFxuICAgICAgdmFsdWU6IGdldEN1cnJlbnRWYWx1ZSgpXG4gICAgfTtcbiAgfSksXG4gICAgICBzdGF0ZSA9IF91c2VTdGF0ZVswXSxcbiAgICAgIHNldFN0YXRlID0gX3VzZVN0YXRlWzFdO1xuXG4gIHZhciB2YWx1ZVRvUmV0dXJuID0gc3RhdGUudmFsdWU7IC8vIElmIHBhcmFtZXRlcnMgaGF2ZSBjaGFuZ2VkIHNpbmNlIG91ciBsYXN0IHJlbmRlciwgc2NoZWR1bGUgYW4gdXBkYXRlIHdpdGggaXRzIGN1cnJlbnQgdmFsdWUuXG5cbiAgaWYgKHN0YXRlLmdldEN1cnJlbnRWYWx1ZSAhPT0gZ2V0Q3VycmVudFZhbHVlIHx8IHN0YXRlLnN1YnNjcmliZSAhPT0gc3Vic2NyaWJlKSB7XG4gICAgLy8gSWYgdGhlIHN1YnNjcmlwdGlvbiBoYXMgYmVlbiB1cGRhdGVkLCB3ZSdsbCBzY2hlZHVsZSBhbm90aGVyIHVwZGF0ZSB3aXRoIFJlYWN0LlxuICAgIC8vIFJlYWN0IHdpbGwgcHJvY2VzcyB0aGlzIHVwZGF0ZSBpbW1lZGlhdGVseSwgc28gdGhlIG9sZCBzdWJzY3JpcHRpb24gdmFsdWUgd29uJ3QgYmUgY29tbWl0dGVkLlxuICAgIC8vIEl0IGlzIHN0aWxsIG5pY2UgdG8gYXZvaWQgcmV0dXJuaW5nIGEgbWlzbWF0Y2hlZCB2YWx1ZSB0aG91Z2gsIHNvIGxldCdzIG92ZXJyaWRlIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgdmFsdWVUb1JldHVybiA9IGdldEN1cnJlbnRWYWx1ZSgpO1xuICAgIHNldFN0YXRlKHtcbiAgICAgIGdldEN1cnJlbnRWYWx1ZTogZ2V0Q3VycmVudFZhbHVlLFxuICAgICAgc3Vic2NyaWJlOiBzdWJzY3JpYmUsXG4gICAgICB2YWx1ZTogdmFsdWVUb1JldHVyblxuICAgIH0pO1xuICB9IC8vIERpc3BsYXkgdGhlIGN1cnJlbnQgdmFsdWUgZm9yIHRoaXMgaG9vayBpbiBSZWFjdCBEZXZUb29scy5cblxuXG4gIHJlYWN0LnVzZURlYnVnVmFsdWUodmFsdWVUb1JldHVybik7IC8vIEl0IGlzIGltcG9ydGFudCBub3QgdG8gc3Vic2NyaWJlIHdoaWxlIHJlbmRlcmluZyBiZWNhdXNlIHRoaXMgY2FuIGxlYWQgdG8gbWVtb3J5IGxlYWtzLlxuICAvLyAoTGVhcm4gbW9yZSBhdCByZWFjdGpzLm9yZy9kb2NzL3N0cmljdC1tb2RlLmh0bWwjZGV0ZWN0aW5nLXVuZXhwZWN0ZWQtc2lkZS1lZmZlY3RzKVxuICAvLyBJbnN0ZWFkLCB3ZSB3YWl0IHVudGlsIHRoZSBjb21taXQgcGhhc2UgdG8gYXR0YWNoIG91ciBoYW5kbGVyLlxuICAvL1xuICAvLyBXZSBpbnRlbnRpb25hbGx5IHVzZSBhIHBhc3NpdmUgZWZmZWN0ICh1c2VFZmZlY3QpIHJhdGhlciB0aGFuIGEgc3luY2hyb25vdXMgb25lICh1c2VMYXlvdXRFZmZlY3QpXG4gIC8vIHNvIHRoYXQgd2UgZG9uJ3Qgc3RyZXRjaCB0aGUgY29tbWl0IHBoYXNlLlxuICAvLyBUaGlzIGFsc28gaGFzIGFuIGFkZGVkIGJlbmVmaXQgd2hlbiBtdWx0aXBsZSBjb21wb25lbnRzIGFyZSBzdWJzY3JpYmVkIHRvIHRoZSBzYW1lIHNvdXJjZTpcbiAgLy8gSXQgYWxsb3dzIGVhY2ggb2YgdGhlIGV2ZW50IGhhbmRsZXJzIHRvIHNhZmVseSBzY2hlZHVsZSB3b3JrIHdpdGhvdXQgcG90ZW50aWFsbHkgcmVtb3ZpbmcgYW4gYW5vdGhlciBoYW5kbGVyLlxuICAvLyAoTGVhcm4gbW9yZSBhdCBodHRwczovL2NvZGVzYW5kYm94LmlvL3MvazB5dnI1OTcwbylcblxuICByZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHZhciBkaWRVbnN1YnNjcmliZSA9IGZhbHNlO1xuXG4gICAgdmFyIGNoZWNrRm9yVXBkYXRlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIEl0J3MgcG9zc2libGUgdGhhdCB0aGlzIGNhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCBldmVuIGFmdGVyIGJlaW5nIHVuc3Vic2NyaWJlZCxcbiAgICAgIC8vIGlmIGl0J3MgcmVtb3ZlZCBhcyBhIHJlc3VsdCBvZiBhIHN1YnNjcmlwdGlvbiBldmVudC91cGRhdGUuXG4gICAgICAvLyBJbiB0aGlzIGNhc2UsIFJlYWN0IHdpbGwgbG9nIGEgREVWIHdhcm5pbmcgYWJvdXQgYW4gdXBkYXRlIGZyb20gYW4gdW5tb3VudGVkIGNvbXBvbmVudC5cbiAgICAgIC8vIFdlIGNhbiBhdm9pZCB0cmlnZ2VyaW5nIHRoYXQgd2FybmluZyB3aXRoIHRoaXMgY2hlY2suXG4gICAgICBpZiAoZGlkVW5zdWJzY3JpYmUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSAvLyBXZSB1c2UgYSBzdGF0ZSB1cGRhdGVyIGZ1bmN0aW9uIHRvIGF2b2lkIHNjaGVkdWxpbmcgd29yayBmb3IgYSBzdGFsZSBzb3VyY2UuXG4gICAgICAvLyBIb3dldmVyIGl0J3MgaW1wb3J0YW50IHRvIGVhZ2VybHkgcmVhZCB0aGUgY3VycmVudGx5IHZhbHVlLFxuICAgICAgLy8gc28gdGhhdCBhbGwgc2NoZWR1bGVkIHdvcmsgc2hhcmVzIHRoZSBzYW1lIHZhbHVlIChpbiB0aGUgZXZlbnQgb2YgbXVsdGlwbGUgc3Vic2NyaXB0aW9ucykuXG4gICAgICAvLyBUaGlzIGF2b2lkcyB2aXN1YWwgXCJ0ZWFyaW5nXCIgd2hlbiBhIG11dGF0aW9uIGhhcHBlbnMgZHVyaW5nIGEgKGNvbmN1cnJlbnQpIHJlbmRlci5cblxuXG4gICAgICB2YXIgdmFsdWUgPSBnZXRDdXJyZW50VmFsdWUoKTtcbiAgICAgIHNldFN0YXRlKGZ1bmN0aW9uIChwcmV2U3RhdGUpIHtcbiAgICAgICAgLy8gSWdub3JlIHZhbHVlcyBmcm9tIHN0YWxlIHNvdXJjZXMhXG4gICAgICAgIC8vIFNpbmNlIHdlIHN1YnNjcmliZSBhbiB1bnN1YnNjcmliZSBpbiBhIHBhc3NpdmUgZWZmZWN0LFxuICAgICAgICAvLyBpdCdzIHBvc3NpYmxlIHRoYXQgdGhpcyBjYWxsYmFjayB3aWxsIGJlIGludm9rZWQgZm9yIGEgc3RhbGUgKHByZXZpb3VzKSBzdWJzY3JpcHRpb24uXG4gICAgICAgIC8vIFRoaXMgY2hlY2sgYXZvaWRzIHNjaGVkdWxpbmcgYW4gdXBkYXRlIGZvciB0aGF0IHN0YWxlIHN1YnNjcmlwdGlvbi5cbiAgICAgICAgaWYgKHByZXZTdGF0ZS5nZXRDdXJyZW50VmFsdWUgIT09IGdldEN1cnJlbnRWYWx1ZSB8fCBwcmV2U3RhdGUuc3Vic2NyaWJlICE9PSBzdWJzY3JpYmUpIHtcbiAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9IC8vIFNvbWUgc3Vic2NyaXB0aW9ucyB3aWxsIGF1dG8taW52b2tlIHRoZSBoYW5kbGVyLCBldmVuIGlmIHRoZSB2YWx1ZSBoYXNuJ3QgY2hhbmdlZC5cbiAgICAgICAgLy8gSWYgdGhlIHZhbHVlIGhhc24ndCBjaGFuZ2VkLCBubyB1cGRhdGUgaXMgbmVlZGVkLlxuICAgICAgICAvLyBSZXR1cm4gc3RhdGUgYXMtaXMgc28gUmVhY3QgY2FuIGJhaWwgb3V0IGFuZCBhdm9pZCBhbiB1bm5lY2Vzc2FyeSByZW5kZXIuXG5cblxuICAgICAgICBpZiAocHJldlN0YXRlLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2Fzc2lnbih7fSwgcHJldlN0YXRlLCB7XG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciB1bnN1YnNjcmliZSA9IHN1YnNjcmliZShjaGVja0ZvclVwZGF0ZXMpOyAvLyBCZWNhdXNlIHdlJ3JlIHN1YnNjcmliaW5nIGluIGEgcGFzc2l2ZSBlZmZlY3QsXG4gICAgLy8gaXQncyBwb3NzaWJsZSB0aGF0IGFuIHVwZGF0ZSBoYXMgb2NjdXJyZWQgYmV0d2VlbiByZW5kZXIgYW5kIG91ciBlZmZlY3QgaGFuZGxlci5cbiAgICAvLyBDaGVjayBmb3IgdGhpcyBhbmQgc2NoZWR1bGUgYW4gdXBkYXRlIGlmIHdvcmsgaGFzIG9jY3VycmVkLlxuXG4gICAgY2hlY2tGb3JVcGRhdGVzKCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpZFVuc3Vic2NyaWJlID0gdHJ1ZTtcbiAgICAgIHVuc3Vic2NyaWJlKCk7XG4gICAgfTtcbiAgfSwgW2dldEN1cnJlbnRWYWx1ZSwgc3Vic2NyaWJlXSk7IC8vIFJldHVybiB0aGUgY3VycmVudCB2YWx1ZSBmb3Igb3VyIGNhbGxlciB0byB1c2Ugd2hpbGUgcmVuZGVyaW5nLlxuXG4gIHJldHVybiB2YWx1ZVRvUmV0dXJuO1xufVxuXG5leHBvcnRzLnVzZVN1YnNjcmlwdGlvbiA9IHVzZVN1YnNjcmlwdGlvbjtcbiAgfSkoKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy91c2Utc3Vic2NyaXB0aW9uLnByb2R1Y3Rpb24ubWluLmpzJyk7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY2pzL3VzZS1zdWJzY3JpcHRpb24uZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=