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
/******/ 	return __webpack_require__(__webpack_require__.s = "./javascript/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./javascript/UI/button.js":
/*!*********************************!*\
  !*** ./javascript/UI/button.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../index.js */ "./javascript/index.js");

var _observableMixin = __webpack_require__(/*! ../main/observableMixin */ "./javascript/main/observableMixin.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = exports.Button = function (_PIXI$Sprite) {
    _inherits(Button, _PIXI$Sprite);

    function Button(x, y, buttonTextures, callback) {
        _classCallCheck(this, Button);

        var _this = _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, _index.textures[buttonTextures.idle]));

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
        Object.assign(_this, _observableMixin.observableMixin);
        return _this;
    }

    _createClass(Button, [{
        key: "mouseover",
        value: function mouseover() {
            this.texture = this.disabled ? _index.textures[this.disabledTexture] : _index.textures[this.hoverTexture];
        }
    }, {
        key: "mouseout",
        value: function mouseout() {
            this.texture = this.disabled ? _index.textures[this.disabledTexture] : _index.textures[this.idleTexture];
        }
    }, {
        key: "mousedown",
        value: function mousedown() {
            if (this.disabled) {
                this.texture = _index.textures[this.disabledTexture];
            } else {
                this.texture = _index.textures[this.downTexture];
                this.callback();
            }
        }
    }, {
        key: "mouseup",
        value: function mouseup() {
            this.texture = this.disabled ? _index.textures[this.disabledTexture] : _index.textures[this.hoverTexture];
        }
    }, {
        key: "enable",
        value: function enable() {
            this.disabled = false;
            this.texture = _index.textures[this.idleTexture];
        }
    }, {
        key: "disable",
        value: function disable() {
            this.disabled = true;
            this.texture = _index.textures[this.disabledTexture];
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

/***/ "./javascript/betLines/betLines.js":
/*!*****************************************!*\
  !*** ./javascript/betLines/betLines.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BetLines = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _line = __webpack_require__(/*! ./line */ "./javascript/betLines/line.js");

var _gameConfig = __webpack_require__(/*! ../main/gameConfig */ "./javascript/main/gameConfig.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BetLines = exports.BetLines = function (_PIXI$Container) {
    _inherits(BetLines, _PIXI$Container);

    function BetLines() {
        _classCallCheck(this, BetLines);

        var _this = _possibleConstructorReturn(this, (BetLines.__proto__ || Object.getPrototypeOf(BetLines)).call(this));

        _this.linePoints = _this.addLinePoints();
        _this.allLines = _this.addLines(_this.linePoints);

        _this.currentWinLines = [];

        app.stage.addChild(_this);
        return _this;
    }

    /**
     * create line points depends on gameConfig params and add it to array
     * @returns {Array} array with line points
     */


    _createClass(BetLines, [{
        key: "addLinePoints",
        value: function addLinePoints() {
            var config = Object.assign({}, _gameConfig.gameConfig);
            var betLines = config.betLines;
            var positions = config.reelsPosition;
            var topOffset = positions.topOffset + positions.reels.slotLength / 2;

            var linePositions = [];

            for (var i = 0; i < betLines.length; i++) {
                var curBetLine = betLines[i];
                var curLinePoints = [];

                for (var j = 0; j < curBetLine.length; j++) {

                    var xPoint = positions.reelsPoints[j].x;
                    var yPoint = positions.symbolsPoint[curBetLine[j]].y + topOffset;

                    curLinePoints.push({ x: xPoint, y: yPoint });
                }

                linePositions.push(curLinePoints);
            }

            return linePositions;
        }

        /**
         * create lines using lines points and add it to array
         * @param {array} linePoints array with points for lines
         * @returns {Array} array with lines
         */

    }, {
        key: "addLines",
        value: function addLines(linePoints) {
            var allLines = [];
            for (var i = 0; i < linePoints.length; i++) {

                var config = linePoints[i];
                var betLine = new _line.Line(config);

                allLines.push(betLine);
                this.addChild(betLine);
            }

            return allLines;
        }

        /**
         * @param {array} winLines array with win lines
         */

    }, {
        key: "updateWinLines",
        value: function updateWinLines(winLines) {
            this.currentWinLines = winLines;
        }

        /**
         *  show current win lines
         */

    }, {
        key: "showWinLines",
        value: function showWinLines() {
            for (var i = 0; i < this.currentWinLines.length; i++) {
                var curLine = this.currentWinLines[i];
                this.allLines[curLine].showWinLine();
            }
        }

        /**
         * set default params for all lines
         */

    }, {
        key: "hideWinLines",
        value: function hideWinLines() {
            this.allLines.forEach(function (line) {
                line.hideWinLine();
            });
        }
    }]);

    return BetLines;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/betLines/line.js":
/*!*************************************!*\
  !*** ./javascript/betLines/line.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Line = exports.Line = function (_PIXI$Graphics) {
    _inherits(Line, _PIXI$Graphics);

    function Line(arrConfig) {
        _classCallCheck(this, Line);

        var _this = _possibleConstructorReturn(this, (Line.__proto__ || Object.getPrototypeOf(Line)).call(this));

        _this.lineStyle(3, 0x00ff00, 0.5);
        _this.createLineByPoints(arrConfig);
        _this.hideWinLine();
        return _this;
    }

    /**
     * creates line using x,y points from array
     * @param {array} arrConfig Array<{x: number, y:number}> array with x,y points
     */


    _createClass(Line, [{
        key: "createLineByPoints",
        value: function createLineByPoints(arrConfig) {
            this.moveTo(arrConfig[0].x, arrConfig[0].y);

            for (var i = 1; i < arrConfig.length; i++) {
                var curPointConfig = arrConfig[i];
                this.lineTo(curPointConfig.x, curPointConfig.y);
            }
        }

        /**
         * makes line visible
         */

    }, {
        key: "showWinLine",
        value: function showWinLine() {
            this.visible = true;
        }

        /**
         * hides line
         */

    }, {
        key: "hideWinLine",
        value: function hideWinLine() {
            this.visible = false;
        }
    }]);

    return Line;
}(PIXI.Graphics);

/***/ }),

/***/ "./javascript/index.js":
/*!*****************************!*\
  !*** ./javascript/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stateHandler = exports.loader = exports.renderLoop = exports.slot = exports.background = exports.textures = undefined;
exports.setup = setup;

var _slot = __webpack_require__(/*! ./slot */ "./javascript/slot.js");

var _stateMachine = __webpack_require__(/*! ./states/stateMachine */ "./javascript/states/stateMachine.js");

var _statesConfig = __webpack_require__(/*! ./states/statesConfig */ "./javascript/states/statesConfig.js");

var _loader = __webpack_require__(/*! ./loader/loader */ "./javascript/loader/loader.js");

document.body.appendChild(app.view);

var textures = exports.textures = void 0,
    background = exports.background = void 0,
    slot = exports.slot = void 0;

var renderLoop = exports.renderLoop = [];
var loader = exports.loader = new _loader.Loader();
var stateHandler = exports.stateHandler = new _stateMachine.StateMachine(_statesConfig.StatesConfig);

function setup() {
    exports.textures = textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;
    exports.background = background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    exports.slot = slot = new _slot.Slot();
    app.ticker.add(function (delta) {
        return gameLoop(delta);
    });
}

function gameLoop(delta) {
    for (var i = 0; i < renderLoop.length; i++) {
        renderLoop[i].update(delta);
    }
}

/***/ }),

/***/ "./javascript/loader/loader.js":
/*!*************************************!*\
  !*** ./javascript/loader/loader.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Loader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loadingScreen = __webpack_require__(/*! ./loadingScreen */ "./javascript/loader/loadingScreen.js");

var _observableMixin = __webpack_require__(/*! ../main/observableMixin */ "./javascript/main/observableMixin.js");

var _index = __webpack_require__(/*! ../index */ "./javascript/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = exports.Loader = function () {
    function Loader() {
        _classCallCheck(this, Loader);

        Object.assign(this, _observableMixin.observableMixin);
        this.loadingScreen = new _loadingScreen.LoadingScreen(0, 0, 800, 500, 0x696969);
    }

    _createClass(Loader, [{
        key: "startLoading",
        value: function startLoading() {
            var _this = this;

            PIXI.Loader.shared.add("./images/sheet.json").add("./images/1.jpg").add("./images/2.jpg").add("./images/3.jpg").add("./images/4.jpg").add("./images/5.jpg").on("progress", function (loader) {
                return _this.loadProgressHandler(loader);
            }).load(_index.setup);
        }
    }, {
        key: "loadProgressHandler",
        value: function loadProgressHandler(loader) {
            this.loadingScreen.update(loader.progress);
            if (loader.progress === 100) {
                this.fireEvent("onLoadingComplete");
            }
        }
    }]);

    return Loader;
}();

/***/ }),

/***/ "./javascript/loader/loadingScreen.js":
/*!********************************************!*\
  !*** ./javascript/loader/loadingScreen.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadingScreen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rectangle = __webpack_require__(/*! ../winScreen/rectangle */ "./javascript/winScreen/rectangle.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingScreen = exports.LoadingScreen = function (_PIXI$Container) {
    _inherits(LoadingScreen, _PIXI$Container);

    function LoadingScreen(x, y, width, height, color) {
        _classCallCheck(this, LoadingScreen);

        var _this = _possibleConstructorReturn(this, (LoadingScreen.__proto__ || Object.getPrototypeOf(LoadingScreen)).call(this));

        _this.screen = new _rectangle.Rectangle(x, y, width, height, color);
        _this.screen.alpha = 0.5;
        _this.message = _this.createMessage(x, y, width, 400);
        _this.blackLine = new _rectangle.Rectangle(150, 250, 500, 30, 0x000000);
        _this.greenLine = new _rectangle.Rectangle(150, 250, 500, 30, 0x229954);
        _this.addChild(_this.screen, _this.message, _this.blackLine, _this.greenLine);

        _this.update(0);
        app.stage.addChild(_this);
        return _this;
    }

    _createClass(LoadingScreen, [{
        key: "createMessage",
        value: function createMessage(x, y, width, height) {
            var message = new PIXI.Text("Loading...");
            message.style = {
                fontFamily: "Arial",
                fontSize: 36,
                fill: "white"
            };
            message.anchor.set(0.5);
            message.position.set(x + width / 2, y + height / 2);

            return message;
        }
    }, {
        key: "update",
        value: function update(percent) {
            this.message.text = "Loading " + Math.floor(percent) + "%";
            this.greenLine.width = percent * 5;
        }
    }, {
        key: "hide",
        value: function hide() {
            this.visible = false;
        }
    }]);

    return LoadingScreen;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/main/gameConfig.js":
/*!***************************************!*\
  !*** ./javascript/main/gameConfig.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var gameConfig = exports.gameConfig = {
    betLines: [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [0, 1, 2, 1, 0], [2, 1, 0, 1, 2], [1, 0, 1, 0, 1], [1, 2, 1, 2, 1]],

    reelsets: [[[1, 0, 2, 0, 2, 0, 1, 0, 2], [0, 0, 2, 1, 0, 1, 2, 0, 2], [1, 1, 2, 2, 2, 0, 1, 0, 1], [1, 1, 0, 0, 2, 0, 0, 1, 2], [0, 0, 1, 1, 0, 0, 2, 2, 1]], [[0, 2, 2, 1, 0, 0, 2, 1, 2], [2, 2, 1, 1, 0, 1, 2, 0, 1], [1, 1, 0, 2, 1, 0, 2, 0, 0], [2, 1, 1, 2, 0, 0, 1, 0, 2], [1, 0, 2, 2, 2, 1, 0, 2, 0]], [[1, 2, 0, 1, 0, 1, 2, 1, 2], [1, 1, 0, 0, 2, 0, 0, 1, 2], [0, 1, 0, 2, 1, 0, 2, 0, 1], [1, 0, 2, 2, 2, 1, 0, 2, 0], [1, 1, 0, 0, 2, 0, 0, 1, 2]]],

    gameSize: {
        width: 800,
        height: 400,
        rows: 3,
        reels: 5
    },

    reelsPosition: {
        topOffset: 10,
        leftOffset: 15,

        reels: {
            left: 80,
            slotLength: 134,
            symbolDimensions: { width: 110, height: 110 },
            visibleSymbNum: 3,
            symbolsNumber: 4,
            symbolSpeed: 160
        },

        reelsPoints: [{ x: 80, y: 134 / 2 }, { x: 80 * 3, y: 134 / 2 }, { x: 80 * 5, y: 134 / 2 }, { x: 80 * 7, y: 134 / 2 }, { x: 80 * 9, y: 134 / 2 }],

        symbolsPoint: [{ x: 0, y: 0 }, { x: 0, y: 134 }, { x: 0, y: 134 * 2 }, { x: 0, y: 134 * 3 }]
    }

};

/***/ }),

/***/ "./javascript/main/observableMixin.js":
/*!********************************************!*\
  !*** ./javascript/main/observableMixin.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
// eslint-disable-next-line no-unused-vars
var observableMixin = exports.observableMixin = {
    /**
     *
     * @param {object} params {Object.<string, function>}
     */
    by: function by(params) {
        if (!this.eventHandlers) {
            this.eventHandlers = {};
        }

        for (var eventName in params) {
            if (params.hasOwnProperty(eventName)) {
                if (!this.eventHandlers[eventName]) {
                    events.addListener(eventName, this);
                }

                this.eventHandlers[eventName] = params[eventName];
            }
        }
    },

    /**
     *
     * @param {string} eventName eventName
     * @param {array} args array with arguments
     */
    fireEvent: function fireEvent(eventName) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
        }

        events.fireEvent(eventName, args);
    }
};

/***/ }),

/***/ "./javascript/main/serverManager.js":
/*!******************************************!*\
  !*** ./javascript/main/serverManager.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ServerManager = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ../utils */ "./javascript/utils.js");

var _gameConfig = __webpack_require__(/*! ./gameConfig */ "./javascript/main/gameConfig.js");

var _observableMixin = __webpack_require__(/*! ./observableMixin */ "./javascript/main/observableMixin.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServerManager = exports.ServerManager = function () {
    function ServerManager() {
        _classCallCheck(this, ServerManager);

        this.reelsetsList = _gameConfig.gameConfig.reelsets;
        this.betLines = _gameConfig.gameConfig.betLines;
        this.reelsLength = _gameConfig.gameConfig.gameSize.rows;

        Object.assign(this, _observableMixin.observableMixin);
    }

    /**
     * upon request from client creates spin/bet result and inform the client
     * @param {number} betSize multiplier for win points
     */


    _createClass(ServerManager, [{
        key: "start",
        value: function start(betSize) {
            var _this = this;

            var currentReelset = this.selectReelset(this.reelsetsList);
            var spinResult = this.selectPositions(currentReelset);
            var generatedResponse = this.checkBetLines(spinResult, betSize);
            setTimeout(function () {
                _this.fireEvent("notify:serverManager.newResponse", generatedResponse);
            }, 1000);
        }

        /**
         * randomly select reelset from reelsetsList
         * @param {array} reelsetsList array with reelsets
         * @returns {array} selected reelset
         */

    }, {
        key: "selectReelset",
        value: function selectReelset(reelsetsList) {
            var index = (0, _utils.randomInt)(0, reelsetsList.length - 1);
            return reelsetsList[index];
        }

        /**
         * randomly selects start positions on each reel and generate new array with next 3 symbols
         * @param {array} currentReelset array with possible values for each reel
         * @returns {Array} 2d array with spin result
         */

    }, {
        key: "selectPositions",
        value: function selectPositions(currentReelset) {
            var spinResult = [];

            for (var i = 0; i < currentReelset.length; i++) {
                var curSet = currentReelset[i];

                var startPoint = (0, _utils.randomInt)(0, curSet.length - this.reelsLength);
                var curReel = [];

                for (var j = 0; j < this.reelsLength; j++) {
                    curReel.push(curSet[startPoint + j]);
                }

                spinResult.push(curReel);
            }
            return spinResult;
        }

        /**
         * depends on spin result check bet lines and generates result config
         * @param {array} spinResult two-levels array with spin result
         * @param {number} betSize win points multiplier
         * @returns {object} resultConfig result configuration of current bet
         *          {number} resultConfig.winAmount amount of win point
         *          {array} resultConfig.winLines array with win bet lines
         *          {array} resultConfig.winSymbols array with win symbols
         *          {array} resultConfig.spinResult 2d array with spin result
         */

    }, {
        key: "checkBetLines",
        value: function checkBetLines(spinResult, betSize) {
            var _this2 = this;

            var winPoints = 0;
            var winSymbols = [];
            var winLines = [];
            var response = {};

            var _loop = function _loop(i) {
                var currentLine = _this2.betLines[i];
                var symbsMatched = 1;

                var positionsOnReels = [];

                var generatedLine = spinResult.map(function (reel, i) {
                    var curIndex = currentLine[i];
                    positionsOnReels.push(curIndex);
                    return reel[curIndex];
                });

                for (var j = 0; j < generatedLine.length - 1; j++) {
                    if (generatedLine[j] === generatedLine[j + 1]) {

                        symbsMatched += 1;
                    } else {
                        break;
                    }
                }

                if (symbsMatched > 2) {

                    winSymbols.push(positionsOnReels.slice(0, symbsMatched));
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
            };

            for (var i = 0; i < this.betLines.length; i++) {
                _loop(i);
            }

            response.winAmount = winPoints * betSize;
            response.winLines = winLines;
            response.winSymbols = winSymbols;
            response.spinResult = spinResult;

            return response;
        }
    }]);

    return ServerManager;
}();

/***/ }),

/***/ "./javascript/main/winSymbols.js":
/*!***************************************!*\
  !*** ./javascript/main/winSymbols.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WinSymbols = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameConfig = __webpack_require__(/*! ./gameConfig */ "./javascript/main/gameConfig.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WinSymbols = exports.WinSymbols = function () {
    function WinSymbols() {
        _classCallCheck(this, WinSymbols);
    }

    _createClass(WinSymbols, [{
        key: "createSymbolsConfig",

        /**
         * generate win symbols config
         * @param {array} winSymbols array with win symbols
         * @returns {array|null} if no win symbols returns null, else returns 2d array with win symbols
         */
        value: function createSymbolsConfig(winSymbols) {
            if (winSymbols.length === 0) {
                return null;
            }

            var matrix = this.createTemplateMatrix();

            for (var i = 0; i < winSymbols.length; i++) {
                var curLine = winSymbols[i];

                for (var j = 0; j < curLine.length; j++) {
                    var curReel = matrix[j];
                    var symbIndex = curLine[j];

                    curReel[symbIndex] = true;
                }
            }
            return matrix;
        }

        /**
         * create matrix depends on gameConfig params
         * @returns {array} matrix with false params
         */

    }, {
        key: "createTemplateMatrix",
        value: function createTemplateMatrix() {
            var template = [];

            var rowsNum = _gameConfig.gameConfig.gameSize.rows;
            var reelsNum = _gameConfig.gameConfig.gameSize.reels;
            for (var i = 0; i < reelsNum; i++) {
                var curReel = [];

                for (var j = 0; j < rowsNum; j++) {
                    curReel.push(false);
                }
                template.push(curReel);
            }

            return template;
        }
    }]);

    return WinSymbols;
}();

/***/ }),

/***/ "./javascript/reels/customTween.js":
/*!*****************************************!*\
  !*** ./javascript/reels/customTween.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CustomTween = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../index */ "./javascript/index.js");

var _utils = __webpack_require__(/*! ../utils */ "./javascript/utils.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CustomTween = exports.CustomTween = function () {
    function CustomTween(obj, propertyName, start, end, period) {
        _classCallCheck(this, CustomTween);

        this.obj = obj;
        this.start = start;
        this.end = end;
        this.propertyName = propertyName;
        this.getSpeed(period);

        _index.renderLoop.push(this);
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

        /**
         * generates speed depend on distance and period
         * @param {number} period period of time needed to reach the endpoint
         */

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
         * @returns {Promise<any>}
         */

    }, {
        key: "play",
        value: function play(start, end, period, onComplete) {
            var _this = this;

            return new Promise(function (resolve) {
                _this.start = start;
                _this.end = end;
                _this.getSpeed(period);
                _this.onComplete = function () {
                    onComplete();
                    resolve();
                };
                _this.updateRequired = true;
            });
        }
    }]);

    return CustomTween;
}();

/***/ }),

/***/ "./javascript/reels/reel.js":
/*!**********************************!*\
  !*** ./javascript/reels/reel.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Reel = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ../utils */ "./javascript/utils.js");

var _symbol = __webpack_require__(/*! ./symbol */ "./javascript/reels/symbol.js");

var _gameConfig = __webpack_require__(/*! ../main/gameConfig */ "./javascript/main/gameConfig.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reel = exports.Reel = function (_PIXI$Container) {
    _inherits(Reel, _PIXI$Container);

    function Reel(x, y) {
        _classCallCheck(this, Reel);

        var _this = _possibleConstructorReturn(this, (Reel.__proto__ || Object.getPrototypeOf(Reel)).call(this));

        _this.positionConfig = _gameConfig.gameConfig.reelsPosition.reels;
        _this.symbolsPoint = _gameConfig.gameConfig.reelsPosition.symbolsPoint;
        _this.position.set(x, y);

        _this.symbols = _this.addSymbols(_this.symbolsPoint);
        _this.symbolsBeforeResult = 0;

        _this.resultSymbols = [];
        _this.curResultSymbIndex = null;
        _this.serverDataReceived = false;
        _this.forcedStopRequired = false;
        return _this;
    }

    /**
     * adding symbols to reel by symbolsPoint from gameConfig
     * @param {array} symbolsPoint array with points for symbols
     * @returns {Array} array with symbols
     */


    _createClass(Reel, [{
        key: "addSymbols",
        value: function addSymbols(symbolsPoint) {
            var symbols = [];

            for (var i = 0; i < symbolsPoint.length; i++) {
                var curSymb = symbolsPoint[i];

                var index = (0, _utils.randomInt)(0, possibleSymSrc.length - 1);
                var symbol = new _symbol.Symbol(possibleSymSrc[index], this.positionConfig);
                symbol.position.set(curSymb.x, curSymb.y);
                this.addChild(symbol);
                symbols.push(symbol);
            }

            return symbols;
        }

        /**
         * start spinning symbols
         * @returns {Promise<any>} promise
         */

    }, {
        key: "start",
        value: function start() {
            var _this2 = this;

            this.symbolsBeforeResult = Infinity;
            return Promise.all(this.symbols.map(function (sym) {
                return sym.startSpin();
            })).then(function () {
                return _this2.doSpin();
            });
        }

        /**
         * @param {array} betResult array with symbols, on which reel has to stop
         * @param {number} symbsBfResult amount of random symbols before result
         * @returns {Promise<any>} promise
         */

    }, {
        key: "startStopSequence",
        value: function startStopSequence(betResult, symbsBfResult) {
            var _this3 = this;

            return new Promise(function (resolve) {
                _this3.symbolsBeforeResult = symbsBfResult;
                _this3.resultSymbols = betResult;
                _this3.curResultSymbIndex = _this3.resultSymbols.length - 1;
                _this3.serverDataReceived = true;

                _this3.resolveChain = resolve;
            });
        }

        /**
         * makes symbols move one slot and depending on different conditions makes recursive call or finish spinning
         * @param {boolean} useRandomSymb if true add randomSymbol
         */

    }, {
        key: "doSpin",
        value: function doSpin() {
            var _this4 = this;

            var useRandomSymb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this.moveOneSlot(useRandomSymb).then(function () {
                _this4.symbolsBeforeResult--;

                if (_this4.symbolsBeforeResult > 0 && !_this4.forcedStopRequired || !_this4.serverDataReceived) {
                    _this4.doSpin();
                } else if (_this4.curResultSymbIndex >= 0) {
                    _this4.doSpin(false);
                    _this4.curResultSymbIndex--;
                } else {
                    Promise.all(_this4.symbols.map(function (symbol) {
                        return symbol.endSpin();
                    })).then(function () {
                        return _this4.onSpinOver();
                    });
                }
            });
        }

        /**
         *
         * @param {boolean} useRandomSymb if true add randomSymbol
         * @returns {Promise<any>} promise
         */

    }, {
        key: "moveOneSlot",
        value: function moveOneSlot(useRandomSymb) {
            var lastIndex = this.symbols.length - 1;
            var lastSymbol = this.symbols[lastIndex];
            var newIndex = void 0;

            if (useRandomSymb) {
                newIndex = (0, _utils.randomInt)(0, possibleSymSrc.length - 1);
            } else {
                newIndex = this.resultSymbols[this.curResultSymbIndex];
            }

            lastSymbol.setNewSymbol(newIndex);

            lastSymbol.y = -this.positionConfig.slotLength;

            this.symbols.unshift(this.symbols.pop());

            return Promise.all(this.symbols.map(function (symbol) {
                return symbol.moveOneSlot();
            }));
        }

        /**
         * When current spin is over set default values and call callback function
         */

    }, {
        key: "onSpinOver",
        value: function onSpinOver() {
            this.serverDataReceived = false;
            this.forcedStopRequired = false;
            this.resultSymbols = [];
            this.resolveChain();
        }

        /**
         * shows win/loss animation for each symbol
         * @param {array} symbols array with boolean values
         */

    }, {
        key: "showWinSymb",
        value: function showWinSymb(symbols) {
            for (var i = 0; i < symbols.length; i++) {
                if (symbols[i]) {
                    this.symbols[i].playWinAnimation();
                } else {
                    this.symbols[i].playLossAnimation();
                }
            }
        }

        /**
         * sets default symbols params for each symbol
         */

    }, {
        key: "playIdle",
        value: function playIdle() {
            this.symbols.forEach(function (symbol) {
                symbol.playIdle();
            });
        }

        /**
         * skips spinning animation
         */

    }, {
        key: "forcedStop",
        value: function forcedStop() {
            this.forcedStopRequired = true;
        }
    }]);

    return Reel;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/reels/reels.js":
/*!***********************************!*\
  !*** ./javascript/reels/reels.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Reels = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reel = __webpack_require__(/*! ./reel */ "./javascript/reels/reel.js");

var _gameConfig = __webpack_require__(/*! ../main/gameConfig */ "./javascript/main/gameConfig.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reels = exports.Reels = function (_PIXI$Container) {
    _inherits(Reels, _PIXI$Container);

    function Reels() {
        _classCallCheck(this, Reels);

        var _this = _possibleConstructorReturn(this, (Reels.__proto__ || Object.getPrototypeOf(Reels)).call(this));

        _this.y = _gameConfig.gameConfig.reelsPosition.topOffset;

        _this.allReels = _this.addReels();
        _this.mask = _this.addMask();
        _this.currentWinSymbols = null;

        app.stage.addChild(_this);
        return _this;
    }

    /**
     * creates reels depending on gameConfig params
     * @returns {Array} array with reels
     */


    _createClass(Reels, [{
        key: "addReels",
        value: function addReels() {
            var reelsPoints = _gameConfig.gameConfig.reelsPosition.reelsPoints;
            var allReels = [];

            for (var i = 0; i < reelsPoints.length; i++) {
                var curReelPoints = reelsPoints[i];
                var reel = new _reel.Reel(curReelPoints.x, curReelPoints.y);
                allReels.push(reel);
                this.addChild(reel);
            }
            return allReels;
        }

        /**
         * create a mask to limit visible zone
         * @returns {PIXI.Graphics} reels mask
         */

    }, {
        key: "addMask",
        value: function addMask() {
            var reelsMask = new PIXI.Graphics();
            reelsMask.beginFill();
            reelsMask.drawRect(0, -this.y, _gameConfig.gameConfig.gameSize.width, _gameConfig.gameConfig.gameSize.height);
            this.addChild(reelsMask);

            return reelsMask;
        }

        /**
         * start spinning reels
         * @returns {Promise<any>} promise
         */

    }, {
        key: "startReelsSpin",
        value: function startReelsSpin() {
            return Promise.all(this.allReels.map(function (reel) {
                return reel.start();
            }));
        }

        /**
         * @param {array} spinResult 2d array with symbols, on which each reel has to stop
         * @param {number} symbsBfResult amount of random symbols before result
         * @returns {Promise<any>} promise
         */

    }, {
        key: "startStopSequence",
        value: function startStopSequence(spinResult) {
            var symbsBfResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;

            return Promise.all(this.allReels.map(function (reel, i) {
                return reel.startStopSequence(spinResult[i], symbsBfResult + i * 2);
            }));
        }

        /**
         * @param {array|null} winSymbols 2d array with win symbols or null if no win symbols
         */

    }, {
        key: "updateWinSymbols",
        value: function updateWinSymbols(winSymbols) {
            this.currentWinSymbols = winSymbols;
        }

        /**
         * skips spinning animation
         */

    }, {
        key: "forcedStop",
        value: function forcedStop() {
            this.allReels.forEach(function (reel) {
                reel.forcedStop();
            });
        }

        /**
         * show win/loss animation for each symbol
         */

    }, {
        key: "showWinAnimation",
        value: function showWinAnimation() {
            for (var i = 0; i < this.currentWinSymbols.length; i++) {
                var curResultReel = this.currentWinSymbols[i];
                var curReel = this.allReels[i];

                curReel.showWinSymb(curResultReel);
            }
        }

        /**
         * sets default symbols params for each symbol
         */

    }, {
        key: "playIdle",
        value: function playIdle() {
            this.allReels.forEach(function (reel) {
                reel.playIdle();
            });
        }
    }]);

    return Reels;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/reels/symbol.js":
/*!************************************!*\
  !*** ./javascript/reels/symbol.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Symbol = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index = __webpack_require__(/*! ../index */ "./javascript/index.js");

var _customTween = __webpack_require__(/*! ./customTween */ "./javascript/reels/customTween.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Symbol = function (_PIXI$Sprite) {
    _inherits(_Symbol, _PIXI$Sprite);

    function _Symbol(textureSrc, config) {
        _classCallCheck(this, _Symbol);

        var _this = _possibleConstructorReturn(this, (_Symbol.__proto__ || Object.getPrototypeOf(_Symbol)).call(this, _index.textures[textureSrc]));

        _this.width = config.symbolDimensions.width;
        _this.height = config.symbolDimensions.height;
        _this.slotLength = config.slotLength;
        _this.speed = config.symbolSpeed;

        _this.type = textureSrc;
        _this.anchor.set(0.5);
        _this.startScale = _this.scale._x;
        _this.endScale = _this.startScale * 1.25;

        _this.tween = new _customTween.CustomTween(_this, "y", _this.y, _this.y + _this.slotLength, _this.speed);
        _this.bounceTween = new _customTween.CustomTween(_this, "y", _this.y, _this.y - _this.height / 2, _this.speed * 2 / 3);
        _this.scaleTween = new _customTween.CustomTween(_this, "symbScale", _this.startScale, _this.endScale, _this.speed * 3);

        return _this;
    }

    /**
     * sets default symbols params before next spin and makes up/down bounce using tween
     * @returns {Promise<any>} promise
     */


    _createClass(_Symbol, [{
        key: "startSpin",
        value: function startSpin() {
            var _this2 = this;

            return new Promise(function (resolve) {
                _this2.playIdle();
                _this2.bounceTween.play(_this2.y, _this2.y - _this2.height / 2, _this2.speed * 3 / 4, function () {}).then(function () {
                    return _this2.bounceTween.play(_this2.y, _this2.y + _this2.height / 2, _this2.speed * 2 / 3, resolve);
                });
            });
        }

        /**
         * evenly change position by one slot using tween
         * @returns {Promise<any>} promise
         */

    }, {
        key: "moveOneSlot",
        value: function moveOneSlot() {
            var _this3 = this;

            return new Promise(function (resolve) {
                _this3.tween.play(_this3.y, _this3.y + _this3.slotLength, _this3.speed, resolve);
            });
        }

        /**
         * makes down/up bounce using tween
         * @returns {Promise<any>} promise
         */

    }, {
        key: "endSpin",
        value: function endSpin() {
            var _this4 = this;

            return new Promise(function (resolve) {
                _this4.bounceTween.play(_this4.y, _this4.y + _this4.height / 2, _this4.speed * 2 / 3, function () {}).then(function () {
                    _this4.bounceTween.play(_this4.y, _this4.y - _this4.height / 2, _this4.speed * 2 / 3, resolve);
                });
            });
        }

        /**
         * set symbol new texture and type
         * @param {number} index texture index of new symbol
         */

    }, {
        key: "setNewSymbol",
        value: function setNewSymbol(index) {
            this.texture = _index.textures[possibleSymSrc[index]];
            this.type = possibleSymSrc[index];
        }

        /**
         *
         * @returns {number} number of symbol's scale property
         */

    }, {
        key: "playWinAnimation",


        /**
         * animation for win symbols
         */
        value: function playWinAnimation() {
            this.scaleUp();
        }

        /**
         * evenly scales symbol up using tween
         */

    }, {
        key: "scaleUp",
        value: function scaleUp() {
            this.scaleTween.play(this.startScale, this.endScale, this.speed * 3, this.scaleDown.bind(this));
        }

        /**
         * evenly scales symbol down using tween
         */

    }, {
        key: "scaleDown",
        value: function scaleDown() {
            this.scaleTween.play(this.endScale, this.startScale, this.speed * 3, function () {});
        }

        /**
         *makes symbols semi transparent
         */

    }, {
        key: "playLossAnimation",
        value: function playLossAnimation() {
            this.alpha = 0.5;
        }

        /**
         * sets default symbols params
         */

    }, {
        key: "playIdle",
        value: function playIdle() {
            this.scale.set(this.startScale);
            this.alpha = 1;
        }
    }, {
        key: "symbScale",
        get: function get() {
            return this.scale._x;
        }

        /**
         *
         * @param {number} value set symbol's scale property
         */
        ,
        set: function set(value) {
            this.scale.set(value);
        }
    }]);

    return _Symbol;
}(PIXI.Sprite);

exports.Symbol = _Symbol;

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

var _button = __webpack_require__(/*! ./UI/button */ "./javascript/UI/button.js");

var _index = __webpack_require__(/*! ./index */ "./javascript/index.js");

var _observableMixin = __webpack_require__(/*! ./main/observableMixin */ "./javascript/main/observableMixin.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Selector = exports.Selector = function (_PIXI$Container) {
    _inherits(Selector, _PIXI$Container);

    function Selector(x, y, leftSrc, rightSrc, possibleValues) {
        _classCallCheck(this, Selector);

        var _this = _possibleConstructorReturn(this, (Selector.__proto__ || Object.getPrototypeOf(Selector)).call(this));

        Object.assign(_this, _observableMixin.observableMixin);
        _this.minusButton = new _button.Button(0, 0, leftSrc, _this.minusOne.bind(_this));
        _this.plusButton = new _button.Button(200, 0, rightSrc, _this.plusOne.bind(_this));

        _this.possibleValues = possibleValues;
        _this.currentValue = 1;
        _this.number = _this.addNumber();

        _this.addChild(_this.minusButton, _this.plusButton, _this.number);
        _this.position.set(x, y);
        app.stage.addChild(_this);
        return _this;
    }

    _createClass(Selector, [{
        key: "minusOne",
        value: function minusOne() {
            this.number.texture = _index.textures[this.possibleValues[--this.currentValue]];
            this.buttonDisableCheck();
            this.fireEvent("betChanged");
        }
    }, {
        key: "plusOne",
        value: function plusOne() {
            this.number.texture = _index.textures[this.possibleValues[++this.currentValue]];
            this.buttonDisableCheck();
            this.fireEvent("betChanged");
        }

        /**
         * disable/enable buttons depend on currentValue
         */

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

        /**
         * creates selector number sprite
         * @returns {PIXI.Sprite} texture of selector number
         */

    }, {
        key: "addNumber",
        value: function addNumber() {
            var number = new PIXI.Sprite(_index.textures[this.possibleValues[this.currentValue]]);
            number.anchor.set(0.5);
            number.width = 125;
            number.height = 125;
            number.position.set(100, 0);

            return number;
        }

        /**
         * disable buttons
         */

    }, {
        key: "disableButtons",
        value: function disableButtons() {
            this.plusButton.disable();
            this.minusButton.disable();
        }

        /**
         * return current bet size
         * @returns {number} this.currentValue is position in array and 0 equals 1 bet size
         */

    }, {
        key: "getCurBetSize",
        value: function getCurBetSize() {
            return this.currentValue + 1;
        }
    }]);

    return Selector;
}(PIXI.Container);

/***/ }),

/***/ "./javascript/slot.js":
/*!****************************!*\
  !*** ./javascript/slot.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Slot = undefined;

var _reels = __webpack_require__(/*! ./reels/reels */ "./javascript/reels/reels.js");

var _betLines = __webpack_require__(/*! ./betLines/betLines */ "./javascript/betLines/betLines.js");

var _serverManager = __webpack_require__(/*! ./main/serverManager */ "./javascript/main/serverManager.js");

var _winSymbols = __webpack_require__(/*! ./main/winSymbols */ "./javascript/main/winSymbols.js");

var _selector = __webpack_require__(/*! ./selector */ "./javascript/selector.js");

var _winScreen = __webpack_require__(/*! ./winScreen/winScreen */ "./javascript/winScreen/winScreen.js");

var _gameConfig = __webpack_require__(/*! ./main/gameConfig */ "./javascript/main/gameConfig.js");

var _button = __webpack_require__(/*! ./UI/button */ "./javascript/UI/button.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slot = exports.Slot = function Slot() {
    _classCallCheck(this, Slot);

    this.betLines = new _betLines.BetLines();
    this.reels = new _reels.Reels();
    this.spinButton = new _button.Button(400, 450, spinButtonSrc, function () {
        this.fireEvent("onSpinButtonPressed");
    });
    this.winScreen = new _winScreen.WinScreen(0, _gameConfig.gameConfig.gameSize.height, 300, 100, 0x696969);
    this.betSelector = new _selector.Selector(550, 450, leftSelector, rightSelector, numbers);
    this.winSymbols = new _winSymbols.WinSymbols();
    this.serverManager = new _serverManager.ServerManager();
};

/***/ }),

/***/ "./javascript/states/defaultState.js":
/*!*******************************************!*\
  !*** ./javascript/states/defaultState.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.DefaultState = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _observableMixin = __webpack_require__(/*! ../main/observableMixin */ "./javascript/main/observableMixin.js");

var _stateMachine = __webpack_require__(/*! ./stateMachine */ "./javascript/states/stateMachine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DefaultState = exports.DefaultState = function () {
    function DefaultState() {
        _classCallCheck(this, DefaultState);

        Object.assign(this, _observableMixin.observableMixin);

        this.name = "stateName";
        this.active = false;
        this.transitions = {};
        this.stateMashine = _stateMachine.StateMachine.instance;
    }

    _createClass(DefaultState, [{
        key: "start",
        value: function start() {
            this.active = true;
            console.log("stateChangedTo:" + this.name);
        }
    }, {
        key: "finish",
        value: function finish(eventName) {
            //only active state should react on event
            if (!this.active) {
                return;
            }

            this.active = false;
            var next = this.transitions[eventName];
            this.stateMashine.changeStateTo(next);
        }
    }]);

    return DefaultState;
}();

/***/ }),

/***/ "./javascript/states/idle.js":
/*!***********************************!*\
  !*** ./javascript/states/idle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Idle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _defaultState = __webpack_require__(/*! ./defaultState */ "./javascript/states/defaultState.js");

var _index = __webpack_require__(/*! ../index */ "./javascript/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Idle = exports.Idle = function (_DefaultState) {
    _inherits(Idle, _DefaultState);

    function Idle() {
        _classCallCheck(this, Idle);

        var _this = _possibleConstructorReturn(this, (Idle.__proto__ || Object.getPrototypeOf(Idle)).call(this));

        _this.by({ onSpinButtonPressed: _this.onSpinButtonPressed });
        return _this;
    }

    _createClass(Idle, [{
        key: "onSpinButtonPressed",
        value: function onSpinButtonPressed() {
            this.finish("onSpinButtonPressed");
        }
    }, {
        key: "start",
        value: function start() {
            _get(Idle.prototype.__proto__ || Object.getPrototypeOf(Idle.prototype), "start", this).call(this);
            _index.slot.reels.playIdle();
        }
    }]);

    return Idle;
}(_defaultState.DefaultState);

/***/ }),

/***/ "./javascript/states/load.js":
/*!***********************************!*\
  !*** ./javascript/states/load.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Load = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _defaultState = __webpack_require__(/*! ./defaultState */ "./javascript/states/defaultState.js");

var _index = __webpack_require__(/*! ../index */ "./javascript/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Load = exports.Load = function (_DefaultState) {
    _inherits(Load, _DefaultState);

    function Load() {
        _classCallCheck(this, Load);

        var _this = _possibleConstructorReturn(this, (Load.__proto__ || Object.getPrototypeOf(Load)).call(this));

        _this.name = "Load";
        _this.by({ onLoadingComplete: _this.onLoadingComplete });
        _this.start();
        return _this;
    }

    _createClass(Load, [{
        key: "onLoadingComplete",
        value: function onLoadingComplete() {
            this.finish("onLoadingComplete");
        }
    }, {
        key: "start",
        value: function start() {
            _get(Load.prototype.__proto__ || Object.getPrototypeOf(Load.prototype), "start", this).call(this);
            _index.loader.startLoading();
        }
    }, {
        key: "finish",
        value: function finish(eventName) {
            _index.loader.loadingScreen.hide();
            _get(Load.prototype.__proto__ || Object.getPrototypeOf(Load.prototype), "finish", this).call(this, eventName);
        }
    }]);

    return Load;
}(_defaultState.DefaultState);

/***/ }),

/***/ "./javascript/states/spin.js":
/*!***********************************!*\
  !*** ./javascript/states/spin.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Spin = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _defaultState = __webpack_require__(/*! ./defaultState */ "./javascript/states/defaultState.js");

var _index = __webpack_require__(/*! ../index */ "./javascript/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spin = exports.Spin = function (_DefaultState) {
    _inherits(Spin, _DefaultState);

    function Spin() {
        _classCallCheck(this, Spin);

        var _this = _possibleConstructorReturn(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this));

        _this.by({
            "notify:serverManager.newResponse": _this.updateBetResult,
            onSpinButtonPressed: _this.forcedStop
        });
        return _this;
    }

    _createClass(Spin, [{
        key: "playWin",
        value: function playWin() {
            this.finish("playWin");
        }
    }, {
        key: "playIdle",
        value: function playIdle() {
            this.finish("playIdle");
        }
    }, {
        key: "start",
        value: function start() {
            var _this2 = this;

            _get(Spin.prototype.__proto__ || Object.getPrototypeOf(Spin.prototype), "start", this).call(this);
            _index.slot.betSelector.disableButtons();
            var betSize = _index.slot.betSelector.getCurBetSize();
            _index.slot.serverManager.start(betSize);

            Promise.all([_index.slot.reels.startReelsSpin(), new Promise(function (resolve) {
                return _this2.serverResponseResolve = resolve;
            })]).then(function () {
                return _index.slot.reels.startStopSequence(_this2.currentSpinResult);
            }).then(function () {
                return _this2.isWin ? _this2.playWin() : _this2.playIdle();
            });
        }
    }, {
        key: "finish",
        value: function finish(eventName) {
            _index.slot.spinButton.enable();
            _index.slot.betSelector.buttonDisableCheck();
            _get(Spin.prototype.__proto__ || Object.getPrototypeOf(Spin.prototype), "finish", this).call(this, eventName);
        }
    }, {
        key: "forcedStop",
        value: function forcedStop() {
            if (this.active) {
                _index.slot.reels.forcedStop();
                _index.slot.spinButton.disable();
            }
        }

        /**
         *
         * @param {object} response
         * @param {number} response.winAmount amount of win point
         * @param {array} response.winLines array with win bet lines
         * @param {array} response.winSymbols array with win symbols
         * @param {array} response.spinResult 2d array with spin result
         */

    }, {
        key: "updateBetResult",
        value: function updateBetResult(response) {
            if (!this.active) {
                return;
            }

            _index.slot.winScreen.updateCurrentWin(response.winAmount);
            _index.slot.betLines.updateWinLines(response.winLines);

            this.winSymbols = _index.slot.winSymbols.createSymbolsConfig(response.winSymbols);
            _index.slot.reels.updateWinSymbols(this.winSymbols);

            this.currentSpinResult = response.spinResult;
            this.isWin = response.winAmount > 0;
            this.serverResponseResolve();
        }
    }]);

    return Spin;
}(_defaultState.DefaultState);

/***/ }),

/***/ "./javascript/states/stateMachine.js":
/*!*******************************************!*\
  !*** ./javascript/states/stateMachine.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = void 0;

var StateMachine = exports.StateMachine = function () {
    function StateMachine(statesConfig) {
        _classCallCheck(this, StateMachine);

        // eslint-disable-next-line consistent-this
        instance = this;
        this.states = {};
        this.currentState = null;
        this.init(statesConfig);
    }

    _createClass(StateMachine, [{
        key: "init",
        value: function init(statesConfig) {
            var _this = this;

            statesConfig.forEach(function (config) {
                // eslint-disable-next-line new-cap
                var instance = new config.class();

                instance.name = config.class.name;
                instance.transitions = config.transitions;

                _this.states[instance.name] = instance;
            });
        }
    }, {
        key: "changeStateTo",
        value: function changeStateTo(nextStateName) {
            var _this2 = this;

            this.currentState = this.states[nextStateName];

            /*when the next state starts it becomes active and in case if it listens the same event
            that finished previous state and is processed later in observable loop it will be finished
            straight away. setTimeout is added to prevent it.*/
            setTimeout(function () {
                return _this2.currentState.start();
            }, 0);
        }
    }], [{
        key: "instance",
        get: function get() {
            return instance;
        }
    }]);

    return StateMachine;
}();

/***/ }),

/***/ "./javascript/states/statesConfig.js":
/*!*******************************************!*\
  !*** ./javascript/states/statesConfig.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StatesConfig = undefined;

var _load = __webpack_require__(/*! ./load */ "./javascript/states/load.js");

var _idle = __webpack_require__(/*! ./idle */ "./javascript/states/idle.js");

var _spin = __webpack_require__(/*! ./spin */ "./javascript/states/spin.js");

var _win = __webpack_require__(/*! ./win */ "./javascript/states/win.js");

/**
 * Array of Objects. Each of them contains config for different state
 * Object.class class of state
 * Object.transitions available transitions from current state to nextState
 * Object.transitions[eventName] nextState that becomes active by event with eventName
 */
var StatesConfig = exports.StatesConfig = [{ class: _load.Load, transitions: { onLoadingComplete: "Idle" } }, { class: _idle.Idle, transitions: { onSpinButtonPressed: "Spin" } }, { class: _spin.Spin, transitions: { playWin: "Win", playIdle: "Idle" } }, { class: _win.Win, transitions: { betChanged: "Idle", onSpinButtonPressed: "Spin" } }];

/***/ }),

/***/ "./javascript/states/win.js":
/*!**********************************!*\
  !*** ./javascript/states/win.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Win = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _defaultState = __webpack_require__(/*! ./defaultState */ "./javascript/states/defaultState.js");

var _index = __webpack_require__(/*! ../index */ "./javascript/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Win = exports.Win = function (_DefaultState) {
    _inherits(Win, _DefaultState);

    function Win() {
        _classCallCheck(this, Win);

        var _this = _possibleConstructorReturn(this, (Win.__proto__ || Object.getPrototypeOf(Win)).call(this));

        _this.by({
            betChanged: _this.betChanged,
            onSpinButtonPressed: _this.onSpinButtonPressed
        });
        return _this;
    }

    _createClass(Win, [{
        key: "betChanged",
        value: function betChanged() {
            this.finish("betChanged");
        }
    }, {
        key: "onSpinButtonPressed",
        value: function onSpinButtonPressed() {
            this.finish("onSpinButtonPressed");
        }
    }, {
        key: "start",
        value: function start() {
            _get(Win.prototype.__proto__ || Object.getPrototypeOf(Win.prototype), "start", this).call(this);
            _index.slot.betLines.showWinLines();
            _index.slot.winScreen.showScreen();
            _index.slot.reels.showWinAnimation();
        }
    }, {
        key: "finish",
        value: function finish(eventName) {
            _index.slot.betLines.hideWinLines();
            _index.slot.winScreen.hideScreen();
            _get(Win.prototype.__proto__ || Object.getPrototypeOf(Win.prototype), "finish", this).call(this, eventName);
        }
    }]);

    return Win;
}(_defaultState.DefaultState);

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
exports.randomInt = randomInt;
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

var timeBetweenFrames = exports.timeBetweenFrames = 16.67;

/***/ }),

/***/ "./javascript/winScreen/rectangle.js":
/*!*******************************************!*\
  !*** ./javascript/winScreen/rectangle.js ***!
  \*******************************************/
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

/***/ "./javascript/winScreen/winScreen.js":
/*!*******************************************!*\
  !*** ./javascript/winScreen/winScreen.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WinScreen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _rectangle = __webpack_require__(/*! ./rectangle */ "./javascript/winScreen/rectangle.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WinScreen = exports.WinScreen = function (_PIXI$Container) {
    _inherits(WinScreen, _PIXI$Container);

    function WinScreen(x, y, width, height, color) {
        _classCallCheck(this, WinScreen);

        var _this = _possibleConstructorReturn(this, (WinScreen.__proto__ || Object.getPrototypeOf(WinScreen)).call(this));

        _this.screen = new _rectangle.Rectangle(x, y, width, height, color);
        _this.screen.alpha = 0.3;
        _this.message = _this.createMessage(x, y, width, height);

        _this.addChild(_this.screen, _this.message);
        _this.hideScreen();
        _this.alpha = 0.5;
        _this.currentWin = null;

        app.stage.addChild(_this);
        return _this;
    }

    _createClass(WinScreen, [{
        key: "createMessage",
        value: function createMessage(x, y, width, height) {
            var message = new PIXI.Text("You won");
            message.style = {
                fontFamily: "Arial",
                fontSize: 36,
                fill: "white"
            };
            message.anchor.set(0.5);
            message.position.set(x + width / 2, y + height / 2);

            return message;
        }

        /**
         * @param {number} winAmount amount of win points
         */

    }, {
        key: "updateCurrentWin",
        value: function updateCurrentWin(winAmount) {
            this.currentWin = winAmount;
        }

        /**
         * makes winScreen visible
         */

    }, {
        key: "showScreen",
        value: function showScreen() {
            this.visible = true;
            this.message.text = "You won " + this.currentWin + " !!!";
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
}(PIXI.Container);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9VSS9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9iZXRMaW5lcy9iZXRMaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2JldExpbmVzL2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2xvYWRlci9sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9sb2FkZXIvbG9hZGluZ1NjcmVlbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L21haW4vZ2FtZUNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L21haW4vb2JzZXJ2YWJsZU1peGluLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvbWFpbi9zZXJ2ZXJNYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvbWFpbi93aW5TeW1ib2xzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvY3VzdG9tVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWVscy9yZWVsLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvcmVlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWVscy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3Nsb3QuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdGF0ZXMvZGVmYXVsdFN0YXRlLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3RhdGVzL2lkbGUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdGF0ZXMvbG9hZC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3N0YXRlcy9zcGluLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3RhdGVzL3N0YXRlTWFjaGluZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3N0YXRlcy9zdGF0ZXNDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdGF0ZXMvd2luLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC93aW5TY3JlZW4vcmVjdGFuZ2xlLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvd2luU2NyZWVuL3dpblNjcmVlbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJ4IiwieSIsImJ1dHRvblRleHR1cmVzIiwiY2FsbGJhY2siLCJ0ZXh0dXJlcyIsImlkbGUiLCJpZGxlVGV4dHVyZSIsImhvdmVyVGV4dHVyZSIsImhvdmVyIiwiZG93blRleHR1cmUiLCJkb3duIiwiZGlzYWJsZWRUZXh0dXJlIiwiZGlzYWJsZWQiLCJ3aWR0aCIsImhlaWdodCIsImFuY2hvciIsInNldCIsInBvc2l0aW9uIiwiaW50ZXJhY3RpdmUiLCJzZXRIaXRBcmVhIiwiYXBwIiwic3RhZ2UiLCJhZGRDaGlsZCIsIk9iamVjdCIsImFzc2lnbiIsIm9ic2VydmFibGVNaXhpbiIsInRleHR1cmUiLCJyYWRpdXMiLCJoaXRBcmVhIiwiUElYSSIsIkNpcmNsZSIsIlNwcml0ZSIsIkJldExpbmVzIiwibGluZVBvaW50cyIsImFkZExpbmVQb2ludHMiLCJhbGxMaW5lcyIsImFkZExpbmVzIiwiY3VycmVudFdpbkxpbmVzIiwiY29uZmlnIiwiZ2FtZUNvbmZpZyIsImJldExpbmVzIiwicG9zaXRpb25zIiwicmVlbHNQb3NpdGlvbiIsInRvcE9mZnNldCIsInJlZWxzIiwic2xvdExlbmd0aCIsImxpbmVQb3NpdGlvbnMiLCJpIiwibGVuZ3RoIiwiY3VyQmV0TGluZSIsImN1ckxpbmVQb2ludHMiLCJqIiwieFBvaW50IiwicmVlbHNQb2ludHMiLCJ5UG9pbnQiLCJzeW1ib2xzUG9pbnQiLCJwdXNoIiwiYmV0TGluZSIsIkxpbmUiLCJ3aW5MaW5lcyIsImN1ckxpbmUiLCJzaG93V2luTGluZSIsImZvckVhY2giLCJsaW5lIiwiaGlkZVdpbkxpbmUiLCJDb250YWluZXIiLCJhcnJDb25maWciLCJsaW5lU3R5bGUiLCJjcmVhdGVMaW5lQnlQb2ludHMiLCJtb3ZlVG8iLCJjdXJQb2ludENvbmZpZyIsImxpbmVUbyIsInZpc2libGUiLCJHcmFwaGljcyIsInNldHVwIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2aWV3IiwiYmFja2dyb3VuZCIsInNsb3QiLCJyZW5kZXJMb29wIiwibG9hZGVyIiwiTG9hZGVyIiwic3RhdGVIYW5kbGVyIiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVzQ29uZmlnIiwic2hhcmVkIiwicmVzb3VyY2VzIiwiU2xvdCIsInRpY2tlciIsImFkZCIsImdhbWVMb29wIiwiZGVsdGEiLCJ1cGRhdGUiLCJsb2FkaW5nU2NyZWVuIiwiTG9hZGluZ1NjcmVlbiIsIm9uIiwibG9hZFByb2dyZXNzSGFuZGxlciIsImxvYWQiLCJwcm9ncmVzcyIsImZpcmVFdmVudCIsImNvbG9yIiwic2NyZWVuIiwiUmVjdGFuZ2xlIiwiYWxwaGEiLCJtZXNzYWdlIiwiY3JlYXRlTWVzc2FnZSIsImJsYWNrTGluZSIsImdyZWVuTGluZSIsIlRleHQiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJwZXJjZW50IiwidGV4dCIsIk1hdGgiLCJmbG9vciIsInJlZWxzZXRzIiwiZ2FtZVNpemUiLCJyb3dzIiwibGVmdE9mZnNldCIsImxlZnQiLCJzeW1ib2xEaW1lbnNpb25zIiwidmlzaWJsZVN5bWJOdW0iLCJzeW1ib2xzTnVtYmVyIiwic3ltYm9sU3BlZWQiLCJieSIsInBhcmFtcyIsImV2ZW50SGFuZGxlcnMiLCJldmVudE5hbWUiLCJoYXNPd25Qcm9wZXJ0eSIsImV2ZW50cyIsImFkZExpc3RlbmVyIiwiYXJncyIsIlNlcnZlck1hbmFnZXIiLCJyZWVsc2V0c0xpc3QiLCJyZWVsc0xlbmd0aCIsImJldFNpemUiLCJjdXJyZW50UmVlbHNldCIsInNlbGVjdFJlZWxzZXQiLCJzcGluUmVzdWx0Iiwic2VsZWN0UG9zaXRpb25zIiwiZ2VuZXJhdGVkUmVzcG9uc2UiLCJjaGVja0JldExpbmVzIiwic2V0VGltZW91dCIsImluZGV4IiwiY3VyU2V0Iiwic3RhcnRQb2ludCIsImN1clJlZWwiLCJ3aW5Qb2ludHMiLCJ3aW5TeW1ib2xzIiwicmVzcG9uc2UiLCJjdXJyZW50TGluZSIsInN5bWJzTWF0Y2hlZCIsInBvc2l0aW9uc09uUmVlbHMiLCJnZW5lcmF0ZWRMaW5lIiwibWFwIiwicmVlbCIsImN1ckluZGV4Iiwic2xpY2UiLCJ3aW5BbW91bnQiLCJXaW5TeW1ib2xzIiwibWF0cml4IiwiY3JlYXRlVGVtcGxhdGVNYXRyaXgiLCJzeW1iSW5kZXgiLCJ0ZW1wbGF0ZSIsInJvd3NOdW0iLCJyZWVsc051bSIsIkN1c3RvbVR3ZWVuIiwib2JqIiwicHJvcGVydHlOYW1lIiwic3RhcnQiLCJlbmQiLCJwZXJpb2QiLCJnZXRTcGVlZCIsInVwZGF0ZVJlcXVpcmVkIiwiZGlzdGFuY2UiLCJzcGVlZCIsIm9uQ29tcGxldGUiLCJudW1PZkZyYW1lcyIsInRpbWVCZXR3ZWVuRnJhbWVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJSZWVsIiwicG9zaXRpb25Db25maWciLCJzeW1ib2xzIiwiYWRkU3ltYm9scyIsInN5bWJvbHNCZWZvcmVSZXN1bHQiLCJyZXN1bHRTeW1ib2xzIiwiY3VyUmVzdWx0U3ltYkluZGV4Iiwic2VydmVyRGF0YVJlY2VpdmVkIiwiZm9yY2VkU3RvcFJlcXVpcmVkIiwiY3VyU3ltYiIsInBvc3NpYmxlU3ltU3JjIiwic3ltYm9sIiwiU3ltYm9sIiwiSW5maW5pdHkiLCJhbGwiLCJzeW0iLCJzdGFydFNwaW4iLCJ0aGVuIiwiZG9TcGluIiwiYmV0UmVzdWx0Iiwic3ltYnNCZlJlc3VsdCIsInJlc29sdmVDaGFpbiIsInVzZVJhbmRvbVN5bWIiLCJtb3ZlT25lU2xvdCIsImVuZFNwaW4iLCJvblNwaW5PdmVyIiwibGFzdEluZGV4IiwibGFzdFN5bWJvbCIsIm5ld0luZGV4Iiwic2V0TmV3U3ltYm9sIiwidW5zaGlmdCIsInBvcCIsInBsYXlXaW5BbmltYXRpb24iLCJwbGF5TG9zc0FuaW1hdGlvbiIsInBsYXlJZGxlIiwiUmVlbHMiLCJhbGxSZWVscyIsImFkZFJlZWxzIiwibWFzayIsImFkZE1hc2siLCJjdXJyZW50V2luU3ltYm9scyIsImN1clJlZWxQb2ludHMiLCJyZWVsc01hc2siLCJiZWdpbkZpbGwiLCJkcmF3UmVjdCIsInN0YXJ0U3RvcFNlcXVlbmNlIiwiZm9yY2VkU3RvcCIsImN1clJlc3VsdFJlZWwiLCJzaG93V2luU3ltYiIsInRleHR1cmVTcmMiLCJ0eXBlIiwic3RhcnRTY2FsZSIsInNjYWxlIiwiX3giLCJlbmRTY2FsZSIsInR3ZWVuIiwiYm91bmNlVHdlZW4iLCJzY2FsZVR3ZWVuIiwicGxheSIsInNjYWxlVXAiLCJzY2FsZURvd24iLCJiaW5kIiwidmFsdWUiLCJTZWxlY3RvciIsImxlZnRTcmMiLCJyaWdodFNyYyIsInBvc3NpYmxlVmFsdWVzIiwibWludXNCdXR0b24iLCJtaW51c09uZSIsInBsdXNCdXR0b24iLCJwbHVzT25lIiwiY3VycmVudFZhbHVlIiwibnVtYmVyIiwiYWRkTnVtYmVyIiwiYnV0dG9uRGlzYWJsZUNoZWNrIiwiZGlzYWJsZSIsImVuYWJsZSIsInNwaW5CdXR0b24iLCJzcGluQnV0dG9uU3JjIiwid2luU2NyZWVuIiwiV2luU2NyZWVuIiwiYmV0U2VsZWN0b3IiLCJsZWZ0U2VsZWN0b3IiLCJyaWdodFNlbGVjdG9yIiwibnVtYmVycyIsInNlcnZlck1hbmFnZXIiLCJEZWZhdWx0U3RhdGUiLCJuYW1lIiwiYWN0aXZlIiwidHJhbnNpdGlvbnMiLCJzdGF0ZU1hc2hpbmUiLCJpbnN0YW5jZSIsImNvbnNvbGUiLCJsb2ciLCJuZXh0IiwiY2hhbmdlU3RhdGVUbyIsIklkbGUiLCJvblNwaW5CdXR0b25QcmVzc2VkIiwiZmluaXNoIiwiTG9hZCIsIm9uTG9hZGluZ0NvbXBsZXRlIiwic3RhcnRMb2FkaW5nIiwiaGlkZSIsIlNwaW4iLCJ1cGRhdGVCZXRSZXN1bHQiLCJkaXNhYmxlQnV0dG9ucyIsImdldEN1ckJldFNpemUiLCJzdGFydFJlZWxzU3BpbiIsInNlcnZlclJlc3BvbnNlUmVzb2x2ZSIsImN1cnJlbnRTcGluUmVzdWx0IiwiaXNXaW4iLCJwbGF5V2luIiwidXBkYXRlQ3VycmVudFdpbiIsInVwZGF0ZVdpbkxpbmVzIiwiY3JlYXRlU3ltYm9sc0NvbmZpZyIsInVwZGF0ZVdpblN5bWJvbHMiLCJzdGF0ZXNDb25maWciLCJzdGF0ZXMiLCJjdXJyZW50U3RhdGUiLCJpbml0IiwiY2xhc3MiLCJuZXh0U3RhdGVOYW1lIiwiV2luIiwiYmV0Q2hhbmdlZCIsInNob3dXaW5MaW5lcyIsInNob3dTY3JlZW4iLCJzaG93V2luQW5pbWF0aW9uIiwiaGlkZVdpbkxpbmVzIiwiaGlkZVNjcmVlbiIsInJhbmRvbUludCIsIm1pbiIsIm1heCIsInJhbmQiLCJyYW5kb20iLCJlbmRGaWxsIiwiY3VycmVudFdpbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxt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QWY7O0FBRUEsY0FBS1EsUUFBTCxDQUFjLE1BQUtpRixNQUFuQixFQUEyQixNQUFLRyxPQUFoQztBQUNBLGNBQUsrTSxVQUFMO0FBQ0EsY0FBS2hOLEtBQUwsR0FBYSxHQUFiO0FBQ0EsY0FBS3VOLFVBQUwsR0FBa0IsSUFBbEI7O0FBRUE1UyxZQUFJQyxLQUFKLENBQVVDLFFBQVY7QUFab0M7QUFhdkM7Ozs7c0NBRWN0QixDLEVBQUdDLEMsRUFBR1ksSyxFQUFPQyxNLEVBQVE7QUFDaEMsZ0JBQU00RixVQUFVLElBQUk3RSxLQUFLaUYsSUFBVCxDQUFjLFNBQWQsQ0FBaEI7QUFDQUosb0JBQVFLLEtBQVIsR0FBZ0I7QUFDWkMsNEJBQVksT0FEQTtBQUVaQywwQkFBVSxFQUZFO0FBR1pDLHNCQUFNO0FBSE0sYUFBaEI7QUFLQVIsb0JBQVEzRixNQUFSLENBQWVDLEdBQWYsQ0FBbUIsR0FBbkI7QUFDQTBGLG9CQUFRekYsUUFBUixDQUFpQkQsR0FBakIsQ0FBcUJoQixJQUFJYSxRQUFNLENBQS9CLEVBQWtDWixJQUFJYSxTQUFPLENBQTdDOztBQUVBLG1CQUFPNEYsT0FBUDtBQUNIOztBQUVEOzs7Ozs7eUNBR2lCd0QsUyxFQUFVO0FBQ3ZCLGlCQUFLOEosVUFBTCxHQUFrQjlKLFNBQWxCO0FBQ0g7O0FBRUQ7Ozs7OztxQ0FHYTtBQUNULGlCQUFLMUYsT0FBTCxHQUFlLElBQWY7QUFDQSxpQkFBS2tDLE9BQUwsQ0FBYVUsSUFBYixnQkFBK0IsS0FBSzRNLFVBQXBDO0FBQ0g7O0FBRUQ7Ozs7OztxQ0FHYztBQUNWLGlCQUFLeFAsT0FBTCxHQUFlLEtBQWY7QUFDSDs7OztFQWpEMEIzQyxLQUFLb0MsUyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2phdmFzY3JpcHQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge3RleHR1cmVzfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHtvYnNlcnZhYmxlTWl4aW59IGZyb20gXCIuLi9tYWluL29ic2VydmFibGVNaXhpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgYnV0dG9uVGV4dHVyZXMsIGNhbGxiYWNrKXtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlc1tidXR0b25UZXh0dXJlcy5pZGxlXSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWRsZVRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5pZGxlO1xyXG4gICAgICAgIHRoaXMuaG92ZXJUZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuaG92ZXI7XHJcbiAgICAgICAgdGhpcy5kb3duVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmRvd247XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZFRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5kaXNhYmxlZDtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwMDtcclxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRIaXRBcmVhKDEyNSk7XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1vdXNlb3ZlcigpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmRpc2FibGVkID8gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdIDogdGV4dHVyZXNbdGhpcy5ob3ZlclRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlb3V0KCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZGlzYWJsZWQgPyB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV0gOiB0ZXh0dXJlc1t0aGlzLmlkbGVUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZWRvd24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLmRvd25UZXh0dXJlXTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZXVwKCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZGlzYWJsZWQgPyB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV0gOiB0ZXh0dXJlc1t0aGlzLmhvdmVyVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLmlkbGVUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlICgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBoaXRBcmVhIHJhZGl1c1xyXG4gICAgICovXHJcbiAgICBzZXRIaXRBcmVhIChyYWRpdXMpIHtcclxuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5DaXJjbGUoMCwgMCwgcmFkaXVzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7TGluZX0gZnJvbSBcIi4vbGluZVwiO1xyXG5pbXBvcnQge2dhbWVDb25maWd9IGZyb20gXCIuLi9tYWluL2dhbWVDb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCZXRMaW5lcyBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubGluZVBvaW50cyA9IHRoaXMuYWRkTGluZVBvaW50cygpO1xyXG4gICAgICAgIHRoaXMuYWxsTGluZXMgPSB0aGlzLmFkZExpbmVzKHRoaXMubGluZVBvaW50cyk7XHJcblxyXG4gICAgICAgIHRoaXMuY3VycmVudFdpbkxpbmVzID0gW107XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSBsaW5lIHBvaW50cyBkZXBlbmRzIG9uIGdhbWVDb25maWcgcGFyYW1zIGFuZCBhZGQgaXQgdG8gYXJyYXlcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gYXJyYXkgd2l0aCBsaW5lIHBvaW50c1xyXG4gICAgICovXHJcbiAgICBhZGRMaW5lUG9pbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGdhbWVDb25maWcpO1xyXG4gICAgICAgIGNvbnN0IGJldExpbmVzID0gY29uZmlnLmJldExpbmVzO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGNvbmZpZy5yZWVsc1Bvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IHRvcE9mZnNldCA9IHBvc2l0aW9ucy50b3BPZmZzZXQgKyBwb3NpdGlvbnMucmVlbHMuc2xvdExlbmd0aCAvIDI7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmVQb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZXRMaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJCZXRMaW5lID0gYmV0TGluZXNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGN1ckxpbmVQb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VyQmV0TGluZS5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHhQb2ludCA9IHBvc2l0aW9ucy5yZWVsc1BvaW50c1tqXS54O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeVBvaW50ID0gcG9zaXRpb25zLnN5bWJvbHNQb2ludFtjdXJCZXRMaW5lW2pdXS55ICsgdG9wT2Zmc2V0O1xyXG5cclxuICAgICAgICAgICAgICAgIGN1ckxpbmVQb2ludHMucHVzaCh7eDogeFBvaW50LCB5OiB5UG9pbnR9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGluZVBvc2l0aW9ucy5wdXNoKGN1ckxpbmVQb2ludHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpbmVQb3NpdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgbGluZXMgdXNpbmcgbGluZXMgcG9pbnRzIGFuZCBhZGQgaXQgdG8gYXJyYXlcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGxpbmVQb2ludHMgYXJyYXkgd2l0aCBwb2ludHMgZm9yIGxpbmVzXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFycmF5IHdpdGggbGluZXNcclxuICAgICAqL1xyXG4gICAgYWRkTGluZXMobGluZVBvaW50cykge1xyXG4gICAgICAgIGNvbnN0IGFsbExpbmVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSBsaW5lUG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiZXRMaW5lID0gbmV3IExpbmUoY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIGFsbExpbmVzLnB1c2goYmV0TGluZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoYmV0TGluZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWxsTGluZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSB3aW5MaW5lcyBhcnJheSB3aXRoIHdpbiBsaW5lc1xyXG4gICAgICovXHJcbiAgICB1cGRhdGVXaW5MaW5lcyh3aW5MaW5lcykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdpbkxpbmVzID0gd2luTGluZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgc2hvdyBjdXJyZW50IHdpbiBsaW5lc1xyXG4gICAgICovXHJcbiAgICBzaG93V2luTGluZXMoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRXaW5MaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJMaW5lID0gdGhpcy5jdXJyZW50V2luTGluZXNbaV07XHJcbiAgICAgICAgICAgIHRoaXMuYWxsTGluZXNbY3VyTGluZV0uc2hvd1dpbkxpbmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgZGVmYXVsdCBwYXJhbXMgZm9yIGFsbCBsaW5lc1xyXG4gICAgICovXHJcbiAgICBoaWRlV2luTGluZXMoKSB7XHJcbiAgICAgICAgdGhpcy5hbGxMaW5lcy5mb3JFYWNoKChsaW5lKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmUuaGlkZVdpbkxpbmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBMaW5lIGV4dGVuZHMgUElYSS5HcmFwaGljcyB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcnJDb25maWcpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmVTdHlsZSgzLCAweDAwZmYwMCwgMC41KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUxpbmVCeVBvaW50cyhhcnJDb25maWcpO1xyXG4gICAgICAgIHRoaXMuaGlkZVdpbkxpbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZXMgbGluZSB1c2luZyB4LHkgcG9pbnRzIGZyb20gYXJyYXlcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFyckNvbmZpZyBBcnJheTx7eDogbnVtYmVyLCB5Om51bWJlcn0+IGFycmF5IHdpdGggeCx5IHBvaW50c1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVMaW5lQnlQb2ludHMoYXJyQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG8oYXJyQ29uZmlnWzBdLngsIGFyckNvbmZpZ1swXS55KTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcnJDb25maWcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyUG9pbnRDb25maWcgPSBhcnJDb25maWdbaV07XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKGN1clBvaW50Q29uZmlnLngsIGN1clBvaW50Q29uZmlnLnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1ha2VzIGxpbmUgdmlzaWJsZVxyXG4gICAgICovXHJcbiAgICBzaG93V2luTGluZSgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaGlkZXMgbGluZVxyXG4gICAgICovXHJcbiAgICBoaWRlV2luTGluZSgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7U2xvdH0gZnJvbSBcIi4vc2xvdFwiO1xyXG5pbXBvcnQge1N0YXRlTWFjaGluZX0gZnJvbSBcIi4vc3RhdGVzL3N0YXRlTWFjaGluZVwiO1xyXG5pbXBvcnQge1N0YXRlc0NvbmZpZ30gZnJvbSBcIi4vc3RhdGVzL3N0YXRlc0NvbmZpZ1wiO1xyXG5pbXBvcnQge0xvYWRlcn0gZnJvbSBcIi4vbG9hZGVyL2xvYWRlclwiO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XHJcblxyXG5leHBvcnQgbGV0IHRleHR1cmVzLFxyXG4gICAgYmFja2dyb3VuZCxcclxuICAgIHNsb3Q7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTG9vcCA9IFtdO1xyXG5leHBvcnQgY29uc3QgbG9hZGVyID0gbmV3IExvYWRlcigpO1xyXG5leHBvcnQgY29uc3Qgc3RhdGVIYW5kbGVyID0gbmV3IFN0YXRlTWFjaGluZShTdGF0ZXNDb25maWcpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgdGV4dHVyZXMgPSBQSVhJLkxvYWRlci5zaGFyZWQucmVzb3VyY2VzW1wiLi9pbWFnZXMvc2hlZXQuanNvblwiXS50ZXh0dXJlcztcclxuICAgIGJhY2tncm91bmQgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZXNbXCJiYWNrZ3JvdW5kLnBuZ1wiXSk7XHJcbiAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQoYmFja2dyb3VuZCk7XHJcblxyXG4gICAgc2xvdCA9IG5ldyBTbG90KCk7XHJcbiAgICBhcHAudGlja2VyLmFkZChkZWx0YSA9PiBnYW1lTG9vcChkZWx0YSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcChkZWx0YSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJMb29wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcmVuZGVyTG9vcFtpXS51cGRhdGUoZGVsdGEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtMb2FkaW5nU2NyZWVufSBmcm9tIFwiLi9sb2FkaW5nU2NyZWVuXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi4vbWFpbi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuaW1wb3J0IHtzZXR1cH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NjcmVlbiA9IG5ldyBMb2FkaW5nU2NyZWVuKDAsIDAsIDgwMCwgNTAwLCAweDY5Njk2OSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRMb2FkaW5nKCkge1xyXG4gICAgICAgIFBJWEkuTG9hZGVyLnNoYXJlZFxyXG4gICAgICAgICAgICAuYWRkKFwiLi9pbWFnZXMvc2hlZXQuanNvblwiKVxyXG4gICAgICAgICAgICAuYWRkKFwiLi9pbWFnZXMvMS5qcGdcIilcclxuICAgICAgICAgICAgLmFkZChcIi4vaW1hZ2VzLzIuanBnXCIpXHJcbiAgICAgICAgICAgIC5hZGQoXCIuL2ltYWdlcy8zLmpwZ1wiKVxyXG4gICAgICAgICAgICAuYWRkKFwiLi9pbWFnZXMvNC5qcGdcIilcclxuICAgICAgICAgICAgLmFkZChcIi4vaW1hZ2VzLzUuanBnXCIpXHJcbiAgICAgICAgICAgIC5vbihcInByb2dyZXNzXCIsIChsb2FkZXIpID0+IHRoaXMubG9hZFByb2dyZXNzSGFuZGxlcihsb2FkZXIpKVxyXG4gICAgICAgICAgICAubG9hZChzZXR1cCk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFByb2dyZXNzSGFuZGxlcihsb2FkZXIpe1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NjcmVlbi51cGRhdGUobG9hZGVyLnByb2dyZXNzKTtcclxuICAgICAgICBpZihsb2FkZXIucHJvZ3Jlc3MgPT09IDEwMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVFdmVudChcIm9uTG9hZGluZ0NvbXBsZXRlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL3dpblNjcmVlbi9yZWN0YW5nbGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2FkaW5nU2NyZWVuIGV4dGVuZHMgUElYSS5Db250YWluZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4uYWxwaGEgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5jcmVhdGVNZXNzYWdlKHgsIHksIHdpZHRoLCA0MDApO1xyXG4gICAgICAgIHRoaXMuYmxhY2tMaW5lID0gbmV3IFJlY3RhbmdsZSgxNTAsIDI1MCwgNTAwLCAzMCwgMHgwMDAwMDApO1xyXG4gICAgICAgIHRoaXMuZ3JlZW5MaW5lID0gbmV3IFJlY3RhbmdsZSgxNTAsIDI1MCwgNTAwLCAzMCwgMHgyMjk5NTQpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zY3JlZW4sIHRoaXMubWVzc2FnZSwgdGhpcy5ibGFja0xpbmUsIHRoaXMuZ3JlZW5MaW5lKTtcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGUoMCk7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1lc3NhZ2UgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFBJWEkuVGV4dChcIkxvYWRpbmcuLi5cIik7XHJcbiAgICAgICAgbWVzc2FnZS5zdHlsZSA9IHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWVzc2FnZS5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgbWVzc2FnZS5wb3NpdGlvbi5zZXQoeCArIHdpZHRoLzIsIHkgKyBoZWlnaHQvMik7XHJcblxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShwZXJjZW50KXtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UudGV4dCA9IGBMb2FkaW5nICR7TWF0aC5mbG9vcihwZXJjZW50KX0lYDtcclxuICAgICAgICB0aGlzLmdyZWVuTGluZS53aWR0aCA9IHBlcmNlbnQgKiA1O1xyXG4gICAgfVxyXG5cclxuICAgIGhpZGUoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY29uc3QgZ2FtZUNvbmZpZyAgPSB7XHJcbiAgICBiZXRMaW5lcyA6IFtcclxuICAgICAgICBbMCwwLDAsMCwwXSxcclxuICAgICAgICBbMSwxLDEsMSwxXSxcclxuICAgICAgICBbMiwyLDIsMiwyXSxcclxuICAgICAgICBbMCwxLDIsMSwwXSxcclxuICAgICAgICBbMiwxLDAsMSwyXSxcclxuICAgICAgICBbMSwwLDEsMCwxXSxcclxuICAgICAgICBbMSwyLDEsMiwxXVxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgcmVlbHNldHMgOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFsxLDAsMiwwLDIsMCwxLDAsMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwwLDIsMSwwLDEsMiwwLDJdLFxyXG4gICAgICAgICAgICAgICAgWzEsMSwyLDIsMiwwLDEsMCwxXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMCwwLDIsMCwwLDEsMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwwLDEsMSwwLDAsMiwyLDFdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLDIsMiwxLDAsMCwyLDEsMl0sXHJcbiAgICAgICAgICAgICAgICBbMiwyLDEsMSwwLDEsMiwwLDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsMSwwLDIsMSwwLDIsMCwwXSxcclxuICAgICAgICAgICAgICAgIFsyLDEsMSwyLDAsMCwxLDAsMl0sXHJcbiAgICAgICAgICAgICAgICBbMSwwLDIsMiwyLDEsMCwyLDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFsxLDIsMCwxLDAsMSwyLDEsMl0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDAsMCwyLDAsMCwxLDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsMSwwLDIsMSwwLDIsMCwxXSxcclxuICAgICAgICAgICAgICAgIFsxLDAsMiwyLDIsMSwwLDIsMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDAsMCwyLDAsMCwxLDJdXHJcbiAgICAgICAgICAgIF1cclxuICAgIF0sXHJcblxyXG5cclxuICAgIGdhbWVTaXplIDoge1xyXG4gICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgcm93czogMyxcclxuICAgICAgICByZWVsczogNVxyXG4gICAgfSxcclxuXHJcbiAgICByZWVsc1Bvc2l0aW9uIDoge1xyXG4gICAgICAgIHRvcE9mZnNldCA6IDEwLFxyXG4gICAgICAgIGxlZnRPZmZzZXQgOiAxNSxcclxuXHJcbiAgICAgICAgcmVlbHMgOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDgwLFxyXG4gICAgICAgICAgICBzbG90TGVuZ3RoOiAxMzQsXHJcbiAgICAgICAgICAgIHN5bWJvbERpbWVuc2lvbnM6IHt3aWR0aDogMTEwLCBoZWlnaHQ6IDExMH0sXHJcbiAgICAgICAgICAgIHZpc2libGVTeW1iTnVtOiAzLFxyXG4gICAgICAgICAgICBzeW1ib2xzTnVtYmVyOiA0LFxyXG4gICAgICAgICAgICBzeW1ib2xTcGVlZCA6IDE2MFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJlZWxzUG9pbnRzIDogW1xyXG4gICAgICAgICAgICB7eCA6IDgwLCB5IDogMTM0LzJ9LFxyXG4gICAgICAgICAgICB7eCA6IDgwICogMywgeSA6IDEzNC8yfSxcclxuICAgICAgICAgICAge3ggOiA4MCAqIDUsIHkgOiAxMzQvMn0sXHJcbiAgICAgICAgICAgIHt4IDogODAgKiA3LCB5IDogMTM0LzJ9LFxyXG4gICAgICAgICAgICB7eCA6IDgwICogOSwgeSA6IDEzNC8yfVxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIHN5bWJvbHNQb2ludCA6IFtcclxuICAgICAgICAgICAge3ggOiAwLCB5IDogMH0sXHJcbiAgICAgICAgICAgIHt4IDogMCwgeSA6IDEzNH0sXHJcbiAgICAgICAgICAgIHt4IDogMCwgeSA6IDEzNCAqIDJ9LFxyXG4gICAgICAgICAgICB7eCA6IDAsIHkgOiAxMzQgKiAzfSxcclxuXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcblxyXG59OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5leHBvcnQgY29uc3Qgb2JzZXJ2YWJsZU1peGluID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn1cclxuICAgICAqL1xyXG4gICAgYnkgOiBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgaWYoICF0aGlzLmV2ZW50SGFuZGxlcnMgKXtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IoIGxldCBldmVudE5hbWUgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmKCBwYXJhbXMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggIXRoaXMuZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdKXtcclxuICAgICAgICAgICAgICAgICAgICBldmVudHMuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSA9IHBhcmFtc1tldmVudE5hbWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lIGV2ZW50TmFtZVxyXG4gICAgICogQHBhcmFtIHthcnJheX0gYXJncyBhcnJheSB3aXRoIGFyZ3VtZW50c1xyXG4gICAgICovXHJcbiAgICBmaXJlRXZlbnQgOiBmdW5jdGlvbihldmVudE5hbWUsIC4uLmFyZ3Mpe1xyXG4gICAgICAgIGV2ZW50cy5maXJlRXZlbnQoZXZlbnROYW1lLCBhcmdzKTtcclxuICAgIH1cclxufTsiLCJpbXBvcnQge3JhbmRvbUludH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7Z2FtZUNvbmZpZ30gZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQge29ic2VydmFibGVNaXhpbn0gZnJvbSBcIi4vb2JzZXJ2YWJsZU1peGluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VydmVyTWFuYWdlciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLnJlZWxzZXRzTGlzdCA9IGdhbWVDb25maWcucmVlbHNldHM7XHJcbiAgICAgICAgdGhpcy5iZXRMaW5lcyA9IGdhbWVDb25maWcuYmV0TGluZXM7XHJcbiAgICAgICAgdGhpcy5yZWVsc0xlbmd0aCA9IGdhbWVDb25maWcuZ2FtZVNpemUucm93cztcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBvbiByZXF1ZXN0IGZyb20gY2xpZW50IGNyZWF0ZXMgc3Bpbi9iZXQgcmVzdWx0IGFuZCBpbmZvcm0gdGhlIGNsaWVudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJldFNpemUgbXVsdGlwbGllciBmb3Igd2luIHBvaW50c1xyXG4gICAgICovXHJcbiAgICBzdGFydChiZXRTaXplKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFJlZWxzZXQgPSB0aGlzLnNlbGVjdFJlZWxzZXQodGhpcy5yZWVsc2V0c0xpc3QpO1xyXG4gICAgICAgIGNvbnN0IHNwaW5SZXN1bHQgPSB0aGlzLnNlbGVjdFBvc2l0aW9ucyhjdXJyZW50UmVlbHNldCk7XHJcbiAgICAgICAgY29uc3QgZ2VuZXJhdGVkUmVzcG9uc2UgPSB0aGlzLmNoZWNrQmV0TGluZXMoc3BpblJlc3VsdCwgYmV0U2l6ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KFwibm90aWZ5OnNlcnZlck1hbmFnZXIubmV3UmVzcG9uc2VcIiwgZ2VuZXJhdGVkUmVzcG9uc2UpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJhbmRvbWx5IHNlbGVjdCByZWVsc2V0IGZyb20gcmVlbHNldHNMaXN0XHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZWVsc2V0c0xpc3QgYXJyYXkgd2l0aCByZWVsc2V0c1xyXG4gICAgICogQHJldHVybnMge2FycmF5fSBzZWxlY3RlZCByZWVsc2V0XHJcbiAgICAgKi9cclxuICAgIHNlbGVjdFJlZWxzZXQocmVlbHNldHNMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSByYW5kb21JbnQoMCwgcmVlbHNldHNMaXN0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHJldHVybiByZWVsc2V0c0xpc3RbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmFuZG9tbHkgc2VsZWN0cyBzdGFydCBwb3NpdGlvbnMgb24gZWFjaCByZWVsIGFuZCBnZW5lcmF0ZSBuZXcgYXJyYXkgd2l0aCBuZXh0IDMgc3ltYm9sc1xyXG4gICAgICogQHBhcmFtIHthcnJheX0gY3VycmVudFJlZWxzZXQgYXJyYXkgd2l0aCBwb3NzaWJsZSB2YWx1ZXMgZm9yIGVhY2ggcmVlbFxyXG4gICAgICogQHJldHVybnMge0FycmF5fSAyZCBhcnJheSB3aXRoIHNwaW4gcmVzdWx0XHJcbiAgICAgKi9cclxuICAgIHNlbGVjdFBvc2l0aW9ucyhjdXJyZW50UmVlbHNldCkge1xyXG4gICAgICAgIGNvbnN0IHNwaW5SZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UmVlbHNldC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJTZXQgPSBjdXJyZW50UmVlbHNldFtpXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSByYW5kb21JbnQoMCwgY3VyU2V0Lmxlbmd0aCAtIHRoaXMucmVlbHNMZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJSZWVsID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMucmVlbHNMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY3VyUmVlbC5wdXNoKGN1clNldFtzdGFydFBvaW50ICsgal0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGluUmVzdWx0LnB1c2goY3VyUmVlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzcGluUmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGVwZW5kcyBvbiBzcGluIHJlc3VsdCBjaGVjayBiZXQgbGluZXMgYW5kIGdlbmVyYXRlcyByZXN1bHQgY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBzcGluUmVzdWx0IHR3by1sZXZlbHMgYXJyYXkgd2l0aCBzcGluIHJlc3VsdFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJldFNpemUgd2luIHBvaW50cyBtdWx0aXBsaWVyXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSByZXN1bHRDb25maWcgcmVzdWx0IGNvbmZpZ3VyYXRpb24gb2YgY3VycmVudCBiZXRcclxuICAgICAqICAgICAgICAgIHtudW1iZXJ9IHJlc3VsdENvbmZpZy53aW5BbW91bnQgYW1vdW50IG9mIHdpbiBwb2ludFxyXG4gICAgICogICAgICAgICAge2FycmF5fSByZXN1bHRDb25maWcud2luTGluZXMgYXJyYXkgd2l0aCB3aW4gYmV0IGxpbmVzXHJcbiAgICAgKiAgICAgICAgICB7YXJyYXl9IHJlc3VsdENvbmZpZy53aW5TeW1ib2xzIGFycmF5IHdpdGggd2luIHN5bWJvbHNcclxuICAgICAqICAgICAgICAgIHthcnJheX0gcmVzdWx0Q29uZmlnLnNwaW5SZXN1bHQgMmQgYXJyYXkgd2l0aCBzcGluIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBjaGVja0JldExpbmVzKHNwaW5SZXN1bHQsIGJldFNpemUpIHtcclxuICAgICAgICBsZXQgd2luUG9pbnRzID0gMDtcclxuICAgICAgICBjb25zdCB3aW5TeW1ib2xzID0gW107XHJcbiAgICAgICAgY29uc3Qgd2luTGluZXMgPSBbXTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHt9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmV0TGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudExpbmUgPSB0aGlzLmJldExpbmVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgc3ltYnNNYXRjaGVkID0gMTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9uc09uUmVlbHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdlbmVyYXRlZExpbmUgPSBzcGluUmVzdWx0Lm1hcCgocmVlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VySW5kZXggPSBjdXJyZW50TGluZVtpXTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc09uUmVlbHMucHVzaChjdXJJbmRleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVlbFtjdXJJbmRleF07XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnZW5lcmF0ZWRMaW5lLmxlbmd0aCAtIDE7IGorKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYXRlZExpbmVbal0gPT09IGdlbmVyYXRlZExpbmVbaiArIDFdKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN5bWJzTWF0Y2hlZCArPSAxO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzeW1ic01hdGNoZWQgPiAyKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgd2luU3ltYm9scy5wdXNoKHBvc2l0aW9uc09uUmVlbHMuc2xpY2UoMCwgc3ltYnNNYXRjaGVkKSk7XHJcbiAgICAgICAgICAgICAgICB3aW5MaW5lcy5wdXNoKGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzeW1ic01hdGNoZWQgPT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN5bWJzTWF0Y2hlZCA9PT0gNCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAzMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3ltYnNNYXRjaGVkID09PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luUG9pbnRzICs9IDEwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzcG9uc2Uud2luQW1vdW50ID0gd2luUG9pbnRzICogYmV0U2l6ZTtcclxuICAgICAgICByZXNwb25zZS53aW5MaW5lcyA9IHdpbkxpbmVzO1xyXG4gICAgICAgIHJlc3BvbnNlLndpblN5bWJvbHMgPSB3aW5TeW1ib2xzO1xyXG4gICAgICAgIHJlc3BvbnNlLnNwaW5SZXN1bHQgPSBzcGluUmVzdWx0O1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luU3ltYm9scyB7XHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlIHdpbiBzeW1ib2xzIGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHthcnJheX0gd2luU3ltYm9scyBhcnJheSB3aXRoIHdpbiBzeW1ib2xzXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl8bnVsbH0gaWYgbm8gd2luIHN5bWJvbHMgcmV0dXJucyBudWxsLCBlbHNlIHJldHVybnMgMmQgYXJyYXkgd2l0aCB3aW4gc3ltYm9sc1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVTeW1ib2xzQ29uZmlnICh3aW5TeW1ib2xzKSB7XHJcbiAgICAgICAgaWYod2luU3ltYm9scy5sZW5ndGggPT09IDApe1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMuY3JlYXRlVGVtcGxhdGVNYXRyaXgoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3aW5TeW1ib2xzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY29uc3QgY3VyTGluZSA9IHdpblN5bWJvbHNbaV07XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgY3VyTGluZS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJSZWVsID0gIG1hdHJpeFtqXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJJbmRleCA9IGN1ckxpbmVbal07XHJcblxyXG4gICAgICAgICAgICAgICAgY3VyUmVlbFtzeW1iSW5kZXhdID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbWF0cml4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIG1hdHJpeCBkZXBlbmRzIG9uIGdhbWVDb25maWcgcGFyYW1zXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9IG1hdHJpeCB3aXRoIGZhbHNlIHBhcmFtc1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVUZW1wbGF0ZU1hdHJpeCgpe1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJvd3NOdW0gPSBnYW1lQ29uZmlnLmdhbWVTaXplLnJvd3M7XHJcbiAgICAgICAgY29uc3QgcmVlbHNOdW0gPSBnYW1lQ29uZmlnLmdhbWVTaXplLnJlZWxzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVlbHNOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clJlZWwgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCByb3dzTnVtOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgY3VyUmVlbC5wdXNoKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLnB1c2goY3VyUmVlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3JlbmRlckxvb3B9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge3RpbWVCZXR3ZWVuRnJhbWVzfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21Ud2VlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIHByb3BlcnR5TmFtZSwgc3RhcnQsIGVuZCwgcGVyaW9kKSB7XHJcblxyXG4gICAgICAgIHRoaXMub2JqID0gb2JqO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLnByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZTtcclxuICAgICAgICB0aGlzLmdldFNwZWVkKHBlcmlvZCk7XHJcblxyXG4gICAgICAgIHJlbmRlckxvb3AucHVzaCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbiBlYWNoIGZyYW1lIGV2ZW5seSBjaGFuZ2UgcmVxdWlyZWQgcGFyYW0sIGZyb20gdGhlIHN0YXJ0IHBvaW50IHRvIHRoZSBlbmQsIGZvciBhIHNldCBwZXJpb2Qgb2YgdGltZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhIGVsaW1pbmF0ZXMgZGVsYXlzIGJldHdlZW4gZnJhbWVzXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLnVwZGF0ZVJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRpc3RhbmNlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA8IHRoaXMuZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdID49IHRoaXMuZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdID0gdGhpcy5lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPiB0aGlzLmVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSArPSB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA8PSB0aGlzLmVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA9IHRoaXMuZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmF0ZXMgc3BlZWQgZGVwZW5kIG9uIGRpc3RhbmNlIGFuZCBwZXJpb2RcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJpb2QgcGVyaW9kIG9mIHRpbWUgbmVlZGVkIHRvIHJlYWNoIHRoZSBlbmRwb2ludFxyXG4gICAgICovXHJcbiAgICBnZXRTcGVlZChwZXJpb2QpIHtcclxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5lbmQgLSB0aGlzLnN0YXJ0O1xyXG4gICAgICAgIHRoaXMubnVtT2ZGcmFtZXMgPSBwZXJpb2QgLyB0aW1lQmV0d2VlbkZyYW1lcztcclxuICAgICAgICB0aGlzLnNwZWVkID0gdGhpcy5kaXN0YW5jZSAvIHRoaXMubnVtT2ZGcmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IHN0YXJ0IHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kIGVuZCBwb2ludFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcmlvZCBwZXJpb2Qgb2YgdGltZSBuZWVkZWQgdG8gcmVhY2ggdGhlIGVuZHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNvbXBsZXRlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBwbGF5KHN0YXJ0LCBlbmQsIHBlcmlvZCwgb25Db21wbGV0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICAgICAgdGhpcy5nZXRTcGVlZChwZXJpb2QpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3JhbmRvbUludH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7U3ltYm9sfSBmcm9tIFwiLi9zeW1ib2xcIjtcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi4vbWFpbi9nYW1lQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVlbCBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uQ29uZmlnID0gZ2FtZUNvbmZpZy5yZWVsc1Bvc2l0aW9uLnJlZWxzO1xyXG4gICAgICAgIHRoaXMuc3ltYm9sc1BvaW50ID0gZ2FtZUNvbmZpZy5yZWVsc1Bvc2l0aW9uLnN5bWJvbHNQb2ludDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzID0gdGhpcy5hZGRTeW1ib2xzKHRoaXMuc3ltYm9sc1BvaW50KTtcclxuICAgICAgICB0aGlzLnN5bWJvbHNCZWZvcmVSZXN1bHQgPSAwO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3VsdFN5bWJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1clJlc3VsdFN5bWJJbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJEYXRhUmVjZWl2ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmZvcmNlZFN0b3BSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkaW5nIHN5bWJvbHMgdG8gcmVlbCBieSBzeW1ib2xzUG9pbnQgZnJvbSBnYW1lQ29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBzeW1ib2xzUG9pbnQgYXJyYXkgd2l0aCBwb2ludHMgZm9yIHN5bWJvbHNcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gYXJyYXkgd2l0aCBzeW1ib2xzXHJcbiAgICAgKi9cclxuICAgIGFkZFN5bWJvbHMoc3ltYm9sc1BvaW50KSB7XHJcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHNQb2ludC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJTeW1iID0gc3ltYm9sc1BvaW50W2ldO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSByYW5kb21JbnQoMCwgcG9zc2libGVTeW1TcmMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN5bWJvbCA9IG5ldyBTeW1ib2wocG9zc2libGVTeW1TcmNbaW5kZXhdLCB0aGlzLnBvc2l0aW9uQ29uZmlnKTtcclxuICAgICAgICAgICAgc3ltYm9sLnBvc2l0aW9uLnNldChjdXJTeW1iLngsIGN1clN5bWIueSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3ltYm9sKTtcclxuICAgICAgICAgICAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3ltYm9scztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHN0YXJ0IHNwaW5uaW5nIHN5bWJvbHNcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHByb21pc2VcclxuICAgICAqL1xyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID0gSW5maW5pdHk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuc3ltYm9scy5tYXAoc3ltID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN5bS5zdGFydFNwaW4oKTtcclxuICAgICAgICB9KSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5kb1NwaW4oKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHthcnJheX0gYmV0UmVzdWx0IGFycmF5IHdpdGggc3ltYm9scywgb24gd2hpY2ggcmVlbCBoYXMgdG8gc3RvcFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN5bWJzQmZSZXN1bHQgYW1vdW50IG9mIHJhbmRvbSBzeW1ib2xzIGJlZm9yZSByZXN1bHRcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHByb21pc2VcclxuICAgICAqL1xyXG4gICAgc3RhcnRTdG9wU2VxdWVuY2UoYmV0UmVzdWx0LCBzeW1ic0JmUmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNCZWZvcmVSZXN1bHQgPSBzeW1ic0JmUmVzdWx0O1xyXG4gICAgICAgICAgICB0aGlzLnJlc3VsdFN5bWJvbHMgPSBiZXRSZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMuY3VyUmVzdWx0U3ltYkluZGV4ID0gdGhpcy5yZXN1bHRTeW1ib2xzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2VydmVyRGF0YVJlY2VpdmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZUNoYWluID0gcmVzb2x2ZVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWFrZXMgc3ltYm9scyBtb3ZlIG9uZSBzbG90IGFuZCBkZXBlbmRpbmcgb24gZGlmZmVyZW50IGNvbmRpdGlvbnMgbWFrZXMgcmVjdXJzaXZlIGNhbGwgb3IgZmluaXNoIHNwaW5uaW5nXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZVJhbmRvbVN5bWIgaWYgdHJ1ZSBhZGQgcmFuZG9tU3ltYm9sXHJcbiAgICAgKi9cclxuICAgIGRvU3Bpbih1c2VSYW5kb21TeW1iID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMubW92ZU9uZVNsb3QodXNlUmFuZG9tU3ltYilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0LS07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdCA+IDAgJiYgIXRoaXMuZm9yY2VkU3RvcFJlcXVpcmVkIHx8ICF0aGlzLnNlcnZlckRhdGFSZWNlaXZlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZG9TcGluKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1clJlc3VsdFN5bWJJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NwaW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyUmVzdWx0U3ltYkluZGV4LS07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKHRoaXMuc3ltYm9scy5tYXAoc3ltYm9sID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN5bWJvbC5lbmRTcGluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25TcGluT3ZlcigpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlUmFuZG9tU3ltYiBpZiB0cnVlIGFkZCByYW5kb21TeW1ib2xcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHByb21pc2VcclxuICAgICAqL1xyXG4gICAgbW92ZU9uZVNsb3QodXNlUmFuZG9tU3ltYikge1xyXG4gICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IHRoaXMuc3ltYm9scy5sZW5ndGggLSAxO1xyXG4gICAgICAgIGNvbnN0IGxhc3RTeW1ib2wgPSB0aGlzLnN5bWJvbHNbbGFzdEluZGV4XTtcclxuICAgICAgICBsZXQgbmV3SW5kZXg7XHJcblxyXG4gICAgICAgIGlmICh1c2VSYW5kb21TeW1iKSB7XHJcbiAgICAgICAgICAgIG5ld0luZGV4ID0gcmFuZG9tSW50KDAsIHBvc3NpYmxlU3ltU3JjLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0luZGV4ID0gdGhpcy5yZXN1bHRTeW1ib2xzW3RoaXMuY3VyUmVzdWx0U3ltYkluZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhc3RTeW1ib2wuc2V0TmV3U3ltYm9sKG5ld0luZGV4KTtcclxuXHJcbiAgICAgICAgbGFzdFN5bWJvbC55ID0gLXRoaXMucG9zaXRpb25Db25maWcuc2xvdExlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzLnVuc2hpZnQodGhpcy5zeW1ib2xzLnBvcCgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuc3ltYm9scy5tYXAoc3ltYm9sID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN5bWJvbC5tb3ZlT25lU2xvdCgpO1xyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBjdXJyZW50IHNwaW4gaXMgb3ZlciBzZXQgZGVmYXVsdCB2YWx1ZXMgYW5kIGNhbGwgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgb25TcGluT3ZlcigpIHtcclxuICAgICAgICB0aGlzLnNlcnZlckRhdGFSZWNlaXZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9yY2VkU3RvcFJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRTeW1ib2xzID0gW107XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlQ2hhaW4oKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNob3dzIHdpbi9sb3NzIGFuaW1hdGlvbiBmb3IgZWFjaCBzeW1ib2xcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHN5bWJvbHMgYXJyYXkgd2l0aCBib29sZWFuIHZhbHVlc1xyXG4gICAgICovXHJcbiAgICBzaG93V2luU3ltYihzeW1ib2xzKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzeW1ib2xzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzeW1ib2xzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNbaV0ucGxheVdpbkFuaW1hdGlvbigpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNbaV0ucGxheUxvc3NBbmltYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyBkZWZhdWx0IHN5bWJvbHMgcGFyYW1zIGZvciBlYWNoIHN5bWJvbFxyXG4gICAgICovXHJcbiAgICBwbGF5SWRsZSgpIHtcclxuICAgICAgICB0aGlzLnN5bWJvbHMuZm9yRWFjaChzeW1ib2wgPT4ge1xyXG4gICAgICAgICAgICBzeW1ib2wucGxheUlkbGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2tpcHMgc3Bpbm5pbmcgYW5pbWF0aW9uXHJcbiAgICAgKi9cclxuICAgIGZvcmNlZFN0b3AoKSB7XHJcbiAgICAgICAgdGhpcy5mb3JjZWRTdG9wUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtSZWVsfSBmcm9tIFwiLi9yZWVsXCJcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi4vbWFpbi9nYW1lQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVlbHMgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnkgPSBnYW1lQ29uZmlnLnJlZWxzUG9zaXRpb24udG9wT2Zmc2V0O1xyXG5cclxuICAgICAgICB0aGlzLmFsbFJlZWxzID0gdGhpcy5hZGRSZWVscygpO1xyXG4gICAgICAgIHRoaXMubWFzayA9IHRoaXMuYWRkTWFzaygpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdpblN5bWJvbHMgPSBudWxsO1xyXG5cclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGVzIHJlZWxzIGRlcGVuZGluZyBvbiBnYW1lQ29uZmlnIHBhcmFtc1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIHJlZWxzXHJcbiAgICAgKi9cclxuICAgIGFkZFJlZWxzKCkge1xyXG4gICAgICAgIGxldCByZWVsc1BvaW50cyA9IGdhbWVDb25maWcucmVlbHNQb3NpdGlvbi5yZWVsc1BvaW50cztcclxuICAgICAgICBsZXQgYWxsUmVlbHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWVsc1BvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VyUmVlbFBvaW50cyA9IHJlZWxzUG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgcmVlbCA9IG5ldyBSZWVsKGN1clJlZWxQb2ludHMueCwgY3VyUmVlbFBvaW50cy55KTtcclxuICAgICAgICAgICAgYWxsUmVlbHMucHVzaChyZWVsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChyZWVsKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsUmVlbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgYSBtYXNrIHRvIGxpbWl0IHZpc2libGUgem9uZVxyXG4gICAgICogQHJldHVybnMge1BJWEkuR3JhcGhpY3N9IHJlZWxzIG1hc2tcclxuICAgICAqL1xyXG4gICAgYWRkTWFzaygpIHtcclxuICAgICAgICBsZXQgcmVlbHNNYXNrID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICByZWVsc01hc2suYmVnaW5GaWxsKCk7XHJcbiAgICAgICAgcmVlbHNNYXNrLmRyYXdSZWN0KDAsIC10aGlzLnksIGdhbWVDb25maWcuZ2FtZVNpemUud2lkdGgsIGdhbWVDb25maWcuZ2FtZVNpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHJlZWxzTWFzayk7XHJcblxyXG4gICAgICAgIHJldHVybiByZWVsc01hc2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzdGFydCBzcGlubmluZyByZWVsc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydFJlZWxzU3BpbigpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5hbGxSZWVscy5tYXAocmVlbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWVsLnN0YXJ0KCk7XHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBzcGluUmVzdWx0IDJkIGFycmF5IHdpdGggc3ltYm9scywgb24gd2hpY2ggZWFjaCByZWVsIGhhcyB0byBzdG9wXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ltYnNCZlJlc3VsdCBhbW91bnQgb2YgcmFuZG9tIHN5bWJvbHMgYmVmb3JlIHJlc3VsdFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydFN0b3BTZXF1ZW5jZShzcGluUmVzdWx0LCBzeW1ic0JmUmVzdWx0ID0gNikge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmFsbFJlZWxzLm1hcCgocmVlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVlbC5zdGFydFN0b3BTZXF1ZW5jZShzcGluUmVzdWx0W2ldLCBzeW1ic0JmUmVzdWx0ICsgaSAqIDIpO1xyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHthcnJheXxudWxsfSB3aW5TeW1ib2xzIDJkIGFycmF5IHdpdGggd2luIHN5bWJvbHMgb3IgbnVsbCBpZiBubyB3aW4gc3ltYm9sc1xyXG4gICAgICovXHJcbiAgICB1cGRhdGVXaW5TeW1ib2xzICh3aW5TeW1ib2xzKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2luU3ltYm9scyA9IHdpblN5bWJvbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBza2lwcyBzcGlubmluZyBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgZm9yY2VkU3RvcCgpIHtcclxuICAgICAgICB0aGlzLmFsbFJlZWxzLmZvckVhY2gocmVlbCA9PiB7XHJcbiAgICAgICAgICAgIHJlZWwuZm9yY2VkU3RvcCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzaG93IHdpbi9sb3NzIGFuaW1hdGlvbiBmb3IgZWFjaCBzeW1ib2xcclxuICAgICAqL1xyXG4gICAgc2hvd1dpbkFuaW1hdGlvbigpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFdpblN5bWJvbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyUmVzdWx0UmVlbCA9IHRoaXMuY3VycmVudFdpblN5bWJvbHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clJlZWwgPSB0aGlzLmFsbFJlZWxzW2ldO1xyXG5cclxuICAgICAgICAgICAgY3VyUmVlbC5zaG93V2luU3ltYihjdXJSZXN1bHRSZWVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGRlZmF1bHQgc3ltYm9scyBwYXJhbXMgZm9yIGVhY2ggc3ltYm9sXHJcbiAgICAgKi9cclxuICAgIHBsYXlJZGxlKCkge1xyXG4gICAgICAgIHRoaXMuYWxsUmVlbHMuZm9yRWFjaChyZWVsID0+IHtcclxuICAgICAgICAgICAgcmVlbC5wbGF5SWRsZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3RleHR1cmVzfSBmcm9tIFwiLi4vaW5kZXhcIjtcclxuaW1wb3J0IHtDdXN0b21Ud2Vlbn0gZnJvbSBcIi4vY3VzdG9tVHdlZW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTeW1ib2wgZXh0ZW5kcyBQSVhJLlNwcml0ZXtcclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmVTcmMsIGNvbmZpZyl7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZXNbdGV4dHVyZVNyY10pO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gY29uZmlnLnN5bWJvbERpbWVuc2lvbnMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjb25maWcuc3ltYm9sRGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zbG90TGVuZ3RoID0gY29uZmlnLnNsb3RMZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IGNvbmZpZy5zeW1ib2xTcGVlZDtcclxuXHJcbiAgICAgICAgdGhpcy50eXBlID0gdGV4dHVyZVNyYztcclxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLnN0YXJ0U2NhbGUgPSB0aGlzLnNjYWxlLl94O1xyXG4gICAgICAgIHRoaXMuZW5kU2NhbGUgPSB0aGlzLnN0YXJ0U2NhbGUqMS4yNTtcclxuXHJcbiAgICAgICAgdGhpcy50d2VlbiA9IG5ldyBDdXN0b21Ud2Vlbih0aGlzLCBcInlcIiwgdGhpcy55LCB0aGlzLnkgKyAgdGhpcy5zbG90TGVuZ3RoLCB0aGlzLnNwZWVkKTtcclxuICAgICAgICB0aGlzLmJvdW5jZVR3ZWVuID0gbmV3IEN1c3RvbVR3ZWVuKHRoaXMsIFwieVwiLCB0aGlzLnksIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzIsIHRoaXMuc3BlZWQqMi8zKTtcclxuICAgICAgICB0aGlzLnNjYWxlVHdlZW4gPSBuZXcgQ3VzdG9tVHdlZW4odGhpcywgXCJzeW1iU2NhbGVcIiwgdGhpcy5zdGFydFNjYWxlLCAgdGhpcy5lbmRTY2FsZSwgdGhpcy5zcGVlZCozKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGRlZmF1bHQgc3ltYm9scyBwYXJhbXMgYmVmb3JlIG5leHQgc3BpbiBhbmQgbWFrZXMgdXAvZG93biBib3VuY2UgdXNpbmcgdHdlZW5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHByb21pc2VcclxuICAgICAqL1xyXG4gICAgc3RhcnRTcGluICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlJZGxlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCozLzQsICgpID0+IHt9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5ib3VuY2VUd2Vlbi5wbGF5KHRoaXMueSwgdGhpcy55ICsgdGhpcy5oZWlnaHQvMix0aGlzLnNwZWVkKjIvMywgcmVzb2x2ZSkpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBldmVubHkgY2hhbmdlIHBvc2l0aW9uIGJ5IG9uZSBzbG90IHVzaW5nIHR3ZWVuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBwcm9taXNlXHJcbiAgICAgKi9cclxuICAgIG1vdmVPbmVTbG90ICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuLnBsYXkodGhpcy55LCB0aGlzLnkgKyB0aGlzLnNsb3RMZW5ndGgsIHRoaXMuc3BlZWQsIHJlc29sdmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWFrZXMgZG93bi91cCBib3VuY2UgdXNpbmcgdHdlZW5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHByb21pc2VcclxuICAgICAqL1xyXG4gICAgZW5kU3BpbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvdW5jZVR3ZWVuLnBsYXkodGhpcy55LCB0aGlzLnkgKyB0aGlzLmhlaWdodC8yLHRoaXMuc3BlZWQqMi8zLCAoKSA9PiB7fSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3VuY2VUd2Vlbi5wbGF5KHRoaXMueSwgdGhpcy55IC0gdGhpcy5oZWlnaHQvMix0aGlzLnNwZWVkKjIvMywgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IHN5bWJvbCBuZXcgdGV4dHVyZSBhbmQgdHlwZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IHRleHR1cmUgaW5kZXggb2YgbmV3IHN5bWJvbFxyXG4gICAgICovXHJcbiAgICBzZXROZXdTeW1ib2woaW5kZXgpe1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3Bvc3NpYmxlU3ltU3JjW2luZGV4XV07XHJcbiAgICAgICAgdGhpcy50eXBlID0gcG9zc2libGVTeW1TcmNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IG51bWJlciBvZiBzeW1ib2wncyBzY2FsZSBwcm9wZXJ0eVxyXG4gICAgICovXHJcbiAgICBnZXQgc3ltYlNjYWxlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5feDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgc2V0IHN5bWJvbCdzIHNjYWxlIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIHNldCBzeW1iU2NhbGUgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5zZXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYW5pbWF0aW9uIGZvciB3aW4gc3ltYm9sc1xyXG4gICAgICovXHJcbiAgICBwbGF5V2luQW5pbWF0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlVXAoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZXZlbmx5IHNjYWxlcyBzeW1ib2wgdXAgdXNpbmcgdHdlZW5cclxuICAgICAqL1xyXG4gICAgc2NhbGVVcCAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZVR3ZWVuLnBsYXkodGhpcy5zdGFydFNjYWxlLCB0aGlzLmVuZFNjYWxlLCB0aGlzLnNwZWVkKjMsIHRoaXMuc2NhbGVEb3duLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZXZlbmx5IHNjYWxlcyBzeW1ib2wgZG93biB1c2luZyB0d2VlblxyXG4gICAgICovXHJcbiAgICBzY2FsZURvd24gKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGVUd2Vlbi5wbGF5KHRoaXMuZW5kU2NhbGUsIHRoaXMuc3RhcnRTY2FsZSwgdGhpcy5zcGVlZCozLCAoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKm1ha2VzIHN5bWJvbHMgc2VtaSB0cmFuc3BhcmVudFxyXG4gICAgICovXHJcbiAgICBwbGF5TG9zc0FuaW1hdGlvbigpIHtcclxuICAgICAgICB0aGlzLmFscGhhID0gMC41O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyBkZWZhdWx0IHN5bWJvbHMgcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIHBsYXlJZGxlICgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlLnNldCh0aGlzLnN0YXJ0U2NhbGUpO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi9VSS9idXR0b25cIjtcclxuaW1wb3J0IHt0ZXh0dXJlc30gZnJvbSBcIi4vaW5kZXhcIjtcclxuaW1wb3J0IHtvYnNlcnZhYmxlTWl4aW59IGZyb20gXCIuL21haW4vb2JzZXJ2YWJsZU1peGluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3IgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lcntcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGxlZnRTcmMsIHJpZ2h0U3JjLCBwb3NzaWJsZVZhbHVlcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgICAgICB0aGlzLm1pbnVzQnV0dG9uID0gbmV3IEJ1dHRvbigwLCAwLCBsZWZ0U3JjLCB0aGlzLm1pbnVzT25lLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucGx1c0J1dHRvbiA9IG5ldyBCdXR0b24oMjAwLCAwLCByaWdodFNyYywgdGhpcy5wbHVzT25lLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3NpYmxlVmFsdWVzID0gcG9zc2libGVWYWx1ZXM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSAxO1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gdGhpcy5hZGROdW1iZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pbnVzQnV0dG9uLCB0aGlzLnBsdXNCdXR0b24sIHRoaXMubnVtYmVyKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWludXNPbmUoKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMucG9zc2libGVWYWx1ZXNbIC0tdGhpcy5jdXJyZW50VmFsdWUgXV07XHJcbiAgICAgICAgdGhpcy5idXR0b25EaXNhYmxlQ2hlY2soKTtcclxuICAgICAgICB0aGlzLmZpcmVFdmVudChcImJldENoYW5nZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGx1c09uZSAoKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMucG9zc2libGVWYWx1ZXNbICsrdGhpcy5jdXJyZW50VmFsdWUgXV07XHJcbiAgICAgICAgdGhpcy5idXR0b25EaXNhYmxlQ2hlY2soKTtcclxuICAgICAgICB0aGlzLmZpcmVFdmVudChcImJldENoYW5nZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNhYmxlL2VuYWJsZSBidXR0b25zIGRlcGVuZCBvbiBjdXJyZW50VmFsdWVcclxuICAgICAqL1xyXG4gICAgYnV0dG9uRGlzYWJsZUNoZWNrKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZhbHVlID49IHRoaXMucG9zc2libGVWYWx1ZXMubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGx1c0J1dHRvbi5kaXNhYmxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbHVzQnV0dG9uLmVuYWJsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZhbHVlIDwgMSl7XHJcbiAgICAgICAgICAgIHRoaXMubWludXNCdXR0b24uZGlzYWJsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWludXNCdXR0b24uZW5hYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlcyBzZWxlY3RvciBudW1iZXIgc3ByaXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UElYSS5TcHJpdGV9IHRleHR1cmUgb2Ygc2VsZWN0b3IgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIGFkZE51bWJlciAoKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmVzW3RoaXMucG9zc2libGVWYWx1ZXNbdGhpcy5jdXJyZW50VmFsdWVdXSk7XHJcbiAgICAgICAgbnVtYmVyLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICBudW1iZXIud2lkdGggPSAxMjU7XHJcbiAgICAgICAgbnVtYmVyLmhlaWdodCA9IDEyNTtcclxuICAgICAgICBudW1iZXIucG9zaXRpb24uc2V0KDEwMCwgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBudW1iZXJcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRpc2FibGUgYnV0dG9uc1xyXG4gICAgICovXHJcbiAgICBkaXNhYmxlQnV0dG9ucygpIHtcclxuICAgICAgICB0aGlzLnBsdXNCdXR0b24uZGlzYWJsZSgpO1xyXG4gICAgICAgIHRoaXMubWludXNCdXR0b24uZGlzYWJsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIGN1cnJlbnQgYmV0IHNpemVcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IHRoaXMuY3VycmVudFZhbHVlIGlzIHBvc2l0aW9uIGluIGFycmF5IGFuZCAwIGVxdWFscyAxIGJldCBzaXplXHJcbiAgICAgKi9cclxuICAgIGdldEN1ckJldFNpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFZhbHVlICsgMTtcclxuICAgIH1cclxufSIsImltcG9ydCB7UmVlbHN9IGZyb20gXCIuL3JlZWxzL3JlZWxzXCI7XHJcbmltcG9ydCB7QmV0TGluZXN9IGZyb20gXCIuL2JldExpbmVzL2JldExpbmVzXCI7XHJcbmltcG9ydCB7U2VydmVyTWFuYWdlcn0gZnJvbSBcIi4vbWFpbi9zZXJ2ZXJNYW5hZ2VyXCI7XHJcbmltcG9ydCB7V2luU3ltYm9sc30gZnJvbSBcIi4vbWFpbi93aW5TeW1ib2xzXCI7XHJcbmltcG9ydCB7U2VsZWN0b3J9IGZyb20gXCIuL3NlbGVjdG9yXCI7XHJcbmltcG9ydCB7V2luU2NyZWVufSBmcm9tIFwiLi93aW5TY3JlZW4vd2luU2NyZWVuXCI7XHJcbmltcG9ydCB7Z2FtZUNvbmZpZ30gZnJvbSBcIi4vbWFpbi9nYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi9VSS9idXR0b25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTbG90IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuYmV0TGluZXMgPSBuZXcgQmV0TGluZXMoKTtcclxuICAgICAgICB0aGlzLnJlZWxzID0gbmV3IFJlZWxzKCk7XHJcbiAgICAgICAgdGhpcy5zcGluQnV0dG9uID0gbmV3IEJ1dHRvbig0MDAsIDQ1MCwgc3BpbkJ1dHRvblNyYywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVFdmVudChcIm9uU3BpbkJ1dHRvblByZXNzZWRcIilcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLndpblNjcmVlbiA9IG5ldyBXaW5TY3JlZW4oMCxnYW1lQ29uZmlnLmdhbWVTaXplLmhlaWdodCwgMzAwLCAxMDAsIDB4Njk2OTY5KTtcclxuICAgICAgICB0aGlzLmJldFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKDU1MCwgNDUwLCBsZWZ0U2VsZWN0b3IsIHJpZ2h0U2VsZWN0b3IsIG51bWJlcnMpO1xyXG4gICAgICAgIHRoaXMud2luU3ltYm9scyA9IG5ldyBXaW5TeW1ib2xzKCk7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJNYW5hZ2VyID0gbmV3IFNlcnZlck1hbmFnZXIoKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi4vbWFpbi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuaW1wb3J0IHtTdGF0ZU1hY2hpbmV9IGZyb20gXCIuL3N0YXRlTWFjaGluZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcblxyXG4gICAgICAgIHRoaXMubmFtZSA9IFwic3RhdGVOYW1lXCI7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRyYW5zaXRpb25zID0ge307XHJcbiAgICAgICAgdGhpcy5zdGF0ZU1hc2hpbmUgPSBTdGF0ZU1hY2hpbmUuaW5zdGFuY2U7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0ZUNoYW5nZWRUbzoke3RoaXMubmFtZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goZXZlbnROYW1lKSB7XHJcbiAgICAgICAgLy9vbmx5IGFjdGl2ZSBzdGF0ZSBzaG91bGQgcmVhY3Qgb24gZXZlbnRcclxuICAgICAgICBpZiAoIXRoaXMuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IG5leHQgPSB0aGlzLnRyYW5zaXRpb25zW2V2ZW50TmFtZV07XHJcbiAgICAgICAgdGhpcy5zdGF0ZU1hc2hpbmUuY2hhbmdlU3RhdGVUbyhuZXh0KTtcclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtEZWZhdWx0U3RhdGV9IGZyb20gXCIuL2RlZmF1bHRTdGF0ZVwiO1xyXG5pbXBvcnQge3Nsb3R9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIElkbGUgZXh0ZW5kcyBEZWZhdWx0U3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYnkoe29uU3BpbkJ1dHRvblByZXNzZWQ6IHRoaXMub25TcGluQnV0dG9uUHJlc3NlZH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU3BpbkJ1dHRvblByZXNzZWQoKXtcclxuICAgICAgICB0aGlzLmZpbmlzaChcIm9uU3BpbkJ1dHRvblByZXNzZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgc3VwZXIuc3RhcnQoKTtcclxuICAgICAgICBzbG90LnJlZWxzLnBsYXlJZGxlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtEZWZhdWx0U3RhdGV9IGZyb20gXCIuL2RlZmF1bHRTdGF0ZVwiO1xyXG5pbXBvcnQge2xvYWRlcn0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZCBleHRlbmRzIERlZmF1bHRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJMb2FkXCI7XHJcbiAgICAgICAgdGhpcy5ieSh7b25Mb2FkaW5nQ29tcGxldGUgOiB0aGlzLm9uTG9hZGluZ0NvbXBsZXRlfSk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZGluZ0NvbXBsZXRlKCl7XHJcbiAgICAgICAgdGhpcy5maW5pc2goXCJvbkxvYWRpbmdDb21wbGV0ZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIGxvYWRlci5zdGFydExvYWRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goZXZlbnROYW1lKSB7XHJcbiAgICAgICAgbG9hZGVyLmxvYWRpbmdTY3JlZW4uaGlkZSgpO1xyXG4gICAgICAgIHN1cGVyLmZpbmlzaChldmVudE5hbWUpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtEZWZhdWx0U3RhdGV9IGZyb20gXCIuL2RlZmF1bHRTdGF0ZVwiO1xyXG5pbXBvcnQge3Nsb3R9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwaW4gZXh0ZW5kcyBEZWZhdWx0U3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYnkoe1xyXG4gICAgICAgICAgICBcIm5vdGlmeTpzZXJ2ZXJNYW5hZ2VyLm5ld1Jlc3BvbnNlXCI6IHRoaXMudXBkYXRlQmV0UmVzdWx0LFxyXG4gICAgICAgICAgICBvblNwaW5CdXR0b25QcmVzc2VkOiB0aGlzLmZvcmNlZFN0b3BcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwbGF5V2luKCl7XHJcbiAgICAgICAgdGhpcy5maW5pc2goXCJwbGF5V2luXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlJZGxlKCl7XHJcbiAgICAgICAgdGhpcy5maW5pc2goXCJwbGF5SWRsZVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICBzdXBlci5zdGFydCgpO1xyXG4gICAgICAgIHNsb3QuYmV0U2VsZWN0b3IuZGlzYWJsZUJ1dHRvbnMoKTtcclxuICAgICAgICBjb25zdCBiZXRTaXplID0gc2xvdC5iZXRTZWxlY3Rvci5nZXRDdXJCZXRTaXplKCk7XHJcbiAgICAgICAgc2xvdC5zZXJ2ZXJNYW5hZ2VyLnN0YXJ0KGJldFNpemUpO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgIHNsb3QucmVlbHMuc3RhcnRSZWVsc1NwaW4oKSxcclxuICAgICAgICAgICAgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB0aGlzLnNlcnZlclJlc3BvbnNlUmVzb2x2ZSA9IHJlc29sdmUpXHJcbiAgICAgICAgXSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gc2xvdC5yZWVscy5zdGFydFN0b3BTZXF1ZW5jZSh0aGlzLmN1cnJlbnRTcGluUmVzdWx0KSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5pc1dpbiA/IHRoaXMucGxheVdpbigpIDogdGhpcy5wbGF5SWRsZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBmaW5pc2goZXZlbnROYW1lKSB7XHJcbiAgICAgICAgc2xvdC5zcGluQnV0dG9uLmVuYWJsZSgpO1xyXG4gICAgICAgIHNsb3QuYmV0U2VsZWN0b3IuYnV0dG9uRGlzYWJsZUNoZWNrKCk7XHJcbiAgICAgICAgc3VwZXIuZmluaXNoKGV2ZW50TmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9yY2VkU3RvcCgpIHtcclxuICAgICAgICBpZih0aGlzLmFjdGl2ZSl7XHJcbiAgICAgICAgICAgIHNsb3QucmVlbHMuZm9yY2VkU3RvcCgpO1xyXG4gICAgICAgICAgICBzbG90LnNwaW5CdXR0b24uZGlzYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByZXNwb25zZS53aW5BbW91bnQgYW1vdW50IG9mIHdpbiBwb2ludFxyXG4gICAgICogQHBhcmFtIHthcnJheX0gcmVzcG9uc2Uud2luTGluZXMgYXJyYXkgd2l0aCB3aW4gYmV0IGxpbmVzXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZXNwb25zZS53aW5TeW1ib2xzIGFycmF5IHdpdGggd2luIHN5bWJvbHNcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlc3BvbnNlLnNwaW5SZXN1bHQgMmQgYXJyYXkgd2l0aCBzcGluIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICB1cGRhdGVCZXRSZXN1bHQocmVzcG9uc2UpIHtcclxuICAgICAgICBpZighdGhpcy5hY3RpdmUpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzbG90LndpblNjcmVlbi51cGRhdGVDdXJyZW50V2luKHJlc3BvbnNlLndpbkFtb3VudCk7XHJcbiAgICAgICAgc2xvdC5iZXRMaW5lcy51cGRhdGVXaW5MaW5lcyhyZXNwb25zZS53aW5MaW5lcyk7XHJcblxyXG4gICAgICAgIHRoaXMud2luU3ltYm9scyA9IHNsb3Qud2luU3ltYm9scy5jcmVhdGVTeW1ib2xzQ29uZmlnKHJlc3BvbnNlLndpblN5bWJvbHMpO1xyXG4gICAgICAgIHNsb3QucmVlbHMudXBkYXRlV2luU3ltYm9scyh0aGlzLndpblN5bWJvbHMpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRTcGluUmVzdWx0ID0gcmVzcG9uc2Uuc3BpblJlc3VsdDtcclxuICAgICAgICB0aGlzLmlzV2luID0gcmVzcG9uc2Uud2luQW1vdW50ID4gMDtcclxuICAgICAgICB0aGlzLnNlcnZlclJlc3BvbnNlUmVzb2x2ZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImxldCBpbnN0YW5jZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZU1hY2hpbmUge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdGVzQ29uZmlnKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtdGhpc1xyXG4gICAgICAgIGluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluaXQoc3RhdGVzQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHN0YXRlc0NvbmZpZykge1xyXG4gICAgICAgIHN0YXRlc0NvbmZpZy5mb3JFYWNoKChjb25maWcpID0+IHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IGNvbmZpZy5jbGFzcygpO1xyXG5cclxuICAgICAgICAgICAgaW5zdGFuY2UubmFtZSA9IGNvbmZpZy5jbGFzcy5uYW1lO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS50cmFuc2l0aW9ucyA9IGNvbmZpZy50cmFuc2l0aW9ucztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVzW2luc3RhbmNlLm5hbWVdID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGVUbyhuZXh0U3RhdGVOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlc1tuZXh0U3RhdGVOYW1lXTtcclxuXHJcbiAgICAgICAgLyp3aGVuIHRoZSBuZXh0IHN0YXRlIHN0YXJ0cyBpdCBiZWNvbWVzIGFjdGl2ZSBhbmQgaW4gY2FzZSBpZiBpdCBsaXN0ZW5zIHRoZSBzYW1lIGV2ZW50XHJcbiAgICAgICAgdGhhdCBmaW5pc2hlZCBwcmV2aW91cyBzdGF0ZSBhbmQgaXMgcHJvY2Vzc2VkIGxhdGVyIGluIG9ic2VydmFibGUgbG9vcCBpdCB3aWxsIGJlIGZpbmlzaGVkXHJcbiAgICAgICAgc3RyYWlnaHQgYXdheS4gc2V0VGltZW91dCBpcyBhZGRlZCB0byBwcmV2ZW50IGl0LiovXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmN1cnJlbnRTdGF0ZS5zdGFydCgpLCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0IGluc3RhbmNlKCkge1xyXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7TG9hZH0gZnJvbSBcIi4vbG9hZFwiO1xyXG5pbXBvcnQge0lkbGV9IGZyb20gXCIuL2lkbGVcIjtcclxuaW1wb3J0IHtTcGlufSBmcm9tIFwiLi9zcGluXCI7XHJcbmltcG9ydCB7V2lufSBmcm9tIFwiLi93aW5cIjtcclxuXHJcbi8qKlxyXG4gKiBBcnJheSBvZiBPYmplY3RzLiBFYWNoIG9mIHRoZW0gY29udGFpbnMgY29uZmlnIGZvciBkaWZmZXJlbnQgc3RhdGVcclxuICogT2JqZWN0LmNsYXNzIGNsYXNzIG9mIHN0YXRlXHJcbiAqIE9iamVjdC50cmFuc2l0aW9ucyBhdmFpbGFibGUgdHJhbnNpdGlvbnMgZnJvbSBjdXJyZW50IHN0YXRlIHRvIG5leHRTdGF0ZVxyXG4gKiBPYmplY3QudHJhbnNpdGlvbnNbZXZlbnROYW1lXSBuZXh0U3RhdGUgdGhhdCBiZWNvbWVzIGFjdGl2ZSBieSBldmVudCB3aXRoIGV2ZW50TmFtZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IFN0YXRlc0NvbmZpZyA9IFtcclxuICAgIHtjbGFzczogTG9hZCwgdHJhbnNpdGlvbnM6IHtvbkxvYWRpbmdDb21wbGV0ZTogXCJJZGxlXCJ9fSxcclxuICAgIHtjbGFzczogSWRsZSwgdHJhbnNpdGlvbnM6IHtvblNwaW5CdXR0b25QcmVzc2VkOiBcIlNwaW5cIn19LFxyXG4gICAge2NsYXNzOiBTcGluLCB0cmFuc2l0aW9uczoge3BsYXlXaW46IFwiV2luXCIsIHBsYXlJZGxlOiBcIklkbGVcIn19LFxyXG4gICAge2NsYXNzOiBXaW4sIHRyYW5zaXRpb25zOiB7YmV0Q2hhbmdlZDogXCJJZGxlXCIsIG9uU3BpbkJ1dHRvblByZXNzZWQ6IFwiU3BpblwifX1cclxuXTsiLCJpbXBvcnQge0RlZmF1bHRTdGF0ZX0gZnJvbSBcIi4vZGVmYXVsdFN0YXRlXCI7XHJcbmltcG9ydCB7c2xvdH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luIGV4dGVuZHMgRGVmYXVsdFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJ5KHtcclxuICAgICAgICAgICAgYmV0Q2hhbmdlZCA6IHRoaXMuYmV0Q2hhbmdlZCxcclxuICAgICAgICAgICAgb25TcGluQnV0dG9uUHJlc3NlZCA6IHRoaXMub25TcGluQnV0dG9uUHJlc3NlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJldENoYW5nZWQoKXtcclxuICAgICAgICB0aGlzLmZpbmlzaChcImJldENoYW5nZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25TcGluQnV0dG9uUHJlc3NlZCgpe1xyXG4gICAgICAgIHRoaXMuZmluaXNoKFwib25TcGluQnV0dG9uUHJlc3NlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCgpe1xyXG4gICAgICAgIHN1cGVyLnN0YXJ0KCk7XHJcbiAgICAgICAgc2xvdC5iZXRMaW5lcy5zaG93V2luTGluZXMoKTtcclxuICAgICAgICBzbG90LndpblNjcmVlbi5zaG93U2NyZWVuKCk7XHJcbiAgICAgICAgc2xvdC5yZWVscy5zaG93V2luQW5pbWF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZmluaXNoKGV2ZW50TmFtZSkge1xyXG4gICAgICAgIHNsb3QuYmV0TGluZXMuaGlkZVdpbkxpbmVzKCk7XHJcbiAgICAgICAgc2xvdC53aW5TY3JlZW4uaGlkZVNjcmVlbigpO1xyXG4gICAgICAgIHN1cGVyLmZpbmlzaChldmVudE5hbWUpO1xyXG4gICAgfVxyXG59IiwiLyoqXHJcbiAqIGNyZWF0ZXMgcmFuZG9tIGludGVnZXIgdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIG1pbiBwb3NzaWJsZSB2YWx1ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IG1heCBwb3NzaWJsZSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgcmFuZCA9IE1hdGguZmxvb3IocmFuZCk7XHJcbiAgICByZXR1cm4gcmFuZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRpbWVCZXR3ZWVuRnJhbWVzID0gMTYuNjc7IiwiZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFBJWEkuR3JhcGhpY3Mge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmVTdHlsZSgxLCAweDAwMDAwMCwgMSk7XHJcbiAgICAgICAgdGhpcy5iZWdpbkZpbGwoY29sb3IpO1xyXG4gICAgICAgIHRoaXMuZHJhd1JlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5lbmRGaWxsKCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luU2NyZWVuIGV4dGVuZHMgUElYSS5Db250YWluZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4uYWxwaGEgPSAwLjM7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5jcmVhdGVNZXNzYWdlKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2NyZWVuLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuaGlkZVNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2luID0gbnVsbDtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1lc3NhZ2UgKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBjb25zdCBtZXNzYWdlID0gbmV3IFBJWEkuVGV4dChcIllvdSB3b25cIik7XHJcbiAgICAgICAgbWVzc2FnZS5zdHlsZSA9IHtcclxuICAgICAgICAgICAgZm9udEZhbWlseTogXCJBcmlhbFwiLFxyXG4gICAgICAgICAgICBmb250U2l6ZTogMzYsXHJcbiAgICAgICAgICAgIGZpbGw6IFwid2hpdGVcIlxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbWVzc2FnZS5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgbWVzc2FnZS5wb3NpdGlvbi5zZXQoeCArIHdpZHRoLzIsIHkgKyBoZWlnaHQvMik7XHJcblxyXG4gICAgICAgIHJldHVybiBtZXNzYWdlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpbkFtb3VudCBhbW91bnQgb2Ygd2luIHBvaW50c1xyXG4gICAgICovXHJcbiAgICB1cGRhdGVDdXJyZW50V2luKHdpbkFtb3VudCl7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2luID0gd2luQW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWFrZXMgd2luU2NyZWVuIHZpc2libGVcclxuICAgICAqL1xyXG4gICAgc2hvd1NjcmVlbiAoKXtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS50ZXh0ID0gYFlvdSB3b24gJHt0aGlzLmN1cnJlbnRXaW59ICEhIWA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoaWRlcyB3aW5TY3JlZW5cclxuICAgICAqL1xyXG4gICAgaGlkZVNjcmVlbiAoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9