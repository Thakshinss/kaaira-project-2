"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(pages)/courses/page",{

/***/ "(app-pages-browser)/./app/(pages)/courses/page.jsx":
/*!**************************************!*\
  !*** ./app/(pages)/courses/page.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Courses() {\n    _s();\n    const [courses, setCourses] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [isLoading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        fetch(\"/api/courses\").then((res)=>res.json()).then((data)=>{\n            setCourses(data.courses);\n            setLoading(false);\n        });\n    }, []);\n    console.log(\"THE DATA ISSSSs\", JSON.stringify(courses));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-wrap justify-between\",\n        children: courses.map((c)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                href: \"/courses/\".concat(c.id),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                            src: c.img,\n                            width: 500,\n                            height: 500,\n                            alt: \"Picture of the author\"\n                        }, void 0, false, {\n                            fileName: \"/home/thakshin/Projects/Karya/kaaira-project-2/app/(pages)/courses/page.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-xl font-bold\",\n                                    children: c.name\n                                }, void 0, false, {\n                                    fileName: \"/home/thakshin/Projects/Karya/kaaira-project-2/app/(pages)/courses/page.jsx\",\n                                    lineNumber: 34,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        c.description,\n                                        \"...\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/thakshin/Projects/Karya/kaaira-project-2/app/(pages)/courses/page.jsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/thakshin/Projects/Karya/kaaira-project-2/app/(pages)/courses/page.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/thakshin/Projects/Karya/kaaira-project-2/app/(pages)/courses/page.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            }, c.id, false, {\n                fileName: \"/home/thakshin/Projects/Karya/kaaira-project-2/app/(pages)/courses/page.jsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/home/thakshin/Projects/Karya/kaaira-project-2/app/(pages)/courses/page.jsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Courses, \"5kk7KtLyrCnY6ylkmpjc4yewSSg=\");\n_c = Courses;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Courses);\nvar _c;\n$RefreshReg$(_c, \"Courses\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocGFnZXMpL2NvdXJzZXMvcGFnZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDOEI7QUFDRjtBQUNIO0FBQ2lCO0FBRzFDLFNBQVNLOztJQUNQLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQyxFQUFFO0lBQ3pDLE1BQU0sQ0FBQ0ssV0FBV0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQztJQUV6Q0MsZ0RBQVNBLENBQUM7UUFDUk0sTUFBTSxnQkFDSEMsSUFBSSxDQUFDLENBQUNDLE1BQVFBLElBQUlDLElBQUksSUFDdEJGLElBQUksQ0FBQyxDQUFDRztZQUNMUCxXQUFXTyxLQUFLUixPQUFPO1lBQ3ZCRyxXQUFXO1FBRWI7SUFDSixHQUFHLEVBQUU7SUFDTE0sUUFBUUMsR0FBRyxDQUFDLG1CQUFrQkMsS0FBS0MsU0FBUyxDQUFDWjtJQUU3QyxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTtrQkFDWmQsUUFBUWUsR0FBRyxDQUFDLENBQUNDLGtCQUNaLDhEQUFDckIsaURBQUlBO2dCQUFZc0IsTUFBTSxZQUFpQixPQUFMRCxFQUFFRSxFQUFFOzBCQUNyQyw0RUFBQ0w7O3NDQUNDLDhEQUFDbkIsa0RBQUtBOzRCQUNOeUIsS0FBS0gsRUFBRUksR0FBRzs0QkFDVkMsT0FBTzs0QkFDUEMsUUFBUTs0QkFDUkMsS0FBSTs7Ozs7O3NDQUNKLDhEQUFDVjs7OENBQ0MsOERBQUNXO29DQUFHVixXQUFVOzhDQUFxQkUsRUFBRVMsSUFBSTs7Ozs7OzhDQUN6Qyw4REFBQ0M7O3dDQUFHVixFQUFFVyxXQUFXO3dDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBVGJYLEVBQUVFLEVBQUU7Ozs7Ozs7Ozs7QUFrQnZCO0dBcENTbkI7S0FBQUE7QUFxQ1QsK0RBQWVBLE9BQU9BLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhwYWdlcykvY291cnNlcy9wYWdlLmpzeD9lMDkzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVN0YXRlLHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuXG5cbmZ1bmN0aW9uIENvdXJzZXMoKSB7XG4gIGNvbnN0IFtjb3Vyc2VzLCBzZXRDb3Vyc2VzXSA9IHVzZVN0YXRlKFtdKVxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG4gXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2goJy9hcGkvY291cnNlcycpXG4gICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgc2V0Q291cnNlcyhkYXRhLmNvdXJzZXMpXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIFxuICAgICAgfSlcbiAgfSwgW10pXG4gIGNvbnNvbGUubG9nKFwiVEhFIERBVEEgSVNTU1NzXCIsSlNPTi5zdHJpbmdpZnkoY291cnNlcykpO1xuICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXdyYXAganVzdGlmeS1iZXR3ZWVuJz5cbiAgICAgIHtjb3Vyc2VzLm1hcCgoYyk9PihcbiAgICAgICAgPExpbmsga2V5PXtjLmlkfSBocmVmPXtgL2NvdXJzZXMvJHtjLmlkfWB9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17Yy5pbWd9XG4gICAgICAgICAgICB3aWR0aD17NTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XG4gICAgICAgICAgICBhbHQ9XCJQaWN0dXJlIG9mIHRoZSBhdXRob3JcIi8+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LXhsIGZvbnQtYm9sZCc+e2MubmFtZX08L2gxPlxuICAgICAgICAgICAgICA8cD57Yy5kZXNjcmlwdGlvbn0uLi48L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIFxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xpbms+XG4gICAgICApKX1cblxuICAgIDwvZGl2PlxuICApXG59XG5leHBvcnQgZGVmYXVsdCBDb3Vyc2VzXG5cblxuIl0sIm5hbWVzIjpbIkltYWdlIiwiTGluayIsIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb3Vyc2VzIiwiY291cnNlcyIsInNldENvdXJzZXMiLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsImMiLCJocmVmIiwiaWQiLCJzcmMiLCJpbWciLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsImgxIiwibmFtZSIsInAiLCJkZXNjcmlwdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(pages)/courses/page.jsx\n"));

/***/ })

});