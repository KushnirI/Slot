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

/***/ "./javascript/betLines.js":
/*!********************************!*\
  !*** ./javascript/betLines.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BetLines = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _line = __webpack_require__(/*! ./line */ "./javascript/line.js");

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BetLines = exports.BetLines = function (_PIXI$Container) {
    _inherits(BetLines, _PIXI$Container);

    function BetLines() {
        _classCallCheck(this, BetLines);

        var _this = _possibleConstructorReturn(this, (BetLines.__proto__ || Object.getPrototypeOf(BetLines)).call(this));

        _this.activeLines = 5;
        _this.addLinePositions();

        _this.allLines = [];
        _this.addLines(_this.activeLines);

        _this.activeBetLines = [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [0, 1, 2, 1, 0], [2, 1, 0, 1, 2]];

        _this.by({ "notify:winSpinOver": _this.showWinLines });

        app.stage.addChild(_this);

        return _this;
    }

    _createClass(BetLines, [{
        key: "addLinePositions",
        value: function addLinePositions() {
            this.linePositions = [[0, gameSize.height / 6, gameSize.width, gameSize.height / 6], [0, gameSize.height / 2, gameSize.width, gameSize.height / 2], [0, gameSize.height - gameSize.height / 6, gameSize.width, gameSize.height - gameSize.height / 6], [0, 0, gameSize.width / 2, gameSize.height - gameSize.height / 6, gameSize.width, 0], [0, gameSize.height, gameSize.width / 2, gameSize.height / 6, gameSize.width, gameSize.height]];
        }
    }, {
        key: "addLines",
        value: function addLines() {

            for (var i = 0; i < this.linePositions.length; i++) {
                var betLine = void 0;
                var args = this.linePositions[i];

                if (args.length === 4) {
                    betLine = new (Function.prototype.bind.apply(_line.Line, [null].concat(_toConsumableArray(args))))();
                }
                if (args.length === 6) {
                    betLine = new (Function.prototype.bind.apply(_line.Line, [null].concat(_toConsumableArray(args))))();
                    betLine.lineTo(args[4], args[5]);
                }

                this.allLines.push(betLine);
                this.addChild(betLine);
            }
        }
    }, {
        key: "showWinLines",
        value: function showWinLines(config) {
            for (var i = 0; i < config.winLines.length; i++) {
                var curLine = config.winLines[i];
                this.allLines[curLine].tint = 0x00ff00;
            }
        }
    }, {
        key: "removeWinLines",
        value: function removeWinLines() {
            this.allLines.forEach(function (line) {
                line.tint = 0x808080;
            });
        }
    }, {
        key: "by",
        value: function by(params) {
            if (!this.eventHandlers) {
                this.eventHandlers = {};
            }

            for (var eventName in params) {
                if (params.hasOwnProperty(eventName)) {
                    if (!this.eventHandlers[eventName]) {
                        _engine.events.addListener(eventName, this);
                    }

                    this.eventHandlers[eventName] = params[eventName];
                }
            }
        }
    }, {
        key: "fireEvent",
        value: function fireEvent(eventName) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            _engine.events.fireEvent(eventName, args);
        }
    }]);

    return BetLines;
}(PIXI.Container);

/***/ }),

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
            this.texture = _engine.textures[this.idleTexture];
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
        this.getSpeed(period);

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
                if (this.distance > 0) {
                    if (this.obj[this.propertyName] < this.end) {
                        this.obj[this.propertyName] += this.speed * delta;
                    }

                    if (this.obj[this.propertyName] >= this.end) {
                        this.obj[this.propertyName] = this.end;
                        this.updateRequired = false;

                        this.onComplete();
                    }
                } else {
                    if (this.obj[this.propertyName] > this.end) {
                        this.obj[this.propertyName] += this.speed * delta;
                    }

                    if (this.obj[this.propertyName] <= this.end) {
                        this.obj[this.propertyName] = this.end;
                        this.updateRequired = false;

                        this.onComplete();
                    }
                }
            }
        }
    }, {
        key: "getSpeed",
        value: function getSpeed(period) {
            this.distance = this.end - this.start;
            this.numOfFrames = period / _utils.timeBetweenFrames;
            this.speed = this.distance / this.numOfFrames;
        }

        /**
         *
         * @param {number} start start point
         * @param {number} end end point
         * @param {number} period period of time needed to reach the endpoint
         * @param {function} onComplete callback function
         */

    }, {
        key: "play",
        value: function play(start, end, period, onComplete) {
            this.start = start;
            this.end = end;
            this.getSpeed(period);
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
exports.animationRequired = exports.renderLoop = exports.betLines = exports.server = exports.events = exports.betSelector = exports.winScreen = exports.reels = exports.spinButton = exports.background = exports.textures = undefined;
exports.changeAnimRequireTo = changeAnimRequireTo;

var _button = __webpack_require__(/*! ./button */ "./javascript/button.js");

var _reels = __webpack_require__(/*! ./reels */ "./javascript/reels.js");

var _utils = __webpack_require__(/*! ./utils */ "./javascript/utils.js");

var _winScreen = __webpack_require__(/*! ./winScreen */ "./javascript/winScreen.js");

var _selector = __webpack_require__(/*! ./selector */ "./javascript/selector.js");

var _events = __webpack_require__(/*! ./events */ "./javascript/events.js");

var _server = __webpack_require__(/*! ./server */ "./javascript/server.js");

var _betLines = __webpack_require__(/*! ./betLines */ "./javascript/betLines.js");

document.body.appendChild(app.view);

PIXI.Loader.shared.add("./images/sheet.json").load(setup);

var textures = exports.textures = void 0,
    background = exports.background = void 0,
    spinButton = exports.spinButton = void 0,
    reels = exports.reels = void 0,
    winScreen = exports.winScreen = void 0,
    betSelector = exports.betSelector = void 0,
    events = exports.events = void 0,
    server = exports.server = void 0,
    betLines = exports.betLines = void 0;

var renderLoop = exports.renderLoop = [];
var animationRequired = exports.animationRequired = false;

function setup() {
    exports.textures = textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    exports.background = background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    exports.events = events = new _events.Events();
    exports.betLines = betLines = new _betLines.BetLines();
    exports.reels = reels = new _reels.Reels();
    exports.spinButton = spinButton = new _button.Button(400, 450, spinButtonSrc, _utils.makeSpin);
    exports.winScreen = winScreen = new _winScreen.WinScreen(0, 0, gameSize.width, gameSize.height, 0x504f52);
    exports.betSelector = betSelector = new _selector.Selector(550, 450, leftSelector, rightSelector, numbers);

    exports.server = server = new _server.Server();

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

/***/ "./javascript/events.js":
/*!******************************!*\
  !*** ./javascript/events.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Events = exports.Events = function () {
    function Events() {
        _classCallCheck(this, Events);

        this.events = {};
    }

    /**
     *
     * @param {string} eventName Name of event
     * @param {object} eventListener object with callback function, which should be called on event
     */


    _createClass(Events, [{
        key: "addListener",
        value: function addListener(eventName, eventListener) {
            if (!this.events[eventName]) {
                this.events[eventName] = [];
            }
            this.events[eventName].push(eventListener);
        }

        /**
         *
         * @param {string} eventName Name of event
         * @param {array} args arguments for callback function
         */

    }, {
        key: "fireEvent",
        value: function fireEvent(eventName, args) {
            var listeners = this.events[eventName];

            for (var i = 0; i < listeners.length; i++) {
                var listener = listeners[i];
                var handler = listener.eventHandlers[eventName];

                handler.apply(listener, args);
            }
        }
    }]);

    return Events;
}();

/***/ }),

/***/ "./javascript/line.js":
/*!****************************!*\
  !*** ./javascript/line.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = exports.Line = function (_PIXI$Graphics) {
    _inherits(Line, _PIXI$Graphics);

    function Line(startX, startY, endX, endY) {
        _classCallCheck(this, Line);

        var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this));

        _this.lineStyle(3, 0x808080, 0.5);
        _this.moveTo(startX, startY);
        _this.lineTo(endX, endY);
        return _this;
    }

    return Line;
}(PIXI.Graphics);

/***/ }),

/***/ "./javascript/observable.js":
/*!**********************************!*\
  !*** ./javascript/observable.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Observable = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Observable = exports.Observable = function () {
    function Observable() {
        _classCallCheck(this, Observable);
    }

    _createClass(Observable, [{
        key: "by",
        value: function by(params) {
            if (!this.eventHandlers) {
                this.eventHandlers = {};
            }

            for (var eventName in params) {
                if (params.hasOwnProperty(eventName)) {
                    if (!this.eventHandlers[eventName]) {
                        _engine.events.addListener(eventName, this);
                    }

                    this.eventHandlers[eventName] = params[eventName];
                }
            }
        }
    }, {
        key: "fireEvent",
        value: function fireEvent(eventName) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            _engine.events.fireEvent(eventName, args);
        }
    }]);

    return Observable;
}();

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
        _this.resultSymbols = [0, 0, 0];
        _this.currentResultSymb = 2;

        _this.symbolsCounter = _this.symbols.length;
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
                symbol.position.set(this.step / 2, this.step * i + this.step / 2);
                this.addChild(symbol);
                this.symbols.push(symbol);
            }
        }
        /**
         * @param {array} betResult array with result for current bet
         * @param {number} symbsBfResult amount of iteration before result
         * @param {function} onComplete callback function, which called when all iterations are finished
         */

    }, {
        key: "start",
        value: function start(betResult, symbsBfResult, onComplete) {
            var _this2 = this;

            this.resultSymbols = betResult;
            this.symbolsBeforeResult = symbsBfResult;
            this.onComplete = onComplete;
            // this.moveLastSymbOnTop();
            this.symbols.forEach(function (symbol) {
                symbol.startSpin(_this2.onStartBounceFinished.bind(_this2));
            });
        }

        /**
         *
         * @param {boolean} randomSymb if true add randomSymbol
         */

    }, {
        key: "moveLastSymbOnTop",
        value: function moveLastSymbOnTop() {
            var _this3 = this;

            var randomSymb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            var lastIndex = this.symbols.length - 1;
            var lastSymbol = this.symbols[lastIndex];

            if (randomSymb) {
                this.randResetSymbValue(lastSymbol);
            } else {
                this.setSymbResultValue(lastSymbol);
            }

            lastSymbol.position.set(this.step / 2, -lastSymbol.height + this.step / 2);

            this.symbols.unshift(this.symbols.pop());

            this.symbols.forEach(function (symbol) {
                symbol.moveOneSlot(_this3.onSymbolMovedOneSlot.bind(_this3));
            });
        }

        /**
         * randomly reset symbol's texture and type
         * @param {object} symb symbol object
         */

    }, {
        key: "randResetSymbValue",
        value: function randResetSymbValue(symb) {
            var index = (0, _utils.randomInt)(0, possibleSymSrc.length - 1);
            symb.texture = _engine.textures[possibleSymSrc[index]];
            symb.type = possibleSymSrc[index];
        }
    }, {
        key: "setSymbResultValue",
        value: function setSymbResultValue(symb) {
            var index = this.resultSymbols[this.currentResultSymb];
            symb.texture = _engine.textures[possibleSymSrc[index]];
            symb.type = possibleSymSrc[index];
            this.currentResultSymb--;
        }

        /**
         * when each symbol moved one slot, it reduces symbolsCounter
         * when all symbols are finished, reset the counter
         * if more iterations are required, call this.moveLastSymbOnTop
         */

    }, {
        key: "onSymbolMovedOneSlot",
        value: function onSymbolMovedOneSlot() {
            var _this4 = this;

            this.symbolsCounter--;
            if (this.symbolsCounter === 0) {
                this.symbolsCounter = this.symbols.length;
                this.symbolsBeforeResult--;

                if (this.symbolsBeforeResult > 0 && _engine.animationRequired) {
                    this.moveLastSymbOnTop();
                } else if (this.currentResultSymb >= 0) {
                    this.moveLastSymbOnTop(false);
                } else {
                    this.symbols.forEach(function (symbol) {
                        symbol.endSpin(_this4.onEndBounceFinished.bind(_this4));
                    });
                }
            }
        }
    }, {
        key: "onStartBounceFinished",
        value: function onStartBounceFinished() {
            this.symbolsCounter--;
            if (this.symbolsCounter === 0) {
                this.symbolsCounter = this.symbols.length;
                this.moveLastSymbOnTop();
            }
        }
    }, {
        key: "onEndBounceFinished",
        value: function onEndBounceFinished() {
            this.symbolsCounter--;
            if (this.symbolsCounter === 0) {
                this.symbolsCounter = this.symbols.length;
                this.onSpinOver();
            }
        }

        /**
         * When current spin is over set default values and call callback function
         */

    }, {
        key: "onSpinOver",
        value: function onSpinOver() {
            this.currentResultSymb = 2;
            this.resultSymbols = [];
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

        _this.reelsCounter = _this.allReels.length;
        _this.currentWinLines = [];
        _this.winAnimRequired = false;
        _this.winConfig = null;

        app.stage.addChild(_this);

        _this.by({
            "notify:spinAnimationStart": _this.start,
            "notify:winBetWasMade": _this.setWinAnimation
        });

        return _this;
    }

    /**
     * create a mask to limit visible zone
     */


    _createClass(Reels, [{
        key: "addMask",
        value: function addMask() {
            var reelsMask = new PIXI.Graphics();
            reelsMask.beginFill();
            reelsMask.drawRect(0, 0, gameSize.width, gameSize.height);
            this.addChild(reelsMask);

            this.mask = reelsMask;
        }

        /**
         *
         * @param {array} betResult array with bet result for each reel
         * @param {number} symbsBfResult amount of symbols before result
         */

    }, {
        key: "start",
        value: function start(betResult) {
            var symbsBfResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

            (0, _engine.changeAnimRequireTo)(true);

            for (var i = 0; i < this.allReels.length; i++) {
                this.allReels[i].start(betResult[i], symbsBfResult + i, this.onReelStopped.bind(this));
            }
        }

        /**
         * when each reel finished spin, it reduces reelsCounter
         * when all reels are finished, reset the counter, and check bet lines
         */

    }, {
        key: "onReelStopped",
        value: function onReelStopped() {
            this.reelsCounter--;
            if (this.reelsCounter === 0) {
                this.reelsCounter = this.allReels.length;
                (0, _engine.changeAnimRequireTo)(false);
                _engine.spinButton.enable();
                if (this.winAnimRequired) {
                    this.fireEvent("notify:winSpinOver", this.winConfig);
                    this.showWinAnimation();
                }
                this.winAnimRequired = false;
            }
        }
    }, {
        key: "setWinAnimation",
        value: function setWinAnimation(config) {
            this.winAnimRequired = true;
            this.winConfig = config;
        }
    }, {
        key: "showWinAnimation",
        value: function showWinAnimation() {
            for (var i = 0; i < this.winConfig.winSymbols.length; i++) {
                var curLine = this.winConfig.winSymbols[i];

                for (var j = 0; j < curLine.length; j++) {
                    this.allReels[j].symbols[curLine[j]].playWinAnimation();
                }
            }
        }

        /**
         * check each bet line for win combination
         */
        /* checkBetLines (){
               let winPoints = 0;
               for (let i = 0; i < betLines.length; i++) {
                 let currentLine  = betLines[i];
                 let symbsMatched = 1;
                   let symbols = [];
                   for(let j = 0; j < this.allReels.length; j++){
                       if ( this.allReels[j + 1] && this.allReels[j].symbols[currentLine[j]].type === this.allReels[j + 1].symbols[currentLine[j+1]].type) {
                         symbsMatched +=1;
                         if (symbsMatched < 3){
                             symbols.push(this.allReels[j].symbols[currentLine[j]]);
                             symbols.push(this.allReels[j+1].symbols[currentLine[j+1]]);
                         } else {
                             symbols.push(this.allReels[j+1].symbols[currentLine[j+1]]);
                         }
                       } else {
                         break;
                     }
                 }
                   if (symbsMatched > 2) {
                       this.currentWinLines.push(...symbols);
                       symbols.forEach( symbol => {
                         symbol.playWinAnimation();
                     });
                       if(symbsMatched === 3){
                         // TODO add symbols cost param and multiply winnings on it
                         winPoints += 10;
                     }
                       if(symbsMatched === 4){
                         winPoints += 30;
                     }
                       if(symbsMatched === 5){
                         winPoints += 100;
                     }
                 }
                   symbsMatched = 1;
             }
               if (winPoints > 0) {
                 //I have used sprites for selector, starting from 1, that's why I have to add +1 here;
                 let betMultiplier = betSelector.currentValue + 1;
                 winScreen.showScreen(winPoints * betMultiplier);
                 winPoints = 0;
             }
         }*/

        /**
         * clears current win lines before next spin
         */

    }, {
        key: "clearCurrentWinLines",
        value: function clearCurrentWinLines() {
            this.currentWinLines = [];
        }
    }, {
        key: "by",
        value: function by(params) {
            if (!this.eventHandlers) {
                this.eventHandlers = {};
            }

            for (var eventName in params) {
                if (params.hasOwnProperty(eventName)) {
                    if (!this.eventHandlers[eventName]) {

                        _engine.events.addListener(eventName, this);
                    }

                    this.eventHandlers[eventName] = params[eventName];
                }
            }
        }
    }, {
        key: "fireEvent",
        value: function fireEvent(eventName) {
            for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
            }

            _engine.events.fireEvent(eventName, args);
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

    function Selector(x, y, leftSrc, rightSrc, possibleValues) {
        _classCallCheck(this, Selector);

        var _this = _possibleConstructorReturn(this, (Selector.__proto__ || Object.getPrototypeOf(Selector)).call(this));

        _this.minusButton = new _button.Button(0, 0, leftSrc, _this.minusOne.bind(_this));
        _this.plusButton = new _button.Button(200, 0, rightSrc, _this.plusOne.bind(_this));

        _this.possibleValues = possibleValues;
        _this.currentValue = 1;
        _this.addNumber();

        _this.addChild(_this.minusButton, _this.plusButton, _this.number);

        _this.position.set(x, y);
        app.stage.addChild(_this);
        return _this;
    }

    _createClass(Selector, [{
        key: "minusOne",
        value: function minusOne() {
            this.number.texture = _engine.textures[this.possibleValues[--this.currentValue]];
            this.buttonDisableCheck();
        }
    }, {
        key: "plusOne",
        value: function plusOne() {
            this.number.texture = _engine.textures[this.possibleValues[++this.currentValue]];
            this.buttonDisableCheck();
        }
    }, {
        key: "buttonDisableCheck",
        value: function buttonDisableCheck() {
            if (this.currentValue >= this.possibleValues.length - 1) {
                this.plusButton.disable();
            } else {
                this.plusButton.enable();
            }

            if (this.currentValue < 1) {
                this.minusButton.disable();
            } else {
                this.minusButton.enable();
            }
        }
    }, {
        key: "addNumber",
        value: function addNumber() {
            this.number = new PIXI.Sprite(_engine.textures[this.possibleValues[this.currentValue]]);
            this.number.anchor.set(0.5);
            this.number.width = 125;
            this.number.height = 125;
            this.number.position.set(100, 0);
        }
    }]);

    return Selector;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/server.js":
/*!******************************!*\
  !*** ./javascript/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Server = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _observable = __webpack_require__(/*! ./observable */ "./javascript/observable.js");

var _utils = __webpack_require__(/*! ./utils */ "./javascript/utils.js");

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Server = exports.Server = function (_Observable) {
    _inherits(Server, _Observable);

    function Server() {
        _classCallCheck(this, Server);

        var _this = _possibleConstructorReturn(this, (Server.__proto__ || Object.getPrototypeOf(Server)).call(this));

        _this.addReelsets();
        _this.spinResult = [];
        _this.betResult = null;
        return _this;
    }

    _createClass(Server, [{
        key: "addReelsets",
        value: function addReelsets() {
            this.reelsetsList = [[[1, 0, 2, 0, 2, 0, 1, 0, 2], [0, 0, 2, 1, 0, 1, 2, 0, 2], [1, 1, 2, 2, 2, 0, 1, 0, 1], [1, 1, 0, 0, 2, 0, 0, 1, 2], [0, 0, 1, 1, 0, 0, 2, 2, 1]], [[0, 2, 2, 1, 0, 0, 2, 1, 2], [2, 2, 1, 1, 0, 1, 2, 0, 1], [1, 1, 0, 2, 1, 0, 2, 0, 0], [2, 1, 1, 2, 0, 0, 1, 0, 2], [1, 0, 2, 2, 2, 1, 0, 2, 0]], [[1, 2, 0, 1, 0, 1, 2, 1, 2], [1, 1, 0, 0, 2, 0, 0, 1, 2], [0, 1, 0, 2, 1, 0, 2, 0, 1], [1, 0, 2, 2, 2, 1, 0, 2, 0], [1, 1, 0, 0, 2, 0, 0, 1, 2]]];
        }
    }, {
        key: "start",
        value: function start(betLines) {
            this.selectReelset();
            this.selectPositions();
            this.betResult = this.checkBetLines(betLines, this.spinResult);
            this.fireEvent("notify:spinAnimationStart", this.spinResult);
            if (this.betResult) {
                this.fireEvent("notify:winBetWasMade", this.betResult);
            }
            this.betResult = null;
        }
    }, {
        key: "selectReelset",
        value: function selectReelset() {
            var index = (0, _utils.randomInt)(0, this.reelsetsList.length - 1);
            this.currentReelset = this.reelsetsList[index];
        }
    }, {
        key: "selectPositions",
        value: function selectPositions() {

            this.spinResult = [];

            for (var i = 0; i < this.currentReelset.length; i++) {
                var curSet = this.currentReelset[i];

                // I should be able to use 3 symbols after startPoint
                var startPoint = (0, _utils.randomInt)(0, curSet.length - 3);
                var curReel = [];

                // I can use one more cycle here but I'm not sure if it's necessary
                curReel.push(curSet[startPoint]);
                curReel.push(curSet[startPoint + 1]);
                curReel.push(curSet[startPoint + 2]);

                this.spinResult.push(curReel);
            }
        }
    }, {
        key: "checkBetLines",
        value: function checkBetLines(betLines, betResult) {

            var winPoints = 0;
            var winSymbols = [];
            var winLines = [];
            var resultConfig = {};

            for (var i = 0; i < betLines.length; i++) {
                var currentLine = betLines[i];
                var symbsMatched = 1;

                var symbolNum = [];

                for (var j = 0; j < betResult.length - 1; j++) {
                    if (betResult[j][currentLine[j]] === betResult[j + 1][currentLine[j + 1]]) {
                        symbsMatched += 1;
                        if (symbsMatched < 3) {
                            symbolNum.push(currentLine[j]);
                            symbolNum.push(currentLine[j + 1]);
                        } else {
                            symbolNum.push(currentLine[j + 1]);
                        }
                    } else {
                        break;
                    }
                }

                if (symbsMatched > 2) {
                    winSymbols.push(symbolNum);
                    winLines.push(i);

                    if (symbsMatched === 3) {
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
                var betMultiplier = _engine.betSelector.currentValue + 1;

                resultConfig.winAmount = winPoints * betMultiplier;
                resultConfig.winLines = winLines;
                resultConfig.winSymbols = winSymbols;

                return resultConfig;
            }
        }
    }]);

    return Server;
}(_observable.Observable);

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
        _this.anchor.set(0.5);

        _this.speed = 160;

        _this.tween = new _customTween.CustomTween(_this, "y", _this.y, _this.y + _this.height, _this.speed);
        _this.bounceTween = new _customTween.CustomTween(_this, "y", _this.y, _this.y - _this.height / 2, _this.speed * 2 / 3);

        _this.widthTween = new _customTween.CustomTween(_this, "width", _this.width, _this.width + 25, _this.speed * 3);
        _this.heightTween = new _customTween.CustomTween(_this, "height", _this.height, _this.height + 25, _this.speed * 3);
        return _this;
    }

    /**
     *
     * @param {function} callback callback function called when bounceTweens are finished
     */


    _createClass(_Symbol, [{
        key: "startSpin",
        value: function startSpin(callback) {
            this.removeWinAnimation();
            this.startCallback = callback;
            this.bounceTween.play(this.y, this.y - this.height / 2, this.speed * 3 / 4, this.bounceDown.bind(this));
        }

        /**
         * return symbol to start position after upBounce
         */

    }, {
        key: "bounceDown",
        value: function bounceDown() {
            this.bounceTween.play(this.y, this.y + this.height / 2, this.speed * 2 / 3, this.startCallback);
        }

        /**
         * sets default symbols params before next spin
         * evenly change position by one slot using tween
         * @param {function} onComplete callback function called when tween is finished
         */

    }, {
        key: "moveOneSlot",
        value: function moveOneSlot(onComplete) {
            this.tween.play(this.y, this.y + this.height, this.speed, onComplete);
        }
    }, {
        key: "endSpin",
        value: function endSpin(callback) {
            this.endCallback = callback;
            this.bounceTween.play(this.y, this.y + this.height / 2, this.speed * 2 / 3, this.bounceUp.bind(this));
        }

        /**
         * return symbol to start position after downBounce
         */

    }, {
        key: "bounceUp",
        value: function bounceUp() {
            this.bounceTween.play(this.y, this.y - this.height / 2, this.speed * 2 / 3, this.endCallback);
        }

        /**
         * animation for win symbols
         */

    }, {
        key: "playWinAnimation",
        value: function playWinAnimation() {
            this.scaleUp();
        }
    }, {
        key: "scaleUp",
        value: function scaleUp() {
            this.widthTween.play(this.width, this.width + 25, this.speed * 3, this.scaleDown.bind(this));
            this.heightTween.play(this.height, this.height + 25, this.speed * 3, this.stub.bind(this));
        }
    }, {
        key: "scaleDown",
        value: function scaleDown() {
            this.widthTween.play(this.width, this.width - 25, this.speed * 3, this.stub.bind(this));
            this.heightTween.play(this.height, this.height - 25, this.speed * 3, this.stub.bind(this));
        }

        /**
         * sets default symbols params
         */

    }, {
        key: "removeWinAnimation",
        value: function removeWinAnimation() {
            this.scale.set(1.0417);
        }
    }, {
        key: "stub",
        value: function stub() {
            //stub
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

/**
 * start/stop spin depending on animationRequired param
 * @param {number} addSymb amount of added symbols before the spin end
 */
function makeSpin() {
    if (!_engine.animationRequired) {
        _engine.winScreen.hideScreen();
        _engine.betLines.removeWinLines();

        _engine.server.start(_engine.betLines.activeBetLines);
    } else {
        (0, _engine.changeAnimRequireTo)(false);
        _engine.spinButton.disable();
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

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

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

        _this.by({ "notify:winSpinOver": _this.showScreen });

        app.stage.addChild(_this);
        return _this;
    }

    /**
     * makes winScreen visible
     * @param {number} config - amount of win points
     */


    _createClass(WinScreen, [{
        key: "showScreen",
        value: function showScreen(config) {
            var winMsg = "You won " + config.winAmount + " !!!!!";
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
    }, {
        key: "by",
        value: function by(params) {
            if (!this.eventHandlers) {
                this.eventHandlers = {};
            }

            for (var eventName in params) {
                if (params.hasOwnProperty(eventName)) {
                    if (!this.eventHandlers[eventName]) {

                        _engine.events.addListener(eventName, this);
                    }

                    this.eventHandlers[eventName] = params[eventName];
                }
            }
        }
    }]);

    return WinScreen;
}(PIXI.Graphics);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9iZXRMaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2J1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2N1c3RvbVR3ZWVuLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvZW5naW5lLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L29ic2VydmFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWN0YW5nbGUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWVsLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3N5bWJvbC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3V0aWxzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvd2luU2NyZWVuLmpzIl0sIm5hbWVzIjpbIkJldExpbmVzIiwiYWN0aXZlTGluZXMiLCJhZGRMaW5lUG9zaXRpb25zIiwiYWxsTGluZXMiLCJhZGRMaW5lcyIsImFjdGl2ZUJldExpbmVzIiwiYnkiLCJzaG93V2luTGluZXMiLCJhcHAiLCJzdGFnZSIsImFkZENoaWxkIiwibGluZVBvc2l0aW9ucyIsImdhbWVTaXplIiwiaGVpZ2h0Iiwid2lkdGgiLCJpIiwibGVuZ3RoIiwiYmV0TGluZSIsImFyZ3MiLCJMaW5lIiwibGluZVRvIiwicHVzaCIsImNvbmZpZyIsIndpbkxpbmVzIiwiY3VyTGluZSIsInRpbnQiLCJmb3JFYWNoIiwibGluZSIsInBhcmFtcyIsImV2ZW50SGFuZGxlcnMiLCJldmVudE5hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsImV2ZW50cyIsImFkZExpc3RlbmVyIiwiZmlyZUV2ZW50IiwiUElYSSIsIkNvbnRhaW5lciIsIkJ1dHRvbiIsIngiLCJ5IiwiYnV0dG9uVGV4dHVyZXMiLCJjYWxsYmFjayIsInRleHR1cmVzIiwiaWRsZSIsImlkbGVUZXh0dXJlIiwiaG92ZXJUZXh0dXJlIiwiaG92ZXIiLCJkb3duVGV4dHVyZSIsImRvd24iLCJkaXNhYmxlZFRleHR1cmUiLCJkaXNhYmxlZCIsImFuY2hvciIsInNldCIsInBvc2l0aW9uIiwiaW50ZXJhY3RpdmUiLCJzZXRIaXRBcmVhIiwidGV4dHVyZSIsInJhZGl1cyIsImhpdEFyZWEiLCJDaXJjbGUiLCJTcHJpdGUiLCJDdXN0b21Ud2VlbiIsIm9iaiIsInByb3BlcnR5TmFtZSIsInN0YXJ0IiwiZW5kIiwicGVyaW9kIiwiZ2V0U3BlZWQiLCJyZW5kZXJMb29wIiwidXBkYXRlUmVxdWlyZWQiLCJkZWx0YSIsImRpc3RhbmNlIiwic3BlZWQiLCJvbkNvbXBsZXRlIiwibnVtT2ZGcmFtZXMiLCJ0aW1lQmV0d2VlbkZyYW1lcyIsImNoYW5nZUFuaW1SZXF1aXJlVG8iLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsInZpZXciLCJMb2FkZXIiLCJzaGFyZWQiLCJhZGQiLCJsb2FkIiwic2V0dXAiLCJiYWNrZ3JvdW5kIiwic3BpbkJ1dHRvbiIsInJlZWxzIiwid2luU2NyZWVuIiwiYmV0U2VsZWN0b3IiLCJzZXJ2ZXIiLCJiZXRMaW5lcyIsImFuaW1hdGlvblJlcXVpcmVkIiwicmVzb3VyY2VzIiwiRXZlbnRzIiwiUmVlbHMiLCJzcGluQnV0dG9uU3JjIiwibWFrZVNwaW4iLCJXaW5TY3JlZW4iLCJTZWxlY3RvciIsImxlZnRTZWxlY3RvciIsInJpZ2h0U2VsZWN0b3IiLCJudW1iZXJzIiwiU2VydmVyIiwidGlja2VyIiwiZ2FtZUxvb3AiLCJ1cGRhdGUiLCJib29sZWFuIiwiZXZlbnRMaXN0ZW5lciIsImxpc3RlbmVycyIsImxpc3RlbmVyIiwiaGFuZGxlciIsImFwcGx5Iiwic3RhcnRYIiwic3RhcnRZIiwiZW5kWCIsImVuZFkiLCJsaW5lU3R5bGUiLCJtb3ZlVG8iLCJHcmFwaGljcyIsIk9ic2VydmFibGUiLCJSZWN0YW5nbGUiLCJjb2xvciIsImJlZ2luRmlsbCIsImRyYXdSZWN0IiwiZW5kRmlsbCIsIlJlZWwiLCJ2aXNpYmxlU3ltYm9sc051bSIsInN0ZXAiLCJzeW1ib2xzIiwiYWRkU3ltYm9scyIsInN5bWJvbHNCZWZvcmVSZXN1bHQiLCJyZXN1bHRTeW1ib2xzIiwiY3VycmVudFJlc3VsdFN5bWIiLCJzeW1ib2xzQ291bnRlciIsInN5bWJvbHNOdW0iLCJpbmRleCIsInBvc3NpYmxlU3ltU3JjIiwic3ltYm9sIiwiU3ltYm9sIiwiYmV0UmVzdWx0Iiwic3ltYnNCZlJlc3VsdCIsInN0YXJ0U3BpbiIsIm9uU3RhcnRCb3VuY2VGaW5pc2hlZCIsImJpbmQiLCJyYW5kb21TeW1iIiwibGFzdEluZGV4IiwibGFzdFN5bWJvbCIsInJhbmRSZXNldFN5bWJWYWx1ZSIsInNldFN5bWJSZXN1bHRWYWx1ZSIsInVuc2hpZnQiLCJwb3AiLCJtb3ZlT25lU2xvdCIsIm9uU3ltYm9sTW92ZWRPbmVTbG90Iiwic3ltYiIsInR5cGUiLCJtb3ZlTGFzdFN5bWJPblRvcCIsImVuZFNwaW4iLCJvbkVuZEJvdW5jZUZpbmlzaGVkIiwib25TcGluT3ZlciIsImFsbFJlZWxzIiwicmVlbCIsInJvd3MiLCJhZGRNYXNrIiwicmVlbHNDb3VudGVyIiwiY3VycmVudFdpbkxpbmVzIiwid2luQW5pbVJlcXVpcmVkIiwid2luQ29uZmlnIiwic2V0V2luQW5pbWF0aW9uIiwicmVlbHNNYXNrIiwibWFzayIsIm9uUmVlbFN0b3BwZWQiLCJlbmFibGUiLCJzaG93V2luQW5pbWF0aW9uIiwid2luU3ltYm9scyIsImoiLCJwbGF5V2luQW5pbWF0aW9uIiwibGVmdFNyYyIsInJpZ2h0U3JjIiwicG9zc2libGVWYWx1ZXMiLCJtaW51c0J1dHRvbiIsIm1pbnVzT25lIiwicGx1c0J1dHRvbiIsInBsdXNPbmUiLCJjdXJyZW50VmFsdWUiLCJhZGROdW1iZXIiLCJudW1iZXIiLCJidXR0b25EaXNhYmxlQ2hlY2siLCJkaXNhYmxlIiwiYWRkUmVlbHNldHMiLCJzcGluUmVzdWx0IiwicmVlbHNldHNMaXN0Iiwic2VsZWN0UmVlbHNldCIsInNlbGVjdFBvc2l0aW9ucyIsImNoZWNrQmV0TGluZXMiLCJjdXJyZW50UmVlbHNldCIsImN1clNldCIsInN0YXJ0UG9pbnQiLCJjdXJSZWVsIiwid2luUG9pbnRzIiwicmVzdWx0Q29uZmlnIiwiY3VycmVudExpbmUiLCJzeW1ic01hdGNoZWQiLCJzeW1ib2xOdW0iLCJiZXRNdWx0aXBsaWVyIiwid2luQW1vdW50IiwidGV4dHVyZVNyYyIsInR3ZWVuIiwiYm91bmNlVHdlZW4iLCJ3aWR0aFR3ZWVuIiwiaGVpZ2h0VHdlZW4iLCJyZW1vdmVXaW5BbmltYXRpb24iLCJzdGFydENhbGxiYWNrIiwicGxheSIsImJvdW5jZURvd24iLCJlbmRDYWxsYmFjayIsImJvdW5jZVVwIiwic2NhbGVVcCIsInNjYWxlRG93biIsInN0dWIiLCJzY2FsZSIsInJhbmRvbUludCIsIm1pbiIsIm1heCIsInJhbmQiLCJNYXRoIiwicmFuZG9tIiwiZmxvb3IiLCJoaWRlU2NyZWVuIiwicmVtb3ZlV2luTGluZXMiLCJzY3JlZW4iLCJtZXNzYWdlIiwiVGV4dCIsInN0eWxlIiwiZm9udEZhbWlseSIsImZvbnRTaXplIiwiZmlsbCIsInZpc2libGUiLCJhbHBoYSIsInNob3dTY3JlZW4iLCJ3aW5Nc2ciLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7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LEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBRkosRUFHSSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBSEosRUFJSSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBSkosRUFLSSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBTEosQ0FEZ0IsRUFRaEIsQ0FDSSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBREosRUFFSSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBRkosRUFHSSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBSEosRUFJSSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBSkosRUFLSSxDQUFDLENBQUQsRUFBRyxDQUFILEVBQUssQ0FBTCxFQUFPLENBQVAsRUFBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsRUFBZSxDQUFmLEVBQWlCLENBQWpCLENBTEosQ0FSZ0IsRUFlaEIsQ0FDSSxDQUFDLENB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TUFBSzZOLE1BQW5CLEVBQTJCLE1BQUtDLE9BQWhDO0FBQ0EsY0FBS00sT0FBTCxHQUFlLEtBQWY7QUFDQSxjQUFLQyxLQUFMLEdBQWEsR0FBYjs7QUFFQSxjQUFLek8sRUFBTCxDQUFRLEVBQUMsc0JBQXVCLE1BQUswTyxVQUE3QixFQUFSOztBQUVBeE8sWUFBSUMsS0FBSixDQUFVQyxRQUFWO0FBbEJvQztBQW1CdkM7O0FBRUQ7Ozs7Ozs7O21DQUlZWSxNLEVBQU87QUFDZixnQkFBSTJOLFNBQVMsYUFBYTNOLE9BQU93TCxTQUFwQixHQUFnQyxRQUE3QztBQUNBLGlCQUFLZ0MsT0FBTCxHQUFlLElBQWY7QUFDQSxpQkFBS04sT0FBTCxDQUFhVSxJQUFiLEdBQW9CRCxNQUFwQjtBQUNIOztBQUVEOzs7Ozs7cUNBR2M7QUFDVixpQkFBS0gsT0FBTCxHQUFlLEtBQWY7QUFDSDs7OzJCQUVHbE4sTSxFQUFRO0FBQ1IsZ0JBQUksQ0FBQyxLQUFLQyxhQUFWLEVBQXlCO0FBQ3JCLHFCQUFLQSxhQUFMLEdBQXFCLEVBQXJCO0FBQ0g7O0FBRUQsaUJBQUssSUFBSUMsU0FBVCxJQUFzQkYsTUFBdEIsRUFBOEI7QUFDMUIsb0JBQUlBLE9BQU9HLGNBQVAsQ0FBc0JELFNBQXRCLENBQUosRUFBdUM7QUFDbkMsd0JBQUssQ0FBQyxLQUFLRCxhQUFMLENBQW1CQyxTQUFuQixDQUFOLEVBQW9DOztBQUVoQ0UsdUNBQU9DLFdBQVAsQ0FBbUJILFNBQW5CLEVBQThCLElBQTlCO0FBQ0g7O0FBRUQseUJBQUtELGFBQUwsQ0FBbUJDLFNBQW5CLElBQWdDRixPQUFPRSxTQUFQLENBQWhDO0FBQ0g7QUFDSjtBQUNKOzs7O0VBdEQwQkssS0FBS3FGLFEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qYXZhc2NyaXB0L2VuZ2luZS5qc1wiKTtcbiIsImltcG9ydCB7TGluZX0gZnJvbSBcIi4vbGluZVwiO1xyXG5pbXBvcnQge2V2ZW50c30gZnJvbSBcIi4vZW5naW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmV0TGluZXMgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lcntcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlTGluZXMgPSA1O1xyXG4gICAgICAgIHRoaXMuYWRkTGluZVBvc2l0aW9ucygpO1xyXG5cclxuICAgICAgICB0aGlzLmFsbExpbmVzID0gW107XHJcbiAgICAgICAgdGhpcy5hZGRMaW5lcyh0aGlzLmFjdGl2ZUxpbmVzKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmVCZXRMaW5lcyA9IFtcclxuICAgICAgICAgICAgWzAsMCwwLDAsMF0sXHJcbiAgICAgICAgICAgIFsxLDEsMSwxLDFdLFxyXG4gICAgICAgICAgICBbMiwyLDIsMiwyXSxcclxuICAgICAgICAgICAgWzAsMSwyLDEsMF0sXHJcbiAgICAgICAgICAgIFsyLDEsMCwxLDJdXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy5ieSh7XCJub3RpZnk6d2luU3Bpbk92ZXJcIiA6IHRoaXMuc2hvd1dpbkxpbmVzfSk7XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGluZVBvc2l0aW9ucyAoKSB7XHJcbiAgICAgICAgdGhpcy5saW5lUG9zaXRpb25zID0gW1xyXG4gICAgICAgICAgICBbMCwgZ2FtZVNpemUuaGVpZ2h0LzYsIGdhbWVTaXplLndpZHRoLCBnYW1lU2l6ZS5oZWlnaHQvNl0sXHJcbiAgICAgICAgICAgIFswLCBnYW1lU2l6ZS5oZWlnaHQvMiwgZ2FtZVNpemUud2lkdGgsIGdhbWVTaXplLmhlaWdodC8yXSxcclxuICAgICAgICAgICAgWzAsIGdhbWVTaXplLmhlaWdodCAtIGdhbWVTaXplLmhlaWdodC82LCBnYW1lU2l6ZS53aWR0aCwgZ2FtZVNpemUuaGVpZ2h0IC0gZ2FtZVNpemUuaGVpZ2h0LzZdLFxyXG4gICAgICAgICAgICBbMCwgMCwgZ2FtZVNpemUud2lkdGgvMiwgIGdhbWVTaXplLmhlaWdodCAtIGdhbWVTaXplLmhlaWdodC82LCBnYW1lU2l6ZS53aWR0aCwgMF0sXHJcbiAgICAgICAgICAgIFswLCBnYW1lU2l6ZS5oZWlnaHQsIGdhbWVTaXplLndpZHRoLzIsIGdhbWVTaXplLmhlaWdodC82LCBnYW1lU2l6ZS53aWR0aCwgZ2FtZVNpemUuaGVpZ2h0XVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBhZGRMaW5lcyAoKSB7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVQb3NpdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJldExpbmU7XHJcbiAgICAgICAgICAgIGxldCBhcmdzID0gdGhpcy5saW5lUG9zaXRpb25zW2ldO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID09PSA0KXtcclxuICAgICAgICAgICAgICAgIGJldExpbmUgPSBuZXcgTGluZSguLi5hcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJncy5sZW5ndGggPT09IDYpe1xyXG4gICAgICAgICAgICAgICAgYmV0TGluZSA9IG5ldyBMaW5lKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgYmV0TGluZS5saW5lVG8oYXJnc1s0XSwgYXJnc1s1XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYWxsTGluZXMucHVzaChiZXRMaW5lKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChiZXRMaW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1dpbkxpbmVzKGNvbmZpZykge1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb25maWcud2luTGluZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY3VyTGluZSA9IGNvbmZpZy53aW5MaW5lc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5hbGxMaW5lc1tjdXJMaW5lXS50aW50ID0gMHgwMGZmMDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZVdpbkxpbmVzKCkge1xyXG4gICAgICAgIHRoaXMuYWxsTGluZXMuZm9yRWFjaCggKGxpbmUpID0+IHtcclxuICAgICAgICAgICAgbGluZS50aW50ID0gMHg4MDgwODA7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGJ5IChwYXJhbXMpIHtcclxuICAgICAgICBpZiggIXRoaXMuZXZlbnRIYW5kbGVycyApe1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciggbGV0IGV2ZW50TmFtZSBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYoIHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5hZGRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gcGFyYW1zW2V2ZW50TmFtZV0gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZpcmVFdmVudChldmVudE5hbWUsIC4uLmFyZ3Mpe1xyXG4gICAgICAgIGV2ZW50cy5maXJlRXZlbnQoZXZlbnROYW1lLCBhcmdzKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHt0ZXh0dXJlc30gZnJvbSBcIi4vZW5naW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBidXR0b25UZXh0dXJlcywgY2FsbGJhY2spe1xyXG4gICAgICAgIHN1cGVyKHRleHR1cmVzW2J1dHRvblRleHR1cmVzLmlkbGVdKTtcclxuXHJcbiAgICAgICAgdGhpcy5pZGxlVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmlkbGU7XHJcbiAgICAgICAgdGhpcy5ob3ZlclRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5ob3ZlcjtcclxuICAgICAgICB0aGlzLmRvd25UZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuZG93bjtcclxuICAgICAgICB0aGlzLmRpc2FibGVkVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmRpc2FibGVkO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gMTAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICAgICAgICB0aGlzLnNldEhpdEFyZWEoMTI1KTtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtb3VzZW92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5kaXNhYmxlZCA/IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXSA6IHRleHR1cmVzW3RoaXMuaG92ZXJUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZW91dCgpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmRpc2FibGVkID8gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdIDogdGV4dHVyZXNbdGhpcy5pZGxlVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2Vkb3duKCkge1xyXG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5kb3duVGV4dHVyZV07XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2V1cCgpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmRpc2FibGVkID8gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdIDogdGV4dHVyZXNbdGhpcy5ob3ZlclRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5pZGxlVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBoaXRBcmVhIHJhZGl1c1xyXG4gICAgICovXHJcbiAgICBzZXRIaXRBcmVhIChyYWRpdXMpIHtcclxuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5DaXJjbGUoMCwgMCwgcmFkaXVzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7cmVuZGVyTG9vcH0gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7dGltZUJldHdlZW5GcmFtZXN9IGZyb20gXCIuL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tVHdlZW4ge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBwcm9wZXJ0eU5hbWUsIHN0YXJ0LCBlbmQsIHBlcmlvZCl7XHJcblxyXG4gICAgICAgIHRoaXMub2JqID0gb2JqO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLnByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZTtcclxuICAgICAgICB0aGlzLmdldFNwZWVkKHBlcmlvZCk7XHJcblxyXG4gICAgICAgIHJlbmRlckxvb3AucHVzaCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbiBlYWNoIGZyYW1lIGV2ZW5seSBjaGFuZ2UgcmVxdWlyZWQgcGFyYW0sIGZyb20gdGhlIHN0YXJ0IHBvaW50IHRvIHRoZSBlbmQsIGZvciBhIHNldCBwZXJpb2Qgb2YgdGltZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhIGVsaW1pbmF0ZXMgZGVsYXlzIGJldHdlZW4gZnJhbWVzXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZSAoZGVsdGEpe1xyXG4gICAgICAgIGlmKHRoaXMudXBkYXRlUmVxdWlyZWQpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmRpc3RhbmNlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA8IHRoaXMuZW5kKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdICA+PSB0aGlzLmVuZCAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdID0gdGhpcy5lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPiB0aGlzLmVuZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSAgPD0gdGhpcy5lbmQgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA9IHRoaXMuZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFNwZWVkIChwZXJpb2QpIHtcclxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5lbmQgLSB0aGlzLnN0YXJ0O1xyXG4gICAgICAgIHRoaXMubnVtT2ZGcmFtZXMgPSBwZXJpb2QvdGltZUJldHdlZW5GcmFtZXM7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuZGlzdGFuY2UvdGhpcy5udW1PZkZyYW1lcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgc3RhcnQgcG9pbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgZW5kIHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGVyaW9kIHBlcmlvZCBvZiB0aW1lIG5lZWRlZCB0byByZWFjaCB0aGUgZW5kcG9pbnRcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ29tcGxldGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgcGxheShzdGFydCwgZW5kLCBwZXJpb2QsIG9uQ29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5nZXRTcGVlZChwZXJpb2QpO1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IG9uQ29tcGxldGU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtCdXR0b259IGZyb20gXCIuL2J1dHRvblwiO1xyXG5pbXBvcnQge1JlZWxzfSBmcm9tIFwiLi9yZWVsc1wiO1xyXG5pbXBvcnQge21ha2VTcGlufSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQge1dpblNjcmVlbn0gZnJvbSBcIi4vd2luU2NyZWVuXCI7XHJcbmltcG9ydCB7U2VsZWN0b3J9IGZyb20gXCIuL3NlbGVjdG9yXCI7XHJcbmltcG9ydCB7RXZlbnRzfSBmcm9tIFwiLi9ldmVudHNcIjtcclxuaW1wb3J0IHtTZXJ2ZXJ9IGZyb20gXCIuL3NlcnZlclwiO1xyXG5pbXBvcnQge0JldExpbmVzfSBmcm9tIFwiLi9iZXRMaW5lc1wiO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XHJcblxyXG5QSVhJLkxvYWRlci5zaGFyZWRcclxuICAgIC5hZGQoXCIuL2ltYWdlcy9zaGVldC5qc29uXCIpXHJcbiAgICAubG9hZChzZXR1cCk7XHJcblxyXG5leHBvcnQgbGV0IHRleHR1cmVzLFxyXG4gICAgYmFja2dyb3VuZCxcclxuICAgIHNwaW5CdXR0b24sXHJcbiAgICByZWVscyxcclxuICAgIHdpblNjcmVlbixcclxuICAgIGJldFNlbGVjdG9yLFxyXG4gICAgZXZlbnRzLFxyXG4gICAgc2VydmVyLFxyXG4gICAgYmV0TGluZXM7XHJcblxyXG5leHBvcnQgbGV0IHJlbmRlckxvb3AgPSBbXTtcclxuZXhwb3J0IGxldCBhbmltYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICB0ZXh0dXJlcyA9IFBJWEkuTG9hZGVyLnNoYXJlZC5yZXNvdXJjZXNbXCIuL2ltYWdlcy9zaGVldC5qc29uXCJdLnRleHR1cmVzO1xyXG5cclxuICAgIGJhY2tncm91bmQgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZXNbXCJiYWNrZ3JvdW5kLnBuZ1wiXSk7XHJcbiAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQoYmFja2dyb3VuZCk7XHJcblxyXG4gICAgZXZlbnRzID0gbmV3IEV2ZW50cygpO1xyXG4gICAgYmV0TGluZXMgPSBuZXcgQmV0TGluZXMoKTtcclxuICAgIHJlZWxzID0gbmV3IFJlZWxzKCk7XHJcbiAgICBzcGluQnV0dG9uID0gbmV3IEJ1dHRvbig0MDAsIDQ1MCwgc3BpbkJ1dHRvblNyYywgbWFrZVNwaW4pO1xyXG4gICAgd2luU2NyZWVuID0gbmV3IFdpblNjcmVlbigwLDAsIGdhbWVTaXplLndpZHRoLGdhbWVTaXplLmhlaWdodCwgMHg1MDRmNTIpO1xyXG4gICAgYmV0U2VsZWN0b3IgPSBuZXcgU2VsZWN0b3IoNTUwLCA0NTAsIGxlZnRTZWxlY3RvciwgcmlnaHRTZWxlY3RvciwgbnVtYmVycyk7XHJcblxyXG5cclxuICAgIHNlcnZlciA9IG5ldyBTZXJ2ZXIoKTtcclxuXHJcbiAgICBhcHAudGlja2VyLmFkZChkZWx0YSA9PiBnYW1lTG9vcChkZWx0YSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcChkZWx0YSl7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVuZGVyTG9vcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgcmVuZGVyTG9vcFtpXS51cGRhdGUoZGVsdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogZ2l2ZXMgc3BpbkJ1dHRvbiBhbiBvcHRpb24gdG8gc3RvcCBzcGluIHdpdGggY3VycmVudCBpdGVyYXRpb25cclxuICogQHBhcmFtIHtib29sZWFufSBib29sZWFuIHNldCBhbmltYXRpb25SZXF1aXJlZCB0byB0cnVlIG9yIGZhbHNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlQW5pbVJlcXVpcmVUbyAoYm9vbGVhbikge1xyXG4gICAgYW5pbWF0aW9uUmVxdWlyZWQgPSBib29sZWFuO1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBFdmVudHMge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBOYW1lIG9mIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnRMaXN0ZW5lciBvYmplY3Qgd2l0aCBjYWxsYmFjayBmdW5jdGlvbiwgd2hpY2ggc2hvdWxkIGJlIGNhbGxlZCBvbiBldmVudFxyXG4gICAgICovXHJcbiAgICBhZGRMaXN0ZW5lcihldmVudE5hbWUsIGV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBpZighdGhpcy5ldmVudHNbZXZlbnROYW1lXSkge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudE5hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChldmVudExpc3RlbmVyKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIE5hbWUgb2YgZXZlbnRcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFyZ3MgYXJndW1lbnRzIGZvciBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBmaXJlRXZlbnQgKGV2ZW50TmFtZSwgYXJncyl7XHJcbiAgICAgICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuZXZlbnRzW2V2ZW50TmFtZV07XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGxpc3RlbmVyID0gbGlzdGVuZXJzW2ldO1xyXG4gICAgICAgICAgICBsZXQgaGFuZGxlciA9IGxpc3RlbmVyLmV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXTtcclxuXHJcbiAgICAgICAgICAgIGhhbmRsZXIuYXBwbHkobGlzdGVuZXIsIGFyZ3MpXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBMaW5lIGV4dGVuZHMgUElYSS5HcmFwaGljcyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoc3RhcnRYLCBzdGFydFksIGVuZFgsIGVuZFkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGluZVN0eWxlKDMsIDB4ODA4MDgwLCAwLjUpO1xyXG4gICAgICAgIHRoaXMubW92ZVRvKHN0YXJ0WCwgc3RhcnRZKTtcclxuICAgICAgICB0aGlzLmxpbmVUbyhlbmRYLCBlbmRZKTtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge2V2ZW50c30gZnJvbSBcIi4vZW5naW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgT2JzZXJ2YWJsZSB7XHJcblxyXG4gICAgYnkgKHBhcmFtcykge1xyXG4gICAgICAgIGlmKCAhdGhpcy5ldmVudEhhbmRsZXJzICl7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKCBsZXQgZXZlbnROYW1lIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiggcGFyYW1zLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSkgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICF0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0gPSBwYXJhbXNbZXZlbnROYW1lXSA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlyZUV2ZW50KGV2ZW50TmFtZSwgLi4uYXJncyl7XHJcbiAgICAgICAgZXZlbnRzLmZpcmVFdmVudChldmVudE5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFBJWEkuR3JhcGhpY3Mge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmVTdHlsZSgxLCAweDAwMDAwMCwgMSk7XHJcbiAgICAgICAgdGhpcy5iZWdpbkZpbGwoY29sb3IpO1xyXG4gICAgICAgIHRoaXMuZHJhd1JlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5lbmRGaWxsKCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3RleHR1cmVzLCBhbmltYXRpb25SZXF1aXJlZH0gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7cmFuZG9tSW50fSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQge1N5bWJvbH0gZnJvbSBcIi4vc3ltYm9sXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVlbCBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgdmlzaWJsZVN5bWJvbHNOdW0pIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBnYW1lU2l6ZS5oZWlnaHQvdmlzaWJsZVN5bWJvbHNOdW07XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzID0gW107XHJcblxyXG4gICAgICAgIC8vb25lIG1vcmUgc3ltYm9sIHdoaWNoIHdpbGwgYmUgY292ZXJlZCBieSByZWVscyBtYXNrIGlzIHJlcXVpcmVkIHRvIG1ha2UgYW5pbWF0aW9uXHJcbiAgICAgICAgdGhpcy5hZGRTeW1ib2xzKHZpc2libGVTeW1ib2xzTnVtICsgMSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdCA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRTeW1ib2xzID0gWzAsMCwwXTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSZXN1bHRTeW1iID0gMjtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlciA9IHRoaXMuc3ltYm9scy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpbmcgc3ltYm9scyB0byByZWVsIG9uIGNvbnN0cnVjdG9yIGNyZWF0aW9uXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ltYm9sc051bSByZXF1aXJlZCBhbW91bnQgb24gc3ltYm9sc1xyXG4gICAgICovXHJcbiAgICBhZGRTeW1ib2xzKHN5bWJvbHNOdW0pIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3ltYm9sc051bTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSByYW5kb21JbnQoMCwgcG9zc2libGVTeW1TcmMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIGxldCBzeW1ib2wgPSBuZXcgU3ltYm9sKHBvc3NpYmxlU3ltU3JjW2luZGV4XSwgdGhpcy5zdGVwKTtcclxuICAgICAgICAgICAgc3ltYm9sLnBvc2l0aW9uLnNldCh0aGlzLnN0ZXAvMiAsdGhpcy5zdGVwICogaSArIHRoaXMuc3RlcC8yKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChzeW1ib2wpO1xyXG4gICAgICAgICAgICB0aGlzLnN5bWJvbHMucHVzaChzeW1ib2wpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHthcnJheX0gYmV0UmVzdWx0IGFycmF5IHdpdGggcmVzdWx0IGZvciBjdXJyZW50IGJldFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN5bWJzQmZSZXN1bHQgYW1vdW50IG9mIGl0ZXJhdGlvbiBiZWZvcmUgcmVzdWx0XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNvbXBsZXRlIGNhbGxiYWNrIGZ1bmN0aW9uLCB3aGljaCBjYWxsZWQgd2hlbiBhbGwgaXRlcmF0aW9ucyBhcmUgZmluaXNoZWRcclxuICAgICAqL1xyXG4gICAgc3RhcnQgKGJldFJlc3VsdCxzeW1ic0JmUmVzdWx0LCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRTeW1ib2xzID0gYmV0UmVzdWx0O1xyXG4gICAgICAgIHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdCA9IHN5bWJzQmZSZXN1bHQ7XHJcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZTtcclxuICAgICAgICAvLyB0aGlzLm1vdmVMYXN0U3ltYk9uVG9wKCk7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzLmZvckVhY2goKHN5bWJvbCkgPT4ge1xyXG4gICAgICAgICAgICBzeW1ib2wuc3RhcnRTcGluKCB0aGlzLm9uU3RhcnRCb3VuY2VGaW5pc2hlZC5iaW5kKHRoaXMpICk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJhbmRvbVN5bWIgaWYgdHJ1ZSBhZGQgcmFuZG9tU3ltYm9sXHJcbiAgICAgKi9cclxuICAgIG1vdmVMYXN0U3ltYk9uVG9wKHJhbmRvbVN5bWIgPSB0cnVlKXtcclxuICAgICAgICBsZXQgbGFzdEluZGV4ID0gdGhpcy5zeW1ib2xzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgbGV0IGxhc3RTeW1ib2wgPSB0aGlzLnN5bWJvbHNbbGFzdEluZGV4XTtcclxuXHJcbiAgICAgICAgaWYocmFuZG9tU3ltYil7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZFJlc2V0U3ltYlZhbHVlKGxhc3RTeW1ib2wpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3ltYlJlc3VsdFZhbHVlKGxhc3RTeW1ib2wpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFzdFN5bWJvbC5wb3NpdGlvbi5zZXQodGhpcy5zdGVwLzIsIC1sYXN0U3ltYm9sLmhlaWdodCArIHRoaXMuc3RlcC8yKTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzLnVuc2hpZnQodGhpcy5zeW1ib2xzLnBvcCgpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzLmZvckVhY2goKHN5bWJvbCkgPT4ge1xyXG4gICAgICAgICAgICBzeW1ib2wubW92ZU9uZVNsb3QoIHRoaXMub25TeW1ib2xNb3ZlZE9uZVNsb3QuYmluZCh0aGlzKSApO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByYW5kb21seSByZXNldCBzeW1ib2wncyB0ZXh0dXJlIGFuZCB0eXBlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc3ltYiBzeW1ib2wgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHJhbmRSZXNldFN5bWJWYWx1ZShzeW1iKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gcmFuZG9tSW50KDAsIHBvc3NpYmxlU3ltU3JjLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHN5bWIudGV4dHVyZSA9IHRleHR1cmVzW3Bvc3NpYmxlU3ltU3JjW2luZGV4XV07XHJcbiAgICAgICAgc3ltYi50eXBlID0gcG9zc2libGVTeW1TcmNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN5bWJSZXN1bHRWYWx1ZShzeW1iKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5yZXN1bHRTeW1ib2xzW3RoaXMuY3VycmVudFJlc3VsdFN5bWJdO1xyXG4gICAgICAgIHN5bWIudGV4dHVyZSA9IHRleHR1cmVzW3Bvc3NpYmxlU3ltU3JjW2luZGV4XV07XHJcbiAgICAgICAgc3ltYi50eXBlID0gcG9zc2libGVTeW1TcmNbaW5kZXhdO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFJlc3VsdFN5bWItLTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHdoZW4gZWFjaCBzeW1ib2wgbW92ZWQgb25lIHNsb3QsIGl0IHJlZHVjZXMgc3ltYm9sc0NvdW50ZXJcclxuICAgICAqIHdoZW4gYWxsIHN5bWJvbHMgYXJlIGZpbmlzaGVkLCByZXNldCB0aGUgY291bnRlclxyXG4gICAgICogaWYgbW9yZSBpdGVyYXRpb25zIGFyZSByZXF1aXJlZCwgY2FsbCB0aGlzLm1vdmVMYXN0U3ltYk9uVG9wXHJcbiAgICAgKi9cclxuICAgIG9uU3ltYm9sTW92ZWRPbmVTbG90KCkge1xyXG4gICAgICAgIHRoaXMuc3ltYm9sc0NvdW50ZXItLTtcclxuICAgICAgICBpZiAodGhpcy5zeW1ib2xzQ291bnRlciA9PT0gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc0NvdW50ZXIgPSB0aGlzLnN5bWJvbHMubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNCZWZvcmVSZXN1bHQtLTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN5bWJvbHNCZWZvcmVSZXN1bHQgPiAwICYmIGFuaW1hdGlvblJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVMYXN0U3ltYk9uVG9wKCk7XHJcblxyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5jdXJyZW50UmVzdWx0U3ltYiA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVMYXN0U3ltYk9uVG9wKGZhbHNlKTtcclxuICAgICAgICAgICAgfWVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xzLmZvckVhY2goKHN5bWJvbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbC5lbmRTcGluKCB0aGlzLm9uRW5kQm91bmNlRmluaXNoZWQuYmluZCh0aGlzKSApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU3RhcnRCb3VuY2VGaW5pc2hlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlci0tO1xyXG4gICAgICAgIGlmICh0aGlzLnN5bWJvbHNDb3VudGVyID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlciA9IHRoaXMuc3ltYm9scy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUxhc3RTeW1iT25Ub3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbmRCb3VuY2VGaW5pc2hlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlci0tO1xyXG4gICAgICAgIGlmICh0aGlzLnN5bWJvbHNDb3VudGVyID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlciA9IHRoaXMuc3ltYm9scy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMub25TcGluT3ZlcigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gY3VycmVudCBzcGluIGlzIG92ZXIgc2V0IGRlZmF1bHQgdmFsdWVzIGFuZCBjYWxsIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIG9uU3Bpbk92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50UmVzdWx0U3ltYiA9IDI7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRTeW1ib2xzID0gW107XHJcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtjaGFuZ2VBbmltUmVxdWlyZVRvLCBzcGluQnV0dG9uLCBldmVudHN9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5pbXBvcnQge1JlZWx9IGZyb20gXCIuL3JlZWxcIjtcclxuXHJcbi8vIEkgZ3Vlc3MgdGhpcyBjbGFzcyBpcyBvdmVybG9hZGVkIGJ1dCBJIGhhdmVuJ3QgZm91bmQgYSBzb2x1dGlvbiBob3cgdG8gaGFuZGxlIHdpbiBsaW5lcyBvdGhlciB3YXlcclxuZXhwb3J0IGNsYXNzIFJlZWxzIGV4dGVuZHMgUElYSS5Db250YWluZXJ7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmFsbFJlZWxzID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lU2l6ZS5yZWVsczsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHJlZWwgPSBuZXcgUmVlbChnYW1lU2l6ZS53aWR0aC9nYW1lU2l6ZS5yZWVscyAqIGksIDAsZ2FtZVNpemUucm93cyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsUmVlbHMucHVzaChyZWVsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChyZWVsKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5hZGRNYXNrKCk7XHJcblxyXG4gICAgICAgIHRoaXMucmVlbHNDb3VudGVyID0gdGhpcy5hbGxSZWVscy5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2luTGluZXMgPSBbXTtcclxuICAgICAgICB0aGlzLndpbkFuaW1SZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMud2luQ29uZmlnID0gbnVsbDtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG5cclxuICAgICAgICB0aGlzLmJ5KHtcclxuICAgICAgICAgICAgXCJub3RpZnk6c3BpbkFuaW1hdGlvblN0YXJ0XCIgOiB0aGlzLnN0YXJ0LFxyXG4gICAgICAgICAgICBcIm5vdGlmeTp3aW5CZXRXYXNNYWRlXCIgOiB0aGlzLnNldFdpbkFuaW1hdGlvblxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIGEgbWFzayB0byBsaW1pdCB2aXNpYmxlIHpvbmVcclxuICAgICAqL1xyXG4gICAgYWRkTWFzaygpIHtcclxuICAgICAgICBsZXQgcmVlbHNNYXNrID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICByZWVsc01hc2suYmVnaW5GaWxsKCk7XHJcbiAgICAgICAgcmVlbHNNYXNrLmRyYXdSZWN0KDAsIDAsIGdhbWVTaXplLndpZHRoLCBnYW1lU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQocmVlbHNNYXNrKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYXNrID0gcmVlbHNNYXNrO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGJldFJlc3VsdCBhcnJheSB3aXRoIGJldCByZXN1bHQgZm9yIGVhY2ggcmVlbFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN5bWJzQmZSZXN1bHQgYW1vdW50IG9mIHN5bWJvbHMgYmVmb3JlIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBzdGFydCAoYmV0UmVzdWx0LCBzeW1ic0JmUmVzdWx0ID0gNikge1xyXG4gICAgICAgIGNoYW5nZUFuaW1SZXF1aXJlVG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbFJlZWxzLmxlbmd0aDsgaSsrICl7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsUmVlbHNbaV0uc3RhcnQoYmV0UmVzdWx0W2ldLCBzeW1ic0JmUmVzdWx0K2ksIHRoaXMub25SZWVsU3RvcHBlZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogd2hlbiBlYWNoIHJlZWwgZmluaXNoZWQgc3BpbiwgaXQgcmVkdWNlcyByZWVsc0NvdW50ZXJcclxuICAgICAqIHdoZW4gYWxsIHJlZWxzIGFyZSBmaW5pc2hlZCwgcmVzZXQgdGhlIGNvdW50ZXIsIGFuZCBjaGVjayBiZXQgbGluZXNcclxuICAgICAqL1xyXG4gICAgb25SZWVsU3RvcHBlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWVsc0NvdW50ZXItLTtcclxuICAgICAgICBpZiAodGhpcy5yZWVsc0NvdW50ZXIgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZWVsc0NvdW50ZXIgPSB0aGlzLmFsbFJlZWxzLmxlbmd0aDtcclxuICAgICAgICAgICAgY2hhbmdlQW5pbVJlcXVpcmVUbyhmYWxzZSk7XHJcbiAgICAgICAgICAgIHNwaW5CdXR0b24uZW5hYmxlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpbkFuaW1SZXF1aXJlZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcmVFdmVudChcIm5vdGlmeTp3aW5TcGluT3ZlclwiLCB0aGlzLndpbkNvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dXaW5BbmltYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMud2luQW5pbVJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFdpbkFuaW1hdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy53aW5BbmltUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMud2luQ29uZmlnID0gY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dXaW5BbmltYXRpb24oKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLndpbkNvbmZpZy53aW5TeW1ib2xzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGN1ckxpbmUgPSB0aGlzLndpbkNvbmZpZy53aW5TeW1ib2xzW2ldO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGN1ckxpbmUubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxSZWVsc1tqXS5zeW1ib2xzW2N1ckxpbmVbal1dLnBsYXlXaW5BbmltYXRpb24oKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjaGVjayBlYWNoIGJldCBsaW5lIGZvciB3aW4gY29tYmluYXRpb25cclxuICAgICAqL1xyXG4gICAvKiBjaGVja0JldExpbmVzICgpe1xyXG5cclxuICAgICAgICBsZXQgd2luUG9pbnRzID0gMDtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZXRMaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudExpbmUgID0gYmV0TGluZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBzeW1ic01hdGNoZWQgPSAxO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN5bWJvbHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aGlzLmFsbFJlZWxzLmxlbmd0aDsgaisrKXtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMuYWxsUmVlbHNbaiArIDFdICYmIHRoaXMuYWxsUmVlbHNbal0uc3ltYm9sc1tjdXJyZW50TGluZVtqXV0udHlwZSA9PT0gdGhpcy5hbGxSZWVsc1tqICsgMV0uc3ltYm9sc1tjdXJyZW50TGluZVtqKzFdXS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ltYnNNYXRjaGVkICs9MTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYnNNYXRjaGVkIDwgMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbHMucHVzaCh0aGlzLmFsbFJlZWxzW2pdLnN5bWJvbHNbY3VycmVudExpbmVbal1dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9scy5wdXNoKHRoaXMuYWxsUmVlbHNbaisxXS5zeW1ib2xzW2N1cnJlbnRMaW5lW2orMV1dKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xzLnB1c2godGhpcy5hbGxSZWVsc1tqKzFdLnN5bWJvbHNbY3VycmVudExpbmVbaisxXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ltYnNNYXRjaGVkID4gMikge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFdpbkxpbmVzLnB1c2goLi4uc3ltYm9scyk7XHJcblxyXG4gICAgICAgICAgICAgICAgc3ltYm9scy5mb3JFYWNoKCBzeW1ib2wgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJvbC5wbGF5V2luQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzeW1ic01hdGNoZWQgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gYWRkIHN5bWJvbHMgY29zdCBwYXJhbSBhbmQgbXVsdGlwbHkgd2lubmluZ3Mgb24gaXRcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc3ltYnNNYXRjaGVkID09PSA0KXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMzA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc3ltYnNNYXRjaGVkID09PSA1KXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzeW1ic01hdGNoZWQgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHdpblBvaW50cyA+IDApIHtcclxuICAgICAgICAgICAgLy9JIGhhdmUgdXNlZCBzcHJpdGVzIGZvciBzZWxlY3Rvciwgc3RhcnRpbmcgZnJvbSAxLCB0aGF0J3Mgd2h5IEkgaGF2ZSB0byBhZGQgKzEgaGVyZTtcclxuICAgICAgICAgICAgbGV0IGJldE11bHRpcGxpZXIgPSBiZXRTZWxlY3Rvci5jdXJyZW50VmFsdWUgKyAxO1xyXG4gICAgICAgICAgICB3aW5TY3JlZW4uc2hvd1NjcmVlbih3aW5Qb2ludHMgKiBiZXRNdWx0aXBsaWVyKTtcclxuICAgICAgICAgICAgd2luUG9pbnRzID0gMDtcclxuICAgICAgICB9XHJcbiAgICB9Ki9cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNsZWFycyBjdXJyZW50IHdpbiBsaW5lcyBiZWZvcmUgbmV4dCBzcGluXHJcbiAgICAgKi9cclxuICAgIGNsZWFyQ3VycmVudFdpbkxpbmVzICgpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXaW5MaW5lcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGJ5IChwYXJhbXMpIHtcclxuICAgICAgICBpZiggIXRoaXMuZXZlbnRIYW5kbGVycyApe1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciggbGV0IGV2ZW50TmFtZSBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYoIHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0pe1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBldmVudHMuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSA9IHBhcmFtc1tldmVudE5hbWVdIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmaXJlRXZlbnQoZXZlbnROYW1lLCAuLi5hcmdzKXtcclxuICAgICAgICBldmVudHMuZmlyZUV2ZW50KGV2ZW50TmFtZSwgYXJncyk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtCdXR0b259IGZyb20gXCIuL2J1dHRvblwiO1xyXG5pbXBvcnQge3RleHR1cmVzfSBmcm9tIFwiLi9lbmdpbmVcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yIGV4dGVuZHMgUElYSS5Db250YWluZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBsZWZ0U3JjLCByaWdodFNyYywgcG9zc2libGVWYWx1ZXMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubWludXNCdXR0b24gPSBuZXcgQnV0dG9uKDAsIDAsIGxlZnRTcmMsIHRoaXMubWludXNPbmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wbHVzQnV0dG9uID0gbmV3IEJ1dHRvbigyMDAsIDAsIHJpZ2h0U3JjLCB0aGlzLnBsdXNPbmUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zc2libGVWYWx1ZXMgPSBwb3NzaWJsZVZhbHVlcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IDE7XHJcbiAgICAgICAgdGhpcy5hZGROdW1iZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pbnVzQnV0dG9uLCB0aGlzLnBsdXNCdXR0b24sIHRoaXMubnVtYmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1pbnVzT25lKCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLnBvc3NpYmxlVmFsdWVzWyAtLXRoaXMuY3VycmVudFZhbHVlIF1dO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRGlzYWJsZUNoZWNrKClcclxuICAgIH1cclxuXHJcbiAgICBwbHVzT25lICgpIHtcclxuICAgICAgICB0aGlzLm51bWJlci50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5wb3NzaWJsZVZhbHVlc1sgKyt0aGlzLmN1cnJlbnRWYWx1ZSBdXTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkRpc2FibGVDaGVjaygpXHJcbiAgICB9XHJcblxyXG4gICAgYnV0dG9uRGlzYWJsZUNoZWNrKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZhbHVlID49IHRoaXMucG9zc2libGVWYWx1ZXMubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGx1c0J1dHRvbi5kaXNhYmxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbHVzQnV0dG9uLmVuYWJsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZhbHVlIDwgMSl7XHJcbiAgICAgICAgICAgIHRoaXMubWludXNCdXR0b24uZGlzYWJsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWludXNCdXR0b24uZW5hYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFkZE51bWJlciAoKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZXNbdGhpcy5wb3NzaWJsZVZhbHVlc1t0aGlzLmN1cnJlbnRWYWx1ZV1dKTtcclxuICAgICAgICB0aGlzLm51bWJlci5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5udW1iZXIud2lkdGggPSAxMjU7XHJcbiAgICAgICAgdGhpcy5udW1iZXIuaGVpZ2h0ID0gMTI1O1xyXG4gICAgICAgIHRoaXMubnVtYmVyLnBvc2l0aW9uLnNldCgxMDAsIDApO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQge09ic2VydmFibGV9IGZyb20gXCIuL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHtyYW5kb21JbnR9IGZyb20gXCIuL3V0aWxzXCI7XHJcbmltcG9ydCB7YmV0U2VsZWN0b3J9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXIgZXh0ZW5kcyBPYnNlcnZhYmxle1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmFkZFJlZWxzZXRzKCk7XHJcbiAgICAgICAgdGhpcy5zcGluUmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5iZXRSZXN1bHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFJlZWxzZXRzICgpIHtcclxuICAgICAgICB0aGlzLnJlZWxzZXRzTGlzdCA9IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsMCwyLDAsMiwwLDEsMCwyXSxcclxuICAgICAgICAgICAgICAgIFswLDAsMiwxLDAsMSwyLDAsMl0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDIsMiwyLDAsMSwwLDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsMSwwLDAsMiwwLDAsMSwyXSxcclxuICAgICAgICAgICAgICAgIFswLDAsMSwxLDAsMCwyLDIsMV1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsMiwyLDEsMCwwLDIsMSwyXSxcclxuICAgICAgICAgICAgICAgIFsyLDIsMSwxLDAsMSwyLDAsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDAsMiwxLDAsMiwwLDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsMSwxLDIsMCwwLDEsMCwyXSxcclxuICAgICAgICAgICAgICAgIFsxLDAsMiwyLDIsMSwwLDIsMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsMiwwLDEsMCwxLDIsMSwyXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMCwwLDIsMCwwLDEsMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwxLDAsMiwxLDAsMiwwLDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsMCwyLDIsMiwxLDAsMiwwXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMCwwLDIsMCwwLDEsMl1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIF1cclxuICAgIH1cclxuICAgIHN0YXJ0KGJldExpbmVzKXtcclxuICAgICAgICB0aGlzLnNlbGVjdFJlZWxzZXQoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFBvc2l0aW9ucygpO1xyXG4gICAgICAgIHRoaXMuYmV0UmVzdWx0ID0gdGhpcy5jaGVja0JldExpbmVzIChiZXRMaW5lcywgdGhpcy5zcGluUmVzdWx0KTtcclxuICAgICAgICB0aGlzLmZpcmVFdmVudChcIm5vdGlmeTpzcGluQW5pbWF0aW9uU3RhcnRcIiwgdGhpcy5zcGluUmVzdWx0KTtcclxuICAgICAgICBpZih0aGlzLmJldFJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVFdmVudChcIm5vdGlmeTp3aW5CZXRXYXNNYWRlXCIsIHRoaXMuYmV0UmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iZXRSZXN1bHQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFJlZWxzZXQgKCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHJhbmRvbUludCgwLCB0aGlzLnJlZWxzZXRzTGlzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSZWVsc2V0ID0gdGhpcy5yZWVsc2V0c0xpc3RbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFBvc2l0aW9ucyAoKSB7XHJcblxyXG4gICAgICAgIHRoaXMuc3BpblJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50UmVlbHNldC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjdXJTZXQgPSB0aGlzLmN1cnJlbnRSZWVsc2V0W2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gSSBzaG91bGQgYmUgYWJsZSB0byB1c2UgMyBzeW1ib2xzIGFmdGVyIHN0YXJ0UG9pbnRcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9pbnQgPSByYW5kb21JbnQoMCwgY3VyU2V0Lmxlbmd0aCAtIDMpO1xyXG4gICAgICAgICAgICBsZXQgY3VyUmVlbCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgLy8gSSBjYW4gdXNlIG9uZSBtb3JlIGN5Y2xlIGhlcmUgYnV0IEknbSBub3Qgc3VyZSBpZiBpdCdzIG5lY2Vzc2FyeVxyXG4gICAgICAgICAgICBjdXJSZWVsLnB1c2goY3VyU2V0W3N0YXJ0UG9pbnRdKTtcclxuICAgICAgICAgICAgY3VyUmVlbC5wdXNoKGN1clNldFtzdGFydFBvaW50ICsgMV0pO1xyXG4gICAgICAgICAgICBjdXJSZWVsLnB1c2goY3VyU2V0W3N0YXJ0UG9pbnQgKyAyXSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNwaW5SZXN1bHQucHVzaChjdXJSZWVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tCZXRMaW5lcyAoYmV0TGluZXMsIGJldFJlc3VsdCl7XHJcblxyXG4gICAgICAgIGxldCB3aW5Qb2ludHMgPSAwO1xyXG4gICAgICAgIGxldCB3aW5TeW1ib2xzID0gW107XHJcbiAgICAgICAgbGV0IHdpbkxpbmVzID0gW107XHJcbiAgICAgICAgbGV0IHJlc3VsdENvbmZpZyA9IHt9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJldExpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50TGluZSAgPSBiZXRMaW5lc1tpXTtcclxuICAgICAgICAgICAgbGV0IHN5bWJzTWF0Y2hlZCA9IDE7XHJcblxyXG4gICAgICAgICAgICBsZXQgc3ltYm9sTnVtID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgYmV0UmVzdWx0Lmxlbmd0aCAtIDE7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmV0UmVzdWx0W2pdW2N1cnJlbnRMaW5lW2pdXSA9PT0gYmV0UmVzdWx0W2ogKyAxXVtjdXJyZW50TGluZVtqKzFdXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJzTWF0Y2hlZCArPTE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN5bWJzTWF0Y2hlZCA8IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xOdW0ucHVzaChjdXJyZW50TGluZVtqXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN5bWJvbE51bS5wdXNoKGN1cnJlbnRMaW5lW2orMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xOdW0ucHVzaChjdXJyZW50TGluZVtqKzFdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHN5bWJzTWF0Y2hlZCA+IDIpIHtcclxuICAgICAgICAgICAgICAgIHdpblN5bWJvbHMucHVzaChzeW1ib2xOdW0pO1xyXG4gICAgICAgICAgICAgICAgd2luTGluZXMucHVzaChpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzeW1ic01hdGNoZWQgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAxMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzeW1ic01hdGNoZWQgPT09IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAzMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzeW1ic01hdGNoZWQgPT09IDUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN5bWJzTWF0Y2hlZCA9IDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAod2luUG9pbnRzID4gMCkge1xyXG4gICAgICAgICAgICAvL0kgaGF2ZSB1c2VkIHNwcml0ZXMgZm9yIHNlbGVjdG9yLCBzdGFydGluZyBmcm9tIDEsIHRoYXQncyB3aHkgSSBoYXZlIHRvIGFkZCArMSBoZXJlO1xyXG4gICAgICAgICAgICBsZXQgYmV0TXVsdGlwbGllciA9IGJldFNlbGVjdG9yLmN1cnJlbnRWYWx1ZSArIDE7XHJcblxyXG4gICAgICAgICAgICByZXN1bHRDb25maWcud2luQW1vdW50ID0gIHdpblBvaW50cyAqIGJldE11bHRpcGxpZXI7XHJcbiAgICAgICAgICAgIHJlc3VsdENvbmZpZy53aW5MaW5lcyA9IHdpbkxpbmVzO1xyXG4gICAgICAgICAgICByZXN1bHRDb25maWcud2luU3ltYm9scyA9IHdpblN5bWJvbHM7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0Q29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge3RleHR1cmVzfSBmcm9tIFwiLi9lbmdpbmVcIjtcclxuaW1wb3J0IHtDdXN0b21Ud2Vlbn0gZnJvbSBcIi4vY3VzdG9tVHdlZW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTeW1ib2wgZXh0ZW5kcyBQSVhJLlNwcml0ZXtcclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmVTcmMsIHdpZHRoKXtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlc1t0ZXh0dXJlU3JjXSk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHRleHR1cmVTcmM7XHJcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSAxNjA7XHJcblxyXG4gICAgICAgIHRoaXMudHdlZW4gPSBuZXcgQ3VzdG9tVHdlZW4odGhpcywgXCJ5XCIsIHRoaXMueSwgdGhpcy55ICsgdGhpcy5oZWlnaHQsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMuYm91bmNlVHdlZW4gPSBuZXcgQ3VzdG9tVHdlZW4odGhpcywgXCJ5XCIsIHRoaXMueSwgdGhpcy55IC0gdGhpcy5oZWlnaHQvMiwgdGhpcy5zcGVlZCoyLzMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMud2lkdGhUd2VlbiA9IG5ldyBDdXN0b21Ud2Vlbih0aGlzLCBcIndpZHRoXCIsIHRoaXMud2lkdGgsIHRoaXMud2lkdGggKyAyNSwgdGhpcy5zcGVlZCozKTtcclxuICAgICAgICB0aGlzLmhlaWdodFR3ZWVuID0gbmV3IEN1c3RvbVR3ZWVuKHRoaXMsIFwiaGVpZ2h0XCIsIHRoaXMuaGVpZ2h0LCB0aGlzLmhlaWdodCArIDI1LCB0aGlzLnNwZWVkKjMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGJvdW5jZVR3ZWVucyBhcmUgZmluaXNoZWRcclxuICAgICAqL1xyXG4gICAgc3RhcnRTcGluKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVXaW5BbmltYXRpb24oKTtcclxuICAgICAgICB0aGlzLnN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLmJvdW5jZVR3ZWVuLnBsYXkodGhpcy55LCB0aGlzLnkgLSB0aGlzLmhlaWdodC8yLHRoaXMuc3BlZWQqMy80LCB0aGlzLmJvdW5jZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gc3ltYm9sIHRvIHN0YXJ0IHBvc2l0aW9uIGFmdGVyIHVwQm91bmNlXHJcbiAgICAgKi9cclxuICAgIGJvdW5jZURvd24gKCkge1xyXG4gICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSArIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCoyLzMsIHRoaXMuc3RhcnRDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGRlZmF1bHQgc3ltYm9scyBwYXJhbXMgYmVmb3JlIG5leHQgc3BpblxyXG4gICAgICogZXZlbmx5IGNoYW5nZSBwb3NpdGlvbiBieSBvbmUgc2xvdCB1c2luZyB0d2VlblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Db21wbGV0ZSBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0d2VlbiBpcyBmaW5pc2hlZFxyXG4gICAgICovXHJcbiAgICBtb3ZlT25lU2xvdCAob25Db21wbGV0ZSkge1xyXG4gICAgICAgIHRoaXMudHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSArIHRoaXMuaGVpZ2h0LCB0aGlzLnNwZWVkLCBvbkNvbXBsZXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBlbmRTcGluKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5lbmRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSArIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCoyLzMsIHRoaXMuYm91bmNlVXAuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gc3ltYm9sIHRvIHN0YXJ0IHBvc2l0aW9uIGFmdGVyIGRvd25Cb3VuY2VcclxuICAgICAqL1xyXG4gICAgYm91bmNlVXAgKCkge1xyXG4gICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCoyLzMsIHRoaXMuZW5kQ2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYW5pbWF0aW9uIGZvciB3aW4gc3ltYm9sc1xyXG4gICAgICovXHJcbiAgICBwbGF5V2luQW5pbWF0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlVXAoKVxyXG4gICAgfVxyXG5cclxuICAgIHNjYWxlVXAgKCkge1xyXG4gICAgICAgIHRoaXMud2lkdGhUd2Vlbi5wbGF5KHRoaXMud2lkdGgsIHRoaXMud2lkdGgrMjUsIHRoaXMuc3BlZWQqMywgdGhpcy5zY2FsZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5oZWlnaHRUd2Vlbi5wbGF5KHRoaXMuaGVpZ2h0LCB0aGlzLmhlaWdodCsyNSwgdGhpcy5zcGVlZCozLCB0aGlzLnN0dWIuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2NhbGVEb3duICgpIHtcclxuICAgICAgICB0aGlzLndpZHRoVHdlZW4ucGxheSh0aGlzLndpZHRoLCB0aGlzLndpZHRoLTI1LCB0aGlzLnNwZWVkKjMsIHRoaXMuc3R1Yi5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLmhlaWdodFR3ZWVuLnBsYXkodGhpcy5oZWlnaHQsIHRoaXMuaGVpZ2h0LTI1LCB0aGlzLnNwZWVkKjMsIHRoaXMuc3R1Yi5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgZGVmYXVsdCBzeW1ib2xzIHBhcmFtc1xyXG4gICAgICovXHJcbiAgICByZW1vdmVXaW5BbmltYXRpb24oKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2NhbGUuc2V0KDEuMDQxNyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3R1YiAoKSB7XHJcbiAgICAgICAgLy9zdHViXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2FuaW1hdGlvblJlcXVpcmVkLCBjaGFuZ2VBbmltUmVxdWlyZVRvLCBzcGluQnV0dG9uLCB3aW5TY3JlZW4sIHNlcnZlciwgYmV0TGluZXN9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuLyoqXHJcbiAqIGNyZWF0ZXMgcmFuZG9tIGludGVnZXIgdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIG1pbiBwb3NzaWJsZSB2YWx1ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IG1heCBwb3NzaWJsZSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgcmFuZCA9IE1hdGguZmxvb3IocmFuZCk7XHJcbiAgICByZXR1cm4gcmFuZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIHN0YXJ0L3N0b3Agc3BpbiBkZXBlbmRpbmcgb24gYW5pbWF0aW9uUmVxdWlyZWQgcGFyYW1cclxuICogQHBhcmFtIHtudW1iZXJ9IGFkZFN5bWIgYW1vdW50IG9mIGFkZGVkIHN5bWJvbHMgYmVmb3JlIHRoZSBzcGluIGVuZFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VTcGluKCkge1xyXG4gICAgaWYoIWFuaW1hdGlvblJlcXVpcmVkKXtcclxuICAgICAgICB3aW5TY3JlZW4uaGlkZVNjcmVlbigpO1xyXG4gICAgICAgIGJldExpbmVzLnJlbW92ZVdpbkxpbmVzKCk7XHJcblxyXG4gICAgICAgIHNlcnZlci5zdGFydChiZXRMaW5lcy5hY3RpdmVCZXRMaW5lcyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNoYW5nZUFuaW1SZXF1aXJlVG8oZmFsc2UpO1xyXG4gICAgICAgIHNwaW5CdXR0b24uZGlzYWJsZSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRpbWVCZXR3ZWVuRnJhbWVzID0gMTYuNjc7IiwiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3JlY3RhbmdsZVwiO1xyXG5pbXBvcnQge2V2ZW50c30gZnJvbSBcIi4vZW5naW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luU2NyZWVuIGV4dGVuZHMgUElYSS5HcmFwaGljc3tcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBuZXcgUElYSS5UZXh0KFwiWW91IHdvblwiKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2Uuc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDM2LFxyXG4gICAgICAgICAgICBmaWxsOiBcIndoaXRlXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS5wb3NpdGlvbi5zZXQod2lkdGgvMiAtIDEzMCwgaGVpZ2h0LzIgLSAzNiApO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2NyZWVuLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjY7XHJcblxyXG4gICAgICAgIHRoaXMuYnkoe1wibm90aWZ5OndpblNwaW5PdmVyXCIgOiB0aGlzLnNob3dTY3JlZW59KTtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlcyB3aW5TY3JlZW4gdmlzaWJsZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZyAtIGFtb3VudCBvZiB3aW4gcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIHNob3dTY3JlZW4gKGNvbmZpZyl7XHJcbiAgICAgICAgbGV0IHdpbk1zZyA9IFwiWW91IHdvbiBcIiArIGNvbmZpZy53aW5BbW91bnQgKyBcIiAhISEhIVwiO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnRleHQgPSB3aW5Nc2c7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoaWRlcyB3aW5TY3JlZW5cclxuICAgICAqL1xyXG4gICAgaGlkZVNjcmVlbiAoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgYnkgKHBhcmFtcykge1xyXG4gICAgICAgIGlmKCAhdGhpcy5ldmVudEhhbmRsZXJzICl7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKCBsZXQgZXZlbnROYW1lIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiggcGFyYW1zLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSkgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICF0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5hZGRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gcGFyYW1zW2V2ZW50TmFtZV0gO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=