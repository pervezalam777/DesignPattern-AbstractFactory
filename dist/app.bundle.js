/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/burgers/burger.ts":
/*!*******************************!*\
  !*** ./src/burgers/burger.ts ***!
  \*******************************/
/*! exports provided: BURGER_TYPE, Burger */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BURGER_TYPE", function() { return BURGER_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Burger", function() { return Burger; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var BURGER_TYPE = {
  BARBECUE: "Barbecue Burgers",
  CARIBBEAN: "Caribbean Burger",
  CHORIZO: "Chorizo Burger",
  AVOCADO: "Avocado Beef Burger",
  SPANISH: "Spanish Burger",
  ALO_TIKKI: "Alo Tikki Burger",
  PANEER: "Paneer Burger",
  SPICY_CHIKEN: "Spicy Chiken Burger",
  FILET_O_FISH: "filet-O-Fish Burger"
};
var Burger =
/*#__PURE__*/
function () {
  //Brown, Wheat & Multigrain
  function Burger() {
    var breadType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Burger";
    var cost = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

    _classCallCheck(this, Burger);

    _defineProperty(this, "ingredients", []);

    _defineProperty(this, "breadType", void 0);

    _defineProperty(this, "cost", void 0);

    this.breadType = breadType;
    this.cost = cost;
  }

  _createClass(Burger, [{
    key: "addIngredient",
    value: function addIngredient(item) {
      this.ingredients.push(item);
    }
  }, {
    key: "getDescription",
    value: function getDescription() {
      var ingradient = this.ingredients.reduce(function (str, current) {
        return str + " " + current.getName();
      }, "");
      return "".concat(this.breadType, " with ").concat(ingradient);
    }
  }]);

  return Burger;
}();

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _india_indian_abstract_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./india/indian-abstract-factory */ "./src/india/indian-abstract-factory.ts");
/* harmony import */ var _uk_uk_abstract_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uk/uk-abstract-factory */ "./src/uk/uk-abstract-factory.ts");
/* harmony import */ var _burgers_burger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./burgers/burger */ "./src/burgers/burger.ts");
/* harmony import */ var _ingredient_ingredient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ingredient/ingredient */ "./src/ingredient/ingredient.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var Bootstrap =
/*#__PURE__*/
function () {
  function Bootstrap() {
    _classCallCheck(this, Bootstrap);
  }

  _createClass(Bootstrap, [{
    key: "initialize",
    value: function initialize() {
      var factory = this.getCountryFactory("uk");
      this.getBurgerInUK(factory);
      factory = this.getCountryFactory("india");
      this.getBurgerInIndia(factory);
    }
  }, {
    key: "getBurgerInUK",
    value: function getBurgerInUK(factory) {
      var burgerFactory = factory.getBurgerFactory();
      var ingredientFactory = factory.getIngredientFactory();
      var burger = burgerFactory.create(_burgers_burger__WEBPACK_IMPORTED_MODULE_2__["BURGER_TYPE"].AVOCADO);
      this.addIngredient(ingredientFactory, burger);
      console.log("My order burger order in UK: ");
      console.log(burger.getDescription());
    }
  }, {
    key: "getBurgerInIndia",
    value: function getBurgerInIndia(factory) {
      var burgerFactory = factory.getBurgerFactory();
      var ingredientFactory = factory.getIngredientFactory();
      var burger = burgerFactory.create(_burgers_burger__WEBPACK_IMPORTED_MODULE_2__["BURGER_TYPE"].SPICY_CHIKEN);
      this.addIngredient(ingredientFactory, burger);
      console.log("My order burger order in India: ");
      console.log(burger.getDescription());
    }
  }, {
    key: "addIngredient",
    value: function addIngredient(ingredientFactory, burger) {
      var salt = ingredientFactory.create(_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_3__["INGREDIENT_NAMES"].SALT);
      var pepper = ingredientFactory.create(_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_3__["INGREDIENT_NAMES"].PEPPER);
      var tomato = ingredientFactory.create(_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_3__["INGREDIENT_NAMES"].TOMATO);
      var tomatoSauce = ingredientFactory.create(_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_3__["INGREDIENT_NAMES"].TOMATO_SAUCE);
      burger.addIngredient(salt);
      burger.addIngredient(pepper);
      burger.addIngredient(tomato);
      burger.addIngredient(tomatoSauce);
    }
  }, {
    key: "getCountryFactory",
    value: function getCountryFactory(countryName) {
      if (countryName === "uk") {
        return new _uk_uk_abstract_factory__WEBPACK_IMPORTED_MODULE_1__["UKBurgerFactory"]();
      }

      return new _india_indian_abstract_factory__WEBPACK_IMPORTED_MODULE_0__["IndianBurgerFactory"]();
    }
  }]);

  return Bootstrap;
}();

var boot = new Bootstrap();
boot.initialize();

/***/ }),

/***/ "./src/india/indian-abstract-factory.ts":
/*!**********************************************!*\
  !*** ./src/india/indian-abstract-factory.ts ***!
  \**********************************************/
/*! exports provided: IndianBurgerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndianBurgerFactory", function() { return IndianBurgerFactory; });
/* harmony import */ var _indian_burger_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indian-burger-factory */ "./src/india/indian-burger-factory.ts");
/* harmony import */ var _indian_ingredient_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indian-ingredient-factory */ "./src/india/indian-ingredient-factory.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var IndianBurgerFactory =
/*#__PURE__*/
function () {
  function IndianBurgerFactory() {
    _classCallCheck(this, IndianBurgerFactory);
  }

  _createClass(IndianBurgerFactory, [{
    key: "getBurgerFactory",
    value: function getBurgerFactory() {
      return new _indian_burger_factory__WEBPACK_IMPORTED_MODULE_0__["BurgerFactory"]();
    }
  }, {
    key: "getIngredientFactory",
    value: function getIngredientFactory() {
      return new _indian_ingredient_factory__WEBPACK_IMPORTED_MODULE_1__["IngredientFactory"]();
    }
  }]);

  return IndianBurgerFactory;
}();

/***/ }),

/***/ "./src/india/indian-burger-factory.ts":
/*!********************************************!*\
  !*** ./src/india/indian-burger-factory.ts ***!
  \********************************************/
/*! exports provided: BurgerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerFactory", function() { return BurgerFactory; });
/* harmony import */ var _burgers_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../burgers/burger */ "./src/burgers/burger.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var priceMap = {};
priceMap[_burgers_burger__WEBPACK_IMPORTED_MODULE_0__["BURGER_TYPE"].ALO_TIKKI] = 50;
priceMap[_burgers_burger__WEBPACK_IMPORTED_MODULE_0__["BURGER_TYPE"].PANEER] = 80;
priceMap[_burgers_burger__WEBPACK_IMPORTED_MODULE_0__["BURGER_TYPE"].SPICY_CHIKEN] = 120;
priceMap[_burgers_burger__WEBPACK_IMPORTED_MODULE_0__["BURGER_TYPE"].FILET_O_FISH] = 120;
var BurgerFactory =
/*#__PURE__*/
function () {
  function BurgerFactory() {
    _classCallCheck(this, BurgerFactory);
  }

  _createClass(BurgerFactory, [{
    key: "create",
    value: function create(name) {
      var price = priceMap[name] || -1;

      if (price === -1) {
        console.log("".concat(name, " not available"));
        return new _burgers_burger__WEBPACK_IMPORTED_MODULE_0__["Burger"]();
      }

      return new _burgers_burger__WEBPACK_IMPORTED_MODULE_0__["Burger"](name, price);
    }
  }]);

  return BurgerFactory;
}();

/***/ }),

/***/ "./src/india/indian-ingredient-factory.ts":
/*!************************************************!*\
  !*** ./src/india/indian-ingredient-factory.ts ***!
  \************************************************/
/*! exports provided: IngredientFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientFactory", function() { return IngredientFactory; });
/* harmony import */ var _ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ingredient/ingredient */ "./src/ingredient/ingredient.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var mapper = {};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].SALT] = {
  quantity: 0.25,
  measureIn: "spoon",
  cost: 0.01,
  taste: "salty"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].BUTTER] = {
  quantity: 0.25,
  measureIn: "spoon",
  cost: 2,
  taste: "salty"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].BROWN_SUGAR] = {
  quantity: 0.5,
  measureIn: "spoon",
  cost: 0.1,
  taste: "sweet"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].CHEESE] = {
  quantity: 1,
  measureIn: "piece",
  cost: 5,
  taste: "salty"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].ONION] = {
  quantity: 2,
  measureIn: "piece",
  cost: 1,
  taste: "not known"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].SUGAR] = {
  quantity: 0.5,
  measureIn: "spoon",
  cost: 1,
  taste: "sweet"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].TOMATO] = {
  quantity: 2,
  measureIn: "piece",
  cost: 5,
  taste: "sour"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].TOMATO_SAUCE] = {
  quantity: 2,
  measureIn: "spoon",
  cost: 1,
  taste: "sour"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].PEPPER] = {
  quantity: 2,
  measureIn: "spoon",
  cost: 1,
  taste: "spicy"
};
var IngredientFactory =
/*#__PURE__*/
function () {
  function IngredientFactory() {
    _classCallCheck(this, IngredientFactory);
  }

  _createClass(IngredientFactory, [{
    key: "create",
    value: function create(name) {
      var ingredient = mapper[name];
      return new _ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["Ingredient"](name, ingredient.quantity, ingredient.measureIn, ingredient.const, ingredient.taste);
    }
  }]);

  return IngredientFactory;
}();

/***/ }),

/***/ "./src/ingredient/ingredient.ts":
/*!**************************************!*\
  !*** ./src/ingredient/ingredient.ts ***!
  \**************************************/
/*! exports provided: INGREDIENT_NAMES, Ingredient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INGREDIENT_NAMES", function() { return INGREDIENT_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ingredient", function() { return Ingredient; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INGREDIENT_NAMES = {
  SALT: "salt",
  BUTTER: "butter",
  SUGAR: "sugar",
  CHEESE: "cheese",
  PEPPER: "pepper",
  ONION: "onion",
  BROWN_SUGAR: "brown",
  TOMATO: "tomato",
  TOMATO_SAUCE: "tamato sauce"
};
var Ingredient =
/*#__PURE__*/
function () {
  function Ingredient() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "salt";
    var quantity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.25;
    var measureIn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "spoon";
    var cost = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0.01;
    var taste = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "salty";

    _classCallCheck(this, Ingredient);

    _defineProperty(this, "name", void 0);

    _defineProperty(this, "quantity", void 0);

    _defineProperty(this, "measureIn", void 0);

    _defineProperty(this, "cost", void 0);

    _defineProperty(this, "taste", void 0);

    this.name = name;
    this.quantity = quantity;
    this.measureIn = measureIn;
    this.cost = cost;
    this.taste = taste;
  }

  _createClass(Ingredient, [{
    key: "getName",
    value: function getName() {
      return this.name;
    }
  }, {
    key: "getTaste",
    value: function getTaste() {
      return "salty";
    }
  }]);

  return Ingredient;
}();

/***/ }),

/***/ "./src/uk/uk-abstract-factory.ts":
/*!***************************************!*\
  !*** ./src/uk/uk-abstract-factory.ts ***!
  \***************************************/
/*! exports provided: UKBurgerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UKBurgerFactory", function() { return UKBurgerFactory; });
/* harmony import */ var _uk_burger_factory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uk-burger-factory */ "./src/uk/uk-burger-factory.ts");
/* harmony import */ var _uk_ingredient_factory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uk-ingredient-factory */ "./src/uk/uk-ingredient-factory.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var UKBurgerFactory =
/*#__PURE__*/
function () {
  function UKBurgerFactory() {
    _classCallCheck(this, UKBurgerFactory);
  }

  _createClass(UKBurgerFactory, [{
    key: "getBurgerFactory",
    value: function getBurgerFactory() {
      return new _uk_burger_factory__WEBPACK_IMPORTED_MODULE_0__["BurgerFactory"]();
    }
  }, {
    key: "getIngredientFactory",
    value: function getIngredientFactory() {
      return new _uk_ingredient_factory__WEBPACK_IMPORTED_MODULE_1__["IngredientFactory"]();
    }
  }]);

  return UKBurgerFactory;
}();

/***/ }),

/***/ "./src/uk/uk-burger-factory.ts":
/*!*************************************!*\
  !*** ./src/uk/uk-burger-factory.ts ***!
  \*************************************/
/*! exports provided: BurgerFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BurgerFactory", function() { return BurgerFactory; });
/* harmony import */ var _burgers_burger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../burgers/burger */ "./src/burgers/burger.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var priceMap = {};
priceMap[_burgers_burger__WEBPACK_IMPORTED_MODULE_0__["BURGER_TYPE"].AVOCADO] = 5;
priceMap[_burgers_burger__WEBPACK_IMPORTED_MODULE_0__["BURGER_TYPE"].BARBECUE] = 8;
priceMap[_burgers_burger__WEBPACK_IMPORTED_MODULE_0__["BURGER_TYPE"].SPICY_CHIKEN] = 10;
priceMap[_burgers_burger__WEBPACK_IMPORTED_MODULE_0__["BURGER_TYPE"].CARIBBEAN] = 12;
priceMap[_burgers_burger__WEBPACK_IMPORTED_MODULE_0__["BURGER_TYPE"].CHORIZO] = 12;
priceMap[_burgers_burger__WEBPACK_IMPORTED_MODULE_0__["BURGER_TYPE"].SPANISH] = 9;
var BurgerFactory =
/*#__PURE__*/
function () {
  function BurgerFactory() {
    _classCallCheck(this, BurgerFactory);
  }

  _createClass(BurgerFactory, [{
    key: "create",
    value: function create(name) {
      var price = priceMap[name] || -1;

      if (price === -1) {
        console.log("".concat(name, " is not available"));
        return new _burgers_burger__WEBPACK_IMPORTED_MODULE_0__["Burger"]();
      }

      return new _burgers_burger__WEBPACK_IMPORTED_MODULE_0__["Burger"](name, price);
    }
  }]);

  return BurgerFactory;
}();

/***/ }),

/***/ "./src/uk/uk-ingredient-factory.ts":
/*!*****************************************!*\
  !*** ./src/uk/uk-ingredient-factory.ts ***!
  \*****************************************/
/*! exports provided: IngredientFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngredientFactory", function() { return IngredientFactory; });
/* harmony import */ var _ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ingredient/ingredient */ "./src/ingredient/ingredient.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var mapper = {};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].SALT] = {
  quantity: 0.10,
  measureIn: "spoon",
  cost: 0.01,
  taste: "salty"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].BUTTER] = {
  quantity: 0.15,
  measureIn: "spoon",
  cost: 0.5,
  taste: "salty"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].BROWN_SUGAR] = {
  quantity: 0.25,
  measureIn: "spoon",
  cost: 0.1,
  taste: "sweet"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].CHEESE] = {
  quantity: 2,
  measureIn: "piece",
  cost: 0.5,
  taste: "salty"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].ONION] = {
  quantity: 3,
  measureIn: "piece",
  cost: 0.1,
  taste: "not known"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].SUGAR] = {
  quantity: 0.25,
  measureIn: "spoon",
  cost: 0.1,
  taste: "sweet"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].TOMATO] = {
  quantity: 3,
  measureIn: "piece",
  cost: 0.5,
  taste: "sour"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].TOMATO_SAUCE] = {
  quantity: 3,
  measureIn: "spoon",
  cost: 1,
  taste: "sour"
};
mapper[_ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["INGREDIENT_NAMES"].PEPPER] = {
  quantity: 1,
  measureIn: "spoon",
  cost: 0.1,
  taste: "spicy"
};
var IngredientFactory =
/*#__PURE__*/
function () {
  function IngredientFactory() {
    _classCallCheck(this, IngredientFactory);
  }

  _createClass(IngredientFactory, [{
    key: "create",
    value: function create(name) {
      var ingredient = mapper[name];
      return new _ingredient_ingredient__WEBPACK_IMPORTED_MODULE_0__["Ingredient"](name, ingredient.quantity, ingredient.measureIn, ingredient.const, ingredient.taste);
    }
  }]);

  return IngredientFactory;
}();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2J1cmdlcnMvYnVyZ2VyLnRzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kaWEvaW5kaWFuLWFic3RyYWN0LWZhY3RvcnkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGlhL2luZGlhbi1idXJnZXItZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kaWEvaW5kaWFuLWluZ3JlZGllbnQtZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5ncmVkaWVudC9pbmdyZWRpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy91ay91ay1hYnN0cmFjdC1mYWN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy91ay91ay1idXJnZXItZmFjdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdWsvdWstaW5ncmVkaWVudC1mYWN0b3J5LnRzIl0sIm5hbWVzIjpbIkJVUkdFUl9UWVBFIiwiQkFSQkVDVUUiLCJDQVJJQkJFQU4iLCJDSE9SSVpPIiwiQVZPQ0FETyIsIlNQQU5JU0giLCJBTE9fVElLS0kiLCJQQU5FRVIiLCJTUElDWV9DSElLRU4iLCJGSUxFVF9PX0ZJU0giLCJCdXJnZXIiLCJicmVhZFR5cGUiLCJjb3N0IiwiaXRlbSIsImluZ3JlZGllbnRzIiwicHVzaCIsImluZ3JhZGllbnQiLCJyZWR1Y2UiLCJzdHIiLCJjdXJyZW50IiwiZ2V0TmFtZSIsIkJvb3RzdHJhcCIsImZhY3RvcnkiLCJnZXRDb3VudHJ5RmFjdG9yeSIsImdldEJ1cmdlckluVUsiLCJnZXRCdXJnZXJJbkluZGlhIiwiYnVyZ2VyRmFjdG9yeSIsImdldEJ1cmdlckZhY3RvcnkiLCJpbmdyZWRpZW50RmFjdG9yeSIsImdldEluZ3JlZGllbnRGYWN0b3J5IiwiYnVyZ2VyIiwiY3JlYXRlIiwiYWRkSW5ncmVkaWVudCIsImNvbnNvbGUiLCJsb2ciLCJnZXREZXNjcmlwdGlvbiIsInNhbHQiLCJJTkdSRURJRU5UX05BTUVTIiwiU0FMVCIsInBlcHBlciIsIlBFUFBFUiIsInRvbWF0byIsIlRPTUFUTyIsInRvbWF0b1NhdWNlIiwiVE9NQVRPX1NBVUNFIiwiY291bnRyeU5hbWUiLCJVS0J1cmdlckZhY3RvcnkiLCJJbmRpYW5CdXJnZXJGYWN0b3J5IiwiYm9vdCIsImluaXRpYWxpemUiLCJCdXJnZXJGYWN0b3J5IiwiSW5ncmVkaWVudEZhY3RvcnkiLCJwcmljZU1hcCIsIm5hbWUiLCJwcmljZSIsIm1hcHBlciIsInF1YW50aXR5IiwibWVhc3VyZUluIiwidGFzdGUiLCJCVVRURVIiLCJCUk9XTl9TVUdBUiIsIkNIRUVTRSIsIk9OSU9OIiwiU1VHQVIiLCJpbmdyZWRpZW50IiwiSW5ncmVkaWVudCIsImNvbnN0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvRU8sSUFBTUEsV0FBVyxHQUFH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QTFCO0FBQW1DN0MsTUFBSSxFQUFDLEdBQXhDO0FBQTZDOEMsT0FBSyxFQUFDO0FBQW5ELENBQWpDO0FBQ0FILE1BQU0sQ0FBQ2xCLHVFQUFnQixDQUFDSyxNQUFsQixDQUFOLEdBQWtDO0FBQUNjLFVBQVEsRUFBQyxDQUFWO0FBQWFDLFdBQVMsRUFBQyxPQUF2QjtBQUFnQzdDLE1BQUksRUFBQyxHQUFyQztBQUEwQzhDLE9BQUssRUFBQztBQUFoRCxDQUFsQztBQUNBSCxNQUFNLENBQUNsQix1RUFBZ0IsQ0FBQ08sWUFBbEIsQ0FBTixHQUF3QztBQUFDWSxVQUFRLEVBQUMsQ0FBVjtBQUFhQyxXQUFTLEVBQUMsT0FBdkI7QUFBZ0M3QyxNQUFJLEVBQUMsQ0FBckM7QUFBd0M4QyxPQUFLLEVBQUM7QUFBOUMsQ0FBeEM7QUFDQUgsTUFBTSxDQUFDbEIsdUVBQWdCLENBQUNHLE1BQWxCLENBQU4sR0FBa0M7QUFBQ2dCLFVBQVEsRUFBQyxDQUFWO0FBQWFDLFdBQVMsRUFBQyxPQUF2QjtBQUFnQzdDLE1BQUksRUFBQyxHQUFyQztBQUEwQzhDLE9BQUssRUFBQztBQUFoRCxDQUFsQztBQUVPLElBQU1QLGlCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsMkJBQ1dFLElBRFgsRUFDbUM7QUFDM0IsVUFBSVcsVUFBVSxHQUFHVCxNQUFNLENBQUNGLElBQUQsQ0FBdkI7QUFDQSxhQUFPLElBQUlZLGlFQUFKLENBQWVaLElBQWYsRUFDSFcsVUFBVSxDQUFDUixRQURSLEVBRUhRLFVBQVUsQ0FBQ1AsU0FGUixFQUdITyxVQUFVLENBQUNFLEtBSFIsRUFJSEYsVUFBVSxDQUFDTixLQUpSLENBQVA7QUFNSDtBQVRMOztBQUFBO0FBQUEsSSIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXgudHNcIik7XG4iLCJpbXBvcnQgeyBJQnVyZ2VyIH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1idXJnZXJcIjtcclxuaW1wb3J0IHsgSUluZ3JlZGllbnQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWluZ3JlZGllbnRcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBCVVJHRVJfVFlQRSA9IHtcclxuICAgIEJBUkJFQ1VFOlwiQmFyYmVjdWUgQnVyZ2Vyc1wiLFxyXG4gICAgQ0FSSUJCRUFOOlwiQ2FyaWJiZWFuIEJ1cmdlclwiLFxyXG4gICAgQ0hPUklaTzpcIkNob3Jpem8gQnVyZ2VyXCIsXHJcbiAgICBBVk9DQURPOlwiQXZvY2FkbyBCZWVmIEJ1cmdlclwiLFxyXG4gICAgU1BBTklTSDpcIlNwYW5pc2ggQnVyZ2VyXCIsXHJcbiAgICBBTE9fVElLS0k6XCJBbG8gVGlra2kgQnVyZ2VyXCIsXHJcbiAgICBQQU5FRVI6XCJQYW5lZXIgQnVyZ2VyXCIsXHJcbiAgICBTUElDWV9DSElLRU46XCJTcGljeSBDaGlrZW4gQnVyZ2VyXCIsXHJcbiAgICBGSUxFVF9PX0ZJU0g6IFwiZmlsZXQtTy1GaXNoIEJ1cmdlclwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBCdXJnZXIgaW1wbGVtZW50cyBJQnVyZ2VyIHtcclxuICAgIHByaXZhdGUgaW5ncmVkaWVudHM6QXJyYXk8SUluZ3JlZGllbnQ+ID0gW107XHJcblxyXG4gICAgLy9Ccm93biwgV2hlYXQgJiBNdWx0aWdyYWluXHJcbiAgICBwcml2YXRlIGJyZWFkVHlwZTpzdHJpbmc7XHJcbiAgICBwcml2YXRlIGNvc3Q6bnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGJyZWFkVHlwZTpzdHJpbmcgPSBcIkJ1cmdlclwiLCBcclxuICAgICAgICAgICAgICAgIGNvc3Q6bnVtYmVyID0gMzApe1xyXG4gICAgICAgIHRoaXMuYnJlYWRUeXBlID0gYnJlYWRUeXBlXHJcbiAgICAgICAgdGhpcy5jb3N0ID0gY29zdDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRJbmdyZWRpZW50KGl0ZW06SUluZ3JlZGllbnQpe1xyXG4gICAgICAgIHRoaXMuaW5ncmVkaWVudHMucHVzaChpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREZXNjcmlwdGlvbigpOnN0cmluZ3tcclxuICAgICAgICBsZXQgaW5ncmFkaWVudDpzdHJpbmcgPSB0aGlzLmluZ3JlZGllbnRzLnJlZHVjZSgoc3RyLCBjdXJyZW50KSA9PntcclxuICAgICAgICAgICAgcmV0dXJuIHN0citcIiBcIitjdXJyZW50LmdldE5hbWUoKTtcclxuICAgICAgICB9LCBcIlwiKVxyXG5cclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5icmVhZFR5cGV9IHdpdGggJHtpbmdyYWRpZW50fWA7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJbmRpYW5CdXJnZXJGYWN0b3J5IH0gZnJvbSBcIi4vaW5kaWEvaW5kaWFuLWFic3RyYWN0LWZhY3RvcnlcIjtcbmltcG9ydCB7IFVLQnVyZ2VyRmFjdG9yeSB9IGZyb20gXCIuL3VrL3VrLWFic3RyYWN0LWZhY3RvcnlcIjtcbmltcG9ydCB7IElCdXJnZXJGYWN0b3J5IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9pLWJ1cmdlci1mYWN0b3J5XCI7XG5pbXBvcnQgeyBJQWJzdHJhY3RCdXJnZXJGYWN0b3J5IH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9pLWFic3RyYWN0LWJ1cmdlci1mYWN0b3J5XCI7XG5pbXBvcnQgeyBJSW5ncmVkaWVudEZhY3RvcnkgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2ktaW5ncmVkaWVudC1mYWN0b3J5XCI7XG5pbXBvcnQgeyBJQnVyZ2VyIH0gZnJvbSBcIi4vaW50ZXJmYWNlcy9pLWJ1cmdlclwiO1xuaW1wb3J0IHsgQlVSR0VSX1RZUEUgfSBmcm9tIFwiLi9idXJnZXJzL2J1cmdlclwiO1xuaW1wb3J0IHsgSUluZ3JlZGllbnQgfSBmcm9tIFwiLi9pbnRlcmZhY2VzL2ktaW5ncmVkaWVudFwiO1xuaW1wb3J0IHsgSU5HUkVESUVOVF9OQU1FUyB9IGZyb20gXCIuL2luZ3JlZGllbnQvaW5ncmVkaWVudFwiO1xuXG5jbGFzcyBCb290c3RyYXAge1xuXG4gICAgY29uc3RydWN0b3IoKXsgIH1cblxuICAgIGluaXRpYWxpemUoKXtcblxuICAgICAgICBsZXQgZmFjdG9yeTpJQWJzdHJhY3RCdXJnZXJGYWN0b3J5ID0gdGhpcy5nZXRDb3VudHJ5RmFjdG9yeShcInVrXCIpO1xuICAgICAgICB0aGlzLmdldEJ1cmdlckluVUsoZmFjdG9yeSk7XG5cbiAgICAgICAgZmFjdG9yeSA9IHRoaXMuZ2V0Q291bnRyeUZhY3RvcnkoXCJpbmRpYVwiKTtcbiAgICAgICAgdGhpcy5nZXRCdXJnZXJJbkluZGlhKGZhY3RvcnkpO1xuXG4gICAgfVxuXG4gICAgZ2V0QnVyZ2VySW5VSyhmYWN0b3J5OklBYnN0cmFjdEJ1cmdlckZhY3Rvcnkpe1xuICAgICAgICBsZXQgYnVyZ2VyRmFjdG9yeTpJQnVyZ2VyRmFjdG9yeSA9IGZhY3RvcnkuZ2V0QnVyZ2VyRmFjdG9yeSgpO1xuICAgICAgICBsZXQgaW5ncmVkaWVudEZhY3Rvcnk6SUluZ3JlZGllbnRGYWN0b3J5ID0gZmFjdG9yeS5nZXRJbmdyZWRpZW50RmFjdG9yeSgpO1xuXG4gICAgICAgIGxldCBidXJnZXI6SUJ1cmdlciA9IGJ1cmdlckZhY3RvcnkuY3JlYXRlKEJVUkdFUl9UWVBFLkFWT0NBRE8pXG4gICAgICAgIHRoaXMuYWRkSW5ncmVkaWVudChpbmdyZWRpZW50RmFjdG9yeSwgYnVyZ2VyKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhcIk15IG9yZGVyIGJ1cmdlciBvcmRlciBpbiBVSzogXCIpXG4gICAgICAgIGNvbnNvbGUubG9nKGJ1cmdlci5nZXREZXNjcmlwdGlvbigpKTtcbiAgICB9XG5cbiAgICBnZXRCdXJnZXJJbkluZGlhKGZhY3Rvcnk6SUFic3RyYWN0QnVyZ2VyRmFjdG9yeSl7XG4gICAgICAgIGxldCBidXJnZXJGYWN0b3J5OklCdXJnZXJGYWN0b3J5ID0gZmFjdG9yeS5nZXRCdXJnZXJGYWN0b3J5KCk7XG4gICAgICAgIGxldCBpbmdyZWRpZW50RmFjdG9yeTpJSW5ncmVkaWVudEZhY3RvcnkgPSBmYWN0b3J5LmdldEluZ3JlZGllbnRGYWN0b3J5KCk7XG5cbiAgICAgICAgbGV0IGJ1cmdlcjpJQnVyZ2VyID0gYnVyZ2VyRmFjdG9yeS5jcmVhdGUoQlVSR0VSX1RZUEUuU1BJQ1lfQ0hJS0VOKVxuICAgICAgICB0aGlzLmFkZEluZ3JlZGllbnQoaW5ncmVkaWVudEZhY3RvcnksIGJ1cmdlcik7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJNeSBvcmRlciBidXJnZXIgb3JkZXIgaW4gSW5kaWE6IFwiKVxuICAgICAgICBjb25zb2xlLmxvZyhidXJnZXIuZ2V0RGVzY3JpcHRpb24oKSk7XG4gICAgfVxuXG4gICAgYWRkSW5ncmVkaWVudChpbmdyZWRpZW50RmFjdG9yeTpJSW5ncmVkaWVudEZhY3RvcnksIGJ1cmdlcjpJQnVyZ2VyKXtcbiAgICAgICAgbGV0IHNhbHQ6SUluZ3JlZGllbnQgPSBpbmdyZWRpZW50RmFjdG9yeS5jcmVhdGUoSU5HUkVESUVOVF9OQU1FUy5TQUxUKTtcbiAgICAgICAgbGV0IHBlcHBlcjpJSW5ncmVkaWVudCA9IGluZ3JlZGllbnRGYWN0b3J5LmNyZWF0ZShJTkdSRURJRU5UX05BTUVTLlBFUFBFUik7XG4gICAgICAgIGxldCB0b21hdG86SUluZ3JlZGllbnQgID0gaW5ncmVkaWVudEZhY3RvcnkuY3JlYXRlKElOR1JFRElFTlRfTkFNRVMuVE9NQVRPKTtcbiAgICAgICAgbGV0IHRvbWF0b1NhdWNlOklJbmdyZWRpZW50ICA9IGluZ3JlZGllbnRGYWN0b3J5LmNyZWF0ZShJTkdSRURJRU5UX05BTUVTLlRPTUFUT19TQVVDRSk7XG4gICAgICAgIGJ1cmdlci5hZGRJbmdyZWRpZW50KHNhbHQpO1xuICAgICAgICBidXJnZXIuYWRkSW5ncmVkaWVudChwZXBwZXIpO1xuICAgICAgICBidXJnZXIuYWRkSW5ncmVkaWVudCh0b21hdG8pO1xuICAgICAgICBidXJnZXIuYWRkSW5ncmVkaWVudCh0b21hdG9TYXVjZSk7XG4gICAgfVxuXG4gICAgZ2V0Q291bnRyeUZhY3RvcnkoY291bnRyeU5hbWU6c3RyaW5nKTpJQWJzdHJhY3RCdXJnZXJGYWN0b3J5IHtcbiAgICAgICAgaWYoY291bnRyeU5hbWUgPT09IFwidWtcIil7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFVLQnVyZ2VyRmFjdG9yeSgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgSW5kaWFuQnVyZ2VyRmFjdG9yeSgpO1xuICAgIH1cbn0gICBcblxubGV0IGJvb3QgPSBuZXcgQm9vdHN0cmFwKCk7XG5ib290LmluaXRpYWxpemUoKTsgICIsImltcG9ydCB7IElBYnN0cmFjdEJ1cmdlckZhY3RvcnkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWFic3RyYWN0LWJ1cmdlci1mYWN0b3J5XCI7XHJcbmltcG9ydCB7IEJ1cmdlckZhY3RvcnkgfSBmcm9tIFwiLi9pbmRpYW4tYnVyZ2VyLWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgSW5ncmVkaWVudEZhY3RvcnkgfSBmcm9tIFwiLi9pbmRpYW4taW5ncmVkaWVudC1mYWN0b3J5XCI7XHJcbmltcG9ydCB7IElCdXJnZXJGYWN0b3J5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1idXJnZXItZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBJSW5ncmVkaWVudEZhY3RvcnkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWluZ3JlZGllbnQtZmFjdG9yeVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEluZGlhbkJ1cmdlckZhY3RvcnkgaW1wbGVtZW50cyBJQWJzdHJhY3RCdXJnZXJGYWN0b3J5IHtcclxuICAgIFxyXG4gICAgZ2V0QnVyZ2VyRmFjdG9yeSgpOklCdXJnZXJGYWN0b3J5IHtcclxuICAgICAgICByZXR1cm4gbmV3IEJ1cmdlckZhY3RvcnkoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmdyZWRpZW50RmFjdG9yeSgpOklJbmdyZWRpZW50RmFjdG9yeSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbmdyZWRpZW50RmFjdG9yeSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbn0iLCJpbXBvcnQgeyBJQnVyZ2VyRmFjdG9yeSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktYnVyZ2VyLWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgSUJ1cmdlciB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktYnVyZ2VyXCI7XHJcbmltcG9ydCB7IEJ1cmdlciwgQlVSR0VSX1RZUEUgfSBmcm9tIFwiLi4vYnVyZ2Vycy9idXJnZXJcIjtcclxuXHJcbmNvbnN0IHByaWNlTWFwOmFueSA9IHt9XHJcbnByaWNlTWFwW0JVUkdFUl9UWVBFLkFMT19USUtLSV0gPSA1MDtcclxucHJpY2VNYXBbQlVSR0VSX1RZUEUuUEFORUVSXSA9IDgwO1xyXG5wcmljZU1hcFtCVVJHRVJfVFlQRS5TUElDWV9DSElLRU5dID0gMTIwO1xyXG5wcmljZU1hcFtCVVJHRVJfVFlQRS5GSUxFVF9PX0ZJU0hdID0gMTIwO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1cmdlckZhY3RvcnkgaW1wbGVtZW50cyBJQnVyZ2VyRmFjdG9yeSB7XHJcbiAgICBwdWJsaWMgY3JlYXRlKG5hbWU6c3RyaW5nKTpJQnVyZ2VyIHtcclxuICAgICAgICBsZXQgcHJpY2UgPSBwcmljZU1hcFtuYW1lXSB8fCAgLTE7XHJcbiAgICAgICAgaWYocHJpY2UgPT09IC0xKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX0gbm90IGF2YWlsYWJsZWApO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJ1cmdlcigpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIG5ldyBCdXJnZXIobmFtZSwgcHJpY2UpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHsgSUluZ3JlZGllbnRGYWN0b3J5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1pbmdyZWRpZW50LWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgSUluZ3JlZGllbnQgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWluZ3JlZGllbnRcIjtcclxuaW1wb3J0IHsgSW5ncmVkaWVudCwgSU5HUkVESUVOVF9OQU1FUyB9IGZyb20gXCIuLi9pbmdyZWRpZW50L2luZ3JlZGllbnRcIjtcclxuXHJcbmNvbnN0IG1hcHBlcjphbnkgPSB7fVxyXG5tYXBwZXJbSU5HUkVESUVOVF9OQU1FUy5TQUxUXSA9IHtxdWFudGl0eTowLjI1LCBtZWFzdXJlSW46XCJzcG9vblwiLCBjb3N0OjAuMDEsIHRhc3RlOlwic2FsdHlcIn1cclxubWFwcGVyW0lOR1JFRElFTlRfTkFNRVMuQlVUVEVSXSA9IHtxdWFudGl0eTowLjI1LCBtZWFzdXJlSW46XCJzcG9vblwiLCBjb3N0OjIsIHRhc3RlOlwic2FsdHlcIn1cclxubWFwcGVyW0lOR1JFRElFTlRfTkFNRVMuQlJPV05fU1VHQVJdID0ge3F1YW50aXR5OjAuNSwgbWVhc3VyZUluOlwic3Bvb25cIiwgY29zdDowLjEsIHRhc3RlOlwic3dlZXRcIn1cclxubWFwcGVyW0lOR1JFRElFTlRfTkFNRVMuQ0hFRVNFXSA9IHtxdWFudGl0eToxLCBtZWFzdXJlSW46XCJwaWVjZVwiLCBjb3N0OjUsIHRhc3RlOlwic2FsdHlcIn1cclxubWFwcGVyW0lOR1JFRElFTlRfTkFNRVMuT05JT05dID0ge3F1YW50aXR5OjIsIG1lYXN1cmVJbjpcInBpZWNlXCIsIGNvc3Q6MSwgdGFzdGU6XCJub3Qga25vd25cIn1cclxubWFwcGVyW0lOR1JFRElFTlRfTkFNRVMuU1VHQVJdID0ge3F1YW50aXR5OjAuNSwgbWVhc3VyZUluOlwic3Bvb25cIiwgY29zdDoxLCB0YXN0ZTpcInN3ZWV0XCJ9XHJcbm1hcHBlcltJTkdSRURJRU5UX05BTUVTLlRPTUFUT10gPSB7cXVhbnRpdHk6MiwgbWVhc3VyZUluOlwicGllY2VcIiwgY29zdDo1LCB0YXN0ZTpcInNvdXJcIn1cclxubWFwcGVyW0lOR1JFRElFTlRfTkFNRVMuVE9NQVRPX1NBVUNFXSA9IHtxdWFudGl0eToyLCBtZWFzdXJlSW46XCJzcG9vblwiLCBjb3N0OjEsIHRhc3RlOlwic291clwifVxyXG5tYXBwZXJbSU5HUkVESUVOVF9OQU1FUy5QRVBQRVJdID0ge3F1YW50aXR5OjIsIG1lYXN1cmVJbjpcInNwb29uXCIsIGNvc3Q6MSwgdGFzdGU6XCJzcGljeVwifVxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBJbmdyZWRpZW50RmFjdG9yeSBpbXBsZW1lbnRzIElJbmdyZWRpZW50RmFjdG9yeSB7XHJcbiAgICBcclxuICAgIGNyZWF0ZShuYW1lOnN0cmluZyk6SUluZ3JlZGllbnQge1xyXG4gICAgICAgIGxldCBpbmdyZWRpZW50ID0gbWFwcGVyW25hbWVdO1xyXG4gICAgICAgIHJldHVybiBuZXcgSW5ncmVkaWVudChuYW1lLCBcclxuICAgICAgICAgICAgaW5ncmVkaWVudC5xdWFudGl0eSxcclxuICAgICAgICAgICAgaW5ncmVkaWVudC5tZWFzdXJlSW4sXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnQuY29uc3QsXHJcbiAgICAgICAgICAgIGluZ3JlZGllbnQudGFzdGVcclxuICAgICAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElJbmdyZWRpZW50IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1pbmdyZWRpZW50XCI7XHJcblxyXG5leHBvcnQgY29uc3QgSU5HUkVESUVOVF9OQU1FUyA9IHtcclxuICAgIFNBTFQ6XCJzYWx0XCIsXHJcbiAgICBCVVRURVI6XCJidXR0ZXJcIixcclxuICAgIFNVR0FSOlwic3VnYXJcIixcclxuICAgIENIRUVTRTpcImNoZWVzZVwiLFxyXG4gICAgUEVQUEVSOlwicGVwcGVyXCIsXHJcbiAgICBPTklPTjpcIm9uaW9uXCIsXHJcbiAgICBCUk9XTl9TVUdBUjpcImJyb3duXCIsXHJcbiAgICBUT01BVE86XCJ0b21hdG9cIixcclxuICAgIFRPTUFUT19TQVVDRTpcInRhbWF0byBzYXVjZVwiXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbmdyZWRpZW50IGltcGxlbWVudHMgSUluZ3JlZGllbnQge1xyXG4gICAgcHJpdmF0ZSBuYW1lOnN0cmluZztcclxuICAgIHByaXZhdGUgcXVhbnRpdHk6bnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBtZWFzdXJlSW46c3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBjb3N0Om51bWJlcjtcclxuICAgIHByaXZhdGUgdGFzdGU6c3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG5hbWU6c3RyaW5nID0gXCJzYWx0XCIsIFxyXG4gICAgICAgICAgICAgICAgcXVhbnRpdHk6bnVtYmVyID0gMC4yNSwgXHJcbiAgICAgICAgICAgICAgICBtZWFzdXJlSW46c3RyaW5nPVwic3Bvb25cIiwgXHJcbiAgICAgICAgICAgICAgICBjb3N0Om51bWJlcj0wLjAxLFxyXG4gICAgICAgICAgICAgICAgdGFzdGU6c3RyaW5nPVwic2FsdHlcIil7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5xdWFudGl0eSA9IHF1YW50aXR5O1xyXG4gICAgICAgIHRoaXMubWVhc3VyZUluID0gbWVhc3VyZUluO1xyXG4gICAgICAgIHRoaXMuY29zdCA9IGNvc3Q7XHJcbiAgICAgICAgdGhpcy50YXN0ZSA9IHRhc3RlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXROYW1lKCk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5uYW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRhc3RlKCk6c3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gXCJzYWx0eVwiXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBJQWJzdHJhY3RCdXJnZXJGYWN0b3J5IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1hYnN0cmFjdC1idXJnZXItZmFjdG9yeVwiO1xyXG5pbXBvcnQgeyBCdXJnZXJGYWN0b3J5IH0gZnJvbSBcIi4vdWstYnVyZ2VyLWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgSW5ncmVkaWVudEZhY3RvcnkgfSBmcm9tIFwiLi91ay1pbmdyZWRpZW50LWZhY3RvcnlcIjtcclxuaW1wb3J0IHsgSUJ1cmdlckZhY3RvcnkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWJ1cmdlci1mYWN0b3J5XCI7XHJcbmltcG9ydCB7IElJbmdyZWRpZW50RmFjdG9yeSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktaW5ncmVkaWVudC1mYWN0b3J5XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVUtCdXJnZXJGYWN0b3J5IGltcGxlbWVudHMgSUFic3RyYWN0QnVyZ2VyRmFjdG9yeSB7XHJcbiAgICBcclxuICAgIGdldEJ1cmdlckZhY3RvcnkoKTpJQnVyZ2VyRmFjdG9yeSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBCdXJnZXJGYWN0b3J5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5ncmVkaWVudEZhY3RvcnkoKTpJSW5ncmVkaWVudEZhY3Rvcnkge1xyXG4gICAgICAgIHJldHVybiBuZXcgSW5ncmVkaWVudEZhY3RvcnkoKTtcclxuICAgIH1cclxuICAgIFxyXG59IiwiaW1wb3J0IHsgSUJ1cmdlckZhY3RvcnkgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWJ1cmdlci1mYWN0b3J5XCI7XHJcbmltcG9ydCB7IElCdXJnZXIgfSBmcm9tIFwiLi4vaW50ZXJmYWNlcy9pLWJ1cmdlclwiO1xyXG5pbXBvcnQgeyBCdXJnZXIsIEJVUkdFUl9UWVBFIH0gZnJvbSBcIi4uL2J1cmdlcnMvYnVyZ2VyXCI7XHJcblxyXG5jb25zdCBwcmljZU1hcDphbnkgPSB7fVxyXG5wcmljZU1hcFtCVVJHRVJfVFlQRS5BVk9DQURPXSA9IDU7XHJcbnByaWNlTWFwW0JVUkdFUl9UWVBFLkJBUkJFQ1VFXSA9IDg7XHJcbnByaWNlTWFwW0JVUkdFUl9UWVBFLlNQSUNZX0NISUtFTl0gPSAxMDtcclxucHJpY2VNYXBbQlVSR0VSX1RZUEUuQ0FSSUJCRUFOXSA9IDEyO1xyXG5wcmljZU1hcFtCVVJHRVJfVFlQRS5DSE9SSVpPXSA9IDEyO1xyXG5wcmljZU1hcFtCVVJHRVJfVFlQRS5TUEFOSVNIXSA9IDk7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEJ1cmdlckZhY3RvcnkgaW1wbGVtZW50cyBJQnVyZ2VyRmFjdG9yeSB7XHJcbiAgICBwdWJsaWMgY3JlYXRlKG5hbWU6c3RyaW5nKTpJQnVyZ2VyIHtcclxuICAgICAgICBsZXQgcHJpY2U6bnVtYmVyID0gcHJpY2VNYXBbbmFtZV0gfHwgLTE7XHJcbiAgICAgICAgaWYocHJpY2UgPT09IC0xKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYCR7bmFtZX0gaXMgbm90IGF2YWlsYWJsZWApXHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQnVyZ2VyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgQnVyZ2VyKG5hbWUsIHByaWNlKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IElJbmdyZWRpZW50RmFjdG9yeSB9IGZyb20gXCIuLi9pbnRlcmZhY2VzL2ktaW5ncmVkaWVudC1mYWN0b3J5XCI7XHJcbmltcG9ydCB7IElJbmdyZWRpZW50IH0gZnJvbSBcIi4uL2ludGVyZmFjZXMvaS1pbmdyZWRpZW50XCI7XHJcbmltcG9ydCB7IEluZ3JlZGllbnQsIElOR1JFRElFTlRfTkFNRVMgfSBmcm9tIFwiLi4vaW5ncmVkaWVudC9pbmdyZWRpZW50XCI7XHJcblxyXG5jb25zdCBtYXBwZXI6YW55ID0ge31cclxubWFwcGVyW0lOR1JFRElFTlRfTkFNRVMuU0FMVF0gPSB7cXVhbnRpdHk6MC4xMCwgbWVhc3VyZUluOlwic3Bvb25cIiwgY29zdDowLjAxLCB0YXN0ZTpcInNhbHR5XCJ9XHJcbm1hcHBlcltJTkdSRURJRU5UX05BTUVTLkJVVFRFUl0gPSB7cXVhbnRpdHk6MC4xNSwgbWVhc3VyZUluOlwic3Bvb25cIiwgY29zdDowLjUsIHRhc3RlOlwic2FsdHlcIn1cclxubWFwcGVyW0lOR1JFRElFTlRfTkFNRVMuQlJPV05fU1VHQVJdID0ge3F1YW50aXR5OjAuMjUsIG1lYXN1cmVJbjpcInNwb29uXCIsIGNvc3Q6MC4xLCB0YXN0ZTpcInN3ZWV0XCJ9XHJcbm1hcHBlcltJTkdSRURJRU5UX05BTUVTLkNIRUVTRV0gPSB7cXVhbnRpdHk6MiwgbWVhc3VyZUluOlwicGllY2VcIiwgY29zdDowLjUsIHRhc3RlOlwic2FsdHlcIn1cclxubWFwcGVyW0lOR1JFRElFTlRfTkFNRVMuT05JT05dID0ge3F1YW50aXR5OjMsIG1lYXN1cmVJbjpcInBpZWNlXCIsIGNvc3Q6MC4xLCB0YXN0ZTpcIm5vdCBrbm93blwifVxyXG5tYXBwZXJbSU5HUkVESUVOVF9OQU1FUy5TVUdBUl0gPSB7cXVhbnRpdHk6MC4yNSwgbWVhc3VyZUluOlwic3Bvb25cIiwgY29zdDowLjEsIHRhc3RlOlwic3dlZXRcIn1cclxubWFwcGVyW0lOR1JFRElFTlRfTkFNRVMuVE9NQVRPXSA9IHtxdWFudGl0eTozLCBtZWFzdXJlSW46XCJwaWVjZVwiLCBjb3N0OjAuNSwgdGFzdGU6XCJzb3VyXCJ9XHJcbm1hcHBlcltJTkdSRURJRU5UX05BTUVTLlRPTUFUT19TQVVDRV0gPSB7cXVhbnRpdHk6MywgbWVhc3VyZUluOlwic3Bvb25cIiwgY29zdDoxLCB0YXN0ZTpcInNvdXJcIn1cclxubWFwcGVyW0lOR1JFRElFTlRfTkFNRVMuUEVQUEVSXSA9IHtxdWFudGl0eToxLCBtZWFzdXJlSW46XCJzcG9vblwiLCBjb3N0OjAuMSwgdGFzdGU6XCJzcGljeVwifVxyXG5cclxuZXhwb3J0IGNsYXNzIEluZ3JlZGllbnRGYWN0b3J5IGltcGxlbWVudHMgSUluZ3JlZGllbnRGYWN0b3J5IHtcclxuICAgIGNyZWF0ZShuYW1lOnN0cmluZyk6SUluZ3JlZGllbnR7XHJcbiAgICAgICAgbGV0IGluZ3JlZGllbnQgPSBtYXBwZXJbbmFtZV07XHJcbiAgICAgICAgcmV0dXJuIG5ldyBJbmdyZWRpZW50KG5hbWUsIFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50LnF1YW50aXR5LFxyXG4gICAgICAgICAgICBpbmdyZWRpZW50Lm1lYXN1cmVJbixcclxuICAgICAgICAgICAgaW5ncmVkaWVudC5jb25zdCxcclxuICAgICAgICAgICAgaW5ncmVkaWVudC50YXN0ZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==