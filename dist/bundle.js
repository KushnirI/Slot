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

    function Button(x, y, buttonTextures, callback) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, _engine.textures[buttonTextures.idle]));

        _this.idleTexture = buttonTextures.idle;
        _this.hoverTexture = buttonTextures.hover;
        _this.downTexture = buttonTextures.down;
        _this.disabledTexture = buttonTextures.disabled;

        _this.width = 100;
        _this.height = 100;
        _this.anchor.set(0.5);
        _this.position.set(x, y);
        _this.interactive = true;
        _this.disabled = false;

        _this.callback = callback;

        _this.setHitArea(65);

        _engine.app.stage.addChild(_this);
        return _this;
    }

    _createClass(Button, [{
        key: "mouseover",
        value: function mouseover() {
            this.texture = this.disabled ? _engine.textures[this.disabledTexture] : _engine.textures[this.hoverTexture];
        }
    }, {
        key: "mouseout",
        value: function mouseout() {
            this.texture = this.disabled ? _engine.textures[this.disabledTexture] : _engine.textures[this.idleTexture];
        }
    }, {
        key: "mousedown",
        value: function mousedown() {
            if (!_engine.animationRequired && !this.disabled) {
                this.texture = _engine.textures[this.downTexture];
                this.callback();
            } else {
                this.disabled = true;
                this.texture = _engine.textures[this.disabledTexture];
                (0, _engine.changeAnimRequireTo)(false);
            }
        }
    }, {
        key: "mouseup",
        value: function mouseup() {
            this.texture = this.disabled ? _engine.textures[this.disabledTexture] : _engine.textures[this.hoverTexture];
        }

        /**
         *
         * @param {number} radius hitArea radius
         */

    }, {
        key: "setHitArea",
        value: function setHitArea(radius) {
            this.hitArea = new PIXI.Circle(0, 0, radius);
        }
    }]);

    return Button;
}(PIXI.Sprite);

/***/ }),

/***/ "./javascript/customTween.js":
/*!***********************************!*\
  !*** ./javascript/customTween.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CustomTween = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

var _utils = __webpack_require__(/*! ./utils */ "./javascript/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomTween = exports.CustomTween = function () {
    function CustomTween(obj, propertyName, start, end, period, onComplete) {
        _classCallCheck(this, CustomTween);

        this.obj = obj;
        this.start = start;
        this.end = end;
        this.propertyName = propertyName;

        this.distance = this.end - this.start;
        this.numOfFrames = period / _utils.timeBetweenFrames;

        this.speed = this.distance / this.numOfFrames;
        _engine.renderLoop.push(this);
        this.updateRequired = false;
        this.onComplete = onComplete;
    }

    _createClass(CustomTween, [{
        key: "update",
        value: function update(delta) {
            if (this.updateRequired) {
                if (this.obj[this.propertyName] < this.end) {
                    this.obj[this.propertyName] += this.speed * delta;
                }
                if (this.obj[this.propertyName] >= this.end) {
                    this.obj[this.propertyName] = this.end;
                    this.updateRequired = false;
                    this.onComplete();
                }
            }
        }

        /**
         *
         * @param {number} start start point
         * @param {number} end end point
         */

    }, {
        key: "play",
        value: function play(start, end) {
            this.start = start;
            this.end = end;
            this.updateRequired = true;
        }
    }]);

    return CustomTween;
}();

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
exports.betLines = exports.gameSize = exports.renderLoop = exports.animationRequired = exports.possibleSymSrc = exports.winScreen = exports.reels = exports.button = exports.background = exports.textures = exports.app = undefined;
exports.changeAnimRequireTo = changeAnimRequireTo;

var _button = __webpack_require__(/*! ./button */ "./javascript/button.js");

var _reels = __webpack_require__(/*! ./reels */ "./javascript/reels.js");

var _utils = __webpack_require__(/*! ./utils */ "./javascript/utils.js");

var _winScreen = __webpack_require__(/*! ./winScreen */ "./javascript/winScreen.js");

var app = exports.app = new PIXI.Application({
    width: 800,
    height: 500
});

document.body.appendChild(app.view);

PIXI.Loader.shared.add("./images/sheet.json").load(setup);

var textures = exports.textures = void 0,
    background = exports.background = void 0,
    button = exports.button = void 0,
    reels = exports.reels = void 0,
    winScreen = exports.winScreen = void 0;

var possibleSymSrc = exports.possibleSymSrc = ["agent.png", "batman.png"];

var spinButtonSrc = {
    idle: "button_idle.png",
    hover: "button_hover.png",
    down: "button_down.png",
    disabled: "button_disabled.png"
};

var animationRequired = exports.animationRequired = false;
var renderLoop = exports.renderLoop = [];

var gameSize = exports.gameSize = {
    width: 800,
    height: 400,
    rows: 3,
    reels: 5
};

var betLines = exports.betLines = [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [0, 1, 2, 1, 0], [2, 1, 0, 1, 2]];

function setup() {
    exports.textures = textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    exports.background = background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    exports.reels = reels = new _reels.Reels();

    exports.button = button = new _button.Button(400, 450, spinButtonSrc, _utils.makeSpin);

    exports.winScreen = winScreen = new _winScreen.WinScreen(0, 0, gameSize.width, gameSize.height, 0x504f52);

    app.ticker.add(function (delta) {
        return gameLoop(delta);
    });
}

function gameLoop(delta) {
    for (var i = 0; i < renderLoop.length; i++) {
        renderLoop[i].update(delta);
    }
}

/**
 *
 * @param {boolean} boolean set animationRequired to true or false
 */
function changeAnimRequireTo(boolean) {
    exports.animationRequired = animationRequired = boolean;
}

/***/ }),

/***/ "./javascript/rectangle.js":
/*!*********************************!*\
  !*** ./javascript/rectangle.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Rectangle = exports.Rectangle = function (_PIXI$Graphics) {
    _inherits(Rectangle, _PIXI$Graphics);

    function Rectangle(x, y, width, height, color) {
        _classCallCheck(this, Rectangle);

        var _this = _possibleConstructorReturn(this, (Rectangle.__proto__ || Object.getPrototypeOf(Rectangle)).call(this));

        _this.lineStyle(1, 0x000000, 1);
        _this.beginFill(color);
        _this.drawRect(0, 0, width, height);
        _this.endFill();
        _this.position.set(x, y);
        return _this;
    }

    return Rectangle;
}(PIXI.Graphics);

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

var _utils = __webpack_require__(/*! ./utils */ "./javascript/utils.js");

var _symbol = __webpack_require__(/*! ./symbol */ "./javascript/symbol.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reel = exports.Reel = function (_PIXI$Container) {
    _inherits(Reel, _PIXI$Container);

    function Reel(x, y, symbolsNum, onComplete) {
        _classCallCheck(this, Reel);

        var _this = _possibleConstructorReturn(this, (Reel.__proto__ || Object.getPrototypeOf(Reel)).call(this));

        _this.position.set(x, y);
        _this.step = _engine.gameSize.height / symbolsNum;
        _this.symbols = [];

        _this.addSymbols(symbolsNum + 1);

        _engine.renderLoop.push(_this);
        _this.symbolsBeforeResult = 5;

        _this.symbolsCounter = 0;
        _this.onComplete = onComplete;
        return _this;
    }

    /**
     *
     * @param {number} symbolsNum required amount on symbols
     */


    _createClass(Reel, [{
        key: "addSymbols",
        value: function addSymbols(symbolsNum) {
            for (var i = 0; i < symbolsNum; i++) {

                var index = (0, _utils.randomInt)(0, _engine.possibleSymSrc.length - 1);
                var symbol = new _symbol.Symbol(_engine.possibleSymSrc[index], this.step, this.countIncrement.bind(this));
                symbol.position.set(0, this.step * i);
                this.addChild(symbol);
                this.symbols.push(symbol);
            }
        }
    }, {
        key: "spin",
        value: function spin() {
            var lastIndex = this.symbols.length - 1;
            var lastSymbol = this.symbols[lastIndex];
            var index = (0, _utils.randomInt)(0, _engine.possibleSymSrc.length - 1);

            lastSymbol.texture = _engine.textures[_engine.possibleSymSrc[index]];
            lastSymbol.type = _engine.possibleSymSrc[index];
            lastSymbol.position.set(0, -lastSymbol.height);

            this.symbols.unshift(this.symbols.pop());

            this.symbols.forEach(function (symbol) {
                symbol.makeSpin();
            });
        }
    }, {
        key: "update",
        value: function update() {

            if (this.symbolsCounter === this.symbols.length) {
                this.symbolsCounter = 0;
                this.symbolsBeforeResult--;
                if (this.symbolsBeforeResult > 0 && _engine.animationRequired) {
                    this.spin();
                } else {
                    this.onSpinOver();
                }
            }
        }
    }, {
        key: "countIncrement",
        value: function countIncrement() {
            this.symbolsCounter++;
        }
    }, {
        key: "onSpinOver",
        value: function onSpinOver() {
            (0, _engine.changeAnimRequireTo)(false);
            _engine.button.disabled = false;
            this.onComplete();
        }
    }]);

    return Reel;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/reels.js":
/*!*****************************!*\
  !*** ./javascript/reels.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Reels = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

var _reel = __webpack_require__(/*! ./reel */ "./javascript/reel.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// I guess this class is overloaded but I haven't found a solution how to handle win lines other way
var Reels = exports.Reels = function (_PIXI$Container) {
    _inherits(Reels, _PIXI$Container);

    function Reels() {
        _classCallCheck(this, Reels);

        var _this = _possibleConstructorReturn(this, (Reels.__proto__ || Object.getPrototypeOf(Reels)).call(this));

        _this.allReels = [];

        for (var i = 0; i < _engine.gameSize.reels; i++) {
            var reel = new _reel.Reel(_engine.gameSize.width / _engine.gameSize.reels * i, 0, _engine.gameSize.rows, _this.reelOnComplete.bind(_this));
            _this.allReels.push(reel);
            _this.addChild(reel);
        }

        _this.addMask();

        _this.reelsCounter = 0;
        _this.currentWinLines = [];

        _engine.renderLoop.push(_this);
        _engine.app.stage.addChild(_this);
        return _this;
    }

    /**
     *
     * @param {number} symbsBfResult amount of symbols before result
     */


    _createClass(Reels, [{
        key: "start",
        value: function start(symbsBfResult) {
            (0, _engine.changeAnimRequireTo)(true);
            this.spinReels(symbsBfResult);
        }

        /**
         *
         * @param {number} symbsBfResult amount of symbols before result
         */

    }, {
        key: "spinReels",
        value: function spinReels(symbsBfResult) {
            this.allReels.forEach(function (reel) {
                reel.spin(symbsBfResult);
                reel.symbolsBeforeResult = symbsBfResult;
            });
        }
    }, {
        key: "addMask",
        value: function addMask() {
            var reelsMask = new PIXI.Graphics();
            _engine.app.stage.addChild(reelsMask);
            reelsMask.position.set(0, 0);
            reelsMask.lineStyle(0);
            reelsMask.clear();

            reelsMask.beginFill();
            reelsMask.drawRect(0, 0, _engine.gameSize.width, _engine.gameSize.height);
            this.mask = reelsMask;
        }
    }, {
        key: "update",
        value: function update() {
            if (this.reelsCounter === this.allReels.length) {
                this.reelsCounter = 0;
                this.checkWinLines();
            }
        }
    }, {
        key: "checkWinLines",
        value: function checkWinLines() {
            var winPoints = 0;

            for (var i = 0; i < _engine.betLines.length; i++) {
                var currentLine = _engine.betLines[i];
                var symbsMatched = 1;

                var symbols = [];

                for (var j = 0; j < this.allReels.length; j++) {

                    if (this.allReels[j + 1] && this.allReels[j].symbols[currentLine[j]].type === this.allReels[j + 1].symbols[currentLine[j + 1]].type) {
                        symbsMatched += 1;
                        if (symbsMatched < 3) {
                            symbols.push(this.allReels[j].symbols[currentLine[j]]);
                            symbols.push(this.allReels[j + 1].symbols[currentLine[j + 1]]);
                        } else {
                            symbols.push(this.allReels[j + 1].symbols[currentLine[j + 1]]);
                        }
                    } else {
                        break;
                    }
                }

                if (symbsMatched > 2) {
                    var _currentWinLines;

                    (_currentWinLines = this.currentWinLines).push.apply(_currentWinLines, symbols);

                    symbols.forEach(function (symbol) {
                        symbol.makeScale();
                    });

                    if (symbsMatched === 3) {
                        // TODO add symbols cost param and multiply winnings on it
                        winPoints += 10;
                    }

                    if (symbsMatched === 4) {
                        winPoints += 30;
                    }

                    if (symbsMatched === 5) {
                        winPoints += 100;
                    }
                }

                symbsMatched = 1;
            }

            if (winPoints > 0) {
                // TODO create win constructor and make in visible here
                _engine.winScreen.showScreen(winPoints);
                winPoints = 0;
            }
        }
    }, {
        key: "reelOnComplete",
        value: function reelOnComplete() {
            this.reelsCounter++;
        }
    }, {
        key: "clearCurrentWinLines",
        value: function clearCurrentWinLines() {
            this.currentWinLines = [];
        }
    }]);

    return Reels;
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

var _customTween = __webpack_require__(/*! ./customTween */ "./javascript/customTween.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Symbol = function (_PIXI$Sprite) {
    _inherits(_Symbol, _PIXI$Sprite);

    function _Symbol(textureSrc, width, onComplete) {
        _classCallCheck(this, _Symbol);

        var _this = _possibleConstructorReturn(this, (_Symbol.__proto__ || Object.getPrototypeOf(_Symbol)).call(this, _engine.textures[textureSrc]));

        _this.width = width;
        _this.height = width;
        _this.type = textureSrc;

        _this.speed = 400;
        _this.onComplete = onComplete;

        _this.twin = new _customTween.CustomTween(_this, "y", _this.y, _this.y + _this.height, _this.speed, _this.onComplete);

        _this.isScaled = false;
        return _this;
    }

    _createClass(_Symbol, [{
        key: "makeSpin",
        value: function makeSpin() {
            this.twin.play(this.y, this.y + this.height);
        }
    }, {
        key: "makeScale",
        value: function makeScale() {
            if (!this.isScaled) {
                this.scale.set(1.2);
                this.isScaled = true;
                /* I've got issues with changing size, I would rather change alpha property
                 for example 0.8 for start and 1 for win lines */
            }
        }
    }, {
        key: "removeScale",
        value: function removeScale() {
            if (this.isScaled) {
                this.scale.set(1);
                this.isScaled = false;
            }
        }
    }]);

    return _Symbol;
}(PIXI.Sprite);

exports.Symbol = _Symbol;

/***/ }),

/***/ "./javascript/utils.js":
/*!*****************************!*\
  !*** ./javascript/utils.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timeBetweenFrames = undefined;
exports.randomInt = randomInt;
exports.makeSpin = makeSpin;

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

function randomInt(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

//I'm not sure if this function should be here, but I removed it from enjine
/**
 *
 * @param {number} addSymb amount of added symbols before the spin end
 */
function makeSpin() {
    var addSymb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

    _engine.winScreen.hideScreen();
    _engine.reels.currentWinLines.forEach(function (symbol) {
        symbol.removeScale();
    });
    _engine.reels.clearCurrentWinLines();

    _engine.reels.start(addSymb);
}

var timeBetweenFrames = exports.timeBetweenFrames = 16.67;

/***/ }),

/***/ "./javascript/winScreen.js":
/*!*********************************!*\
  !*** ./javascript/winScreen.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WinScreen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

var _rectangle = __webpack_require__(/*! ./rectangle */ "./javascript/rectangle.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WinScreen = exports.WinScreen = function (_PIXI$Graphics) {
    _inherits(WinScreen, _PIXI$Graphics);

    function WinScreen(x, y, width, height, color) {
        _classCallCheck(this, WinScreen);

        var _this = _possibleConstructorReturn(this, (WinScreen.__proto__ || Object.getPrototypeOf(WinScreen)).call(this));

        _this.screen = new _rectangle.Rectangle(x, y, width, height, color);
        _this.message = new PIXI.Text("You won");
        _this.message.style = {
            fontFamily: "Arial",
            fontSize: 36,
            fill: "white"
        };
        _this.message.position.set(width / 2 - 130, height / 2 - 36);

        _this.addChild(_this.screen);
        _this.addChild(_this.message);
        _this.visible = false;
        _this.alpha = 0.6;

        _engine.renderLoop.push(_this);
        _engine.app.stage.addChild(_this);
        return _this;
    }

    _createClass(WinScreen, [{
        key: "showScreen",
        value: function showScreen(winAmount) {
            var winMsg = "You won " + winAmount + " !!!!!";
            this.visible = true;
            this.message.text = winMsg;
        }
    }, {
        key: "hideScreen",
        value: function hideScreen() {
            this.visible = false;
        }
    }, {
        key: "update",
        value: function update() {
            //Stub
        }
    }]);

    return WinScreen;
}(PIXI.Graphics);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9jdXN0b21Ud2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3JlZWwuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWVscy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3V0aWxzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvd2luU2NyZWVuLmpzIl0sIm5hbWVzIjpbIkJ1dHRvbiIsIngiLCJ5IiwiYnV0dG9uVGV4dHVyZXMiLCJjYWxsYmFjayIsInRleHR1cmVzIiwiaWRsZSIsImlkbGVUZXh0dXJlIiwiaG92ZXJUZXh0dXJlIiwiaG92ZXIiLCJkb3duVGV4dHVyZSIsImRvd24iLCJkaXNhYmxlZFRleHR1cmUiLCJkaXNhYmxlZCIsIndpZHRoIiwiaGVpZ2h0IiwiYW5jaG9yIiwic2V0IiwicG9zaXRpb24iLCJpbnRlcmFjdGl2ZSIsInNldEhpdEFyZWEiLCJhcHAiLCJzdGFnZSIsImFkZENoaWxkIiwidGV4dHVyZSIsImFuaW1hdGlvblJlcXVpcmVkIiwicmFkaXVzIiwiaGl0QXJlYSIsIlBJWEkiLCJDaXJjbGUiLCJTcHJpdGUiLCJDdXN0b21Ud2VlbiIsIm9iaiIsInByb3BlcnR5TmFtZSIsInN0YXJ0IiwiZW5kIiwicGVyaW9kIiwib25Db21wbGV0ZSIsImRpc3RhbmNlIiwibnVtT2ZGcmFtZXMiLCJ0aW1lQmV0d2VlbkZyYW1lcyIsInNwZWVkIiwicmVuZGVyTG9vcCIsInB1c2giLCJ1cGRhdGVSZXF1aXJlZCIsImRlbHRhIiwiY2hhbmdlQW5pbVJlcXVpcmVUbyIsIkFwcGxpY2F0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2aWV3IiwiTG9hZGVyIiwic2hhcmVkIiwiYWRkIiwibG9hZCIsInNldHVwIiwiYmFja2dyb3VuZCIsImJ1dHRvbiIsInJlZWxzIiwid2luU2NyZWVuIiwicG9zc2libGVTeW1TcmMiLCJzcGluQnV0dG9uU3JjIiwiZ2FtZVNpemUiLCJyb3dzIiwiYmV0TGluZXMiLCJyZXNvdXJjZXMiLCJSZWVscyIsIm1ha2VTcGluIiwiV2luU2NyZWVuIiwidGlja2VyIiwiZ2FtZUxvb3AiLCJpIiwibGVuZ3RoIiwidXBkYXRlIiwiYm9vbGVhbiIsIlJlY3RhbmdsZSIsImNvbG9yIiwibGluZVN0eWxlIiwiYmVnaW5GaWxsIiwiZHJhd1JlY3QiLCJlbmRGaWxsIiwiR3JhcGhpY3MiLCJSZWVsIiwic3ltYm9sc051bSIsInN0ZXAiLCJzeW1ib2xzIiwiYWRkU3ltYm9scyIsInN5bWJvbHNCZWZvcmVSZXN1bHQiLCJzeW1ib2xzQ291bnRlciIsImluZGV4Iiwic3ltYm9sIiwiU3ltYm9sIiwiY291bnRJbmNyZW1lbnQiLCJiaW5kIiwibGFzdEluZGV4IiwibGFzdFN5bWJvbCIsInR5cGUiLCJ1bnNoaWZ0IiwicG9wIiwiZm9yRWFjaCIsInNwaW4iLCJvblNwaW5PdmVyIiwiQ29udGFpbmVyIiwiYWxsUmVlbHMiLCJyZWVsIiwicmVlbE9uQ29tcGxldGUiLCJhZGRNYXNrIiwicmVlbHNDb3VudGVyIiwiY3VycmVudFdpbkxpbmVzIiwic3ltYnNCZlJlc3VsdCIsInNwaW5SZWVscyIsInJlZWxzTWFzayIsImNsZWFyIiwibWFzayIsImNoZWNrV2luTGluZXMiLCJ3aW5Qb2ludHMiLCJjdXJyZW50TGluZSIsInN5bWJzTWF0Y2hlZCIsImoiLCJtYWtlU2NhbGUiLCJzaG93U2NyZWVuIiwidGV4dHVyZVNyYyIsInR3aW4iLCJpc1NjYWxlZCIsInBsYXkiLCJzY2FsZSIsInJhbmRvbUludCIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJhZGRTeW1iIiwiaGlkZVNjcmVlbiIsInJlbW92ZVNjYWxlIiwiY2xlYXJDdXJyZW50V2luTGluZXMiLCJzY3JlZW4iLCJtZXNzYWdlIiwiVGV4dCIsInN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZmlsbCIsInZpc2libGUiLCJhbHBoYSIsIndpbkFtb3VudCIsIndpbk1zZyIsInRleHQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7O0lBRWFBLE0sV0FBQUEsTTs7O0FBQ1Qsb0JBQVlDLENBQVosRUFBZUMsQ0FBZixFQUFrQkMsY0FBbEIsRUFBa0NDLFFBQWxDLEVBQTJDO0FBQUE7O0FBQUEsb0hBQ2pDQyxpQkFBU0YsZUFBZUcsSUFBeEIsQ0FEaUM7O0FBR3ZDLGNBQUtDLFdBQUwsR0FBbUJKLGVBQWVHLElBQWxDO0FBQ0EsY0FBS0UsWUFBTCxHQUFvQkws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S0FBZjtBQUNIOzs7aUNBRU87QUFDSjtBQUNIOzs7O0VBbEMwQnJILEtBQUtzRCxRIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vamF2YXNjcmlwdC9lbmdpbmUuanNcIik7XG4iLCJpbXBvcnQge3RleHR1cmVzLCBhcHAsIGFuaW1hdGlvblJlcXVpcmVkLCBjaGFuZ2VBbmltUmVxdWlyZVRvfSBmcm9tIFwiLi9lbmdpbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBQSVhJLlNwcml0ZXtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGJ1dHRvblRleHR1cmVzLCBjYWxsYmFjayl7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZXNbYnV0dG9uVGV4dHVyZXMuaWRsZV0pO1xyXG5cclxuICAgICAgICB0aGlzLmlkbGVUZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuaWRsZTtcclxuICAgICAgICB0aGlzLmhvdmVyVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmhvdmVyO1xyXG4gICAgICAgIHRoaXMuZG93blRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5kb3duO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWRUZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuZGlzYWJsZWQ7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SGl0QXJlYSg2NSk7XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbW91c2VvdmVyKCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZGlzYWJsZWQgPyB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV0gOiB0ZXh0dXJlc1t0aGlzLmhvdmVyVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VvdXQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5kaXNhYmxlZCA/IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXSA6IHRleHR1cmVzW3RoaXMuaWRsZVRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlZG93bigpIHtcclxuICAgICAgICBpZighYW5pbWF0aW9uUmVxdWlyZWQgJiYgICF0aGlzLmRpc2FibGVkKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5kb3duVGV4dHVyZV07XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdO1xyXG4gICAgICAgICAgICBjaGFuZ2VBbmltUmVxdWlyZVRvKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2V1cCgpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmRpc2FibGVkID8gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdIDogdGV4dHVyZXNbdGhpcy5ob3ZlclRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgaGl0QXJlYSByYWRpdXNcclxuICAgICAqL1xyXG4gICAgc2V0SGl0QXJlYSAocmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuQ2lyY2xlKDAsIDAsIHJhZGl1cyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3JlbmRlckxvb3B9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5pbXBvcnQge3RpbWVCZXR3ZWVuRnJhbWVzfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbVR3ZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgcHJvcGVydHlOYW1lLCBzdGFydCwgZW5kLCBwZXJpb2QsIG9uQ29tcGxldGUpe1xyXG5cclxuICAgICAgICB0aGlzLm9iaiA9IG9iajtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmVuZCAtIHRoaXMuc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5udW1PZkZyYW1lcyA9IHBlcmlvZC90aW1lQmV0d2VlbkZyYW1lcztcclxuXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuZGlzdGFuY2UvdGhpcy5udW1PZkZyYW1lcztcclxuICAgICAgICByZW5kZXJMb29wLnB1c2godGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IG9uQ29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkZWx0YSl7XHJcbiAgICAgICAgaWYodGhpcy51cGRhdGVSZXF1aXJlZCl7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPCB0aGlzLmVuZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPj0gdGhpcy5lbmQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA9IHRoaXMuZW5kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBzdGFydCBwb2ludFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCBlbmQgcG9pbnRcclxuICAgICAqL1xyXG4gICAgcGxheShzdGFydCwgZW5kKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi9idXR0b25cIjtcclxuaW1wb3J0IHtSZWVsc30gZnJvbSBcIi4vcmVlbHNcIjtcclxuaW1wb3J0IHttYWtlU3Bpbn0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHtXaW5TY3JlZW59IGZyb20gXCIuL3dpblNjcmVlblwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcCA9IG5ldyBQSVhJLkFwcGxpY2F0aW9uICh7XHJcbiAgICB3aWR0aDogODAwLFxyXG4gICAgaGVpZ2h0OiA1MDBcclxufSk7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC52aWV3KTtcclxuXHJcblBJWEkuTG9hZGVyLnNoYXJlZFxyXG4gICAgLmFkZChcIi4vaW1hZ2VzL3NoZWV0Lmpzb25cIilcclxuICAgIC5sb2FkKHNldHVwKTtcclxuXHJcbmV4cG9ydCBsZXQgdGV4dHVyZXMsXHJcbiAgICBiYWNrZ3JvdW5kLFxyXG4gICAgYnV0dG9uLFxyXG4gICAgcmVlbHMsXHJcbiAgICB3aW5TY3JlZW47XHJcblxyXG5leHBvcnQgY29uc3QgcG9zc2libGVTeW1TcmMgPSBbXHJcbiAgICBcImFnZW50LnBuZ1wiLFxyXG4gICAgXCJiYXRtYW4ucG5nXCIsXHJcbiAgIC8qIFwiY2FwdGFpbi5wbmdcIixcclxuICAgIFwiZGVhZFBvb2wucG5nXCIsXHJcbiAgICBcImdpcmwucG5nXCIsXHJcbiAgICBcImh1bGsucG5nXCIsXHJcbiAgICBcImlyb25NYW4ucG5nXCIsXHJcbiAgICBcInJvYm90LnBuZ1wiLFxyXG4gICAgXCJzcGlkZXJXLnBuZ1wiKi9cclxuXTtcclxuXHJcbmNvbnN0IHNwaW5CdXR0b25TcmMgPSB7XHJcbiAgICBpZGxlIDogXCJidXR0b25faWRsZS5wbmdcIixcclxuICAgIGhvdmVyOiBcImJ1dHRvbl9ob3Zlci5wbmdcIixcclxuICAgIGRvd24gOiBcImJ1dHRvbl9kb3duLnBuZ1wiLFxyXG4gICAgZGlzYWJsZWQgOiBcImJ1dHRvbl9kaXNhYmxlZC5wbmdcIlxyXG59O1xyXG5cclxuZXhwb3J0IGxldCBhbmltYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xyXG5leHBvcnQgbGV0IHJlbmRlckxvb3AgPSBbXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnYW1lU2l6ZSA9IHtcclxuICAgIHdpZHRoOiA4MDAsXHJcbiAgICBoZWlnaHQ6IDQwMCxcclxuICAgIHJvd3M6IDMsXHJcbiAgICByZWVsczogNVxyXG59O1xyXG5cclxuZXhwb3J0IGxldCBiZXRMaW5lcyA9IFtcclxuICAgIFswLDAsMCwwLDBdLFxyXG4gICAgWzEsMSwxLDEsMV0sXHJcbiAgICBbMiwyLDIsMiwyXSxcclxuICAgIFswLDEsMiwxLDBdLFxyXG4gICAgWzIsMSwwLDEsMl1cclxuXTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgdGV4dHVyZXMgPSBQSVhJLkxvYWRlci5zaGFyZWQucmVzb3VyY2VzW1wiLi9pbWFnZXMvc2hlZXQuanNvblwiXS50ZXh0dXJlcztcclxuXHJcbiAgICBiYWNrZ3JvdW5kID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmVzW1wiYmFja2dyb3VuZC5wbmdcIl0pO1xyXG4gICAgYXBwLnN0YWdlLmFkZENoaWxkKGJhY2tncm91bmQpO1xyXG5cclxuICAgIHJlZWxzID0gbmV3IFJlZWxzKCk7XHJcblxyXG4gICAgYnV0dG9uID0gbmV3IEJ1dHRvbig0MDAsIDQ1MCwgc3BpbkJ1dHRvblNyYywgbWFrZVNwaW4pO1xyXG5cclxuICAgIHdpblNjcmVlbiA9IG5ldyBXaW5TY3JlZW4oMCwwLCBnYW1lU2l6ZS53aWR0aCxnYW1lU2l6ZS5oZWlnaHQsIDB4NTA0ZjUyKTtcclxuXHJcblxyXG4gICAgYXBwLnRpY2tlci5hZGQoZGVsdGEgPT4gZ2FtZUxvb3AoZGVsdGEpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FtZUxvb3AoZGVsdGEpe1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHJlbmRlckxvb3AubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHJlbmRlckxvb3BbaV0udXBkYXRlKGRlbHRhKTtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gYm9vbGVhbiBzZXQgYW5pbWF0aW9uUmVxdWlyZWQgdG8gdHJ1ZSBvciBmYWxzZVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFuaW1SZXF1aXJlVG8gKGJvb2xlYW4pIHtcclxuICAgIGFuaW1hdGlvblJlcXVpcmVkID0gYm9vbGVhbjtcclxufVxyXG5cclxuXHJcblxyXG4iLCJleHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgUElYSS5HcmFwaGljcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubGluZVN0eWxlKDEsIDB4MDAwMDAwLCAxKTtcclxuICAgICAgICB0aGlzLmJlZ2luRmlsbChjb2xvcik7XHJcbiAgICAgICAgdGhpcy5kcmF3UmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7Z2FtZVNpemUsIHBvc3NpYmxlU3ltU3JjLCByZW5kZXJMb29wLCB0ZXh0dXJlcywgYW5pbWF0aW9uUmVxdWlyZWQsIGNoYW5nZUFuaW1SZXF1aXJlVG8sIGJ1dHRvbn0gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7cmFuZG9tSW50fSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQge1N5bWJvbH0gZnJvbSBcIi4vc3ltYm9sXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVlbCBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgc3ltYm9sc051bSwgb25Db21wbGV0ZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IGdhbWVTaXplLmhlaWdodC9zeW1ib2xzTnVtO1xyXG4gICAgICAgIHRoaXMuc3ltYm9scyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFN5bWJvbHMoc3ltYm9sc051bSArIDEpO1xyXG5cclxuICAgICAgICByZW5kZXJMb29wLnB1c2godGhpcyk7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID0gNTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeW1ib2xzTnVtIHJlcXVpcmVkIGFtb3VudCBvbiBzeW1ib2xzXHJcbiAgICAgKi9cclxuICAgIGFkZFN5bWJvbHMoc3ltYm9sc051bSkge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzeW1ib2xzTnVtOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHJhbmRvbUludCgwLCBwb3NzaWJsZVN5bVNyYy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgbGV0IHN5bWJvbCA9IG5ldyBTeW1ib2wocG9zc2libGVTeW1TcmNbaW5kZXhdLCB0aGlzLnN0ZXAsIHRoaXMuY291bnRJbmNyZW1lbnQuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgICAgIHN5bWJvbC5wb3NpdGlvbi5zZXQoMCwgdGhpcy5zdGVwICogaSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3ltYm9sKTtcclxuICAgICAgICAgICAgdGhpcy5zeW1ib2xzLnB1c2goc3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3Bpbigpe1xyXG4gICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLnN5bWJvbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICBsZXQgbGFzdFN5bWJvbCA9IHRoaXMuc3ltYm9sc1tsYXN0SW5kZXhdO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHJhbmRvbUludCgwLCBwb3NzaWJsZVN5bVNyYy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgbGFzdFN5bWJvbC50ZXh0dXJlID0gdGV4dHVyZXNbcG9zc2libGVTeW1TcmNbaW5kZXhdXTtcclxuICAgICAgICBsYXN0U3ltYm9sLnR5cGUgPSBwb3NzaWJsZVN5bVNyY1tpbmRleF07XHJcbiAgICAgICAgbGFzdFN5bWJvbC5wb3NpdGlvbi5zZXQoMCwgLWxhc3RTeW1ib2wuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzLnVuc2hpZnQodGhpcy5zeW1ib2xzLnBvcCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzLmZvckVhY2goKHN5bWJvbCkgPT4ge1xyXG4gICAgICAgICAgICBzeW1ib2wubWFrZVNwaW4oKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnN5bWJvbHNDb3VudGVyID09PSB0aGlzLnN5bWJvbHMubGVuZ3RoKXtcclxuICAgICAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlciA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdC0tO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID4gMCAmJiBhbmltYXRpb25SZXF1aXJlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGluKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU3Bpbk92ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb3VudEluY3JlbWVudCgpIHtcclxuICAgICAgICB0aGlzLnN5bWJvbHNDb3VudGVyKys7XHJcbiAgICB9XHJcblxyXG4gICAgb25TcGluT3ZlcigpIHtcclxuICAgICAgICBjaGFuZ2VBbmltUmVxdWlyZVRvKGZhbHNlKTtcclxuICAgICAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge2dhbWVTaXplLCBhcHAsIGNoYW5nZUFuaW1SZXF1aXJlVG8sIGJldExpbmVzLCByZW5kZXJMb29wLCB3aW5TY3JlZW59IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5pbXBvcnQge1JlZWx9IGZyb20gXCIuL3JlZWxcIjtcclxuXHJcbi8vIEkgZ3Vlc3MgdGhpcyBjbGFzcyBpcyBvdmVybG9hZGVkIGJ1dCBJIGhhdmVuJ3QgZm91bmQgYSBzb2x1dGlvbiBob3cgdG8gaGFuZGxlIHdpbiBsaW5lcyBvdGhlciB3YXlcclxuZXhwb3J0IGNsYXNzIFJlZWxzIGV4dGVuZHMgUElYSS5Db250YWluZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmFsbFJlZWxzID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lU2l6ZS5yZWVsczsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHJlZWwgPSBuZXcgUmVlbChnYW1lU2l6ZS53aWR0aC9nYW1lU2l6ZS5yZWVscyAqIGksMCxnYW1lU2l6ZS5yb3dzLCB0aGlzLnJlZWxPbkNvbXBsZXRlLmJpbmQodGhpcykpO1xyXG4gICAgICAgICAgICB0aGlzLmFsbFJlZWxzLnB1c2gocmVlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQocmVlbClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWRkTWFzaygpO1xyXG5cclxuICAgICAgICB0aGlzLnJlZWxzQ291bnRlciA9IDA7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2luTGluZXMgPSBbXTtcclxuXHJcbiAgICAgICAgcmVuZGVyTG9vcC5wdXNoKHRoaXMpO1xyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ltYnNCZlJlc3VsdCBhbW91bnQgb2Ygc3ltYm9scyBiZWZvcmUgcmVzdWx0XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KHN5bWJzQmZSZXN1bHQpIHtcclxuICAgICAgICBjaGFuZ2VBbmltUmVxdWlyZVRvKHRydWUpO1xyXG4gICAgICAgIHRoaXMuc3BpblJlZWxzKHN5bWJzQmZSZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeW1ic0JmUmVzdWx0IGFtb3VudCBvZiBzeW1ib2xzIGJlZm9yZSByZXN1bHRcclxuICAgICAqL1xyXG4gICAgc3BpblJlZWxzIChzeW1ic0JmUmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5hbGxSZWVscy5mb3JFYWNoKCByZWVsID0+IHtcclxuICAgICAgICAgICAgcmVlbC5zcGluKHN5bWJzQmZSZXN1bHQpO1xyXG4gICAgICAgICAgICByZWVsLnN5bWJvbHNCZWZvcmVSZXN1bHQgPSBzeW1ic0JmUmVzdWx0O1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgIGFkZE1hc2soKSB7XHJcbiAgICAgICAgbGV0IHJlZWxzTWFzayA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHJlZWxzTWFzayk7XHJcbiAgICAgICAgcmVlbHNNYXNrLnBvc2l0aW9uLnNldCgwLDApO1xyXG4gICAgICAgIHJlZWxzTWFzay5saW5lU3R5bGUoMCk7XHJcbiAgICAgICAgcmVlbHNNYXNrLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIHJlZWxzTWFzay5iZWdpbkZpbGwoKTtcclxuICAgICAgICByZWVsc01hc2suZHJhd1JlY3QoMCwgMCwgZ2FtZVNpemUud2lkdGgsIGdhbWVTaXplLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5tYXNrID0gcmVlbHNNYXNrO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5yZWVsc0NvdW50ZXIgPT09IHRoaXMuYWxsUmVlbHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVlbHNDb3VudGVyID0gMDtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1dpbkxpbmVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrV2luTGluZXMgKCl7XHJcbiAgICAgICAgbGV0IHdpblBvaW50cyA9IDA7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmV0TGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRMaW5lICA9IGJldExpbmVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgc3ltYnNNYXRjaGVkID0gMTtcclxuXHJcbiAgICAgICAgICAgIGxldCBzeW1ib2xzID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5hbGxSZWVscy5sZW5ndGg7IGorKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLmFsbFJlZWxzW2ogKyAxXSAmJiB0aGlzLmFsbFJlZWxzW2pdLnN5bWJvbHNbY3VycmVudExpbmVbal1dLnR5cGUgPT09IHRoaXMuYWxsUmVlbHNbaiArIDFdLnN5bWJvbHNbY3VycmVudExpbmVbaisxXV0udHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJzTWF0Y2hlZCArPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJzTWF0Y2hlZCA8IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2godGhpcy5hbGxSZWVsc1tqXS5zeW1ib2xzW2N1cnJlbnRMaW5lW2pdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh0aGlzLmFsbFJlZWxzW2orMV0uc3ltYm9sc1tjdXJyZW50TGluZVtqKzFdXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHRoaXMuYWxsUmVlbHNbaisxXS5zeW1ib2xzW2N1cnJlbnRMaW5lW2orMV1dKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN5bWJzTWF0Y2hlZCA+IDIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRXaW5MaW5lcy5wdXNoKC4uLnN5bWJvbHMpO1xyXG5cclxuICAgICAgICAgICAgICAgIHN5bWJvbHMuZm9yRWFjaCggc3ltYm9sID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzeW1ib2wubWFrZVNjYWxlKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzeW1ic01hdGNoZWQgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gYWRkIHN5bWJvbHMgY29zdCBwYXJhbSBhbmQgbXVsdGlwbHkgd2lubmluZ3Mgb24gaXRcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc3ltYnNNYXRjaGVkID09PSA0KXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMzA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc3ltYnNNYXRjaGVkID09PSA1KXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzeW1ic01hdGNoZWQgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpblBvaW50cyA+IDApIHtcclxuICAgICAgICAgICAgLy8gVE9ETyBjcmVhdGUgd2luIGNvbnN0cnVjdG9yIGFuZCBtYWtlIGluIHZpc2libGUgaGVyZVxyXG4gICAgICAgICAgICB3aW5TY3JlZW4uc2hvd1NjcmVlbih3aW5Qb2ludHMpO1xyXG4gICAgICAgICAgICB3aW5Qb2ludHMgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWVsT25Db21wbGV0ZSAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWVsc0NvdW50ZXIrKztcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckN1cnJlbnRXaW5MaW5lcyAoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2luTGluZXMgPSBbXTtcclxuICAgIH1cclxufSIsImltcG9ydCB7dGV4dHVyZXN9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5pbXBvcnQge0N1c3RvbVR3ZWVufSBmcm9tIFwiLi9jdXN0b21Ud2VlblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN5bWJvbCBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZVNyYywgd2lkdGgsIG9uQ29tcGxldGUpe1xyXG4gICAgICAgIHN1cGVyKHRleHR1cmVzW3RleHR1cmVTcmNdKTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdGV4dHVyZVNyYztcclxuXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDQwMDtcclxuICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlO1xyXG5cclxuICAgICAgICB0aGlzLnR3aW4gPSBuZXcgQ3VzdG9tVHdlZW4odGhpcywgXCJ5XCIsIHRoaXMueSwgdGhpcy55ICsgdGhpcy5oZWlnaHQsIHRoaXMuc3BlZWQsICB0aGlzLm9uQ29tcGxldGUpO1xyXG5cclxuICAgICAgICB0aGlzLmlzU2NhbGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVNwaW4gKCkge1xyXG4gICAgICAgIHRoaXMudHdpbi5wbGF5KHRoaXMueSwgdGhpcy55ICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTY2FsZSAoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaXNTY2FsZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnNjYWxlLnNldCgxLjIpO1xyXG4gICAgICAgICAgICB0aGlzLmlzU2NhbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAvKiBJJ3ZlIGdvdCBpc3N1ZXMgd2l0aCBjaGFuZ2luZyBzaXplLCBJIHdvdWxkIHJhdGhlciBjaGFuZ2UgYWxwaGEgcHJvcGVydHlcclxuICAgICAgICAgICAgZm9yIGV4YW1wbGUgMC44IGZvciBzdGFydCBhbmQgMSBmb3Igd2luIGxpbmVzICovXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVTY2FsZSgpIHtcclxuICAgICAgICBpZih0aGlzLmlzU2NhbGVkKXtcclxuICAgICAgICAgICAgdGhpcy5zY2FsZS5zZXQoMSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNTY2FsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3JlZWxzLCB3aW5TY3JlZW59IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgcmFuZCA9IE1hdGguZmxvb3IocmFuZCk7XHJcbiAgICByZXR1cm4gcmFuZDtcclxufVxyXG5cclxuLy9JJ20gbm90IHN1cmUgaWYgdGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgaGVyZSwgYnV0IEkgcmVtb3ZlZCBpdCBmcm9tIGVuamluZVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IGFkZFN5bWIgYW1vdW50IG9mIGFkZGVkIHN5bWJvbHMgYmVmb3JlIHRoZSBzcGluIGVuZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTcGluKGFkZFN5bWIgPSA1KSB7XHJcbiAgICB3aW5TY3JlZW4uaGlkZVNjcmVlbigpO1xyXG4gICAgcmVlbHMuY3VycmVudFdpbkxpbmVzLmZvckVhY2goIHN5bWJvbCA9PiB7XHJcbiAgICAgICAgc3ltYm9sLnJlbW92ZVNjYWxlKCk7XHJcbiAgICB9KTtcclxuICAgIHJlZWxzLmNsZWFyQ3VycmVudFdpbkxpbmVzKCk7XHJcblxyXG4gICAgcmVlbHMuc3RhcnQoYWRkU3ltYik7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lQmV0d2VlbkZyYW1lcyA9IDE2LjY3OyIsImltcG9ydCB7cmVuZGVyTG9vcCwgYXBwfSBmcm9tIFwiLi9lbmdpbmVcIjtcclxuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3JlY3RhbmdsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpblNjcmVlbiBleHRlbmRzIFBJWEkuR3JhcGhpY3N7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbmV3IFBJWEkuVGV4dChcIllvdSB3b25cIik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnN0eWxlID0ge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UucG9zaXRpb24uc2V0KHdpZHRoLzIgLSAxMzAsIGhlaWdodC8yIC0gMzYgKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNjcmVlbik7XHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjY7XHJcblxyXG4gICAgICAgIHJlbmRlckxvb3AucHVzaCh0aGlzKTtcclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBzaG93U2NyZWVuICh3aW5BbW91bnQpe1xyXG4gICAgICAgIGxldCB3aW5Nc2cgPSBcIllvdSB3b24gXCIgKyB3aW5BbW91bnQgKyBcIiAhISEhIVwiO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnRleHQgPSB3aW5Nc2c7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZVNjcmVlbiAoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCl7XHJcbiAgICAgICAgLy9TdHViXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9