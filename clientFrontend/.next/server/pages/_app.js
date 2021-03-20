module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/common/widgets/Tap-Top.js":
/*!**********************************************!*\
  !*** ./components/common/widgets/Tap-Top.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\lenovo\\Documents\\pfe\\clean\\Baazar\\clientFrontend\\components\\common\\widgets\\Tap-Top.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const TapTop = () => {
  const {
    0: loader,
    1: setLoader
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: goingUp,
    1: setGoingUp
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    // Page Loader
    setTimeout(() => {
      setLoader(false);
    }, 1500); // Tap to Top Scroll 

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 500) setGoingUp(true);else setGoingUp(false);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  const tapToTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0
    });
  };

  return __jsx("div", {
    className: "tap-top top-cls",
    style: goingUp ? {
      display: 'block'
    } : {
      display: 'none'
    },
    onClick: tapToTop,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx("i", {
    className: "fa fa-angle-double-up",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 14
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TapTop);

/***/ }),

/***/ "./components/customizer/config.json":
/*!*******************************************!*\
  !*** ./components/customizer/config.json ***!
  \*******************************************/
/*! exports provided: config, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"config\":{\"layout_type\":\"ltr\",\"layout_version\":\"light\",\"color\":\"#ff4c3b\"}}");

/***/ }),

/***/ "./components/customizer/theme-settings.js":
/*!*************************************************!*\
  !*** ./components/customizer/theme-settings.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _helpers_theme_setting_SettingContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/theme-setting/SettingContext */ "./helpers/theme-setting/SettingContext.js");
/* harmony import */ var _services_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/script */ "./services/script.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./config.json */ "./components/customizer/config.json");
var _config_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./config.json */ "./components/customizer/config.json", 1);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\lenovo\\Documents\\pfe\\clean\\Baazar\\clientFrontend\\components\\customizer\\theme-settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const ThemeSettings = () => {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_helpers_theme_setting_SettingContext__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const {
    0: themeLayout,
    1: setThemeLayout
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const layoutType = context.layoutFun;
  const layoutColorFunc = context.layoutColorFun;
  const layoutState = context.state;
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const toggle = () => setModal(!modal);
  /*=====================
   Tap on Top
   ==========================*/


  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (_config_json__WEBPACK_IMPORTED_MODULE_4__["config"].layout_version && _config_json__WEBPACK_IMPORTED_MODULE_4__["config"].layout_type) {
      document.body.className = `${_config_json__WEBPACK_IMPORTED_MODULE_4__["config"].layout_version}  ${_config_json__WEBPACK_IMPORTED_MODULE_4__["config"].layout_type}`;
    }

    if (localStorage.getItem("color")) {
      document.documentElement.style.setProperty('--theme-deafult', localStorage.getItem("color"));
    }

    window.addEventListener('scroll', handleScroll);
    Object(_services_script__WEBPACK_IMPORTED_MODULE_2__["SlideUpDown"])('setting-title');
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (false) {}
  };

  const openSetting = () => {
    if (false) {}
  };

  const closeSetting = () => {
    if (false) {}
  };

  const changeThemeLayout = () => {
    setThemeLayout(!themeLayout);
  };

  if (themeLayout) {
    if (false) {}
  } else {
    if (false) {}
  }

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 9
    }
  }, __jsx("a", {
    href: null,
    onClick: () => openSetting(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "setting-sidebar",
    id: "setting-icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 17
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 21
    }
  }, __jsx("i", {
    className: "fa fa-cog",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 25
    }
  })))), __jsx("div", {
    id: "setting_box",
    className: "setting-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "# ",
    className: "overlay",
    onClick: () => closeSetting(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 17
    }
  }), __jsx("div", {
    className: "setting_box_body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 17
    }
  }, __jsx("div", {
    onClick: () => closeSetting(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "sidebar-back text-left",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 25
    }
  }, __jsx("i", {
    className: "fa fa-angle-left pr-2",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 29
    }
  }), " Back")), __jsx("div", {
    className: "setting-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 21
    }
  }, __jsx("div", {
    className: "setting-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 21
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 29
    }
  }, "color option")), __jsx("div", {
    className: "setting-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 25
    }
  }, __jsx("ul", {
    className: "color-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 29
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 33
    }
  }, __jsx("input", {
    id: "colorPicker1",
    type: "color",
    defaultValue: "#ff4c3b",
    name: "Background",
    onChange: e => layoutColorFunc(e),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 37
    }
  })), __jsx("span", {
    className: "ml-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 33
    }
  }, "theme deafult color"))), __jsx("div", {
    className: "setting-title",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 25
    }
  }, __jsx("h4", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 29
    }
  }, "RTL")), __jsx("div", {
    className: "setting-contant",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 25
    }
  }, __jsx("ul", {
    className: "setting_buttons",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 29
    }
  }, __jsx("li", {
    className: "active",
    id: "ltr_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 33
    }
  }, __jsx("a", {
    href: "# ",
    className: "btn setting_btn",
    onClick: () => layoutType(layoutState),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 37
    }
  }, layoutState)))), __jsx("div", {
    className: "buy_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 25
    }
  }, __jsx("a", {
    href: "https://themeforest.net/item/multikart-responsive-react-ecommerce-template/23067773?s_rank=1",
    className: "btn btn-block purchase_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fa fa-shopping-cart",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 33
    }
  }), " purchase Multikart now!"), __jsx("a", {
    href: "https://themeforest.net/item/multikart-responsive-angular-ecommerce-template/22905358?s_rank=3",
    className: "btn btn-block purchase_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    src: `/assets/images/icon/angular.png`,
    alt: "",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 33
    }
  }), " Multikart Angular"), __jsx("a", {
    href: "https://themeforest.net/item/multikart-responsive-ecommerce-html-template/22809967",
    className: "btn btn-block purchase_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 29
    }
  }, __jsx("i", {
    className: "fa fa-html5",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 33
    }
  }), " Multikart HTML"), __jsx("a", {
    href: "https://themeforest.net/item/multikart-multipurpose-shopify-sections-theme/23093831?s_rank=1",
    className: "btn btn-block purchase_btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 29
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Media"], {
    src: `/assets/images/icon/shopify.png`,
    alt: "",
    className: "img-fluid",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 33
    }
  }), " Multikart Shopify"))))), __jsx("div", {
    className: "sidebar-btn dark-light-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "dark-light",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "theme-layout-version",
    onClick: () => changeThemeLayout(),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 21
    }
  }, themeLayout ? 'Light' : 'Dark'))), __jsx("div", {
    className: "addcart_btm_popup",
    id: "fixed_cart_icon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: null,
    className: "fixed_cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 17
    }
  }, __jsx("i", {
    className: "fa fa-clone",
    "aria-hidden": "true",
    onClick: toggle,
    title: "Configuration",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 21
    }
  }))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    centered: true,
    isOpen: modal,
    toggle: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalHeader"], {
    toggle: toggle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 21
    }
  }, "Config"), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], {
    className: "p-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 21
    }
  }, Object.keys(_config_json__WEBPACK_IMPORTED_MODULE_4__["config"]).map((key, i) => __jsx("p", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162,
      columnNumber: 29
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163,
      columnNumber: 29
    }
  }, key, ":"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 29
    }
  }, _config_json__WEBPACK_IMPORTED_MODULE_4__["config"][key])))), __jsx(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ModalFooter"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 21
    }
  }, __jsx("p", {
    className: "lh-cls",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 25
    }
  }, __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 47
    }
  }, "Note: "), "Copy upper config and paste it in ", __jsx("b", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 94
    }
  }, "\"/components/customizer/config.json\""), " "))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 13
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ThemeSettings);

/***/ }),

/***/ "./helpers/Compare/CompareContext.js":
/*!*******************************************!*\
  !*** ./helpers/Compare/CompareContext.js ***!
  \*******************************************/
/*! exports provided: Context, Provider, CompareContext, CompareContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _CompareContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CompareContext */ "./helpers/Compare/CompareContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompareContext", function() { return _CompareContext__WEBPACK_IMPORTED_MODULE_2__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CompareContextProvider", function() { return _CompareContext__WEBPACK_IMPORTED_MODULE_2__["Provider"]; });

var _jsxFileName = "C:\\Users\\lenovo\\Documents\\pfe\\clean\\Baazar\\clientFrontend\\helpers\\Compare\\CompareContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  compareItems: Function,
  addToCompare: Function,
  removeFromComapre: Function
});

const getLocalCompareItems = () => {
  try {
    const list = localStorage.getItem('compare');

    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const Provider = props => {
  const {
    0: compareItems,
    1: setcompareItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getLocalCompareItems());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem('compare', JSON.stringify(compareItems));
  }, [compareItems]); // Add Product To Wishlist

  const addToCompare = item => {
    const index = compareItems.findIndex(compare => compare.id === item.id);

    if (index === -1) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Product Added Successfully !");
      setcompareItems([...compareItems, item]);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("This Product Already Added !");
    }
  }; // Remove Product From compare


  const removeFromComapre = item => {
    setcompareItems(compareItems.filter(e => e.id !== item.id));
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Product Removed Successfully !");
  };

  const {
    value
  } = props;
  return __jsx(Context.Provider, {
    value: {
      compareItems: compareItems,
      addToCompare: addToCompare,
      removeFromComapre: removeFromComapre
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }, props.children);
};


/***/ }),

/***/ "./helpers/Currency/CurrencyContext.js":
/*!*********************************************!*\
  !*** ./helpers/Currency/CurrencyContext.js ***!
  \*********************************************/
/*! exports provided: Context, Provider, Consumer, CurrencyContext, CurrencyContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyContext", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CurrencyContextProvider", function() { return _CurrencyContext__WEBPACK_IMPORTED_MODULE_1__["Provider"]; });

var _jsxFileName = "C:\\Users\\lenovo\\Documents\\pfe\\clean\\Baazar\\clientFrontend\\helpers\\Currency\\CurrencyContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({});
const Provider = props => {
  const {
    0: selectedCurr,
    1: selectedCurrency
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    currency: 'USD',
    symbol: '$',
    value: 1
  });
  const currencyContext = {
    selectedCurr,
    selectedCurrency
  };
  const {
    value
  } = props;
  return __jsx(Context.Provider, {
    value: {
      state: selectedCurr,
      currencyContext: currencyContext
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, props.children);
};
const {
  Consumer
} = Context;


/***/ }),

/***/ "./helpers/cart/CartContext.js":
/*!*************************************!*\
  !*** ./helpers/cart/CartContext.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./helpers/cart/index.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\lenovo\\Documents\\pfe\\clean\\Baazar\\clientFrontend\\helpers\\cart\\CartContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const getLocalCartItems = () => {
  try {
    const list = localStorage.getItem('cartList');

    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const CartProvider = props => {
  const {
    0: cartItems,
    1: setCartItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getLocalCartItems());
  const {
    0: cartTotal,
    1: setCartTotal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: quantity,
    1: setQuantity
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(1);
  const {
    0: stock,
    1: setStock
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('InStock');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const Total = cartItems.reduce((a, b) => +a + +b.total, 0);
    setCartTotal(Total);
    localStorage.setItem('cartList', JSON.stringify(cartItems));
  }, [cartItems]); // Add Product To Cart

  const addToCart = (item, quantity) => {
    react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Product Added Successfully !");
    const index = cartItems.findIndex(itm => itm.id === item.id);

    if (index !== -1) {
      const product = cartItems[index];
      cartItems[index] = _objectSpread(_objectSpread(_objectSpread({}, item), item), {}, {
        qty: quantity,
        total: (item.price - item.price * item.discount / 100) * quantity
      });
      setCartItems([...cartItems]);
    } else {
      const product = _objectSpread(_objectSpread({}, item), {}, {
        qty: quantity,
        total: item.price - item.price * item.discount / 100
      });

      setCartItems([...cartItems, product]);
    }
  };

  const removeFromCart = item => {
    react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error("Product Removed Successfully !");
    setCartItems(cartItems.filter(e => e.id !== item.id));
  };

  const minusQty = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setStock('InStock');
    }
  };

  const plusQty = item => {
    if (item.stock >= quantity) {
      setQuantity(quantity + 1);
    } else {
      setStock("Out of Stock !");
    }
  }; // Update Product Quantity


  const updateQty = (item, quantity) => {
    if (quantity >= 1) {
      const index = cartItems.findIndex(itm => itm.id === item.id);

      if (index !== -1) {
        const product = cartItems[index];
        cartItems[index] = _objectSpread(_objectSpread(_objectSpread({}, product), item), {}, {
          qty: quantity,
          total: item.price * quantity
        });
        setCartItems([...cartItems]);
        react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].info("Product Quantity Updated !");
      } else {
        const product = _objectSpread(_objectSpread({}, item), {}, {
          qty: quantity,
          total: (item.price - item.price * item.discount / 100) * quantity
        });

        setCartItems([...cartItems, product]);
        react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].success("Product Added Updated !");
      }
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_2__["toast"].error("Enter Valid Quantity !");
    }
  };

  const {
    value
  } = props;
  return __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: _objectSpread(_objectSpread({}, props), {}, {
      state: cartItems,
      cartTotal,
      setQuantity,
      quantity,
      stock,
      addToCart: addToCart,
      removeFromCart: removeFromCart,
      plusQty: plusQty,
      minusQty: minusQty,
      updateQty: updateQty
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 5
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (CartProvider);

/***/ }),

/***/ "./helpers/cart/index.js":
/*!*******************************!*\
  !*** ./helpers/cart/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const CartContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (CartContext);

/***/ }),

/***/ "./helpers/filter/FilterContext.js":
/*!*****************************************!*\
  !*** ./helpers/filter/FilterContext.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const FilterContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (FilterContext);

/***/ }),

/***/ "./helpers/filter/FilterProvider.js":
/*!******************************************!*\
  !*** ./helpers/filter/FilterProvider.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FilterContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterContext */ "./helpers/filter/FilterContext.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\lenovo\\Documents\\pfe\\clean\\Baazar\\clientFrontend\\helpers\\filter\\FilterProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const FilterProvider = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const brand = router.query.brand;
  const color = router.query.color;
  const size = router.query.size;
  const category = router.query.category;
  const min = router.query.min;
  const max = router.query.max;
  let sizeParam = size ? size.split(",") : null;
  let param = brand ? brand.split(",") : [];
  const {
    0: selectedCategory,
    1: setSelectedCategory
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(category ? category : "fashion");
  const {
    0: selectedBrands,
    1: setSelectedBrands
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(param ? param : []);
  const {
    0: selectedColor,
    1: setSelectedColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(color ? color : "");
  const {
    0: selectedSize,
    1: setSelectedSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(sizeParam ? sizeParam : []);
  const {
    0: selectedPrice,
    1: setSelectedPrice
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    min: min ? min : 0,
    max: max ? max : 500
  });
  const {
    0: isChecked,
    1: setIsChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: filterChecked,
    1: setFilterChecked
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{}]);

  const handleBrands = (brand, checked) => {
    var index = selectedBrands.indexOf(brand);

    if (index > -1) {
      setIsChecked(!isChecked);
      setFilterChecked([{
        brand,
        checked
      }]);
      setSelectedBrands(selectedBrands.filter(e => e !== brand));
    } else {
      setIsChecked(!isChecked);
      setFilterChecked([{
        brand,
        checked
      }]);
      setSelectedBrands([...selectedBrands, brand]);
    }
  };

  const handleSizes = (size, checked) => {
    var index = selectedSize.indexOf(size);

    if (index > -1) {
      setIsChecked(!isChecked);
      setFilterChecked([{
        size,
        checked
      }]);
      setSelectedSize(selectedSize.filter(e => e !== size));
    } else {
      setIsChecked(!isChecked);
      setFilterChecked([{
        size,
        checked
      }]);
      setSelectedSize([...selectedSize, size]);
    }
  };

  return __jsx(_FilterContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: _objectSpread(_objectSpread({}, props), {}, {
      state: selectedCategory,
      setFilterChecked,
      setSelectedColor,
      setSelectedCategory,
      setSelectedBrands,
      selectedBrands,
      selectedColor,
      selectedPrice,
      isChecked,
      filterChecked,
      selectedSize,
      setSelectedSize,
      setSelectedPrice,
      handleBrands: handleBrands,
      handleSizes: handleSizes
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (FilterProvider);

/***/ }),

/***/ "./helpers/menu/MenuContext.js":
/*!*************************************!*\
  !*** ./helpers/menu/MenuContext.js ***!
  \*************************************/
/*! exports provided: Context, Provider, Consumer, MenuContext, MenuContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Consumer", function() { return Consumer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuContext */ "./helpers/menu/MenuContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuContext", function() { return _MenuContext__WEBPACK_IMPORTED_MODULE_1__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MenuContextProvider", function() { return _MenuContext__WEBPACK_IMPORTED_MODULE_1__["Provider"]; });

var _jsxFileName = "C:\\Users\\lenovo\\Documents\\pfe\\clean\\Baazar\\clientFrontend\\helpers\\menu\\MenuContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  selectMenu: Function
});
const Provider = props => {
  const {
    0: selectMenu
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    menuOpen: false
  });
  const menuContext = {
    selectMenu
  };
  return __jsx(Context.Provider, {
    value: menuContext,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 12
    }
  }, " ", props.children);
};
const {
  Consumer
} = Context;


/***/ }),

/***/ "./helpers/theme-setting/SettingContext.js":
/*!*************************************************!*\
  !*** ./helpers/theme-setting/SettingContext.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SettingContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (SettingContext);

/***/ }),

/***/ "./helpers/theme-setting/SettingProvider.js":
/*!**************************************************!*\
  !*** ./helpers/theme-setting/SettingProvider.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SettingContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SettingContext */ "./helpers/theme-setting/SettingContext.js");
/* harmony import */ var _components_customizer_config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/customizer/config.json */ "./components/customizer/config.json");
var _components_customizer_config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../components/customizer/config.json */ "./components/customizer/config.json", 1);
var _jsxFileName = "C:\\Users\\lenovo\\Documents\\pfe\\clean\\Baazar\\clientFrontend\\helpers\\theme-setting\\SettingProvider.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const SettingProvider = props => {
  const {
    0: layoutState,
    1: setLayoutState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("RTL");
  const {
    0: layoutColor,
    1: setLayoutColor
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("#ff4c3b");

  const layoutFun = item => {
    if (item === "RTL") {
      document.body.classList.remove("ltr");
      document.body.classList.add("rtl");
      setLayoutState("LTR");
    } else {
      document.body.classList.remove("rtl");
      document.body.classList.add("ltr");
      setLayoutState("RTL");
    }
  };

  const layoutColorFun = item => {
    localStorage.setItem("color", item.target.value);
    document.documentElement.style.setProperty('--theme-deafult', item.target.value);
    _components_customizer_config_json__WEBPACK_IMPORTED_MODULE_2__["config"].color = item.target.value;
    setLayoutColor(item.target.value);
  };

  return __jsx(_SettingContext__WEBPACK_IMPORTED_MODULE_1__["default"].Provider, {
    value: _objectSpread(_objectSpread({}, props), {}, {
      state: layoutState,
      layoutFun: layoutFun,
      layoutColorFun: layoutColorFun
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (SettingProvider);

/***/ }),

/***/ "./helpers/wishlist/WishlistContext.js":
/*!*********************************************!*\
  !*** ./helpers/wishlist/WishlistContext.js ***!
  \*********************************************/
/*! exports provided: Context, Provider, WishlistContext, WishlistContextProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Context", function() { return Context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Provider", function() { return Provider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _WishlistContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WishlistContext */ "./helpers/wishlist/WishlistContext.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistContext", function() { return _WishlistContext__WEBPACK_IMPORTED_MODULE_2__["Context"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WishlistContextProvider", function() { return _WishlistContext__WEBPACK_IMPORTED_MODULE_2__["Provider"]; });

var _jsxFileName = "C:\\Users\\lenovo\\Documents\\pfe\\clean\\Baazar\\clientFrontend\\helpers\\wishlist\\WishlistContext.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Context = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])({
  wishlistItems: Function,
  addToWish: Function,
  removeFromWish: Function
});

const getLocalWishlistItems = () => {
  try {
    const list = localStorage.getItem('wishlist');

    if (list === null) {
      return [];
    } else {
      return JSON.parse(list);
    }
  } catch (err) {
    return [];
  }
};

const Provider = props => {
  const {
    0: wishlistItems,
    1: setWishlistItems
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(getLocalWishlistItems());
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
  }, [wishlistItems]); // Add Product To Wishlist

  const addToWish = item => {
    const index = wishlistItems.findIndex(wish => wish.id === item.id);

    if (index === -1) {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success("Product Added Successfully !");
      setWishlistItems([...wishlistItems, item]);
    } else {
      react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("This Product Already Added !");
    }
  }; // Remove Product From Wishlist


  const removeFromWish = item => {
    setWishlistItems(wishlistItems.filter(e => e.id !== item.id));
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error("Product Removed Successfully !");
  };

  const {
    value
  } = props;
  return __jsx(Context.Provider, {
    value: {
      wishlistItems: wishlistItems,
      addToWish: addToWish,
      removeFromWish: removeFromWish
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 9
    }
  }, props.children);
};


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_customizer_theme_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/customizer/theme-settings */ "./components/customizer/theme-settings.js");
/* harmony import */ var _public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/assets/scss/app.scss */ "./public/assets/scss/app.scss");
/* harmony import */ var _public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_assets_scss_app_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_common_widgets_Tap_Top__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/common/widgets/Tap-Top */ "./components/common/widgets/Tap-Top.js");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-messenger-customer-chat */ "react-messenger-customer-chat");
/* harmony import */ var react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _helpers_menu_MenuContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../helpers/menu/MenuContext */ "./helpers/menu/MenuContext.js");
/* harmony import */ var _helpers_cart_CartContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../helpers/cart/CartContext */ "./helpers/cart/CartContext.js");
/* harmony import */ var _helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers/wishlist/WishlistContext */ "./helpers/wishlist/WishlistContext.js");
/* harmony import */ var _helpers_filter_FilterProvider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/filter/FilterProvider */ "./helpers/filter/FilterProvider.js");
/* harmony import */ var _helpers_theme_setting_SettingProvider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../helpers/theme-setting/SettingProvider */ "./helpers/theme-setting/SettingProvider.js");
/* harmony import */ var _helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../helpers/Compare/CompareContext */ "./helpers/Compare/CompareContext.js");
/* harmony import */ var _helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../helpers/Currency/CurrencyContext */ "./helpers/Currency/CurrencyContext.js");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-helmet */ "react-helmet");
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_14__);
var _jsxFileName = "C:\\Users\\lenovo\\Documents\\pfe\\clean\\Baazar\\clientFrontend\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }















 //-------------------------------------
//----------------------------------------

function MyApp({
  Component,
  pageProps
}) {
  const {
    0: isLoading,
    1: setIsLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: url,
    1: setUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const path = window.location.pathname.split('/');
    const url = path[path.length - 1];
    setUrl(url);
    document.body.classList.add('dark');
    setTimeout(function () {
      setIsLoading(false);
    }, 1000);
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, isLoading ? __jsx("div", {
    className: "loader-wrapper",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 11
    }
  }, url === 'Christmas' ? __jsx("div", {
    id: "preloader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 17
    }
  }) : __jsx("div", {
    className: "loader",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 17
    }
  })) : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_messenger_customer_chat__WEBPACK_IMPORTED_MODULE_5___default.a, {
    pageId: "2123438804574660",
    appId: "406252930752412",
    htmlRef: "https://connect.facebook.net/en_US/sdk.js",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }), __jsx(react_helmet__WEBPACK_IMPORTED_MODULE_13___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 13
    }
  }, "Multikart - Multi-purpopse E-commerce React Template")), __jsx(react_router_dom__WEBPACK_IMPORTED_MODULE_14__["BrowserRouter"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }, __jsx("div", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 13
    }
  }, __jsx(_helpers_theme_setting_SettingProvider__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 15
    }
  }, __jsx(_helpers_Compare_CompareContext__WEBPACK_IMPORTED_MODULE_11__["CompareContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 17
    }
  }, __jsx(_helpers_Currency_CurrencyContext__WEBPACK_IMPORTED_MODULE_12__["CurrencyContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 19
    }
  }, __jsx(_helpers_cart_CartContext__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 21
    }
  }, __jsx(_helpers_wishlist_WishlistContext__WEBPACK_IMPORTED_MODULE_8__["WishlistContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 23
    }
  }, __jsx(_helpers_menu_MenuContext__WEBPACK_IMPORTED_MODULE_6__["MenuContextProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 25
    }
  }, __jsx(_helpers_filter_FilterProvider__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 27
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 29
    }
  }))))))), __jsx(_components_customizer_theme_settings__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }))), __jsx(react_toastify__WEBPACK_IMPORTED_MODULE_3__["ToastContainer"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 15
    }
  }), __jsx(_components_common_widgets_Tap_Top__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 15
    }
  })))));
}

/***/ }),

/***/ "./public/assets/scss/app.scss":
/*!*************************************!*\
  !*** ./public/assets/scss/app.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./services/script.js":
/*!****************************!*\
  !*** ./services/script.js ***!
  \****************************/
/*! exports provided: Product3, tools_product_4, Product4, Product7, Product5, Product6, Team4, Slider2, Slider3, Slider4, Slider5, Slider6, Slider7, SlideUpDown, svgFreeShipping, svgservice, svgoffer, svgpayment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product3", function() { return Product3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tools_product_4", function() { return tools_product_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product4", function() { return Product4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product7", function() { return Product7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product5", function() { return Product5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product6", function() { return Product6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Team4", function() { return Team4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider2", function() { return Slider2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider3", function() { return Slider3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider4", function() { return Slider4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider5", function() { return Slider5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider6", function() { return Slider6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slider7", function() { return Slider7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideUpDown", function() { return SlideUpDown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgFreeShipping", function() { return svgFreeShipping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgservice", function() { return svgservice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgoffer", function() { return svgoffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgpayment", function() { return svgpayment; });
const Product3 = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const tools_product_4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  autoplaySpeed: 5000,
  arrows: false,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: true,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product7 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  autoplay: false,
  arrows: false,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product5 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Product6 = {
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  autoplay: false,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Team4 = {
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 586,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }]
};
const Slider2 = {
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  responsive: [{
    breakpoint: 991,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider3 = {
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider4 = {
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [{
    breakpoint: 1200,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }, {
    breakpoint: 991,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }, {
    breakpoint: 586,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};
const Slider5 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 768,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Slider6 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true
    }
  }, {
    breakpoint: 767,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      infinite: true
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }]
};
const Slider7 = {
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 7,
  slidesToScroll: 7,
  responsive: [{
    breakpoint: 1367,
    settings: {
      slidesToShow: 6,
      slidesToScroll: 6
    }
  }, {
    breakpoint: 1024,
    settings: {
      slidesToShow: 5,
      slidesToScroll: 5,
      infinite: true
    }
  }, {
    breakpoint: 600,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4
    }
  }, {
    breakpoint: 480,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3
    }
  }]
};
const SlideUpDown = function (classnames) {
  var accords = document.querySelectorAll("." + classnames + " h4");
  [].forEach.call(accords, function (elemt) {
    elemt.innerHTML += '<span class="according-menu"></span>';
  });
  var anchors = document.getElementsByClassName(classnames);

  for (var i = 0; i < anchors.length; i++) {
    var anchor = anchors[i];

    anchor.onclick = function () {
      var elems = document.querySelectorAll("." + classnames);
      [].forEach.call(elems, function (elemt) {
        elemt.classList.remove("active");
        var el = elemt.nextElementSibling;
        el.style.height = el.offsetHeight + 'px';
        el.style.transitionProperty = `height, margin, padding`;
        el.style.transitionDuration = '500ms';
        el.offsetHeight; // eslint-disable-line no-unused-expressions

        el.style.overflow = 'hidden';
        el.style.height = 0;
        el.style.paddingTop = 0;
        el.style.paddingBottom = 0;
        el.style.marginTop = 0;
        el.style.marginBottom = 0;
        el.style.display = 'none';
        el.style.removeProperty('height');
        el.style.removeProperty('padding-top');
        el.style.removeProperty('padding-bottom');
        el.style.removeProperty('margin-top');
        el.style.removeProperty('margin-bottom');
        el.style.removeProperty('overflow');
        el.style.removeProperty('transition-duration');
        el.style.removeProperty('transition-property');
      });
      this.classList.add('active');
      var element = this.nextElementSibling;
      element.style.removeProperty('display');
      let display = window.getComputedStyle(element).display;

      if (element.classList.contains('show')) {
        element.classList.remove('show');
        this.classList.remove("active");
        element.style.height = element.offsetHeight + 'px';
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = '500ms';
        element.offsetHeight; // eslint-disable-line no-unused-expressions

        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.style.display = 'none';
        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = '500ms';
        element.style.removeProperty('height');
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        window.setTimeout(function () {
          element.style.removeProperty('overflow');
          element.style.removeProperty('transition-duration');
          element.style.removeProperty('transition-property');
        }, 500);
      } else {
        element.classList.add('show');
        if (display === 'none') display = 'block';
        element.style.display = display;
        let height = element.offsetHeight;
        element.style.overflow = 'hidden';
        element.style.height = 0;
        element.style.paddingTop = 0;
        element.style.paddingBottom = 0;
        element.style.marginTop = 0;
        element.style.marginBottom = 0;
        element.offsetHeight; // eslint-disable-line no-unused-expressions

        element.style.transitionProperty = `height, margin, padding`;
        element.style.transitionDuration = '500ms';
        element.style.height = height + 'px';
        element.style.removeProperty('padding-top');
        element.style.removeProperty('padding-bottom');
        element.style.removeProperty('margin-top');
        element.style.removeProperty('margin-bottom');
        window.setTimeout(function () {
          element.style.removeProperty('height');
          element.style.removeProperty('overflow');
          element.style.removeProperty('transition-duration');
          element.style.removeProperty('transition-property');
        }, 500);
      }
    };
  }

  var elems = document.querySelectorAll("." + classnames);
  [].forEach.call(elems, function (elemt) {
    let el = elemt.nextElementSibling;
    el.style = "display: none";
  });
}; // SVG Icons

const svgFreeShipping = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -117 679.99892 679">\n' + '                                        <path\n' + '                                            d="m12.347656 378.382812h37.390625c4.371094 37.714844 36.316407 66.164063 74.277344 66.164063 37.96875 0 69.90625-28.449219 74.28125-66.164063h241.789063c4.382812 37.714844 36.316406 66.164063 74.277343 66.164063 37.96875 0 69.902344-28.449219 74.285157-66.164063h78.890624c6.882813 0 12.460938-5.578124 12.460938-12.460937v-352.957031c0-6.882813-5.578125-12.464844-12.460938-12.464844h-432.476562c-6.875 0-12.457031 5.582031-12.457031 12.464844v69.914062h-105.570313c-4.074218.011719-7.890625 2.007813-10.21875 5.363282l-68.171875 97.582031-26.667969 37.390625-9.722656 13.835937c-1.457031 2.082031-2.2421872 4.558594-2.24999975 7.101563v121.398437c-.09765625 3.34375 1.15624975 6.589844 3.47656275 9.003907 2.320312 2.417968 5.519531 3.796874 8.867187 3.828124zm111.417969 37.386719c-27.527344 0-49.851563-22.320312-49.851563-49.847656 0-27.535156 22.324219-49.855469 49.851563-49.855469 27.535156 0 49.855469 22.320313 49.855469 49.855469 0 27.632813-22.21875 50.132813-49.855469 50.472656zm390.347656 0c-27.53125 0-49.855469-22.320312-49.855469-49.847656 0-27.535156 22.324219-49.855469 49.855469-49.855469 27.539063 0 49.855469 22.320313 49.855469 49.855469.003906 27.632813-22.21875 50.132813-49.855469 50.472656zm140.710938-390.34375v223.34375h-338.375c-6.882813 0-12.464844 5.578125-12.464844 12.460938 0 6.882812 5.582031 12.464843 12.464844 12.464843h338.375v79.761719h-66.421875c-4.382813-37.710937-36.320313-66.15625-74.289063-66.15625-37.960937 0-69.898437 28.445313-74.277343 66.15625h-192.308594v-271.324219h89.980468c6.882813 0 12.464844-5.582031 12.464844-12.464843 0-6.882813-5.582031-12.464844-12.464844-12.464844h-89.980468v-31.777344zm-531.304688 82.382813h99.703125v245.648437h-24.925781c-4.375-37.710937-36.3125-66.15625-74.28125-66.15625-37.960937 0-69.90625 28.445313-74.277344 66.15625h-24.929687v-105.316406l3.738281-5.359375h152.054687c6.882813 0 12.460938-5.574219 12.460938-12.457031v-92.226563c0-6.882812-5.578125-12.464844-12.460938-12.464844h-69.796874zm-30.160156 43h74.777344v67.296875h-122.265625zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                    </svg>';
const svgservice = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve" width="512px" height="512px">\n' + '                                       <g>\n' + '                                           <g>\n' + '                                              <g>\n' + '                                                <path d="M472,432h-24V280c-0.003-4.418-3.588-7.997-8.006-7.994c-2.607,0.002-5.05,1.274-6.546,3.41l-112,160     c-2.532,3.621-1.649,8.609,1.972,11.14c1.343,0.939,2.941,1.443,4.58,1.444h104v24c0,4.418,3.582,8,8,8s8-3.582,8-8v-24h24     c4.418,0,8-3.582,8-8S476.418,432,472,432z M432,432h-88.64L432,305.376V432z" fill="#ff4c3b"/>\n' + '                                                <path d="M328,464h-94.712l88.056-103.688c0.2-0.238,0.387-0.486,0.56-0.744c16.566-24.518,11.048-57.713-12.56-75.552     c-28.705-20.625-68.695-14.074-89.319,14.631C212.204,309.532,207.998,322.597,208,336c0,4.418,3.582,8,8,8s8-3.582,8-8     c-0.003-26.51,21.486-48.002,47.995-48.005c10.048-0.001,19.843,3.151,28.005,9.013c16.537,12.671,20.388,36.007,8.8,53.32     l-98.896,116.496c-2.859,3.369-2.445,8.417,0.924,11.276c1.445,1.226,3.277,1.899,5.172,1.9h112c4.418,0,8-3.582,8-8     S332.418,464,328,464z" fill="#ff4c3b"/>\n' + '                                                <path d="M216.176,424.152c0.167-4.415-3.278-8.129-7.693-8.296c-0.001,0-0.002,0-0.003,0     C104.11,411.982,20.341,328.363,16.28,224H48c4.418,0,8-3.582,8-8s-3.582-8-8-8H16.28C20.283,103.821,103.82,20.287,208,16.288     V40c0,4.418,3.582,8,8,8s8-3.582,8-8V16.288c102.754,3.974,185.686,85.34,191.616,188l-31.2-31.2     c-3.178-3.07-8.242-2.982-11.312,0.196c-2.994,3.1-2.994,8.015,0,11.116l44.656,44.656c0.841,1.018,1.925,1.807,3.152,2.296     c0.313,0.094,0.631,0.172,0.952,0.232c0.549,0.198,1.117,0.335,1.696,0.408c0.08,0,0.152,0,0.232,0c0.08,0,0.152,0,0.224,0     c0.609-0.046,1.211-0.164,1.792-0.352c0.329-0.04,0.655-0.101,0.976-0.184c1.083-0.385,2.069-1.002,2.888-1.808l45.264-45.248     c3.069-3.178,2.982-8.242-0.196-11.312c-3.1-2.994-8.015-2.994-11.116,0l-31.976,31.952     C425.933,90.37,331.38,0.281,216.568,0.112C216.368,0.104,216.2,0,216,0s-0.368,0.104-0.568,0.112     C96.582,0.275,0.275,96.582,0.112,215.432C0.112,215.632,0,215.8,0,216s0.104,0.368,0.112,0.568     c0.199,115.917,91.939,210.97,207.776,215.28h0.296C212.483,431.847,216.013,428.448,216.176,424.152z" fill="#ff4c3b"/>\n' + '                                                <path d="M323.48,108.52c-3.124-3.123-8.188-3.123-11.312,0L226.2,194.48c-6.495-2.896-13.914-2.896-20.408,0l-40.704-40.704     c-3.178-3.069-8.243-2.981-11.312,0.197c-2.994,3.1-2.994,8.015,0,11.115l40.624,40.624c-5.704,11.94-0.648,26.244,11.293,31.947     c9.165,4.378,20.095,2.501,27.275-4.683c7.219-7.158,9.078-18.118,4.624-27.256l85.888-85.888     C326.603,116.708,326.603,111.644,323.48,108.52z M221.658,221.654c-0.001,0.001-0.001,0.001-0.002,0.002     c-3.164,3.025-8.148,3.025-11.312,0c-3.125-3.124-3.125-8.189-0.002-11.314c3.124-3.125,8.189-3.125,11.314-0.002     C224.781,213.464,224.781,218.53,221.658,221.654z" fill="#ff4c3b"/>\n' + '                                              </g>\n' + '                                           </g>\n' + '                                       </g>\n' + '                                    </svg>';
const svgoffer = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -14 512.00001 512">\n' + '                                        <path\n' + '                                            d="m136.964844 308.234375c4.78125-2.757813 6.417968-8.878906 3.660156-13.660156-2.761719-4.777344-8.878906-6.417969-13.660156-3.660157-4.78125 2.761719-6.421875 8.882813-3.660156 13.660157 2.757812 4.78125 8.878906 6.421875 13.660156 3.660156zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m95.984375 377.253906 50.359375 87.230469c10.867188 18.84375 35.3125 25.820313 54.644531 14.644531 19.128907-11.054687 25.703125-35.496094 14.636719-54.640625l-30-51.96875 25.980469-15c4.78125-2.765625 6.421875-8.878906 3.660156-13.660156l-13.003906-22.523437c1.550781-.300782 11.746093-2.300782 191.539062-37.570313 22.226563-1.207031 35.542969-25.515625 24.316407-44.949219l-33.234376-57.5625 21.238282-32.167968c2.085937-3.164063 2.210937-7.230469.316406-10.511719l-20-34.640625c-1.894531-3.28125-5.492188-5.203125-9.261719-4.980469l-38.472656 2.308594-36.894531-63.90625c-5.34375-9.257813-14.917969-14.863281-25.605469-14.996094-.128906-.003906-.253906-.003906-.382813-.003906-10.328124 0-19.703124 5.140625-25.257812 13.832031l-130.632812 166.414062-84.925782 49.03125c-33.402344 19.277344-44.972656 62.128907-25.621094 95.621094 17.679688 30.625 54.953126 42.671875 86.601563 30zm102.324219 57.238282c5.523437 9.554687 2.253906 21.78125-7.328125 27.316406-9.613281 5.558594-21.855469 2.144531-27.316407-7.320313l-50-86.613281 34.640626-20c57.867187 100.242188 49.074218 85.011719 50.003906 86.617188zm-22.683594-79.296876-10-17.320312 17.320312-10 10 17.320312zm196.582031-235.910156 13.820313 23.9375-12.324219 18.664063-23.820313-41.261719zm-104.917969-72.132812c2.683594-4.390625 6.941407-4.84375 8.667969-4.796875 1.707031.019531 5.960938.550781 8.527344 4.996093l116.3125 201.464844c3.789063 6.558594-.816406 14.804688-8.414063 14.992188-1.363281.03125-1.992187.277344-5.484374.929687l-123.035157-213.105469c2.582031-3.320312 2.914063-3.640624 3.425781-4.480468zm-16.734374 21.433594 115.597656 200.222656-174.460938 34.21875-53.046875-91.878906zm-223.851563 268.667968c-4.390625-7.597656-6.710937-16.222656-6.710937-24.949218 0-17.835938 9.585937-34.445313 25.011718-43.351563l77.941406-45 50 86.601563-77.941406 45.003906c-23.878906 13.78125-54.515625 5.570312-68.300781-18.304688zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m105.984375 314.574219c-2.761719-4.78125-8.878906-6.421875-13.660156-3.660157l-17.320313 10c-4.773437 2.757813-10.902344 1.113282-13.660156-3.660156-2.761719-4.78125-8.878906-6.421875-13.660156-3.660156s-6.421875 8.878906-3.660156 13.660156c8.230468 14.257813 26.589843 19.285156 40.980468 10.980469l17.320313-10c4.78125-2.761719 6.421875-8.875 3.660156-13.660156zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m497.136719 43.746094-55.722657 31.007812c-4.824218 2.6875-6.5625 8.777344-3.875 13.601563 2.679688 4.820312 8.765626 6.566406 13.601563 3.875l55.71875-31.007813c4.828125-2.6875 6.5625-8.777344 3.875-13.601562-2.683594-4.828125-8.773437-6.5625-13.597656-3.875zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m491.292969 147.316406-38.636719-10.351562c-5.335938-1.429688-10.820312 1.734375-12.25 7.070312-1.429688 5.335938 1.738281 10.816406 7.074219 12.246094l38.640625 10.351562c5.367187 1.441407 10.824218-1.773437 12.246094-7.070312 1.429687-5.335938-1.738282-10.820312-7.074219-12.246094zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                        <path\n' + '                                            d="m394.199219 7.414062-10.363281 38.640626c-1.429688 5.335937 1.734374 10.816406 7.070312 12.25 5.332031 1.425781 10.816406-1.730469 12.25-7.070313l10.359375-38.640625c1.429687-5.335938-1.734375-10.820312-7.070313-12.25-5.332031-1.429688-10.816406 1.734375-12.246093 7.070312zm0 0"\n' + '                                            fill="#ff4c3b"/>\n' + '                                    </svg>';
const svgpayment = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve" width="512px" height="512px">\n' + '                                                 <g>\n' + '                                                    <g>\n' + '                                                       <g>\n' + '                                                          <path d="M498.409,175.706L336.283,13.582c-8.752-8.751-20.423-13.571-32.865-13.571c-12.441,0-24.113,4.818-32.865,13.569     L13.571,270.563C4.82,279.315,0,290.985,0,303.427c0,12.442,4.82,24.114,13.571,32.864l19.992,19.992     c0.002,0.001,0.003,0.003,0.005,0.005c0.002,0.002,0.004,0.004,0.006,0.006l134.36,134.36H149.33     c-5.89,0-10.666,4.775-10.666,10.666c0,5.89,4.776,10.666,10.666,10.666h59.189c0.014,0,0.027,0.001,0.041,0.001     s0.027-0.001,0.041-0.001l154.053,0.002c5.89,0,10.666-4.776,10.666-10.666c0-5.891-4.776-10.666-10.666-10.666l-113.464-0.002     L498.41,241.434C516.53,223.312,516.53,193.826,498.409,175.706z M483.325,226.35L226.341,483.334     c-4.713,4.712-11.013,7.31-17.742,7.32h-0.081c-6.727-0.011-13.025-2.608-17.736-7.32L56.195,348.746L302.99,101.949     c4.165-4.165,4.165-10.919,0-15.084c-4.166-4.165-10.918-4.165-15.085,0.001L41.11,333.663l-12.456-12.456     c-4.721-4.721-7.321-11.035-7.321-17.779c0-6.744,2.6-13.059,7.322-17.781L285.637,28.665c4.722-4.721,11.037-7.321,17.781-7.321     c6.744,0,13.059,2.6,17.781,7.322l57.703,57.702l-246.798,246.8c-4.165,4.164-4.165,10.918,0,15.085     c2.083,2.082,4.813,3.123,7.542,3.123c2.729,0,5.459-1.042,7.542-3.124l246.798-246.799l89.339,89.336     C493.128,200.593,493.127,216.546,483.325,226.35z" fill="#ff4c3b"/>\n' + '                                                          <path d="M262.801,308.064c-4.165-4.165-10.917-4.164-15.085,0l-83.934,83.933c-4.165,4.165-4.165,10.918,0,15.085     c2.083,2.083,4.813,3.124,7.542,3.124c2.729,0,5.459-1.042,7.542-3.124l83.934-83.933     C266.966,318.982,266.966,312.229,262.801,308.064z" fill="#ff4c3b"/>\n' + '                                                          <path d="M228.375,387.741l-34.425,34.425c-4.165,4.165-4.165,10.919,0,15.085c2.083,2.082,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l34.425-34.425c4.165-4.165,4.165-10.919,0-15.085     C239.294,383.575,232.543,383.575,228.375,387.741z" fill="#ff4c3b"/>\n' + '                                                          <path d="M260.054,356.065l-4.525,4.524c-4.166,4.165-4.166,10.918-0.001,15.085c2.082,2.083,4.813,3.125,7.542,3.125     c2.729,0,5.459-1.042,7.541-3.125l4.525-4.524c4.166-4.165,4.166-10.918,0.001-15.084     C270.974,351.901,264.219,351.9,260.054,356.065z" fill="#ff4c3b"/>\n' + '                                                          <path d="M407.073,163.793c-2-2-4.713-3.124-7.542-3.124c-2.829,0-5.541,1.124-7.542,3.124l-45.255,45.254     c-2,2.001-3.124,4.713-3.124,7.542s1.124,5.542,3.124,7.542l30.17,30.167c2.083,2.083,4.813,3.124,7.542,3.124     c2.731,0,5.459-1.042,7.542-3.124l45.253-45.252c4.165-4.165,4.165-10.919,0-15.084L407.073,163.793z M384.445,231.673     l-15.085-15.084l30.17-30.169l15.084,15.085L384.445,231.673z" fill="#ff4c3b"/>\n' + '                                                          <path d="M320.339,80.186c2.731,0,5.461-1.042,7.543-3.126l4.525-4.527c4.164-4.166,4.163-10.92-0.003-15.084     c-4.165-4.164-10.92-4.163-15.084,0.003l-4.525,4.527c-4.164,4.166-4.163,10.92,0.003,15.084     C314.881,79.146,317.609,80.186,320.339,80.186z" fill="#ff4c3b"/>\n' + '                                                          <path d="M107.215,358.057l-4.525,4.525c-4.165,4.164-4.165,10.918,0,15.085c2.083,2.082,4.813,3.123,7.542,3.123     s5.459-1.041,7.542-3.123l4.525-4.525c4.165-4.166,4.165-10.92,0-15.085C118.133,353.891,111.381,353.891,107.215,358.057z" fill="#ff4c3b"/>\n' + '                                                       </g>\n' + '                                                    </g>\n' + '                                                 </g>\n' + '                                                </svg>';

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),

/***/ "react-messenger-customer-chat":
/*!************************************************!*\
  !*** external "react-messenger-customer-chat" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-messenger-customer-chat");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9jb21tb24vd2lkZ2V0cy9UYXAtVG9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvY3VzdG9taXplci90aGVtZS1zZXR0aW5ncy5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL0NvbXBhcmUvQ29tcGFyZUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy9jYXJ0L0NhcnRDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvY2FydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL2ZpbHRlci9GaWx0ZXJDb250ZXh0LmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvZmlsdGVyL0ZpbHRlclByb3ZpZGVyLmpzIiwid2VicGFjazovLy8uL2hlbHBlcnMvbWVudS9NZW51Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL3RoZW1lLXNldHRpbmcvU2V0dGluZ0NvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vaGVscGVycy90aGVtZS1zZXR0aW5nL1NldHRpbmdQcm92aWRlci5qcyIsIndlYnBhY2s6Ly8vLi9oZWxwZXJzL3dpc2hsaXN0L1dpc2hsaXN0Q29udGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3NlcnZpY2VzL3NjcmlwdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWVzc2VuZ2VyLWN1c3RvbWVyLWNoYXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yb3V0ZXItZG9tXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiVGFwVG9wIiwibG9hZGVyIiwic2V0TG9hZGVyIiwidXNlU3RhdGUiLCJnb2luZ1VwIiwic2V0R29pbmdVcCIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJoYW5kbGVTY3JvbGwiLCJjdXJyZW50U2Nyb2xsWSIsIndpbmRvdyIsInNjcm9sbFkiLCJhZGRFdmVudExpc3RlbmVyIiwicGFzc2l2ZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0YXBUb1RvcCIsInNjcm9sbFRvIiwiYmVoYXZpb3IiLCJ0b3AiLCJkaXNwbGF5IiwiVGhlbWVTZXR0aW5ncyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiU2V0dGluZ0NvbnRleHQiLCJ0aGVtZUxheW91dCIsInNldFRoZW1lTGF5b3V0IiwibGF5b3V0VHlwZSIsImxheW91dEZ1biIsImxheW91dENvbG9yRnVuYyIsImxheW91dENvbG9yRnVuIiwibGF5b3V0U3RhdGUiLCJzdGF0ZSIsIm1vZGFsIiwic2V0TW9kYWwiLCJ0b2dnbGUiLCJjb25maWciLCJsYXlvdXRfdmVyc2lvbiIsImxheW91dF90eXBlIiwiZG9jdW1lbnQiLCJib2R5IiwiY2xhc3NOYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImRvY3VtZW50RWxlbWVudCIsInN0eWxlIiwic2V0UHJvcGVydHkiLCJTbGlkZVVwRG93biIsIm9wZW5TZXR0aW5nIiwiY2xvc2VTZXR0aW5nIiwiY2hhbmdlVGhlbWVMYXlvdXQiLCJlIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImtleSIsImkiLCJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImNvbXBhcmVJdGVtcyIsIkZ1bmN0aW9uIiwiYWRkVG9Db21wYXJlIiwicmVtb3ZlRnJvbUNvbWFwcmUiLCJnZXRMb2NhbENvbXBhcmVJdGVtcyIsImxpc3QiLCJKU09OIiwicGFyc2UiLCJlcnIiLCJQcm92aWRlciIsInByb3BzIiwic2V0Y29tcGFyZUl0ZW1zIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIml0ZW0iLCJpbmRleCIsImZpbmRJbmRleCIsImNvbXBhcmUiLCJpZCIsInRvYXN0Iiwic3VjY2VzcyIsImVycm9yIiwiZmlsdGVyIiwidmFsdWUiLCJjaGlsZHJlbiIsInNlbGVjdGVkQ3VyciIsInNlbGVjdGVkQ3VycmVuY3kiLCJjdXJyZW5jeSIsInN5bWJvbCIsImN1cnJlbmN5Q29udGV4dCIsIkNvbnN1bWVyIiwiZ2V0TG9jYWxDYXJ0SXRlbXMiLCJDYXJ0UHJvdmlkZXIiLCJjYXJ0SXRlbXMiLCJzZXRDYXJ0SXRlbXMiLCJjYXJ0VG90YWwiLCJzZXRDYXJ0VG90YWwiLCJxdWFudGl0eSIsInNldFF1YW50aXR5Iiwic3RvY2siLCJzZXRTdG9jayIsIlRvdGFsIiwicmVkdWNlIiwiYSIsImIiLCJ0b3RhbCIsImFkZFRvQ2FydCIsIml0bSIsInByb2R1Y3QiLCJxdHkiLCJwcmljZSIsImRpc2NvdW50IiwicmVtb3ZlRnJvbUNhcnQiLCJtaW51c1F0eSIsInBsdXNRdHkiLCJ1cGRhdGVRdHkiLCJpbmZvIiwiQ2FydENvbnRleHQiLCJGaWx0ZXJDb250ZXh0IiwiRmlsdGVyUHJvdmlkZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJicmFuZCIsInF1ZXJ5IiwiY29sb3IiLCJzaXplIiwiY2F0ZWdvcnkiLCJtaW4iLCJtYXgiLCJzaXplUGFyYW0iLCJzcGxpdCIsInBhcmFtIiwic2VsZWN0ZWRDYXRlZ29yeSIsInNldFNlbGVjdGVkQ2F0ZWdvcnkiLCJzZWxlY3RlZEJyYW5kcyIsInNldFNlbGVjdGVkQnJhbmRzIiwic2VsZWN0ZWRDb2xvciIsInNldFNlbGVjdGVkQ29sb3IiLCJzZWxlY3RlZFNpemUiLCJzZXRTZWxlY3RlZFNpemUiLCJzZWxlY3RlZFByaWNlIiwic2V0U2VsZWN0ZWRQcmljZSIsImlzQ2hlY2tlZCIsInNldElzQ2hlY2tlZCIsImZpbHRlckNoZWNrZWQiLCJzZXRGaWx0ZXJDaGVja2VkIiwiaGFuZGxlQnJhbmRzIiwiY2hlY2tlZCIsImluZGV4T2YiLCJoYW5kbGVTaXplcyIsInNlbGVjdE1lbnUiLCJtZW51T3BlbiIsIm1lbnVDb250ZXh0IiwiU2V0dGluZ1Byb3ZpZGVyIiwic2V0TGF5b3V0U3RhdGUiLCJsYXlvdXRDb2xvciIsInNldExheW91dENvbG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwidGFyZ2V0Iiwid2lzaGxpc3RJdGVtcyIsImFkZFRvV2lzaCIsInJlbW92ZUZyb21XaXNoIiwiZ2V0TG9jYWxXaXNobGlzdEl0ZW1zIiwic2V0V2lzaGxpc3RJdGVtcyIsIndpc2giLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVybCIsInNldFVybCIsInBhdGgiLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwibGVuZ3RoIiwiUHJvZHVjdDMiLCJpbmZpbml0ZSIsInNwZWVkIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJhdXRvcGxheSIsImFycm93cyIsImF1dG9wbGF5U3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwidG9vbHNfcHJvZHVjdF80IiwiUHJvZHVjdDQiLCJQcm9kdWN0NyIsIlByb2R1Y3Q1IiwiZG90cyIsIlByb2R1Y3Q2IiwiVGVhbTQiLCJTbGlkZXIyIiwiU2xpZGVyMyIsIlNsaWRlcjQiLCJTbGlkZXI1IiwiU2xpZGVyNiIsIlNsaWRlcjciLCJjbGFzc25hbWVzIiwiYWNjb3JkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiY2FsbCIsImVsZW10IiwiaW5uZXJIVE1MIiwiYW5jaG9ycyIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJhbmNob3IiLCJvbmNsaWNrIiwiZWxlbXMiLCJlbCIsIm5leHRFbGVtZW50U2libGluZyIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInRyYW5zaXRpb25Qcm9wZXJ0eSIsInRyYW5zaXRpb25EdXJhdGlvbiIsIm92ZXJmbG93IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJyZW1vdmVQcm9wZXJ0eSIsImVsZW1lbnQiLCJnZXRDb21wdXRlZFN0eWxlIiwiY29udGFpbnMiLCJzdmdGcmVlU2hpcHBpbmciLCJzdmdzZXJ2aWNlIiwic3Znb2ZmZXIiLCJzdmdwYXltZW50Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7O0FBRUEsTUFBTUEsTUFBTSxHQUFHLE1BQU07QUFDakIsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDLElBQUQsQ0FBcEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFR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REFIc0IsR0FJdEIsbTBDQUpzQixHQUt0QiwyVUFMc0IsR0FNdEIsMFVBTnNCLEdBT3RCLDRVQVBzQixHQVF0Qiw0ZEFSc0IsR0FTdEIsMFVBVHNCLEdBVXRCLHdUQVZzQixHQVd0QiwrREFYc0IsR0FZdEIsNERBWnNCLEdBYXRCLHlEQWJzQixHQWN0Qix3REFkRyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hoQlAsd0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsMEQ7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgVGFwVG9wID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2xvYWRlciwgc2V0TG9hZGVyXSA9IHVzZVN0YXRlKHRydWUpXHJcbiAgICBjb25zdCBbZ29pbmdVcCwgc2V0R29pbmdVcF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIC8vIFBhZ2UgTG9hZGVyXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHNldExvYWRlcihmYWxzZSlcclxuICAgICAgfSwgMTUwMClcclxuICBcclxuICAgICAgLy8gVGFwIHRvIFRvcCBTY3JvbGwgXHJcbiAgICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBjdXJyZW50U2Nyb2xsWSA9IHdpbmRvdy5zY3JvbGxZO1xyXG4gICAgICAgIGlmIChjdXJyZW50U2Nyb2xsWSA+IDUwMClcclxuICAgICAgICAgIHNldEdvaW5nVXAodHJ1ZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgc2V0R29pbmdVcChmYWxzZSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGhhbmRsZVNjcm9sbCwgeyBwYXNzaXZlOiB0cnVlIH0pO1xyXG4gIFxyXG4gICAgICByZXR1cm4gKCkgPT4gd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgaGFuZGxlU2Nyb2xsKTtcclxuICAgIH0sIFtnb2luZ1VwXSk7XHJcbiAgXHJcbiAgICBjb25zdCB0YXBUb1RvcCA9ICgpID0+IHtcclxuICAgICAgd2luZG93LnNjcm9sbFRvKHtcclxuICAgICAgICBiZWhhdmlvcjogXCJzbW9vdGhcIixcclxuICAgICAgICB0b3A6IDBcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFwLXRvcCB0b3AtY2xzXCIgc3R5bGU9e2dvaW5nVXAgPyB7IGRpc3BsYXk6ICdibG9jaycgfSA6IHsgZGlzcGxheTogJ25vbmUnIH19IG9uQ2xpY2s9e3RhcFRvVG9wfT5cclxuICAgICAgICA8ZGl2PjxpIGNsYXNzTmFtZT1cImZhIGZhLWFuZ2xlLWRvdWJsZS11cFwiPjwvaT48L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFwVG9wOyIsImltcG9ydCBSZWFjdCwge3VzZUVmZmVjdCAsdXNlU3RhdGUsIHVzZUNvbnRleHR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNldHRpbmdDb250ZXh0IGZyb20gJy4uLy4uL2hlbHBlcnMvdGhlbWUtc2V0dGluZy9TZXR0aW5nQ29udGV4dCc7XHJcbmltcG9ydCB7U2xpZGVVcERvd259IGZyb20gXCIuLi8uLi9zZXJ2aWNlcy9zY3JpcHRcIlxyXG5pbXBvcnQgeyBUb2FzdENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuaW1wb3J0IHtjb25maWd9IGZyb20gJy4vY29uZmlnLmpzb24nXHJcbmltcG9ydCB7IE1lZGlhLCBDb2wsIFJvdywgTW9kYWwsIE1vZGFsSGVhZGVyLCBNb2RhbEJvZHksIE1vZGFsRm9vdGVyIH0gZnJvbSAncmVhY3RzdHJhcCc7XHJcblxyXG5jb25zdCBUaGVtZVNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoU2V0dGluZ0NvbnRleHQpXHJcbiAgICBjb25zdCBbdGhlbWVMYXlvdXQsIHNldFRoZW1lTGF5b3V0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGxheW91dFR5cGUgPSBjb250ZXh0LmxheW91dEZ1bjtcclxuICAgIGNvbnN0IGxheW91dENvbG9yRnVuYyA9IGNvbnRleHQubGF5b3V0Q29sb3JGdW5cclxuICAgIGNvbnN0IGxheW91dFN0YXRlID0gY29udGV4dC5zdGF0ZVxyXG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRNb2RhbCghbW9kYWwpO1xyXG4gIFxyXG4gICAgLyo9PT09PT09PT09PT09PT09PT09PT1cclxuICAgICBUYXAgb24gVG9wXHJcbiAgICAgPT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xyXG4gICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmKGNvbmZpZy5sYXlvdXRfdmVyc2lvbiAmJiBjb25maWcubGF5b3V0X3R5cGUpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTmFtZSA9IGAke2NvbmZpZy5sYXlvdXRfdmVyc2lvbn0gICR7Y29uZmlnLmxheW91dF90eXBlfWBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JcIikpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdGhlbWUtZGVhZnVsdCcsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JcIikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGFuZGxlU2Nyb2xsKTtcclxuICAgICAgICBTbGlkZVVwRG93bignc2V0dGluZy10aXRsZScpO1xyXG4gICAgICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoYW5kbGVTY3JvbGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgfSwgW10pO1xyXG4gICBcclxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPiA2MDApIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXAtdG9wXCIpLnN0eWxlID0gXCJkaXNwbGF5OiBibG9ja1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFwLXRvcFwiKS5zdHlsZSA9IFwiZGlzcGxheTogbm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3BlblNldHRpbmcgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2V0dGluZ19ib3hcIikuY2xhc3NMaXN0LmFkZCgnb3Blbi1zZXR0aW5nJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5nLWljb25cIikuY2xhc3NMaXN0LmFkZCgnb3Blbi1pY29uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlU2V0dGluZyA9ICgpID0+IHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXR0aW5nX2JveFwiKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuLXNldHRpbmcnKTtcclxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNldHRpbmctaWNvblwiKS5jbGFzc0xpc3QucmVtb3ZlKCdvcGVuLWljb24nKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGNvbnN0IGNoYW5nZVRoZW1lTGF5b3V0ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldFRoZW1lTGF5b3V0KCF0aGVtZUxheW91dClcclxuICAgIH1cclxuXHJcbiAgICBpZih0aGVtZUxheW91dCl7XHJcbiAgICAgICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnZGFyaycpO1xyXG4gICAgICAgIGNvbmZpZy5sYXlvdXRfdmVyc2lvbiA9ICdkYXJrJ1xyXG4gICAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RhcmsnKTtcclxuICAgICAgICBjb25maWcubGF5b3V0X3ZlcnNpb24gPSAnbGlnaHQnXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGEgaHJlZj17bnVsbH0gb25DbGljaz17KCkgPT4gb3BlblNldHRpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2lkZWJhclwiIGlkPVwic2V0dGluZy1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY29nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGRpdiBpZD1cInNldHRpbmdfYm94XCIgY2xhc3NOYW1lPVwic2V0dGluZy1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIjIFwiIGNsYXNzTmFtZT1cIm92ZXJsYXlcIiBvbkNsaWNrPXsoKSA9PiBjbG9zZVNldHRpbmcoKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmdfYm94X2JvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IGNsb3NlU2V0dGluZygpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlYmFyLWJhY2sgdGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1hbmdsZS1sZWZ0IHByLTJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+IEJhY2tcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoND5jb2xvciBvcHRpb248L2g0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWNvbnRhbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJjb2xvci1ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNvbG9yUGlja2VyMVwiIHR5cGU9XCJjb2xvclwiIGRlZmF1bHRWYWx1ZT1cIiNmZjRjM2JcIiAgbmFtZT1cIkJhY2tncm91bmRcIiBvbkNoYW5nZT17KGUpID0+IGxheW91dENvbG9yRnVuYyhlKX0vPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtM1wiPnRoZW1lIGRlYWZ1bHQgY29sb3I8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDQ+UlRMPC9oND5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1jb250YW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwic2V0dGluZ19idXR0b25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImFjdGl2ZVwiIGlkPVwibHRyX2J0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiIyBcIiBjbGFzc05hbWU9XCJidG4gc2V0dGluZ19idG5cIiBvbkNsaWNrPXsgKCkgPT4gbGF5b3V0VHlwZShsYXlvdXRTdGF0ZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xheW91dFN0YXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1eV9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9pdGVtL211bHRpa2FydC1yZXNwb25zaXZlLXJlYWN0LWVjb21tZXJjZS10ZW1wbGF0ZS8yMzA2Nzc3Mz9zX3Jhbms9MVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBwdXJjaGFzZV9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1zaG9wcGluZy1jYXJ0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPiBwdXJjaGFzZSBNdWx0aWthcnQgbm93ITwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3RoZW1lZm9yZXN0Lm5ldC9pdGVtL211bHRpa2FydC1yZXNwb25zaXZlLWFuZ3VsYXItZWNvbW1lcmNlLXRlbXBsYXRlLzIyOTA1MzU4P3NfcmFuaz0zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIHB1cmNoYXNlX2J0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWRpYSBzcmM9e2AvYXNzZXRzL2ltYWdlcy9pY29uL2FuZ3VsYXIucG5nYH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgLz4gTXVsdGlrYXJ0IEFuZ3VsYXI8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90aGVtZWZvcmVzdC5uZXQvaXRlbS9tdWx0aWthcnQtcmVzcG9uc2l2ZS1lY29tbWVyY2UtaHRtbC10ZW1wbGF0ZS8yMjgwOTk2N1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBwdXJjaGFzZV9idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1odG1sNVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gTXVsdGlrYXJ0IEhUTUw8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly90aGVtZWZvcmVzdC5uZXQvaXRlbS9tdWx0aWthcnQtbXVsdGlwdXJwb3NlLXNob3BpZnktc2VjdGlvbnMtdGhlbWUvMjMwOTM4MzE/c19yYW5rPTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgcHVyY2hhc2VfYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZGlhIHNyYz17YC9hc3NldHMvaW1hZ2VzL2ljb24vc2hvcGlmeS5wbmdgfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJpbWctZmx1aWRcIiAvPiBNdWx0aWthcnQgU2hvcGlmeTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZWJhci1idG4gZGFyay1saWdodC1idG5cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFyay1saWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidGhlbWUtbGF5b3V0LXZlcnNpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBjaGFuZ2VUaGVtZUxheW91dCgpfVxyXG4gICAgICAgICAgICAgICAgICAgID57dGhlbWVMYXlvdXQ/J0xpZ2h0JzonRGFyayd9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkY2FydF9idG1fcG9wdXBcIiBpZD1cImZpeGVkX2NhcnRfaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj17bnVsbH0gY2xhc3NOYW1lPVwiZml4ZWRfY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmEgZmEtY2xvbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlfVxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29uZmlndXJhdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPE1vZGFsIGNlbnRlcmVkPXt0cnVlfSBpc09wZW49e21vZGFsfSB0b2dnbGU9e3RvZ2dsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsSGVhZGVyIHRvZ2dsZT17dG9nZ2xlfT5Db25maWc8L01vZGFsSGVhZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNb2RhbEJvZHkgY2xhc3NOYW1lPVwicC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb25maWcpLm1hcCgoa2V5LCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2tleX06PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NvbmZpZ1trZXldfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsaC1jbHNcIj48Yj5Ob3RlOiA8L2I+Q29weSB1cHBlciBjb25maWcgYW5kIHBhc3RlIGl0IGluIDxiPlwiL2NvbXBvbmVudHMvY3VzdG9taXplci9jb25maWcuanNvblwiPC9iPiA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbEZvb3Rlcj5cclxuICAgICAgICAgICAgICAgIDwvTW9kYWw+XHJcblxyXG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lU2V0dGluZ3M7XHJcbiIsImltcG9ydCBSZWFjdCwge2NyZWF0ZUNvbnRleHQgLCB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gJ3JlYWN0LXRvYXN0aWZ5JztcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7XHJcbiAgY29tcGFyZUl0ZW1zOiBGdW5jdGlvbixcclxuICBhZGRUb0NvbXBhcmU6IEZ1bmN0aW9uLFxyXG4gIHJlbW92ZUZyb21Db21hcHJlOiBGdW5jdGlvblxyXG59KTtcclxuXHJcbmNvbnN0IGdldExvY2FsQ29tcGFyZUl0ZW1zID0gKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBsaXN0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbXBhcmUnKTtcclxuICAgICAgaWYgKGxpc3QgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gW107XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxpc3QpXHJcbiAgICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCBbY29tcGFyZUl0ZW1zLCBzZXRjb21wYXJlSXRlbXNdID0gdXNlU3RhdGUoZ2V0TG9jYWxDb21wYXJlSXRlbXMoKSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb21wYXJlJywgSlNPTi5zdHJpbmdpZnkoY29tcGFyZUl0ZW1zKSlcclxuICAgIH0sIFtjb21wYXJlSXRlbXNdKVxyXG5cclxuICAgIC8vIEFkZCBQcm9kdWN0IFRvIFdpc2hsaXN0XHJcbiAgICBjb25zdCBhZGRUb0NvbXBhcmUgPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gY29tcGFyZUl0ZW1zLmZpbmRJbmRleChjb21wYXJlID0+IGNvbXBhcmUuaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYgKGluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBBZGRlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgICAgICAgICAgc2V0Y29tcGFyZUl0ZW1zKFsuLi5jb21wYXJlSXRlbXMsIGl0ZW1dKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJUaGlzIFByb2R1Y3QgQWxyZWFkeSBBZGRlZCAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgUHJvZHVjdCBGcm9tIGNvbXBhcmVcclxuICAgIGNvbnN0IHJlbW92ZUZyb21Db21hcHJlID0gKGl0ZW0pID0+IHtcclxuICAgICAgc2V0Y29tcGFyZUl0ZW1zKGNvbXBhcmVJdGVtcy5maWx0ZXIoKGUpPT4oZS5pZCAhPT0gaXRlbS5pZCkpKVxyXG4gICAgICB0b2FzdC5lcnJvcihcIlByb2R1Y3QgUmVtb3ZlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7dmFsdWV9ID0gcHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIGNvbXBhcmVJdGVtczpjb21wYXJlSXRlbXMsXHJcbiAgICAgICAgICAgIGFkZFRvQ29tcGFyZTphZGRUb0NvbXBhcmUsXHJcbiAgICAgICAgICAgIHJlbW92ZUZyb21Db21hcHJlOnJlbW92ZUZyb21Db21hcHJlXHJcbiAgICAgICAgICB9fT5cclxuICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7XHJcbiAgQ29udGV4dCBhcyBDb21wYXJlQ29udGV4dCxcclxuICBQcm92aWRlciBhcyBDb21wYXJlQ29udGV4dFByb3ZpZGVyLFxyXG59IGZyb20gXCIuL0NvbXBhcmVDb250ZXh0XCI7XHJcbiIsImltcG9ydCBSZWFjdCwgeyBjcmVhdGVDb250ZXh0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuICBcclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IHByb3BzID0+IHtcclxuXHJcbiAgY29uc3QgW3NlbGVjdGVkQ3Vyciwgc2VsZWN0ZWRDdXJyZW5jeV0gPSB1c2VTdGF0ZSh7IGN1cnJlbmN5OiAnVVNEJyxzeW1ib2w6ICckJywgdmFsdWU6MX0pO1xyXG5cclxuICBjb25zdCBjdXJyZW5jeUNvbnRleHQgPSB7XHJcbiAgICBzZWxlY3RlZEN1cnIsXHJcbiAgICBzZWxlY3RlZEN1cnJlbmN5XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qge3ZhbHVlfSA9IHByb3BzXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICBzdGF0ZTpzZWxlY3RlZEN1cnIsXHJcbiAgICAgICAgICBjdXJyZW5jeUNvbnRleHQ6Y3VycmVuY3lDb250ZXh0XHJcbiAgICAgICAgfX0+XHJcbiAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICA8L0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgICApO1xyXG4gIFxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHsgQ29uc3VtZXIgfSA9IENvbnRleHQ7XHJcblxyXG5leHBvcnQge1xyXG4gIENvbnRleHQgYXMgQ3VycmVuY3lDb250ZXh0LFxyXG4gIFByb3ZpZGVyIGFzIEN1cnJlbmN5Q29udGV4dFByb3ZpZGVyLFxyXG59IGZyb20gXCIuL0N1cnJlbmN5Q29udGV4dFwiO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IENvbnRleHQgZnJvbSAnLi9pbmRleCc7XHJcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXHJcblxyXG5jb25zdCBnZXRMb2NhbENhcnRJdGVtcyA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0TGlzdCcpO1xyXG4gICAgaWYgKGxpc3QgPT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIFtdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIEpTT04ucGFyc2UobGlzdClcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIHJldHVybiBbXTtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBDYXJ0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbY2FydEl0ZW1zLCBzZXRDYXJ0SXRlbXNdID0gdXNlU3RhdGUoZ2V0TG9jYWxDYXJ0SXRlbXMoKSlcclxuICBjb25zdCBbY2FydFRvdGFsLCBzZXRDYXJ0VG90YWxdID0gdXNlU3RhdGUoMCk7XHJcbiAgY29uc3QgW3F1YW50aXR5LCBzZXRRdWFudGl0eV0gPSB1c2VTdGF0ZSgxKTtcclxuICBjb25zdCBbc3RvY2ssIHNldFN0b2NrXSA9IHVzZVN0YXRlKCdJblN0b2NrJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBUb3RhbCA9IGNhcnRJdGVtcy5yZWR1Y2UoKGEsIGIpID0+ICthICsgK2IudG90YWwsIDApXHJcbiAgICBzZXRDYXJ0VG90YWwoVG90YWwpO1xyXG5cclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjYXJ0TGlzdCcsIEpTT04uc3RyaW5naWZ5KGNhcnRJdGVtcykpXHJcbiAgfSwgW2NhcnRJdGVtc10pXHJcblxyXG4gIC8vIEFkZCBQcm9kdWN0IFRvIENhcnRcclxuICBjb25zdCBhZGRUb0NhcnQgPSAoaXRlbSAscXVhbnRpdHkpID0+IHtcclxuICAgIHRvYXN0LnN1Y2Nlc3MoXCJQcm9kdWN0IEFkZGVkIFN1Y2Nlc3NmdWxseSAhXCIpO1xyXG4gICAgY29uc3QgaW5kZXggPSBjYXJ0SXRlbXMuZmluZEluZGV4KGl0bSA9PiBpdG0uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHByb2R1Y3QgPSBjYXJ0SXRlbXNbaW5kZXhdO1xyXG4gICAgICBjYXJ0SXRlbXNbaW5kZXhdID0geyAuLi5pdGVtLCAuLi5pdGVtLCBxdHk6IHF1YW50aXR5LCB0b3RhbDooaXRlbS5wcmljZSAtIChpdGVtLnByaWNlICogaXRlbS5kaXNjb3VudCAvIDEwMCkpICogcXVhbnRpdHkgfTtcclxuICAgICAgc2V0Q2FydEl0ZW1zKFsuLi5jYXJ0SXRlbXNdKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgcHJvZHVjdCA9IHsgLi4uaXRlbSwgcXR5OiBxdWFudGl0eSwgdG90YWw6IChpdGVtLnByaWNlIC0gKGl0ZW0ucHJpY2UgKiBpdGVtLmRpc2NvdW50IC8gMTAwKSkgfVxyXG4gICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtcywgcHJvZHVjdF0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCByZW1vdmVGcm9tQ2FydCA9IChpdGVtKSA9PiB7XHJcbiAgICB0b2FzdC5lcnJvcihcIlByb2R1Y3QgUmVtb3ZlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgIHNldENhcnRJdGVtcyhjYXJ0SXRlbXMuZmlsdGVyKChlKSA9PiAoZS5pZCAhPT0gaXRlbS5pZCkpKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWludXNRdHkgPSAoKSA9PiB7XHJcbiAgICBpZiAocXVhbnRpdHkgPiAxKSB7XHJcbiAgICAgICAgc2V0UXVhbnRpdHkocXVhbnRpdHkgLSAxKTtcclxuICAgICAgICBzZXRTdG9jaygnSW5TdG9jaycpXHJcbiAgICB9XHJcbn1cclxuXHJcbiAgY29uc3QgcGx1c1F0eSA9IChpdGVtKSA9PiB7XHJcbiAgICBpZiAoaXRlbS5zdG9jayA+PSBxdWFudGl0eSkge1xyXG4gICAgICBzZXRRdWFudGl0eShxdWFudGl0eSArIDEpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzZXRTdG9jayhcIk91dCBvZiBTdG9jayAhXCIpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAgLy8gVXBkYXRlIFByb2R1Y3QgUXVhbnRpdHlcclxuICAgY29uc3QgdXBkYXRlUXR5ID0gKGl0ZW0sIHF1YW50aXR5KSA9PiB7XHJcbiAgICBpZihxdWFudGl0eSA+PSAxICl7XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gY2FydEl0ZW1zLmZpbmRJbmRleChpdG0gPT4gaXRtLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICBpZihpbmRleCAhPT0gLTEpe1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBjYXJ0SXRlbXNbaW5kZXhdO1xyXG4gICAgICAgIGNhcnRJdGVtc1tpbmRleF0gPSB7IC4uLnByb2R1Y3QsIC4uLml0ZW0sIHF0eTogcXVhbnRpdHksIHRvdGFsOiBpdGVtLnByaWNlICogcXVhbnRpdHkgIH07IFxyXG5cclxuICAgICAgICBzZXRDYXJ0SXRlbXMoWy4uLmNhcnRJdGVtc10pXHJcbiAgICAgICAgdG9hc3QuaW5mbyhcIlByb2R1Y3QgUXVhbnRpdHkgVXBkYXRlZCAhXCIpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICBjb25zdCBwcm9kdWN0ID0gey4uLml0ZW0sIHF0eTogcXVhbnRpdHksIHRvdGFsOiAoaXRlbS5wcmljZSAtIChpdGVtLnByaWNlICogaXRlbS5kaXNjb3VudCAvIDEwMCkpICogcXVhbnRpdHkgfVxyXG4gICAgICAgIHNldENhcnRJdGVtcyhbLi4uY2FydEl0ZW1zLCBwcm9kdWN0XSlcclxuICAgICAgICB0b2FzdC5zdWNjZXNzKFwiUHJvZHVjdCBBZGRlZCBVcGRhdGVkICFcIik7XHJcbiAgICAgIH1cclxuICAgIH1lbHNle1xyXG4gICAgICB0b2FzdC5lcnJvcihcIkVudGVyIFZhbGlkIFF1YW50aXR5ICFcIik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCB7IHZhbHVlIH0gPSBwcm9wcztcclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICAuLi5wcm9wcyxcclxuICAgICAgICBzdGF0ZTogY2FydEl0ZW1zLCBjYXJ0VG90YWwsc2V0UXVhbnRpdHkgLHF1YW50aXR5LHN0b2NrLFxyXG4gICAgICAgIGFkZFRvQ2FydDogYWRkVG9DYXJ0LFxyXG4gICAgICAgIHJlbW92ZUZyb21DYXJ0OiByZW1vdmVGcm9tQ2FydCxcclxuICAgICAgICBwbHVzUXR5OiBwbHVzUXR5LFxyXG4gICAgICAgIG1pbnVzUXR5Om1pbnVzUXR5LFxyXG4gICAgICAgIHVwZGF0ZVF0eTp1cGRhdGVRdHlcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Db250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRQcm92aWRlcjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IENhcnRDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydENvbnRleHQ7IiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IEZpbHRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJDb250ZXh0OyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEZpbHRlckNvbnRleHQgZnJvbSAnLi9GaWx0ZXJDb250ZXh0JztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY29uc3QgRmlsdGVyUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IGJyYW5kID0gcm91dGVyLnF1ZXJ5LmJyYW5kOyBcclxuICAgIGNvbnN0IGNvbG9yID0gcm91dGVyLnF1ZXJ5LmNvbG9yOyBcclxuICAgIGNvbnN0IHNpemUgPSByb3V0ZXIucXVlcnkuc2l6ZTtcclxuICAgIGNvbnN0IGNhdGVnb3J5ID0gcm91dGVyLnF1ZXJ5LmNhdGVnb3J5O1xyXG4gICAgY29uc3QgbWluID0gcm91dGVyLnF1ZXJ5Lm1pbjtcclxuICAgIGNvbnN0IG1heCA9IHJvdXRlci5xdWVyeS5tYXg7XHJcbiAgICBsZXQgc2l6ZVBhcmFtID0gc2l6ZSA/IHNpemUuc3BsaXQoXCIsXCIpOm51bGw7XHJcbiAgICBsZXQgcGFyYW0gPSBicmFuZCA/IGJyYW5kLnNwbGl0KFwiLFwiKTpbXSBcclxuICAgIGNvbnN0IFtzZWxlY3RlZENhdGVnb3J5LCBzZXRTZWxlY3RlZENhdGVnb3J5XSA9IHVzZVN0YXRlKGNhdGVnb3J5P2NhdGVnb3J5OlwiZmFzaGlvblwiKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZEJyYW5kcywgc2V0U2VsZWN0ZWRCcmFuZHNdID0gdXNlU3RhdGUocGFyYW0/cGFyYW06W10pO1xyXG4gICAgY29uc3QgW3NlbGVjdGVkQ29sb3IsIHNldFNlbGVjdGVkQ29sb3JdID0gdXNlU3RhdGUoY29sb3I/Y29sb3I6XCJcIik7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRTaXplLCBzZXRTZWxlY3RlZFNpemVdID0gdXNlU3RhdGUoc2l6ZVBhcmFtP3NpemVQYXJhbTpbXSk7XHJcbiAgICBjb25zdCBbc2VsZWN0ZWRQcmljZSwgc2V0U2VsZWN0ZWRQcmljZV0gPSB1c2VTdGF0ZSh7IG1pbjptaW4/bWluOjAsIG1heDogbWF4P21heDo1MDAgfSk7XHJcbiAgICBjb25zdCBbaXNDaGVja2VkLCBzZXRJc0NoZWNrZWRdID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbZmlsdGVyQ2hlY2tlZCwgc2V0RmlsdGVyQ2hlY2tlZF0gPSB1c2VTdGF0ZShbe31dKTtcclxuICAgXHJcbiAgICBjb25zdCBoYW5kbGVCcmFuZHMgPSAoYnJhbmQsIGNoZWNrZWQpID0+IHtcclxuICAgICAgICB2YXIgaW5kZXggPSBzZWxlY3RlZEJyYW5kcy5pbmRleE9mKGJyYW5kKTtcclxuXHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJDaGVja2VkKFt7IGJyYW5kLCBjaGVja2VkIH1dKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZEJyYW5kcyhzZWxlY3RlZEJyYW5kcy5maWx0ZXIoKGUpID0+IChlICE9PSBicmFuZCkpKVxyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlckNoZWNrZWQoW3sgYnJhbmQsIGNoZWNrZWQgfV0pXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkQnJhbmRzKFsuLi5zZWxlY3RlZEJyYW5kcywgYnJhbmRdKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaGFuZGxlU2l6ZXMgPSAoc2l6ZSwgY2hlY2tlZCkgPT4ge1xyXG5cclxuICAgICAgICB2YXIgaW5kZXggPSBzZWxlY3RlZFNpemUuaW5kZXhPZihzaXplKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICBzZXRJc0NoZWNrZWQoIWlzQ2hlY2tlZCk7XHJcbiAgICAgICAgICAgIHNldEZpbHRlckNoZWNrZWQoW3sgc2l6ZSwgY2hlY2tlZCB9XSlcclxuICAgICAgICAgICAgc2V0U2VsZWN0ZWRTaXplKHNlbGVjdGVkU2l6ZS5maWx0ZXIoKGUpID0+IChlICE9PSBzaXplKSkpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgc2V0SXNDaGVja2VkKCFpc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICBzZXRGaWx0ZXJDaGVja2VkKFt7IHNpemUsIGNoZWNrZWQgfV0pXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkU2l6ZShbLi4uc2VsZWN0ZWRTaXplLCBzaXplXSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8RmlsdGVyQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICAgICAgICB2YWx1ZT17e1xyXG4gICAgICAgICAgICAgICAgLi4ucHJvcHMsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogc2VsZWN0ZWRDYXRlZ29yeSwgc2V0RmlsdGVyQ2hlY2tlZCwgc2V0U2VsZWN0ZWRDb2xvciwgc2V0U2VsZWN0ZWRDYXRlZ29yeSxzZXRTZWxlY3RlZEJyYW5kcyAsIHNlbGVjdGVkQnJhbmRzLCBzZWxlY3RlZENvbG9yLCBzZWxlY3RlZFByaWNlLCBpc0NoZWNrZWQsIGZpbHRlckNoZWNrZWQsIHNlbGVjdGVkU2l6ZSwgc2V0U2VsZWN0ZWRTaXplLHNldFNlbGVjdGVkUHJpY2UsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVCcmFuZHM6IGhhbmRsZUJyYW5kcyxcclxuICAgICAgICAgICAgICAgIGhhbmRsZVNpemVzOiBoYW5kbGVTaXplc1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvRmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXJQcm92aWRlcjsiLCJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCAsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHtcclxuICAgIHNlbGVjdE1lbnU6IEZ1bmN0aW9uXHJcbiAgfVxyXG4pO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IHByb3BzID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2VsZWN0TWVudV0gPSB1c2VTdGF0ZSh7IG1lbnVPcGVuOiBmYWxzZSB9KTtcclxuICBcclxuICAgIGNvbnN0IG1lbnVDb250ZXh0ID0ge1xyXG4gICAgICAgIHNlbGVjdE1lbnVcclxuICAgIH07XHJcbiAgXHJcbiAgICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e21lbnVDb250ZXh0fT4ge3Byb3BzLmNoaWxkcmVufTwvQ29udGV4dC5Qcm92aWRlcj47XHJcbiAgfTtcclxuXHJcbmV4cG9ydCBjb25zdCB7IENvbnN1bWVyIH0gPSBDb250ZXh0O1xyXG5cclxuZXhwb3J0IHtcclxuICBDb250ZXh0IGFzIE1lbnVDb250ZXh0LFxyXG4gIFByb3ZpZGVyIGFzIE1lbnVDb250ZXh0UHJvdmlkZXIsXHJcbn0gZnJvbSBcIi4vTWVudUNvbnRleHRcIjtcclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNldHRpbmdDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ0NvbnRleHQ7IiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2V0dGluZ0NvbnRleHQgZnJvbSAnLi9TZXR0aW5nQ29udGV4dCc7XHJcbmltcG9ydCB7Y29uZmlnfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2N1c3RvbWl6ZXIvY29uZmlnLmpzb24nO1xyXG5jb25zdCBTZXR0aW5nUHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICAgIGNvbnN0IFtsYXlvdXRTdGF0ZSwgc2V0TGF5b3V0U3RhdGVdID0gdXNlU3RhdGUoXCJSVExcIik7XHJcbiAgICBjb25zdCBbbGF5b3V0Q29sb3IsIHNldExheW91dENvbG9yXSA9IHVzZVN0YXRlKFwiI2ZmNGMzYlwiKTtcclxuICAgIGNvbnN0IGxheW91dEZ1biA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0gPT09IFwiUlRMXCIpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwibHRyXCIpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJydGxcIik7XHJcbiAgICAgICAgICAgIHNldExheW91dFN0YXRlKFwiTFRSXCIpXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoXCJydGxcIik7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZChcImx0clwiKTtcclxuICAgICAgICAgICAgc2V0TGF5b3V0U3RhdGUoXCJSVExcIilcclxuICAgICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBsYXlvdXRDb2xvckZ1biA9IChpdGVtKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJjb2xvclwiLGl0ZW0udGFyZ2V0LnZhbHVlKVxyXG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS10aGVtZS1kZWFmdWx0JywgaXRlbS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgIGNvbmZpZy5jb2xvcj1pdGVtLnRhcmdldC52YWx1ZVxyXG4gICAgICAgIHNldExheW91dENvbG9yKGl0ZW0udGFyZ2V0LnZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8U2V0dGluZ0NvbnRleHQuUHJvdmlkZXJcclxuICAgICAgICAgICAgdmFsdWU9e3tcclxuICAgICAgICAgICAgICAgIC4uLnByb3BzLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IGxheW91dFN0YXRlLFxyXG4gICAgICAgICAgICAgICAgbGF5b3V0RnVuOmxheW91dEZ1bixcclxuICAgICAgICAgICAgICAgIGxheW91dENvbG9yRnVuOmxheW91dENvbG9yRnVuXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9TZXR0aW5nQ29udGV4dC5Qcm92aWRlcj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2V0dGluZ1Byb3ZpZGVyO1xyXG4iLCJpbXBvcnQgUmVhY3QsIHtjcmVhdGVDb250ZXh0ICwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgdG9hc3QgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe1xyXG4gIHdpc2hsaXN0SXRlbXM6IEZ1bmN0aW9uLFxyXG4gIGFkZFRvV2lzaDogRnVuY3Rpb24sXHJcbiAgcmVtb3ZlRnJvbVdpc2g6IEZ1bmN0aW9uXHJcbn1cclxuKTtcclxuXHJcbmNvbnN0IGdldExvY2FsV2lzaGxpc3RJdGVtcyA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgbGlzdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd3aXNobGlzdCcpO1xyXG4gICAgICBpZiAobGlzdCA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UobGlzdClcclxuICAgICAgfVxyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIFtdO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBQcm92aWRlciA9IChwcm9wcykgPT4ge1xyXG5cclxuICAgIGNvbnN0IFt3aXNobGlzdEl0ZW1zLCBzZXRXaXNobGlzdEl0ZW1zXSA9IHVzZVN0YXRlKGdldExvY2FsV2lzaGxpc3RJdGVtcygpKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dpc2hsaXN0JywgSlNPTi5zdHJpbmdpZnkod2lzaGxpc3RJdGVtcykpXHJcbiAgICB9LCBbd2lzaGxpc3RJdGVtc10pXHJcblxyXG5cclxuICAgIC8vIEFkZCBQcm9kdWN0IFRvIFdpc2hsaXN0XHJcbiAgICBjb25zdCBhZGRUb1dpc2ggPSAoaXRlbSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gd2lzaGxpc3RJdGVtcy5maW5kSW5kZXgod2lzaCA9PiB3aXNoLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgdG9hc3Quc3VjY2VzcyhcIlByb2R1Y3QgQWRkZWQgU3VjY2Vzc2Z1bGx5ICFcIik7XHJcbiAgICAgICAgICAgIHNldFdpc2hsaXN0SXRlbXMoWy4uLndpc2hsaXN0SXRlbXMsIGl0ZW1dKVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdG9hc3QuZXJyb3IoXCJUaGlzIFByb2R1Y3QgQWxyZWFkeSBBZGRlZCAhXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBSZW1vdmUgUHJvZHVjdCBGcm9tIFdpc2hsaXN0XHJcbiAgICBjb25zdCByZW1vdmVGcm9tV2lzaCA9IChpdGVtKSA9PiB7XHJcbiAgICAgIHNldFdpc2hsaXN0SXRlbXMod2lzaGxpc3RJdGVtcy5maWx0ZXIoKGUpPT4oZS5pZCAhPT0gaXRlbS5pZCkpKVxyXG4gICAgICB0b2FzdC5lcnJvcihcIlByb2R1Y3QgUmVtb3ZlZCBTdWNjZXNzZnVsbHkgIVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB7dmFsdWV9ID0gcHJvcHNcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7XHJcbiAgICAgICAgICAgIHdpc2hsaXN0SXRlbXM6d2lzaGxpc3RJdGVtcyxcclxuICAgICAgICAgICAgYWRkVG9XaXNoOmFkZFRvV2lzaCxcclxuICAgICAgICAgICAgcmVtb3ZlRnJvbVdpc2g6cmVtb3ZlRnJvbVdpc2hcclxuICAgICAgICAgIH19PlxyXG4gICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBDb250ZXh0IGFzIFdpc2hsaXN0Q29udGV4dCxcclxuICBQcm92aWRlciBhcyBXaXNobGlzdENvbnRleHRQcm92aWRlcixcclxufSBmcm9tIFwiLi9XaXNobGlzdENvbnRleHRcIjtcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBUaGVtZVNldHRpbmdzIGZyb20gJy4uL2NvbXBvbmVudHMvY3VzdG9taXplci90aGVtZS1zZXR0aW5ncyc7XHJcbmltcG9ydCAnLi4vcHVibGljL2Fzc2V0cy9zY3NzL2FwcC5zY3NzJztcclxuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSc7XHJcbmltcG9ydCBUYXBUb3AgZnJvbSAnLi4vY29tcG9uZW50cy9jb21tb24vd2lkZ2V0cy9UYXAtVG9wJztcclxuaW1wb3J0IE1lc3NlbmdlckN1c3RvbWVyQ2hhdCBmcm9tICdyZWFjdC1tZXNzZW5nZXItY3VzdG9tZXItY2hhdCc7XHJcbmltcG9ydCB7IE1lbnVDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9oZWxwZXJzL21lbnUvTWVudUNvbnRleHQnO1xyXG5pbXBvcnQgQ2FydENvbnRleHRQcm92aWRlciBmcm9tICcuLi9oZWxwZXJzL2NhcnQvQ2FydENvbnRleHQnO1xyXG5pbXBvcnQgeyBXaXNobGlzdENvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2hlbHBlcnMvd2lzaGxpc3QvV2lzaGxpc3RDb250ZXh0JztcclxuaW1wb3J0IEZpbHRlclByb3ZpZGVyIGZyb20gJy4uL2hlbHBlcnMvZmlsdGVyL0ZpbHRlclByb3ZpZGVyJztcclxuaW1wb3J0IFNldHRpbmdQcm92aWRlciBmcm9tICcuLi9oZWxwZXJzL3RoZW1lLXNldHRpbmcvU2V0dGluZ1Byb3ZpZGVyJztcclxuaW1wb3J0IHsgQ29tcGFyZUNvbnRleHRQcm92aWRlciB9IGZyb20gJy4uL2hlbHBlcnMvQ29tcGFyZS9Db21wYXJlQ29udGV4dCc7XHJcbmltcG9ydCB7IEN1cnJlbmN5Q29udGV4dFByb3ZpZGVyIH0gZnJvbSAnLi4vaGVscGVycy9DdXJyZW5jeS9DdXJyZW5jeUNvbnRleHQnO1xyXG5cclxuaW1wb3J0IEhlbG1ldCBmcm9tICdyZWFjdC1oZWxtZXQnO1xyXG5pbXBvcnQge1xyXG4gIEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLFxyXG4gIFN3aXRjaCxcclxuICB1c2VMb2NhdGlvblxyXG59IGZyb20gXCJyZWFjdC1yb3V0ZXItZG9tXCI7XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcblxyXG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3BsaXQoJy8nKTtcclxuICAgIGNvbnN0IHVybCA9IHBhdGhbcGF0aC5sZW5ndGggLSAxXTtcclxuICAgIHNldFVybCh1cmwpO1xyXG4gICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkYXJrJyk7XHJcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKVxyXG4gICAgfSwgMTAwMCk7XHJcblxyXG4gIH0sIFtdKTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIFxyXG4gICAgICB7XHJcbiAgICAgICAgaXNMb2FkaW5nID9cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci13cmFwcGVyXCIgPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdXJsID09PSAnQ2hyaXN0bWFzJyA/XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJlbG9hZGVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPjwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPE1lc3NlbmdlckN1c3RvbWVyQ2hhdFxyXG4gICAgICAgICAgICAgIHBhZ2VJZD1cIjIxMjM0Mzg4MDQ1NzQ2NjBcIlxyXG4gICAgICAgICAgICAgIGFwcElkPVwiNDA2MjUyOTMwNzUyNDEyXCJcclxuICAgICAgICAgICAgICBodG1sUmVmPVwiaHR0cHM6Ly9jb25uZWN0LmZhY2Vib29rLm5ldC9lbl9VUy9zZGsuanNcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEhlbG1ldD5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgICAgPHRpdGxlPk11bHRpa2FydCAtIE11bHRpLXB1cnBvcHNlIEUtY29tbWVyY2UgUmVhY3QgVGVtcGxhdGU8L3RpdGxlPlxyXG4gICAgICAgICAgPC9IZWxtZXQ+XHJcbiAgICAgICAgICA8Um91dGVyPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8U2V0dGluZ1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPENvbXBhcmVDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgIDxDdXJyZW5jeUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FydENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxXaXNobGlzdENvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpbHRlclByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvRmlsdGVyUHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTWVudUNvbnRleHRQcm92aWRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvV2lzaGxpc3RDb250ZXh0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJ0Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8L0N1cnJlbmN5Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgICA8VGhlbWVTZXR0aW5ncyAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db21wYXJlQ29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDwvU2V0dGluZ1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxUb2FzdENvbnRhaW5lciAvPlxyXG4gICAgICAgICAgICAgIDxUYXBUb3AgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvUm91dGVyPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgIH1cclxuXHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IFByb2R1Y3QzID0ge1xyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBhcnJvd3M6ZmFsc2UsXHJcbiAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OjIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcbmV4cG9ydCBjb25zdCB0b29sc19wcm9kdWN0XzQgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgIGFycm93czpmYWxzZSxcclxuICAgIHJlc3BvbnNpdmU6IFt7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0NCA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhcnJvd3M6ZmFsc2UsXHJcbiAgICBhdXRvcGxheVNwZWVkOiAzMDAwLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OjIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdDcgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNCxcclxuICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgIGFycm93czpmYWxzZSxcclxuICAgIGF1dG9wbGF5U3BlZWQ6IDMwMDAsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMjAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6MixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdDUgPSB7XHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiA1LFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTM2NyxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdDYgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNSxcclxuICAgIGF1dG9wbGF5OiBmYWxzZSxcclxuICAgIGFycm93czpmYWxzZSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzoyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgVGVhbTQgPSB7XHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogMzAwMCxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNTg2LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVyMiA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDIsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVyMyA9IHtcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDMwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgYXV0b3BsYXk6IHRydWUsXHJcbiAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTIwMCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5leHBvcnQgY29uc3QgU2xpZGVyNCA9IHtcclxuICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDQsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGF1dG9wbGF5OiB0cnVlLFxyXG4gICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyMDAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNTg2LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5leHBvcnQgY29uc3QgU2xpZGVyNSA9IHtcclxuICAgIGRvdHM6IGZhbHNlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogMzAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiA1LFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMzY3LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXHJcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZXI2ID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNixcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzNjcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyNCxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiA0LFxyXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNDgwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICBdXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBTbGlkZXI3ID0ge1xyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiAzMDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDcsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogNyxcclxuICAgIHJlc3BvbnNpdmU6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEzNjcsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDYsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjQsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDUsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogNSxcclxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNjAwLFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA0ODAsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogM1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgU2xpZGVVcERvd24gPSBmdW5jdGlvbihjbGFzc25hbWVzKSB7XHJcbiAgICAgICAgdmFyIGFjY29yZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLlwiK2NsYXNzbmFtZXMrXCIgaDRcIik7XHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGFjY29yZHMsIGZ1bmN0aW9uKGVsZW10KSB7XHJcbiAgICAgICAgICAgIGVsZW10LmlubmVySFRNTCArPSAnPHNwYW4gY2xhc3M9XCJhY2NvcmRpbmctbWVudVwiPjwvc3Bhbj4nO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHZhciBhbmNob3JzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjbGFzc25hbWVzKTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgYW5jaG9ycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgYW5jaG9yID0gYW5jaG9yc1tpXTtcclxuICAgICAgICAgICAgYW5jaG9yLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrY2xhc3NuYW1lcyk7XHJcbiAgICAgICAgICAgICAgICBbXS5mb3JFYWNoLmNhbGwoZWxlbXMsIGZ1bmN0aW9uKGVsZW10KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWwgPSBlbGVtdC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gZWwub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGBoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ2BcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSAnNTAwbXMnXHJcbiAgICAgICAgICAgICAgICAgICAgZWwub2Zmc2V0SGVpZ2h0IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5wYWRkaW5nVG9wID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnBhZGRpbmdCb3R0b20gPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUubWFyZ2luVG9wID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2hlaWdodCcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJylcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncGFkZGluZy1ib3R0b20nKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXJnaW4tdG9wJylcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93JylcclxuICAgICAgICAgICAgICAgICAgICBlbC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNpdGlvbi1kdXJhdGlvbicpXHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tcHJvcGVydHknKVxyXG5cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxlbWVudCA9IHRoaXMubmV4dEVsZW1lbnRTaWJsaW5nO1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnZGlzcGxheScpXHJcbiAgICAgICAgICAgICAgICBsZXQgZGlzcGxheSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmRpc3BsYXlcclxuXHJcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gYGhlaWdodCwgbWFyZ2luLCBwYWRkaW5nYFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzUwMG1zJ1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQub2Zmc2V0SGVpZ2h0IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLWV4cHJlc3Npb25zXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSdcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25Qcm9wZXJ0eSA9IGBoZWlnaHQsIG1hcmdpbiwgcGFkZGluZ2BcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9ICc1MDBtcydcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJylcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5JylcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApXHJcblxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3BsYXkgPT09ICdub25lJykgZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5oZWlnaHQgPSAwXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wYWRkaW5nVG9wID0gMFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucGFkZGluZ0JvdHRvbSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpblRvcCA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLm1hcmdpbkJvdHRvbSA9IDBcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50Lm9mZnNldEhlaWdodCAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvblByb3BlcnR5ID0gYGhlaWdodCwgbWFyZ2luLCBwYWRkaW5nYFxyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gJzUwMG1zJ1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BhZGRpbmctdG9wJylcclxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwYWRkaW5nLWJvdHRvbScpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLXRvcCcpXHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWFyZ2luLWJvdHRvbScpXHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdoZWlnaHQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zaXRpb24tZHVyYXRpb24nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2l0aW9uLXByb3BlcnR5JylcclxuICAgICAgICAgICAgICAgICAgICB9LCA1MDApXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBlbGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuXCIrY2xhc3NuYW1lcyk7XHJcbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGVsZW1zLCBmdW5jdGlvbihlbGVtdCkge1xyXG4gICAgICAgICAgICBsZXQgZWwgPSBlbGVtdC5uZXh0RWxlbWVudFNpYmxpbmc7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlID0gXCJkaXNwbGF5OiBub25lXCI7XHJcbiAgICAgICAgfSk7XHJcblxyXG59XHJcblxyXG5cclxuLy8gU1ZHIEljb25zXHJcblxyXG5leHBvcnQgY29uc3Qgc3ZnRnJlZVNoaXBwaW5nID0gJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIC0xMTcgNjc5Ljk5ODkyIDY3OVwiPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0xMi4zNDc2NTYgMzc4LjM4MjgxMmgzNy4zOTA2MjVjNC4zNzEwOTQgMzcuNzE0ODQ0IDM2LjMxNjQwNyA2Ni4xNjQwNjMgNzQuMjc3MzQ0IDY2LjE2NDA2MyAzNy45Njg3NSAwIDY5LjkwNjI1LTI4LjQ0OTIxOSA3NC4yODEyNS02Ni4xNjQwNjNoMjQxLjc4OTA2M2M0LjM4MjgxMiAzNy43MTQ4NDQgMzYuMzE2NDA2IDY2LjE2NDA2MyA3NC4yNzczNDMgNjYuMTY0MDYzIDM3Ljk2ODc1IDAgNjkuOTAyMzQ0LTI4LjQ0OTIxOSA3NC4yODUxNTctNjYuMTY0MDYzaDc4Ljg5MDYyNGM2Ljg4MjgxMyAwIDEyLjQ2MDkzOC01LjU3ODEyNCAxMi40NjA5MzgtMTIuNDYwOTM3di0zNTIuOTU3MDMxYzAtNi44ODI4MTMtNS41NzgxMjUtMTIuNDY0ODQ0LTEyLjQ2MDkzOC0xMi40NjQ4NDRoLTQzMi40NzY1NjJjLTYuODc1IDAtMTIuNDU3MDMxIDUuNTgyMDMxLTEyLjQ1NzAzMSAxMi40NjQ4NDR2NjkuOTE0MDYyaC0xMDUuNTcwMzEzYy00LjA3NDIxOC4wMTE3MTktNy44OTA2MjUgMi4wMDc4MTMtMTAuMjE4NzUgNS4zNjMyODJsLTY4LjE3MTg3NSA5Ny41ODIwMzEtMjYuNjY3OTY5IDM3LjM5MDYyNS05LjcyMjY1NiAxMy44MzU5MzdjLTEuNDU3MDMxIDIuMDgyMDMxLTIuMjQyMTg3MiA0LjU1ODU5NC0yLjI0OTk5OTc1IDcuMTAxNTYzdjEyMS4zOTg0MzdjLS4wOTc2NTYyNSAzLjM0Mzc1IDEuMTU2MjQ5NzUgNi41ODk4NDQgMy40NzY1NjI3NSA5LjAwMzkwNyAyLjMyMDMxMiAyLjQxNzk2OCA1LjUxOTUzMSAzLjc5Njg3NCA4Ljg2NzE4NyAzLjgyODEyNHptMTExLjQxNzk2OSAzNy4zODY3MTljLTI3LjUyNzM0NCAwLTQ5Ljg1MTU2My0yMi4zMjAzMTItNDkuODUxNTYzLTQ5Ljg0NzY1NiAwLTI3LjUzNTE1NiAyMi4zMjQyMTktNDkuODU1NDY5IDQ5Ljg1MTU2My00OS44NTU0NjkgMjcuNTM1MTU2IDAgNDkuODU1NDY5IDIyLjMyMDMxMyA0OS44NTU0NjkgNDkuODU1NDY5IDAgMjcuNjMyODEzLTIyLjIxODc1IDUwLjEzMjgxMy00OS44NTU0NjkgNTAuNDcyNjU2em0zOTAuMzQ3NjU2IDBjLTI3LjUzMTI1IDAtNDkuODU1NDY5LTIyLjMyMDMxMi00OS44NTU0NjktNDkuODQ3NjU2IDAtMjcuNTM1MTU2IDIyLjMyNDIxOS00OS44NTU0NjkgNDkuODU1NDY5LTQ5Ljg1NTQ2OSAyNy41MzkwNjMgMCA0OS44NTU0NjkgMjIuMzIwMzEzIDQ5Ljg1NTQ2OSA0OS44NTU0NjkuMDAzOTA2IDI3LjYzMjgxMy0yMi4yMTg3NSA1MC4xMzI4MTMtNDkuODU1NDY5IDUwLjQ3MjY1NnptMTQwLjcxMDkzOC0zOTAuMzQzNzV2MjIzLjM0Mzc1aC0zMzguMzc1Yy02Ljg4MjgxMyAwLTEyLjQ2NDg0NCA1LjU3ODEyNS0xMi40NjQ4NDQgMTIuNDYwOTM4IDAgNi44ODI4MTIgNS41ODIwMzEgMTIuNDY0ODQzIDEyLjQ2NDg0NCAxMi40NjQ4NDNoMzM4LjM3NXY3OS43NjE3MTloLTY2LjQyMTg3NWMtNC4zODI4MTMtMzcuNzEwOTM3LTM2LjMyMDMxMy02Ni4xNTYyNS03NC4yODkwNjMtNjYuMTU2MjUtMzcuOTYwOTM3IDAtNjkuODk4NDM3IDI4LjQ0NTMxMy03NC4yNzczNDMgNjYuMTU2MjVoLTE5Mi4zMDg1OTR2LTI3MS4zMjQyMTloODkuOTgwNDY4YzYuODgyODEzIDAgMTIuNDY0ODQ0LTUuNTgyMDMxIDEyLjQ2NDg0NC0xMi40NjQ4NDMgMC02Ljg4MjgxMy01LjU4MjAzMS0xMi40NjQ4NDQtMTIuNDY0ODQ0LTEyLjQ2NDg0NGgtODkuOTgwNDY4di0zMS43NzczNDR6bS01MzEuMzA0Njg4IDgyLjM4MjgxM2g5OS43MDMxMjV2MjQ1LjY0ODQzN2gtMjQuOTI1NzgxYy00LjM3NS0zNy43MTA5MzctMzYuMzEyNS02Ni4xNTYyNS03NC4yODEyNS02Ni4xNTYyNS0zNy45NjA5MzcgMC02OS45MDYyNSAyOC40NDUzMTMtNzQuMjc3MzQ0IDY2LjE1NjI1aC0yNC45Mjk2ODd2LTEwNS4zMTY0MDZsMy43MzgyODEtNS4zNTkzNzVoMTUyLjA1NDY4N2M2Ljg4MjgxMyAwIDEyLjQ2MDkzOC01LjU3NDIxOSAxMi40NjA5MzgtMTIuNDU3MDMxdi05Mi4yMjY1NjNjMC02Ljg4MjgxMi01LjU3ODEyNS0xMi40NjQ4NDQtMTIuNDYwOTM4LTEyLjQ2NDg0NGgtNjkuNzk2ODc0em0tMzAuMTYwMTU2IDQzaDc0Ljc3NzM0NHY2Ny4yOTY4NzVoLTEyMi4yNjU2MjV6bTAgMFwiXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4nO1xyXG5leHBvcnQgY29uc3Qgc3Znc2VydmljZSA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgNDgwIDQ4MFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODAgNDgwO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgd2lkdGg9XCI1MTJweFwiIGhlaWdodD1cIjUxMnB4XCI+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ3Miw0MzJoLTI0VjI4MGMtMC4wMDMtNC40MTgtMy41ODgtNy45OTctOC4wMDYtNy45OTRjLTIuNjA3LDAuMDAyLTUuMDUsMS4yNzQtNi41NDYsMy40MWwtMTEyLDE2MCAgICAgYy0yLjUzMiwzLjYyMS0xLjY0OSw4LjYwOSwxLjk3MiwxMS4xNGMxLjM0MywwLjkzOSwyLjk0MSwxLjQ0Myw0LjU4LDEuNDQ0aDEwNHYyNGMwLDQuNDE4LDMuNTgyLDgsOCw4czgtMy41ODIsOC04di0yNGgyNCAgICAgYzQuNDE4LDAsOC0zLjU4Miw4LThTNDc2LjQxOCw0MzIsNDcyLDQzMnogTTQzMiw0MzJoLTg4LjY0TDQzMiwzMDUuMzc2VjQzMnpcIiBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTMyOCw0NjRoLTk0LjcxMmw4OC4wNTYtMTAzLjY4OGMwLjItMC4yMzgsMC4zODctMC40ODYsMC41Ni0wLjc0NGMxNi41NjYtMjQuNTE4LDExLjA0OC01Ny43MTMtMTIuNTYtNzUuNTUyICAgICBjLTI4LjcwNS0yMC42MjUtNjguNjk1LTE0LjA3NC04OS4zMTksMTQuNjMxQzIxMi4yMDQsMzA5LjUzMiwyMDcuOTk4LDMyMi41OTcsMjA4LDMzNmMwLDQuNDE4LDMuNTgyLDgsOCw4czgtMy41ODIsOC04ICAgICBjLTAuMDAzLTI2LjUxLDIxLjQ4Ni00OC4wMDIsNDcuOTk1LTQ4LjAwNWMxMC4wNDgtMC4wMDEsMTkuODQzLDMuMTUxLDI4LjAwNSw5LjAxM2MxNi41MzcsMTIuNjcxLDIwLjM4OCwzNi4wMDcsOC44LDUzLjMyICAgICBsLTk4Ljg5NiwxMTYuNDk2Yy0yLjg1OSwzLjM2OS0yLjQ0NSw4LjQxNywwLjkyNCwxMS4yNzZjMS40NDUsMS4yMjYsMy4yNzcsMS44OTksNS4xNzIsMS45aDExMmM0LjQxOCwwLDgtMy41ODIsOC04ICAgICBTMzMyLjQxOCw0NjQsMzI4LDQ2NHpcIiBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTIxNi4xNzYsNDI0LjE1MmMwLjE2Ny00LjQxNS0zLjI3OC04LjEyOS03LjY5My04LjI5NmMtMC4wMDEsMC0wLjAwMiwwLTAuMDAzLDAgICAgIEMxMDQuMTEsNDExLjk4MiwyMC4zNDEsMzI4LjM2MywxNi4yOCwyMjRINDhjNC40MTgsMCw4LTMuNTgyLDgtOHMtMy41ODItOC04LThIMTYuMjhDMjAuMjgzLDEwMy44MjEsMTAzLjgyLDIwLjI4NywyMDgsMTYuMjg4ICAgICBWNDBjMCw0LjQxOCwzLjU4Miw4LDgsOHM4LTMuNTgyLDgtOFYxNi4yODhjMTAyLjc1NCwzLjk3NCwxODUuNjg2LDg1LjM0LDE5MS42MTYsMTg4bC0zMS4yLTMxLjIgICAgIGMtMy4xNzgtMy4wNy04LjI0Mi0yLjk4Mi0xMS4zMTIsMC4xOTZjLTIuOTk0LDMuMS0yLjk5NCw4LjAxNSwwLDExLjExNmw0NC42NTYsNDQuNjU2YzAuODQxLDEuMDE4LDEuOTI1LDEuODA3LDMuMTUyLDIuMjk2ICAgICBjMC4zMTMsMC4wOTQsMC42MzEsMC4xNzIsMC45NTIsMC4yMzJjMC41NDksMC4xOTgsMS4xMTcsMC4zMzUsMS42OTYsMC40MDhjMC4wOCwwLDAuMTUyLDAsMC4yMzIsMGMwLjA4LDAsMC4xNTIsMCwwLjIyNCwwICAgICBjMC42MDktMC4wNDYsMS4yMTEtMC4xNjQsMS43OTItMC4zNTJjMC4zMjktMC4wNCwwLjY1NS0wLjEwMSwwLjk3Ni0wLjE4NGMxLjA4My0wLjM4NSwyLjA2OS0xLjAwMiwyLjg4OC0xLjgwOGw0NS4yNjQtNDUuMjQ4ICAgICBjMy4wNjktMy4xNzgsMi45ODItOC4yNDItMC4xOTYtMTEuMzEyYy0zLjEtMi45OTQtOC4wMTUtMi45OTQtMTEuMTE2LDBsLTMxLjk3NiwzMS45NTIgICAgIEM0MjUuOTMzLDkwLjM3LDMzMS4zOCwwLjI4MSwyMTYuNTY4LDAuMTEyQzIxNi4zNjgsMC4xMDQsMjE2LjIsMCwyMTYsMHMtMC4zNjgsMC4xMDQtMC41NjgsMC4xMTIgICAgIEM5Ni41ODIsMC4yNzUsMC4yNzUsOTYuNTgyLDAuMTEyLDIxNS40MzJDMC4xMTIsMjE1LjYzMiwwLDIxNS44LDAsMjE2czAuMTA0LDAuMzY4LDAuMTEyLDAuNTY4ICAgICBjMC4xOTksMTE1LjkxNyw5MS45MzksMjEwLjk3LDIwNy43NzYsMjE1LjI4aDAuMjk2QzIxMi40ODMsNDMxLjg0NywyMTYuMDEzLDQyOC40NDgsMjE2LjE3Niw0MjQuMTUyelwiIGZpbGw9XCIjZmY0YzNiXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzIzLjQ4LDEwOC41MmMtMy4xMjQtMy4xMjMtOC4xODgtMy4xMjMtMTEuMzEyLDBMMjI2LjIsMTk0LjQ4Yy02LjQ5NS0yLjg5Ni0xMy45MTQtMi44OTYtMjAuNDA4LDBsLTQwLjcwNC00MC43MDQgICAgIGMtMy4xNzgtMy4wNjktOC4yNDMtMi45ODEtMTEuMzEyLDAuMTk3Yy0yLjk5NCwzLjEtMi45OTQsOC4wMTUsMCwxMS4xMTVsNDAuNjI0LDQwLjYyNGMtNS43MDQsMTEuOTQtMC42NDgsMjYuMjQ0LDExLjI5MywzMS45NDcgICAgIGM5LjE2NSw0LjM3OCwyMC4wOTUsMi41MDEsMjcuMjc1LTQuNjgzYzcuMjE5LTcuMTU4LDkuMDc4LTE4LjExOCw0LjYyNC0yNy4yNTZsODUuODg4LTg1Ljg4OCAgICAgQzMyNi42MDMsMTE2LjcwOCwzMjYuNjAzLDExMS42NDQsMzIzLjQ4LDEwOC41MnogTTIyMS42NTgsMjIxLjY1NGMtMC4wMDEsMC4wMDEtMC4wMDEsMC4wMDEtMC4wMDIsMC4wMDIgICAgIGMtMy4xNjQsMy4wMjUtOC4xNDgsMy4wMjUtMTEuMzEyLDBjLTMuMTI1LTMuMTI0LTMuMTI1LTguMTg5LTAuMDAyLTExLjMxNGMzLjEyNC0zLjEyNSw4LjE4OS0zLjEyNSwxMS4zMTQtMC4wMDIgICAgIEMyMjQuNzgxLDIxMy40NjQsMjI0Ljc4MSwyMTguNTMsMjIxLjY1OCwyMjEuNjU0elwiIGZpbGw9XCIjZmY0YzNiXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+JztcclxuXHJcbmV4cG9ydCBjb25zdCBzdmdvZmZlciA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAtMTQgNTEyLjAwMDAxIDUxMlwiPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm0xMzYuOTY0ODQ0IDMwOC4yMzQzNzVjNC43ODEyNS0yLjc1NzgxMyA2LjQxNzk2OC04Ljg3ODkwNiAzLjY2MDE1Ni0xMy42NjAxNTYtMi43NjE3MTktNC43NzczNDQtOC44Nzg5MDYtNi40MTc5NjktMTMuNjYwMTU2LTMuNjYwMTU3LTQuNzgxMjUgMi43NjE3MTktNi40MjE4NzUgOC44ODI4MTMtMy42NjAxNTYgMTMuNjYwMTU3IDIuNzU3ODEyIDQuNzgxMjUgOC44Nzg5MDYgNi40MjE4NzUgMTMuNjYwMTU2IDMuNjYwMTU2em0wIDBcIlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTk1Ljk4NDM3NSAzNzcuMjUzOTA2IDUwLjM1OTM3NSA4Ny4yMzA0NjljMTAuODY3MTg4IDE4Ljg0Mzc1IDM1LjMxMjUgMjUuODIwMzEzIDU0LjY0NDUzMSAxNC42NDQ1MzEgMTkuMTI4OTA3LTExLjA1NDY4NyAyNS43MDMxMjUtMzUuNDk2MDk0IDE0LjYzNjcxOS01NC42NDA2MjVsLTMwLTUxLjk2ODc1IDI1Ljk4MDQ2OS0xNWM0Ljc4MTI1LTIuNzY1NjI1IDYuNDIxODc1LTguODc4OTA2IDMuNjYwMTU2LTEzLjY2MDE1NmwtMTMuMDAzOTA2LTIyLjUyMzQzN2MxLjU1MDc4MS0uMzAwNzgyIDExLjc0NjA5My0yLjMwMDc4MiAxOTEuNTM5MDYyLTM3LjU3MDMxMyAyMi4yMjY1NjMtMS4yMDcwMzEgMzUuNTQyOTY5LTI1LjUxNTYyNSAyNC4zMTY0MDctNDQuOTQ5MjE5bC0zMy4yMzQzNzYtNTcuNTYyNSAyMS4yMzgyODItMzIuMTY3OTY4YzIuMDg1OTM3LTMuMTY0MDYzIDIuMjEwOTM3LTcuMjMwNDY5LjMxNjQwNi0xMC41MTE3MTlsLTIwLTM0LjY0MDYyNWMtMS44OTQ1MzEtMy4yODEyNS01LjQ5MjE4OC01LjIwMzEyNS05LjI2MTcxOS00Ljk4MDQ2OWwtMzguNDcyNjU2IDIuMzA4NTk0LTM2Ljg5NDUzMS02My45MDYyNWMtNS4zNDM3NS05LjI1NzgxMy0xNC45MTc5NjktMTQuODYzMjgxLTI1LjYwNTQ2OS0xNC45OTYwOTQtLjEyODkwNi0uMDAzOTA2LS4yNTM5MDYtLjAwMzkwNi0uMzgyODEzLS4wMDM5MDYtMTAuMzI4MTI0IDAtMTkuNzAzMTI0IDUuMTQwNjI1LTI1LjI1NzgxMiAxMy44MzIwMzFsLTEzMC42MzI4MTIgMTY2LjQxNDA2Mi04NC45MjU3ODIgNDkuMDMxMjVjLTMzLjQwMjM0NCAxOS4yNzczNDQtNDQuOTcyNjU2IDYyLjEyODkwNy0yNS42MjEwOTQgOTUuNjIxMDk0IDE3LjY3OTY4OCAzMC42MjUgNTQuOTUzMTI2IDQyLjY3MTg3NSA4Ni42MDE1NjMgMzB6bTEwMi4zMjQyMTkgNTcuMjM4MjgyYzUuNTIzNDM3IDkuNTU0Njg3IDIuMjUzOTA2IDIxLjc4MTI1LTcuMzI4MTI1IDI3LjMxNjQwNi05LjYxMzI4MSA1LjU1ODU5NC0yMS44NTU0NjkgMi4xNDQ1MzEtMjcuMzE2NDA3LTcuMzIwMzEzbC01MC04Ni42MTMyODEgMzQuNjQwNjI2LTIwYzU3Ljg2NzE4NyAxMDAuMjQyMTg4IDQ5LjA3NDIxOCA4NS4wMTE3MTkgNTAuMDAzOTA2IDg2LjYxNzE4OHptLTIyLjY4MzU5NC03OS4yOTY4NzYtMTAtMTcuMzIwMzEyIDE3LjMyMDMxMi0xMCAxMCAxNy4zMjAzMTJ6bTE5Ni41ODIwMzEtMjM1LjkxMDE1NiAxMy44MjAzMTMgMjMuOTM3NS0xMi4zMjQyMTkgMTguNjY0MDYzLTIzLjgyMDMxMy00MS4yNjE3MTl6bS0xMDQuOTE3OTY5LTcyLjEzMjgxMmMyLjY4MzU5NC00LjM5MDYyNSA2Ljk0MTQwNy00Ljg0Mzc1IDguNjY3OTY5LTQuNzk2ODc1IDEuNzA3MDMxLjAxOTUzMSA1Ljk2MDkzOC41NTA3ODEgOC41MjczNDQgNC45OTYwOTNsMTE2LjMxMjUgMjAxLjQ2NDg0NGMzLjc4OTA2MyA2LjU1ODU5NC0uODE2NDA2IDE0LjgwNDY4OC04LjQxNDA2MyAxNC45OTIxODgtMS4zNjMyODEuMDMxMjUtMS45OTIxODcuMjc3MzQ0LTUuNDg0Mzc0LjkyOTY4N2wtMTIzLjAzNTE1Ny0yMTMuMTA1NDY5YzIuNTgyMDMxLTMuMzIwMzEyIDIuOTE0MDYzLTMuNjQwNjI0IDMuNDI1NzgxLTQuNDgwNDY4em0tMTYuNzM0Mzc0IDIxLjQzMzU5NCAxMTUuNTk3NjU2IDIwMC4yMjI2NTYtMTc0LjQ2MDkzOCAzNC4yMTg3NS01My4wNDY4NzUtOTEuODc4OTA2em0tMjIzLjg1MTU2MyAyNjguNjY3OTY4Yy00LjM5MDYyNS03LjU5NzY1Ni02LjcxMDkzNy0xNi4yMjI2NTYtNi43MTA5MzctMjQuOTQ5MjE4IDAtMTcuODM1OTM4IDkuNTg1OTM3LTM0LjQ0NTMxMyAyNS4wMTE3MTgtNDMuMzUxNTYzbDc3Ljk0MTQwNi00NSA1MCA4Ni42MDE1NjMtNzcuOTQxNDA2IDQ1LjAwMzkwNmMtMjMuODc4OTA2IDEzLjc4MTI1LTU0LjUxNTYyNSA1LjU3MDMxMi02OC4zMDA3ODEtMTguMzA0Njg4em0wIDBcIlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTEwNS45ODQzNzUgMzE0LjU3NDIxOWMtMi43NjE3MTktNC43ODEyNS04Ljg3ODkwNi02LjQyMTg3NS0xMy42NjAxNTYtMy42NjAxNTdsLTE3LjMyMDMxMyAxMGMtNC43NzM0MzcgMi43NTc4MTMtMTAuOTAyMzQ0IDEuMTEzMjgyLTEzLjY2MDE1Ni0zLjY2MDE1Ni0yLjc2MTcxOS00Ljc4MTI1LTguODc4OTA2LTYuNDIxODc1LTEzLjY2MDE1Ni0zLjY2MDE1NnMtNi40MjE4NzUgOC44Nzg5MDYtMy42NjAxNTYgMTMuNjYwMTU2YzguMjMwNDY4IDE0LjI1NzgxMyAyNi41ODk4NDMgMTkuMjg1MTU2IDQwLjk4MDQ2OCAxMC45ODA0NjlsMTcuMzIwMzEzLTEwYzQuNzgxMjUtMi43NjE3MTkgNi40MjE4NzUtOC44NzUgMy42NjAxNTYtMTMuNjYwMTU2em0wIDBcIlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkPVwibTQ5Ny4xMzY3MTkgNDMuNzQ2MDk0LTU1LjcyMjY1NyAzMS4wMDc4MTJjLTQuODI0MjE4IDIuNjg3NS02LjU2MjUgOC43NzczNDQtMy44NzUgMTMuNjAxNTYzIDIuNjc5Njg4IDQuODIwMzEyIDguNzY1NjI2IDYuNTY2NDA2IDEzLjYwMTU2MyAzLjg3NWw1NS43MTg3NS0zMS4wMDc4MTNjNC44MjgxMjUtMi42ODc1IDYuNTYyNS04Ljc3NzM0NCAzLjg3NS0xMy42MDE1NjItMi42ODM1OTQtNC44MjgxMjUtOC43NzM0MzctNi41NjI1LTEzLjU5NzY1Ni0zLjg3NXptMCAwXCJcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjZmY0YzNiXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aFxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZD1cIm00OTEuMjkyOTY5IDE0Ny4zMTY0MDYtMzguNjM2NzE5LTEwLjM1MTU2MmMtNS4zMzU5MzgtMS40Mjk2ODgtMTAuODIwMzEyIDEuNzM0Mzc1LTEyLjI1IDcuMDcwMzEyLTEuNDI5Njg4IDUuMzM1OTM4IDEuNzM4MjgxIDEwLjgxNjQwNiA3LjA3NDIxOSAxMi4yNDYwOTRsMzguNjQwNjI1IDEwLjM1MTU2MmM1LjM2NzE4NyAxLjQ0MTQwNyAxMC44MjQyMTgtMS43NzM0MzcgMTIuMjQ2MDk0LTcuMDcwMzEyIDEuNDI5Njg3LTUuMzM1OTM4LTEuNzM4MjgyLTEwLjgyMDMxMi03LjA3NDIxOS0xMi4yNDYwOTR6bTAgMFwiXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGhcXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGQ9XCJtMzk0LjE5OTIxOSA3LjQxNDA2Mi0xMC4zNjMyODEgMzguNjQwNjI2Yy0xLjQyOTY4OCA1LjMzNTkzNyAxLjczNDM3NCAxMC44MTY0MDYgNy4wNzAzMTIgMTIuMjUgNS4zMzIwMzEgMS40MjU3ODEgMTAuODE2NDA2LTEuNzMwNDY5IDEyLjI1LTcuMDcwMzEzbDEwLjM1OTM3NS0zOC42NDA2MjVjMS40Mjk2ODctNS4zMzU5MzgtMS43MzQzNzUtMTAuODIwMzEyLTcuMDcwMzEzLTEyLjI1LTUuMzMyMDMxLTEuNDI5Njg4LTEwLjgxNjQwNiAxLjczNDM3NS0xMi4yNDYwOTMgNy4wNzAzMTJ6bTAgMFwiXFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz4nO1xyXG5leHBvcnQgY29uc3Qgc3ZncGF5bWVudCA9ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJMYXllcl8xXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHdpZHRoPVwiNTEycHhcIiBoZWlnaHQ9XCI1MTJweFwiPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGc+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQ5OC40MDksMTc1LjcwNkwzMzYuMjgzLDEzLjU4MmMtOC43NTItOC43NTEtMjAuNDIzLTEzLjU3MS0zMi44NjUtMTMuNTcxYy0xMi40NDEsMC0yNC4xMTMsNC44MTgtMzIuODY1LDEzLjU2OSAgICAgTDEzLjU3MSwyNzAuNTYzQzQuODIsMjc5LjMxNSwwLDI5MC45ODUsMCwzMDMuNDI3YzAsMTIuNDQyLDQuODIsMjQuMTE0LDEzLjU3MSwzMi44NjRsMTkuOTkyLDE5Ljk5MiAgICAgYzAuMDAyLDAuMDAxLDAuMDAzLDAuMDAzLDAuMDA1LDAuMDA1YzAuMDAyLDAuMDAyLDAuMDA0LDAuMDA0LDAuMDA2LDAuMDA2bDEzNC4zNiwxMzQuMzZIMTQ5LjMzICAgICBjLTUuODksMC0xMC42NjYsNC43NzUtMTAuNjY2LDEwLjY2NmMwLDUuODksNC43NzYsMTAuNjY2LDEwLjY2NiwxMC42NjZoNTkuMTg5YzAuMDE0LDAsMC4wMjcsMC4wMDEsMC4wNDEsMC4wMDEgICAgIHMwLjAyNy0wLjAwMSwwLjA0MS0wLjAwMWwxNTQuMDUzLDAuMDAyYzUuODksMCwxMC42NjYtNC43NzYsMTAuNjY2LTEwLjY2NmMwLTUuODkxLTQuNzc2LTEwLjY2Ni0xMC42NjYtMTAuNjY2bC0xMTMuNDY0LTAuMDAyICAgICBMNDk4LjQxLDI0MS40MzRDNTE2LjUzLDIyMy4zMTIsNTE2LjUzLDE5My44MjYsNDk4LjQwOSwxNzUuNzA2eiBNNDgzLjMyNSwyMjYuMzVMMjI2LjM0MSw0ODMuMzM0ICAgICBjLTQuNzEzLDQuNzEyLTExLjAxMyw3LjMxLTE3Ljc0Miw3LjMyaC0wLjA4MWMtNi43MjctMC4wMTEtMTMuMDI1LTIuNjA4LTE3LjczNi03LjMyTDU2LjE5NSwzNDguNzQ2TDMwMi45OSwxMDEuOTQ5ICAgICBjNC4xNjUtNC4xNjUsNC4xNjUtMTAuOTE5LDAtMTUuMDg0Yy00LjE2Ni00LjE2NS0xMC45MTgtNC4xNjUtMTUuMDg1LDAuMDAxTDQxLjExLDMzMy42NjNsLTEyLjQ1Ni0xMi40NTYgICAgIGMtNC43MjEtNC43MjEtNy4zMjEtMTEuMDM1LTcuMzIxLTE3Ljc3OWMwLTYuNzQ0LDIuNi0xMy4wNTksNy4zMjItMTcuNzgxTDI4NS42MzcsMjguNjY1YzQuNzIyLTQuNzIxLDExLjAzNy03LjMyMSwxNy43ODEtNy4zMjEgICAgIGM2Ljc0NCwwLDEzLjA1OSwyLjYsMTcuNzgxLDcuMzIybDU3LjcwMyw1Ny43MDJsLTI0Ni43OTgsMjQ2LjhjLTQuMTY1LDQuMTY0LTQuMTY1LDEwLjkxOCwwLDE1LjA4NSAgICAgYzIuMDgzLDIuMDgyLDQuODEzLDMuMTIzLDcuNTQyLDMuMTIzYzIuNzI5LDAsNS40NTktMS4wNDIsNy41NDItMy4xMjRsMjQ2Ljc5OC0yNDYuNzk5bDg5LjMzOSw4OS4zMzYgICAgIEM0OTMuMTI4LDIwMC41OTMsNDkzLjEyNywyMTYuNTQ2LDQ4My4zMjUsMjI2LjM1elwiIGZpbGw9XCIjZmY0YzNiXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTI2Mi44MDEsMzA4LjA2NGMtNC4xNjUtNC4xNjUtMTAuOTE3LTQuMTY0LTE1LjA4NSwwbC04My45MzQsODMuOTMzYy00LjE2NSw0LjE2NS00LjE2NSwxMC45MTgsMCwxNS4wODUgICAgIGMyLjA4MywyLjA4Myw0LjgxMywzLjEyNCw3LjU0MiwzLjEyNGMyLjcyOSwwLDUuNDU5LTEuMDQyLDcuNTQyLTMuMTI0bDgzLjkzNC04My45MzMgICAgIEMyNjYuOTY2LDMxOC45ODIsMjY2Ljk2NiwzMTIuMjI5LDI2Mi44MDEsMzA4LjA2NHpcIiBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMjguMzc1LDM4Ny43NDFsLTM0LjQyNSwzNC40MjVjLTQuMTY1LDQuMTY1LTQuMTY1LDEwLjkxOSwwLDE1LjA4NWMyLjA4MywyLjA4Miw0LjgxMywzLjEyNCw3LjU0MiwzLjEyNCAgICAgYzIuNzMxLDAsNS40NTktMS4wNDIsNy41NDItMy4xMjRsMzQuNDI1LTM0LjQyNWM0LjE2NS00LjE2NSw0LjE2NS0xMC45MTksMC0xNS4wODUgICAgIEMyMzkuMjk0LDM4My41NzUsMjMyLjU0MywzODMuNTc1LDIyOC4zNzUsMzg3Ljc0MXpcIiBmaWxsPVwiI2ZmNGMzYlwiLz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggZD1cIk0yNjAuMDU0LDM1Ni4wNjVsLTQuNTI1LDQuNTI0Yy00LjE2Niw0LjE2NS00LjE2NiwxMC45MTgtMC4wMDEsMTUuMDg1YzIuMDgyLDIuMDgzLDQuODEzLDMuMTI1LDcuNTQyLDMuMTI1ICAgICBjMi43MjksMCw1LjQ1OS0xLjA0Miw3LjU0MS0zLjEyNWw0LjUyNS00LjUyNGM0LjE2Ni00LjE2NSw0LjE2Ni0xMC45MTgsMC4wMDEtMTUuMDg0ICAgICBDMjcwLjk3NCwzNTEuOTAxLDI2NC4yMTksMzUxLjksMjYwLjA1NCwzNTYuMDY1elwiIGZpbGw9XCIjZmY0YzNiXCIvPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTQwNy4wNzMsMTYzLjc5M2MtMi0yLTQuNzEzLTMuMTI0LTcuNTQyLTMuMTI0Yy0yLjgyOSwwLTUuNTQxLDEuMTI0LTcuNTQyLDMuMTI0bC00NS4yNTUsNDUuMjU0ICAgICBjLTIsMi4wMDEtMy4xMjQsNC43MTMtMy4xMjQsNy41NDJzMS4xMjQsNS41NDIsMy4xMjQsNy41NDJsMzAuMTcsMzAuMTY3YzIuMDgzLDIuMDgzLDQuODEzLDMuMTI0LDcuNTQyLDMuMTI0ICAgICBjMi43MzEsMCw1LjQ1OS0xLjA0Miw3LjU0Mi0zLjEyNGw0NS4yNTMtNDUuMjUyYzQuMTY1LTQuMTY1LDQuMTY1LTEwLjkxOSwwLTE1LjA4NEw0MDcuMDczLDE2My43OTN6IE0zODQuNDQ1LDIzMS42NzMgICAgIGwtMTUuMDg1LTE1LjA4NGwzMC4xNy0zMC4xNjlsMTUuMDg0LDE1LjA4NUwzODQuNDQ1LDIzMS42NzN6XCIgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMzIwLjMzOSw4MC4xODZjMi43MzEsMCw1LjQ2MS0xLjA0Miw3LjU0My0zLjEyNmw0LjUyNS00LjUyN2M0LjE2NC00LjE2Niw0LjE2My0xMC45Mi0wLjAwMy0xNS4wODQgICAgIGMtNC4xNjUtNC4xNjQtMTAuOTItNC4xNjMtMTUuMDg0LDAuMDAzbC00LjUyNSw0LjUyN2MtNC4xNjQsNC4xNjYtNC4xNjMsMTAuOTIsMC4wMDMsMTUuMDg0ICAgICBDMzE0Ljg4MSw3OS4xNDYsMzE3LjYwOSw4MC4xODYsMzIwLjMzOSw4MC4xODZ6XCIgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTA3LjIxNSwzNTguMDU3bC00LjUyNSw0LjUyNWMtNC4xNjUsNC4xNjQtNC4xNjUsMTAuOTE4LDAsMTUuMDg1YzIuMDgzLDIuMDgyLDQuODEzLDMuMTIzLDcuNTQyLDMuMTIzICAgICBzNS40NTktMS4wNDEsNy41NDItMy4xMjNsNC41MjUtNC41MjVjNC4xNjUtNC4xNjYsNC4xNjUtMTAuOTIsMC0xNS4wODVDMTE4LjEzMywzNTMuODkxLDExMS4zODEsMzUzLjg5MSwxMDcuMjE1LDM1OC4wNTd6XCIgZmlsbD1cIiNmZjRjM2JcIi8+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cXG4nICtcclxuICAgICcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9nPlxcbicgK1xyXG4gICAgJyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2c+XFxuJyArXHJcbiAgICAnICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zdmc+JzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1oZWxtZXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWVzc2VuZ2VyLWN1c3RvbWVyLWNoYXRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC10b2FzdGlmeVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdHN0cmFwXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=