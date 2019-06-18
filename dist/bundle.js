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
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/engine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/button.js":
/*!******************************!*\
  !*** ./javascript/button.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_PIXI$Sprite) {
    _inherits(Button, _PIXI$Sprite);

    function Button() {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, _engine.textures["button_idle.png"]));

        _this.width = 100;
        _this.height = 100;
        _this.anchor.set(0.5);
        _this.position.set(400, 450);
        _this.interactive = true;
        _this.disabled = false;

        _this.hitArea = new PIXI.Circle(0, 0, 60);

        _engine.app.stage.addChild(_this);

        return _this;
    }

    _createClass(Button, [{
        key: "mouseover",
        value: function mouseover() {
            if (this.disabled) {
                this.texture = _engine.textures["button_disabled.png"];
            } else {
                this.texture = _engine.textures["button_hover.png"];
            }
        }
    }, {
        key: "mouseout",
        value: function mouseout() {
            if (this.disabled) {
                this.texture = _engine.textures["button_disabled.png"];
            } else {
                this.texture = _engine.textures["button_idle.png"];
            }
        }
    }, {
        key: "mousedown",
        value: function mousedown() {
            if (!_engine.animationRequired && !this.disabled) {
                this.texture = _engine.textures["button_down.png"];
                (0, _engine.makeSpin)(8);
            } else {
                this.disabled = true;
                this.texture = _engine.textures["button_disabled.png"];
                (0, _engine.changeAnimRequireTo)(false);
            }
        }
    }, {
        key: "mouseup",
        value: function mouseup() {
            if (this.disabled) {
                this.texture = _engine.textures["button_disabled.png"];
            } else {
                this.texture = _engine.textures["button_hover.png"];
            }
        }
    }]);

    return Button;
}(PIXI.Sprite);

/***/ }),

/***/ "./javascript/engine.js":
/*!******************************!*\
  !*** ./javascript/engine.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.gameSize = exports.reels = exports.renderLoop = exports.animationRequired = exports.possibleSymSrc = exports.gameMask = exports.gameArea = exports.button = exports.background = exports.textures = exports.app = undefined;
exports.randomInt = randomInt;
exports.makeSpin = makeSpin;
exports.changeAnimRequireTo = changeAnimRequireTo;
exports.spinOverFiltration = spinOverFiltration;

var _button = __webpack_require__(/*! ./button */ "./javascript/button.js");

var _reel = __webpack_require__(/*! ./reel */ "./javascript/reel.js");

var app = exports.app = new PIXI.Application({
    width: 800,
    height: 500
});

document.body.appendChild(app.view);

PIXI.Loader.shared.add("./images/sheet.json").load(setup);

var textures = exports.textures = void 0,
    background = exports.background = void 0,
    button = exports.button = void 0,
    gameArea = exports.gameArea = void 0,
    gameMask = exports.gameMask = void 0;

var possibleSymSrc = exports.possibleSymSrc = ["agent.png", "batman.png", "captain.png", "deadPool.png", "girl.png", "hulk.png", "ironMan.png", "robot.png", "spiderW.png"];

var animationRequired = exports.animationRequired = false;
var renderLoop = exports.renderLoop = [];
var reels = exports.reels = [];
var gameSize = exports.gameSize = {
    width: 800,
    height: 400,
    rows: 3,
    reels: 5
};

function setup() {
    exports.textures = textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    exports.background = background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    exports.gameArea = gameArea = new PIXI.Container();
    gameArea.width = gameSize.width;
    gameArea.height = gameSize.height;

    exports.gameMask = gameMask = new PIXI.Graphics();
    app.stage.addChild(gameMask);
    gameMask.position.set(0, 0);
    gameMask.lineStyle(0);

    gameArea.mask = gameMask;

    for (var i = 0; i < gameSize.reels; i++) {
        reels.push(new _reel.Reel(gameSize.width / gameSize.reels * i, 0, gameSize.rows));
    }

    app.stage.addChild(gameArea);
    exports.button = button = new _button.Button();

    app.ticker.add(function (delta) {
        return gameLoop(delta);
    });
}

function gameLoop() {

    for (var i = 0; i < renderLoop.length; i++) {
        renderLoop[i].update();
    }

    gameMask.clear();
    gameMask.beginFill();
    gameMask.drawRect(0, 0, gameSize.width, gameSize.height);
}

function randomInt(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

function makeSpin(AddSymb) {
    reels.forEach(function (reel) {
        reel.spin(AddSymb);
    });
}

function changeAnimRequireTo(boolean) {
    exports.animationRequired = animationRequired = boolean;
}

function spinOverFiltration() {
    changeAnimRequireTo(false);
    button.disabled = false;
    reels.forEach(function (reel) {
        reel.removeUseless();
    });
}

/***/ }),

/***/ "./javascript/reel.js":
/*!****************************!*\
  !*** ./javascript/reel.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Reel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

var _symbol = __webpack_require__(/*! ./symbol */ "./javascript/symbol.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reel = exports.Reel = function (_PIXI$Container) {
    _inherits(Reel, _PIXI$Container);

    function Reel(x, y, symbolsNum) {
        _classCallCheck(this, Reel);

        var _this = _possibleConstructorReturn(this, (Reel.__proto__ || Object.getPrototypeOf(Reel)).call(this));

        _this.position.set(x, y);
        _this.step = _engine.gameSize.height / symbolsNum;
        _this.symbolsArr = [];

        _this.addSymbols(symbolsNum);

        _engine.renderLoop.push(_this);
        _engine.gameArea.addChild(_this);
        return _this;
    }

    _createClass(Reel, [{
        key: "addSymbols",
        value: function addSymbols(symbolsNum) {
            var top = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            for (var i = 0; i < symbolsNum; i++) {

                var index = (0, _engine.randomInt)(0, _engine.possibleSymSrc.length - 1);
                var symbol = new _symbol.Symbol(_engine.possibleSymSrc[index], this.step);
                symbol.position.set(0, this.step * i + top * -this.step);
                this.addChild(symbol);
                this.symbolsArr.push(symbol);
            }
        }
    }, {
        key: "spin",
        value: function spin(symbNum) {
            var _this2 = this;

            this.addSymbols(symbNum, symbNum);
            (0, _engine.changeAnimRequireTo)(true);

            this.symbolsArr.forEach(function (symbol) {
                symbol.symbolsOnTop = symbNum;
                symbol.currentStep = _this2.step;
            });
        }
    }, {
        key: "removeUseless",
        value: function removeUseless() {
            this.symbolsArr.forEach(function (symbol) {
                if (symbol.y < -5) {
                    symbol.visible = false;
                }

                if (symbol.y > _engine.gameSize.height - 1) {
                    symbol.visible = false;
                }
            });

            this.symbolsArr = this.symbolsArr.filter(function (symbol) {
                return symbol.visible;
            });
        }
    }, {
        key: "update",
        value: function update() {
            this.symbolsArr.forEach(function (symbol) {
                symbol.spinAnimation();
            });
        }
    }]);

    return Reel;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/symbol.js":
/*!******************************!*\
  !*** ./javascript/symbol.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Symbol = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Symbol = function (_PIXI$Sprite) {
    _inherits(_Symbol, _PIXI$Sprite);

    function _Symbol(textureSrc, width) {
        _classCallCheck(this, _Symbol);

        var _this = _possibleConstructorReturn(this, (_Symbol.__proto__ || Object.getPrototypeOf(_Symbol)).call(this, _engine.textures[textureSrc]));

        _this.width = width;
        _this.height = width;
        _this.type = textureSrc;

        _this.symbolsOnTop = 0;
        _this.currentStep = 0;
        _this.animationStep = 8;

        return _this;
    }

    _createClass(_Symbol, [{
        key: "spinAnimation",
        value: function spinAnimation() {

            if (this.symbolsOnTop > 0 && this.currentStep > 0) {
                if (this.currentStep < this.animationStep) {
                    this.y += this.currentStep;
                    this.currentStep = 0;
                    this.symbolsOnTop--;
                } else {
                    this.currentStep -= this.animationStep;
                    this.y += this.animationStep;
                }
            } else if (this.symbolsOnTop > 0 && _engine.animationRequired) {
                this.currentStep = this.width;
            } else {
                (0, _engine.spinOverFiltration)();
            }
        }
    }]);

    return _Symbol;
}(PIXI.Sprite);

exports.Symbol = _Symbol;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWVsLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3ltYm9sLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsInRleHR1cmVzIiwid2lkdGgiLCJoZWlnaHQiLCJhbmNob3IiLCJzZXQiLCJwb3NpdGlvbiIsImludGVyYWN0aXZlIiwiZGlzYWJsZWQiLCJoaXRBcmVhIiwiUElYSSIsIkNpcmNsZSIsImFwcCIsInN0YWdlIiwiYWRkQ2hpbGQiLCJ0ZXh0dXJlIiwiYW5pbWF0aW9uUmVxdWlyZWQiLCJTcHJpdGUiLCJyYW5kb21JbnQiLCJtYWtlU3BpbiIsImNoYW5nZUFuaW1SZXF1aXJlVG8iLCJzcGluT3ZlckZpbHRyYXRpb24iLCJBcHBsaWNhdGlvbiIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidmlldyIsIkxvYWRlciIsInNoYXJlZCIsImFkZCIsImxvYWQiLCJzZXR1cCIsImJhY2tncm91bmQiLCJidXR0b24iLCJnYW1lQXJlYSIsImdhbWVNYXNrIiwicG9zc2libGVTeW1TcmMiLCJyZW5kZXJMb29wIiwicmVlbHMiLCJnYW1lU2l6ZSIsInJvd3MiLCJyZXNvdXJjZXMiLCJDb250YWluZXIiLCJHcmFwaGljcyIsImxpbmVTdHlsZSIsIm1hc2siLCJpIiwicHVzaCIsIlJlZWwiLCJ0aWNrZXIiLCJnYW1lTG9vcCIsImRlbHRhIiwibGVuZ3RoIiwidXBkYXRlIiwiY2xlYXIiLCJiZWdpbkZpbGwiLCJkcmF3UmVjdCIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJBZGRTeW1iIiwiZm9yRWFjaCIsInJlZWwiLCJzcGluIiwiYm9vbGVhbiIsInJlbW92ZVVzZWxlc3MiLCJ4IiwieSIsInN5bWJvbHNOdW0iLCJzdGVwIiwic3ltYm9sc0FyciIsImFkZFN5bWJvbHMiLCJ0b3AiLCJpbmRleCIsInN5bWJvbCIsIlN5bWJvbCIsInN5bWJOdW0iLCJzeW1ib2xzT25Ub3AiLCJjdXJyZW50U3RlcCIsInZpc2libGUiLCJmaWx0ZXIiLCJzcGluQW5pbWF0aW9uIiwidGV4dHVyZVNyYyIsInR5cGUiLCJhbmltYXRpb25TdGVwIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7OztJQUVhQSxNLFdBQUFBLE07OztBQUNULHNCQUFhO0FBQUE7O0FBQUEsb0hBQ0hDLGlCQUFTLGlCQUFULENBREc7O0FBRVQsY0FBS0MsS0FBTCxHQUFhLEdBQWI7QUFDQSxjQUFLQyxNQUFMLEdBQWMsR0FBZDtBQUNBLGNBQUtDLE1BQUwsQ0FBWUMsR0FBWixDQUFnQixHQUFoQjtBQUNBLGNBQUtDLFFBQUwsQ0FBY0QsR0FBZCxD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QixJQUF5QmhFLHlCQUE3QixFQUErQztBQUNsRCxxQkFBS2lFLFdBQUwsR0FBbUIsS0FBSy9FLEtBQXhCO0FBQ0gsYUFGTSxNQUVEO0FBQ0Y7QUFDSDtBQUVKOzs7O0VBaEN1QlEsS0FBS08sTSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2phdmFzY3JpcHQvZW5naW5lLmpzXCIpO1xuIiwiaW1wb3J0IHt0ZXh0dXJlcywgYXBwLCBtYWtlU3BpbiwgYW5pbWF0aW9uUmVxdWlyZWQsIGNoYW5nZUFuaW1SZXF1aXJlVG99IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlc1tcImJ1dHRvbl9pZGxlLnBuZ1wiXSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwMDtcclxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCg0MDAsIDQ1MCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5DaXJjbGUoMCwgMCwgNjApO1xyXG5cclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtb3VzZW92ZXIoKSB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW1wiYnV0dG9uX2Rpc2FibGVkLnBuZ1wiXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1tcImJ1dHRvbl9ob3Zlci5wbmdcIl07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlb3V0KCkge1xyXG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1tcImJ1dHRvbl9kaXNhYmxlZC5wbmdcIl07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbXCJidXR0b25faWRsZS5wbmdcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZWRvd24oKSB7XHJcbiAgICAgICAgaWYoIWFuaW1hdGlvblJlcXVpcmVkICYmICAhdGhpcy5kaXNhYmxlZCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW1wiYnV0dG9uX2Rvd24ucG5nXCJdO1xyXG4gICAgICAgICAgICBtYWtlU3Bpbig4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbXCJidXR0b25fZGlzYWJsZWQucG5nXCJdO1xyXG4gICAgICAgICAgICBjaGFuZ2VBbmltUmVxdWlyZVRvKGZhbHNlKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZXVwKCkge1xyXG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1tcImJ1dHRvbl9kaXNhYmxlZC5wbmdcIl07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbXCJidXR0b25faG92ZXIucG5nXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtCdXR0b259IGZyb20gXCIuL2J1dHRvblwiO1xyXG5pbXBvcnQge1JlZWx9IGZyb20gXCIuL3JlZWxcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbiAoe1xyXG4gICAgd2lkdGg6IDgwMCxcclxuICAgIGhlaWdodDogNTAwXHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XHJcblxyXG5QSVhJLkxvYWRlci5zaGFyZWRcclxuICAgIC5hZGQoXCIuL2ltYWdlcy9zaGVldC5qc29uXCIpXHJcbiAgICAubG9hZChzZXR1cCk7XHJcblxyXG5leHBvcnQgbGV0IHRleHR1cmVzLFxyXG4gICAgYmFja2dyb3VuZCxcclxuICAgIGJ1dHRvbixcclxuICAgIGdhbWVBcmVhLFxyXG4gICAgZ2FtZU1hc2s7XHJcblxyXG5leHBvcnQgY29uc3QgcG9zc2libGVTeW1TcmMgPSBbXHJcbiAgICBcImFnZW50LnBuZ1wiLFxyXG4gICAgXCJiYXRtYW4ucG5nXCIsXHJcbiAgICBcImNhcHRhaW4ucG5nXCIsXHJcbiAgICBcImRlYWRQb29sLnBuZ1wiLFxyXG4gICAgXCJnaXJsLnBuZ1wiLFxyXG4gICAgXCJodWxrLnBuZ1wiLFxyXG4gICAgXCJpcm9uTWFuLnBuZ1wiLFxyXG4gICAgXCJyb2JvdC5wbmdcIixcclxuICAgIFwic3BpZGVyVy5wbmdcIlxyXG5dO1xyXG5cclxuZXhwb3J0IGxldCBhbmltYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xyXG5leHBvcnQgbGV0IHJlbmRlckxvb3AgPSBbXTtcclxuZXhwb3J0IGNvbnN0IHJlZWxzID0gW107XHJcbmV4cG9ydCBjb25zdCBnYW1lU2l6ZSA9IHtcclxuICAgIHdpZHRoOiA4MDAsXHJcbiAgICBoZWlnaHQ6IDQwMCxcclxuICAgIHJvd3M6IDMsXHJcbiAgICByZWVsczogNVxyXG59O1xyXG5cclxuZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICB0ZXh0dXJlcyA9IFBJWEkuTG9hZGVyLnNoYXJlZC5yZXNvdXJjZXNbXCIuL2ltYWdlcy9zaGVldC5qc29uXCJdLnRleHR1cmVzO1xyXG5cclxuICAgIGJhY2tncm91bmQgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZXNbXCJiYWNrZ3JvdW5kLnBuZ1wiXSk7XHJcbiAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQoYmFja2dyb3VuZCk7XHJcblxyXG4gICAgZ2FtZUFyZWEgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuICAgIGdhbWVBcmVhLndpZHRoID0gZ2FtZVNpemUud2lkdGg7XHJcbiAgICBnYW1lQXJlYS5oZWlnaHQgPSBnYW1lU2l6ZS5oZWlnaHQ7XHJcblxyXG4gICAgZ2FtZU1hc2sgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgYXBwLnN0YWdlLmFkZENoaWxkKGdhbWVNYXNrKTtcclxuICAgIGdhbWVNYXNrLnBvc2l0aW9uLnNldCgwLDApO1xyXG4gICAgZ2FtZU1hc2subGluZVN0eWxlKDApO1xyXG5cclxuICAgIGdhbWVBcmVhLm1hc2sgPSBnYW1lTWFzaztcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZVNpemUucmVlbHM7IGkrKyl7XHJcbiAgICAgICAgcmVlbHMucHVzaChuZXcgUmVlbChnYW1lU2l6ZS53aWR0aC9nYW1lU2l6ZS5yZWVscyAqIGksMCxnYW1lU2l6ZS5yb3dzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLnN0YWdlLmFkZENoaWxkKGdhbWVBcmVhKTtcclxuICAgIGJ1dHRvbiA9IG5ldyBCdXR0b24oKTtcclxuXHJcbiAgICBhcHAudGlja2VyLmFkZChkZWx0YSA9PiBnYW1lTG9vcChkZWx0YSkpO1xyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gZ2FtZUxvb3AoKXtcclxuXHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVuZGVyTG9vcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgcmVuZGVyTG9vcFtpXS51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgZ2FtZU1hc2suY2xlYXIoKTtcclxuICAgIGdhbWVNYXNrLmJlZ2luRmlsbCgpO1xyXG4gICAgZ2FtZU1hc2suZHJhd1JlY3QoMCwgMCwgZ2FtZVNpemUud2lkdGgsIGdhbWVTaXplLmhlaWdodClcclxuXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgcmFuZCA9IE1hdGguZmxvb3IocmFuZCk7XHJcbiAgICByZXR1cm4gcmFuZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTcGluKEFkZFN5bWIpIHtcclxuICAgIHJlZWxzLmZvckVhY2goKHJlZWwpID0+IHtcclxuICAgICAgICByZWVsLnNwaW4oQWRkU3ltYik7XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQW5pbVJlcXVpcmVUbyAoYm9vbGVhbikge1xyXG4gICAgYW5pbWF0aW9uUmVxdWlyZWQgPSBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3Bpbk92ZXJGaWx0cmF0aW9uKCkge1xyXG4gICAgY2hhbmdlQW5pbVJlcXVpcmVUbyhmYWxzZSk7XHJcbiAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIHJlZWxzLmZvckVhY2goKHJlZWwpID0+IHtcclxuICAgICAgICByZWVsLnJlbW92ZVVzZWxlc3MoKTtcclxuICAgIH0pXHJcbn1cclxuXHJcbiIsImltcG9ydCB7Z2FtZVNpemUsIGdhbWVBcmVhLCBwb3NzaWJsZVN5bVNyYywgcmFuZG9tSW50LCByZW5kZXJMb29wLCBjaGFuZ2VBbmltUmVxdWlyZVRvfSBmcm9tIFwiLi9lbmdpbmVcIjtcclxuaW1wb3J0IHtTeW1ib2x9IGZyb20gXCIuL3N5bWJvbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZWwgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lcntcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHN5bWJvbHNOdW0pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBnYW1lU2l6ZS5oZWlnaHQvc3ltYm9sc051bTtcclxuICAgICAgICB0aGlzLnN5bWJvbHNBcnIgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRTeW1ib2xzKHN5bWJvbHNOdW0pO1xyXG5cclxuICAgICAgICByZW5kZXJMb29wLnB1c2godGhpcyk7XHJcbiAgICAgICAgZ2FtZUFyZWEuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3ltYm9scyhzeW1ib2xzTnVtLCB0b3AgPSAwKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN5bWJvbHNOdW07IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gcmFuZG9tSW50KDAsIHBvc3NpYmxlU3ltU3JjLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gbmV3IFN5bWJvbChwb3NzaWJsZVN5bVNyY1tpbmRleF0sIHRoaXMuc3RlcCk7XHJcbiAgICAgICAgICAgIHN5bWJvbC5wb3NpdGlvbi5zZXQoMCwgdGhpcy5zdGVwICogaSArIHRvcCAqKC10aGlzLnN0ZXApKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChzeW1ib2wpO1xyXG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNBcnIucHVzaChzeW1ib2wpO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNwaW4oc3ltYk51bSl7XHJcbiAgICAgICAgdGhpcy5hZGRTeW1ib2xzKHN5bWJOdW0sIHN5bWJOdW0pO1xyXG4gICAgICAgIGNoYW5nZUFuaW1SZXF1aXJlVG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ltYm9sc0Fyci5mb3JFYWNoKChzeW1ib2wpID0+IHtcclxuICAgICAgICAgICAgc3ltYm9sLnN5bWJvbHNPblRvcCA9IHN5bWJOdW07XHJcbiAgICAgICAgICAgIHN5bWJvbC5jdXJyZW50U3RlcCA9IHRoaXMuc3RlcDtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVVzZWxlc3MoKSB7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQXJyLmZvckVhY2goKHN5bWJvbCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzeW1ib2wueSA8IC01KXtcclxuICAgICAgICAgICAgICAgIHN5bWJvbC52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzeW1ib2wueSA+IGdhbWVTaXplLmhlaWdodCAtMSl7XHJcbiAgICAgICAgICAgICAgICBzeW1ib2wudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ltYm9sc0FyciA9IHRoaXMuc3ltYm9sc0Fyci5maWx0ZXIoIChzeW1ib2wpID0+IHN5bWJvbC52aXNpYmxlKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICB0aGlzLnN5bWJvbHNBcnIuZm9yRWFjaCgoc3ltYm9sKSA9PiB7XHJcbiAgICAgICAgICAgIHN5bWJvbC5zcGluQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCB7dGV4dHVyZXMsIGFuaW1hdGlvblJlcXVpcmVkLHNwaW5PdmVyRmlsdHJhdGlvbn0gZnJvbSBcIi4vZW5naW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ltYm9sIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlU3JjLCB3aWR0aCl7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZXNbdGV4dHVyZVNyY10pO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHRleHR1cmVTcmM7XHJcblxyXG4gICAgICAgIHRoaXMuc3ltYm9sc09uVG9wID0gMDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGVwID0gMDtcclxuICAgICAgICB0aGlzLmFuaW1hdGlvblN0ZXAgPSA4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzcGluQW5pbWF0aW9uKCkge1xyXG5cclxuICAgICAgICBpZih0aGlzLnN5bWJvbHNPblRvcCA+IDAgJiYgdGhpcy5jdXJyZW50U3RlcCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0ZXAgPCB0aGlzLmFuaW1hdGlvblN0ZXApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLmN1cnJlbnRTdGVwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNPblRvcC0tO1xyXG4gICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdGVwIC09IHRoaXMuYW5pbWF0aW9uU3RlcDtcclxuICAgICAgICAgICAgICAgIHRoaXMueSArPSB0aGlzLmFuaW1hdGlvblN0ZXA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zeW1ib2xzT25Ub3AgPiAwICYmIGFuaW1hdGlvblJlcXVpcmVkKXtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RlcCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBzcGluT3ZlckZpbHRyYXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==