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

        _this.setHitArea(125);

        app.stage.addChild(_this);
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
            if (this.disabled) {
                this.texture = _engine.textures[this.disabledTexture];
            } else {
                this.texture = _engine.textures[this.downTexture];
                this.callback();
            }
        }
    }, {
        key: "mouseup",
        value: function mouseup() {
            this.texture = this.disabled ? _engine.textures[this.disabledTexture] : _engine.textures[this.hoverTexture];
        }
    }, {
        key: "enable",
        value: function enable() {
            this.disabled = false;
        }
    }, {
        key: "disable",
        value: function disable() {
            this.disabled = true;
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
    function CustomTween(obj, propertyName, start, end, period) {
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
    }

    /**
     * on each frame evenly change required param, from the start point to the end, for a set period of time
     * @param {number} delta eliminates delays between frames
     */


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
                    // renderLoop.splice(renderLoop.indexOf(this), 1);
                    this.onComplete();
                }
            }
        }

        /**
         *
         * @param {number} start start point
         * @param {number} end end point
         * @param {function} onComplete callback function
         */

    }, {
        key: "play",
        value: function play(start, end, onComplete) {
            this.start = start;
            this.end = end;
            // renderLoop.push(this);
            this.onComplete = onComplete;
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
exports.animationRequired = exports.renderLoop = exports.betSize = exports.winScreen = exports.reels = exports.button = exports.background = exports.textures = undefined;
exports.changeAnimRequireTo = changeAnimRequireTo;

var _button = __webpack_require__(/*! ./button */ "./javascript/button.js");

var _reels = __webpack_require__(/*! ./reels */ "./javascript/reels.js");

var _utils = __webpack_require__(/*! ./utils */ "./javascript/utils.js");

var _winScreen = __webpack_require__(/*! ./winScreen */ "./javascript/winScreen.js");

var _selector = __webpack_require__(/*! ./selector */ "./javascript/selector.js");

document.body.appendChild(app.view);

PIXI.Loader.shared.add("./images/sheet.json").load(setup);

var textures = exports.textures = void 0,
    background = exports.background = void 0,
    button = exports.button = void 0,
    reels = exports.reels = void 0,
    winScreen = exports.winScreen = void 0,
    betSize = exports.betSize = void 0;

var renderLoop = exports.renderLoop = [];
var animationRequired = exports.animationRequired = false;

function setup() {
    exports.textures = textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    exports.background = background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    exports.reels = reels = new _reels.Reels();
    exports.button = button = new _button.Button(400, 450, spinButtonSrc, _utils.makeSpin);
    exports.winScreen = winScreen = new _winScreen.WinScreen(0, 0, gameSize.width, gameSize.height, 0x504f52);
    exports.betSize = betSize = new _selector.Selector(550, 450, leftSelector, rightSelector, numbers);

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
 * gives spinButton an option to stop spin with current iteration
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

    function Reel(x, y, visibleSymbolsNum) {
        _classCallCheck(this, Reel);

        var _this = _possibleConstructorReturn(this, (Reel.__proto__ || Object.getPrototypeOf(Reel)).call(this));

        _this.position.set(x, y);
        _this.step = gameSize.height / visibleSymbolsNum;
        _this.symbols = [];

        //one more symbol which will be covered by reels mask is required to make animation
        _this.addSymbols(visibleSymbolsNum + 1);

        _this.symbolsBeforeResult = 0;

        _this.symbolsCounter = 0;
        return _this;
    }

    /**
     * adding symbols to reel on constructor creation
     * @param {number} symbolsNum required amount on symbols
     */


    _createClass(Reel, [{
        key: "addSymbols",
        value: function addSymbols(symbolsNum) {
            for (var i = 0; i < symbolsNum; i++) {

                var index = (0, _utils.randomInt)(0, possibleSymSrc.length - 1);
                var symbol = new _symbol.Symbol(possibleSymSrc[index], this.step);
                symbol.y = this.step * i;
                this.addChild(symbol);
                this.symbols.push(symbol);
            }
        }

        /**
         * reset and change position of the last symbol, hidden by reels mask, on top of visible zone
         * @param {number} symbsBfResult amount of iteration before result
         * @param {function} onComplete callback function, which called when all iterations are finished
         */

    }, {
        key: "moveLastSymbOnTop",
        value: function moveLastSymbOnTop(symbsBfResult, onComplete) {
            var _this2 = this;

            this.symbolsBeforeResult = symbsBfResult;
            this.onComplete = onComplete;

            var lastIndex = this.symbols.length - 1;
            var lastSymbol = this.symbols[lastIndex];
            var index = (0, _utils.randomInt)(0, possibleSymSrc.length - 1);

            lastSymbol.texture = _engine.textures[possibleSymSrc[index]];
            lastSymbol.type = possibleSymSrc[index];
            lastSymbol.position.set(0, -lastSymbol.height);

            this.symbols.unshift(this.symbols.pop());

            this.symbols.forEach(function (symbol) {
                symbol.moveOneSlot(_this2.onSymbolMovedOneSlot.bind(_this2));
            });
        }

        /**
         * when each symbol moved one slot, it reduces counter
         * when all symbols are finished, reset the counter
         * if more iterations are required, call this.moveLastSymbOnTop
         */

    }, {
        key: "onSymbolMovedOneSlot",
        value: function onSymbolMovedOneSlot() {
            this.symbolsCounter--;
            if (this.symbolsCounter <= 0) {
                this.symbolsCounter = this.symbols.length;
                this.symbolsBeforeResult--;

                if (this.symbolsBeforeResult > 0 && _engine.animationRequired) {
                    this.moveLastSymbOnTop(this.symbolsBeforeResult, this.onComplete);
                } else {
                    this.onSpinOver();
                }
            }
        }

        /**
         * When current spin is over enable the spinButton and call callback function
         */

    }, {
        key: "onSpinOver",
        value: function onSpinOver() {
            (0, _engine.changeAnimRequireTo)(false);
            _engine.button.enable();
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

        for (var i = 0; i < gameSize.reels; i++) {
            var reel = new _reel.Reel(gameSize.width / gameSize.reels * i, 0, gameSize.rows);
            _this.allReels.push(reel);
            _this.addChild(reel);
        }

        _this.addMask();

        _this.reelsCounter = 0;
        _this.currentWinLines = [];

        app.stage.addChild(_this);
        return _this;
    }

    /**
     * create a mask to limit visible zone
     */


    _createClass(Reels, [{
        key: "addMask",
        value: function addMask() {
            var reelsMask = new PIXI.Graphics();
            app.stage.addChild(reelsMask);
            reelsMask.position.set(0, 0);
            reelsMask.lineStyle(0);
            reelsMask.clear();

            reelsMask.beginFill();
            reelsMask.drawRect(0, 0, gameSize.width, gameSize.height);
            this.mask = reelsMask;
        }

        /**
         *
         * @param {number} symbsBfResult amount of symbols before result
         */

    }, {
        key: "start",
        value: function start(symbsBfResult) {
            var _this2 = this;

            (0, _engine.changeAnimRequireTo)(true);
            this.allReels.forEach(function (reel) {
                reel.moveLastSymbOnTop(symbsBfResult, _this2.onReelStopped.bind(_this2));
            });
        }

        /**
         * when each reel finished spin, it reduces counter
         * when all reels are finished, reset the counter, and check bet lines
         */

    }, {
        key: "onReelStopped",
        value: function onReelStopped() {
            this.reelsCounter--;
            if (this.reelsCounter <= 0) {
                this.reelsCounter = this.allReels.length;
                this.checkBetLines();
            }
        }

        /**
         * check each bet line for win combination
         */

    }, {
        key: "checkBetLines",
        value: function checkBetLines() {
            var winPoints = 0;

            for (var i = 0; i < betLines.length; i++) {
                var currentLine = betLines[i];
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
                        symbol.winAnimation();
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
                //I have used sprites for selector, starting from 1, that's why I have to add +1 here;
                var betMultiply = _engine.betSize.currentValue + 1;
                _engine.winScreen.showScreen(winPoints * betMultiply);
                winPoints = 0;
            }
        }

        /**
         * clears current win lines before next spin
         */

    }, {
        key: "clearCurrentWinLines",
        value: function clearCurrentWinLines() {
            this.currentWinLines = [];
        }
    }]);

    return Reels;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/selector.js":
/*!********************************!*\
  !*** ./javascript/selector.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Selector = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(/*! ./button */ "./javascript/button.js");

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Selector = exports.Selector = function (_PIXI$Container) {
    _inherits(Selector, _PIXI$Container);

    function Selector(x, y, leftSrc, rightSrc, numbers) {
        _classCallCheck(this, Selector);

        var _this = _possibleConstructorReturn(this, (Selector.__proto__ || Object.getPrototypeOf(Selector)).call(this));

        _this.minus = new _button.Button(0, 0, leftSrc, _this.minusOne.bind(_this));
        _this.plus = new _button.Button(200, 0, rightSrc, _this.plusOne.bind(_this));

        _this.numbers = numbers;
        _this.currentValue = 1;
        _this.sprite = new PIXI.Sprite(_engine.textures[_this.numbers[_this.currentValue]]);
        _this.sprite.anchor.set(0.5);
        _this.sprite.width = 125;
        _this.sprite.height = 125;
        _this.sprite.position.set(100, 0);

        _this.addChild(_this.minus, _this.plus, _this.sprite);

        _this.position.set(x, y);
        app.stage.addChild(_this);
        return _this;
    }

    _createClass(Selector, [{
        key: "minusOne",
        value: function minusOne() {
            this.sprite.texture = _engine.textures[this.numbers[--this.currentValue]];
            this.buttonDisableCheck();
        }
    }, {
        key: "plusOne",
        value: function plusOne() {
            this.sprite.texture = _engine.textures[this.numbers[++this.currentValue]];
            this.buttonDisableCheck();
        }
    }, {
        key: "buttonDisableCheck",
        value: function buttonDisableCheck() {
            if (this.currentValue + 1 >= this.numbers.length) {
                this.plus.disable();
            } else {
                this.plus.enable();
            }

            if (this.currentValue - 1 < 0) {
                this.minus.disable();
            } else {
                this.minus.enable();
            }
        }
    }]);

    return Selector;
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

    function _Symbol(textureSrc, width) {
        _classCallCheck(this, _Symbol);

        var _this = _possibleConstructorReturn(this, (_Symbol.__proto__ || Object.getPrototypeOf(_Symbol)).call(this, _engine.textures[textureSrc]));

        _this.width = width;
        _this.height = width;
        _this.type = textureSrc;

        _this.speed = 400;
        _this.alpha = 0.7;

        _this.twin = new _customTween.CustomTween(_this, "y", _this.y, _this.y + _this.height, _this.speed);
        return _this;
    }

    /**
     * sets default symbols params before next spin
     * evenly change position by one slot using twin
     * @param {function} onComplete callback function called when tween is finished
     */


    _createClass(_Symbol, [{
        key: "moveOneSlot",
        value: function moveOneSlot(onComplete) {
            this.removeWinAnimation();
            this.twin.play(this.y, this.y + this.height, onComplete);
        }

        /**
         * animation for win symbols
         */

    }, {
        key: "winAnimation",
        value: function winAnimation() {
            this.scale.set(1.15);
            this.alpha = 1;
        }

        /**
         * sets default symbols params
         */

    }, {
        key: "removeWinAnimation",
        value: function removeWinAnimation() {
            this.scale.set(1.0418);
            this.alpha = 0.7;
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

/**
 * creates random integer value between min and max
 * @param {number} min min possible value
 * @param {number} max max possible value
 * @returns {number}
 */
function randomInt(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

//I'm not sure if this function should be here, but I removed it from enjine
/**
 * start/stop spin depending on animationRequired param
 * @param {number} addSymb amount of added symbols before the spin end
 */
function makeSpin() {
    var addSymb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;

    if (!_engine.animationRequired) {
        _engine.winScreen.hideScreen();
        _engine.reels.clearCurrentWinLines();

        _engine.reels.start(addSymb);
    } else {
        (0, _engine.changeAnimRequireTo)(false);
        _engine.button.disable();
    }
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

        _this.addChild(_this.screen, _this.message);
        _this.visible = false;
        _this.alpha = 0.6;

        app.stage.addChild(_this);
        return _this;
    }

    /**
     * makes winScreen visible
     * @param {number} winAmount - amount of win points
     */


    _createClass(WinScreen, [{
        key: "showScreen",
        value: function showScreen(winAmount) {
            var winMsg = "You won " + winAmount + " !!!!!";
            this.visible = true;
            this.message.text = winMsg;
        }

        /**
         * hides winScreen
         */

    }, {
        key: "hideScreen",
        value: function hideScreen() {
            this.visible = false;
        }
    }]);

    return WinScreen;
}(PIXI.Graphics);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9jdXN0b21Ud2Vlbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2VuZ2luZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3JlZWwuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWVscy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3NlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC93aW5TY3JlZW4uanMiXSwibmFtZXMiOlsiQnV0dG9uIiwieCIsInkiLCJidXR0b25UZXh0dXJlcyIsImNhbGxiYWNrIiwidGV4dHVyZXMiLCJpZGxlIiwiaWRsZVRleHR1cmUiLCJob3ZlclRleHR1cmUiLCJob3ZlciIsImRvd25UZXh0dXJlIiwiZG93biIsImRpc2FibGVkVGV4dHVyZSIsImRpc2FibGVkIiwid2lkdGgiLCJoZWlnaHQiLCJhbmNob3IiLCJzZXQiLCJwb3NpdGlvbiIsImludGVyYWN0aXZlIiwic2V0SGl0QXJlYSIsImFwcCIsInN0YWdlIiwiYWRkQ2hpbGQiLCJ0ZXh0dXJlIiwicmFkaXVzIiwiaGl0QXJlYSIsIlBJWEkiLCJDaXJjbGUiLCJTcHJpdGUiLCJDdXN0b21Ud2VlbiIsIm9iaiIsInByb3BlcnR5TmFtZSIsInN0YXJ0IiwiZW5kIiwicGVyaW9kIiwiZGlzdGFuY2UiLCJudW1PZkZyYW1lcyIsInRpbWVCZXR3ZWVuRnJhbWVzIiwic3BlZWQiLCJyZW5kZXJMb29wIiwicHVzaCIsInVwZGF0ZVJlcXVpcmVkIiwiZGVsdGEiLCJvbkNvbXBsZXRlIiwiY2hhbmdlQW5pbVJlcXVpcmVUbyIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidmlldyIsIkxvYWRlciIsInNoYXJlZCIsImFkZCIsImxvYWQiLCJzZXR1cCIsImJhY2tncm91bmQiLCJidXR0b24iLCJyZWVscyIsIndpblNjcmVlbiIsImJldFNpemUiLCJhbmltYXRpb25SZXF1aXJlZCIsInJlc291cmNlcyIsIlJlZWxzIiwic3BpbkJ1dHRvblNyYyIsIm1ha2VTcGluIiwiV2luU2NyZWVuIiwiZ2FtZVNpemUiLCJTZWxlY3RvciIsImxlZnRTZWxlY3RvciIsInJpZ2h0U2VsZWN0b3IiLCJudW1iZXJzIiwidGlja2VyIiwiZ2FtZUxvb3AiLCJpIiwibGVuZ3RoIiwidXBkYXRlIiwiYm9vbGVhbiIsIlJlY3RhbmdsZSIsImNvbG9yIiwibGluZVN0eWxlIiwiYmVnaW5GaWxsIiwiZHJhd1JlY3QiLCJlbmRGaWxsIiwiR3JhcGhpY3MiLCJSZWVsIiwidmlzaWJsZVN5bWJvbHNOdW0iLCJzdGVwIiwic3ltYm9scyIsImFkZFN5bWJvbHMiLCJzeW1ib2xzQmVmb3JlUmVzdWx0Iiwic3ltYm9sc0NvdW50ZXIiLCJzeW1ib2xzTnVtIiwiaW5kZXgiLCJwb3NzaWJsZVN5bVNyYyIsInN5bWJvbCIsIlN5bWJvbCIsInN5bWJzQmZSZXN1bHQiLCJsYXN0SW5kZXgiLCJsYXN0U3ltYm9sIiwidHlwZSIsInVuc2hpZnQiLCJwb3AiLCJmb3JFYWNoIiwibW92ZU9uZVNsb3QiLCJvblN5bWJvbE1vdmVkT25lU2xvdCIsImJpbmQiLCJtb3ZlTGFzdFN5bWJPblRvcCIsIm9uU3Bpbk92ZXIiLCJlbmFibGUiLCJDb250YWluZXIiLCJhbGxSZWVscyIsInJlZWwiLCJyb3dzIiwiYWRkTWFzayIsInJlZWxzQ291bnRlciIsImN1cnJlbnRXaW5MaW5lcyIsInJlZWxzTWFzayIsImNsZWFyIiwibWFzayIsIm9uUmVlbFN0b3BwZWQiLCJjaGVja0JldExpbmVzIiwid2luUG9pbnRzIiwiYmV0TGluZXMiLCJjdXJyZW50TGluZSIsInN5bWJzTWF0Y2hlZCIsImoiLCJ3aW5BbmltYXRpb24iLCJiZXRNdWx0aXBseSIsImN1cnJlbnRWYWx1ZSIsInNob3dTY3JlZW4iLCJsZWZ0U3JjIiwicmlnaHRTcmMiLCJtaW51cyIsIm1pbnVzT25lIiwicGx1cyIsInBsdXNPbmUiLCJzcHJpdGUiLCJidXR0b25EaXNhYmxlQ2hlY2siLCJkaXNhYmxlIiwidGV4dHVyZVNyYyIsImFscGhhIiwidHdpbiIsInJlbW92ZVdpbkFuaW1hdGlvbiIsInBsYXkiLCJzY2FsZSIsInJhbmRvbUludCIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJhZGRTeW1iIiwiaGlkZVNjcmVlbiIsImNsZWFyQ3VycmVudFdpbkxpbmVzIiwic2NyZWVuIiwibWVzc2FnZSIsIlRleHQiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJ2aXNpYmxlIiwid2luQW1vdW50Iiwid2luTXNnIiwidGV4dCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVB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QUFMLEdBQWEsR0FBYjs7QUFFQXZILFlBQUlDLEtBQUosQ0FBVUMsUUFBVjtBQWhCb0M7QUFpQnZDOztBQUVEOzs7Ozs7OzttQ0FJWTRJLFMsRUFBVTtBQUNsQixnQkFBSUMsU0FBUyxhQUFhRCxTQUFiLEdBQXlCLFFBQXRDO0FBQ0EsaUJBQUtELE9BQUwsR0FBZSxJQUFmO0FBQ0EsaUJBQUtOLE9BQUwsQ0FBYVMsSUFBYixHQUFvQkQsTUFBcEI7QUFDSDs7QUFFRDs7Ozs7O3FDQUdjO0FBQ1YsaUJBQUtGLE9BQUwsR0FBZSxLQUFmO0FBQ0g7Ozs7RUFuQzBCdkksS0FBS3dELFEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qYXZhc2NyaXB0L2VuZ2luZS5qc1wiKTtcbiIsImltcG9ydCB7dGV4dHVyZXN9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgYnV0dG9uVGV4dHVyZXMsIGNhbGxiYWNrKXtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlc1tidXR0b25UZXh0dXJlcy5pZGxlXSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWRsZVRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5pZGxlO1xyXG4gICAgICAgIHRoaXMuaG92ZXJUZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuaG92ZXI7XHJcbiAgICAgICAgdGhpcy5kb3duVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmRvd247XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZFRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5kaXNhYmxlZDtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwMDtcclxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRIaXRBcmVhKDEyNSk7XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbW91c2VvdmVyKCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZGlzYWJsZWQgPyB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV0gOiB0ZXh0dXJlc1t0aGlzLmhvdmVyVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VvdXQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5kaXNhYmxlZCA/IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXSA6IHRleHR1cmVzW3RoaXMuaWRsZVRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlZG93bigpIHtcclxuICAgICAgICBpZih0aGlzLmRpc2FibGVkKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuZG93blRleHR1cmVdO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNldXAoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5kaXNhYmxlZCA/IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXSA6IHRleHR1cmVzW3RoaXMuaG92ZXJUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGUgKCkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgaGl0QXJlYSByYWRpdXNcclxuICAgICAqL1xyXG4gICAgc2V0SGl0QXJlYSAocmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuQ2lyY2xlKDAsIDAsIHJhZGl1cyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3JlbmRlckxvb3B9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5pbXBvcnQge3RpbWVCZXR3ZWVuRnJhbWVzfSBmcm9tIFwiLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbVR3ZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgcHJvcGVydHlOYW1lLCBzdGFydCwgZW5kLCBwZXJpb2Qpe1xyXG5cclxuICAgICAgICB0aGlzLm9iaiA9IG9iajtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmVuZCAtIHRoaXMuc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5udW1PZkZyYW1lcyA9IHBlcmlvZC90aW1lQmV0d2VlbkZyYW1lcztcclxuXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuZGlzdGFuY2UvdGhpcy5udW1PZkZyYW1lcztcclxuICAgICAgICByZW5kZXJMb29wLnB1c2godGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb24gZWFjaCBmcmFtZSBldmVubHkgY2hhbmdlIHJlcXVpcmVkIHBhcmFtLCBmcm9tIHRoZSBzdGFydCBwb2ludCB0byB0aGUgZW5kLCBmb3IgYSBzZXQgcGVyaW9kIG9mIHRpbWVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YSBlbGltaW5hdGVzIGRlbGF5cyBiZXR3ZWVuIGZyYW1lc1xyXG4gICAgICovXHJcbiAgICB1cGRhdGUgKGRlbHRhKXtcclxuICAgICAgICBpZih0aGlzLnVwZGF0ZVJlcXVpcmVkKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA8IHRoaXMuZW5kKXtcclxuICAgICAgICAgICAgICAgIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSArPSB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA+PSB0aGlzLmVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdID0gdGhpcy5lbmQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyByZW5kZXJMb29wLnNwbGljZShyZW5kZXJMb29wLmluZGV4T2YodGhpcyksIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzdGFydCBzdGFydCBwb2ludFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGVuZCBlbmQgcG9pbnRcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ29tcGxldGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgcGxheShzdGFydCwgZW5kLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgIC8vIHJlbmRlckxvb3AucHVzaCh0aGlzKTtcclxuICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi9idXR0b25cIjtcclxuaW1wb3J0IHtSZWVsc30gZnJvbSBcIi4vcmVlbHNcIjtcclxuaW1wb3J0IHttYWtlU3Bpbn0gZnJvbSBcIi4vdXRpbHNcIjtcclxuaW1wb3J0IHtXaW5TY3JlZW59IGZyb20gXCIuL3dpblNjcmVlblwiO1xyXG5pbXBvcnQge1NlbGVjdG9yfSBmcm9tIFwiLi9zZWxlY3RvclwiO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XHJcblxyXG5QSVhJLkxvYWRlci5zaGFyZWRcclxuICAgIC5hZGQoXCIuL2ltYWdlcy9zaGVldC5qc29uXCIpXHJcbiAgICAubG9hZChzZXR1cCk7XHJcblxyXG5leHBvcnQgbGV0IHRleHR1cmVzLFxyXG4gICAgYmFja2dyb3VuZCxcclxuICAgIGJ1dHRvbixcclxuICAgIHJlZWxzLFxyXG4gICAgd2luU2NyZWVuLFxyXG4gICAgYmV0U2l6ZTtcclxuXHJcbmV4cG9ydCBsZXQgcmVuZGVyTG9vcCA9IFtdO1xyXG5leHBvcnQgbGV0IGFuaW1hdGlvblJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgIHRleHR1cmVzID0gUElYSS5Mb2FkZXIuc2hhcmVkLnJlc291cmNlc1tcIi4vaW1hZ2VzL3NoZWV0Lmpzb25cIl0udGV4dHVyZXM7XHJcblxyXG4gICAgYmFja2dyb3VuZCA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlc1tcImJhY2tncm91bmQucG5nXCJdKTtcclxuICAgIGFwcC5zdGFnZS5hZGRDaGlsZChiYWNrZ3JvdW5kKTtcclxuXHJcbiAgICByZWVscyA9IG5ldyBSZWVscygpO1xyXG4gICAgYnV0dG9uID0gbmV3IEJ1dHRvbig0MDAsIDQ1MCwgc3BpbkJ1dHRvblNyYywgbWFrZVNwaW4pO1xyXG4gICAgd2luU2NyZWVuID0gbmV3IFdpblNjcmVlbigwLDAsIGdhbWVTaXplLndpZHRoLGdhbWVTaXplLmhlaWdodCwgMHg1MDRmNTIpO1xyXG4gICAgYmV0U2l6ZSA9IG5ldyBTZWxlY3Rvcig1NTAsIDQ1MCwgbGVmdFNlbGVjdG9yLCByaWdodFNlbGVjdG9yLCBudW1iZXJzLCApO1xyXG5cclxuICAgIGFwcC50aWNrZXIuYWRkKGRlbHRhID0+IGdhbWVMb29wKGRlbHRhKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVMb29wKGRlbHRhKXtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZW5kZXJMb29wLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICByZW5kZXJMb29wW2ldLnVwZGF0ZShkZWx0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnaXZlcyBzcGluQnV0dG9uIGFuIG9wdGlvbiB0byBzdG9wIHNwaW4gd2l0aCBjdXJyZW50IGl0ZXJhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJvb2xlYW4gc2V0IGFuaW1hdGlvblJlcXVpcmVkIHRvIHRydWUgb3IgZmFsc2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VBbmltUmVxdWlyZVRvIChib29sZWFuKSB7XHJcbiAgICBhbmltYXRpb25SZXF1aXJlZCA9IGJvb2xlYW47XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFBJWEkuR3JhcGhpY3Mge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmVTdHlsZSgxLCAweDAwMDAwMCwgMSk7XHJcbiAgICAgICAgdGhpcy5iZWdpbkZpbGwoY29sb3IpO1xyXG4gICAgICAgIHRoaXMuZHJhd1JlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5lbmRGaWxsKCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3RleHR1cmVzLCBhbmltYXRpb25SZXF1aXJlZCwgY2hhbmdlQW5pbVJlcXVpcmVUbywgYnV0dG9ufSBmcm9tIFwiLi9lbmdpbmVcIjtcclxuaW1wb3J0IHtyYW5kb21JbnR9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7U3ltYm9sfSBmcm9tIFwiLi9zeW1ib2xcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWVsIGV4dGVuZHMgUElYSS5Db250YWluZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB2aXNpYmxlU3ltYm9sc051bSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IGdhbWVTaXplLmhlaWdodC92aXNpYmxlU3ltYm9sc051bTtcclxuICAgICAgICB0aGlzLnN5bWJvbHMgPSBbXTtcclxuXHJcbiAgICAgICAgLy9vbmUgbW9yZSBzeW1ib2wgd2hpY2ggd2lsbCBiZSBjb3ZlcmVkIGJ5IHJlZWxzIG1hc2sgaXMgcmVxdWlyZWQgdG8gbWFrZSBhbmltYXRpb25cclxuICAgICAgICB0aGlzLmFkZFN5bWJvbHModmlzaWJsZVN5bWJvbHNOdW0gKyAxKTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlciA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpbmcgc3ltYm9scyB0byByZWVsIG9uIGNvbnN0cnVjdG9yIGNyZWF0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ltYm9sc051bSByZXF1aXJlZCBhbW91bnQgb24gc3ltYm9sc1xyXG4gICAgICovXHJcbiAgICBhZGRTeW1ib2xzKHN5bWJvbHNOdW0pIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3ltYm9sc051bTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSByYW5kb21JbnQoMCwgcG9zc2libGVTeW1TcmMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBuZXcgU3ltYm9sKHBvc3NpYmxlU3ltU3JjW2luZGV4XSwgdGhpcy5zdGVwKTtcclxuICAgICAgICAgICAgc3ltYm9sLnkgPSB0aGlzLnN0ZXAgKiBpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHN5bWJvbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3ltYm9scy5wdXNoKHN5bWJvbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVzZXQgYW5kIGNoYW5nZSBwb3NpdGlvbiBvZiB0aGUgbGFzdCBzeW1ib2wsIGhpZGRlbiBieSByZWVscyBtYXNrLCBvbiB0b3Agb2YgdmlzaWJsZSB6b25lXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ltYnNCZlJlc3VsdCBhbW91bnQgb2YgaXRlcmF0aW9uIGJlZm9yZSByZXN1bHRcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ29tcGxldGUgY2FsbGJhY2sgZnVuY3Rpb24sIHdoaWNoIGNhbGxlZCB3aGVuIGFsbCBpdGVyYXRpb25zIGFyZSBmaW5pc2hlZFxyXG4gICAgICovXHJcbiAgICBtb3ZlTGFzdFN5bWJPblRvcChzeW1ic0JmUmVzdWx0LCBvbkNvbXBsZXRlKXtcclxuICAgICAgICB0aGlzLnN5bWJvbHNCZWZvcmVSZXN1bHQgPSBzeW1ic0JmUmVzdWx0O1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IG9uQ29tcGxldGU7XHJcblxyXG4gICAgICAgIGxldCBsYXN0SW5kZXggPSB0aGlzLnN5bWJvbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICBsZXQgbGFzdFN5bWJvbCA9IHRoaXMuc3ltYm9sc1tsYXN0SW5kZXhdO1xyXG4gICAgICAgIGxldCBpbmRleCA9IHJhbmRvbUludCgwLCBwb3NzaWJsZVN5bVNyYy5sZW5ndGggLSAxKTtcclxuXHJcbiAgICAgICAgbGFzdFN5bWJvbC50ZXh0dXJlID0gdGV4dHVyZXNbcG9zc2libGVTeW1TcmNbaW5kZXhdXTtcclxuICAgICAgICBsYXN0U3ltYm9sLnR5cGUgPSBwb3NzaWJsZVN5bVNyY1tpbmRleF07XHJcbiAgICAgICAgbGFzdFN5bWJvbC5wb3NpdGlvbi5zZXQoMCwgLWxhc3RTeW1ib2wuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzLnVuc2hpZnQodGhpcy5zeW1ib2xzLnBvcCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzLmZvckVhY2goKHN5bWJvbCkgPT4ge1xyXG4gICAgICAgICAgICBzeW1ib2wubW92ZU9uZVNsb3QoIHRoaXMub25TeW1ib2xNb3ZlZE9uZVNsb3QuYmluZCh0aGlzKSApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB3aGVuIGVhY2ggc3ltYm9sIG1vdmVkIG9uZSBzbG90LCBpdCByZWR1Y2VzIGNvdW50ZXJcclxuICAgICAqIHdoZW4gYWxsIHN5bWJvbHMgYXJlIGZpbmlzaGVkLCByZXNldCB0aGUgY291bnRlclxyXG4gICAgICogaWYgbW9yZSBpdGVyYXRpb25zIGFyZSByZXF1aXJlZCwgY2FsbCB0aGlzLm1vdmVMYXN0U3ltYk9uVG9wXHJcbiAgICAgKi9cclxuICAgIG9uU3ltYm9sTW92ZWRPbmVTbG90KCkge1xyXG4gICAgICAgIHRoaXMuc3ltYm9sc0NvdW50ZXItLTtcclxuICAgICAgICBpZiAodGhpcy5zeW1ib2xzQ291bnRlciA8PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlciA9IHRoaXMuc3ltYm9scy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdC0tO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdCA+IDAgJiYgYW5pbWF0aW9uUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUxhc3RTeW1iT25Ub3AodGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0LCB0aGlzLm9uQ29tcGxldGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNwaW5PdmVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGN1cnJlbnQgc3BpbiBpcyBvdmVyIGVuYWJsZSB0aGUgc3BpbkJ1dHRvbiBhbmQgY2FsbCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBvblNwaW5PdmVyKCkge1xyXG4gICAgICAgIGNoYW5nZUFuaW1SZXF1aXJlVG8oZmFsc2UpO1xyXG4gICAgICAgIGJ1dHRvbi5lbmFibGUoKTtcclxuICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge2NoYW5nZUFuaW1SZXF1aXJlVG8sIHdpblNjcmVlbiwgYmV0U2l6ZX0gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7UmVlbH0gZnJvbSBcIi4vcmVlbFwiO1xyXG5cclxuLy8gSSBndWVzcyB0aGlzIGNsYXNzIGlzIG92ZXJsb2FkZWQgYnV0IEkgaGF2ZW4ndCBmb3VuZCBhIHNvbHV0aW9uIGhvdyB0byBoYW5kbGUgd2luIGxpbmVzIG90aGVyIHdheVxyXG5leHBvcnQgY2xhc3MgUmVlbHMgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lcntcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWxsUmVlbHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWVTaXplLnJlZWxzOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgcmVlbCA9IG5ldyBSZWVsKGdhbWVTaXplLndpZHRoL2dhbWVTaXplLnJlZWxzICogaSwgMCxnYW1lU2l6ZS5yb3dzKTtcclxuICAgICAgICAgICAgdGhpcy5hbGxSZWVscy5wdXNoKHJlZWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHJlZWwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmFkZE1hc2soKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWVsc0NvdW50ZXIgPSAwO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdpbkxpbmVzID0gW107XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSBhIG1hc2sgdG8gbGltaXQgdmlzaWJsZSB6b25lXHJcbiAgICAgKi9cclxuICAgIGFkZE1hc2soKSB7XHJcbiAgICAgICAgbGV0IHJlZWxzTWFzayA9IG5ldyBQSVhJLkdyYXBoaWNzKCk7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHJlZWxzTWFzayk7XHJcbiAgICAgICAgcmVlbHNNYXNrLnBvc2l0aW9uLnNldCgwLDApO1xyXG4gICAgICAgIHJlZWxzTWFzay5saW5lU3R5bGUoMCk7XHJcbiAgICAgICAgcmVlbHNNYXNrLmNsZWFyKCk7XHJcblxyXG4gICAgICAgIHJlZWxzTWFzay5iZWdpbkZpbGwoKTtcclxuICAgICAgICByZWVsc01hc2suZHJhd1JlY3QoMCwgMCwgZ2FtZVNpemUud2lkdGgsIGdhbWVTaXplLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5tYXNrID0gcmVlbHNNYXNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeW1ic0JmUmVzdWx0IGFtb3VudCBvZiBzeW1ib2xzIGJlZm9yZSByZXN1bHRcclxuICAgICAqL1xyXG4gICAgc3RhcnQgKHN5bWJzQmZSZXN1bHQpIHtcclxuICAgICAgICBjaGFuZ2VBbmltUmVxdWlyZVRvKHRydWUpO1xyXG4gICAgICAgIHRoaXMuYWxsUmVlbHMuZm9yRWFjaCggcmVlbCA9PiB7XHJcbiAgICAgICAgICAgIHJlZWwubW92ZUxhc3RTeW1iT25Ub3Aoc3ltYnNCZlJlc3VsdCwgdGhpcy5vblJlZWxTdG9wcGVkLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB3aGVuIGVhY2ggcmVlbCBmaW5pc2hlZCBzcGluLCBpdCByZWR1Y2VzIGNvdW50ZXJcclxuICAgICAqIHdoZW4gYWxsIHJlZWxzIGFyZSBmaW5pc2hlZCwgcmVzZXQgdGhlIGNvdW50ZXIsIGFuZCBjaGVjayBiZXQgbGluZXNcclxuICAgICAqL1xyXG4gICAgb25SZWVsU3RvcHBlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWVsc0NvdW50ZXItLTtcclxuICAgICAgICBpZiAodGhpcy5yZWVsc0NvdW50ZXIgPD0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZWxzQ291bnRlciA9IHRoaXMuYWxsUmVlbHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQmV0TGluZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVjayBlYWNoIGJldCBsaW5lIGZvciB3aW4gY29tYmluYXRpb25cclxuICAgICAqL1xyXG4gICAgY2hlY2tCZXRMaW5lcyAoKXtcclxuICAgICAgICBsZXQgd2luUG9pbnRzID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZXRMaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudExpbmUgID0gYmV0TGluZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBzeW1ic01hdGNoZWQgPSAxO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN5bWJvbHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLmFsbFJlZWxzLmxlbmd0aDsgaisrKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuYWxsUmVlbHNbaiArIDFdICYmIHRoaXMuYWxsUmVlbHNbal0uc3ltYm9sc1tjdXJyZW50TGluZVtqXV0udHlwZSA9PT0gdGhpcy5hbGxSZWVsc1tqICsgMV0uc3ltYm9sc1tjdXJyZW50TGluZVtqKzFdXS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ltYnNNYXRjaGVkICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYnNNYXRjaGVkIDwgMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh0aGlzLmFsbFJlZWxzW2pdLnN5bWJvbHNbY3VycmVudExpbmVbal1dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHRoaXMuYWxsUmVlbHNbaisxXS5zeW1ib2xzW2N1cnJlbnRMaW5lW2orMV1dKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2godGhpcy5hbGxSZWVsc1tqKzFdLnN5bWJvbHNbY3VycmVudExpbmVbaisxXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ltYnNNYXRjaGVkID4gMikge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdpbkxpbmVzLnB1c2goLi4uc3ltYm9scyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ltYm9scy5mb3JFYWNoKCBzeW1ib2wgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbC53aW5BbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHN5bWJzTWF0Y2hlZCA9PT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETyBhZGQgc3ltYm9scyBjb3N0IHBhcmFtIGFuZCBtdWx0aXBseSB3aW5uaW5ncyBvbiBpdFxyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAxMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzeW1ic01hdGNoZWQgPT09IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAzMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzeW1ic01hdGNoZWQgPT09IDUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN5bWJzTWF0Y2hlZCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2luUG9pbnRzID4gMCkge1xyXG4gICAgICAgICAgICAvL0kgaGF2ZSB1c2VkIHNwcml0ZXMgZm9yIHNlbGVjdG9yLCBzdGFydGluZyBmcm9tIDEsIHRoYXQncyB3aHkgSSBoYXZlIHRvIGFkZCArMSBoZXJlO1xyXG4gICAgICAgICAgICBsZXQgYmV0TXVsdGlwbHkgPSBiZXRTaXplLmN1cnJlbnRWYWx1ZSArIDE7XHJcbiAgICAgICAgICAgIHdpblNjcmVlbi5zaG93U2NyZWVuKHdpblBvaW50cyAqIGJldE11bHRpcGx5KTtcclxuICAgICAgICAgICAgd2luUG9pbnRzID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjbGVhcnMgY3VycmVudCB3aW4gbGluZXMgYmVmb3JlIG5leHQgc3BpblxyXG4gICAgICovXHJcbiAgICBjbGVhckN1cnJlbnRXaW5MaW5lcyAoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2luTGluZXMgPSBbXTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7dGV4dHVyZXN9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3IgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lcntcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGxlZnRTcmMsIHJpZ2h0U3JjLCBudW1iZXJzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm1pbnVzID0gbmV3IEJ1dHRvbigwLCAwLCBsZWZ0U3JjLCB0aGlzLm1pbnVzT25lLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucGx1cyA9IG5ldyBCdXR0b24oMjAwLCAwLCByaWdodFNyYywgdGhpcy5wbHVzT25lLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLm51bWJlcnMgPSBudW1iZXJzO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gMTtcclxuICAgICAgICB0aGlzLnNwcml0ZSA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlc1t0aGlzLm51bWJlcnNbdGhpcy5jdXJyZW50VmFsdWVdXSk7XHJcbiAgICAgICAgdGhpcy5zcHJpdGUuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLndpZHRoID0gMTI1O1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLmhlaWdodCA9IDEyNTtcclxuICAgICAgICB0aGlzLnNwcml0ZS5wb3NpdGlvbi5zZXQoMTAwLCAwKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pbnVzLCB0aGlzLnBsdXMsIHRoaXMuc3ByaXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1pbnVzT25lKCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLm51bWJlcnNbIC0tdGhpcy5jdXJyZW50VmFsdWUgXV07XHJcbiAgICAgICAgdGhpcy5idXR0b25EaXNhYmxlQ2hlY2soKVxyXG4gICAgfVxyXG5cclxuICAgIHBsdXNPbmUgKCkge1xyXG4gICAgICAgIHRoaXMuc3ByaXRlLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLm51bWJlcnNbICsrdGhpcy5jdXJyZW50VmFsdWUgXV07XHJcbiAgICAgICAgdGhpcy5idXR0b25EaXNhYmxlQ2hlY2soKVxyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbkRpc2FibGVDaGVjaygpe1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSArIDEgPj0gdGhpcy5udW1iZXJzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMucGx1cy5kaXNhYmxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbHVzLmVuYWJsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZhbHVlIC0gMSA8IDApe1xyXG4gICAgICAgICAgICB0aGlzLm1pbnVzLmRpc2FibGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnVzLmVuYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHt0ZXh0dXJlc30gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7Q3VzdG9tVHdlZW59IGZyb20gXCIuL2N1c3RvbVR3ZWVuXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ltYm9sIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlU3JjLCB3aWR0aCl7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZXNbdGV4dHVyZVNyY10pO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB3aWR0aDtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0ZXh0dXJlU3JjO1xyXG5cclxuICAgICAgICB0aGlzLnNwZWVkID0gNDAwO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjc7XHJcblxyXG4gICAgICAgIHRoaXMudHdpbiA9IG5ldyBDdXN0b21Ud2Vlbih0aGlzLCBcInlcIiwgdGhpcy55LCB0aGlzLnkgKyB0aGlzLmhlaWdodCwgdGhpcy5zcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGRlZmF1bHQgc3ltYm9scyBwYXJhbXMgYmVmb3JlIG5leHQgc3BpblxyXG4gICAgICogZXZlbmx5IGNoYW5nZSBwb3NpdGlvbiBieSBvbmUgc2xvdCB1c2luZyB0d2luXHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNvbXBsZXRlIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIHR3ZWVuIGlzIGZpbmlzaGVkXHJcbiAgICAgKi9cclxuICAgIG1vdmVPbmVTbG90IChvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVXaW5BbmltYXRpb24oKTtcclxuICAgICAgICB0aGlzLnR3aW4ucGxheSh0aGlzLnksIHRoaXMueSArIHRoaXMuaGVpZ2h0LCBvbkNvbXBsZXRlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFuaW1hdGlvbiBmb3Igd2luIHN5bWJvbHNcclxuICAgICAqL1xyXG4gICAgd2luQW5pbWF0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlLnNldCgxLjE1KTtcclxuICAgICAgICB0aGlzLmFscGhhID0gMTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgZGVmYXVsdCBzeW1ib2xzIHBhcmFtc1xyXG4gICAgICovXHJcbiAgICByZW1vdmVXaW5BbmltYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUuc2V0KDEuMDQxOCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWxwaGEgPSAwLjc7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2FuaW1hdGlvblJlcXVpcmVkLCBjaGFuZ2VBbmltUmVxdWlyZVRvLCBidXR0b24sIHJlZWxzLCB3aW5TY3JlZW59IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuLyoqXHJcbiAqIGNyZWF0ZXMgcmFuZG9tIGludGVnZXIgdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIG1pbiBwb3NzaWJsZSB2YWx1ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IG1heCBwb3NzaWJsZSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgcmFuZCA9IE1hdGguZmxvb3IocmFuZCk7XHJcbiAgICByZXR1cm4gcmFuZDtcclxufVxyXG5cclxuLy9JJ20gbm90IHN1cmUgaWYgdGhpcyBmdW5jdGlvbiBzaG91bGQgYmUgaGVyZSwgYnV0IEkgcmVtb3ZlZCBpdCBmcm9tIGVuamluZVxyXG4vKipcclxuICogc3RhcnQvc3RvcCBzcGluIGRlcGVuZGluZyBvbiBhbmltYXRpb25SZXF1aXJlZCBwYXJhbVxyXG4gKiBAcGFyYW0ge251bWJlcn0gYWRkU3ltYiBhbW91bnQgb2YgYWRkZWQgc3ltYm9scyBiZWZvcmUgdGhlIHNwaW4gZW5kXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbWFrZVNwaW4oYWRkU3ltYiA9IDUpIHtcclxuICAgIGlmKCFhbmltYXRpb25SZXF1aXJlZCl7XHJcbiAgICAgICAgd2luU2NyZWVuLmhpZGVTY3JlZW4oKTtcclxuICAgICAgICByZWVscy5jbGVhckN1cnJlbnRXaW5MaW5lcygpO1xyXG5cclxuICAgICAgICByZWVscy5zdGFydChhZGRTeW1iKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY2hhbmdlQW5pbVJlcXVpcmVUbyhmYWxzZSk7XHJcbiAgICAgICAgYnV0dG9uLmRpc2FibGUoKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lQmV0d2VlbkZyYW1lcyA9IDE2LjY3OyIsImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9yZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5TY3JlZW4gZXh0ZW5kcyBQSVhJLkdyYXBoaWNze1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG5ldyBQSVhJLlRleHQoXCJZb3Ugd29uXCIpO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5zdHlsZSA9IHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnBvc2l0aW9uLnNldCh3aWR0aC8yIC0gMTMwLCBoZWlnaHQvMiAtIDM2ICk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zY3JlZW4sIHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDAuNjtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlcyB3aW5TY3JlZW4gdmlzaWJsZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpbkFtb3VudCAtIGFtb3VudCBvZiB3aW4gcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIHNob3dTY3JlZW4gKHdpbkFtb3VudCl7XHJcbiAgICAgICAgbGV0IHdpbk1zZyA9IFwiWW91IHdvbiBcIiArIHdpbkFtb3VudCArIFwiICEhISEhXCI7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UudGV4dCA9IHdpbk1zZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhpZGVzIHdpblNjcmVlblxyXG4gICAgICovXHJcbiAgICBoaWRlU2NyZWVuICgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9