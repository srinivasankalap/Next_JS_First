"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/aboutus/[id]",{

/***/ "./pages/aboutus/[id].js":
/*!*******************************!*\
  !*** ./pages/aboutus/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst DeveloperPage = ()=>{\n    _s();\n    const details = [\n        {\n            id: 1,\n            name: \"Yash\",\n            role: \"Senior Developer\"\n        },\n        {\n            id: 2,\n            name: \"Vaibhav\",\n            role: \"Backend Developer\"\n        },\n        {\n            id: 3,\n            name: \"Suresh\",\n            role: \"Frontend Developer\"\n        }\n    ];\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const id = router.query.id;\n    const developer = details.find((item)=>item.id === Number(id));\n    if (!developer) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Developer does not exist\"\n        }, void 0, false, {\n            fileName: \"D:\\\\Sharpener\\\\Next JS\\\\pages\\\\aboutus\\\\[id].js\",\n            lineNumber: 17,\n            columnNumber: 16\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: [\n                developer.name,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: developer.role\n                }, void 0, false, {\n                    fileName: \"D:\\\\Sharpener\\\\Next JS\\\\pages\\\\aboutus\\\\[id].js\",\n                    lineNumber: 21,\n                    columnNumber: 30\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Sharpener\\\\Next JS\\\\pages\\\\aboutus\\\\[id].js\",\n            lineNumber: 21,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(DeveloperPage, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = DeveloperPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DeveloperPage);\nvar _c;\n$RefreshReg$(_c, \"DeveloperPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hYm91dHVzL1tpZF0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUV4QyxNQUFNQyxnQkFBYzs7SUFDaEIsTUFBTUMsVUFBVTtRQUVaO1lBQUVDLElBQUs7WUFBR0MsTUFBTTtZQUFRQyxNQUFNO1FBQWtCO1FBRWhEO1lBQUVGLElBQUs7WUFBR0MsTUFBTTtZQUFXQyxNQUFNO1FBQW1CO1FBRXBEO1lBQUVGLElBQUs7WUFBR0MsTUFBTTtZQUFVQyxNQUFNO1FBQW9CO0tBRW5EO0lBQ0wsTUFBTUMsU0FBT04sc0RBQVNBO0lBQ3RCLE1BQU1HLEtBQUdHLE9BQU9DLEtBQUssQ0FBQ0osRUFBRTtJQUN4QixNQUFNSyxZQUFVTixRQUFRTyxJQUFJLENBQUNDLENBQUFBLE9BQU1BLEtBQUtQLEVBQUUsS0FBR1EsT0FBT1I7SUFDcEQsSUFBSSxDQUFDSyxXQUFVO1FBQ1gscUJBQU8sOERBQUNJO3NCQUFHOzs7Ozs7SUFDZjtJQUVBLHFCQUFPO2tCQUNILDRFQUFDQTs7Z0JBQUlKLFVBQVVKLElBQUk7Z0JBQUM7OEJBQUMsOERBQUNTOzhCQUFHTCxVQUFVSCxJQUFJOzs7Ozs7Ozs7Ozs7O0FBRS9DO0dBcEJNSjs7UUFVV0Qsa0RBQVNBOzs7S0FWcEJDO0FBcUJOLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Fib3V0dXMvW2lkXS5qcz80NTMzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuY29uc3QgRGV2ZWxvcGVyUGFnZT0oKT0+e1xyXG4gICAgY29uc3QgZGV0YWlscyA9IFtcclxuXHJcbiAgICAgICAgeyBpZCA6IDEsIG5hbWU6ICdZYXNoJywgcm9sZTogJ1NlbmlvciBEZXZlbG9wZXInfSxcclxuICAgICAgICBcclxuICAgICAgICB7IGlkIDogMiwgbmFtZTogJ1ZhaWJoYXYnLCByb2xlOiAnQmFja2VuZCBEZXZlbG9wZXInfSxcclxuICAgICAgICBcclxuICAgICAgICB7IGlkIDogMywgbmFtZTogJ1N1cmVzaCcsIHJvbGU6ICdGcm9udGVuZCBEZXZlbG9wZXInfVxyXG4gICAgICAgIFxyXG4gICAgICAgIF1cclxuICAgIGNvbnN0IHJvdXRlcj11c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGlkPXJvdXRlci5xdWVyeS5pZDtcclxuICAgIGNvbnN0IGRldmVsb3Blcj1kZXRhaWxzLmZpbmQoaXRlbT0+aXRlbS5pZD09PU51bWJlcihpZCkpO1xyXG4gICAgaWYgKCFkZXZlbG9wZXIpe1xyXG4gICAgICAgIHJldHVybiA8aDE+RGV2ZWxvcGVyIGRvZXMgbm90IGV4aXN0PC9oMT5cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gPD5cclxuICAgICAgICA8aDE+e2RldmVsb3Blci5uYW1lfSA8cD57ZGV2ZWxvcGVyLnJvbGV9PC9wPjwvaDE+XHJcbiAgICA8Lz5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEZXZlbG9wZXJQYWdlOyJdLCJuYW1lcyI6WyJ1c2VSb3V0ZXIiLCJEZXZlbG9wZXJQYWdlIiwiZGV0YWlscyIsImlkIiwibmFtZSIsInJvbGUiLCJyb3V0ZXIiLCJxdWVyeSIsImRldmVsb3BlciIsImZpbmQiLCJpdGVtIiwiTnVtYmVyIiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/aboutus/[id].js\n"));

/***/ })

});