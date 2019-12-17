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

// added few unused by program heavy images to make loading process more realistic.
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

var LoadingScreen = exports.LoadingScreen = function (_PIXI$Container) {
    _inherits(LoadingScreen, _PIXI$Container);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9VSS9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9iZXRMaW5lcy9iZXRMaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2JldExpbmVzL2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2xvYWRpbmdTY3JlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9tYWluL2dhbWVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9tYWluL29ic2VydmFibGVNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L21haW4vc2VydmVyTWFuYWdlci5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L21haW4vd2luU3ltYm9scy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3JlZWxzL2N1c3RvbVR3ZWVuLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvcmVlbC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3JlZWxzL3JlZWxzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zbG90LmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3BpbkJ1dHRvbi9zcGluQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3RhdGVzL2RlZmF1bHRTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3N0YXRlcy9pZGxlLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3RhdGVzL2xvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdGF0ZXMvc3Bpbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3N0YXRlcy9zdGF0ZU1hY2hpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zdGF0ZXMvc3RhdGVzQ29uZmlnLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc3RhdGVzL3dpbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3V0aWxzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvd2luU2NyZWVuL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3dpblNjcmVlbi93aW5TY3JlZW4uanMiXSwibmFtZXMiOlsiQnV0dG9uIiwieCIsInkiLCJidXR0b25UZXh0dXJlcyIsImNhbGxiYWNrIiwidGV4dHVyZXMiLCJpZGxlIiwiaWRsZVRleHR1cmUiLCJob3ZlclRleHR1cmUiLCJob3ZlciIsImRvd25UZXh0dXJlIiwiZG93biIsImRpc2FibGVkVGV4dHVyZSIsImRpc2FibGVkIiwid2lkdGgiLCJoZWlnaHQiLCJhbmNob3IiLCJzZXQiLCJwb3NpdGlvbiIsImludGVyYWN0aXZlIiwic2V0SGl0QXJlYSIsImFwcCIsInN0YWdlIiwiYWRkQ2hpbGQiLCJPYmplY3QiLCJhc3NpZ24iLCJvYnNlcnZhYmxlTWl4aW4iLCJ0ZXh0dXJlIiwicmFkaXVzIiwiaGl0QXJlYSIsIlBJWEkiLCJDaXJjbGUiLCJTcHJpdGUiLCJCZXRMaW5lcyIsImxpbmVQb2ludHMiLCJhZGRMaW5lUG9pbnRzIiwiYWxsTGluZXMiLCJhZGRMaW5lcyIsImN1cnJlbnRXaW5MaW5lcyIsImJ5IiwidXBkYXRlV2luTGluZXMiLCJzaG93V2luTGluZXMiLCJoaWRlV2luTGluZXMiLCJjb25maWciLCJnYW1lQ29uZmlnIiwiYmV0TGluZXMiLCJwb3NpdGlvbnMiLCJyZWVsc1Bvc2l0aW9uIiwidG9wT2Zmc2V0IiwicmVlbHMiLCJzbG90TGVuZ3RoIiwibGluZVBvc2l0aW9ucyIsImkiLCJsZW5ndGgiLCJjdXJCZXRMaW5lIiwiY3VyTGluZVBvaW50cyIsImoiLCJ4UG9pbnQiLCJyZWVsc1BvaW50cyIsInlQb2ludCIsInN5bWJvbHNQb2ludCIsInB1c2giLCJiZXRMaW5lIiwiTGluZSIsIndpbkxpbmVzIiwiY3VyTGluZSIsInNob3dXaW5MaW5lIiwiZm9yRWFjaCIsImxpbmUiLCJoaWRlV2luTGluZSIsIkNvbnRhaW5lciIsImFyckNvbmZpZyIsImxpbmVTdHlsZSIsImNyZWF0ZUxpbmVCeVBvaW50cyIsIm1vdmVUbyIsImN1clBvaW50Q29uZmlnIiwibGluZVRvIiwidmlzaWJsZSIsIkdyYXBoaWNzIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2aWV3Iiwic3RhdGVIYW5kbGVyIiwiU3RhdGVNYWNoaW5lIiwiU3RhdGVzQ29uZmlnIiwiTG9hZGVyIiwic2hhcmVkIiwiYWRkIiwib24iLCJsb2FkUHJvZ3Jlc3NIYW5kbGVyIiwibG9hZCIsInNldHVwIiwibG9hZGluZ1NjcmVlbiIsIkxvYWRpbmdTY3JlZW4iLCJsb2FkZXIiLCJ1cGRhdGUiLCJwcm9ncmVzcyIsImJhY2tncm91bmQiLCJzbG90IiwicmVuZGVyTG9vcCIsImV2ZW50cyIsImZpcmVFdmVudCIsInJlc291cmNlcyIsIlNsb3QiLCJ0aWNrZXIiLCJnYW1lTG9vcCIsImRlbHRhIiwiY29sb3IiLCJzY3JlZW4iLCJSZWN0YW5nbGUiLCJhbHBoYSIsIm1lc3NhZ2UiLCJjcmVhdGVNZXNzYWdlIiwiYmxhY2tMaW5lIiwiZ3JlZW5MaW5lIiwiaGlkZUFsbCIsIlRleHQiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJwZXJjZW50IiwidGV4dCIsIk1hdGgiLCJmbG9vciIsInJlZWxzZXRzIiwiZ2FtZVNpemUiLCJyb3dzIiwibGVmdE9mZnNldCIsImxlZnQiLCJzeW1ib2xEaW1lbnNpb25zIiwidmlzaWJsZVN5bWJOdW0iLCJzeW1ib2xzTnVtYmVyIiwic3ltYm9sU3BlZWQiLCJwYXJhbXMiLCJldmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJhZGRMaXN0ZW5lciIsImFyZ3MiLCJTZXJ2ZXJNYW5hZ2VyIiwicmVlbHNldHNMaXN0IiwicmVlbHNMZW5ndGgiLCJzdGFydCIsImJldFNpemUiLCJiZXRTZWxlY3RvciIsImdldEN1ckJldFNpemUiLCJjdXJyZW50UmVlbHNldCIsInNlbGVjdFJlZWxzZXQiLCJzcGluUmVzdWx0Iiwic2VsZWN0UG9zaXRpb25zIiwiZ2VuZXJhdGVkUmVzcG9uc2UiLCJjaGVja0JldExpbmVzIiwic2V0VGltZW91dCIsImluZGV4IiwiY3VyU2V0Iiwic3RhcnRQb2ludCIsImN1clJlZWwiLCJ3aW5Qb2ludHMiLCJ3aW5TeW1ib2xzIiwicmVzcG9uc2UiLCJjdXJyZW50TGluZSIsInN5bWJzTWF0Y2hlZCIsInBvc2l0aW9uc09uUmVlbHMiLCJnZW5lcmF0ZWRMaW5lIiwibWFwIiwicmVlbCIsImN1ckluZGV4Iiwic2xpY2UiLCJ3aW5BbW91bnQiLCJXaW5TeW1ib2xzIiwiY3JlYXRlU3ltYm9sc0NvbmZpZyIsInNlcnZlclJlc3VsdCIsIm1hdHJpeCIsImNyZWF0ZVRlbXBsYXRlTWF0cml4Iiwic3ltYkluZGV4IiwidGVtcGxhdGUiLCJyb3dzTnVtIiwicmVlbHNOdW0iLCJDdXN0b21Ud2VlbiIsIm9iaiIsInByb3BlcnR5TmFtZSIsImVuZCIsInBlcmlvZCIsImdldFNwZWVkIiwidXBkYXRlUmVxdWlyZWQiLCJkaXN0YW5jZSIsInNwZWVkIiwib25Db21wbGV0ZSIsIm51bU9mRnJhbWVzIiwidGltZUJldHdlZW5GcmFtZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIlJlZWwiLCJwb3NpdGlvbkNvbmZpZyIsInN5bWJvbHMiLCJhZGRTeW1ib2xzIiwic3ltYm9sc0JlZm9yZVJlc3VsdCIsInJlc3VsdFN5bWJvbHMiLCJjdXJSZXN1bHRTeW1iSW5kZXgiLCJzZXJ2ZXJEYXRhUmVjZWl2ZWQiLCJmb3JjZWRTdG9wUmVxdWlyZWQiLCJjdXJTeW1iIiwicG9zc2libGVTeW1TcmMiLCJzeW1ib2wiLCJTeW1ib2wiLCJJbmZpbml0eSIsImFsbCIsInN5bSIsInN0YXJ0U3BpbiIsInRoZW4iLCJkb1NwaW4iLCJiZXRSZXN1bHQiLCJzeW1ic0JmUmVzdWx0IiwicmVzb2x2ZUNoYWluIiwidXNlUmFuZG9tU3ltYiIsIm1vdmVPbmVTbG90IiwiZW5kU3BpbiIsIm9uU3Bpbk92ZXIiLCJsYXN0SW5kZXgiLCJsYXN0U3ltYm9sIiwibmV3SW5kZXgiLCJzZXROZXdTeW1ib2wiLCJ1bnNoaWZ0IiwicG9wIiwicGxheVdpbkFuaW1hdGlvbiIsInBsYXlMb3NzQW5pbWF0aW9uIiwicGxheUlkbGUiLCJSZWVscyIsImFsbFJlZWxzIiwiYWRkUmVlbHMiLCJtYXNrIiwiYWRkTWFzayIsIndpbkFuaW1SZXF1aXJlZCIsInJlc3VsdENvbmZpZyIsInNlcnZlclJlc3BvbnNlUmVjZWl2ZWQiLCJhZGRXaW5IYW5kbGVyVmFsdWVzIiwiZm9yY2VkU3RvcCIsImN1clJlZWxQb2ludHMiLCJyZWVsc01hc2siLCJiZWdpbkZpbGwiLCJkcmF3UmVjdCIsInN0YXJ0UmVlbHNTcGluIiwic2VydmVyUmVzcG9uc2VSZXNvbHZlIiwic3RhcnRTdG9wU2VxdWVuY2UiLCJvblNwaW5Db21wbGV0ZSIsInN5bWJvbHNSZXN1bHRDb25maWciLCJjdXJSZXN1bHRSZWVsIiwic2hvd1dpblN5bWIiLCJ0ZXh0dXJlU3JjIiwidHlwZSIsInN0YXJ0U2NhbGUiLCJzY2FsZSIsIl94IiwiZW5kU2NhbGUiLCJ0d2VlbiIsImJvdW5jZVR3ZWVuIiwic2NhbGVUd2VlbiIsInBsYXkiLCJzY2FsZVVwIiwic2NhbGVEb3duIiwiYmluZCIsInZhbHVlIiwiU2VsZWN0b3IiLCJsZWZ0U3JjIiwicmlnaHRTcmMiLCJwb3NzaWJsZVZhbHVlcyIsIm1pbnVzQnV0dG9uIiwibWludXNPbmUiLCJwbHVzQnV0dG9uIiwicGx1c09uZSIsImN1cnJlbnRWYWx1ZSIsIm51bWJlciIsImFkZE51bWJlciIsImRpc2FibGVCdXR0b25zIiwiYnV0dG9uRGlzYWJsZUNoZWNrIiwiZGlzYWJsZSIsImVuYWJsZSIsInNwaW5CdXR0b24iLCJTcGluQnV0dG9uIiwic3BpbkJ1dHRvblNyYyIsIndpblNjcmVlbiIsIldpblNjcmVlbiIsImxlZnRTZWxlY3RvciIsInJpZ2h0U2VsZWN0b3IiLCJudW1iZXJzIiwic2VydmVyTWFuYWdlciIsIm1ha2VTcGluIiwiY3VycmVudFN0YXRlIiwibmFtZSIsIkRlZmF1bHRTdGF0ZSIsImFjdGl2ZSIsInRyYW5zaXRpb25zIiwic3RhdGVNYXNoaW5lIiwiaW5zdGFuY2UiLCJjb25zb2xlIiwibG9nIiwibmV4dCIsImNoYW5nZVN0YXRlVG8iLCJJZGxlIiwib25TcGluQnV0dG9uUHJlc3NlZCIsImZpbmlzaCIsIkxvYWQiLCJvbkxvYWRpbmdDb21wbGV0ZSIsIlNwaW4iLCJwbGF5V2luIiwic3RhdGVzQ29uZmlnIiwic3RhdGVzIiwiaW5pdCIsImNsYXNzIiwibmV4dFN0YXRlTmFtZSIsIldpbiIsImJldENoYW5nZWQiLCJyYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJyYW5kIiwicmFuZG9tIiwiZW5kRmlsbCIsImhpZGVTY3JlZW4iLCJjdXJyZW50V2luIiwidXBkYXRlQ3VycmVudFdpbiIsInNob3dTY3JlZW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1C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QUFmO0FBQ0EsaUJBQUttQyxPQUFMLENBQWFXLElBQWIsZ0JBQStCLEtBQUtzTSxVQUFwQztBQUVIOztBQUVEOzs7Ozs7cUNBR2M7QUFDVixpQkFBS3BQLE9BQUwsR0FBZSxLQUFmO0FBQ0g7Ozs7RUExRDBCL0MsS0FBS2dELFEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qYXZhc2NyaXB0L2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHt0ZXh0dXJlc30gZnJvbSBcIi4uL2luZGV4LmpzXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi4vbWFpbi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBQSVhJLlNwcml0ZXtcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGJ1dHRvblRleHR1cmVzLCBjYWxsYmFjayl7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZXNbYnV0dG9uVGV4dHVyZXMuaWRsZV0pO1xyXG5cclxuICAgICAgICB0aGlzLmlkbGVUZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuaWRsZTtcclxuICAgICAgICB0aGlzLmhvdmVyVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmhvdmVyO1xyXG4gICAgICAgIHRoaXMuZG93blRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5kb3duO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWRUZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuZGlzYWJsZWQ7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSAxMDA7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0SGl0QXJlYSgxMjUpO1xyXG5cclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtb3VzZW92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5kaXNhYmxlZCA/IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXSA6IHRleHR1cmVzW3RoaXMuaG92ZXJUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZW91dCgpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmRpc2FibGVkID8gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdIDogdGV4dHVyZXNbdGhpcy5pZGxlVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2Vkb3duKCkge1xyXG4gICAgICAgIGlmKHRoaXMuZGlzYWJsZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5kb3duVGV4dHVyZV07XHJcbiAgICAgICAgICAgIHRoaXMuY2FsbGJhY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2V1cCgpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmRpc2FibGVkID8gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdIDogdGV4dHVyZXNbdGhpcy5ob3ZlclRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIGVuYWJsZSgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5pZGxlVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgaGl0QXJlYSByYWRpdXNcclxuICAgICAqL1xyXG4gICAgc2V0SGl0QXJlYSAocmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuQ2lyY2xlKDAsIDAsIHJhZGl1cyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0xpbmV9IGZyb20gXCIuL2xpbmVcIjtcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi4vbWFpbi9nYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi4vbWFpbi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCZXRMaW5lcyBleHRlbmRzIFBJWEkuQ29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuXHJcbiAgICAgICAgdGhpcy5saW5lUG9pbnRzID0gdGhpcy5hZGRMaW5lUG9pbnRzKCk7XHJcbiAgICAgICAgdGhpcy5hbGxMaW5lcyA9IHRoaXMuYWRkTGluZXModGhpcy5saW5lUG9pbnRzKTtcclxuXHJcbiAgICAgICAgdGhpcy5jdXJyZW50V2luTGluZXMgPSBbXTtcclxuXHJcbiAgICAgICAgdGhpcy5ieSh7XHJcbiAgICAgICAgICAgIFwibm90aWZ5OnNlcnZlck1hbmFnZXIubmV3UmVzcG9uc2VcIjogdGhpcy51cGRhdGVXaW5MaW5lcyxcclxuICAgICAgICAgICAgXCJzdGF0ZUNoYW5nZWRUbzpXaW5cIjogdGhpcy5zaG93V2luTGluZXMsXHJcbiAgICAgICAgICAgIFwic3RhdGVDb21wbGV0ZWQ6V2luXCI6IHRoaXMuaGlkZVdpbkxpbmVzXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSBsaW5lIHBvaW50cyBkZXBlbmRzIG9uIGdhbWVDb25maWcgcGFyYW1zIGFuZCBhZGQgaXQgdG8gYXJyYXlcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gYXJyYXkgd2l0aCBsaW5lIHBvaW50c1xyXG4gICAgICovXHJcbiAgICBhZGRMaW5lUG9pbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGdhbWVDb25maWcpO1xyXG4gICAgICAgIGNvbnN0IGJldExpbmVzID0gY29uZmlnLmJldExpbmVzO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGNvbmZpZy5yZWVsc1Bvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IHRvcE9mZnNldCA9IHBvc2l0aW9ucy50b3BPZmZzZXQgKyBwb3NpdGlvbnMucmVlbHMuc2xvdExlbmd0aCAvIDI7XHJcblxyXG4gICAgICAgIGNvbnN0IGxpbmVQb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiZXRMaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJCZXRMaW5lID0gYmV0TGluZXNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGN1ckxpbmVQb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY3VyQmV0TGluZS5sZW5ndGg7IGorKykge1xyXG5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHhQb2ludCA9IHBvc2l0aW9ucy5yZWVsc1BvaW50c1tqXS54O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeVBvaW50ID0gcG9zaXRpb25zLnN5bWJvbHNQb2ludFtjdXJCZXRMaW5lW2pdXS55ICsgdG9wT2Zmc2V0O1xyXG5cclxuICAgICAgICAgICAgICAgIGN1ckxpbmVQb2ludHMucHVzaCh7eDogeFBvaW50LCB5OiB5UG9pbnR9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGluZVBvc2l0aW9ucy5wdXNoKGN1ckxpbmVQb2ludHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpbmVQb3NpdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgbGluZXMgdXNpbmcgbGluZXMgcG9pbnRzIGFuZCBhZGQgaXQgdG8gYXJyYXlcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGxpbmVQb2ludHMgYXJyYXkgd2l0aCBwb2ludHMgZm9yIGxpbmVzXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFycmF5IHdpdGggbGluZXNcclxuICAgICAqL1xyXG4gICAgYWRkTGluZXMobGluZVBvaW50cykge1xyXG4gICAgICAgIGNvbnN0IGFsbExpbmVzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSBsaW5lUG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiZXRMaW5lID0gbmV3IExpbmUoY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIGFsbExpbmVzLnB1c2goYmV0TGluZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoYmV0TGluZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWxsTGluZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIHNlcnZlcidzIHJlc3VsdCBjb25maWdcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNvbmZpZy53aW5MaW5lcyBhcnJheSB3aXRoIHdpbiBsaW5lc1xyXG4gICAgICovXHJcbiAgICB1cGRhdGVXaW5MaW5lcyhjb25maWcpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXaW5MaW5lcyA9IGNvbmZpZy53aW5MaW5lcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqICBzaG93IGN1cnJlbnQgd2luIGxpbmVzXHJcbiAgICAgKi9cclxuICAgIHNob3dXaW5MaW5lcygpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY3VycmVudFdpbkxpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1ckxpbmUgPSB0aGlzLmN1cnJlbnRXaW5MaW5lc1tpXTtcclxuICAgICAgICAgICAgdGhpcy5hbGxMaW5lc1tjdXJMaW5lXS5zaG93V2luTGluZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBkZWZhdWx0IHBhcmFtcyBmb3IgYWxsIGxpbmVzXHJcbiAgICAgKi9cclxuICAgIGhpZGVXaW5MaW5lcygpIHtcclxuICAgICAgICB0aGlzLmFsbExpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcclxuICAgICAgICAgICAgbGluZS5oaWRlV2luTGluZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIExpbmUgZXh0ZW5kcyBQSVhJLkdyYXBoaWNzIHtcclxuICAgIGNvbnN0cnVjdG9yKGFyckNvbmZpZykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubGluZVN0eWxlKDMsIDB4MDBmZjAwLCAwLjUpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTGluZUJ5UG9pbnRzKGFyckNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5oaWRlV2luTGluZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlcyBsaW5lIHVzaW5nIHgseSBwb2ludHMgZnJvbSBhcnJheVxyXG4gICAgICogQHBhcmFtIHthcnJheX0gYXJyQ29uZmlnIEFycmF5PHt4OiBudW1iZXIsIHk6bnVtYmVyfT4gYXJyYXkgd2l0aCB4LHkgcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUxpbmVCeVBvaW50cyhhcnJDb25maWcpIHtcclxuICAgICAgICB0aGlzLm1vdmVUbyhhcnJDb25maWdbMF0ueCwgYXJyQ29uZmlnWzBdLnkpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGFyckNvbmZpZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJQb2ludENvbmZpZyA9IGFyckNvbmZpZ1tpXTtcclxuICAgICAgICAgICAgdGhpcy5saW5lVG8oY3VyUG9pbnRDb25maWcueCwgY3VyUG9pbnRDb25maWcueSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWFrZXMgbGluZSB2aXNpYmxlXHJcbiAgICAgKi9cclxuICAgIHNob3dXaW5MaW5lKCkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoaWRlcyBsaW5lXHJcbiAgICAgKi9cclxuICAgIGhpZGVXaW5MaW5lKCkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtTbG90fSBmcm9tIFwiLi9zbG90XCI7XHJcbmltcG9ydCB7U3RhdGVNYWNoaW5lfSBmcm9tIFwiLi9zdGF0ZXMvc3RhdGVNYWNoaW5lXCI7XHJcbmltcG9ydCB7U3RhdGVzQ29uZmlnfSBmcm9tIFwiLi9zdGF0ZXMvc3RhdGVzQ29uZmlnXCI7XHJcbmltcG9ydCB7TG9hZGluZ1NjcmVlbn0gZnJvbSBcIi4vbG9hZGluZ1NjcmVlblwiO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XHJcblxyXG5leHBvcnQgY29uc3Qgc3RhdGVIYW5kbGVyID0gbmV3IFN0YXRlTWFjaGluZShTdGF0ZXNDb25maWcpO1xyXG5cclxuLy8gYWRkZWQgZmV3IHVudXNlZCBieSBwcm9ncmFtIGhlYXZ5IGltYWdlcyB0byBtYWtlIGxvYWRpbmcgcHJvY2VzcyBtb3JlIHJlYWxpc3RpYy5cclxuUElYSS5Mb2FkZXIuc2hhcmVkXHJcbiAgICAuYWRkKFwiLi9pbWFnZXMvc2hlZXQuanNvblwiKVxyXG4gICAgLmFkZChcIi4vaW1hZ2VzLzEuanBnXCIpXHJcbiAgICAuYWRkKFwiLi9pbWFnZXMvMi5qcGdcIilcclxuICAgIC5hZGQoXCIuL2ltYWdlcy8zLmpwZ1wiKVxyXG4gICAgLmFkZChcIi4vaW1hZ2VzLzQuanBnXCIpXHJcbiAgICAuYWRkKFwiLi9pbWFnZXMvNS5qcGdcIilcclxuICAgIC5vbihcInByb2dyZXNzXCIsIGxvYWRQcm9ncmVzc0hhbmRsZXIpXHJcbiAgICAubG9hZChzZXR1cCk7XHJcblxyXG5sZXQgbG9hZGluZ1NjcmVlbiA9IG5ldyBMb2FkaW5nU2NyZWVuKDAsIDAsIDgwMCwgNTAwLCAweDY5Njk2OSk7XHJcblxyXG5mdW5jdGlvbiBsb2FkUHJvZ3Jlc3NIYW5kbGVyKGxvYWRlcikge1xyXG4gICAgbG9hZGluZ1NjcmVlbi51cGRhdGUobG9hZGVyLnByb2dyZXNzKTtcclxufVxyXG5cclxuZXhwb3J0IGxldCB0ZXh0dXJlcyxcclxuICAgIGJhY2tncm91bmQsXHJcbiAgICBzbG90O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckxvb3AgPSBbXTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgLy9yZWxlYXNpbmcgbG9hZGluZyBzdGF0ZVxyXG4gICAgZXZlbnRzLmZpcmVFdmVudChcIm9uTG9hZGluZ0NvbXBsZXRlXCIpO1xyXG5cclxuICAgIHRleHR1cmVzID0gUElYSS5Mb2FkZXIuc2hhcmVkLnJlc291cmNlc1tcIi4vaW1hZ2VzL3NoZWV0Lmpzb25cIl0udGV4dHVyZXM7XHJcbiAgICBiYWNrZ3JvdW5kID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmVzW1wiYmFja2dyb3VuZC5wbmdcIl0pO1xyXG4gICAgYXBwLnN0YWdlLmFkZENoaWxkKGJhY2tncm91bmQpO1xyXG5cclxuICAgIHNsb3QgPSBuZXcgU2xvdCgpO1xyXG4gICAgYXBwLnRpY2tlci5hZGQoZGVsdGEgPT4gZ2FtZUxvb3AoZGVsdGEpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FtZUxvb3AoZGVsdGEpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVuZGVyTG9vcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHJlbmRlckxvb3BbaV0udXBkYXRlKGRlbHRhKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi9tYWluL29ic2VydmFibGVNaXhpblwiO1xyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vd2luU2NyZWVuL3JlY3RhbmdsZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExvYWRpbmdTY3JlZW4gZXh0ZW5kcyBQSVhJLkNvbnRhaW5lciB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuLmFscGhhID0gMC41O1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuY3JlYXRlTWVzc2FnZSh4LCB5LCB3aWR0aCwgNDAwKTtcclxuICAgICAgICB0aGlzLmJsYWNrTGluZSA9IG5ldyBSZWN0YW5nbGUoMTUwLCAyNTAsIDUwMCwgMzAsIDB4MDAwMDAwKTtcclxuICAgICAgICB0aGlzLmdyZWVuTGluZSA9IG5ldyBSZWN0YW5nbGUoMTUwLCAyNTAsIDUwMCwgMzAsIDB4MjI5OTU0KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMuc2NyZWVuLCB0aGlzLm1lc3NhZ2UsIHRoaXMuYmxhY2tMaW5lLCB0aGlzLmdyZWVuTGluZSk7XHJcblxyXG4gICAgICAgIHRoaXMudXBkYXRlKDApO1xyXG4gICAgICAgIHRoaXMuYnkoe1wic3RhdGVDb21wbGV0ZWQ6TG9hZFwiIDogdGhpcy5oaWRlQWxsfSk7XHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWVzc2FnZSAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgUElYSS5UZXh0KFwiTG9hZGluZy4uLlwiKTtcclxuICAgICAgICBtZXNzYWdlLnN0eWxlID0ge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXNzYWdlLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICBtZXNzYWdlLnBvc2l0aW9uLnNldCh4ICsgd2lkdGgvMiwgeSArIGhlaWdodC8yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKHBlcmNlbnQpe1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS50ZXh0ID0gYExvYWRpbmcgJHtNYXRoLmZsb29yKHBlcmNlbnQpfSVgO1xyXG4gICAgICAgIHRoaXMuZ3JlZW5MaW5lLndpZHRoID0gcGVyY2VudCAqIDU7XHJcbiAgICB9XHJcblxyXG4gICAgaGlkZUFsbCgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjb25zdCBnYW1lQ29uZmlnICA9IHtcclxuICAgIGJldExpbmVzIDogW1xyXG4gICAgICAgIFswLDAsMCwwLDBdLFxyXG4gICAgICAgIFsxLDEsMSwxLDFdLFxyXG4gICAgICAgIFsyLDIsMiwyLDJdLFxyXG4gICAgICAgIFswLDEsMiwxLDBdLFxyXG4gICAgICAgIFsyLDEsMCwxLDJdLFxyXG4gICAgICAgIFsxLDAsMSwwLDFdLFxyXG4gICAgICAgIFsxLDIsMSwyLDFdXHJcbiAgICBdLFxyXG5cclxuXHJcbiAgICByZWVsc2V0cyA6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsMCwyLDAsMiwwLDEsMCwyXSxcclxuICAgICAgICAgICAgICAgIFswLDAsMiwxLDAsMSwyLDAsMl0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDIsMiwyLDAsMSwwLDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsMSwwLDAsMiwwLDAsMSwyXSxcclxuICAgICAgICAgICAgICAgIFswLDAsMSwxLDAsMCwyLDIsMV1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsMiwyLDEsMCwwLDIsMSwyXSxcclxuICAgICAgICAgICAgICAgIFsyLDIsMSwxLDAsMSwyLDAsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDAsMiwxLDAsMiwwLDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsMSwxLDIsMCwwLDEsMCwyXSxcclxuICAgICAgICAgICAgICAgIFsxLDAsMiwyLDIsMSwwLDIsMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsMiwwLDEsMCwxLDIsMSwyXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMCwwLDIsMCwwLDEsMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwxLDAsMiwxLDAsMiwwLDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsMCwyLDIsMiwxLDAsMiwwXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMCwwLDIsMCwwLDEsMl1cclxuICAgICAgICAgICAgXVxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgZ2FtZVNpemUgOiB7XHJcbiAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICByb3dzOiAzLFxyXG4gICAgICAgIHJlZWxzOiA1XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZWxzUG9zaXRpb24gOiB7XHJcbiAgICAgICAgdG9wT2Zmc2V0IDogMTAsXHJcbiAgICAgICAgbGVmdE9mZnNldCA6IDE1LFxyXG5cclxuICAgICAgICByZWVscyA6IHtcclxuICAgICAgICAgICAgbGVmdDogODAsXHJcbiAgICAgICAgICAgIHNsb3RMZW5ndGg6IDEzNCxcclxuICAgICAgICAgICAgc3ltYm9sRGltZW5zaW9uczoge3dpZHRoOiAxMTAsIGhlaWdodDogMTEwfSxcclxuICAgICAgICAgICAgdmlzaWJsZVN5bWJOdW06IDMsXHJcbiAgICAgICAgICAgIHN5bWJvbHNOdW1iZXI6IDQsXHJcbiAgICAgICAgICAgIHN5bWJvbFNwZWVkIDogMTYwXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgcmVlbHNQb2ludHMgOiBbXHJcbiAgICAgICAgICAgIHt4IDogODAsIHkgOiAxMzQvMn0sXHJcbiAgICAgICAgICAgIHt4IDogODAgKiAzLCB5IDogMTM0LzJ9LFxyXG4gICAgICAgICAgICB7eCA6IDgwICogNSwgeSA6IDEzNC8yfSxcclxuICAgICAgICAgICAge3ggOiA4MCAqIDcsIHkgOiAxMzQvMn0sXHJcbiAgICAgICAgICAgIHt4IDogODAgKiA5LCB5IDogMTM0LzJ9XHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgc3ltYm9sc1BvaW50IDogW1xyXG4gICAgICAgICAgICB7eCA6IDAsIHkgOiAwfSxcclxuICAgICAgICAgICAge3ggOiAwLCB5IDogMTM0fSxcclxuICAgICAgICAgICAge3ggOiAwLCB5IDogMTM0ICogMn0sXHJcbiAgICAgICAgICAgIHt4IDogMCwgeSA6IDEzNCAqIDN9LFxyXG5cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5cclxuXHJcbn07IiwiLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXHJcbmV4cG9ydCBjb25zdCBvYnNlcnZhYmxlTWl4aW4gPSB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcGFyYW1zIHtPYmplY3QuPHN0cmluZywgZnVuY3Rpb24+fVxyXG4gICAgICovXHJcbiAgICBieSA6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICBpZiggIXRoaXMuZXZlbnRIYW5kbGVycyApe1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSB7fTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZvciggbGV0IGV2ZW50TmFtZSBpbiBwYXJhbXMpIHtcclxuICAgICAgICAgICAgaWYoIHBhcmFtcy5oYXNPd25Qcm9wZXJ0eShldmVudE5hbWUpICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCAhdGhpcy5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5hZGRMaXN0ZW5lcihldmVudE5hbWUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdID0gcGFyYW1zW2V2ZW50TmFtZV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhcmdzIGFycmF5IHdpdGggYXJndW1lbnRzXHJcbiAgICAgKi9cclxuICAgIGZpcmVFdmVudCA6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgLi4uYXJncyl7XHJcbiAgICAgICAgZXZlbnRzLmZpcmVFdmVudChldmVudE5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCB7cmFuZG9tSW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHNsb3QpIHtcclxuICAgICAgICB0aGlzLnJlZWxzZXRzTGlzdCA9IGdhbWVDb25maWcucmVlbHNldHM7XHJcbiAgICAgICAgdGhpcy5iZXRMaW5lcyA9IGdhbWVDb25maWcuYmV0TGluZXM7XHJcbiAgICAgICAgdGhpcy5yZWVsc0xlbmd0aCA9IGdhbWVDb25maWcuZ2FtZVNpemUucm93cztcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG4gICAgICAgIHRoaXMuYnkoe1wic3RhdGVDaGFuZ2VkVG86U3BpblwiOiB0aGlzLnN0YXJ0fSk7XHJcblxyXG4gICAgICAgIHRoaXMuc2xvdCA9IHNsb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1cG9uIHJlcXVlc3QgZnJvbSBjbGllbnQgY3JlYXRlcyBzcGluL2JldCByZXN1bHQgYW5kIGluZm9ybSB0aGUgY2xpZW50XHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNvbnN0IGJldFNpemUgPSB0aGlzLnNsb3QuYmV0U2VsZWN0b3IuZ2V0Q3VyQmV0U2l6ZSgpO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSZWVsc2V0ID0gdGhpcy5zZWxlY3RSZWVsc2V0KHRoaXMucmVlbHNldHNMaXN0KTtcclxuICAgICAgICBjb25zdCBzcGluUmVzdWx0ID0gdGhpcy5zZWxlY3RQb3NpdGlvbnMoY3VycmVudFJlZWxzZXQpO1xyXG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZFJlc3BvbnNlID0gdGhpcy5jaGVja0JldExpbmVzKHNwaW5SZXN1bHQsIGJldFNpemUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVFdmVudChcIm5vdGlmeTpzZXJ2ZXJNYW5hZ2VyLm5ld1Jlc3BvbnNlXCIsIGdlbmVyYXRlZFJlc3BvbnNlKTtcclxuICAgICAgICB9LCAxMDAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByYW5kb21seSBzZWxlY3QgcmVlbHNldCBmcm9tIHJlZWxzZXRzTGlzdFxyXG4gICAgICogQHBhcmFtIHthcnJheX0gcmVlbHNldHNMaXN0IGFycmF5IHdpdGggcmVlbHNldHNcclxuICAgICAqIEByZXR1cm5zIHthcnJheX0gc2VsZWN0ZWQgcmVlbHNldFxyXG4gICAgICovXHJcbiAgICBzZWxlY3RSZWVsc2V0KHJlZWxzZXRzTGlzdCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gcmFuZG9tSW50KDAsIHJlZWxzZXRzTGlzdC5sZW5ndGggLSAxKTtcclxuICAgICAgICByZXR1cm4gcmVlbHNldHNMaXN0W2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJhbmRvbWx5IHNlbGVjdHMgc3RhcnQgcG9zaXRpb25zIG9uIGVhY2ggcmVlbCBhbmQgZ2VuZXJhdGUgbmV3IGFycmF5IHdpdGggbmV4dCAzIHN5bWJvbHNcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGN1cnJlbnRSZWVsc2V0IGFycmF5IHdpdGggcG9zc2libGUgdmFsdWVzIGZvciBlYWNoIHJlZWxcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gMmQgYXJyYXkgd2l0aCBzcGluIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBzZWxlY3RQb3NpdGlvbnMoY3VycmVudFJlZWxzZXQpIHtcclxuICAgICAgICBjb25zdCBzcGluUmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFJlZWxzZXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyU2V0ID0gY3VycmVudFJlZWxzZXRbaV07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvaW50ID0gcmFuZG9tSW50KDAsIGN1clNldC5sZW5ndGggLSB0aGlzLnJlZWxzTGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgY3VyUmVlbCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnJlZWxzTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGN1clJlZWwucHVzaChjdXJTZXRbc3RhcnRQb2ludCArIGpdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3BpblJlc3VsdC5wdXNoKGN1clJlZWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3BpblJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRlcGVuZHMgb24gc3BpbiByZXN1bHQgY2hlY2sgYmV0IGxpbmVzIGFuZCBnZW5lcmF0ZXMgcmVzdWx0IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHthcnJheX0gc3BpblJlc3VsdCB0d28tbGV2ZWxzIGFycmF5IHdpdGggc3BpbiByZXN1bHRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBiZXRTaXplIHdpbiBwb2ludHMgbXVsdGlwbGllclxyXG4gICAgICogQHJldHVybnMge29iamVjdH0gcmVzdWx0Q29uZmlnIHJlc3VsdCBjb25maWd1cmF0aW9uIG9mIGN1cnJlbnQgYmV0XHJcbiAgICAgKiAgICAgICAgICB7bnVtYmVyfSByZXN1bHRDb25maWcud2luQW1vdW50IGFtb3VudCBvZiB3aW4gcG9pbnRcclxuICAgICAqICAgICAgICAgIHthcnJheX0gcmVzdWx0Q29uZmlnLndpbkxpbmVzIGFycmF5IHdpdGggd2luIGJldCBsaW5lc1xyXG4gICAgICogICAgICAgICAge2FycmF5fSByZXN1bHRDb25maWcud2luU3ltYm9scyBhcnJheSB3aXRoIHdpbiBzeW1ib2xzXHJcbiAgICAgKiAgICAgICAgICB7YXJyYXl9IHJlc3VsdENvbmZpZy5zcGluUmVzdWx0IDJkIGFycmF5IHdpdGggc3BpbiByZXN1bHRcclxuICAgICAqL1xyXG4gICAgY2hlY2tCZXRMaW5lcyhzcGluUmVzdWx0LCBiZXRTaXplKSB7XHJcbiAgICAgICAgbGV0IHdpblBvaW50cyA9IDA7XHJcbiAgICAgICAgY29uc3Qgd2luU3ltYm9scyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHdpbkxpbmVzID0gW107XHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSB7fTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmJldExpbmVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRMaW5lID0gdGhpcy5iZXRMaW5lc1tpXTtcclxuICAgICAgICAgICAgbGV0IHN5bWJzTWF0Y2hlZCA9IDE7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnNPblJlZWxzID0gW107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0ZWRMaW5lID0gc3BpblJlc3VsdC5tYXAoKHJlZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1ckluZGV4ID0gY3VycmVudExpbmVbaV07XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNPblJlZWxzLnB1c2goY3VySW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlZWxbY3VySW5kZXhdO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZ2VuZXJhdGVkTGluZS5sZW5ndGggLSAxOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChnZW5lcmF0ZWRMaW5lW2pdID09PSBnZW5lcmF0ZWRMaW5lW2ogKyAxXSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzeW1ic01hdGNoZWQgKz0gMTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoc3ltYnNNYXRjaGVkID4gMikge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpblN5bWJvbHMucHVzaChwb3NpdGlvbnNPblJlZWxzLnNsaWNlKDAsIHN5bWJzTWF0Y2hlZCkpO1xyXG4gICAgICAgICAgICAgICAgd2luTGluZXMucHVzaChpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3ltYnNNYXRjaGVkID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luUG9pbnRzICs9IDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzeW1ic01hdGNoZWQgPT09IDQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMzA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHN5bWJzTWF0Y2hlZCA9PT0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3BvbnNlLndpbkFtb3VudCA9IHdpblBvaW50cyAqIGJldFNpemU7XHJcbiAgICAgICAgcmVzcG9uc2Uud2luTGluZXMgPSB3aW5MaW5lcztcclxuICAgICAgICByZXNwb25zZS53aW5TeW1ib2xzID0gd2luU3ltYm9scztcclxuICAgICAgICByZXNwb25zZS5zcGluUmVzdWx0ID0gc3BpblJlc3VsdDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Z2FtZUNvbmZpZ30gZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQge29ic2VydmFibGVNaXhpbn0gZnJvbSBcIi4vb2JzZXJ2YWJsZU1peGluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luU3ltYm9scyB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgICAgICB0aGlzLmJ5KHtcIm5vdGlmeTpzZXJ2ZXJNYW5hZ2VyLm5ld1Jlc3BvbnNlXCIgOiB0aGlzLmNyZWF0ZVN5bWJvbHNDb25maWd9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlIHdpbiBjb25maWcgZGVwZW5kcyBvbiBzZXJ2ZXIgcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZXJ2ZXJSZXN1bHRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzZXJ2ZXJSZXN1bHQud2luQW1vdW50IGFtb3VudCBvZiB3aW4gcG9pbnRcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHNlcnZlclJlc3VsdC53aW5MaW5lcyBhcnJheSB3aXRoIHdpbiBiZXQgbGluZXNcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHNlcnZlclJlc3VsdC53aW5TeW1ib2xzIGFycmF5IHdpdGggd2luIHN5bWJvbHNcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU3ltYm9sc0NvbmZpZyAoc2VydmVyUmVzdWx0KSB7XHJcbiAgICAgICAgaWYoc2VydmVyUmVzdWx0LndpbkFtb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMuY3JlYXRlVGVtcGxhdGVNYXRyaXgoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2ZXJSZXN1bHQud2luU3ltYm9scy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1ckxpbmUgPSBzZXJ2ZXJSZXN1bHQud2luU3ltYm9sc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjdXJMaW5lLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1clJlZWwgPSAgbWF0cml4W2pdO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYkluZGV4ID0gY3VyTGluZVtqXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJSZWVsW3N5bWJJbmRleF0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KFwibm90aWZ5OndpblN5bWJvbHNQcm9jZXNzZWRcIiwgbWF0cml4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgbWF0cml4IGRlcGVuZHMgb24gZ2FtZUNvbmZpZyBwYXJhbXNcclxuICAgICAqIEByZXR1cm5zIHthcnJheX0gbWF0cml4IHdpdGggZmFsc2UgcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVRlbXBsYXRlTWF0cml4KCl7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93c051bSA9IGdhbWVDb25maWcuZ2FtZVNpemUucm93cztcclxuICAgICAgICBjb25zdCByZWVsc051bSA9IGdhbWVDb25maWcuZ2FtZVNpemUucmVlbHM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWVsc051bTsgaSsrKXtcclxuICAgICAgICAgICAgY29uc3QgY3VyUmVlbCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHJvd3NOdW07IGorKyl7XHJcbiAgICAgICAgICAgICAgICBjdXJSZWVsLnB1c2goZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGVtcGxhdGUucHVzaChjdXJSZWVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7cmVuZGVyTG9vcH0gZnJvbSBcIi4uL2luZGV4XCI7XHJcbmltcG9ydCB7dGltZUJldHdlZW5GcmFtZXN9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbVR3ZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgcHJvcGVydHlOYW1lLCBzdGFydCwgZW5kLCBwZXJpb2QpIHtcclxuXHJcbiAgICAgICAgdGhpcy5vYmogPSBvYmo7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMucHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lO1xyXG4gICAgICAgIHRoaXMuZ2V0U3BlZWQocGVyaW9kKTtcclxuXHJcbiAgICAgICAgcmVuZGVyTG9vcC5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uIGVhY2ggZnJhbWUgZXZlbmx5IGNoYW5nZSByZXF1aXJlZCBwYXJhbSwgZnJvbSB0aGUgc3RhcnQgcG9pbnQgdG8gdGhlIGVuZCwgZm9yIGEgc2V0IHBlcmlvZCBvZiB0aW1lXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGEgZWxpbWluYXRlcyBkZWxheXMgYmV0d2VlbiBmcmFtZXNcclxuICAgICAqL1xyXG4gICAgdXBkYXRlKGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudXBkYXRlUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzdGFuY2UgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdIDwgdGhpcy5lbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPj0gdGhpcy5lbmQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPSB0aGlzLmVuZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA+IHRoaXMuZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdIDw9IHRoaXMuZW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdID0gdGhpcy5lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlcyBzcGVlZCBkZXBlbmQgb24gZGlzdGFuY2UgYW5kIHBlcmlvZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcmlvZCBwZXJpb2Qgb2YgdGltZSBuZWVkZWQgdG8gcmVhY2ggdGhlIGVuZHBvaW50XHJcbiAgICAgKi9cclxuICAgIGdldFNwZWVkKHBlcmlvZCkge1xyXG4gICAgICAgIHRoaXMuZGlzdGFuY2UgPSB0aGlzLmVuZCAtIHRoaXMuc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5udW1PZkZyYW1lcyA9IHBlcmlvZCAvIHRpbWVCZXR3ZWVuRnJhbWVzO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmRpc3RhbmNlIC8gdGhpcy5udW1PZkZyYW1lcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgc3RhcnQgcG9pbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgZW5kIHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGVyaW9kIHBlcmlvZCBvZiB0aW1lIG5lZWRlZCB0byByZWFjaCB0aGUgZW5kcG9pbnRcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ29tcGxldGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICAgKi9cclxuICAgIHBsYXkoc3RhcnQsIGVuZCwgcGVyaW9kLCBvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgICAgICB0aGlzLmdldFNwZWVkKHBlcmlvZCk7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCB7cmFuZG9tSW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtTeW1ib2x9IGZyb20gXCIuL3N5bWJvbFwiO1xyXG5pbXBvcnQge2dhbWVDb25maWd9IGZyb20gXCIuLi9tYWluL2dhbWVDb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWVsIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Db25maWcgPSBnYW1lQ29uZmlnLnJlZWxzUG9zaXRpb24ucmVlbHM7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzUG9pbnQgPSBnYW1lQ29uZmlnLnJlZWxzUG9zaXRpb24uc3ltYm9sc1BvaW50O1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG5cclxuICAgICAgICB0aGlzLnN5bWJvbHMgPSB0aGlzLmFkZFN5bWJvbHModGhpcy5zeW1ib2xzUG9pbnQpO1xyXG4gICAgICAgIHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdCA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMucmVzdWx0U3ltYm9scyA9IFtdO1xyXG4gICAgICAgIHRoaXMuY3VyUmVzdWx0U3ltYkluZGV4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNlcnZlckRhdGFSZWNlaXZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZm9yY2VkU3RvcFJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpbmcgc3ltYm9scyB0byByZWVsIGJ5IHN5bWJvbHNQb2ludCBmcm9tIGdhbWVDb25maWdcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHN5bWJvbHNQb2ludCBhcnJheSB3aXRoIHBvaW50cyBmb3Igc3ltYm9sc1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIHN5bWJvbHNcclxuICAgICAqL1xyXG4gICAgYWRkU3ltYm9scyhzeW1ib2xzUG9pbnQpIHtcclxuICAgICAgICBjb25zdCBzeW1ib2xzID0gW107XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3ltYm9sc1BvaW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clN5bWIgPSBzeW1ib2xzUG9pbnRbaV07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHJhbmRvbUludCgwLCBwb3NzaWJsZVN5bVNyYy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gbmV3IFN5bWJvbChwb3NzaWJsZVN5bVNyY1tpbmRleF0sIHRoaXMucG9zaXRpb25Db25maWcpO1xyXG4gICAgICAgICAgICBzeW1ib2wucG9zaXRpb24uc2V0KGN1clN5bWIueCwgY3VyU3ltYi55KTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChzeW1ib2wpO1xyXG4gICAgICAgICAgICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzeW1ib2xzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc3RhcnQgc3Bpbm5pbmcgc3ltYm9sc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydCgpIHtcclxuICAgICAgICB0aGlzLnN5bWJvbHNCZWZvcmVSZXN1bHQgPSBJbmZpbml0eTtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5zeW1ib2xzLm1hcChzeW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3ltLnN0YXJ0U3BpbigpO1xyXG4gICAgICAgIH0pKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmRvU3BpbigpKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBiZXRSZXN1bHQgYXJyYXkgd2l0aCBzeW1ib2xzLCBvbiB3aGljaCByZWVsIGhhcyB0byBzdG9wXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ltYnNCZlJlc3VsdCBhbW91bnQgb2YgcmFuZG9tIHN5bWJvbHMgYmVmb3JlIHJlc3VsdFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydFN0b3BTZXF1ZW5jZShiZXRSZXN1bHQsIHN5bWJzQmZSZXN1bHQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdCA9IHN5bWJzQmZSZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0U3ltYm9scyA9IGJldFJlc3VsdDtcclxuICAgICAgICAgICAgdGhpcy5jdXJSZXN1bHRTeW1iSW5kZXggPSB0aGlzLnJlc3VsdFN5bWJvbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJEYXRhUmVjZWl2ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlQ2hhaW4gPSByZXNvbHZlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlcyBzeW1ib2xzIG1vdmUgb25lIHNsb3QgYW5kIGRlcGVuZGluZyBvbiBkaWZmZXJlbnQgY29uZGl0aW9ucyBtYWtlcyByZWN1cnNpdmUgY2FsbCBvciBmaW5pc2ggc3Bpbm5pbmdcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlUmFuZG9tU3ltYiBpZiB0cnVlIGFkZCByYW5kb21TeW1ib2xcclxuICAgICAqL1xyXG4gICAgZG9TcGluKHVzZVJhbmRvbVN5bWIgPSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlT25lU2xvdCh1c2VSYW5kb21TeW1iKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNCZWZvcmVSZXN1bHQtLTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID4gMCAmJiAhdGhpcy5mb3JjZWRTdG9wUmVxdWlyZWQgfHwgIXRoaXMuc2VydmVyRGF0YVJlY2VpdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NwaW4oKTtcclxuXHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VyUmVzdWx0U3ltYkluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvU3BpbihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJSZXN1bHRTeW1iSW5kZXgtLTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5zeW1ib2xzLm1hcChzeW1ib2wgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3ltYm9sLmVuZFNwaW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5vblNwaW5PdmVyKCkpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtib29sZWFufSB1c2VSYW5kb21TeW1iIGlmIHRydWUgYWRkIHJhbmRvbVN5bWJvbFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBtb3ZlT25lU2xvdCh1c2VSYW5kb21TeW1iKSB7XHJcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5zeW1ib2xzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgY29uc3QgbGFzdFN5bWJvbCA9IHRoaXMuc3ltYm9sc1tsYXN0SW5kZXhdO1xyXG4gICAgICAgIGxldCBuZXdJbmRleDtcclxuXHJcbiAgICAgICAgaWYgKHVzZVJhbmRvbVN5bWIpIHtcclxuICAgICAgICAgICAgbmV3SW5kZXggPSByYW5kb21JbnQoMCwgcG9zc2libGVTeW1TcmMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3SW5kZXggPSB0aGlzLnJlc3VsdFN5bWJvbHNbdGhpcy5jdXJSZXN1bHRTeW1iSW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFzdFN5bWJvbC5zZXROZXdTeW1ib2wobmV3SW5kZXgpO1xyXG5cclxuICAgICAgICBsYXN0U3ltYm9sLnkgPSAtdGhpcy5wb3NpdGlvbkNvbmZpZy5zbG90TGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLnN5bWJvbHMudW5zaGlmdCh0aGlzLnN5bWJvbHMucG9wKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5zeW1ib2xzLm1hcChzeW1ib2wgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sLm1vdmVPbmVTbG90KCk7XHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIGN1cnJlbnQgc3BpbiBpcyBvdmVyIHNldCBkZWZhdWx0IHZhbHVlcyBhbmQgY2FsbCBjYWxsYmFjayBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBvblNwaW5PdmVyKCkge1xyXG4gICAgICAgIHRoaXMuc2VydmVyRGF0YVJlY2VpdmVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5mb3JjZWRTdG9wUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3VsdFN5bWJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc29sdmVDaGFpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2hvd3Mgd2luL2xvc3MgYW5pbWF0aW9uIGZvciBlYWNoIHN5bWJvbFxyXG4gICAgICogQHBhcmFtIHthcnJheX0gc3ltYm9scyBhcnJheSB3aXRoIGJvb2xlYW4gdmFsdWVzXHJcbiAgICAgKi9cclxuICAgIHNob3dXaW5TeW1iKHN5bWJvbHMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHN5bWJvbHNbaV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sc1tpXS5wbGF5V2luQW5pbWF0aW9uKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sc1tpXS5wbGF5TG9zc0FuaW1hdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGRlZmF1bHQgc3ltYm9scyBwYXJhbXMgZm9yIGVhY2ggc3ltYm9sXHJcbiAgICAgKi9cclxuICAgIHBsYXlJZGxlKCkge1xyXG4gICAgICAgIHRoaXMuc3ltYm9scy5mb3JFYWNoKHN5bWJvbCA9PiB7XHJcbiAgICAgICAgICAgIHN5bWJvbC5wbGF5SWRsZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBza2lwcyBzcGlubmluZyBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgZm9yY2VkU3RvcCgpIHtcclxuICAgICAgICB0aGlzLmZvcmNlZFN0b3BSZXF1aXJlZCA9IHRydWU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1JlZWx9IGZyb20gXCIuL3JlZWxcIlxyXG5pbXBvcnQge2dhbWVDb25maWd9IGZyb20gXCIuLi9tYWluL2dhbWVDb25maWdcIjtcclxuaW1wb3J0IHtvYnNlcnZhYmxlTWl4aW59IGZyb20gXCIuLi9tYWluL29ic2VydmFibGVNaXhpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZWxzIGV4dGVuZHMgUElYSS5Db250YWluZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy55ID0gZ2FtZUNvbmZpZy5yZWVsc1Bvc2l0aW9uLnRvcE9mZnNldDtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxSZWVscyA9IHRoaXMuYWRkUmVlbHMoKTtcclxuICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLmFkZE1hc2soKTtcclxuICAgICAgICB0aGlzLndpbkFuaW1SZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0Q29uZmlnID0gbnVsbDtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcblxyXG4gICAgICAgIHRoaXMuYnkoe1xyXG4gICAgICAgICAgICBcInN0YXRlQ2hhbmdlZFRvOlNwaW5cIjogdGhpcy5zdGFydCxcclxuICAgICAgICAgICAgXCJub3RpZnk6c2VydmVyTWFuYWdlci5uZXdSZXNwb25zZVwiOiB0aGlzLnNlcnZlclJlc3BvbnNlUmVjZWl2ZWQsXHJcbiAgICAgICAgICAgIFwibm90aWZ5OndpblN5bWJvbHNQcm9jZXNzZWRcIjogdGhpcy5hZGRXaW5IYW5kbGVyVmFsdWVzLFxyXG4gICAgICAgICAgICBcInN0YXRlQ2hhbmdlZFRvOklkbGVcIjogdGhpcy5wbGF5SWRsZSxcclxuICAgICAgICAgICAgXCJzcGluOmZvcmNlZFN0b3BcIjogdGhpcy5mb3JjZWRTdG9wXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGVzIHJlZWxzIGRlcGVuZGluZyBvbiBnYW1lQ29uZmlnIHBhcmFtc1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIHJlZWxzXHJcbiAgICAgKi9cclxuICAgIGFkZFJlZWxzKCkge1xyXG4gICAgICAgIGxldCByZWVsc1BvaW50cyA9IGdhbWVDb25maWcucmVlbHNQb3NpdGlvbi5yZWVsc1BvaW50cztcclxuICAgICAgICBsZXQgYWxsUmVlbHMgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWVsc1BvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY3VyUmVlbFBvaW50cyA9IHJlZWxzUG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgcmVlbCA9IG5ldyBSZWVsKGN1clJlZWxQb2ludHMueCwgY3VyUmVlbFBvaW50cy55KTtcclxuICAgICAgICAgICAgYWxsUmVlbHMucHVzaChyZWVsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChyZWVsKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsUmVlbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgYSBtYXNrIHRvIGxpbWl0IHZpc2libGUgem9uZVxyXG4gICAgICogQHJldHVybnMge1BJWEkuR3JhcGhpY3N9IHJlZWxzIG1hc2tcclxuICAgICAqL1xyXG4gICAgYWRkTWFzaygpIHtcclxuICAgICAgICBsZXQgcmVlbHNNYXNrID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICByZWVsc01hc2suYmVnaW5GaWxsKCk7XHJcbiAgICAgICAgcmVlbHNNYXNrLmRyYXdSZWN0KDAsIC10aGlzLnksIGdhbWVDb25maWcuZ2FtZVNpemUud2lkdGgsIGdhbWVDb25maWcuZ2FtZVNpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHJlZWxzTWFzayk7XHJcblxyXG4gICAgICAgIHJldHVybiByZWVsc01hc2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9jZXNzaW5nIHRoZSBzcGluXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFJlZWxzU3BpbigpLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuc2VydmVyUmVzcG9uc2VSZXNvbHZlID0gcmVzb2x2ZSlcclxuICAgICAgICBdKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnN0YXJ0U3RvcFNlcXVlbmNlKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25TcGluQ29tcGxldGUoKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzdGFydCBzcGlubmluZyByZWVsc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydFJlZWxzU3BpbigpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5hbGxSZWVscy5tYXAocmVlbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWVsLnN0YXJ0KCk7XHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdENvbmZpZyByZXN1bHRDb25maWcgZnJvbSBzZXJ2ZXJcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlc3VsdENvbmZpZy5zcGluUmVzdWx0IGFycmF5IHdpdGggYmV0IHJlc3VsdCBmb3IgZWFjaCByZWVsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmVzdWx0Q29uZmlnLndpbkFtb3VudCB3aW4gcG9pbnRzIG9uIGN1cnJlbnQgYmV0XHJcbiAgICAgKi9cclxuICAgIHNlcnZlclJlc3BvbnNlUmVjZWl2ZWQocmVzdWx0Q29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRDb25maWcgPSByZXN1bHRDb25maWc7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJSZXNwb25zZVJlc29sdmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeW1ic0JmUmVzdWx0IGFtb3VudCBvZiByYW5kb20gc3ltYm9scyBiZWZvcmUgcmVzdWx0XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBwcm9taXNlXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0U3RvcFNlcXVlbmNlKHN5bWJzQmZSZXN1bHQgPSA2KSB7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuYWxsUmVlbHMubWFwKChyZWVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWVsLnN0YXJ0U3RvcFNlcXVlbmNlKHRoaXMucmVzdWx0Q29uZmlnLnNwaW5SZXN1bHRbaV0sIHN5bWJzQmZSZXN1bHQgKyBpICogMik7XHJcbiAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBza2lwcyBzcGlubmluZyBhbmltYXRpb25cclxuICAgICAqL1xyXG4gICAgZm9yY2VkU3RvcCgpIHtcclxuICAgICAgICB0aGlzLmFsbFJlZWxzLmZvckVhY2gocmVlbCA9PiB7XHJcbiAgICAgICAgICAgIHJlZWwuZm9yY2VkU3RvcCgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIHJlc3VsdCBjb25maWdcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRDb25maWcgZnJvbSB3aW5IYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIGFkZFdpbkhhbmRsZXJWYWx1ZXMocmVzdWx0Q29uZmlnKSB7XHJcbiAgICAgICAgaWYgKHJlc3VsdENvbmZpZykge1xyXG4gICAgICAgICAgICB0aGlzLndpbkFuaW1SZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3ltYm9sc1Jlc3VsdENvbmZpZyA9IHJlc3VsdENvbmZpZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRlcGVuZGluZyBvbiB3aW5BbmltUmVxdWlyZWQgZmlyZSBldmVudCBhbmQgc2hvdyB3aW4vbG9zcyBhbmltYXRpb24gZm9yIGVhY2ggc3ltYm9sXHJcbiAgICAgKi9cclxuICAgIG9uU3BpbkNvbXBsZXRlKCkge1xyXG4gICAgICAgIGlmICghdGhpcy53aW5BbmltUmVxdWlyZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJwbGF5SWRsZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJwbGF5V2luXCIpO1xyXG4gICAgICAgIGxldCBtYXRyaXggPSB0aGlzLnN5bWJvbHNSZXN1bHRDb25maWc7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyUmVzdWx0UmVlbCA9IG1hdHJpeFtpXTtcclxuICAgICAgICAgICAgY29uc3QgY3VyUmVlbCA9IHRoaXMuYWxsUmVlbHNbaV07XHJcblxyXG4gICAgICAgICAgICBjdXJSZWVsLnNob3dXaW5TeW1iKGN1clJlc3VsdFJlZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy53aW5BbmltUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgZGVmYXVsdCBzeW1ib2xzIHBhcmFtcyBmb3IgZWFjaCBzeW1ib2xcclxuICAgICAqL1xyXG4gICAgcGxheUlkbGUoKSB7XHJcbiAgICAgICAgdGhpcy5hbGxSZWVscy5mb3JFYWNoKHJlZWwgPT4ge1xyXG4gICAgICAgICAgICByZWVsLnBsYXlJZGxlKCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxufSIsImltcG9ydCB7dGV4dHVyZXN9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5pbXBvcnQge0N1c3RvbVR3ZWVufSBmcm9tIFwiLi9jdXN0b21Ud2VlblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFN5bWJvbCBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gICAgY29uc3RydWN0b3IodGV4dHVyZVNyYywgY29uZmlnKXtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlc1t0ZXh0dXJlU3JjXSk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSBjb25maWcuc3ltYm9sRGltZW5zaW9ucy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGNvbmZpZy5zeW1ib2xEaW1lbnNpb25zLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNsb3RMZW5ndGggPSBjb25maWcuc2xvdExlbmd0aDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gY29uZmlnLnN5bWJvbFNwZWVkO1xyXG5cclxuICAgICAgICB0aGlzLnR5cGUgPSB0ZXh0dXJlU3JjO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMuc3RhcnRTY2FsZSA9IHRoaXMuc2NhbGUuX3g7XHJcbiAgICAgICAgdGhpcy5lbmRTY2FsZSA9IHRoaXMuc3RhcnRTY2FsZSoxLjI1O1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuID0gbmV3IEN1c3RvbVR3ZWVuKHRoaXMsIFwieVwiLCB0aGlzLnksIHRoaXMueSArICB0aGlzLnNsb3RMZW5ndGgsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMuYm91bmNlVHdlZW4gPSBuZXcgQ3VzdG9tVHdlZW4odGhpcywgXCJ5XCIsIHRoaXMueSwgdGhpcy55IC0gdGhpcy5oZWlnaHQvMiwgdGhpcy5zcGVlZCoyLzMpO1xyXG4gICAgICAgIHRoaXMuc2NhbGVUd2VlbiA9IG5ldyBDdXN0b21Ud2Vlbih0aGlzLCBcInN5bWJTY2FsZVwiLCB0aGlzLnN0YXJ0U2NhbGUsICB0aGlzLmVuZFNjYWxlLCB0aGlzLnNwZWVkKjMpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgZGVmYXVsdCBzeW1ib2xzIHBhcmFtcyBiZWZvcmUgbmV4dCBzcGluIGFuZCBtYWtlcyB1cC9kb3duIGJvdW5jZSB1c2luZyB0d2VlblxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydFNwaW4gKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucGxheUlkbGUoKTtcclxuICAgICAgICAgICAgdGhpcy5ib3VuY2VUd2Vlbi5wbGF5KHRoaXMueSwgdGhpcy55IC0gdGhpcy5oZWlnaHQvMix0aGlzLnNwZWVkKjMvNCwgKCkgPT4ge30pXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLmJvdW5jZVR3ZWVuLnBsYXkodGhpcy55LCB0aGlzLnkgKyB0aGlzLmhlaWdodC8yLHRoaXMuc3BlZWQqMi8zLCByZXNvbHZlKSlcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGV2ZW5seSBjaGFuZ2UgcG9zaXRpb24gYnkgb25lIHNsb3QgdXNpbmcgdHdlZW5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHByb21pc2VcclxuICAgICAqL1xyXG4gICAgbW92ZU9uZVNsb3QgKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSArIHRoaXMuc2xvdExlbmd0aCwgdGhpcy5zcGVlZCwgcmVzb2x2ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlcyBkb3duL3VwIGJvdW5jZSB1c2luZyB0d2VlblxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBlbmRTcGluKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSArIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCoyLzMsICgpID0+IHt9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvdW5jZVR3ZWVuLnBsYXkodGhpcy55LCB0aGlzLnkgLSB0aGlzLmhlaWdodC8yLHRoaXMuc3BlZWQqMi8zLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgc3ltYm9sIG5ldyB0ZXh0dXJlIGFuZCB0eXBlXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggdGV4dHVyZSBpbmRleCBvZiBuZXcgc3ltYm9sXHJcbiAgICAgKi9cclxuICAgIHNldE5ld1N5bWJvbChpbmRleCl7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbcG9zc2libGVTeW1TcmNbaW5kZXhdXTtcclxuICAgICAgICB0aGlzLnR5cGUgPSBwb3NzaWJsZVN5bVNyY1tpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge251bWJlcn0gbnVtYmVyIG9mIHN5bWJvbCdzIHNjYWxlIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIGdldCBzeW1iU2NhbGUgKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNjYWxlLl94O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZSBzZXQgc3ltYm9sJ3Mgc2NhbGUgcHJvcGVydHlcclxuICAgICAqL1xyXG4gICAgc2V0IHN5bWJTY2FsZSAodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNjYWxlLnNldCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhbmltYXRpb24gZm9yIHdpbiBzeW1ib2xzXHJcbiAgICAgKi9cclxuICAgIHBsYXlXaW5BbmltYXRpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGVVcCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBldmVubHkgc2NhbGVzIHN5bWJvbCB1cCB1c2luZyB0d2VlblxyXG4gICAgICovXHJcbiAgICBzY2FsZVVwICgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlVHdlZW4ucGxheSh0aGlzLnN0YXJ0U2NhbGUsIHRoaXMuZW5kU2NhbGUsIHRoaXMuc3BlZWQqMywgdGhpcy5zY2FsZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBldmVubHkgc2NhbGVzIHN5bWJvbCBkb3duIHVzaW5nIHR3ZWVuXHJcbiAgICAgKi9cclxuICAgIHNjYWxlRG93biAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZVR3ZWVuLnBsYXkodGhpcy5lbmRTY2FsZSwgdGhpcy5zdGFydFNjYWxlLCB0aGlzLnNwZWVkKjMsICgpID0+IHt9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqbWFrZXMgc3ltYm9scyBzZW1pIHRyYW5zcGFyZW50XHJcbiAgICAgKi9cclxuICAgIHBsYXlMb3NzQW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGRlZmF1bHQgc3ltYm9scyBwYXJhbXNcclxuICAgICAqL1xyXG4gICAgcGxheUlkbGUgKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGUuc2V0KHRoaXMuc3RhcnRTY2FsZSk7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtCdXR0b259IGZyb20gXCIuL1VJL2J1dHRvblwiO1xyXG5pbXBvcnQge3RleHR1cmVzfSBmcm9tIFwiLi9pbmRleFwiO1xyXG5pbXBvcnQge29ic2VydmFibGVNaXhpbn0gZnJvbSBcIi4vbWFpbi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RvciBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgbGVmdFNyYywgcmlnaHRTcmMsIHBvc3NpYmxlVmFsdWVzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG4gICAgICAgIHRoaXMubWludXNCdXR0b24gPSBuZXcgQnV0dG9uKDAsIDAsIGxlZnRTcmMsIHRoaXMubWludXNPbmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wbHVzQnV0dG9uID0gbmV3IEJ1dHRvbigyMDAsIDAsIHJpZ2h0U3JjLCB0aGlzLnBsdXNPbmUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zc2libGVWYWx1ZXMgPSBwb3NzaWJsZVZhbHVlcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IDE7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSB0aGlzLmFkZE51bWJlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWludXNCdXR0b24sIHRoaXMucGx1c0J1dHRvbiwgdGhpcy5udW1iZXIpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ieSh7XHJcbiAgICAgICAgICAgIFwic3RhdGVDaGFuZ2VkVG86U3BpblwiOiB0aGlzLmRpc2FibGVCdXR0b25zLFxyXG4gICAgICAgICAgICBcInN0YXRlQ29tcGxldGVkOlNwaW5cIjogdGhpcy5idXR0b25EaXNhYmxlQ2hlY2tcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG1pbnVzT25lKCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLnBvc3NpYmxlVmFsdWVzWyAtLXRoaXMuY3VycmVudFZhbHVlIF1dO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRGlzYWJsZUNoZWNrKCk7XHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJiZXRDaGFuZ2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsdXNPbmUgKCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLnBvc3NpYmxlVmFsdWVzWyArK3RoaXMuY3VycmVudFZhbHVlIF1dO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRGlzYWJsZUNoZWNrKCk7XHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJiZXRDaGFuZ2VkXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGlzYWJsZS9lbmFibGUgYnV0dG9ucyBkZXBlbmQgb24gY3VycmVudFZhbHVlXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbkRpc2FibGVDaGVjaygpe1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSA+PSB0aGlzLnBvc3NpYmxlVmFsdWVzLmxlbmd0aCAtIDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBsdXNCdXR0b24uZGlzYWJsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1c0J1dHRvbi5lbmFibGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSA8IDEpe1xyXG4gICAgICAgICAgICB0aGlzLm1pbnVzQnV0dG9uLmRpc2FibGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnVzQnV0dG9uLmVuYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZXMgc2VsZWN0b3IgbnVtYmVyIHNwcml0ZVxyXG4gICAgICogQHJldHVybnMge1BJWEkuU3ByaXRlfSB0ZXh0dXJlIG9mIHNlbGVjdG9yIG51bWJlclxyXG4gICAgICovXHJcbiAgICBhZGROdW1iZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IG51bWJlciA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlc1t0aGlzLnBvc3NpYmxlVmFsdWVzW3RoaXMuY3VycmVudFZhbHVlXV0pO1xyXG4gICAgICAgIG51bWJlci5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgbnVtYmVyLndpZHRoID0gMTI1O1xyXG4gICAgICAgIG51bWJlci5oZWlnaHQgPSAxMjU7XHJcbiAgICAgICAgbnVtYmVyLnBvc2l0aW9uLnNldCgxMDAsIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gbnVtYmVyXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNhYmxlIGJ1dHRvbnNcclxuICAgICAqL1xyXG4gICAgZGlzYWJsZUJ1dHRvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5wbHVzQnV0dG9uLmRpc2FibGUoKTtcclxuICAgICAgICB0aGlzLm1pbnVzQnV0dG9uLmRpc2FibGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiBjdXJyZW50IGJldCBzaXplXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSB0aGlzLmN1cnJlbnRWYWx1ZSBpcyBwb3NpdGlvbiBpbiBhcnJheSBhbmQgMCBlcXVhbHMgMSBiZXQgc2l6ZVxyXG4gICAgICovXHJcbiAgICBnZXRDdXJCZXRTaXplKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRWYWx1ZSArIDE7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1JlZWxzfSBmcm9tIFwiLi9yZWVscy9yZWVsc1wiO1xyXG5pbXBvcnQge0JldExpbmVzfSBmcm9tIFwiLi9iZXRMaW5lcy9iZXRMaW5lc1wiO1xyXG5pbXBvcnQge1NlcnZlck1hbmFnZXJ9IGZyb20gXCIuL21haW4vc2VydmVyTWFuYWdlclwiO1xyXG5pbXBvcnQge1dpblN5bWJvbHN9IGZyb20gXCIuL21haW4vd2luU3ltYm9sc1wiO1xyXG5pbXBvcnQge1NlbGVjdG9yfSBmcm9tIFwiLi9zZWxlY3RvclwiO1xyXG5pbXBvcnQge1dpblNjcmVlbn0gZnJvbSBcIi4vd2luU2NyZWVuL3dpblNjcmVlblwiO1xyXG5pbXBvcnQge2dhbWVDb25maWd9IGZyb20gXCIuL21haW4vZ2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQge1NwaW5CdXR0b259IGZyb20gXCIuL3NwaW5CdXR0b24vc3BpbkJ1dHRvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNsb3Qge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5iZXRMaW5lcyA9IG5ldyBCZXRMaW5lcygpO1xyXG4gICAgICAgIHRoaXMucmVlbHMgPSBuZXcgUmVlbHMoKTtcclxuICAgICAgICB0aGlzLnNwaW5CdXR0b24gPSBuZXcgU3BpbkJ1dHRvbig0MDAsIDQ1MCwgc3BpbkJ1dHRvblNyYyk7XHJcbiAgICAgICAgdGhpcy53aW5TY3JlZW4gPSBuZXcgV2luU2NyZWVuKDAsZ2FtZUNvbmZpZy5nYW1lU2l6ZS5oZWlnaHQsIDMwMCwgMTAwLCAweDY5Njk2OSk7XHJcbiAgICAgICAgdGhpcy5iZXRTZWxlY3RvciA9IG5ldyBTZWxlY3Rvcig1NTAsIDQ1MCwgbGVmdFNlbGVjdG9yLCByaWdodFNlbGVjdG9yLCBudW1iZXJzKTtcclxuICAgICAgICB0aGlzLndpblN5bWJvbHMgPSBuZXcgV2luU3ltYm9scygpO1xyXG4gICAgICAgIHRoaXMuc2VydmVyTWFuYWdlciA9IG5ldyBTZXJ2ZXJNYW5hZ2VyKHRoaXMpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCdXR0b259IGZyb20gXCIuLi9VSS9idXR0b25cIjtcclxuaW1wb3J0IHtzdGF0ZUhhbmRsZXJ9IGZyb20gXCIuLi9pbmRleFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwaW5CdXR0b24gZXh0ZW5kcyBCdXR0b257XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBidXR0b25UZXh0dXJlcyl7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgYnV0dG9uVGV4dHVyZXMpO1xyXG4gICAgICAgIHRoaXMuYnkoe1xyXG4gICAgICAgICAgICBcInN0YXRlQ29tcGxldGVkOlNwaW5cIjogdGhpcy5lbmFibGVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy9zZXR0aW5nIHNwaW4gYnV0dG9uIGNsaWNrIGNhbGxiYWNrXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IHRoaXMubWFrZVNwaW47XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmaXJlcyBkaWZmZXJlbnQgZXZlbnRzIGRlcGVuZGluZyBvbiBjdXJyZW50IHN0YXRlIGFuZCBkaXNhYmxlIGJ1dHRvbiBpZiBuZWVkZWRcclxuICAgICAqL1xyXG4gICAgbWFrZVNwaW4oKSB7XHJcbiAgICAgICAgaWYoc3RhdGVIYW5kbGVyLmN1cnJlbnRTdGF0ZS5uYW1lID09PSBcIlNwaW5cIil7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KFwic3Bpbjpmb3JjZWRTdG9wXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KFwib25TcGluQnV0dG9uUHJlc3NlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge29ic2VydmFibGVNaXhpbn0gZnJvbSBcIi4uL21haW4vb2JzZXJ2YWJsZU1peGluXCI7XHJcbmltcG9ydCB7U3RhdGVNYWNoaW5lfSBmcm9tIFwiLi9zdGF0ZU1hY2hpbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEZWZhdWx0U3RhdGUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG5cclxuICAgICAgICB0aGlzLm5hbWUgPSBcInN0YXRlTmFtZVwiO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy50cmFuc2l0aW9ucyA9IHt9O1xyXG4gICAgICAgIHRoaXMuc3RhdGVNYXNoaW5lID0gU3RhdGVNYWNoaW5lLmluc3RhbmNlO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmZpcmVFdmVudChgc3RhdGVDaGFuZ2VkVG86JHt0aGlzLm5hbWV9YCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coYHN0YXRlQ2hhbmdlZFRvOiR7dGhpcy5uYW1lfWApO1xyXG4gICAgfVxyXG5cclxuICAgIGZpbmlzaChldmVudE5hbWUpIHtcclxuICAgICAgICAvL29ubHkgYWN0aXZlIHN0YXRlIHNob3VsZCByZWFjdCBvbiBldmVudFxyXG4gICAgICAgIGlmICghdGhpcy5hY3RpdmUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoYHN0YXRlQ29tcGxldGVkOiR7dGhpcy5uYW1lfWApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGBzdGF0ZUNvbXBsZXRlZDoke3RoaXMubmFtZX1gKTtcclxuXHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgbmV4dCA9IHRoaXMudHJhbnNpdGlvbnNbZXZlbnROYW1lXTtcclxuICAgICAgICB0aGlzLnN0YXRlTWFzaGluZS5jaGFuZ2VTdGF0ZVRvKG5leHQpO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQge0RlZmF1bHRTdGF0ZX0gZnJvbSBcIi4vZGVmYXVsdFN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSWRsZSBleHRlbmRzIERlZmF1bHRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5ieSh7b25TcGluQnV0dG9uUHJlc3NlZDogdGhpcy5vblNwaW5CdXR0b25QcmVzc2VkfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TcGluQnV0dG9uUHJlc3NlZCgpe1xyXG4gICAgICAgIHRoaXMuZmluaXNoKFwib25TcGluQnV0dG9uUHJlc3NlZFwiKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0RlZmF1bHRTdGF0ZX0gZnJvbSBcIi4vZGVmYXVsdFN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTG9hZCBleHRlbmRzIERlZmF1bHRTdGF0ZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gXCJMb2FkXCI7XHJcbiAgICAgICAgdGhpcy5ieSh7b25Mb2FkaW5nQ29tcGxldGUgOiB0aGlzLm9uTG9hZGluZ0NvbXBsZXRlfSk7XHJcbiAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZGluZ0NvbXBsZXRlKCl7XHJcbiAgICAgICAgdGhpcy5maW5pc2goXCJvbkxvYWRpbmdDb21wbGV0ZVwiKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7RGVmYXVsdFN0YXRlfSBmcm9tIFwiLi9kZWZhdWx0U3RhdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGluIGV4dGVuZHMgRGVmYXVsdFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJ5KHtcclxuICAgICAgICAgICAgcGxheVdpbiA6IHRoaXMucGxheVdpbixcclxuICAgICAgICAgICAgcGxheUlkbGUgOiB0aGlzLnBsYXlJZGxlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlXaW4oKXtcclxuICAgICAgICB0aGlzLmZpbmlzaChcInBsYXlXaW5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUlkbGUoKXtcclxuICAgICAgICB0aGlzLmZpbmlzaChcInBsYXlJZGxlXCIpO1xyXG4gICAgfVxyXG59XHJcbiIsImxldCBpbnN0YW5jZTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0ZU1hY2hpbmUge1xyXG4gICAgY29uc3RydWN0b3Ioc3RhdGVzQ29uZmlnKSB7XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbnNpc3RlbnQtdGhpc1xyXG4gICAgICAgIGluc3RhbmNlID0gdGhpcztcclxuICAgICAgICB0aGlzLnN0YXRlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFN0YXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluaXQoc3RhdGVzQ29uZmlnKTtcclxuICAgIH1cclxuXHJcbiAgICBpbml0KHN0YXRlc0NvbmZpZykge1xyXG4gICAgICAgIHN0YXRlc0NvbmZpZy5mb3JFYWNoKChjb25maWcpID0+IHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5ldy1jYXBcclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlID0gbmV3IGNvbmZpZy5jbGFzcygpO1xyXG5cclxuICAgICAgICAgICAgaW5zdGFuY2UubmFtZSA9IGNvbmZpZy5jbGFzcy5uYW1lO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS50cmFuc2l0aW9ucyA9IGNvbmZpZy50cmFuc2l0aW9ucztcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdGVzW2luc3RhbmNlLm5hbWVdID0gaW5zdGFuY2U7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2hhbmdlU3RhdGVUbyhuZXh0U3RhdGVOYW1lKSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlc1tuZXh0U3RhdGVOYW1lXTtcclxuXHJcbiAgICAgICAgLyp3aGVuIHRoZSBuZXh0IHN0YXRlIHN0YXJ0cyBpdCBiZWNvbWVzIGFjdGl2ZSBhbmQgaW4gY2FzZSBpZiBpdCBsaXN0ZW5zIHRoZSBzYW1lIGV2ZW50XHJcbiAgICAgICAgdGhhdCBmaW5pc2hlZCBwcmV2aW91cyBzdGF0ZSBhbmQgaXMgcHJvY2Vzc2VkIGxhdGVyIGluIG9ic2VydmFibGUgbG9vcCBpdCB3aWxsIGJlIGZpbmlzaGVkXHJcbiAgICAgICAgc3RyYWlnaHQgYXdheS4gc2V0VGltZW91dCBpcyBhZGRlZCB0byBwcmV2ZW50IGl0LiovXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiAodGhpcy5jdXJyZW50U3RhdGUuc3RhcnQoKSksIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXQgaW5zdGFuY2UoKSB7XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtMb2FkfSBmcm9tIFwiLi9sb2FkXCI7XHJcbmltcG9ydCB7SWRsZX0gZnJvbSBcIi4vaWRsZVwiO1xyXG5pbXBvcnQge1NwaW59IGZyb20gXCIuL3NwaW5cIjtcclxuaW1wb3J0IHtXaW59IGZyb20gXCIuL3dpblwiO1xyXG5cclxuLyoqXHJcbiAqIEFycmF5IG9mIE9iamVjdHMuIEVhY2ggb2YgdGhlbSBjb250YWlucyBjb25maWcgZm9yIGRpZmZlcmVudCBzdGF0ZVxyXG4gKiBPYmplY3QuY2xhc3MgY2xhc3Mgb2Ygc3RhdGVcclxuICogT2JqZWN0LnRyYW5zaXRpb25zIGF2YWlsYWJsZSB0cmFuc2l0aW9ucyBmcm9tIGN1cnJlbnQgc3RhdGUgdG8gbmV4dFN0YXRlXHJcbiAqIE9iamVjdC50cmFuc2l0aW9uc1tldmVudE5hbWVdIG5leHRTdGF0ZSB0aGF0IGJlY29tZXMgYWN0aXZlIGJ5IGV2ZW50IHdpdGggZXZlbnROYW1lXHJcbiAqL1xyXG5leHBvcnQgY29uc3QgU3RhdGVzQ29uZmlnID0gW1xyXG4gICAge2NsYXNzOiBMb2FkLCB0cmFuc2l0aW9uczoge29uTG9hZGluZ0NvbXBsZXRlOiBcIklkbGVcIn19LFxyXG4gICAge2NsYXNzOiBJZGxlLCB0cmFuc2l0aW9uczoge29uU3BpbkJ1dHRvblByZXNzZWQ6IFwiU3BpblwifX0sXHJcbiAgICB7Y2xhc3M6IFNwaW4sIHRyYW5zaXRpb25zOiB7cGxheVdpbjogXCJXaW5cIiwgcGxheUlkbGU6IFwiSWRsZVwiLH19LFxyXG4gICAge2NsYXNzOiBXaW4sIHRyYW5zaXRpb25zOiB7YmV0Q2hhbmdlZDogXCJJZGxlXCIsIG9uU3BpbkJ1dHRvblByZXNzZWQ6IFwiU3BpblwifX1cclxuXTsiLCJpbXBvcnQge0RlZmF1bHRTdGF0ZX0gZnJvbSBcIi4vZGVmYXVsdFN0YXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luIGV4dGVuZHMgRGVmYXVsdFN0YXRlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLmJ5KHtcclxuICAgICAgICAgICAgYmV0Q2hhbmdlZCA6IHRoaXMuYmV0Q2hhbmdlZCxcclxuICAgICAgICAgICAgb25TcGluQnV0dG9uUHJlc3NlZCA6IHRoaXMub25TcGluQnV0dG9uUHJlc3NlZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJldENoYW5nZWQoKXtcclxuICAgICAgICB0aGlzLmZpbmlzaChcImJldENoYW5nZWRcIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25TcGluQnV0dG9uUHJlc3NlZCgpe1xyXG4gICAgICAgIHRoaXMuZmluaXNoKFwib25TcGluQnV0dG9uUHJlc3NlZFwiKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogY3JlYXRlcyByYW5kb20gaW50ZWdlciB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gbWluIHBvc3NpYmxlIHZhbHVlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggbWF4IHBvc3NpYmxlIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICBsZXQgcmFuZCA9IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbik7XHJcbiAgICByYW5kID0gTWF0aC5mbG9vcihyYW5kKTtcclxuICAgIHJldHVybiByYW5kO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGltZUJldHdlZW5GcmFtZXMgPSAxNi42NzsiLCJleHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgUElYSS5HcmFwaGljcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubGluZVN0eWxlKDEsIDB4MDAwMDAwLCAxKTtcclxuICAgICAgICB0aGlzLmJlZ2luRmlsbChjb2xvcik7XHJcbiAgICAgICAgdGhpcy5kcmF3UmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9yZWN0YW5nbGVcIjtcclxuaW1wb3J0IHtvYnNlcnZhYmxlTWl4aW59IGZyb20gXCIuLi9tYWluL29ic2VydmFibGVNaXhpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpblNjcmVlbiBleHRlbmRzIFBJWEkuR3JhcGhpY3N7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuLmFscGhhID0gMC4zO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuY3JlYXRlTWVzc2FnZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNjcmVlbiwgdGhpcy5tZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmhpZGVTY3JlZW4oKTtcclxuICAgICAgICB0aGlzLmFscGhhID0gMC41O1xyXG4gICAgICAgIHRoaXMuY3VycmVudFdpbiA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMuYnkoe1xyXG4gICAgICAgICAgICBcIm5vdGlmeTpzZXJ2ZXJNYW5hZ2VyLm5ld1Jlc3BvbnNlXCI6IHRoaXMudXBkYXRlQ3VycmVudFdpbixcclxuICAgICAgICAgICAgXCJzdGF0ZUNoYW5nZWRUbzpXaW5cIiA6IHRoaXMuc2hvd1NjcmVlbixcclxuICAgICAgICAgICAgXCJzdGF0ZUNvbXBsZXRlZDpXaW5cIiA6IHRoaXMuaGlkZVNjcmVlblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWVzc2FnZSAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgUElYSS5UZXh0KFwiWW91IHdvblwiKTtcclxuICAgICAgICBtZXNzYWdlLnN0eWxlID0ge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXNzYWdlLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICBtZXNzYWdlLnBvc2l0aW9uLnNldCh4ICsgd2lkdGgvMiwgeSArIGhlaWdodC8yKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIHNlcnZlcidzIHJlc3VsdCBjb25maWdcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb25maWcud2luQW1vdW50IGFtb3VudCBvZiB3aW4gcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZUN1cnJlbnRXaW4oY29uZmlnKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRXaW4gPSBjb25maWcud2luQW1vdW50O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWFrZXMgd2luU2NyZWVuIHZpc2libGVcclxuICAgICAqL1xyXG4gICAgc2hvd1NjcmVlbiAoKXtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZS50ZXh0ID0gYFlvdSB3b24gJHt0aGlzLmN1cnJlbnRXaW59ICEhIWA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaGlkZXMgd2luU2NyZWVuXHJcbiAgICAgKi9cclxuICAgIGhpZGVTY3JlZW4gKCkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==