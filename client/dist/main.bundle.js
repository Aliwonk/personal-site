/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/components/main/content.jsx":
/*!****************************************!*\
  !*** ./js/components/main/content.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TechList\": () => (/* binding */ TechList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _img_icons_expressjs_logo_icon_169186_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../img/icons/expressjs_logo_icon_169186.png */ \"./img/icons/expressjs_logo_icon_169186.png\");\n\n\nvar techList1 = [{\n  icon: 'https://img.icons8.com/ios/64/000000/html-5--v1.png',\n  text: 'HTML'\n}, {\n  icon: 'https://img.icons8.com/ios/64/000000/css3.png',\n  text: 'CSS'\n}, {\n  icon: 'https://img.icons8.com/ios/64/000000/javascript--v1.png',\n  text: 'JAVASCRIPT'\n}, {\n  icon: 'https://img.icons8.com/ios-filled/64/000000/sass.png',\n  text: 'SASS'\n} // {\n//     icon : 'https://img.icons8.com/windows/64/000000/vuejs.png',\n//     text : 'VUE'\n// }\n];\nvar techList2 = [{\n  icon: 'https://img.icons8.com/windows/64/000000/nodejs.png',\n  text: 'NODE JS'\n}, {\n  icon: 'https://img.icons8.com/ios/64/000000/typescript.png',\n  text: 'TYPESCRIPT'\n}, {\n  icon: _img_icons_expressjs_logo_icon_169186_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  text: 'EXPRESS'\n}, {\n  icon: 'https://img.icons8.com/ios/64/000000/mysql-logo.png',\n  text: 'MYSQL'\n}, {\n  icon: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/64/000000/external-mongodb-a-cross-platform-document-oriented-database-program-logo-shadow-tal-revivo.png',\n  text: 'MONGODB'\n}];\nfunction TechList() {\n  var list1 = techList1.map(function (todo, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"list-tech\",\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      src: todo.icon,\n      alt: \"icon\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, todo.text)));\n  });\n  var list2 = techList2.map(function (todo, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      className: \"list-tech\",\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n      src: todo.icon,\n      alt: \"icon\"\n    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, todo.text)));\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content__tech\",\n    id: \"stack\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"\\u041C\\u043E\\u0439 \\u0441\\u0442\\u0435\\u043A\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content__tech__el\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"caption\"\n  }, \"FRONT-END\"), list1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"content__tech__el\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"caption\"\n  }, \"BACK-END\"), list2));\n}\n\n//# sourceURL=webpack:///./js/components/main/content.jsx?");

/***/ }),

/***/ "./js/components/main/footer.jsx":
/*!***************************************!*\
  !*** ./js/components/main/footer.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Contacts\": () => (/* binding */ Contacts)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nfunction Contacts() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"contacts\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"email\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u041F\\u043E\\u0447\\u0442\\u0430: adiysh0324@gmail.com\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"telegram\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u0422\\u0415\\u041B\\u0415\\u0413\\u0420\\u0410\\u041C: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://t.me/ALIWONKI\"\n  }, \"@ALIWONKI\"))));\n}\n;\n\n//# sourceURL=webpack:///./js/components/main/footer.jsx?");

/***/ }),

/***/ "./js/components/main/forms.jsx":
/*!**************************************!*\
  !*** ./js/components/main/forms.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CallBackForm\": () => (/* binding */ CallBackForm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var _modules_ajax_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../modules/ajax.jsx */ \"./js/modules/ajax.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, \"prototype\", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } else if (call !== void 0) { throw new TypeError(\"Derived constructors may only return object or undefined\"); } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n // FORM CALLBACK\n\nvar CallBackForm = /*#__PURE__*/function (_React$Component) {\n  _inherits(CallBackForm, _React$Component);\n\n  var _super = _createSuper(CallBackForm);\n\n  function CallBackForm(props) {\n    var _this;\n\n    _classCallCheck(this, CallBackForm);\n\n    _this = _super.call(this, props);\n\n    _defineProperty(_assertThisInitialized(_this), \"answerCallback\", '');\n\n    _this.state = {\n      clientName: '',\n      clientEmail: '',\n      clientMessage: ''\n    }; // value inputs\n\n    _this.valueName = _this.valueName.bind(_assertThisInitialized(_this));\n    _this.valueEmail = _this.valueEmail.bind(_assertThisInitialized(_this));\n    _this.valueMessage = _this.valueMessage.bind(_assertThisInitialized(_this)); // send ajax data\n\n    _this.sendData = _this.sendData.bind(_assertThisInitialized(_this)); // valid inputs\n\n    _this.validName = false;\n    _this.validEmail = false;\n    return _this;\n  }\n\n  _createClass(CallBackForm, [{\n    key: \"closeCallBack\",\n    value: function closeCallBack() {\n      document.querySelector('.callBack').classList.remove('callBackClick');\n    }\n  }, {\n    key: \"valueName\",\n    value: // value inputs\n    function valueName(e) {\n      this.setState({\n        clientName: e.target.value\n      });\n    }\n  }, {\n    key: \"valueEmail\",\n    value: function valueEmail(e) {\n      this.setState({\n        clientEmail: e.target.value\n      });\n    }\n  }, {\n    key: \"valueMessage\",\n    value: function valueMessage(e) {\n      this.setState({\n        clientMessage: e.target.value\n      });\n    }\n  }, {\n    key: \"sendData\",\n    value: // ajax send data\n    function sendData(e) {\n      // form callback\n      var form = document.forms.callBack; // modalAnswer block callback\n\n      var modal = document.querySelector('.modalCallBack'); // validate inputs\n\n      if (this.state.clientName.length > 0 && this.state.clientEmail.length > 0) {\n        form.elements.clientName.style.borderBottom = '1px solid #dfdcdc';\n        form.elements.clientEmail.style.borderBottom = '1px solid #dfdcdc'; // check valid email\n\n        var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;\n\n        if (reg.test(this.state.clientEmail)) {\n          // send client data on server\n          var client = {\n            clientName: this.state.clientName,\n            clientEmail: this.state.clientEmail,\n            clientMessage: this.state.clientMessage\n          };\n          _modules_ajax_jsx__WEBPACK_IMPORTED_MODULE_1__.sendDataXHR('/', JSON.stringify(client), {\n            name: 'Content-Type',\n            value: 'application/json'\n          }, function (err) {\n            if (err) return console.log(err); // show modal block answer\n\n            modal.classList.add('showModalCallBack'); // hide modal block answer\n\n            setTimeout(function () {\n              modal.classList.remove('showModalCallBack');\n            }, 2500);\n          });\n          this.answerCallback = \"\\u0412\\u0430\\u0448\\u0435 \\u0441\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435 \\u043F\\u043E\\u043B\\u0443\\u0447\\u0435\\u043D\\u043E. \\u0412 \\u0441\\u043A\\u043E\\u0440\\u043E\\u043C \\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u0438 \\u0432\\u0430\\u043C \\u043E\\u0442\\u0432\\u0435\\u0442\\u044F\\u0442 \";\n        } else {\n          form.elements.clientEmail.style.borderBottom = '1px solid red';\n          this.answerCallback = 'Адрес электронной почты не корректный'; // show modal block answer\n\n          modal.classList.add('showModalCallBack'); // hide modal block answer\n\n          setTimeout(function () {\n            modal.classList.remove('showModalCallBack');\n          }, 2500);\n        }\n      } else {\n        form.elements.clientName.style.borderBottom = '1px solid red';\n        form.elements.clientEmail.style.borderBottom = '1px solid red';\n        this.answerCallback = 'Заполните поля'; // show modal block answer\n\n        modal.classList.add('showModalCallBack'); // hide modal block answer\n\n        setTimeout(function () {\n          modal.classList.remove('showModalCallBack');\n        }, 2500);\n      }\n\n      this.setState({\n        clientName: ''\n      });\n      this.setState({\n        clientEmail: ''\n      });\n      this.setState({\n        clientMessage: ''\n      });\n      e.preventDefault();\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"form\", {\n        className: \"callBackForm\",\n        name: \"callBack\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        className: \"modalCallBack\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, this.answerCallback)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n        id: \"btnClose\",\n        onClick: this.closeCallBack\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n        src: \"https://img.icons8.com/ios/30/000000/delete-sign--v1.png\",\n        alt: \"\"\n      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", null, \"\\u0418\\u043C\\u044F\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"text\",\n        name: \"clientName\",\n        id: \"clientName\",\n        placeholder: \"\\u0412\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0438\\u043C\\u044F\",\n        value: this.state.clientName,\n        onChange: this.valueName\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n        htmlFor: \"\"\n      }, \"\\u0412\\u0430\\u0448 E-mail\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"email\",\n        name: \"clientEmail\",\n        id: \"clientEmail\",\n        placeholder: \"Anonim@mail.com\",\n        value: this.state.clientEmail,\n        onChange: this.valueEmail\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"label\", {\n        htmlFor: \"\"\n      }, \"\\u0421\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"textarea\", {\n        name: \"clientMess\",\n        id: \"clientMess\",\n        cols: \"30\",\n        rows: \"10\",\n        placeholder: \"\\u0421\\u043E\\u043E\\u0431\\u0449\\u0435\\u043D\\u0438\\u0435\",\n        value: this.state.clientMessage,\n        onChange: this.valueMessage\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"input\", {\n        type: \"submit\",\n        value: \"\\u041E\\u0442\\u043F\\u0440\\u0430\\u0432\\u0438\\u0442\\u044C\",\n        onClick: this.sendData\n      }));\n    }\n  }]);\n\n  return CallBackForm;\n}(react__WEBPACK_IMPORTED_MODULE_0__.Component);\n;\n\n//# sourceURL=webpack:///./js/components/main/forms.jsx?");

/***/ }),

/***/ "./js/components/main/head.jsx":
/*!*************************************!*\
  !*** ./js/components/main/head.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Menu\": () => (/* binding */ Menu),\n/* harmony export */   \"BtnBurger\": () => (/* binding */ BtnBurger)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nvar menuContent = [{\n  text: 'Главная',\n  link: '#home'\n}, {\n  text: 'Стек',\n  link: '#stack'\n}, {\n  text: 'Контакты',\n  link: '#footer'\n}];\nfunction Menu(props) {\n  var mobile = props.mobile;\n  var className;\n\n  if (mobile === true) {\n    className = 'menu';\n  } else {\n    className = 'headerMenu';\n  }\n\n  ;\n\n  function closeMenu() {\n    document.querySelector('.line1').classList.remove('tLine1');\n    document.querySelector('.line2').classList.remove('tLine2');\n    document.querySelector('.line3').classList.remove('tLine3');\n    document.querySelector('.mobileMenu').classList.remove('mobileMenuTgl');\n    document.querySelector('body').classList.remove('bodyFixed');\n  }\n\n  ;\n  var listItems = menuContent.map(function (todo, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n      key: index\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n      href: todo.link,\n      onClick: closeMenu\n    }, todo.text));\n  });\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: className\n  }, listItems);\n}\n;\nfunction BtnBurger() {\n  function btnBurger() {\n    document.querySelector('.line1').classList.toggle('tLine1');\n    document.querySelector('.line2').classList.toggle('tLine2');\n    document.querySelector('.line3').classList.toggle('tLine3');\n    document.querySelector('.mobileMenu').classList.toggle('mobileMenuTgl');\n    document.querySelector('body').classList.toggle('bodyFixed');\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"btnBurger\",\n    onClick: btnBurger\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"line1\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"line2\"\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"span\", {\n    className: \"line3\"\n  }));\n}\n\n//# sourceURL=webpack:///./js/components/main/head.jsx?");

/***/ }),

/***/ "./js/components/main/home.jsx":
/*!*************************************!*\
  !*** ./js/components/main/home.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n\nfunction Home() {\n  function showCallBack() {\n    document.querySelector('.callBack').classList.add('callBackClick');\n  }\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"home\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", {\n    id: \"home__caption\"\n  }, \"B \\\\ A\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", {\n    id: \"home__description\"\n  }, \"\\u0417\\u0434\\u0440\\u0430\\u0432\\u0441\\u0442\\u0432\\u0443\\u0439\\u0442\\u0435, \\u044F \\u0432\\u0435\\u0431-\\u0440\\u0430\\u0437\\u0440\\u0430\\u0431\\u043E\\u0442\\u0447\\u0438\\u043A. \\u0418 \\u0441\\u0435\\u0439\\u0447\\u0430\\u0441 \\u0432\\u044B \\u0437\\u0430\\u0448\\u043B\\u0438 \\u043D\\u0430 \\u043C\\u043E\\u0439 \\u043F\\u0435\\u0440\\u0441\\u043E\\u043D\\u0430\\u043B\\u044C\\u043D\\u044B\\u0439 \\u0441\\u0430\\u0439\\u0442, \\u0432 \\u043A\\u043E\\u0442\\u043E\\u0440\\u043E\\u043C \\u0432\\u044B \\u043C\\u043E\\u0436\\u0435\\u0442\\u0435 \\u0441\\u043E\\u0442\\u0440\\u0443\\u0434\\u043D\\u0438\\u0447\\u0430\\u0442\\u044C \\u0441\\u043E \\u043C\\u043D\\u043E\\u0439. \\u041A\\u0442\\u043E \\u0442\\u0430\\u043A\\u043E\\u0439 \\u0432\\u0435\\u0431-\\u0440\\u0430\\u0437\\u0440\\u0430\\u0431\\u043E\\u0442\\u0447\\u0438\\u043A \\u0438 \\u0447\\u0442\\u043E \\u043E\\u043D \\u0434\\u0435\\u043B\\u0430\\u0435\\u0442? \\u0412\\u0435\\u0431-\\u0440\\u0430\\u0437\\u0440\\u0430\\u0431\\u043E\\u0442\\u0447\\u0438\\u043A-\\u044D\\u0442\\u043E \\u0447\\u0435\\u043B\\u043E\\u0432\\u0435\\u043A, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0439 \\u043C\\u043E\\u0436\\u0435\\u0442 \\u0441\\u043E\\u0437\\u0434\\u0430\\u0442\\u044C \\u0432\\u0435\\u0431-\\u0438\\u043D\\u0441\\u0442\\u0440\\u0443\\u043C\\u0435\\u043D\\u0442 \\u0434\\u043B\\u044F \\u0443\\u043F\\u0440\\u0430\\u0432\\u043B\\u0435\\u043D\\u0438\\u0435 \\u043A\\u043E\\u043D\\u0442\\u0435\\u043D\\u0442\\u043E\\u043C, \\u0431\\u0440\\u0435\\u043D\\u0434\\u043E\\u043C \\u0438 \\u0442.\\u0434.\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"home__contacts\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u041F\\u043E\\u0447\\u0442\\u0430:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"AIDYSH0324@gmail.com\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"p\", null, \"\\u0422\\u0435\\u043B\\u0435\\u0433\\u0440\\u0430\\u043C:\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"https://t.me/ALIWONKI\"\n  }, \"@ALIWONKI\"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    id: \"home__btnCallBack\",\n    onClick: showCallBack\n  }, \"\\u0421\\u0412\\u042F\\u0417\\u0410\\u0422\\u042C\\u0421\\u042F\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"a\", {\n    href: \"#content\",\n    id: \"home__btnDown\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"button\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n    src: \"https://img.icons8.com/windows/64/000000/expand-arrow--v1.png\",\n    alt: \"arrowDown\"\n  }))));\n}\n;\n\n//# sourceURL=webpack:///./js/components/main/home.jsx?");

/***/ }),

/***/ "./js/index.jsx":
/*!**********************!*\
  !*** ./js/index.jsx ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"../node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"../node_modules/react-dom/index.js\");\n/* harmony import */ var _components_main_content_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/content.jsx */ \"./js/components/main/content.jsx\");\n/* harmony import */ var _components_main_footer_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/footer.jsx */ \"./js/components/main/footer.jsx\");\n/* harmony import */ var _components_main_forms_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/forms.jsx */ \"./js/components/main/forms.jsx\");\n/* harmony import */ var _components_main_head_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/head.jsx */ \"./js/components/main/head.jsx\");\n/* harmony import */ var _components_main_home_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components//main/home.jsx */ \"./js/components/main/home.jsx\");\n/* harmony import */ var _img_preloader_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/preloader.gif */ \"./img/preloader.gif\");\n/* harmony import */ var _sass_style_sass__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../sass/style.sass */ \"./sass/style.sass\");\n/* harmony import */ var _sass_admin_sass__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../sass/admin.sass */ \"./sass/admin.sass\");\n\n\n\n\n\n\n\n\n\n\n\nwindow.onload = function () {\n  var preloader = document.querySelector('.preloader');\n  setTimeout(function () {\n    preloader.classList.add('preloaderHide');\n  }, 1000);\n}; // PRELOADER\n\n\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n  className: \"preloader__img\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"img\", {\n  src: _img_preloader_gif__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n  alt: \"preloader\"\n})), document.querySelector('.preloader')); // END PRELOADER\n// HEADER\n\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n  className: \"header\"\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_main_head_jsx__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n  mobile: false\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_main_head_jsx__WEBPACK_IMPORTED_MODULE_5__.BtnBurger, null)), document.getElementById('head')); // END HEADER\n// CALLBACK\n\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_main_forms_jsx__WEBPACK_IMPORTED_MODULE_4__.CallBackForm, null), document.querySelector('.callBack')); // END CALLBACK\n// MOBILEMENU\n\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_main_head_jsx__WEBPACK_IMPORTED_MODULE_5__.Menu, {\n  mobile: true\n}), document.querySelector('.mobileMenu')); // END MOBILEMENU\n// HOME\n\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_main_home_jsx__WEBPACK_IMPORTED_MODULE_6__.Home, null), document.getElementById('home')); // END HOME\n// CONTENT\n\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_main_content_jsx__WEBPACK_IMPORTED_MODULE_2__.TechList, null), document.getElementById('content')); // END CONTENT\n// FOOTER\n\n(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.render)( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_components_main_footer_jsx__WEBPACK_IMPORTED_MODULE_3__.Contacts, null), document.getElementById('footer')); // END FOOTER\n\n//# sourceURL=webpack:///./js/index.jsx?");

/***/ }),

/***/ "./js/modules/ajax.jsx":
/*!*****************************!*\
  !*** ./js/modules/ajax.jsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sendDataXHR\": () => (/* binding */ sendDataXHR),\n/* harmony export */   \"getDataFetch\": () => (/* binding */ getDataFetch),\n/* harmony export */   \"sendDataFetch\": () => (/* binding */ sendDataFetch),\n/* harmony export */   \"deleteDataFetch\": () => (/* binding */ deleteDataFetch)\n/* harmony export */ });\n// XHR\nfunction sendDataXHR(URL, data) {\n  var setReqHeader = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {\n    name: 'Content-Type',\n    value: 'application/json'\n  };\n  var callback = arguments.length > 3 ? arguments[3] : undefined;\n  var xhr = new XMLHttpRequest();\n\n  xhr.upload.onload = function () {\n    return callback(null);\n  };\n\n  xhr.upload.onerror = function () {\n    return callback(new Error('XHR post fail'));\n  };\n\n  xhr.open('POST', URL, true);\n  xhr.setRequestHeader(setReqHeader.name, setReqHeader.value);\n  xhr.send(data);\n}\n; // END XHR\n// FETCH\n\nfunction getDataFetch(URL) {\n  return fetch(URL);\n}\n;\nfunction sendDataFetch(URL, headers, data) {\n  fetch(URL, {\n    method: 'POST',\n    headers: headers,\n    body: data\n  });\n}\n;\nfunction deleteDataFetch(URL, headers) {\n  return fetch(URL, {\n    method: 'DELETE',\n    headers: headers\n  });\n}\n; // END FETCH\n\n//# sourceURL=webpack:///./js/modules/ajax.jsx?");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./sass/admin.sass":
/*!********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./sass/admin.sass ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@200&family=Yanone+Kaffeesatz:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".statisticBlock {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: space-evenly;\\n  width: 100%;\\n  height: auto;\\n}\\n.statisticBlock .statistic {\\n  width: 250px;\\n  height: 200px;\\n  background-color: red;\\n  border-radius: 10px;\\n  margin-bottom: 30px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./sass/admin.sass?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./sass/style.sass":
/*!********************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./sass/style.sass ***!
  \********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"../node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Raleway:wght@200&family=Yanone+Kaffeesatz:wght@300&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html {\\n  scroll-behavior: smooth;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n}\\n\\nbody {\\n  font-family: \\\"Yanone Kaffeesatz\\\", sans-serif;\\n  overflow-x: hidden;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: black;\\n}\\n\\n.bodyFixed {\\n  overflow: hidden;\\n  text-decoration: none;\\n  color: black;\\n}\\n\\n.preloader {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100vw;\\n  height: 100vh;\\n  background-color: white;\\n  position: fixed;\\n  z-index: 10000;\\n}\\n.preloader .preloader__img {\\n  width: 50px;\\n  height: 50px;\\n}\\n.preloader .preloader__img img {\\n  max-width: 100%;\\n}\\n\\n.preloaderHide {\\n  display: none;\\n}\\n\\n.mobileMenu {\\n  display: none;\\n}\\n\\n#head .header {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  width: 100vw;\\n  height: 60px;\\n  position: fixed;\\n  z-index: 1002;\\n  background-color: white;\\n}\\n#head .header .headerMenu {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  width: clamp(425px, 50%, 100vw);\\n  height: 100%;\\n  margin: 0 auto;\\n}\\n#head .header .headerMenu a {\\n  font-size: clamp(1.1rem, 1vw, 1.5rem);\\n  font-weight: 600;\\n}\\n#head .header .headerMenu a:hover {\\n  text-decoration: underline;\\n}\\n\\n.callBack {\\n  width: 100vw;\\n  height: 100vh;\\n  position: fixed;\\n  z-index: 1003;\\n  background-color: white;\\n  transform: translateX(100vw);\\n  opacity: 0;\\n  transition: 1s;\\n}\\n.callBack .callBackForm {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 100%;\\n  height: 100%;\\n  transition: 1s;\\n  user-select: none;\\n}\\n.callBack .callBackForm .modalCallBack {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  width: clamp(200px, 75vw, 400px);\\n  height: 50px;\\n  background-color: black;\\n  color: white;\\n  border-radius: 5px;\\n  opacity: 0;\\n  transition: 1s;\\n  transform: translateY(-170px);\\n}\\n.callBack .callBackForm .modalCallBack p {\\n  width: 80%;\\n  font-size: 1.1rem;\\n  text-align: center;\\n}\\n.callBack .callBackForm .showModalCallBack {\\n  transform: translateY(50px);\\n  opacity: 1;\\n}\\n.callBack .callBackForm #btnClose {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  margin-bottom: 70px;\\n  width: 30px;\\n  height: 30px;\\n  background-color: transparent;\\n  border: none;\\n  cursor: pointer;\\n  transition: 0.3s;\\n}\\n.callBack .callBackForm #btnClose:hover {\\n  transform: rotate(90deg);\\n}\\n.callBack .callBackForm label {\\n  margin-top: 20px;\\n  margin-bottom: 10px;\\n  font-weight: 600;\\n  text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0, 0, 0, 0.15);\\n}\\n.callBack .callBackForm input {\\n  width: clamp(250px, 20vw, 400px);\\n  height: 30px;\\n  padding-left: 10px;\\n  border: none;\\n  border-bottom: 1px solid #dfdcdc;\\n  outline: none;\\n}\\n.callBack .callBackForm input[type=submit] {\\n  width: 200px;\\n  height: 40px;\\n  margin-top: 20px;\\n  cursor: pointer;\\n  background-color: black;\\n  color: white;\\n  font-family: \\\"Yanone Kaffeesatz\\\", sans-serif;\\n  font-size: 1.2rem;\\n  border-radius: 5px;\\n}\\n.callBack .callBackForm input::-webkit-input-placeholder {\\n  font-size: 1rem;\\n  font-family: \\\"Yanone Kaffeesatz\\\", sans-serif;\\n}\\n.callBack .callBackForm textarea {\\n  width: clamp(310px, 55vw, 600px);\\n  padding-left: 10px;\\n  padding-top: 10px;\\n  outline: none;\\n  border: 1px solid #dfdcdc;\\n  border-radius: 5px;\\n  font-family: \\\"Yanone Kaffeesatz\\\", sans-serif;\\n  font-size: 20px;\\n}\\n\\n.callBackClick {\\n  transform: translateX(0vw);\\n  opacity: 1;\\n}\\n\\n#home {\\n  width: 100vw;\\n  height: 100vh;\\n}\\n#home .home {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  flex-direction: column;\\n  width: 100%;\\n  height: 100%;\\n  padding-top: 40px;\\n}\\n#home .home #home__caption {\\n  font-size: clamp(2rem, 4vw, 3rem);\\n  text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0, 0, 0, 0.15);\\n}\\n#home .home #home__description {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: clamp(265px, 75%, 950px);\\n  margin-top: 50px;\\n  text-align: center;\\n  line-height: clamp(35px, 2vw, 45px);\\n  font-size: clamp(1.3rem, 1.9vw, 2rem);\\n  text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0, 0, 0, 0.15);\\n}\\n#home .home .home__contacts {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  justify-content: space-around;\\n  width: clamp(300px, 80%, 88%);\\n  height: 80px;\\n  margin-top: 50px;\\n  text-shadow: none;\\n}\\n#home .home .home__contacts div {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  justify-content: space-evenly;\\n  align-items: flex-start;\\n  height: 100%;\\n  text-align: start;\\n  font-size: clamp(1.1rem, 1.4vw, 1.8rem);\\n  user-select: text;\\n}\\n#home .home .home__contacts div a {\\n  text-decoration: underline;\\n}\\n#home .home #home__btnCallBack {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100px;\\n  height: 50px;\\n  margin-top: 30px;\\n  font-size: 1.3rem;\\n  text-decoration: underline;\\n  cursor: pointer;\\n}\\n#home .home #home__btnDown {\\n  margin-top: clamp(30px, 0%, 60px);\\n}\\n#home .home #home__btnDown button {\\n  width: 40px;\\n  height: 40px;\\n  border: none;\\n  background-color: transparent;\\n  animation: animBtnDown 1.5s infinite;\\n  cursor: pointer;\\n}\\n#home .home #home__btnDown button img {\\n  max-width: 100%;\\n}\\n@keyframes animBtnDown {\\n  0% {\\n    transform: translateY(0px);\\n  }\\n  50% {\\n    transform: translateY(10px);\\n  }\\n  100% {\\n    transform: translateY(0px);\\n  }\\n}\\n\\n#content {\\n  margin-bottom: 50px;\\n}\\n#content .content__tech {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-around;\\n  width: 85vw;\\n  height: auto;\\n  margin: auto;\\n  margin-top: 50px;\\n  user-select: none;\\n  text-shadow: 2px 2px 0px #FFFFFF, 5px 4px 0px rgba(0, 0, 0, 0.15);\\n}\\n#content .content__tech h1 {\\n  position: absolute;\\n  margin-top: -20px;\\n}\\n#content .content__tech .content__tech__el {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 40%;\\n  height: auto;\\n  margin-top: 30px;\\n  border-radius: 15px;\\n  background-color: white;\\n}\\n#content .content__tech .content__tech__el .caption {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n  font-size: 1.5rem;\\n}\\n#content .content__tech .content__tech__el .list-tech {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 60%;\\n  height: auto;\\n  margin-top: 35px;\\n}\\n#content .content__tech .content__tech__el .list-tech div {\\n  display: flex;\\n  flex-direction: row;\\n  align-items: center;\\n  margin-top: 25px;\\n}\\n#content .content__tech .content__tech__el .list-tech div img {\\n  max-width: 100%;\\n}\\n#content .content__tech .content__tech__el .list-tech div p {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100px;\\n  height: 100%;\\n  margin-left: 50px;\\n}\\n\\n#footer {\\n  width: 100vw;\\n  height: 75px;\\n  background-color: black;\\n  color: white;\\n}\\n#footer .contacts {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: space-between;\\n  align-items: center;\\n  width: 50%;\\n  height: 100%;\\n  margin: 0 auto;\\n  font-size: clamp(0.9rem, 2vw, 1rem);\\n}\\n#footer .contacts a {\\n  color: white;\\n}\\n\\n@media screen and (max-width: 769px) {\\n  .content__tech {\\n    width: 100vw;\\n  }\\n}\\n@media screen and (max-width: 426px) {\\n  #head .header {\\n    justify-content: flex-end;\\n  }\\n  #head .header .headerMenu {\\n    display: none;\\n  }\\n  #head .header .btnBurger {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    width: 40px;\\n    height: 33px;\\n    margin-right: 20px;\\n    user-select: none;\\n    z-index: 1001;\\n  }\\n  #head .header .btnBurger span {\\n    width: 100%;\\n    height: 5px;\\n    margin-top: 7px;\\n    background-color: black;\\n    transition: 0.5s;\\n  }\\n  #head .header .btnBurger .tLine1 {\\n    margin-top: 17px;\\n    transform: rotate(45deg);\\n  }\\n  #head .header .btnBurger .tLine2 {\\n    margin-top: -3px;\\n    transform: rotate(-45deg);\\n  }\\n  #head .header .btnBurger .tLine3 {\\n    transform: translateY(-5px);\\n    opacity: 0;\\n  }\\n\\n  .mobileMenu {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: center;\\n    width: 100vw;\\n    height: 100vh;\\n    margin-left: -100vw;\\n    position: fixed;\\n    z-index: 1000;\\n    background-color: white;\\n    transition: 0.9s;\\n    opacity: 0;\\n  }\\n  .mobileMenu .menu {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-evenly;\\n    width: 100%;\\n    height: auto;\\n  }\\n  .mobileMenu .menu div {\\n    margin-top: 50px;\\n  }\\n  .mobileMenu .menu div a {\\n    font-size: 1.2rem;\\n  }\\n\\n  .mobileMenuTgl {\\n    margin-left: 0vw;\\n    opacity: 1;\\n  }\\n\\n  #content .content__tech {\\n    flex-direction: column;\\n    margin-top: 60px;\\n  }\\n  #content .content__tech h1 {\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    position: relative;\\n  }\\n  #content .content__tech .content__tech__el {\\n    align-items: center;\\n    width: 100%;\\n    margin-top: 60px;\\n  }\\n  #content .content__tech .content__tech__el .list-tech {\\n    margin-top: 20px;\\n  }\\n  #content .content__tech .content__tech__el .list-tech div p {\\n    margin-left: 30px;\\n  }\\n\\n  #footer .contacts {\\n    width: 100%;\\n    justify-content: space-evenly;\\n  }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./sass/style.sass?../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./img/icons/expressjs_logo_icon_169186.png":
/*!**************************************************!*\
  !*** ./img/icons/expressjs_logo_icon_169186.png ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"a02b1ca369f2409924b6fd4b1be43660.png\");\n\n//# sourceURL=webpack:///./img/icons/expressjs_logo_icon_169186.png?");

/***/ }),

/***/ "./img/preloader.gif":
/*!***************************!*\
  !*** ./img/preloader.gif ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"02f1f11d798275ac42bf36a22e037335.gif\");\n\n//# sourceURL=webpack:///./img/preloader.gif?");

/***/ }),

/***/ "./sass/admin.sass":
/*!*************************!*\
  !*** ./sass/admin.sass ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_admin_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./admin.sass */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./sass/admin.sass\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_admin_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_admin_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_admin_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_admin_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./sass/admin.sass?");

/***/ }),

/***/ "./sass/style.sass":
/*!*************************!*\
  !*** ./sass/style.sass ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"../node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"../node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"../node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"../node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.sass */ \"../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./sass/style.sass\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack:///./sass/style.sass?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_noSo-78b887"], () => (__webpack_require__("./js/index.jsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;