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

var _observableMixin = __webpack_require__(/*! ../main/observableMixin */ "./javascript/main/observableMixin.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BetLines = exports.BetLines = function (_PIXI$Container) {
    _inherits(BetLines, _PIXI$Container);

    function BetLines() {
        _classCallCheck(this, BetLines);

        var _this = _possibleConstructorReturn(this, (BetLines.__proto__ || Object.getPrototypeOf(BetLines)).call(this));

        Object.assign(_this, _observableMixin.observableMixin);

        _this.linePoints = _this.addLinePoints();
        _this.allLines = _this.addLines(_this.linePoints);

        _this.currentWinLines = [];

        _this.by({
            "notify:serverManager.newResponse": _this.updateWinLines,
            "stateChangedTo:Win": _this.showWinLines,
            "stateCompleted:Win": _this.hideWinLines
        });

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
         * @param {object} config server's result config
         * @param {array} config.winLines array with win lines
         */

    }, {
        key: "updateWinLines",
        value: function updateWinLines(config) {
            this.currentWinLines = config.winLines;
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
exports.renderLoop = exports.slot = exports.background = exports.textures = exports.stateHandler = undefined;

var _slot = __webpack_require__(/*! ./slot */ "./javascript/slot.js");

var _stateMachine = __webpack_require__(/*! ./states/stateMachine */ "./javascript/states/stateMachine.js");

var _statesConfig = __webpack_require__(/*! ./states/statesConfig */ "./javascript/states/statesConfig.js");

var _loadingScreen = __webpack_require__(/*! ./loadingScreen */ "./javascript/loadingScreen.js");

document.body.appendChild(app.view);

var stateHandler = exports.stateHandler = new _stateMachine.StateMachine(_statesConfig.StatesConfig);

PIXI.Loader.shared.add("./images/sheet.json").add("./images/1.jpg").add("./images/2.jpg").add("./images/3.jpg").add("./images/4.jpg").add("./images/5.jpg").on("progress", loadProgressHandler).load(setup);

var loadingScreen = new _loadingScreen.LoadingScreen(0, 0, 800, 500, 0x696969);

function loadProgressHandler(loader) {
    loadingScreen.update(loader.progress);
}

var textures = exports.textures = void 0,
    background = exports.background = void 0,
    slot = exports.slot = void 0;

var renderLoop = exports.renderLoop = [];

function setup() {
    //releasing loading state
    events.fireEvent("onLoadingComplete");

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

/***/ "./javascript/loadingScreen.js":
/*!*************************************!*\
  !*** ./javascript/loadingScreen.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LoadingScreen = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _observableMixin = __webpack_require__(/*! ./main/observableMixin */ "./javascript/main/observableMixin.js");

var _rectangle = __webpack_require__(/*! ./winScreen/rectangle */ "./javascript/winScreen/rectangle.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoadingScreen = exports.LoadingScreen = function (_PIXI$Graphics) {
    _inherits(LoadingScreen, _PIXI$Graphics);

    function LoadingScreen(x, y, width, height, color) {
        _classCallCheck(this, LoadingScreen);

        var _this = _possibleConstructorReturn(this, (LoadingScreen.__proto__ || Object.getPrototypeOf(LoadingScreen)).call(this));

        Object.assign(_this, _observableMixin.observableMixin);
        _this.screen = new _rectangle.Rectangle(x, y, width, height, color);
        _this.screen.alpha = 0.5;
        _this.message = _this.createMessage(x, y, width, 400);
        _this.blackLine = new _rectangle.Rectangle(150, 250, 500, 30, 0x000000);
        _this.greenLine = new _rectangle.Rectangle(150, 250, 500, 30, 0x229954);
        _this.addChild(_this.screen, _this.message, _this.blackLine, _this.greenLine);

        _this.update(0);
        _this.by({ "stateCompleted:Load": _this.hideAll });
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
        key: "hideAll",
        value: function hideAll() {
            this.visible = false;
        }
    }]);

    return LoadingScreen;
}(PIXI.Graphics);

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
    function ServerManager(slot) {
        _classCallCheck(this, ServerManager);

        this.reelsetsList = _gameConfig.gameConfig.reelsets;
        this.betLines = _gameConfig.gameConfig.betLines;
        this.reelsLength = _gameConfig.gameConfig.gameSize.rows;

        Object.assign(this, _observableMixin.observableMixin);
        this.by({ "stateChangedTo:Spin": this.start });

        this.slot = slot;
    }

    /**
     * upon request from client creates spin/bet result and inform the client
     */


    _createClass(ServerManager, [{
        key: "start",
        value: function start() {
            var _this = this;

            var betSize = this.slot.betSelector.getCurBetSize();
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

var _observableMixin = __webpack_require__(/*! ./observableMixin */ "./javascript/main/observableMixin.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WinSymbols = exports.WinSymbols = function () {
    function WinSymbols() {
        _classCallCheck(this, WinSymbols);

        Object.assign(this, _observableMixin.observableMixin);
        this.by({ "notify:serverManager.newResponse": this.createSymbolsConfig });
    }

    /**
     * generate win config depends on server response
     * @param {object} serverResult
     * @param {number} serverResult.winAmount amount of win point
     * @param {array} serverResult.winLines array with win bet lines
     * @param {array} serverResult.winSymbols array with win symbols
     */


    _createClass(WinSymbols, [{
        key: "createSymbolsConfig",
        value: function createSymbolsConfig(serverResult) {
            if (serverResult.winAmount === 0) {
                return;
            }

            var matrix = this.createTemplateMatrix();

            for (var i = 0; i < serverResult.winSymbols.length; i++) {
                var curLine = serverResult.winSymbols[i];

                for (var j = 0; j < curLine.length; j++) {
                    var curReel = matrix[j];
                    var symbIndex = curLine[j];

                    curReel[symbIndex] = true;
                }
            }
            this.fireEvent("notify:winSymbolsProcessed", matrix);
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

var _observableMixin = __webpack_require__(/*! ../main/observableMixin */ "./javascript/main/observableMixin.js");

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
        _this.winAnimRequired = false;
        _this.resultConfig = null;

        app.stage.addChild(_this);

        Object.assign(_this, _observableMixin.observableMixin);

        _this.by({
            "stateChangedTo:Spin": _this.start,
            "notify:serverManager.newResponse": _this.serverResponseReceived,
            "notify:winSymbolsProcessed": _this.addWinHandlerValues,
            "stateChangedTo:Idle": _this.playIdle,
            "spin:forcedStop": _this.forcedStop
        });
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
         * processing the spin
         */

    }, {
        key: "start",
        value: function start() {
            var _this2 = this;

            Promise.all([this.startReelsSpin(), new Promise(function (resolve) {
                return _this2.serverResponseResolve = resolve;
            })]).then(function () {
                return _this2.startStopSequence();
            }).then(function () {
                return _this2.onSpinComplete();
            });
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
         *
         * @param {object} resultConfig resultConfig from server
         * @param {array} resultConfig.spinResult array with bet result for each reel
         * @param {number} resultConfig.winAmount win points on current bet
         */

    }, {
        key: "serverResponseReceived",
        value: function serverResponseReceived(resultConfig) {
            this.resultConfig = resultConfig;
            this.serverResponseResolve();
        }

        /**
         * @param {number} symbsBfResult amount of random symbols before result
         * @returns {Promise<any>} promise
         */

    }, {
        key: "startStopSequence",
        value: function startStopSequence() {
            var _this3 = this;

            var symbsBfResult = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

            return Promise.all(this.allReels.map(function (reel, i) {
                return reel.startStopSequence(_this3.resultConfig.spinResult[i], symbsBfResult + i * 2);
            }));
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
         * sets result config
         * @param {object} resultConfig from winHandler
         */

    }, {
        key: "addWinHandlerValues",
        value: function addWinHandlerValues(resultConfig) {
            if (resultConfig) {
                this.winAnimRequired = true;
            }
            this.symbolsResultConfig = resultConfig;
        }

        /**
         * depending on winAnimRequired fire event and show win/loss animation for each symbol
         */

    }, {
        key: "onSpinComplete",
        value: function onSpinComplete() {
            if (!this.winAnimRequired) {
                this.fireEvent("playIdle");
                return;
            }

            this.fireEvent("playWin");
            var matrix = this.symbolsResultConfig;
            for (var i = 0; i < matrix.length; i++) {
                var curResultReel = matrix[i];
                var curReel = this.allReels[i];

                curReel.showWinSymb(curResultReel);
            }

            this.winAnimRequired = false;
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

        _this.by({
            "stateChangedTo:Spin": _this.disableButtons,
            "stateCompleted:Spin": _this.buttonDisableCheck
        });
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

var _spinButton = __webpack_require__(/*! ./spinButton/spinButton */ "./javascript/spinButton/spinButton.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Slot = exports.Slot = function Slot() {
    _classCallCheck(this, Slot);

    this.betLines = new _betLines.BetLines();
    this.reels = new _reels.Reels();
    this.spinButton = new _spinButton.SpinButton(400, 450, spinButtonSrc);
    this.winScreen = new _winScreen.WinScreen(0, _gameConfig.gameConfig.gameSize.height, 300, 100, 0x696969);
    this.betSelector = new _selector.Selector(550, 450, leftSelector, rightSelector, numbers);
    this.winSymbols = new _winSymbols.WinSymbols();
    this.serverManager = new _serverManager.ServerManager(this);
};

/***/ }),

/***/ "./javascript/spinButton/spinButton.js":
/*!*********************************************!*\
  !*** ./javascript/spinButton/spinButton.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SpinButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _button = __webpack_require__(/*! ../UI/button */ "./javascript/UI/button.js");

var _index = __webpack_require__(/*! ../index */ "./javascript/index.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SpinButton = exports.SpinButton = function (_Button) {
    _inherits(SpinButton, _Button);

    function SpinButton(x, y, buttonTextures) {
        _classCallCheck(this, SpinButton);

        var _this = _possibleConstructorReturn(this, (SpinButton.__proto__ || Object.getPrototypeOf(SpinButton)).call(this, x, y, buttonTextures));

        _this.by({
            "stateCompleted:Spin": _this.enable
        });

        //setting spin button click callback
        _this.callback = _this.makeSpin;
        return _this;
    }

    /**
     * fires different events depending on current state and disable button if needed
     */


    _createClass(SpinButton, [{
        key: "makeSpin",
        value: function makeSpin() {
            if (_index.stateHandler.currentState.name === "Spin") {
                this.fireEvent("spin:forcedStop");
                this.disable();
            } else {
                this.fireEvent("onSpinButtonPressed");
            }
        }
    }]);

    return SpinButton;
}(_button.Button);

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
            this.fireEvent("stateChangedTo:" + this.name);
            console.log("stateChangedTo:" + this.name);
        }
    }, {
        key: "finish",
        value: function finish(eventName) {
            //only active state should react on event
            if (!this.active) {
                return;
            }

            this.fireEvent("stateCompleted:" + this.name);
            console.log("stateCompleted:" + this.name);

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

var _defaultState = __webpack_require__(/*! ./defaultState */ "./javascript/states/defaultState.js");

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

var _defaultState = __webpack_require__(/*! ./defaultState */ "./javascript/states/defaultState.js");

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

var _defaultState = __webpack_require__(/*! ./defaultState */ "./javascript/states/defaultState.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Spin = exports.Spin = function (_DefaultState) {
    _inherits(Spin, _DefaultState);

    function Spin() {
        _classCallCheck(this, Spin);

        var _this = _possibleConstructorReturn(this, (Spin.__proto__ || Object.getPrototypeOf(Spin)).call(this));

        _this.by({
            playWin: _this.playWin,
            playIdle: _this.playIdle
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
                return _this2.states[nextStateName].start();
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

var _defaultState = __webpack_require__(/*! ./defaultState */ "./javascript/states/defaultState.js");

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

var _observableMixin = __webpack_require__(/*! ../main/observableMixin */ "./javascript/main/observableMixin.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WinScreen = exports.WinScreen = function (_PIXI$Graphics) {
    _inherits(WinScreen, _PIXI$Graphics);

    function WinScreen(x, y, width, height, color) {
        _classCallCheck(this, WinScreen);

        var _this = _possibleConstructorReturn(this, (WinScreen.__proto__ || Object.getPrototypeOf(WinScreen)).call(this));

        Object.assign(_this, _observableMixin.observableMixin);
        _this.screen = new _rectangle.Rectangle(x, y, width, height, color);
        _this.screen.alpha = 0.3;
        _this.message = _this.createMessage(x, y, width, height);

        _this.addChild(_this.screen, _this.message);
        _this.hideScreen();
        _this.alpha = 0.5;
        _this.currentWin = null;

        _this.by({
            "notify:serverManager.newResponse": _this.updateCurrentWin,
            "stateChangedTo:Win": _this.showScreen,
            "stateCompleted:Win": _this.hideScreen
        });

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
         * @param {object} config server's result config
         * @param {number} config.winAmount amount of win points
         */

    }, {
        key: "updateCurrentWin",
        value: function updateCurrentWin(config) {
            this.currentWin = config.winAmount;
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
}(PIXI.Graphics);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9VSS9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9iZXRMaW5lcy9iZXRMaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2JldExpbmVzL2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2xvYWRpbmdTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9tYWluL2dhbWVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9tYWluL29ic2VydmFibGVNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L21haW4vc2VydmVyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L21haW4vd2luU3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3JlZWxzL2N1c3RvbVR3ZWVuLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvcmVlbC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3JlZWxzL3JlZWxzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zbG90LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3BpbkJ1dHRvbi9zcGluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3RhdGVzL2RlZmF1bHRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3N0YXRlcy9pZGxlLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3RhdGVzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdGF0ZXMvc3Bpbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3N0YXRlcy9zdGF0ZU1hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdGF0ZXMvc3RhdGVzQ29uZmlnLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3RhdGVzL3dpbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3V0aWxzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvd2luU2NyZWVuL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3dpblNjcmVlbi93aW5TY3JlZW4uanMiXSwibmFtZXMiOlsiQnV0dG9uIiwieCIsInkiLCJidXR0b25UZXh0dXJlcyIsImNhbGxiYWNrIiwidGV4dHVyZXMiLCJpZGxlIiwiaWRsZVRleHR1cmUiLCJob3ZlclRleHR1cmUiLCJob3ZlciIsImRvd25UZXh0dXJlIiwiZG93biIsImRpc2FibGVkVGV4dHVyZSIsImRpc2FibGVkIiwid2lkdGgiLCJoZWlnaHQiLCJhbmNob3IiLCJzZXQiLCJwb3NpdGlvbiIsImludGVyYWN0aXZlIiwic2V0SGl0QXJlYSIsImFwcCIsInN0YWdlIiwiYWRkQ2hpbGQiLCJPYmplY3QiLCJhc3NpZ24iLCJvYnNlcnZhYmxlTWl4aW4iLCJ0ZXh0dXJlIiwicmFkaXVzIiwiaGl0QXJlYSIsIlBJWEkiLCJDaXJjbGUiLCJTcHJpdGUiLCJCZXRMaW5lcyIsImxpbmVQb2ludHMiLCJhZGRMaW5lUG9pbnRzIiwiYWxsTGluZXMiLCJhZGRMaW5lcyIsImN1cnJlbnRXaW5MaW5lcyIsImJ5IiwidXBkYXRlV2luTGluZXMiLCJzaG93V2luTGluZXMiLCJoaWRlV2luTGluZXMiLCJjb25maWciLCJnYW1lQ29uZmlnIiwiYmV0TGluZXMiLCJwb3NpdGlvbnMiLCJyZWVsc1Bvc2l0aW9uIiwidG9wT2Zmc2V0IiwicmVlbHMiLCJzbG90TGVuZ3RoIiwibGluZVBvc2l0aW9ucyIsImkiLCJsZW5ndGgiLCJjdXJCZXRMaW5lIiwiY3VyTGluZVBvaW50cyIsImoiLCJ4UG9pbnQiLCJyZWVsc1BvaW50cyIsInlQb2ludCIsInN5bWJvbHNQb2ludCIsInB1c2giLCJiZXRMaW5lIiwiTGluZSIsIndpbkxpbmVzIiwiY3VyTGluZSIsInNob3dXaW5MaW5lIiwiZm9yRWFjaCIsImxpbmUiLCJoaWRlV2luTGluZSIsIkNvbnRhaW5lciIsImFyckNvbmZpZyIsImxpbmVTdHlsZSIsImNyZWF0ZUxpbmVCeVBvaW50cyIsIm1vdmVUbyIsImN1clBvaW50Q29uZmlnIiwibGluZVRvIiwidmlzaWJsZSIsIkdyYXBoaWNzIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2aWV3Iiwic3RhdGVIYW5kbGVyIiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVzQ29uZmlnIiwiTG9hZGVyIiwic2hhcmVkIiwiYWRkIiwib24iLCJsb2FkUHJvZ3Jlc3NIYW5kbGVyIiwibG9hZCIsInNldHVwIiwibG9hZGluZ1NjcmVlbiIsIkxvYWRpbmdTY3JlZW4iLCJsb2FkZXIiLCJ1cGRhdGUiLCJwcm9ncmVzcyIsImJhY2tncm91bmQiLCJzbG90IiwicmVuZGVyTG9vcCIsImV2ZW50cyIsImZpcmVFdmVudCIsInJlc291cmNlcyIsIlNsb3QiLCJ0aWNrZXIiLCJnYW1lTG9vcCIsImRlbHRhIiwiY29sb3IiLCJzY3JlZW4iLCJSZWN0YW5nbGUiLCJhbHBoYSIsIm1lc3NhZ2UiLCJjcmVhdGVNZXNzYWdlIiwiYmxhY2tMaW5lIiwiZ3JlZW5MaW5lIiwiaGlkZUFsbCIsIlRleHQiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJwZXJjZW50IiwidGV4dCIsIk1hdGgiLCJmbG9vciIsInJlZWxzZXRzIiwiZ2FtZVNpemUiLCJyb3dzIiwibGVmdE9mZnNldCIsImxlZnQiLCJzeW1ib2xEaW1lbnNpb25zIiwidmlzaWJsZVN5bWJOdW0iLCJzeW1ib2xzTnVtYmVyIiwic3ltYm9sU3BlZWQiLCJwYXJhbXMiLCJldmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJhZGRMaXN0ZW5lciIsImFyZ3MiLCJTZXJ2ZXJNYW5hZ2VyIiwicmVlbHNldHNMaXN0IiwicmVlbHNMZW5ndGgiLCJzdGFydCIsImJldFNpemUiLCJiZXRTZWxlY3RvciIsImdldEN1ckJldFNpemUiLCJjdXJyZW50UmVlbHNldCIsInNlbGVjdFJlZWxzZXQiLCJzcGluUmVzdWx0Iiwic2VsZWN0UG9zaXRpb25zIiwiZ2VuZXJhdGVkUmVzcG9uc2UiLCJjaGVja0JldExpbmVzIiwic2V0VGltZW91dCIsImluZGV4IiwiY3VyU2V0Iiwic3RhcnRQb2ludCIsImN1clJlZWwiLCJ3aW5Qb2ludHMiLCJ3aW5TeW1ib2xzIiwicmVzcG9uc2UiLCJjdXJyZW50TGluZSIsInN5bWJzTWF0Y2hlZCIsInBvc2l0aW9uc09uUmVlbHMiLCJnZW5lcmF0ZWRMaW5lIiwibWFwIiwicmVlbCIsImN1ckluZGV4Iiwic2xpY2UiLCJ3aW5BbW91bnQiLCJXaW5TeW1ib2xzIiwiY3JlYXRlU3ltYm9sc0NvbmZpZyIsInNlcnZlclJlc3VsdCIsIm1hdHJpeCIsImNyZWF0ZVRlbXBsYXRlTWF0cml4Iiwic3ltYkluZGV4IiwidGVtcGxhdGUiLCJyb3dzTnVtIiwicmVlbHNOdW0iLCJDdXN0b21Ud2VlbiIsIm9iaiIsInByb3BlcnR5TmFtZSIsImVuZCIsInBlcmlvZCIsImdldFNwZWVkIiwidXBkYXRlUmVxdWlyZWQiLCJkaXN0YW5jZSIsInNwZWVkIiwib25Db21wbGV0ZSIsIm51bU9mRnJhbWVzIiwidGltZUJldHdlZW5GcmFtZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIlJlZWwiLCJwb3NpdGlvbkNvbmZpZyIsInN5bWJvbHMiLCJhZGRTeW1ib2xzIiwic3ltYm9sc0JlZm9yZVJlc3VsdCIsInJlc3VsdFN5bWJvbHMiLCJjdXJSZXN1bHRTeW1iSW5kZXgiLCJzZXJ2ZXJEYXRhUmVjZWl2ZWQiLCJmb3JjZWRTdG9wUmVxdWlyZWQiLCJjdXJTeW1iIiwicG9zc2libGVTeW1TcmMiLCJzeW1ib2wiLCJTeW1ib2wiLCJJbmZpbml0eSIsImFsbCIsInN5bSIsInN0YXJ0U3BpbiIsInRoZW4iLCJkb1NwaW4iLCJiZXRSZXN1bHQiLCJzeW1ic0JmUmVzdWx0IiwicmVzb2x2ZUNoYWluIiwidXNlUmFuZG9tU3ltYiIsIm1vdmVPbmVTbG90IiwiZW5kU3BpbiIsIm9uU3Bpbk92ZXIiLCJsYXN0SW5kZXgiLCJsYXN0U3ltYm9sIiwibmV3SW5kZXgiLCJzZXROZXdTeW1ib2wiLCJ1bnNoaWZ0IiwicG9wIiwicGxheVdpbkFuaW1hdGlvbiIsInBsYXlMb3NzQW5pbWF0aW9uIiwicGxheUlkbGUiLCJSZWVscyIsImFsbFJlZWxzIiwiYWRkUmVlbHMiLCJtYXNrIiwiYWRkTWFzayIsIndpbkFuaW1SZXF1aXJlZCIsInJlc3VsdENvbmZpZyIsInNlcnZlclJlc3BvbnNlUmVjZWl2ZWQiLCJhZGRXaW5IYW5kbGVyVmFsdWVzIiwiZm9yY2VkU3RvcCIsImN1clJlZWxQb2ludHMiLCJyZWVsc01hc2siLCJiZWdpbkZpbGwiLCJkcmF3UmVjdCIsInN0YXJ0UmVlbHNTcGluIiwic2VydmVyUmVzcG9uc2VSZXNvbHZlIiwic3RhcnRTdG9wU2VxdWVuY2UiLCJvblNwaW5Db21wbGV0ZSIsInN5bWJvbHNSZXN1bHRDb25maWciLCJjdXJSZXN1bHRSZWVsIiwic2hvd1dpblN5bWIiLCJ0ZXh0dXJlU3JjIiwidHlwZSIsInN0YXJ0U2NhbGUiLCJzY2FsZSIsIl94IiwiZW5kU2NhbGUiLCJ0d2VlbiIsImJvdW5jZVR3ZWVuIiwic2NhbGVUd2VlbiIsInBsYXkiLCJzY2FsZVVwIiwic2NhbGVEb3duIiwiYmluZCIsInZhbHVlIiwiU2VsZWN0b3IiLCJsZWZ0U3JjIiwicmlnaHRTcmMiLCJwb3NzaWJsZVZhbHVlcyIsIm1pbnVzQnV0dG9uIiwibWludXNPbmUiLCJwbHVzQnV0dG9uIiwicGx1c09uZSIsImN1cnJlbnRWYWx1ZSIsIm51bWJlciIsImFkZE51bWJlciIsImRpc2FibGVCdXR0b25zIiwiYnV0dG9uRGlzYWJsZUNoZWNrIiwiZGlzYWJsZSIsImVuYWJsZSIsInNwaW5CdXR0b24iLCJTcGluQnV0dG9uIiwic3BpbkJ1dHRvblNyYyIsIndpblNjcmVlbiIsIldpblNjcmVlbiIsImxlZnRTZWxlY3RvciIsInJpZ2h0U2VsZWN0b3IiLCJudW1iZXJzIiwic2VydmVyTWFuYWdlciIsIm1ha2VTcGluIiwiY3VycmVudFN0YXRlIiwibmFtZSIsIkRlZmF1bHRTdGF0ZSIsImFjdGl2ZSIsInRyYW5zaXRpb25zIiwic3RhdGVNYXNoaW5lIiwiaW5zdGFuY2UiLCJjb25zb2xlIiwibG9nIiwibmV4dCIsImNoYW5nZVN0YXRlVG8iLCJJZGxlIiwib25TcGluQnV0dG9uUHJlc3NlZCIsImZpbmlzaCIsIkxvYWQiLCJvbkxvYWRpbmdDb21wbGV0ZSIsIlNwaW4iLCJwbGF5V2luIiwic3RhdGVzQ29uZmlnIiwic3RhdGVzIiwiaW5pdCIsImNsYXNzIiwibmV4dFN0YXRlTmFtZSIsIldpbiIsImJldENoYW5nZWQiLCJyYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJyYW5kIiwicmFuZG9tIiwiZW5kRmlsbCIsImhpZGVTY3JlZW4iLCJjdXJyZW50V2luIiwidXBkYXRlQ3VycmVudFdpbiIsInNob3dTY3JlZW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1C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QUFDQSxpQkFBS21DLE9BQUwsQ0FBYVcsSUFBYixnQkFBK0IsS0FBS3NNLFVBQXBDO0FBRUg7O0FBRUQ7Ozs7OztxQ0FHYztBQUNWLGlCQUFLcFAsT0FBTCxHQUFlLEtBQWY7QUFDSDs7OztFQTFEMEIvQyxLQUFLZ0QsUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2phdmFzY3JpcHQvaW5kZXguanNcIik7XG4iLCJpbXBvcnQge3RleHR1cmVzfSBmcm9tIFwiLi4vaW5kZXguanNcIjtcclxuaW1wb3J0IHtvYnNlcnZhYmxlTWl4aW59IGZyb20gXCIuLi9tYWluL29ic2VydmFibGVNaXhpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgYnV0dG9uVGV4dHVyZXMsIGNhbGxiYWNrKXtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlc1tidXR0b25UZXh0dXJlcy5pZGxlXSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWRsZVRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5pZGxlO1xyXG4gICAgICAgIHRoaXMuaG92ZXJUZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuaG92ZXI7XHJcbiAgICAgICAgdGhpcy5kb3duVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmRvd247XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZFRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5kaXNhYmxlZDtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwMDtcclxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRIaXRBcmVhKDEyNSk7XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1vdXNlb3ZlcigpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmRpc2FibGVkID8gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdIDogdGV4dHVyZXNbdGhpcy5ob3ZlclRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlb3V0KCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZGlzYWJsZWQgPyB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV0gOiB0ZXh0dXJlc1t0aGlzLmlkbGVUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZWRvd24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLmRvd25UZXh0dXJlXTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZXVwKCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZGlzYWJsZWQgPyB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV0gOiB0ZXh0dXJlc1t0aGlzLmhvdmVyVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLmlkbGVUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlICgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJhZGl1cyBoaXRBcmVhIHJhZGl1c1xyXG4gICAgICovXHJcbiAgICBzZXRIaXRBcmVhIChyYWRpdXMpIHtcclxuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5DaXJjbGUoMCwgMCwgcmFkaXVzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7TGluZX0gZnJvbSBcIi4vbGluZVwiO1xyXG5pbXBvcnQge2dhbWVDb25maWd9IGZyb20gXCIuLi9tYWluL2dhbWVDb25maWdcIjtcclxuaW1wb3J0IHtvYnNlcnZhYmxlTWl4aW59IGZyb20gXCIuLi9tYWluL29ic2VydmFibGVNaXhpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJldExpbmVzIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmVQb2ludHMgPSB0aGlzLmFkZExpbmVQb2ludHMoKTtcclxuICAgICAgICB0aGlzLmFsbExpbmVzID0gdGhpcy5hZGRMaW5lcyh0aGlzLmxpbmVQb2ludHMpO1xyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRXaW5MaW5lcyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmJ5KHtcclxuICAgICAgICAgICAgXCJub3RpZnk6c2VydmVyTWFuYWdlci5uZXdSZXNwb25zZVwiOiB0aGlzLnVwZGF0ZVdpbkxpbmVzLFxyXG4gICAgICAgICAgICBcInN0YXRlQ2hhbmdlZFRvOldpblwiOiB0aGlzLnNob3dXaW5MaW5lcyxcclxuICAgICAgICAgICAgXCJzdGF0ZUNvbXBsZXRlZDpXaW5cIjogdGhpcy5oaWRlV2luTGluZXNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIGxpbmUgcG9pbnRzIGRlcGVuZHMgb24gZ2FtZUNvbmZpZyBwYXJhbXMgYW5kIGFkZCBpdCB0byBhcnJheVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIGxpbmUgcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIGFkZExpbmVQb2ludHMoKSB7XHJcbiAgICAgICAgY29uc3QgY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZ2FtZUNvbmZpZyk7XHJcbiAgICAgICAgY29uc3QgYmV0TGluZXMgPSBjb25maWcuYmV0TGluZXM7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gY29uZmlnLnJlZWxzUG9zaXRpb247XHJcbiAgICAgICAgY29uc3QgdG9wT2Zmc2V0ID0gcG9zaXRpb25zLnRvcE9mZnNldCArIHBvc2l0aW9ucy5yZWVscy5zbG90TGVuZ3RoIC8gMjtcclxuXHJcbiAgICAgICAgY29uc3QgbGluZVBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJldExpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1ckJldExpbmUgPSBiZXRMaW5lc1tpXTtcclxuICAgICAgICAgICAgY29uc3QgY3VyTGluZVBvaW50cyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjdXJCZXRMaW5lLmxlbmd0aDsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeFBvaW50ID0gcG9zaXRpb25zLnJlZWxzUG9pbnRzW2pdLng7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5UG9pbnQgPSBwb3NpdGlvbnMuc3ltYm9sc1BvaW50W2N1ckJldExpbmVbal1dLnkgKyB0b3BPZmZzZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VyTGluZVBvaW50cy5wdXNoKHt4OiB4UG9pbnQsIHk6IHlQb2ludH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaW5lUG9zaXRpb25zLnB1c2goY3VyTGluZVBvaW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGluZVBvc2l0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSBsaW5lcyB1c2luZyBsaW5lcyBwb2ludHMgYW5kIGFkZCBpdCB0byBhcnJheVxyXG4gICAgICogQHBhcmFtIHthcnJheX0gbGluZVBvaW50cyBhcnJheSB3aXRoIHBvaW50cyBmb3IgbGluZXNcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gYXJyYXkgd2l0aCBsaW5lc1xyXG4gICAgICovXHJcbiAgICBhZGRMaW5lcyhsaW5lUG9pbnRzKSB7XHJcbiAgICAgICAgY29uc3QgYWxsTGluZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpbmVQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IGxpbmVQb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJldExpbmUgPSBuZXcgTGluZShjb25maWcpO1xyXG5cclxuICAgICAgICAgICAgYWxsTGluZXMucHVzaChiZXRMaW5lKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChiZXRMaW5lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhbGxMaW5lcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgc2VydmVyJ3MgcmVzdWx0IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHthcnJheX0gY29uZmlnLndpbkxpbmVzIGFycmF5IHdpdGggd2luIGxpbmVzXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZVdpbkxpbmVzKGNvbmZpZykge1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdpbkxpbmVzID0gY29uZmlnLndpbkxpbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIHNob3cgY3VycmVudCB3aW4gbGluZXNcclxuICAgICAqL1xyXG4gICAgc2hvd1dpbkxpbmVzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50V2luTGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyTGluZSA9IHRoaXMuY3VycmVudFdpbkxpbmVzW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmFsbExpbmVzW2N1ckxpbmVdLnNob3dXaW5MaW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IGRlZmF1bHQgcGFyYW1zIGZvciBhbGwgbGluZXNcclxuICAgICAqL1xyXG4gICAgaGlkZVdpbkxpbmVzKCkge1xyXG4gICAgICAgIHRoaXMuYWxsTGluZXMuZm9yRWFjaCgobGluZSkgPT4ge1xyXG4gICAgICAgICAgICBsaW5lLmhpZGVXaW5MaW5lKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgTGluZSBleHRlbmRzIFBJWEkuR3JhcGhpY3Mge1xyXG4gICAgY29uc3RydWN0b3IoYXJyQ29uZmlnKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5saW5lU3R5bGUoMywgMHgwMGZmMDAsIDAuNSk7XHJcbiAgICAgICAgdGhpcy5jcmVhdGVMaW5lQnlQb2ludHMoYXJyQ29uZmlnKTtcclxuICAgICAgICB0aGlzLmhpZGVXaW5MaW5lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGVzIGxpbmUgdXNpbmcgeCx5IHBvaW50cyBmcm9tIGFycmF5XHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhcnJDb25maWcgQXJyYXk8e3g6IG51bWJlciwgeTpudW1iZXJ9PiBhcnJheSB3aXRoIHgseSBwb2ludHNcclxuICAgICAqL1xyXG4gICAgY3JlYXRlTGluZUJ5UG9pbnRzKGFyckNvbmZpZykge1xyXG4gICAgICAgIHRoaXMubW92ZVRvKGFyckNvbmZpZ1swXS54LCBhcnJDb25maWdbMF0ueSk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgYXJyQ29uZmlnLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clBvaW50Q29uZmlnID0gYXJyQ29uZmlnW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVUbyhjdXJQb2ludENvbmZpZy54LCBjdXJQb2ludENvbmZpZy55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlcyBsaW5lIHZpc2libGVcclxuICAgICAqL1xyXG4gICAgc2hvd1dpbkxpbmUoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhpZGVzIGxpbmVcclxuICAgICAqL1xyXG4gICAgaGlkZVdpbkxpbmUoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1Nsb3R9IGZyb20gXCIuL3Nsb3RcIjtcclxuaW1wb3J0IHtTdGF0ZU1hY2hpbmV9IGZyb20gXCIuL3N0YXRlcy9zdGF0ZU1hY2hpbmVcIjtcclxuaW1wb3J0IHtTdGF0ZXNDb25maWd9IGZyb20gXCIuL3N0YXRlcy9zdGF0ZXNDb25maWdcIjtcclxuaW1wb3J0IHtMb2FkaW5nU2NyZWVufSBmcm9tIFwiLi9sb2FkaW5nU2NyZWVuXCI7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC52aWV3KTtcclxuXHJcbmV4cG9ydCBjb25zdCBzdGF0ZUhhbmRsZXIgPSBuZXcgU3RhdGVNYWNoaW5lKFN0YXRlc0NvbmZpZyk7XHJcblxyXG5QSVhJLkxvYWRlci5zaGFyZWRcclxuICAgIC5hZGQoXCIuL2ltYWdlcy9zaGVldC5qc29uXCIpXHJcbiAgICAuYWRkKFwiLi9pbWFnZXMvMS5qcGdcIilcclxuICAgIC5hZGQoXCIuL2ltYWdlcy8yLmpwZ1wiKVxyXG4gICAgLmFkZChcIi4vaW1hZ2VzLzMuanBnXCIpXHJcbiAgICAuYWRkKFwiLi9pbWFnZXMvNC5qcGdcIilcclxuICAgIC5hZGQoXCIuL2ltYWdlcy81LmpwZ1wiKVxyXG4gICAgLm9uKFwicHJvZ3Jlc3NcIiwgbG9hZFByb2dyZXNzSGFuZGxlcilcclxuICAgIC5sb2FkKHNldHVwKTtcclxuXHJcbmxldCBsb2FkaW5nU2NyZWVuID0gbmV3IExvYWRpbmdTY3JlZW4oMCwgMCwgODAwLCA1MDAsIDB4Njk2OTY5KTtcclxuXHJcbmZ1bmN0aW9uIGxvYWRQcm9ncmVzc0hhbmRsZXIobG9hZGVyKSB7XHJcbiAgICBsb2FkaW5nU2NyZWVuLnVwZGF0ZShsb2FkZXIucHJvZ3Jlc3MpO1xyXG59XHJcblxyXG5leHBvcnQgbGV0IHRleHR1cmVzLFxyXG4gICAgYmFja2dyb3VuZCxcclxuICAgIHNsb3Q7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTG9vcCA9IFtdO1xyXG5cclxuZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICAvL3JlbGVhc2luZyBsb2FkaW5nIHN0YXRlXHJcbiAgICBldmVudHMuZmlyZUV2ZW50KFwib25Mb2FkaW5nQ29tcGxldGVcIik7XHJcblxyXG4gICAgdGV4dHVyZXMgPSBQSVhJLkxvYWRlci5zaGFyZWQucmVzb3VyY2VzW1wiLi9pbWFnZXMvc2hlZXQuanNvblwiXS50ZXh0dXJlcztcclxuICAgIGJhY2tncm91bmQgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZXNbXCJiYWNrZ3JvdW5kLnBuZ1wiXSk7XHJcbiAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQoYmFja2dyb3VuZCk7XHJcblxyXG4gICAgc2xvdCA9IG5ldyBTbG90KCk7XHJcbiAgICBhcHAudGlja2VyLmFkZChkZWx0YSA9PiBnYW1lTG9vcChkZWx0YSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcChkZWx0YSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZW5kZXJMb29wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcmVuZGVyTG9vcFtpXS51cGRhdGUoZGVsdGEpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtvYnNlcnZhYmxlTWl4aW59IGZyb20gXCIuL21haW4vb2JzZXJ2YWJsZU1peGluXCI7XHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi93aW5TY3JlZW4vcmVjdGFuZ2xlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZGluZ1NjcmVlbiBleHRlbmRzIFBJWEkuR3JhcGhpY3N7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuLmFscGhhID0gMC41O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuY3JlYXRlTWVzc2FnZSh4LCB5LCB3aWR0aCwgNDAwKTtcclxuICAgICAgICB0aGlzLmJsYWNrTGluZSA9IG5ldyBSZWN0YW5nbGUoMTUwLCAyNTAsIDUwMCwgMzAsIDB4MDAwMDAwKTtcclxuICAgICAgICB0aGlzLmdyZWVuTGluZSA9IG5ldyBSZWN0YW5nbGUoMTUwLCAyNTAsIDUwMCwgMzAsIDB4MjI5OTU0KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2NyZWVuLCB0aGlzLm1lc3NhZ2UsIHRoaXMuYmxhY2tMaW5lLCB0aGlzLmdyZWVuTGluZSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlKDApO1xyXG4gICAgICAgIHRoaXMuYnkoe1wic3RhdGVDb21wbGV0ZWQ6TG9hZFwiIDogdGhpcy5oaWRlQWxsfSk7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWVzc2FnZSAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgUElYSS5UZXh0KFwiTG9hZGluZy4uLlwiKTtcclxuICAgICAgICBtZXNzYWdlLnN0eWxlID0ge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXNzYWdlLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICBtZXNzYWdlLnBvc2l0aW9uLnNldCh4ICsgd2lkdGgvMiwgeSArIGhlaWdodC8yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHBlcmNlbnQpe1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS50ZXh0ID0gYExvYWRpbmcgJHtNYXRoLmZsb29yKHBlcmNlbnQpfSVgO1xyXG4gICAgICAgIHRoaXMuZ3JlZW5MaW5lLndpZHRoID0gcGVyY2VudCAqIDU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUFsbCgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBnYW1lQ29uZmlnICA9IHtcclxuICAgIGJldExpbmVzIDogW1xyXG4gICAgICAgIFswLDAsMCwwLDBdLFxyXG4gICAgICAgIFsxLDEsMSwxLDFdLFxyXG4gICAgICAgIFsyLDIsMiwyLDJdLFxyXG4gICAgICAgIFswLDEsMiwxLDBdLFxyXG4gICAgICAgIFsyLDEsMCwxLDJdLFxyXG4gICAgICAgIFsxLDAsMSwwLDFdLFxyXG4gICAgICAgIFsxLDIsMSwyLDFdXHJcbiAgICBdLFxyXG5cclxuXHJcbiAgICByZWVsc2V0cyA6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsMCwyLDAsMiwwLDEsMCwyXSxcclxuICAgICAgICAgICAgICAgIFswLDAsMiwxLDAsMSwyLDAsMl0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDIsMiwyLDAsMSwwLDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsMSwwLDAsMiwwLDAsMSwyXSxcclxuICAgICAgICAgICAgICAgIFswLDAsMSwxLDAsMCwyLDIsMV1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsMiwyLDEsMCwwLDIsMSwyXSxcclxuICAgICAgICAgICAgICAgIFsyLDIsMSwxLDAsMSwyLDAsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDAsMiwxLDAsMiwwLDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsMSwxLDIsMCwwLDEsMCwyXSxcclxuICAgICAgICAgICAgICAgIFsxLDAsMiwyLDIsMSwwLDIsMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsMiwwLDEsMCwxLDIsMSwyXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMCwwLDIsMCwwLDEsMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwxLDAsMiwxLDAsMiwwLDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsMCwyLDIsMiwxLDAsMiwwXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMCwwLDIsMCwwLDEsMl1cclxuICAgICAgICAgICAgXVxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgZ2FtZVNpemUgOiB7XHJcbiAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICByb3dzOiAzLFxyXG4gICAgICAgIHJlZWxzOiA1XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZWxzUG9zaXRpb24gOiB7XHJcbiAgICAgICAgdG9wT2Zmc2V0IDogMTAsXHJcbiAgICAgICAgbGVmdE9mZnNldCA6IDE1LFxyXG5cclxuICAgICAgICByZWVscyA6IHtcclxuICAgICAgICAgICAgbGVmdDogODAsXHJcbiAgICAgICAgICAgIHNsb3RMZW5ndGg6IDEzNCxcclxuICAgICAgICAgICAgc3ltYm9sRGltZW5zaW9uczoge3dpZHRoOiAxMTAsIGhlaWdodDogMTEwfSxcclxuICAgICAgICAgICAgdmlzaWJsZVN5bWJOdW06IDMsXHJcbiAgICAgICAgICAgIHN5bWJvbHNOdW1iZXI6IDQsXHJcbiAgICAgICAgICAgIHN5bWJvbFNwZWVkIDogMTYwXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVlbHNQb2ludHMgOiBbXHJcbiAgICAgICAgICAgIHt4IDogODAsIHkgOiAxMzQvMn0sXHJcbiAgICAgICAgICAgIHt4IDogODAgKiAzLCB5IDogMTM0LzJ9LFxyXG4gICAgICAgICAgICB7eCA6IDgwICogNSwgeSA6IDEzNC8yfSxcclxuICAgICAgICAgICAge3ggOiA4MCAqIDcsIHkgOiAxMzQvMn0sXHJcbiAgICAgICAgICAgIHt4IDogODAgKiA5LCB5IDogMTM0LzJ9XHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgc3ltYm9sc1BvaW50IDogW1xyXG4gICAgICAgICAgICB7eCA6IDAsIHkgOiAwfSxcclxuICAgICAgICAgICAge3ggOiAwLCB5IDogMTM0fSxcclxuICAgICAgICAgICAge3ggOiAwLCB5IDogMTM0ICogMn0sXHJcbiAgICAgICAgICAgIHt4IDogMCwgeSA6IDEzNCAqIDN9LFxyXG5cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5cclxuXHJcbn07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmV4cG9ydCBjb25zdCBvYnNlcnZhYmxlTWl4aW4gPSB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fVxyXG4gICAgICovXHJcbiAgICBieSA6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICBpZiggIXRoaXMuZXZlbnRIYW5kbGVycyApe1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciggbGV0IGV2ZW50TmFtZSBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYoIHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5hZGRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gcGFyYW1zW2V2ZW50TmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhcmdzIGFycmF5IHdpdGggYXJndW1lbnRzXHJcbiAgICAgKi9cclxuICAgIGZpcmVFdmVudCA6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgLi4uYXJncyl7XHJcbiAgICAgICAgZXZlbnRzLmZpcmVFdmVudChldmVudE5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCB7cmFuZG9tSW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNsb3QpIHtcclxuICAgICAgICB0aGlzLnJlZWxzZXRzTGlzdCA9IGdhbWVDb25maWcucmVlbHNldHM7XHJcbiAgICAgICAgdGhpcy5iZXRMaW5lcyA9IGdhbWVDb25maWcuYmV0TGluZXM7XHJcbiAgICAgICAgdGhpcy5yZWVsc0xlbmd0aCA9IGdhbWVDb25maWcuZ2FtZVNpemUucm93cztcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG4gICAgICAgIHRoaXMuYnkoe1wic3RhdGVDaGFuZ2VkVG86U3BpblwiOiB0aGlzLnN0YXJ0fSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xvdCA9IHNsb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1cG9uIHJlcXVlc3QgZnJvbSBjbGllbnQgY3JlYXRlcyBzcGluL2JldCByZXN1bHQgYW5kIGluZm9ybSB0aGUgY2xpZW50XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IGJldFNpemUgPSB0aGlzLnNsb3QuYmV0U2VsZWN0b3IuZ2V0Q3VyQmV0U2l6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSZWVsc2V0ID0gdGhpcy5zZWxlY3RSZWVsc2V0KHRoaXMucmVlbHNldHNMaXN0KTtcclxuICAgICAgICBjb25zdCBzcGluUmVzdWx0ID0gdGhpcy5zZWxlY3RQb3NpdGlvbnMoY3VycmVudFJlZWxzZXQpO1xyXG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZFJlc3BvbnNlID0gdGhpcy5jaGVja0JldExpbmVzKHNwaW5SZXN1bHQsIGJldFNpemUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVFdmVudChcIm5vdGlmeTpzZXJ2ZXJNYW5hZ2VyLm5ld1Jlc3BvbnNlXCIsIGdlbmVyYXRlZFJlc3BvbnNlKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByYW5kb21seSBzZWxlY3QgcmVlbHNldCBmcm9tIHJlZWxzZXRzTGlzdFxyXG4gICAgICogQHBhcmFtIHthcnJheX0gcmVlbHNldHNMaXN0IGFycmF5IHdpdGggcmVlbHNldHNcclxuICAgICAqIEByZXR1cm5zIHthcnJheX0gc2VsZWN0ZWQgcmVlbHNldFxyXG4gICAgICovXHJcbiAgICBzZWxlY3RSZWVsc2V0KHJlZWxzZXRzTGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcmFuZG9tSW50KDAsIHJlZWxzZXRzTGlzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICByZXR1cm4gcmVlbHNldHNMaXN0W2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJhbmRvbWx5IHNlbGVjdHMgc3RhcnQgcG9zaXRpb25zIG9uIGVhY2ggcmVlbCBhbmQgZ2VuZXJhdGUgbmV3IGFycmF5IHdpdGggbmV4dCAzIHN5bWJvbHNcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGN1cnJlbnRSZWVsc2V0IGFycmF5IHdpdGggcG9zc2libGUgdmFsdWVzIGZvciBlYWNoIHJlZWxcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gMmQgYXJyYXkgd2l0aCBzcGluIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBzZWxlY3RQb3NpdGlvbnMoY3VycmVudFJlZWxzZXQpIHtcclxuICAgICAgICBjb25zdCBzcGluUmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFJlZWxzZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyU2V0ID0gY3VycmVudFJlZWxzZXRbaV07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvaW50ID0gcmFuZG9tSW50KDAsIGN1clNldC5sZW5ndGggLSB0aGlzLnJlZWxzTGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgY3VyUmVlbCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnJlZWxzTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGN1clJlZWwucHVzaChjdXJTZXRbc3RhcnRQb2ludCArIGpdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BpblJlc3VsdC5wdXNoKGN1clJlZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3BpblJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRlcGVuZHMgb24gc3BpbiByZXN1bHQgY2hlY2sgYmV0IGxpbmVzIGFuZCBnZW5lcmF0ZXMgcmVzdWx0IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHthcnJheX0gc3BpblJlc3VsdCB0d28tbGV2ZWxzIGFycmF5IHdpdGggc3BpbiByZXN1bHRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBiZXRTaXplIHdpbiBwb2ludHMgbXVsdGlwbGllclxyXG4gICAgICogQHJldHVybnMge29iamVjdH0gcmVzdWx0Q29uZmlnIHJlc3VsdCBjb25maWd1cmF0aW9uIG9mIGN1cnJlbnQgYmV0XHJcbiAgICAgKiAgICAgICAgICB7bnVtYmVyfSByZXN1bHRDb25maWcud2luQW1vdW50IGFtb3VudCBvZiB3aW4gcG9pbnRcclxuICAgICAqICAgICAgICAgIHthcnJheX0gcmVzdWx0Q29uZmlnLndpbkxpbmVzIGFycmF5IHdpdGggd2luIGJldCBsaW5lc1xyXG4gICAgICogICAgICAgICAge2FycmF5fSByZXN1bHRDb25maWcud2luU3ltYm9scyBhcnJheSB3aXRoIHdpbiBzeW1ib2xzXHJcbiAgICAgKiAgICAgICAgICB7YXJyYXl9IHJlc3VsdENvbmZpZy5zcGluUmVzdWx0IDJkIGFycmF5IHdpdGggc3BpbiByZXN1bHRcclxuICAgICAqL1xyXG4gICAgY2hlY2tCZXRMaW5lcyhzcGluUmVzdWx0LCBiZXRTaXplKSB7XHJcbiAgICAgICAgbGV0IHdpblBvaW50cyA9IDA7XHJcbiAgICAgICAgY29uc3Qgd2luU3ltYm9scyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHdpbkxpbmVzID0gW107XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJldExpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMaW5lID0gdGhpcy5iZXRMaW5lc1tpXTtcclxuICAgICAgICAgICAgbGV0IHN5bWJzTWF0Y2hlZCA9IDE7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnNPblJlZWxzID0gW107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0ZWRMaW5lID0gc3BpblJlc3VsdC5tYXAoKHJlZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ckluZGV4ID0gY3VycmVudExpbmVbaV07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNPblJlZWxzLnB1c2goY3VySW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZWxbY3VySW5kZXhdO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2VuZXJhdGVkTGluZS5sZW5ndGggLSAxOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChnZW5lcmF0ZWRMaW5lW2pdID09PSBnZW5lcmF0ZWRMaW5lW2ogKyAxXSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzeW1ic01hdGNoZWQgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ltYnNNYXRjaGVkID4gMikge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpblN5bWJvbHMucHVzaChwb3NpdGlvbnNPblJlZWxzLnNsaWNlKDAsIHN5bWJzTWF0Y2hlZCkpO1xyXG4gICAgICAgICAgICAgICAgd2luTGluZXMucHVzaChpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3ltYnNNYXRjaGVkID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luUG9pbnRzICs9IDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzeW1ic01hdGNoZWQgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMzA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN5bWJzTWF0Y2hlZCA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3BvbnNlLndpbkFtb3VudCA9IHdpblBvaW50cyAqIGJldFNpemU7XHJcbiAgICAgICAgcmVzcG9uc2Uud2luTGluZXMgPSB3aW5MaW5lcztcclxuICAgICAgICByZXNwb25zZS53aW5TeW1ib2xzID0gd2luU3ltYm9scztcclxuICAgICAgICByZXNwb25zZS5zcGluUmVzdWx0ID0gc3BpblJlc3VsdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Z2FtZUNvbmZpZ30gZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQge29ic2VydmFibGVNaXhpbn0gZnJvbSBcIi4vb2JzZXJ2YWJsZU1peGluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luU3ltYm9scyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgICAgICB0aGlzLmJ5KHtcIm5vdGlmeTpzZXJ2ZXJNYW5hZ2VyLm5ld1Jlc3BvbnNlXCIgOiB0aGlzLmNyZWF0ZVN5bWJvbHNDb25maWd9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlIHdpbiBjb25maWcgZGVwZW5kcyBvbiBzZXJ2ZXIgcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZXJ2ZXJSZXN1bHRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzZXJ2ZXJSZXN1bHQud2luQW1vdW50IGFtb3VudCBvZiB3aW4gcG9pbnRcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHNlcnZlclJlc3VsdC53aW5MaW5lcyBhcnJheSB3aXRoIHdpbiBiZXQgbGluZXNcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHNlcnZlclJlc3VsdC53aW5TeW1ib2xzIGFycmF5IHdpdGggd2luIHN5bWJvbHNcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU3ltYm9sc0NvbmZpZyAoc2VydmVyUmVzdWx0KSB7XHJcbiAgICAgICAgaWYoc2VydmVyUmVzdWx0LndpbkFtb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMuY3JlYXRlVGVtcGxhdGVNYXRyaXgoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2ZXJSZXN1bHQud2luU3ltYm9scy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1ckxpbmUgPSBzZXJ2ZXJSZXN1bHQud2luU3ltYm9sc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjdXJMaW5lLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1clJlZWwgPSAgbWF0cml4W2pdO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYkluZGV4ID0gY3VyTGluZVtqXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJSZWVsW3N5bWJJbmRleF0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KFwibm90aWZ5OndpblN5bWJvbHNQcm9jZXNzZWRcIiwgbWF0cml4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgbWF0cml4IGRlcGVuZHMgb24gZ2FtZUNvbmZpZyBwYXJhbXNcclxuICAgICAqIEByZXR1cm5zIHthcnJheX0gbWF0cml4IHdpdGggZmFsc2UgcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVRlbXBsYXRlTWF0cml4KCl7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93c051bSA9IGdhbWVDb25maWcuZ2FtZVNpemUucm93cztcclxuICAgICAgICBjb25zdCByZWVsc051bSA9IGdhbWVDb25maWcuZ2FtZVNpemUucmVlbHM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWVsc051bTsgaSsrKXtcclxuICAgICAgICAgICAgY29uc3QgY3VyUmVlbCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHJvd3NOdW07IGorKyl7XHJcbiAgICAgICAgICAgICAgICBjdXJSZWVsLnB1c2goZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGVtcGxhdGUucHVzaChjdXJSZWVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7cmVuZGVyTG9vcH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7dGltZUJldHdlZW5GcmFtZXN9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbVR3ZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgcHJvcGVydHlOYW1lLCBzdGFydCwgZW5kLCBwZXJpb2QpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vYmogPSBvYmo7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMucHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lO1xyXG4gICAgICAgIHRoaXMuZ2V0U3BlZWQocGVyaW9kKTtcclxuXHJcbiAgICAgICAgcmVuZGVyTG9vcC5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uIGVhY2ggZnJhbWUgZXZlbmx5IGNoYW5nZSByZXF1aXJlZCBwYXJhbSwgZnJvbSB0aGUgc3RhcnQgcG9pbnQgdG8gdGhlIGVuZCwgZm9yIGEgc2V0IHBlcmlvZCBvZiB0aW1lXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGEgZWxpbWluYXRlcyBkZWxheXMgYmV0d2VlbiBmcmFtZXNcclxuICAgICAqL1xyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2UgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdIDwgdGhpcy5lbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPj0gdGhpcy5lbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPSB0aGlzLmVuZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA+IHRoaXMuZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdIDw9IHRoaXMuZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdID0gdGhpcy5lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlcyBzcGVlZCBkZXBlbmQgb24gZGlzdGFuY2UgYW5kIHBlcmlvZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcmlvZCBwZXJpb2Qgb2YgdGltZSBuZWVkZWQgdG8gcmVhY2ggdGhlIGVuZHBvaW50XHJcbiAgICAgKi9cclxuICAgIGdldFNwZWVkKHBlcmlvZCkge1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmVuZCAtIHRoaXMuc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5udW1PZkZyYW1lcyA9IHBlcmlvZCAvIHRpbWVCZXR3ZWVuRnJhbWVzO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmRpc3RhbmNlIC8gdGhpcy5udW1PZkZyYW1lcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgc3RhcnQgcG9pbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgZW5kIHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGVyaW9kIHBlcmlvZCBvZiB0aW1lIG5lZWRlZCB0byByZWFjaCB0aGUgZW5kcG9pbnRcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ29tcGxldGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICAgKi9cclxuICAgIHBsYXkoc3RhcnQsIGVuZCwgcGVyaW9kLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNwZWVkKHBlcmlvZCk7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCB7cmFuZG9tSW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtTeW1ib2x9IGZyb20gXCIuL3N5bWJvbFwiO1xyXG5pbXBvcnQge2dhbWVDb25maWd9IGZyb20gXCIuLi9tYWluL2dhbWVDb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWVsIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Db25maWcgPSBnYW1lQ29uZmlnLnJlZWxzUG9zaXRpb24ucmVlbHM7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzUG9pbnQgPSBnYW1lQ29uZmlnLnJlZWxzUG9zaXRpb24uc3ltYm9sc1BvaW50O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG5cclxuICAgICAgICB0aGlzLnN5bWJvbHMgPSB0aGlzLmFkZFN5bWJvbHModGhpcy5zeW1ib2xzUG9pbnQpO1xyXG4gICAgICAgIHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMucmVzdWx0U3ltYm9scyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VyUmVzdWx0U3ltYkluZGV4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlcnZlckRhdGFSZWNlaXZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9yY2VkU3RvcFJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpbmcgc3ltYm9scyB0byByZWVsIGJ5IHN5bWJvbHNQb2ludCBmcm9tIGdhbWVDb25maWdcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHN5bWJvbHNQb2ludCBhcnJheSB3aXRoIHBvaW50cyBmb3Igc3ltYm9sc1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIHN5bWJvbHNcclxuICAgICAqL1xyXG4gICAgYWRkU3ltYm9scyhzeW1ib2xzUG9pbnQpIHtcclxuICAgICAgICBjb25zdCBzeW1ib2xzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9sc1BvaW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clN5bWIgPSBzeW1ib2xzUG9pbnRbaV07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHJhbmRvbUludCgwLCBwb3NzaWJsZVN5bVNyYy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gbmV3IFN5bWJvbChwb3NzaWJsZVN5bVNyY1tpbmRleF0sIHRoaXMucG9zaXRpb25Db25maWcpO1xyXG4gICAgICAgICAgICBzeW1ib2wucG9zaXRpb24uc2V0KGN1clN5bWIueCwgY3VyU3ltYi55KTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChzeW1ib2wpO1xyXG4gICAgICAgICAgICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzeW1ib2xzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc3RhcnQgc3Bpbm5pbmcgc3ltYm9sc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN5bWJvbHNCZWZvcmVSZXN1bHQgPSBJbmZpbml0eTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5zeW1ib2xzLm1hcChzeW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3ltLnN0YXJ0U3BpbigpO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmRvU3BpbigpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBiZXRSZXN1bHQgYXJyYXkgd2l0aCBzeW1ib2xzLCBvbiB3aGljaCByZWVsIGhhcyB0byBzdG9wXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ltYnNCZlJlc3VsdCBhbW91bnQgb2YgcmFuZG9tIHN5bWJvbHMgYmVmb3JlIHJlc3VsdFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydFN0b3BTZXF1ZW5jZShiZXRSZXN1bHQsIHN5bWJzQmZSZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdCA9IHN5bWJzQmZSZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0U3ltYm9scyA9IGJldFJlc3VsdDtcclxuICAgICAgICAgICAgdGhpcy5jdXJSZXN1bHRTeW1iSW5kZXggPSB0aGlzLnJlc3VsdFN5bWJvbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJEYXRhUmVjZWl2ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlQ2hhaW4gPSByZXNvbHZlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlcyBzeW1ib2xzIG1vdmUgb25lIHNsb3QgYW5kIGRlcGVuZGluZyBvbiBkaWZmZXJlbnQgY29uZGl0aW9ucyBtYWtlcyByZWN1cnNpdmUgY2FsbCBvciBmaW5pc2ggc3Bpbm5pbmdcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlUmFuZG9tU3ltYiBpZiB0cnVlIGFkZCByYW5kb21TeW1ib2xcclxuICAgICAqL1xyXG4gICAgZG9TcGluKHVzZVJhbmRvbVN5bWIgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlT25lU2xvdCh1c2VSYW5kb21TeW1iKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNCZWZvcmVSZXN1bHQtLTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID4gMCAmJiAhdGhpcy5mb3JjZWRTdG9wUmVxdWlyZWQgfHwgIXRoaXMuc2VydmVyRGF0YVJlY2VpdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NwaW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VyUmVzdWx0U3ltYkluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvU3BpbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJSZXN1bHRTeW1iSW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5zeW1ib2xzLm1hcChzeW1ib2wgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ltYm9sLmVuZFNwaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vblNwaW5PdmVyKCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VSYW5kb21TeW1iIGlmIHRydWUgYWRkIHJhbmRvbVN5bWJvbFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBtb3ZlT25lU2xvdCh1c2VSYW5kb21TeW1iKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5zeW1ib2xzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgY29uc3QgbGFzdFN5bWJvbCA9IHRoaXMuc3ltYm9sc1tsYXN0SW5kZXhdO1xyXG4gICAgICAgIGxldCBuZXdJbmRleDtcclxuXHJcbiAgICAgICAgaWYgKHVzZVJhbmRvbVN5bWIpIHtcclxuICAgICAgICAgICAgbmV3SW5kZXggPSByYW5kb21JbnQoMCwgcG9zc2libGVTeW1TcmMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3SW5kZXggPSB0aGlzLnJlc3VsdFN5bWJvbHNbdGhpcy5jdXJSZXN1bHRTeW1iSW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFzdFN5bWJvbC5zZXROZXdTeW1ib2wobmV3SW5kZXgpO1xyXG5cclxuICAgICAgICBsYXN0U3ltYm9sLnkgPSAtdGhpcy5wb3NpdGlvbkNvbmZpZy5zbG90TGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLnN5bWJvbHMudW5zaGlmdCh0aGlzLnN5bWJvbHMucG9wKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5zeW1ib2xzLm1hcChzeW1ib2wgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sLm1vdmVPbmVTbG90KCk7XHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGN1cnJlbnQgc3BpbiBpcyBvdmVyIHNldCBkZWZhdWx0IHZhbHVlcyBhbmQgY2FsbCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBvblNwaW5PdmVyKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmVyRGF0YVJlY2VpdmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mb3JjZWRTdG9wUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3VsdFN5bWJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc29sdmVDaGFpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2hvd3Mgd2luL2xvc3MgYW5pbWF0aW9uIGZvciBlYWNoIHN5bWJvbFxyXG4gICAgICogQHBhcmFtIHthcnJheX0gc3ltYm9scyBhcnJheSB3aXRoIGJvb2xlYW4gdmFsdWVzXHJcbiAgICAgKi9cclxuICAgIHNob3dXaW5TeW1iKHN5bWJvbHMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHN5bWJvbHNbaV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sc1tpXS5wbGF5V2luQW5pbWF0aW9uKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sc1tpXS5wbGF5TG9zc0FuaW1hdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGRlZmF1bHQgc3ltYm9scyBwYXJhbXMgZm9yIGVhY2ggc3ltYm9sXHJcbiAgICAgKi9cclxuICAgIHBsYXlJZGxlKCkge1xyXG4gICAgICAgIHRoaXMuc3ltYm9scy5mb3JFYWNoKHN5bWJvbCA9PiB7XHJcbiAgICAgICAgICAgIHN5bWJvbC5wbGF5SWRsZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBza2lwcyBzcGlubmluZyBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgZm9yY2VkU3RvcCgpIHtcclxuICAgICAgICB0aGlzLmZvcmNlZFN0b3BSZXF1aXJlZCA9IHRydWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1JlZWx9IGZyb20gXCIuL3JlZWxcIlxyXG5pbXBvcnQge2dhbWVDb25maWd9IGZyb20gXCIuLi9tYWluL2dhbWVDb25maWdcIjtcclxuaW1wb3J0IHtvYnNlcnZhYmxlTWl4aW59IGZyb20gXCIuLi9tYWluL29ic2VydmFibGVNaXhpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZWxzIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy55ID0gZ2FtZUNvbmZpZy5yZWVsc1Bvc2l0aW9uLnRvcE9mZnNldDtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxSZWVscyA9IHRoaXMuYWRkUmVlbHMoKTtcclxuICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLmFkZE1hc2soKTtcclxuICAgICAgICB0aGlzLndpbkFuaW1SZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0Q29uZmlnID0gbnVsbDtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcblxyXG4gICAgICAgIHRoaXMuYnkoe1xyXG4gICAgICAgICAgICBcInN0YXRlQ2hhbmdlZFRvOlNwaW5cIjogdGhpcy5zdGFydCxcclxuICAgICAgICAgICAgXCJub3RpZnk6c2VydmVyTWFuYWdlci5uZXdSZXNwb25zZVwiOiB0aGlzLnNlcnZlclJlc3BvbnNlUmVjZWl2ZWQsXHJcbiAgICAgICAgICAgIFwibm90aWZ5OndpblN5bWJvbHNQcm9jZXNzZWRcIjogdGhpcy5hZGRXaW5IYW5kbGVyVmFsdWVzLFxyXG4gICAgICAgICAgICBcInN0YXRlQ2hhbmdlZFRvOklkbGVcIjogdGhpcy5wbGF5SWRsZSxcclxuICAgICAgICAgICAgXCJzcGluOmZvcmNlZFN0b3BcIjogdGhpcy5mb3JjZWRTdG9wXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGVzIHJlZWxzIGRlcGVuZGluZyBvbiBnYW1lQ29uZmlnIHBhcmFtc1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIHJlZWxzXHJcbiAgICAgKi9cclxuICAgIGFkZFJlZWxzKCkge1xyXG4gICAgICAgIGxldCByZWVsc1BvaW50cyA9IGdhbWVDb25maWcucmVlbHNQb3NpdGlvbi5yZWVsc1BvaW50cztcclxuICAgICAgICBsZXQgYWxsUmVlbHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWVsc1BvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VyUmVlbFBvaW50cyA9IHJlZWxzUG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgcmVlbCA9IG5ldyBSZWVsKGN1clJlZWxQb2ludHMueCwgY3VyUmVlbFBvaW50cy55KTtcclxuICAgICAgICAgICAgYWxsUmVlbHMucHVzaChyZWVsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChyZWVsKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsUmVlbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgYSBtYXNrIHRvIGxpbWl0IHZpc2libGUgem9uZVxyXG4gICAgICogQHJldHVybnMge1BJWEkuR3JhcGhpY3N9IHJlZWxzIG1hc2tcclxuICAgICAqL1xyXG4gICAgYWRkTWFzaygpIHtcclxuICAgICAgICBsZXQgcmVlbHNNYXNrID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICByZWVsc01hc2suYmVnaW5GaWxsKCk7XHJcbiAgICAgICAgcmVlbHNNYXNrLmRyYXdSZWN0KDAsIC10aGlzLnksIGdhbWVDb25maWcuZ2FtZVNpemUud2lkdGgsIGdhbWVDb25maWcuZ2FtZVNpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHJlZWxzTWFzayk7XHJcblxyXG4gICAgICAgIHJldHVybiByZWVsc01hc2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9jZXNzaW5nIHRoZSBzcGluXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFJlZWxzU3BpbigpLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuc2VydmVyUmVzcG9uc2VSZXNvbHZlID0gcmVzb2x2ZSlcclxuICAgICAgICBdKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnN0YXJ0U3RvcFNlcXVlbmNlKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25TcGluQ29tcGxldGUoKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzdGFydCBzcGlubmluZyByZWVsc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydFJlZWxzU3BpbigpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5hbGxSZWVscy5tYXAocmVlbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWVsLnN0YXJ0KCk7XHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdENvbmZpZyByZXN1bHRDb25maWcgZnJvbSBzZXJ2ZXJcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlc3VsdENvbmZpZy5zcGluUmVzdWx0IGFycmF5IHdpdGggYmV0IHJlc3VsdCBmb3IgZWFjaCByZWVsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmVzdWx0Q29uZmlnLndpbkFtb3VudCB3aW4gcG9pbnRzIG9uIGN1cnJlbnQgYmV0XHJcbiAgICAgKi9cclxuICAgIHNlcnZlclJlc3BvbnNlUmVjZWl2ZWQocmVzdWx0Q29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRDb25maWcgPSByZXN1bHRDb25maWc7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJSZXNwb25zZVJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeW1ic0JmUmVzdWx0IGFtb3VudCBvZiByYW5kb20gc3ltYm9scyBiZWZvcmUgcmVzdWx0XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBwcm9taXNlXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0U3RvcFNlcXVlbmNlKHN5bWJzQmZSZXN1bHQgPSA2KSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuYWxsUmVlbHMubWFwKChyZWVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWVsLnN0YXJ0U3RvcFNlcXVlbmNlKHRoaXMucmVzdWx0Q29uZmlnLnNwaW5SZXN1bHRbaV0sIHN5bWJzQmZSZXN1bHQgKyBpICogMik7XHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBza2lwcyBzcGlubmluZyBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgZm9yY2VkU3RvcCgpIHtcclxuICAgICAgICB0aGlzLmFsbFJlZWxzLmZvckVhY2gocmVlbCA9PiB7XHJcbiAgICAgICAgICAgIHJlZWwuZm9yY2VkU3RvcCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIHJlc3VsdCBjb25maWdcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRDb25maWcgZnJvbSB3aW5IYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIGFkZFdpbkhhbmRsZXJWYWx1ZXMocmVzdWx0Q29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdENvbmZpZykge1xyXG4gICAgICAgICAgICB0aGlzLndpbkFuaW1SZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3ltYm9sc1Jlc3VsdENvbmZpZyA9IHJlc3VsdENvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRlcGVuZGluZyBvbiB3aW5BbmltUmVxdWlyZWQgZmlyZSBldmVudCBhbmQgc2hvdyB3aW4vbG9zcyBhbmltYXRpb24gZm9yIGVhY2ggc3ltYm9sXHJcbiAgICAgKi9cclxuICAgIG9uU3BpbkNvbXBsZXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy53aW5BbmltUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJwbGF5SWRsZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJwbGF5V2luXCIpO1xyXG4gICAgICAgIGxldCBtYXRyaXggPSB0aGlzLnN5bWJvbHNSZXN1bHRDb25maWc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyUmVzdWx0UmVlbCA9IG1hdHJpeFtpXTtcclxuICAgICAgICAgICAgY29uc3QgY3VyUmVlbCA9IHRoaXMuYWxsUmVlbHNbaV07XHJcblxyXG4gICAgICAgICAgICBjdXJSZWVsLnNob3dXaW5TeW1iKGN1clJlc3VsdFJlZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy53aW5BbmltUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgZGVmYXVsdCBzeW1ib2xzIHBhcmFtcyBmb3IgZWFjaCBzeW1ib2xcclxuICAgICAqL1xyXG4gICAgcGxheUlkbGUoKSB7XHJcbiAgICAgICAgdGhpcy5hbGxSZWVscy5mb3JFYWNoKHJlZWwgPT4ge1xyXG4gICAgICAgICAgICByZWVsLnBsYXlJZGxlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCB7dGV4dHVyZXN9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge0N1c3RvbVR3ZWVufSBmcm9tIFwiLi9jdXN0b21Ud2VlblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN5bWJvbCBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZVNyYywgY29uZmlnKXtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlc1t0ZXh0dXJlU3JjXSk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSBjb25maWcuc3ltYm9sRGltZW5zaW9ucy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGNvbmZpZy5zeW1ib2xEaW1lbnNpb25zLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNsb3RMZW5ndGggPSBjb25maWcuc2xvdExlbmd0aDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gY29uZmlnLnN5bWJvbFNwZWVkO1xyXG5cclxuICAgICAgICB0aGlzLnR5cGUgPSB0ZXh0dXJlU3JjO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTY2FsZSA9IHRoaXMuc2NhbGUuX3g7XHJcbiAgICAgICAgdGhpcy5lbmRTY2FsZSA9IHRoaXMuc3RhcnRTY2FsZSoxLjI1O1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuID0gbmV3IEN1c3RvbVR3ZWVuKHRoaXMsIFwieVwiLCB0aGlzLnksIHRoaXMueSArICB0aGlzLnNsb3RMZW5ndGgsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMuYm91bmNlVHdlZW4gPSBuZXcgQ3VzdG9tVHdlZW4odGhpcywgXCJ5XCIsIHRoaXMueSwgdGhpcy55IC0gdGhpcy5oZWlnaHQvMiwgdGhpcy5zcGVlZCoyLzMpO1xyXG4gICAgICAgIHRoaXMuc2NhbGVUd2VlbiA9IG5ldyBDdXN0b21Ud2Vlbih0aGlzLCBcInN5bWJTY2FsZVwiLCB0aGlzLnN0YXJ0U2NhbGUsICB0aGlzLmVuZFNjYWxlLCB0aGlzLnNwZWVkKjMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgZGVmYXVsdCBzeW1ib2xzIHBhcmFtcyBiZWZvcmUgbmV4dCBzcGluIGFuZCBtYWtlcyB1cC9kb3duIGJvdW5jZSB1c2luZyB0d2VlblxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydFNwaW4gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUlkbGUoKTtcclxuICAgICAgICAgICAgdGhpcy5ib3VuY2VUd2Vlbi5wbGF5KHRoaXMueSwgdGhpcy55IC0gdGhpcy5oZWlnaHQvMix0aGlzLnNwZWVkKjMvNCwgKCkgPT4ge30pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmJvdW5jZVR3ZWVuLnBsYXkodGhpcy55LCB0aGlzLnkgKyB0aGlzLmhlaWdodC8yLHRoaXMuc3BlZWQqMi8zLCByZXNvbHZlKSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGV2ZW5seSBjaGFuZ2UgcG9zaXRpb24gYnkgb25lIHNsb3QgdXNpbmcgdHdlZW5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHByb21pc2VcclxuICAgICAqL1xyXG4gICAgbW92ZU9uZVNsb3QgKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSArIHRoaXMuc2xvdExlbmd0aCwgdGhpcy5zcGVlZCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlcyBkb3duL3VwIGJvdW5jZSB1c2luZyB0d2VlblxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBlbmRTcGluKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSArIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCoyLzMsICgpID0+IHt9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdW5jZVR3ZWVuLnBsYXkodGhpcy55LCB0aGlzLnkgLSB0aGlzLmhlaWdodC8yLHRoaXMuc3BlZWQqMi8zLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgc3ltYm9sIG5ldyB0ZXh0dXJlIGFuZCB0eXBlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggdGV4dHVyZSBpbmRleCBvZiBuZXcgc3ltYm9sXHJcbiAgICAgKi9cclxuICAgIHNldE5ld1N5bWJvbChpbmRleCl7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbcG9zc2libGVTeW1TcmNbaW5kZXhdXTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBwb3NzaWJsZVN5bVNyY1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn0gbnVtYmVyIG9mIHN5bWJvbCdzIHNjYWxlIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIGdldCBzeW1iU2NhbGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlLl94O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBzZXQgc3ltYm9sJ3Mgc2NhbGUgcHJvcGVydHlcclxuICAgICAqL1xyXG4gICAgc2V0IHN5bWJTY2FsZSAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNjYWxlLnNldCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhbmltYXRpb24gZm9yIHdpbiBzeW1ib2xzXHJcbiAgICAgKi9cclxuICAgIHBsYXlXaW5BbmltYXRpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGVVcCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBldmVubHkgc2NhbGVzIHN5bWJvbCB1cCB1c2luZyB0d2VlblxyXG4gICAgICovXHJcbiAgICBzY2FsZVVwICgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlVHdlZW4ucGxheSh0aGlzLnN0YXJ0U2NhbGUsIHRoaXMuZW5kU2NhbGUsIHRoaXMuc3BlZWQqMywgdGhpcy5zY2FsZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBldmVubHkgc2NhbGVzIHN5bWJvbCBkb3duIHVzaW5nIHR3ZWVuXHJcbiAgICAgKi9cclxuICAgIHNjYWxlRG93biAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZVR3ZWVuLnBsYXkodGhpcy5lbmRTY2FsZSwgdGhpcy5zdGFydFNjYWxlLCB0aGlzLnNwZWVkKjMsICgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqbWFrZXMgc3ltYm9scyBzZW1pIHRyYW5zcGFyZW50XHJcbiAgICAgKi9cclxuICAgIHBsYXlMb3NzQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGRlZmF1bHQgc3ltYm9scyBwYXJhbXNcclxuICAgICAqL1xyXG4gICAgcGxheUlkbGUgKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGUuc2V0KHRoaXMuc3RhcnRTY2FsZSk7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtCdXR0b259IGZyb20gXCIuL1VJL2J1dHRvblwiO1xyXG5pbXBvcnQge3RleHR1cmVzfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQge29ic2VydmFibGVNaXhpbn0gZnJvbSBcIi4vbWFpbi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RvciBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgbGVmdFNyYywgcmlnaHRTcmMsIHBvc3NpYmxlVmFsdWVzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG4gICAgICAgIHRoaXMubWludXNCdXR0b24gPSBuZXcgQnV0dG9uKDAsIDAsIGxlZnRTcmMsIHRoaXMubWludXNPbmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wbHVzQnV0dG9uID0gbmV3IEJ1dHRvbigyMDAsIDAsIHJpZ2h0U3JjLCB0aGlzLnBsdXNPbmUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zc2libGVWYWx1ZXMgPSBwb3NzaWJsZVZhbHVlcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IDE7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSB0aGlzLmFkZE51bWJlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWludXNCdXR0b24sIHRoaXMucGx1c0J1dHRvbiwgdGhpcy5udW1iZXIpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ieSh7XHJcbiAgICAgICAgICAgIFwic3RhdGVDaGFuZ2VkVG86U3BpblwiOiB0aGlzLmRpc2FibGVCdXR0b25zLFxyXG4gICAgICAgICAgICBcInN0YXRlQ29tcGxldGVkOlNwaW5cIjogdGhpcy5idXR0b25EaXNhYmxlQ2hlY2tcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1pbnVzT25lKCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLnBvc3NpYmxlVmFsdWVzWyAtLXRoaXMuY3VycmVudFZhbHVlIF1dO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRGlzYWJsZUNoZWNrKCk7XHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJiZXRDaGFuZ2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsdXNPbmUgKCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLnBvc3NpYmxlVmFsdWVzWyArK3RoaXMuY3VycmVudFZhbHVlIF1dO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRGlzYWJsZUNoZWNrKCk7XHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJiZXRDaGFuZ2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGlzYWJsZS9lbmFibGUgYnV0dG9ucyBkZXBlbmQgb24gY3VycmVudFZhbHVlXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbkRpc2FibGVDaGVjaygpe1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSA+PSB0aGlzLnBvc3NpYmxlVmFsdWVzLmxlbmd0aCAtIDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBsdXNCdXR0b24uZGlzYWJsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1c0J1dHRvbi5lbmFibGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSA8IDEpe1xyXG4gICAgICAgICAgICB0aGlzLm1pbnVzQnV0dG9uLmRpc2FibGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnVzQnV0dG9uLmVuYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZXMgc2VsZWN0b3IgbnVtYmVyIHNwcml0ZVxyXG4gICAgICogQHJldHVybnMge1BJWEkuU3ByaXRlfSB0ZXh0dXJlIG9mIHNlbGVjdG9yIG51bWJlclxyXG4gICAgICovXHJcbiAgICBhZGROdW1iZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IG51bWJlciA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlc1t0aGlzLnBvc3NpYmxlVmFsdWVzW3RoaXMuY3VycmVudFZhbHVlXV0pO1xyXG4gICAgICAgIG51bWJlci5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgbnVtYmVyLndpZHRoID0gMTI1O1xyXG4gICAgICAgIG51bWJlci5oZWlnaHQgPSAxMjU7XHJcbiAgICAgICAgbnVtYmVyLnBvc2l0aW9uLnNldCgxMDAsIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gbnVtYmVyXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNhYmxlIGJ1dHRvbnNcclxuICAgICAqL1xyXG4gICAgZGlzYWJsZUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVzQnV0dG9uLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLm1pbnVzQnV0dG9uLmRpc2FibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiBjdXJyZW50IGJldCBzaXplXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGlzLmN1cnJlbnRWYWx1ZSBpcyBwb3NpdGlvbiBpbiBhcnJheSBhbmQgMCBlcXVhbHMgMSBiZXQgc2l6ZVxyXG4gICAgICovXHJcbiAgICBnZXRDdXJCZXRTaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZSArIDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1JlZWxzfSBmcm9tIFwiLi9yZWVscy9yZWVsc1wiO1xyXG5pbXBvcnQge0JldExpbmVzfSBmcm9tIFwiLi9iZXRMaW5lcy9iZXRMaW5lc1wiO1xyXG5pbXBvcnQge1NlcnZlck1hbmFnZXJ9IGZyb20gXCIuL21haW4vc2VydmVyTWFuYWdlclwiO1xyXG5pbXBvcnQge1dpblN5bWJvbHN9IGZyb20gXCIuL21haW4vd2luU3ltYm9sc1wiO1xyXG5pbXBvcnQge1NlbGVjdG9yfSBmcm9tIFwiLi9zZWxlY3RvclwiO1xyXG5pbXBvcnQge1dpblNjcmVlbn0gZnJvbSBcIi4vd2luU2NyZWVuL3dpblNjcmVlblwiO1xyXG5pbXBvcnQge2dhbWVDb25maWd9IGZyb20gXCIuL21haW4vZ2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQge1NwaW5CdXR0b259IGZyb20gXCIuL3NwaW5CdXR0b24vc3BpbkJ1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNsb3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5iZXRMaW5lcyA9IG5ldyBCZXRMaW5lcygpO1xyXG4gICAgICAgIHRoaXMucmVlbHMgPSBuZXcgUmVlbHMoKTtcclxuICAgICAgICB0aGlzLnNwaW5CdXR0b24gPSBuZXcgU3BpbkJ1dHRvbig0MDAsIDQ1MCwgc3BpbkJ1dHRvblNyYyk7XHJcbiAgICAgICAgdGhpcy53aW5TY3JlZW4gPSBuZXcgV2luU2NyZWVuKDAsZ2FtZUNvbmZpZy5nYW1lU2l6ZS5oZWlnaHQsIDMwMCwgMTAwLCAweDY5Njk2OSk7XHJcbiAgICAgICAgdGhpcy5iZXRTZWxlY3RvciA9IG5ldyBTZWxlY3Rvcig1NTAsIDQ1MCwgbGVmdFNlbGVjdG9yLCByaWdodFNlbGVjdG9yLCBudW1iZXJzKTtcclxuICAgICAgICB0aGlzLndpblN5bWJvbHMgPSBuZXcgV2luU3ltYm9scygpO1xyXG4gICAgICAgIHRoaXMuc2VydmVyTWFuYWdlciA9IG5ldyBTZXJ2ZXJNYW5hZ2VyKHRoaXMpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9VSS9idXR0b25cIjtcclxuaW1wb3J0IHtzdGF0ZUhhbmRsZXJ9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwaW5CdXR0b24gZXh0ZW5kcyBCdXR0b257XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBidXR0b25UZXh0dXJlcyl7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgYnV0dG9uVGV4dHVyZXMpO1xyXG4gICAgICAgIHRoaXMuYnkoe1xyXG4gICAgICAgICAgICBcInN0YXRlQ29tcGxldGVkOlNwaW5cIjogdGhpcy5lbmFibGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9zZXR0aW5nIHNwaW4gYnV0dG9uIGNsaWNrIGNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IHRoaXMubWFrZVNwaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmaXJlcyBkaWZmZXJlbnQgZXZlbnRzIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlIGFuZCBkaXNhYmxlIGJ1dHRvbiBpZiBuZWVkZWRcclxuICAgICAqL1xyXG4gICAgbWFrZVNwaW4oKSB7XHJcbiAgICAgICAgaWYoc3RhdGVIYW5kbGVyLmN1cnJlbnRTdGF0ZS5uYW1lID09PSBcIlNwaW5cIil7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KFwic3Bpbjpmb3JjZWRTdG9wXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KFwib25TcGluQnV0dG9uUHJlc3NlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge29ic2VydmFibGVNaXhpbn0gZnJvbSBcIi4uL21haW4vb2JzZXJ2YWJsZU1peGluXCI7XHJcbmltcG9ydCB7U3RhdGVNYWNoaW5lfSBmcm9tIFwiLi9zdGF0ZU1hY2hpbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0U3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBcInN0YXRlTmFtZVwiO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9ucyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGVNYXNoaW5lID0gU3RhdGVNYWNoaW5lLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZpcmVFdmVudChgc3RhdGVDaGFuZ2VkVG86JHt0aGlzLm5hbWV9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXRlQ2hhbmdlZFRvOiR7dGhpcy5uYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaChldmVudE5hbWUpIHtcclxuICAgICAgICAvL29ubHkgYWN0aXZlIHN0YXRlIHNob3VsZCByZWFjdCBvbiBldmVudFxyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoYHN0YXRlQ29tcGxldGVkOiR7dGhpcy5uYW1lfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0ZUNvbXBsZXRlZDoke3RoaXMubmFtZX1gKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbmV4dCA9IHRoaXMudHJhbnNpdGlvbnNbZXZlbnROYW1lXTtcclxuICAgICAgICB0aGlzLnN0YXRlTWFzaGluZS5jaGFuZ2VTdGF0ZVRvKG5leHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge0RlZmF1bHRTdGF0ZX0gZnJvbSBcIi4vZGVmYXVsdFN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSWRsZSBleHRlbmRzIERlZmF1bHRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ieSh7b25TcGluQnV0dG9uUHJlc3NlZDogdGhpcy5vblNwaW5CdXR0b25QcmVzc2VkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TcGluQnV0dG9uUHJlc3NlZCgpe1xyXG4gICAgICAgIHRoaXMuZmluaXNoKFwib25TcGluQnV0dG9uUHJlc3NlZFwiKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0RlZmF1bHRTdGF0ZX0gZnJvbSBcIi4vZGVmYXVsdFN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZCBleHRlbmRzIERlZmF1bHRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJMb2FkXCI7XHJcbiAgICAgICAgdGhpcy5ieSh7b25Mb2FkaW5nQ29tcGxldGUgOiB0aGlzLm9uTG9hZGluZ0NvbXBsZXRlfSk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZGluZ0NvbXBsZXRlKCl7XHJcbiAgICAgICAgdGhpcy5maW5pc2goXCJvbkxvYWRpbmdDb21wbGV0ZVwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGVmYXVsdFN0YXRlfSBmcm9tIFwiLi9kZWZhdWx0U3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGluIGV4dGVuZHMgRGVmYXVsdFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJ5KHtcclxuICAgICAgICAgICAgcGxheVdpbiA6IHRoaXMucGxheVdpbixcclxuICAgICAgICAgICAgcGxheUlkbGUgOiB0aGlzLnBsYXlJZGxlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlXaW4oKXtcclxuICAgICAgICB0aGlzLmZpbmlzaChcInBsYXlXaW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUlkbGUoKXtcclxuICAgICAgICB0aGlzLmZpbmlzaChcInBsYXlJZGxlXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsImxldCBpbnN0YW5jZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZU1hY2hpbmUge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdGVzQ29uZmlnKSB7XHJcbiAgICAgICAgaW5zdGFuY2UgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3RhdGVzID0ge307XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaW5pdChzdGF0ZXNDb25maWcpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXQoc3RhdGVzQ29uZmlnKSB7XHJcbiAgICAgICAgc3RhdGVzQ29uZmlnLmZvckVhY2goKGNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5zdGFuY2UgPSBuZXcgY29uZmlnLmNsYXNzKCk7XHJcblxyXG4gICAgICAgICAgICBpbnN0YW5jZS5uYW1lID0gY29uZmlnLmNsYXNzLm5hbWU7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnRyYW5zaXRpb25zID0gY29uZmlnLnRyYW5zaXRpb25zO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zdGF0ZXNbaW5zdGFuY2UubmFtZV0gPSBpbnN0YW5jZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTdGF0ZVRvKG5leHRTdGF0ZU5hbWUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTdGF0ZSA9IHRoaXMuc3RhdGVzW25leHRTdGF0ZU5hbWVdO1xyXG5cclxuICAgICAgICAvKndoZW4gdGhlIG5leHQgc3RhdGUgc3RhcnRzIGl0IGJlY29tZXMgYWN0aXZlIGFuZCBpbiBjYXNlIGlmIGl0IGxpc3RlbnMgdGhlIHNhbWUgZXZlbnRcclxuICAgICAgICB0aGF0IGZpbmlzaGVkIHByZXZpb3VzIHN0YXRlIGFuZCBpcyBwcm9jZXNzZWQgbGF0ZXIgaW4gb2JzZXJ2YWJsZSBsb29wIGl0IHdpbGwgYmUgZmluaXNoZWRcclxuICAgICAgICBzdHJhaWdodCBhd2F5LiBzZXRUaW1lb3V0IGlzIGFkZGVkIHRvIHByZXZlbnQgaXQuKi9cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+ICh0aGlzLnN0YXRlc1tuZXh0U3RhdGVOYW1lXS5zdGFydCgpKSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldCBpbnN0YW5jZSgpIHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0xvYWR9IGZyb20gXCIuL2xvYWRcIjtcclxuaW1wb3J0IHtJZGxlfSBmcm9tIFwiLi9pZGxlXCI7XHJcbmltcG9ydCB7U3Bpbn0gZnJvbSBcIi4vc3BpblwiO1xyXG5pbXBvcnQge1dpbn0gZnJvbSBcIi4vd2luXCI7XHJcblxyXG4vKipcclxuICogQXJyYXkgb2YgT2JqZWN0cy4gRWFjaCBvZiB0aGVtIGNvbnRhaW5zIGNvbmZpZyBmb3IgZGlmZmVyZW50IHN0YXRlXHJcbiAqIE9iamVjdC5jbGFzcyBjbGFzcyBvZiBzdGF0ZVxyXG4gKiBPYmplY3QudHJhbnNpdGlvbnMgYXZhaWxhYmxlIHRyYW5zaXRpb25zIGZyb20gY3VycmVudCBzdGF0ZSB0byBuZXh0U3RhdGVcclxuICogT2JqZWN0LnRyYW5zaXRpb25zW2V2ZW50TmFtZV0gbmV4dFN0YXRlIHRoYXQgYmVjb21lcyBhY3RpdmUgYnkgZXZlbnQgd2l0aCBldmVudE5hbWVcclxuICovXHJcbmV4cG9ydCBjb25zdCBTdGF0ZXNDb25maWcgPSBbXHJcbiAgICB7Y2xhc3M6IExvYWQsIHRyYW5zaXRpb25zOiB7b25Mb2FkaW5nQ29tcGxldGU6IFwiSWRsZVwifX0sXHJcbiAgICB7Y2xhc3M6IElkbGUsIHRyYW5zaXRpb25zOiB7b25TcGluQnV0dG9uUHJlc3NlZDogXCJTcGluXCJ9fSxcclxuICAgIHtjbGFzczogU3BpbiwgdHJhbnNpdGlvbnM6IHtwbGF5V2luOiBcIldpblwiLCBwbGF5SWRsZTogXCJJZGxlXCIsfX0sXHJcbiAgICB7Y2xhc3M6IFdpbiwgdHJhbnNpdGlvbnM6IHtiZXRDaGFuZ2VkOiBcIklkbGVcIiwgb25TcGluQnV0dG9uUHJlc3NlZDogXCJTcGluXCJ9fVxyXG5dOyIsImltcG9ydCB7RGVmYXVsdFN0YXRlfSBmcm9tIFwiLi9kZWZhdWx0U3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW4gZXh0ZW5kcyBEZWZhdWx0U3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuYnkoe1xyXG4gICAgICAgICAgICBiZXRDaGFuZ2VkIDogdGhpcy5iZXRDaGFuZ2VkLFxyXG4gICAgICAgICAgICBvblNwaW5CdXR0b25QcmVzc2VkIDogdGhpcy5vblNwaW5CdXR0b25QcmVzc2VkXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmV0Q2hhbmdlZCgpe1xyXG4gICAgICAgIHRoaXMuZmluaXNoKFwiYmV0Q2hhbmdlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNwaW5CdXR0b25QcmVzc2VkKCl7XHJcbiAgICAgICAgdGhpcy5maW5pc2goXCJvblNwaW5CdXR0b25QcmVzc2VkXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsIi8qKlxyXG4gKiBjcmVhdGVzIHJhbmRvbSBpbnRlZ2VyIHZhbHVlIGJldHdlZW4gbWluIGFuZCBtYXhcclxuICogQHBhcmFtIHtudW1iZXJ9IG1pbiBtaW4gcG9zc2libGUgdmFsdWVcclxuICogQHBhcmFtIHtudW1iZXJ9IG1heCBtYXggcG9zc2libGUgdmFsdWVcclxuICogQHJldHVybnMge251bWJlcn1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5kb21JbnQobWluLCBtYXgpIHtcclxuICAgIGxldCByYW5kID0gbWluICsgTWF0aC5yYW5kb20oKSAqIChtYXggKyAxIC0gbWluKTtcclxuICAgIHJhbmQgPSBNYXRoLmZsb29yKHJhbmQpO1xyXG4gICAgcmV0dXJuIHJhbmQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB0aW1lQmV0d2VlbkZyYW1lcyA9IDE2LjY3OyIsImV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgZXh0ZW5kcyBQSVhJLkdyYXBoaWNzIHtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5saW5lU3R5bGUoMSwgMHgwMDAwMDAsIDEpO1xyXG4gICAgICAgIHRoaXMuYmVnaW5GaWxsKGNvbG9yKTtcclxuICAgICAgICB0aGlzLmRyYXdSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuZW5kRmlsbCgpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuL3JlY3RhbmdsZVwiO1xyXG5pbXBvcnQge29ic2VydmFibGVNaXhpbn0gZnJvbSBcIi4uL21haW4vb2JzZXJ2YWJsZU1peGluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luU2NyZWVuIGV4dGVuZHMgUElYSS5HcmFwaGljc3tcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuID0gbmV3IFJlY3RhbmdsZSh4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4uYWxwaGEgPSAwLjM7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gdGhpcy5jcmVhdGVNZXNzYWdlKHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2NyZWVuLCB0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuaGlkZVNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2luID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5ieSh7XHJcbiAgICAgICAgICAgIFwibm90aWZ5OnNlcnZlck1hbmFnZXIubmV3UmVzcG9uc2VcIjogdGhpcy51cGRhdGVDdXJyZW50V2luLFxyXG4gICAgICAgICAgICBcInN0YXRlQ2hhbmdlZFRvOldpblwiIDogdGhpcy5zaG93U2NyZWVuLFxyXG4gICAgICAgICAgICBcInN0YXRlQ29tcGxldGVkOldpblwiIDogdGhpcy5oaWRlU2NyZWVuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNZXNzYWdlICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBQSVhJLlRleHQoXCJZb3Ugd29uXCIpO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDM2LFxyXG4gICAgICAgICAgICBmaWxsOiBcIndoaXRlXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1lc3NhZ2UuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIG1lc3NhZ2UucG9zaXRpb24uc2V0KHggKyB3aWR0aC8yLCB5ICsgaGVpZ2h0LzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgc2VydmVyJ3MgcmVzdWx0IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy53aW5BbW91bnQgYW1vdW50IG9mIHdpbiBwb2ludHNcclxuICAgICAqL1xyXG4gICAgdXBkYXRlQ3VycmVudFdpbihjb25maWcpe1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdpbiA9IGNvbmZpZy53aW5BbW91bnQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlcyB3aW5TY3JlZW4gdmlzaWJsZVxyXG4gICAgICovXHJcbiAgICBzaG93U2NyZWVuICgpe1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnRleHQgPSBgWW91IHdvbiAke3RoaXMuY3VycmVudFdpbn0gISEhYDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoaWRlcyB3aW5TY3JlZW5cclxuICAgICAqL1xyXG4gICAgaGlkZVNjcmVlbiAoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9