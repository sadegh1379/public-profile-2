self["webpackHotUpdate_N_E"]("utils_crisp_index_js",{

/***/ "./utils/crisp/index.js":
/*!******************************!*\
  !*** ./utils/crisp/index.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var E_web_designer_next_js_my_projects_Portfolio_sadegh_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_web_designer_next_js_my_projects_Portfolio_sadegh_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_web_designer_next_js_my_projects_Portfolio_sadegh_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_web_designer_next_js_my_projects_Portfolio_sadegh_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var E_web_designer_next_js_my_projects_Portfolio_sadegh_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* module decorator */ module = __webpack_require__.hmd(module);






function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,E_web_designer_next_js_my_projects_Portfolio_sadegh_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,E_web_designer_next_js_my_projects_Portfolio_sadegh_node_modules_next_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,E_web_designer_next_js_my_projects_Portfolio_sadegh_node_modules_next_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }



var Crisp = /*#__PURE__*/function (_React$Component) {
  (0,E_web_designer_next_js_my_projects_Portfolio_sadegh_node_modules_next_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.default)(Crisp, _React$Component);

  var _super = _createSuper(Crisp);

  function Crisp() {
    (0,E_web_designer_next_js_my_projects_Portfolio_sadegh_node_modules_next_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Crisp);

    return _super.apply(this, arguments);
  }

  (0,E_web_designer_next_js_my_projects_Portfolio_sadegh_node_modules_next_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Crisp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // Include the Crisp code here, without the <script></script> tags
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "YOUR_WEBSITE_ID";

      (function () {
        var d = document;
        var s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
      })();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return Crisp;
}((react__WEBPACK_IMPORTED_MODULE_5___default().Component));

/* harmony default export */ __webpack_exports__["default"] = (Crisp);

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY3Jpc3AvaW5kZXguanMiXSwibmFtZXMiOlsiQ3Jpc3AiLCJ3aW5kb3ciLCIkY3Jpc3AiLCJDUklTUF9XRUJTSVRFX0lEIiwiZCIsImRvY3VtZW50IiwicyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJhc3luYyIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiYXBwZW5kQ2hpbGQiLCJSZWFjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUNNQSxLOzs7Ozs7Ozs7Ozs7O3dDQUNnQjtBQUNsQjtBQUNBQyxZQUFNLENBQUNDLE1BQVAsR0FBZ0IsRUFBaEI7QUFDQUQsWUFBTSxDQUFDRSxnQkFBUCxHQUEwQixpQkFBMUI7O0FBRUEsT0FBQyxZQUFZO0FBQ1gsWUFBSUMsQ0FBQyxHQUFHQyxRQUFSO0FBQ0EsWUFBSUMsQ0FBQyxHQUFHRixDQUFDLENBQUNHLGFBQUYsQ0FBZ0IsUUFBaEIsQ0FBUjtBQUVBRCxTQUFDLENBQUNFLEdBQUYsR0FBUSxnQ0FBUjtBQUNBRixTQUFDLENBQUNHLEtBQUYsR0FBVSxDQUFWO0FBQ0FMLFNBQUMsQ0FBQ00sb0JBQUYsQ0FBdUIsTUFBdkIsRUFBK0IsQ0FBL0IsRUFBa0NDLFdBQWxDLENBQThDTCxDQUE5QztBQUNELE9BUEQ7QUFRRDs7OzZCQUVRO0FBQ1AsYUFBTyxJQUFQO0FBQ0Q7Ozs7RUFsQmlCTSx3RDs7QUFvQnBCLCtEQUFlWixLQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3V0aWxzX2NyaXNwX2luZGV4X2pzLjRhYjg5NTVlNGUyM2Q0N2ZjMDFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xyXG5jbGFzcyBDcmlzcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvLyBJbmNsdWRlIHRoZSBDcmlzcCBjb2RlIGhlcmUsIHdpdGhvdXQgdGhlIDxzY3JpcHQ+PC9zY3JpcHQ+IHRhZ3NcclxuICAgIHdpbmRvdy4kY3Jpc3AgPSBbXTtcclxuICAgIHdpbmRvdy5DUklTUF9XRUJTSVRFX0lEID0gXCJZT1VSX1dFQlNJVEVfSURcIjtcclxuXHJcbiAgICAoZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgZCA9IGRvY3VtZW50O1xyXG4gICAgICB2YXIgcyA9IGQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcclxuXHJcbiAgICAgIHMuc3JjID0gXCJodHRwczovL2NsaWVudC5jcmlzcC5jaGF0L2wuanNcIjtcclxuICAgICAgcy5hc3luYyA9IDE7XHJcbiAgICAgIGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKHMpO1xyXG4gICAgfSkoKTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDcmlzcDtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==