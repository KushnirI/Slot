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

        _this.by({
            "notify:spinStart": _this.hideWinLines,
            "notify:spinOver": _this.showWinLines,
            "notify:betChanged": _this.hideWinLines
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
         *  show win lines depends on config
         * @param {object} config result config
         * @param {array} config.winLines array with win lines
         */

    }, {
        key: "showWinLines",
        value: function showWinLines(config) {
            if (config || Array.isArray(config.winLines)) {
                for (var i = 0; i < config.winLines.length; i++) {
                    var curLine = config.winLines[i];
                    this.allLines[curLine].showWinLine();
                }
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

var _observableMixin = __webpack_require__(/*! ./main/observableMixin */ "./javascript/main/observableMixin.js");

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
        Object.assign(_this, _observableMixin.observableMixin);
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
exports.areReelsSpinning = exports.renderLoop = exports.winSymbols = exports.betLines = exports.serverMock = exports.betSelector = exports.winScreen = exports.reels = exports.spinButton = exports.background = exports.textures = undefined;
exports.changeReelsSpinningTo = changeReelsSpinningTo;

var _button = __webpack_require__(/*! ./button */ "./javascript/button.js");

var _reels = __webpack_require__(/*! ./reels/reels */ "./javascript/reels/reels.js");

var _winScreen = __webpack_require__(/*! ./winScreen/winScreen */ "./javascript/winScreen/winScreen.js");

var _selector = __webpack_require__(/*! ./selector */ "./javascript/selector.js");

var _server = __webpack_require__(/*! ./main/server */ "./javascript/main/server.js");

var _betLines = __webpack_require__(/*! ./betLines/betLines */ "./javascript/betLines/betLines.js");

var _winHandler = __webpack_require__(/*! ./main/winHandler */ "./javascript/main/winHandler.js");

var _gameConfig = __webpack_require__(/*! ./main/gameConfig */ "./javascript/main/gameConfig.js");

document.body.appendChild(app.view);

PIXI.Loader.shared.add("./images/sheet.json").load(setup);

var textures = exports.textures = void 0,
    background = exports.background = void 0,
    spinButton = exports.spinButton = void 0,
    reels = exports.reels = void 0,
    winScreen = exports.winScreen = void 0,
    betSelector = exports.betSelector = void 0,
    serverMock = exports.serverMock = void 0,
    betLines = exports.betLines = void 0,
    winSymbols = exports.winSymbols = void 0;

var renderLoop = exports.renderLoop = [];
var areReelsSpinning = exports.areReelsSpinning = false;

function setup() {
    exports.textures = textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    exports.background = background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    exports.betLines = betLines = new _betLines.BetLines();
    exports.reels = reels = new _reels.Reels();

    exports.spinButton = spinButton = new _button.Button(400, 450, spinButtonSrc, onSpinButtonClicked);
    spinButton.by({ "notify:spinOver": spinButton.enable });

    exports.winScreen = winScreen = new _winScreen.WinScreen(0, _gameConfig.gameConfig.gameSize.height, 300, 100, 0x696969);
    exports.betSelector = betSelector = new _selector.Selector(550, 450, leftSelector, rightSelector, numbers);

    exports.winSymbols = winSymbols = new _winHandler.WinSymbols();

    exports.serverMock = serverMock = new _server.ServerMock();

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
function changeReelsSpinningTo(boolean) {
    exports.areReelsSpinning = areReelsSpinning = boolean;
}

/**
 * start/stop spin depending on areReelsSpinning param
 */
function onSpinButtonClicked() {
    if (areReelsSpinning) {
        changeReelsSpinningTo(false);
        this.disable();
    } else {
        this.fireEvent("notify:spinStart", betSelector.currentValue + 1);
    }
}

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

/***/ "./javascript/main/server.js":
/*!***********************************!*\
  !*** ./javascript/main/server.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ServerMock = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _utils = __webpack_require__(/*! ../utils */ "./javascript/utils.js");

var _gameConfig = __webpack_require__(/*! ./gameConfig */ "./javascript/main/gameConfig.js");

var _observableMixin = __webpack_require__(/*! ./observableMixin */ "./javascript/main/observableMixin.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServerMock = exports.ServerMock = function () {
    function ServerMock() {
        _classCallCheck(this, ServerMock);

        this.reelsetsList = _gameConfig.gameConfig.reelsets;
        this.betLines = _gameConfig.gameConfig.betLines;
        this.reelsLength = _gameConfig.gameConfig.gameSize.rows;
        Object.assign(this, _observableMixin.observableMixin);

        this.by({ "notify:spinStart": this.start });
    }

    /**
     * upon request from client creates spin/bet result and inform the client
     * @param {number} betSize multiplier for win points
     */


    _createClass(ServerMock, [{
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

    return ServerMock;
}();

/***/ }),

/***/ "./javascript/main/winHandler.js":
/*!***************************************!*\
  !*** ./javascript/main/winHandler.js ***!
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

var _engine = __webpack_require__(/*! ../engine */ "./javascript/engine.js");

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

var _engine = __webpack_require__(/*! ../engine */ "./javascript/engine.js");

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
    }, {
        key: "doSpin",
        value: function doSpin() {
            var _this4 = this;

            var useRandomSymb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            this.moveOneSlot(useRandomSymb).then(function () {
                _this4.symbolsBeforeResult--;

                if (_this4.symbolsBeforeResult > 0 && _engine.areReelsSpinning || !_this4.serverDataReceived) {
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
            this.resultSymbols = [];
            this.resolveChain();
        }
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
    }, {
        key: "playIdle",
        value: function playIdle() {
            this.symbols.forEach(function (symbol) {
                symbol.playIdle();
            });
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

var _engine = __webpack_require__(/*! ../engine */ "./javascript/engine.js");

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
            "notify:spinStart": _this.start,
            "notify:serverManager.newResponse": _this.serverResponseReceived,
            "notify:winSymbolsProcessed": _this.addWinHandlerValues,
            "notify:betChanged": _this.playIdle
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
            (0, _engine.changeReelsSpinningTo)(true);
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
         * when each reel finished spin, it reduces reelsCounter
         * when all reels are finished, reset the counter, and check bet lines
         */

    }, {
        key: "onSpinComplete",
        value: function onSpinComplete() {
            var _this4 = this;

            (0, _engine.changeReelsSpinningTo)(false);

            setTimeout(function () {
                _this4.showWinAnimation(_this4.symbolsResultConfig);
                _this4.fireEvent("notify:spinOver", _this4.resultConfig);
            }, 100);
        }

        /**
         * if winAnimRequired, show win/loss animation for each symbol
         * @param {array} matrix 2d array with true/false param
         */

    }, {
        key: "showWinAnimation",
        value: function showWinAnimation(matrix) {
            if (!this.winAnimRequired) {
                return;
            }

            for (var i = 0; i < matrix.length; i++) {
                var curResultReel = matrix[i];
                var curReel = this.allReels[i];

                curReel.showWinSymb(curResultReel);
            }

            this.winAnimRequired = false;
        }
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

var _engine = __webpack_require__(/*! ../engine */ "./javascript/engine.js");

var _customTween = __webpack_require__(/*! ./customTween */ "./javascript/reels/customTween.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _Symbol = function (_PIXI$Sprite) {
    _inherits(_Symbol, _PIXI$Sprite);

    function _Symbol(textureSrc, config) {
        _classCallCheck(this, _Symbol);

        var _this = _possibleConstructorReturn(this, (_Symbol.__proto__ || Object.getPrototypeOf(_Symbol)).call(this, _engine.textures[textureSrc]));

        _this.width = config.symbolDimensions.width;
        _this.height = config.symbolDimensions.height;
        _this.slotLength = config.slotLength;

        _this.type = textureSrc;
        _this.anchor.set(0.5);

        _this.speed = config.symbolSpeed;

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
            this.texture = _engine.textures[possibleSymSrc[index]];
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
         * saves current parent params to be able to restore it later
         * and change parent to betLines to change the layer
         */

    }, {
        key: "playLossAnimation",
        value: function playLossAnimation() {

            this.parentReel = this.parent;
            var globalX = this.getGlobalPosition().x;
            var globalY = this.getGlobalPosition().y;
            this.localX = this.x;
            this.localY = this.y;

            this.alpha = 0.5;

            _engine.betLines.addChildAt(this, 0);
            this.position.set(globalX, globalY);
        }
        /**
         * sets default symbols params and return parent to reel if it was changed
         */

    }, {
        key: "playIdle",
        value: function playIdle() {
            this.scale.set(this.startScale);
            this.alpha = 1;

            if (this.parentReel) {
                this.parentReel.addChild(this);
                this.position.set(this.localX, this.localY);
            }
            this.parentReel = null;
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

var _button = __webpack_require__(/*! ./button */ "./javascript/button.js");

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

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
            this.number.texture = _engine.textures[this.possibleValues[--this.currentValue]];
            this.buttonDisableCheck();
        }
    }, {
        key: "plusOne",
        value: function plusOne() {
            this.number.texture = _engine.textures[this.possibleValues[++this.currentValue]];
            this.buttonDisableCheck();
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
            this.fireEvent("notify:betChanged", this.currentValue);
        }

        /**
         * creates selector number sprite
         * @returns {PIXI.Sprite} texture of selector number
         */

    }, {
        key: "addNumber",
        value: function addNumber() {
            var number = new PIXI.Sprite(_engine.textures[this.possibleValues[this.currentValue]]);
            number.anchor.set(0.5);
            number.width = 125;
            number.height = 125;
            number.position.set(100, 0);

            return number;
        }
    }]);

    return Selector;
}(PIXI.Container);

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

        _this.by({
            "notify:spinStart": _this.hideScreen,
            "notify:spinOver": _this.showScreen,
            "notify:betChanged": _this.hideScreen
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
         * makes winScreen visible
         * @param {object} config server's result config
         * @param {number} config.winAmount amount of win points
         */

    }, {
        key: "showScreen",
        value: function showScreen(config) {
            if (config && config.winAmount > 0) {
                var winMsg = "You won " + config.winAmount + " !!!";
                this.visible = true;
                this.message.text = winMsg;
                console.error(this.message);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9iZXRMaW5lcy9iZXRMaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2JldExpbmVzL2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9tYWluL2dhbWVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9tYWluL29ic2VydmFibGVNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L21haW4vc2VydmVyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvbWFpbi93aW5IYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvY3VzdG9tVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWVscy9yZWVsLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvcmVlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWVscy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3V0aWxzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvd2luU2NyZWVuL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3dpblNjcmVlbi93aW5TY3JlZW4uanMiXSwibmFtZXMiOlsiQmV0TGluZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJvYnNlcnZhYmxlTWl4aW4iLCJsaW5lUG9pbnRzIiwiYWRkTGluZVBvaW50cyIsImFsbExpbmVzIiwiYWRkTGluZXMiLCJieSIsImhpZGVXaW5MaW5lcyIsInNob3dXaW5MaW5lcyIsImFwcCIsInN0YWdlIiwiYWRkQ2hpbGQiLCJjb25maWciLCJnYW1lQ29uZmlnIiwiYmV0TGluZXMiLCJwb3NpdGlvbnMiLCJyZWVsc1Bvc2l0aW9uIiwidG9wT2Zmc2V0IiwicmVlbHMiLCJzbG90TGVuZ3RoIiwibGluZVBvc2l0aW9ucyIsImkiLCJsZW5ndGgiLCJjdXJCZXRMaW5lIiwiY3VyTGluZVBvaW50cyIsImoiLCJ4UG9pbnQiLCJyZWVsc1BvaW50cyIsIngiLCJ5UG9pbnQiLCJzeW1ib2xzUG9pbnQiLCJ5IiwicHVzaCIsImJldExpbmUiLCJMaW5lIiwiQXJyYXkiLCJpc0FycmF5Iiwid2luTGluZXMiLCJjdXJMaW5lIiwic2hvd1dpbkxpbmUiLCJmb3JFYWNoIiwibGluZSIsImhpZGVXaW5MaW5lIiwiUElYSSIsIkNvbnRhaW5lciIsImFyckNvbmZpZyIsImxpbmVTdHlsZSIsImNyZWF0ZUxpbmVCeVBvaW50cyIsIm1vdmVUbyIsImN1clBvaW50Q29uZmlnIiwibGluZVRvIiwidmlzaWJsZSIsIkdyYXBoaWNzIiwiQnV0dG9uIiwiYnV0dG9uVGV4dHVyZXMiLCJjYWxsYmFjayIsInRleHR1cmVzIiwiaWRsZSIsImlkbGVUZXh0dXJlIiwiaG92ZXJUZXh0dXJlIiwiaG92ZXIiLCJkb3duVGV4dHVyZSIsImRvd24iLCJkaXNhYmxlZFRleHR1cmUiLCJkaXNhYmxlZCIsIndpZHRoIiwiaGVpZ2h0IiwiYW5jaG9yIiwic2V0IiwicG9zaXRpb24iLCJpbnRlcmFjdGl2ZSIsInNldEhpdEFyZWEiLCJ0ZXh0dXJlIiwicmFkaXVzIiwiaGl0QXJlYSIsIkNpcmNsZSIsIlNwcml0ZSIsImNoYW5nZVJlZWxzU3Bpbm5pbmdUbyIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidmlldyIsIkxvYWRlciIsInNoYXJlZCIsImFkZCIsImxvYWQiLCJzZXR1cCIsImJhY2tncm91bmQiLCJzcGluQnV0dG9uIiwid2luU2NyZWVuIiwiYmV0U2VsZWN0b3IiLCJzZXJ2ZXJNb2NrIiwid2luU3ltYm9scyIsInJlbmRlckxvb3AiLCJhcmVSZWVsc1NwaW5uaW5nIiwicmVzb3VyY2VzIiwiUmVlbHMiLCJzcGluQnV0dG9uU3JjIiwib25TcGluQnV0dG9uQ2xpY2tlZCIsImVuYWJsZSIsIldpblNjcmVlbiIsImdhbWVTaXplIiwiU2VsZWN0b3IiLCJsZWZ0U2VsZWN0b3IiLCJyaWdodFNlbGVjdG9yIiwibnVtYmVycyIsIldpblN5bWJvbHMiLCJTZXJ2ZXJNb2NrIiwidGlja2VyIiwiZ2FtZUxvb3AiLCJkZWx0YSIsInVwZGF0ZSIsImJvb2xlYW4iLCJkaXNhYmxlIiwiZmlyZUV2ZW50IiwiY3VycmVudFZhbHVlIiwicmVlbHNldHMiLCJyb3dzIiwibGVmdE9mZnNldCIsImxlZnQiLCJzeW1ib2xEaW1lbnNpb25zIiwidmlzaWJsZVN5bWJOdW0iLCJzeW1ib2xzTnVtYmVyIiwic3ltYm9sU3BlZWQiLCJwYXJhbXMiLCJldmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJldmVudHMiLCJhZGRMaXN0ZW5lciIsImFyZ3MiLCJyZWVsc2V0c0xpc3QiLCJyZWVsc0xlbmd0aCIsInN0YXJ0IiwiYmV0U2l6ZSIsImN1cnJlbnRSZWVsc2V0Iiwic2VsZWN0UmVlbHNldCIsInNwaW5SZXN1bHQiLCJzZWxlY3RQb3NpdGlvbnMiLCJnZW5lcmF0ZWRSZXNwb25zZSIsImNoZWNrQmV0TGluZXMiLCJzZXRUaW1lb3V0IiwiaW5kZXgiLCJjdXJTZXQiLCJzdGFydFBvaW50IiwiY3VyUmVlbCIsIndpblBvaW50cyIsInJlc3BvbnNlIiwiY3VycmVudExpbmUiLCJzeW1ic01hdGNoZWQiLCJwb3NpdGlvbnNPblJlZWxzIiwiZ2VuZXJhdGVkTGluZSIsIm1hcCIsInJlZWwiLCJjdXJJbmRleCIsInNsaWNlIiwid2luQW1vdW50IiwiY3JlYXRlU3ltYm9sc0NvbmZpZyIsInNlcnZlclJlc3VsdCIsIm1hdHJpeCIsImNyZWF0ZVRlbXBsYXRlTWF0cml4Iiwic3ltYkluZGV4IiwidGVtcGxhdGUiLCJyb3dzTnVtIiwicmVlbHNOdW0iLCJDdXN0b21Ud2VlbiIsIm9iaiIsInByb3BlcnR5TmFtZSIsImVuZCIsInBlcmlvZCIsImdldFNwZWVkIiwidXBkYXRlUmVxdWlyZWQiLCJkaXN0YW5jZSIsInNwZWVkIiwib25Db21wbGV0ZSIsIm51bU9mRnJhbWVzIiwidGltZUJldHdlZW5GcmFtZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsIlJlZWwiLCJwb3NpdGlvbkNvbmZpZyIsInN5bWJvbHMiLCJhZGRTeW1ib2xzIiwic3ltYm9sc0JlZm9yZVJlc3VsdCIsInJlc3VsdFN5bWJvbHMiLCJjdXJSZXN1bHRTeW1iSW5kZXgiLCJzZXJ2ZXJEYXRhUmVjZWl2ZWQiLCJjdXJTeW1iIiwicG9zc2libGVTeW1TcmMiLCJzeW1ib2wiLCJTeW1ib2wiLCJJbmZpbml0eSIsImFsbCIsInN5bSIsInN0YXJ0U3BpbiIsInRoZW4iLCJkb1NwaW4iLCJiZXRSZXN1bHQiLCJzeW1ic0JmUmVzdWx0IiwicmVzb2x2ZUNoYWluIiwidXNlUmFuZG9tU3ltYiIsIm1vdmVPbmVTbG90IiwiZW5kU3BpbiIsIm9uU3Bpbk92ZXIiLCJsYXN0SW5kZXgiLCJsYXN0U3ltYm9sIiwibmV3SW5kZXgiLCJzZXROZXdTeW1ib2wiLCJ1bnNoaWZ0IiwicG9wIiwicGxheVdpbkFuaW1hdGlvbiIsInBsYXlMb3NzQW5pbWF0aW9uIiwicGxheUlkbGUiLCJhbGxSZWVscyIsImFkZFJlZWxzIiwibWFzayIsImFkZE1hc2siLCJ3aW5BbmltUmVxdWlyZWQiLCJyZXN1bHRDb25maWciLCJzZXJ2ZXJSZXNwb25zZVJlY2VpdmVkIiwiYWRkV2luSGFuZGxlclZhbHVlcyIsImN1clJlZWxQb2ludHMiLCJyZWVsc01hc2siLCJiZWdpbkZpbGwiLCJkcmF3UmVjdCIsInN0YXJ0UmVlbHNTcGluIiwic2VydmVyUmVzcG9uc2VSZXNvbHZlIiwic3RhcnRTdG9wU2VxdWVuY2UiLCJvblNwaW5Db21wbGV0ZSIsInN5bWJvbHNSZXN1bHRDb25maWciLCJzaG93V2luQW5pbWF0aW9uIiwiY3VyUmVzdWx0UmVlbCIsInNob3dXaW5TeW1iIiwidGV4dHVyZVNyYyIsInR5cGUiLCJzdGFydFNjYWxlIiwic2NhbGUiLCJfeCIsImVuZFNjYWxlIiwidHdlZW4iLCJib3VuY2VUd2VlbiIsInNjYWxlVHdlZW4iLCJwbGF5Iiwic2NhbGVVcCIsInNjYWxlRG93biIsImJpbmQiLCJwYXJlbnRSZWVsIiwicGFyZW50IiwiZ2xvYmFsWCIsImdldEdsb2JhbFBvc2l0aW9uIiwiZ2xvYmFsWSIsImxvY2FsWCIsImxvY2FsWSIsImFscGhhIiwiYWRkQ2hpbGRBdCIsInZhbHVlIiwibGVmdFNyYyIsInJpZ2h0U3JjIiwicG9zc2libGVWYWx1ZXMiLCJtaW51c0J1dHRvbiIsIm1pbnVzT25lIiwicGx1c0J1dHRvbiIsInBsdXNPbmUiLCJudW1iZXIiLCJhZGROdW1iZXIiLCJidXR0b25EaXNhYmxlQ2hlY2siLCJyYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwiUmVjdGFuZ2xlIiwiY29sb3IiLCJlbmRGaWxsIiwic2NyZWVuIiwibWVzc2FnZSIsImNyZWF0ZU1lc3NhZ2UiLCJoaWRlU2NyZWVuIiwic2hvd1NjcmVlbiIsIlRleHQiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJ3aW5Nc2ciLCJ0ZXh0IiwiY29uc29sZSIsImVycm9yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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LE1BQS9DO0FBQ0EscUJBQUt6RyxPQUFMLEdBQWUsSUFBZjtBQUNBLHFCQUFLa08sT0FBTCxDQUFhVSxJQUFiLEdBQW9CRCxNQUFwQjtBQUNBRSx3QkFBUUMsS0FBUixDQUFjLEtBQUtaLE9BQW5CO0FBQ0g7QUFDSjs7QUFFRDs7Ozs7O3FDQUdjO0FBQ1YsaUJBQUtsTyxPQUFMLEdBQWUsS0FBZjtBQUNIOzs7O0VBdEQwQlIsS0FBS1MsUSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2phdmFzY3JpcHQvZW5naW5lLmpzXCIpO1xuIiwiaW1wb3J0IHtMaW5lfSBmcm9tIFwiLi9saW5lXCI7XHJcbmltcG9ydCB7Z2FtZUNvbmZpZ30gZnJvbSBcIi4uL21haW4vZ2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQge29ic2VydmFibGVNaXhpbn0gZnJvbSBcIi4uL21haW4vb2JzZXJ2YWJsZU1peGluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQmV0TGluZXMgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lcntcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuXHJcbiAgICAgICAgdGhpcy5saW5lUG9pbnRzID0gdGhpcy5hZGRMaW5lUG9pbnRzKCk7XHJcbiAgICAgICAgdGhpcy5hbGxMaW5lcyA9IHRoaXMuYWRkTGluZXModGhpcy5saW5lUG9pbnRzKTtcclxuXHJcbiAgICAgICAgdGhpcy5ieSh7XHJcbiAgICAgICAgICAgIFwibm90aWZ5OnNwaW5TdGFydFwiIDogdGhpcy5oaWRlV2luTGluZXMsXHJcbiAgICAgICAgICAgIFwibm90aWZ5OnNwaW5PdmVyXCIgOiB0aGlzLnNob3dXaW5MaW5lcyxcclxuICAgICAgICAgICAgXCJub3RpZnk6YmV0Q2hhbmdlZFwiIDogdGhpcy5oaWRlV2luTGluZXNcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIGxpbmUgcG9pbnRzIGRlcGVuZHMgb24gZ2FtZUNvbmZpZyBwYXJhbXMgYW5kIGFkZCBpdCB0byBhcnJheVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIGxpbmUgcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIGFkZExpbmVQb2ludHMgKCkge1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe30sIGdhbWVDb25maWcpO1xyXG4gICAgICAgIGNvbnN0IGJldExpbmVzID0gY29uZmlnLmJldExpbmVzO1xyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGNvbmZpZy5yZWVsc1Bvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IHRvcE9mZnNldCA9IHBvc2l0aW9ucy50b3BPZmZzZXQgKyBwb3NpdGlvbnMucmVlbHMuc2xvdExlbmd0aC8yO1xyXG5cclxuICAgICAgICBjb25zdCBsaW5lUG9zaXRpb25zID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBiZXRMaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJCZXRMaW5lID0gYmV0TGluZXNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGN1ckxpbmVQb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjdXJCZXRMaW5lLmxlbmd0aDsgaisrKXtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB4UG9pbnQgPSBwb3NpdGlvbnMucmVlbHNQb2ludHNbal0ueDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlQb2ludCA9IHBvc2l0aW9ucy5zeW1ib2xzUG9pbnRbY3VyQmV0TGluZVtqXV0ueSArIHRvcE9mZnNldDtcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJMaW5lUG9pbnRzLnB1c2goe3g6IHhQb2ludCwgeTogeVBvaW50fSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxpbmVQb3NpdGlvbnMucHVzaChjdXJMaW5lUG9pbnRzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGxpbmVQb3NpdGlvbnM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgbGluZXMgdXNpbmcgbGluZXMgcG9pbnRzIGFuZCBhZGQgaXQgdG8gYXJyYXlcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGxpbmVQb2ludHMgYXJyYXkgd2l0aCBwb2ludHMgZm9yIGxpbmVzXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFycmF5IHdpdGggbGluZXNcclxuICAgICAqL1xyXG4gICAgYWRkTGluZXMgKGxpbmVQb2ludHMpIHtcclxuICAgICAgICBjb25zdCBhbGxMaW5lcyA9IFtdO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaW5lUG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb25maWcgPSBsaW5lUG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiZXRMaW5lID0gbmV3IExpbmUoY29uZmlnKTtcclxuXHJcbiAgICAgICAgICAgIGFsbExpbmVzLnB1c2goYmV0TGluZSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoYmV0TGluZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gYWxsTGluZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiAgc2hvdyB3aW4gbGluZXMgZGVwZW5kcyBvbiBjb25maWdcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgcmVzdWx0IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHthcnJheX0gY29uZmlnLndpbkxpbmVzIGFycmF5IHdpdGggd2luIGxpbmVzXHJcbiAgICAgKi9cclxuICAgIHNob3dXaW5MaW5lcyhjb25maWcpIHtcclxuICAgICAgICBpZihjb25maWcgfHwgQXJyYXkuaXNBcnJheShjb25maWcud2luTGluZXMpICl7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb25maWcud2luTGluZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VyTGluZSA9IGNvbmZpZy53aW5MaW5lc1tpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsTGluZXNbY3VyTGluZV0uc2hvd1dpbkxpbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBkZWZhdWx0IHBhcmFtcyBmb3IgYWxsIGxpbmVzXHJcbiAgICAgKi9cclxuICAgIGhpZGVXaW5MaW5lcygpIHtcclxuICAgICAgICB0aGlzLmFsbExpbmVzLmZvckVhY2goIChsaW5lKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmUuaGlkZVdpbkxpbmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBMaW5lIGV4dGVuZHMgUElYSS5HcmFwaGljcyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoIGFyckNvbmZpZyApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmVTdHlsZSgzLCAweDAwZmYwMCwgMC41KTtcclxuICAgICAgICB0aGlzLmNyZWF0ZUxpbmVCeVBvaW50cyhhcnJDb25maWcpO1xyXG4gICAgICAgIHRoaXMuaGlkZVdpbkxpbmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZXMgbGluZSB1c2luZyB4LHkgcG9pbnRzIGZyb20gYXJyYXlcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFyckNvbmZpZyBBcnJheTx7eDogbnVtYmVyLCB5Om51bWJlcn0+IGFycmF5IHdpdGggeCx5IHBvaW50c1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVMaW5lQnlQb2ludHMoYXJyQ29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5tb3ZlVG8oYXJyQ29uZmlnWzBdLngsIGFyckNvbmZpZ1swXS55KTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGFyckNvbmZpZy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clBvaW50Q29uZmlnID0gYXJyQ29uZmlnW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVUbyhjdXJQb2ludENvbmZpZy54LCBjdXJQb2ludENvbmZpZy55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlcyBsaW5lIHZpc2libGVcclxuICAgICAqL1xyXG4gICAgc2hvd1dpbkxpbmUoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhpZGVzIGxpbmVcclxuICAgICAqL1xyXG4gICAgaGlkZVdpbkxpbmUgKCkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHt0ZXh0dXJlc30gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi9tYWluL29ic2VydmFibGVNaXhpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgYnV0dG9uVGV4dHVyZXMsIGNhbGxiYWNrKXtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlc1tidXR0b25UZXh0dXJlcy5pZGxlXSk7XHJcblxyXG4gICAgICAgIHRoaXMuaWRsZVRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5pZGxlO1xyXG4gICAgICAgIHRoaXMuaG92ZXJUZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuaG92ZXI7XHJcbiAgICAgICAgdGhpcy5kb3duVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmRvd247XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZFRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5kaXNhYmxlZDtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IDEwMDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IDEwMDtcclxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcclxuXHJcbiAgICAgICAgdGhpcy5zZXRIaXRBcmVhKDEyNSk7XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG1vdXNlb3ZlcigpIHtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0aGlzLmRpc2FibGVkID8gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdIDogdGV4dHVyZXNbdGhpcy5ob3ZlclRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlb3V0KCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZGlzYWJsZWQgPyB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV0gOiB0ZXh0dXJlc1t0aGlzLmlkbGVUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZWRvd24oKSB7XHJcbiAgICAgICAgaWYodGhpcy5kaXNhYmxlZCl7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLmRvd25UZXh0dXJlXTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtb3VzZXVwKCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZGlzYWJsZWQgPyB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV0gOiB0ZXh0dXJlc1t0aGlzLmhvdmVyVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgZW5hYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLmlkbGVUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNhYmxlICgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzIGhpdEFyZWEgcmFkaXVzXHJcbiAgICAgKi9cclxuICAgIHNldEhpdEFyZWEgKHJhZGl1cykge1xyXG4gICAgICAgIHRoaXMuaGl0QXJlYSA9IG5ldyBQSVhJLkNpcmNsZSgwLCAwLCByYWRpdXMpO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtCdXR0b259IGZyb20gXCIuL2J1dHRvblwiO1xyXG5pbXBvcnQge1JlZWxzfSBmcm9tIFwiLi9yZWVscy9yZWVsc1wiO1xyXG5pbXBvcnQge1dpblNjcmVlbn0gZnJvbSBcIi4vd2luU2NyZWVuL3dpblNjcmVlblwiO1xyXG5pbXBvcnQge1NlbGVjdG9yfSBmcm9tIFwiLi9zZWxlY3RvclwiO1xyXG5pbXBvcnQge1NlcnZlck1vY2t9IGZyb20gXCIuL21haW4vc2VydmVyXCI7XHJcbmltcG9ydCB7QmV0TGluZXN9IGZyb20gXCIuL2JldExpbmVzL2JldExpbmVzXCI7XHJcbmltcG9ydCB7V2luU3ltYm9sc30gZnJvbSBcIi4vbWFpbi93aW5IYW5kbGVyXCI7XHJcbmltcG9ydCB7Z2FtZUNvbmZpZ30gZnJvbSBcIi4vbWFpbi9nYW1lQ29uZmlnXCI7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFwcC52aWV3KTtcclxuXHJcblBJWEkuTG9hZGVyLnNoYXJlZFxyXG4gICAgLmFkZChcIi4vaW1hZ2VzL3NoZWV0Lmpzb25cIilcclxuICAgIC5sb2FkKHNldHVwKTtcclxuXHJcbmV4cG9ydCBsZXQgdGV4dHVyZXMsXHJcbiAgICBiYWNrZ3JvdW5kLFxyXG4gICAgc3BpbkJ1dHRvbixcclxuICAgIHJlZWxzLFxyXG4gICAgd2luU2NyZWVuLFxyXG4gICAgYmV0U2VsZWN0b3IsXHJcbiAgICBzZXJ2ZXJNb2NrLFxyXG4gICAgYmV0TGluZXMsXHJcbiAgICB3aW5TeW1ib2xzO1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbmRlckxvb3AgPSBbXTtcclxuZXhwb3J0IGxldCBhcmVSZWVsc1NwaW5uaW5nID0gZmFsc2U7XHJcblxyXG5mdW5jdGlvbiBzZXR1cCgpIHtcclxuICAgIHRleHR1cmVzID0gUElYSS5Mb2FkZXIuc2hhcmVkLnJlc291cmNlc1tcIi4vaW1hZ2VzL3NoZWV0Lmpzb25cIl0udGV4dHVyZXM7XHJcblxyXG4gICAgYmFja2dyb3VuZCA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlc1tcImJhY2tncm91bmQucG5nXCJdKTtcclxuICAgIGFwcC5zdGFnZS5hZGRDaGlsZChiYWNrZ3JvdW5kKTtcclxuXHJcblxyXG4gICAgYmV0TGluZXMgPSBuZXcgQmV0TGluZXMoKTtcclxuICAgIHJlZWxzID0gbmV3IFJlZWxzKCk7XHJcblxyXG4gICAgc3BpbkJ1dHRvbiA9IG5ldyBCdXR0b24oNDAwLCA0NTAsIHNwaW5CdXR0b25TcmMsIG9uU3BpbkJ1dHRvbkNsaWNrZWQpO1xyXG4gICAgc3BpbkJ1dHRvbi5ieSh7XCJub3RpZnk6c3Bpbk92ZXJcIjogc3BpbkJ1dHRvbi5lbmFibGV9KTtcclxuXHJcbiAgICB3aW5TY3JlZW4gPSBuZXcgV2luU2NyZWVuKDAsZ2FtZUNvbmZpZy5nYW1lU2l6ZS5oZWlnaHQsIDMwMCwgMTAwLCAweDY5Njk2OSk7XHJcbiAgICBiZXRTZWxlY3RvciA9IG5ldyBTZWxlY3Rvcig1NTAsIDQ1MCwgbGVmdFNlbGVjdG9yLCByaWdodFNlbGVjdG9yLCBudW1iZXJzKTtcclxuXHJcbiAgICB3aW5TeW1ib2xzID0gbmV3IFdpblN5bWJvbHMoKTtcclxuXHJcbiAgICBzZXJ2ZXJNb2NrID0gbmV3IFNlcnZlck1vY2soKTtcclxuXHJcbiAgICBhcHAudGlja2VyLmFkZChkZWx0YSA9PiBnYW1lTG9vcChkZWx0YSkpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcChkZWx0YSl7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVuZGVyTG9vcC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgcmVuZGVyTG9vcFtpXS51cGRhdGUoZGVsdGEpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICogZ2l2ZXMgc3BpbkJ1dHRvbiBhbiBvcHRpb24gdG8gc3RvcCBzcGluIHdpdGggY3VycmVudCBpdGVyYXRpb25cclxuICogQHBhcmFtIHtib29sZWFufSBib29sZWFuIHNldCBhbmltYXRpb25SZXF1aXJlZCB0byB0cnVlIG9yIGZhbHNlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlUmVlbHNTcGlubmluZ1RvIChib29sZWFuKSB7XHJcbiAgICBhcmVSZWVsc1NwaW5uaW5nID0gYm9vbGVhbjtcclxufVxyXG5cclxuXHJcbi8qKlxyXG4gKiBzdGFydC9zdG9wIHNwaW4gZGVwZW5kaW5nIG9uIGFyZVJlZWxzU3Bpbm5pbmcgcGFyYW1cclxuICovXHJcbmZ1bmN0aW9uIG9uU3BpbkJ1dHRvbkNsaWNrZWQoKSB7XHJcbiAgICBpZihhcmVSZWVsc1NwaW5uaW5nKXtcclxuICAgICAgICBjaGFuZ2VSZWVsc1NwaW5uaW5nVG8oZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmZpcmVFdmVudChcIm5vdGlmeTpzcGluU3RhcnRcIiwgYmV0U2VsZWN0b3IuY3VycmVudFZhbHVlICsgMSlcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY29uc3QgZ2FtZUNvbmZpZyAgPSB7XHJcbiAgICBiZXRMaW5lcyA6IFtcclxuICAgICAgICBbMCwwLDAsMCwwXSxcclxuICAgICAgICBbMSwxLDEsMSwxXSxcclxuICAgICAgICBbMiwyLDIsMiwyXSxcclxuICAgICAgICBbMCwxLDIsMSwwXSxcclxuICAgICAgICBbMiwxLDAsMSwyXSxcclxuICAgICAgICBbMSwwLDEsMCwxXSxcclxuICAgICAgICBbMSwyLDEsMiwxXVxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgcmVlbHNldHMgOiBbXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFsxLDAsMiwwLDIsMCwxLDAsMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwwLDIsMSwwLDEsMiwwLDJdLFxyXG4gICAgICAgICAgICAgICAgWzEsMSwyLDIsMiwwLDEsMCwxXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMCwwLDIsMCwwLDEsMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwwLDEsMSwwLDAsMiwyLDFdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFswLDIsMiwxLDAsMCwyLDEsMl0sXHJcbiAgICAgICAgICAgICAgICBbMiwyLDEsMSwwLDEsMiwwLDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsMSwwLDIsMSwwLDIsMCwwXSxcclxuICAgICAgICAgICAgICAgIFsyLDEsMSwyLDAsMCwxLDAsMl0sXHJcbiAgICAgICAgICAgICAgICBbMSwwLDIsMiwyLDEsMCwyLDBdXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIFtcclxuICAgICAgICAgICAgICAgIFsxLDIsMCwxLDAsMSwyLDEsMl0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDAsMCwyLDAsMCwxLDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsMSwwLDIsMSwwLDIsMCwxXSxcclxuICAgICAgICAgICAgICAgIFsxLDAsMiwyLDIsMSwwLDIsMF0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDAsMCwyLDAsMCwxLDJdXHJcbiAgICAgICAgICAgIF1cclxuICAgIF0sXHJcblxyXG5cclxuICAgIGdhbWVTaXplIDoge1xyXG4gICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgcm93czogMyxcclxuICAgICAgICByZWVsczogNVxyXG4gICAgfSxcclxuXHJcbiAgICByZWVsc1Bvc2l0aW9uIDoge1xyXG4gICAgICAgIHRvcE9mZnNldCA6IDEwLFxyXG4gICAgICAgIGxlZnRPZmZzZXQgOiAxNSxcclxuXHJcbiAgICAgICAgcmVlbHMgOiB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDgwLFxyXG4gICAgICAgICAgICBzbG90TGVuZ3RoOiAxMzQsXHJcbiAgICAgICAgICAgIHN5bWJvbERpbWVuc2lvbnM6IHt3aWR0aDogMTEwLCBoZWlnaHQ6IDExMH0sXHJcbiAgICAgICAgICAgIHZpc2libGVTeW1iTnVtOiAzLFxyXG4gICAgICAgICAgICBzeW1ib2xzTnVtYmVyOiA0LFxyXG4gICAgICAgICAgICBzeW1ib2xTcGVlZCA6IDE2MFxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHJlZWxzUG9pbnRzIDogW1xyXG4gICAgICAgICAgICB7eCA6IDgwLCB5IDogMTM0LzJ9LFxyXG4gICAgICAgICAgICB7eCA6IDgwICogMywgeSA6IDEzNC8yfSxcclxuICAgICAgICAgICAge3ggOiA4MCAqIDUsIHkgOiAxMzQvMn0sXHJcbiAgICAgICAgICAgIHt4IDogODAgKiA3LCB5IDogMTM0LzJ9LFxyXG4gICAgICAgICAgICB7eCA6IDgwICogOSwgeSA6IDEzNC8yfVxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIHN5bWJvbHNQb2ludCA6IFtcclxuICAgICAgICAgICAge3ggOiAwLCB5IDogMH0sXHJcbiAgICAgICAgICAgIHt4IDogMCwgeSA6IDEzNH0sXHJcbiAgICAgICAgICAgIHt4IDogMCwgeSA6IDEzNCAqIDJ9LFxyXG4gICAgICAgICAgICB7eCA6IDAsIHkgOiAxMzQgKiAzfSxcclxuXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcblxyXG59OyIsIi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xyXG5leHBvcnQgY29uc3Qgb2JzZXJ2YWJsZU1peGluID0ge1xyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyB7T2JqZWN0LjxzdHJpbmcsIGZ1bmN0aW9uPn1cclxuICAgICAqL1xyXG4gICAgYnkgOiBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgaWYoICF0aGlzLmV2ZW50SGFuZGxlcnMgKXtcclxuICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzID0ge307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IoIGxldCBldmVudE5hbWUgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGlmKCBwYXJhbXMuaGFzT3duUHJvcGVydHkoZXZlbnROYW1lKSApIHtcclxuICAgICAgICAgICAgICAgIGlmICggIXRoaXMuZXZlbnRIYW5kbGVyc1tldmVudE5hbWVdKXtcclxuICAgICAgICAgICAgICAgICAgICBldmVudHMuYWRkTGlzdGVuZXIoZXZlbnROYW1lLCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSA9IHBhcmFtc1tldmVudE5hbWVdIDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZSBldmVudE5hbWVcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGFyZ3MgYXJyYXkgd2l0aCBhcmd1bWVudHNcclxuICAgICAqL1xyXG4gICAgZmlyZUV2ZW50IDogZnVuY3Rpb24oZXZlbnROYW1lLCAuLi5hcmdzKXtcclxuICAgICAgICBldmVudHMuZmlyZUV2ZW50KGV2ZW50TmFtZSwgYXJncyk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHtyYW5kb21JbnR9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQge2dhbWVDb25maWd9IGZyb20gXCIuL2dhbWVDb25maWdcIjtcclxuaW1wb3J0IHtvYnNlcnZhYmxlTWl4aW59IGZyb20gXCIuL29ic2VydmFibGVNaXhpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlcnZlck1vY2sge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZWVsc2V0c0xpc3QgPSBnYW1lQ29uZmlnLnJlZWxzZXRzO1xyXG4gICAgICAgIHRoaXMuYmV0TGluZXMgPSBnYW1lQ29uZmlnLmJldExpbmVzO1xyXG4gICAgICAgIHRoaXMucmVlbHNMZW5ndGggPSBnYW1lQ29uZmlnLmdhbWVTaXplLnJvd3M7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG5cclxuICAgICAgICB0aGlzLmJ5KHtcIm5vdGlmeTpzcGluU3RhcnRcIiA6IHRoaXMuc3RhcnR9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1cG9uIHJlcXVlc3QgZnJvbSBjbGllbnQgY3JlYXRlcyBzcGluL2JldCByZXN1bHQgYW5kIGluZm9ybSB0aGUgY2xpZW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYmV0U2l6ZSBtdWx0aXBsaWVyIGZvciB3aW4gcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KGJldFNpemUpe1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRSZWVsc2V0ID0gdGhpcy5zZWxlY3RSZWVsc2V0KHRoaXMucmVlbHNldHNMaXN0KTtcclxuICAgICAgICBjb25zdCBzcGluUmVzdWx0ID0gdGhpcy5zZWxlY3RQb3NpdGlvbnMoY3VycmVudFJlZWxzZXQpO1xyXG4gICAgICAgIGNvbnN0IGdlbmVyYXRlZFJlc3BvbnNlID0gdGhpcy5jaGVja0JldExpbmVzIChzcGluUmVzdWx0LCBiZXRTaXplKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJub3RpZnk6c2VydmVyTWFuYWdlci5uZXdSZXNwb25zZVwiLCBnZW5lcmF0ZWRSZXNwb25zZSk7XHJcbiAgICAgICAgfSwxMDAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByYW5kb21seSBzZWxlY3QgcmVlbHNldCBmcm9tIHJlZWxzZXRzTGlzdFxyXG4gICAgICogQHBhcmFtIHthcnJheX0gcmVlbHNldHNMaXN0IGFycmF5IHdpdGggcmVlbHNldHNcclxuICAgICAqIEByZXR1cm5zIHthcnJheX0gc2VsZWN0ZWQgcmVlbHNldFxyXG4gICAgICovXHJcbiAgICBzZWxlY3RSZWVsc2V0IChyZWVsc2V0c0xpc3QpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHJhbmRvbUludCgwLCByZWVsc2V0c0xpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIHJlZWxzZXRzTGlzdFtpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByYW5kb21seSBzZWxlY3RzIHN0YXJ0IHBvc2l0aW9ucyBvbiBlYWNoIHJlZWwgYW5kIGdlbmVyYXRlIG5ldyBhcnJheSB3aXRoIG5leHQgMyBzeW1ib2xzXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjdXJyZW50UmVlbHNldCBhcnJheSB3aXRoIHBvc3NpYmxlIHZhbHVlcyBmb3IgZWFjaCByZWVsXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IDJkIGFycmF5IHdpdGggc3BpbiByZXN1bHRcclxuICAgICAqL1xyXG4gICAgc2VsZWN0UG9zaXRpb25zIChjdXJyZW50UmVlbHNldCkge1xyXG5cclxuICAgICAgICBjb25zdCBzcGluUmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjdXJyZW50UmVlbHNldC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clNldCA9IGN1cnJlbnRSZWVsc2V0W2ldO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0UG9pbnQgPSByYW5kb21JbnQoMCwgY3VyU2V0Lmxlbmd0aCAtIHRoaXMucmVlbHNMZW5ndGgpO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJSZWVsID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGhpcy5yZWVsc0xlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJSZWVsLnB1c2goY3VyU2V0W3N0YXJ0UG9pbnQgKyBqXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHNwaW5SZXN1bHQucHVzaChjdXJSZWVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNwaW5SZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkZXBlbmRzIG9uIHNwaW4gcmVzdWx0IGNoZWNrIGJldCBsaW5lcyBhbmQgZ2VuZXJhdGVzIHJlc3VsdCBjb25maWdcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHNwaW5SZXN1bHQgdHdvLWxldmVscyBhcnJheSB3aXRoIHNwaW4gcmVzdWx0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYmV0U2l6ZSB3aW4gcG9pbnRzIG11bHRpcGxpZXJcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHJlc3VsdENvbmZpZyByZXN1bHQgY29uZmlndXJhdGlvbiBvZiBjdXJyZW50IGJldFxyXG4gICAgICogICAgICAgICAge251bWJlcn0gcmVzdWx0Q29uZmlnLndpbkFtb3VudCBhbW91bnQgb2Ygd2luIHBvaW50XHJcbiAgICAgKiAgICAgICAgICB7YXJyYXl9IHJlc3VsdENvbmZpZy53aW5MaW5lcyBhcnJheSB3aXRoIHdpbiBiZXQgbGluZXNcclxuICAgICAqICAgICAgICAgIHthcnJheX0gcmVzdWx0Q29uZmlnLndpblN5bWJvbHMgYXJyYXkgd2l0aCB3aW4gc3ltYm9sc1xyXG4gICAgICogICAgICAgICAge2FycmF5fSByZXN1bHRDb25maWcuc3BpblJlc3VsdCAyZCBhcnJheSB3aXRoIHNwaW4gcmVzdWx0XHJcbiAgICAgKi9cclxuICAgIGNoZWNrQmV0TGluZXMgKHNwaW5SZXN1bHQsIGJldFNpemUpe1xyXG4gICAgICAgIGxldCB3aW5Qb2ludHMgPSAwO1xyXG4gICAgICAgIGNvbnN0IHdpblN5bWJvbHMgPSBbXTtcclxuICAgICAgICBjb25zdCB3aW5MaW5lcyA9IFtdO1xyXG5cclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IHt9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmV0TGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VycmVudExpbmUgID0gdGhpcy5iZXRMaW5lc1tpXTtcclxuICAgICAgICAgICAgbGV0IHN5bWJzTWF0Y2hlZCA9IDE7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnNPblJlZWxzID0gW107XHJcblxyXG4gICAgICAgICAgICBjb25zdCBnZW5lcmF0ZWRMaW5lID0gc3BpblJlc3VsdC5tYXAoIChyZWVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJJbmRleCA9IGN1cnJlbnRMaW5lW2ldO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zT25SZWVscy5wdXNoKGN1ckluZGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWVsW2N1ckluZGV4XTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZ2VuZXJhdGVkTGluZS5sZW5ndGggLSAxOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYXRlZExpbmVbal0gPT09IGdlbmVyYXRlZExpbmVbaisxXSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzeW1ic01hdGNoZWQgKz0xO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoc3ltYnNNYXRjaGVkID4gMikge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpblN5bWJvbHMucHVzaChwb3NpdGlvbnNPblJlZWxzLnNsaWNlKDAsIHN5bWJzTWF0Y2hlZCkpO1xyXG4gICAgICAgICAgICAgICAgd2luTGluZXMucHVzaChpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZihzeW1ic01hdGNoZWQgPT09IDMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAxMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzeW1ic01hdGNoZWQgPT09IDQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAzMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihzeW1ic01hdGNoZWQgPT09IDUpe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpblBvaW50cyArPSAxMDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNwb25zZS53aW5BbW91bnQgPSAgd2luUG9pbnRzICogYmV0U2l6ZTtcclxuICAgICAgICByZXNwb25zZS53aW5MaW5lcyA9IHdpbkxpbmVzO1xyXG4gICAgICAgIHJlc3BvbnNlLndpblN5bWJvbHMgPSB3aW5TeW1ib2xzO1xyXG4gICAgICAgIHJlc3BvbnNlLnNwaW5SZXN1bHQgPSBzcGluUmVzdWx0O1xyXG5cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2U7XHJcblxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Z2FtZUNvbmZpZ30gZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xyXG5pbXBvcnQge29ic2VydmFibGVNaXhpbn0gZnJvbSBcIi4vb2JzZXJ2YWJsZU1peGluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luU3ltYm9scyAge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG4gICAgICAgIHRoaXMuYnkoe1wibm90aWZ5OnNlcnZlck1hbmFnZXIubmV3UmVzcG9uc2VcIiA6IHRoaXMuY3JlYXRlU3ltYm9sc0NvbmZpZ30pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlIHdpbiBjb25maWcgZGVwZW5kcyBvbiBzZXJ2ZXIgcmVzcG9uc2VcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBzZXJ2ZXJSZXN1bHRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzZXJ2ZXJSZXN1bHQud2luQW1vdW50IGFtb3VudCBvZiB3aW4gcG9pbnRcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHNlcnZlclJlc3VsdC53aW5MaW5lcyBhcnJheSB3aXRoIHdpbiBiZXQgbGluZXNcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHNlcnZlclJlc3VsdC53aW5TeW1ib2xzIGFycmF5IHdpdGggd2luIHN5bWJvbHNcclxuICAgICAqL1xyXG4gICAgY3JlYXRlU3ltYm9sc0NvbmZpZyAoc2VydmVyUmVzdWx0KSB7XHJcblxyXG4gICAgICAgIGlmKHNlcnZlclJlc3VsdC53aW5BbW91bnQgPT09IDApe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXRyaXggPSB0aGlzLmNyZWF0ZVRlbXBsYXRlTWF0cml4KCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VydmVyUmVzdWx0LndpblN5bWJvbHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBjdXJMaW5lID0gc2VydmVyUmVzdWx0LndpblN5bWJvbHNbaV07XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgY3VyTGluZS5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJSZWVsID0gIG1hdHJpeFtqXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN5bWJJbmRleCA9IGN1ckxpbmVbal07XHJcblxyXG4gICAgICAgICAgICAgICAgY3VyUmVlbFtzeW1iSW5kZXhdID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpcmVFdmVudChcIm5vdGlmeTp3aW5TeW1ib2xzUHJvY2Vzc2VkXCIsIG1hdHJpeCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIG1hdHJpeCBkZXBlbmRzIG9uIGdhbWVDb25maWcgcGFyYW1zXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9IG1hdHJpeCB3aXRoIGZhbHNlIHBhcmFtc1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVUZW1wbGF0ZU1hdHJpeCgpe1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJvd3NOdW0gPSBnYW1lQ29uZmlnLmdhbWVTaXplLnJvd3M7XHJcbiAgICAgICAgY29uc3QgcmVlbHNOdW0gPSBnYW1lQ29uZmlnLmdhbWVTaXplLnJlZWxzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVlbHNOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clJlZWwgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCByb3dzTnVtOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgY3VyUmVlbC5wdXNoKGZhbHNlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRlbXBsYXRlLnB1c2goY3VyUmVlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3JlbmRlckxvb3B9IGZyb20gXCIuLi9lbmdpbmVcIjtcclxuaW1wb3J0IHt0aW1lQmV0d2VlbkZyYW1lc30gZnJvbSBcIi4uL3V0aWxzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tVHdlZW4ge1xyXG4gICAgY29uc3RydWN0b3Iob2JqLCBwcm9wZXJ0eU5hbWUsIHN0YXJ0LCBlbmQsIHBlcmlvZCl7XHJcblxyXG4gICAgICAgIHRoaXMub2JqID0gb2JqO1xyXG4gICAgICAgIHRoaXMuc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICB0aGlzLnByb3BlcnR5TmFtZSA9IHByb3BlcnR5TmFtZTtcclxuICAgICAgICB0aGlzLmdldFNwZWVkKHBlcmlvZCk7XHJcblxyXG4gICAgICAgIHJlbmRlckxvb3AucHVzaCh0aGlzKTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBvbiBlYWNoIGZyYW1lIGV2ZW5seSBjaGFuZ2UgcmVxdWlyZWQgcGFyYW0sIGZyb20gdGhlIHN0YXJ0IHBvaW50IHRvIHRoZSBlbmQsIGZvciBhIHNldCBwZXJpb2Qgb2YgdGltZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhIGVsaW1pbmF0ZXMgZGVsYXlzIGJldHdlZW4gZnJhbWVzXHJcbiAgICAgKi9cclxuICAgIHVwZGF0ZSAoZGVsdGEpe1xyXG4gICAgICAgIGlmKHRoaXMudXBkYXRlUmVxdWlyZWQpe1xyXG4gICAgICAgICAgICBpZih0aGlzLmRpc3RhbmNlID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA8IHRoaXMuZW5kKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdICA+PSB0aGlzLmVuZCAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdID0gdGhpcy5lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPiB0aGlzLmVuZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSAgPD0gdGhpcy5lbmQgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA9IHRoaXMuZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmF0ZXMgc3BlZWQgZGVwZW5kIG9uIGRpc3RhbmNlIGFuZCBwZXJpb2RcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJpb2QgcGVyaW9kIG9mIHRpbWUgbmVlZGVkIHRvIHJlYWNoIHRoZSBlbmRwb2ludFxyXG4gICAgICovXHJcbiAgICBnZXRTcGVlZCAocGVyaW9kKSB7XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuZW5kIC0gdGhpcy5zdGFydDtcclxuICAgICAgICB0aGlzLm51bU9mRnJhbWVzID0gcGVyaW9kL3RpbWVCZXR3ZWVuRnJhbWVzO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmRpc3RhbmNlL3RoaXMubnVtT2ZGcmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IHN0YXJ0IHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kIGVuZCBwb2ludFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcmlvZCBwZXJpb2Qgb2YgdGltZSBuZWVkZWQgdG8gcmVhY2ggdGhlIGVuZHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNvbXBsZXRlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBwbGF5KHN0YXJ0LCBlbmQsIHBlcmlvZCwgb25Db21wbGV0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICAgICAgdGhpcy5nZXRTcGVlZChwZXJpb2QpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2FyZVJlZWxzU3Bpbm5pbmd9IGZyb20gXCIuLi9lbmdpbmVcIjtcclxuaW1wb3J0IHtyYW5kb21JbnR9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5pbXBvcnQge1N5bWJvbH0gZnJvbSBcIi4vc3ltYm9sXCI7XHJcbmltcG9ydCB7Z2FtZUNvbmZpZ30gZnJvbSBcIi4uL21haW4vZ2FtZUNvbmZpZ1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlZWwgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lcntcclxuICAgIGNvbnN0cnVjdG9yKHgsIHkpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uQ29uZmlnID0gZ2FtZUNvbmZpZy5yZWVsc1Bvc2l0aW9uLnJlZWxzO1xyXG4gICAgICAgIHRoaXMuc3ltYm9sc1BvaW50ID0gZ2FtZUNvbmZpZy5yZWVsc1Bvc2l0aW9uLnN5bWJvbHNQb2ludDtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ltYm9scyA9IHRoaXMuYWRkU3ltYm9scyh0aGlzLnN5bWJvbHNQb2ludCk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdCA9IDA7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRTeW1ib2xzID0gW107XHJcbiAgICAgICAgdGhpcy5jdXJSZXN1bHRTeW1iSW5kZXggPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VydmVyRGF0YVJlY2VpdmVkID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWRkaW5nIHN5bWJvbHMgdG8gcmVlbCBieSBzeW1ib2xzUG9pbnQgZnJvbSBnYW1lQ29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBzeW1ib2xzUG9pbnQgYXJyYXkgd2l0aCBwb2ludHMgZm9yIHN5bWJvbHNcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gYXJyYXkgd2l0aCBzeW1ib2xzXHJcbiAgICAgKi9cclxuICAgIGFkZFN5bWJvbHMoc3ltYm9sc1BvaW50KSB7XHJcbiAgICAgICAgY29uc3Qgc3ltYm9scyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3ltYm9sc1BvaW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clN5bWIgPSBzeW1ib2xzUG9pbnRbaV07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHJhbmRvbUludCgwLCBwb3NzaWJsZVN5bVNyYy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgY29uc3Qgc3ltYm9sID0gbmV3IFN5bWJvbChwb3NzaWJsZVN5bVNyY1tpbmRleF0sIHRoaXMucG9zaXRpb25Db25maWcpO1xyXG4gICAgICAgICAgICBzeW1ib2wucG9zaXRpb24uc2V0KGN1clN5bWIueCAsIGN1clN5bWIueSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3ltYm9sKTtcclxuICAgICAgICAgICAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3ltYm9scztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc3RhcnQgc3Bpbm5pbmcgc3ltYm9sc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID0gSW5maW5pdHk7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuc3ltYm9scy5tYXAoc3ltID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHN5bS5zdGFydFNwaW4oKTtcclxuICAgICAgICB9KSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5kb1NwaW4oKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0U3RvcFNlcXVlbmNlKGJldFJlc3VsdCwgc3ltYnNCZlJlc3VsdCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSggcmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdCA9IHN5bWJzQmZSZXN1bHQ7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdWx0U3ltYm9scyA9IGJldFJlc3VsdDtcclxuICAgICAgICAgICAgdGhpcy5jdXJSZXN1bHRTeW1iSW5kZXggPSB0aGlzLnJlc3VsdFN5bWJvbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICAgICAgdGhpcy5zZXJ2ZXJEYXRhUmVjZWl2ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlQ2hhaW4gPSByZXNvbHZlXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGRvU3Bpbih1c2VSYW5kb21TeW1iID0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMubW92ZU9uZVNsb3QodXNlUmFuZG9tU3ltYilcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0LS07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdCA+IDAgJiYgYXJlUmVlbHNTcGlubmluZyB8fCAhdGhpcy5zZXJ2ZXJEYXRhUmVjZWl2ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvU3BpbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmN1clJlc3VsdFN5bWJJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb1NwaW4oZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VyUmVzdWx0U3ltYkluZGV4LS07XHJcbiAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5zeW1ib2xzLm1hcCggc3ltYm9sID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN5bWJvbC5lbmRTcGluKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25TcGluT3ZlcigpKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gdXNlUmFuZG9tU3ltYiBpZiB0cnVlIGFkZCByYW5kb21TeW1ib2xcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHByb21pc2VcclxuICAgICAqL1xyXG4gICAgbW92ZU9uZVNsb3QodXNlUmFuZG9tU3ltYil7XHJcbiAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gdGhpcy5zeW1ib2xzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgY29uc3QgbGFzdFN5bWJvbCA9IHRoaXMuc3ltYm9sc1tsYXN0SW5kZXhdO1xyXG4gICAgICAgIGxldCBuZXdJbmRleDtcclxuXHJcbiAgICAgICAgaWYodXNlUmFuZG9tU3ltYil7XHJcbiAgICAgICAgICAgIG5ld0luZGV4ID0gcmFuZG9tSW50KDAsIHBvc3NpYmxlU3ltU3JjLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld0luZGV4ID0gdGhpcy5yZXN1bHRTeW1ib2xzW3RoaXMuY3VyUmVzdWx0U3ltYkluZGV4XTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxhc3RTeW1ib2wuc2V0TmV3U3ltYm9sKG5ld0luZGV4KTtcclxuXHJcbiAgICAgICAgbGFzdFN5bWJvbC55ID0gLXRoaXMucG9zaXRpb25Db25maWcuc2xvdExlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzLnVuc2hpZnQodGhpcy5zeW1ib2xzLnBvcCgpKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHRoaXMuc3ltYm9scy5tYXAoIHN5bWJvbCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzeW1ib2wubW92ZU9uZVNsb3QoKTtcclxuICAgICAgICB9KSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFdoZW4gY3VycmVudCBzcGluIGlzIG92ZXIgc2V0IGRlZmF1bHQgdmFsdWVzIGFuZCBjYWxsIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIG9uU3Bpbk92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJEYXRhUmVjZWl2ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3VsdFN5bWJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLnJlc29sdmVDaGFpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNob3dXaW5TeW1iIChzeW1ib2xzKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN5bWJvbHMubGVuZ3RoOyBpKyspe1xyXG5cclxuICAgICAgICAgICAgaWYoc3ltYm9sc1tpXSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNbaV0ucGxheVdpbkFuaW1hdGlvbigpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bWJvbHNbaV0ucGxheUxvc3NBbmltYXRpb24oKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBsYXlJZGxlKCkge1xyXG4gICAgICAgIHRoaXMuc3ltYm9scy5mb3JFYWNoKCBzeW1ib2wgPT4ge1xyXG4gICAgICAgICAgICBzeW1ib2wucGxheUlkbGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtjaGFuZ2VSZWVsc1NwaW5uaW5nVG99IGZyb20gXCIuLi9lbmdpbmVcIjtcclxuaW1wb3J0IHtSZWVsfSBmcm9tIFwiLi9yZWVsXCJcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi4vbWFpbi9nYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi4vbWFpbi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWVscyBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy55ID0gZ2FtZUNvbmZpZy5yZWVsc1Bvc2l0aW9uLnRvcE9mZnNldDtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxSZWVscyA9IHRoaXMuYWRkUmVlbHMoKTtcclxuICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLmFkZE1hc2soKTtcclxuXHJcbiAgICAgICAgdGhpcy53aW5BbmltUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3VsdENvbmZpZyA9IG51bGw7XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG5cclxuICAgICAgICB0aGlzLmJ5KHtcclxuICAgICAgICAgICAgXCJub3RpZnk6c3BpblN0YXJ0XCIgOiB0aGlzLnN0YXJ0LFxyXG4gICAgICAgICAgICBcIm5vdGlmeTpzZXJ2ZXJNYW5hZ2VyLm5ld1Jlc3BvbnNlXCIgOiB0aGlzLnNlcnZlclJlc3BvbnNlUmVjZWl2ZWQsXHJcbiAgICAgICAgICAgIFwibm90aWZ5OndpblN5bWJvbHNQcm9jZXNzZWRcIjogdGhpcy5hZGRXaW5IYW5kbGVyVmFsdWVzLFxyXG4gICAgICAgICAgICBcIm5vdGlmeTpiZXRDaGFuZ2VkXCIgOiB0aGlzLnBsYXlJZGxlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZXMgcmVlbHMgZGVwZW5kaW5nIG9uIGdhbWVDb25maWcgcGFyYW1zXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFycmF5IHdpdGggcmVlbHNcclxuICAgICAqL1xyXG4gICAgYWRkUmVlbHMoKSB7XHJcbiAgICAgICAgbGV0IHJlZWxzUG9pbnRzID0gZ2FtZUNvbmZpZy5yZWVsc1Bvc2l0aW9uLnJlZWxzUG9pbnRzO1xyXG4gICAgICAgIGxldCBhbGxSZWVscyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVlbHNQb2ludHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY3VyUmVlbFBvaW50cyA9IHJlZWxzUG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgcmVlbCA9IG5ldyBSZWVsKGN1clJlZWxQb2ludHMueCwgY3VyUmVlbFBvaW50cy55KTtcclxuICAgICAgICAgICAgYWxsUmVlbHMucHVzaChyZWVsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChyZWVsKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsUmVlbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgYSBtYXNrIHRvIGxpbWl0IHZpc2libGUgem9uZVxyXG4gICAgICogQHJldHVybnMge1BJWEkuR3JhcGhpY3N9IHJlZWxzIG1hc2tcclxuICAgICAqL1xyXG4gICAgYWRkTWFzaygpIHtcclxuICAgICAgICBsZXQgcmVlbHNNYXNrID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICByZWVsc01hc2suYmVnaW5GaWxsKCk7XHJcbiAgICAgICAgcmVlbHNNYXNrLmRyYXdSZWN0KDAsIC10aGlzLnksIGdhbWVDb25maWcuZ2FtZVNpemUud2lkdGgsIGdhbWVDb25maWcuZ2FtZVNpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHJlZWxzTWFzayk7XHJcblxyXG4gICAgICAgIHJldHVybiByZWVsc01hc2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9jZXNzaW5nIHRoZSBzcGluXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFJlZWxzU3BpbigpLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuc2VydmVyUmVzcG9uc2VSZXNvbHZlID0gcmVzb2x2ZSlcclxuICAgICAgICBdKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnN0YXJ0U3RvcFNlcXVlbmNlKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25TcGluQ29tcGxldGUoKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzdGFydCBzcGlubmluZyByZWVsc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydFJlZWxzU3BpbiAoKSB7XHJcbiAgICAgICAgY2hhbmdlUmVlbHNTcGlubmluZ1RvKHRydWUpO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbCggdGhpcy5hbGxSZWVscy5tYXAoIHJlZWwgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVlbC5zdGFydCgpO1xyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRDb25maWcgcmVzdWx0Q29uZmlnIGZyb20gc2VydmVyXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZXN1bHRDb25maWcuc3BpblJlc3VsdCBhcnJheSB3aXRoIGJldCByZXN1bHQgZm9yIGVhY2ggcmVlbFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJlc3VsdENvbmZpZy53aW5BbW91bnQgd2luIHBvaW50cyBvbiBjdXJyZW50IGJldFxyXG4gICAgICovXHJcbiAgICBzZXJ2ZXJSZXNwb25zZVJlY2VpdmVkKHJlc3VsdENvbmZpZykge1xyXG4gICAgICAgIHRoaXMucmVzdWx0Q29uZmlnID0gcmVzdWx0Q29uZmlnO1xyXG4gICAgICAgIHRoaXMuc2VydmVyUmVzcG9uc2VSZXNvbHZlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ltYnNCZlJlc3VsdCBhbW91bnQgb2YgcmFuZG9tIHN5bWJvbHMgYmVmb3JlIHJlc3VsdFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydFN0b3BTZXF1ZW5jZSAoIHN5bWJzQmZSZXN1bHQgPSA2KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbCh0aGlzLmFsbFJlZWxzLm1hcCggKHJlZWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWVsLnN0YXJ0U3RvcFNlcXVlbmNlKCB0aGlzLnJlc3VsdENvbmZpZy5zcGluUmVzdWx0W2ldLCBzeW1ic0JmUmVzdWx0K2kqMik7XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyByZXN1bHQgY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gcmVzdWx0Q29uZmlnIGZyb20gd2luSGFuZGxlclxyXG4gICAgICovXHJcbiAgICBhZGRXaW5IYW5kbGVyVmFsdWVzIChyZXN1bHRDb25maWcpIHtcclxuICAgICAgICBpZihyZXN1bHRDb25maWcpIHtcclxuICAgICAgICAgICAgdGhpcy53aW5BbmltUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN5bWJvbHNSZXN1bHRDb25maWcgPSByZXN1bHRDb25maWc7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB3aGVuIGVhY2ggcmVlbCBmaW5pc2hlZCBzcGluLCBpdCByZWR1Y2VzIHJlZWxzQ291bnRlclxyXG4gICAgICogd2hlbiBhbGwgcmVlbHMgYXJlIGZpbmlzaGVkLCByZXNldCB0aGUgY291bnRlciwgYW5kIGNoZWNrIGJldCBsaW5lc1xyXG4gICAgICovXHJcbiAgICBvblNwaW5Db21wbGV0ZSAoKSB7XHJcbiAgICAgICAgY2hhbmdlUmVlbHNTcGlubmluZ1RvKGZhbHNlKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dXaW5BbmltYXRpb24odGhpcy5zeW1ib2xzUmVzdWx0Q29uZmlnKTtcclxuICAgICAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJub3RpZnk6c3Bpbk92ZXJcIiwgdGhpcy5yZXN1bHRDb25maWcpO1xyXG4gICAgICAgIH0sMTAwKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBpZiB3aW5BbmltUmVxdWlyZWQsIHNob3cgd2luL2xvc3MgYW5pbWF0aW9uIGZvciBlYWNoIHN5bWJvbFxyXG4gICAgICogQHBhcmFtIHthcnJheX0gbWF0cml4IDJkIGFycmF5IHdpdGggdHJ1ZS9mYWxzZSBwYXJhbVxyXG4gICAgICovXHJcbiAgICBzaG93V2luQW5pbWF0aW9uKG1hdHJpeCkge1xyXG4gICAgICAgIGlmICghdGhpcy53aW5BbmltUmVxdWlyZWQpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHJpeC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clJlc3VsdFJlZWwgPSBtYXRyaXhbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGN1clJlZWwgPSB0aGlzLmFsbFJlZWxzW2ldO1xyXG5cclxuICAgICAgICAgICAgY3VyUmVlbC5zaG93V2luU3ltYihjdXJSZXN1bHRSZWVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMud2luQW5pbVJlcXVpcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUlkbGUoKSB7XHJcbiAgICAgICAgdGhpcy5hbGxSZWVscy5mb3JFYWNoKCByZWVsID0+IHtcclxuICAgICAgICAgICAgcmVlbC5wbGF5SWRsZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3RleHR1cmVzfSBmcm9tIFwiLi4vZW5naW5lXCI7XHJcbmltcG9ydCB7Q3VzdG9tVHdlZW59IGZyb20gXCIuL2N1c3RvbVR3ZWVuXCI7XHJcbmltcG9ydCB7YmV0TGluZXN9IGZyb20gXCIuLi9lbmdpbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTeW1ib2wgZXh0ZW5kcyBQSVhJLlNwcml0ZXtcclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmVTcmMsIGNvbmZpZyl7XHJcbiAgICAgICAgc3VwZXIodGV4dHVyZXNbdGV4dHVyZVNyY10pO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gY29uZmlnLnN5bWJvbERpbWVuc2lvbnMud2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBjb25maWcuc3ltYm9sRGltZW5zaW9ucy5oZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5zbG90TGVuZ3RoID0gY29uZmlnLnNsb3RMZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMudHlwZSA9IHRleHR1cmVTcmM7XHJcbiAgICAgICAgdGhpcy5hbmNob3Iuc2V0KDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSBjb25maWcuc3ltYm9sU3BlZWQ7XHJcblxyXG4gICAgICAgIHRoaXMuc3RhcnRTY2FsZSA9IHRoaXMuc2NhbGUuX3g7XHJcbiAgICAgICAgdGhpcy5lbmRTY2FsZSA9IHRoaXMuc3RhcnRTY2FsZSoxLjI1O1xyXG5cclxuICAgICAgICB0aGlzLnR3ZWVuID0gbmV3IEN1c3RvbVR3ZWVuKHRoaXMsIFwieVwiLCB0aGlzLnksIHRoaXMueSArICB0aGlzLnNsb3RMZW5ndGgsIHRoaXMuc3BlZWQpO1xyXG4gICAgICAgIHRoaXMuYm91bmNlVHdlZW4gPSBuZXcgQ3VzdG9tVHdlZW4odGhpcywgXCJ5XCIsIHRoaXMueSwgdGhpcy55IC0gdGhpcy5oZWlnaHQvMiwgdGhpcy5zcGVlZCoyLzMpO1xyXG5cclxuICAgICAgICB0aGlzLnNjYWxlVHdlZW4gPSBuZXcgQ3VzdG9tVHdlZW4odGhpcywgXCJzeW1iU2NhbGVcIiwgdGhpcy5zdGFydFNjYWxlLCAgdGhpcy5lbmRTY2FsZSwgdGhpcy5zcGVlZCozKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGRlZmF1bHQgc3ltYm9scyBwYXJhbXMgYmVmb3JlIG5leHQgc3BpbiBhbmQgbWFrZXMgdXAvZG93biBib3VuY2UgdXNpbmcgdHdlZW5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHByb21pc2VcclxuICAgICAqL1xyXG4gICAgc3RhcnRTcGluICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlJZGxlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCozLzQsICgpID0+IHt9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5ib3VuY2VUd2Vlbi5wbGF5KHRoaXMueSwgdGhpcy55ICsgdGhpcy5oZWlnaHQvMix0aGlzLnNwZWVkKjIvMywgcmVzb2x2ZSkpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZXZlbmx5IGNoYW5nZSBwb3NpdGlvbiBieSBvbmUgc2xvdCB1c2luZyB0d2VlblxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBtb3ZlT25lU2xvdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbi5wbGF5KHRoaXMueSwgdGhpcy55ICsgdGhpcy5zbG90TGVuZ3RoLCB0aGlzLnNwZWVkLCByZXNvbHZlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1ha2VzIGRvd24vdXAgYm91bmNlIHVzaW5nIHR3ZWVuXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBwcm9taXNlXHJcbiAgICAgKi9cclxuICAgIGVuZFNwaW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5ib3VuY2VUd2Vlbi5wbGF5KHRoaXMueSwgdGhpcy55ICsgdGhpcy5oZWlnaHQvMix0aGlzLnNwZWVkKjIvMywgKCkgPT4ge30pXHJcbiAgICAgICAgICAgICAgICAudGhlbiggKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCoyLzMsIHJlc29sdmUpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBzeW1ib2wgbmV3IHRleHR1cmUgYW5kIHR5cGVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCB0ZXh0dXJlIGluZGV4IG9mIG5ldyBzeW1ib2xcclxuICAgICAqL1xyXG4gICAgc2V0TmV3U3ltYm9sKGluZGV4KXtcclxuICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1twb3NzaWJsZVN5bVNyY1tpbmRleF1dO1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHBvc3NpYmxlU3ltU3JjW2luZGV4XTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBudW1iZXIgb2Ygc3ltYm9sJ3Mgc2NhbGUgcHJvcGVydHlcclxuICAgICAqL1xyXG4gICAgZ2V0IHN5bWJTY2FsZSAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2NhbGUuX3g7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIHNldCBzeW1ib2wncyBzY2FsZSBwcm9wZXJ0eVxyXG4gICAgICovXHJcbiAgICBzZXQgc3ltYlNjYWxlICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2NhbGUuc2V0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFuaW1hdGlvbiBmb3Igd2luIHN5bWJvbHNcclxuICAgICAqL1xyXG4gICAgcGxheVdpbkFuaW1hdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZVVwKClcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGV2ZW5seSBzY2FsZXMgc3ltYm9sIHVwIHVzaW5nIHR3ZWVuXHJcbiAgICAgKi9cclxuICAgIHNjYWxlVXAgKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGVUd2Vlbi5wbGF5KHRoaXMuc3RhcnRTY2FsZSwgdGhpcy5lbmRTY2FsZSwgdGhpcy5zcGVlZCozLCB0aGlzLnNjYWxlRG93bi5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGV2ZW5seSBzY2FsZXMgc3ltYm9sIGRvd24gdXNpbmcgdHdlZW5cclxuICAgICAqL1xyXG4gICAgc2NhbGVEb3duICgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlVHdlZW4ucGxheSh0aGlzLmVuZFNjYWxlLCB0aGlzLnN0YXJ0U2NhbGUsIHRoaXMuc3BlZWQqMywgKCkgPT4ge30pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2F2ZXMgY3VycmVudCBwYXJlbnQgcGFyYW1zIHRvIGJlIGFibGUgdG8gcmVzdG9yZSBpdCBsYXRlclxyXG4gICAgICogYW5kIGNoYW5nZSBwYXJlbnQgdG8gYmV0TGluZXMgdG8gY2hhbmdlIHRoZSBsYXllclxyXG4gICAgICovXHJcbiAgICBwbGF5TG9zc0FuaW1hdGlvbigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5wYXJlbnRSZWVsID0gdGhpcy5wYXJlbnQ7XHJcbiAgICAgICAgY29uc3QgZ2xvYmFsWCA9IHRoaXMuZ2V0R2xvYmFsUG9zaXRpb24oKS54O1xyXG4gICAgICAgIGNvbnN0IGdsb2JhbFkgPSB0aGlzLmdldEdsb2JhbFBvc2l0aW9uKCkueTtcclxuICAgICAgICB0aGlzLmxvY2FsWCA9IHRoaXMueDtcclxuICAgICAgICB0aGlzLmxvY2FsWSA9IHRoaXMueTtcclxuXHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDAuNTtcclxuXHJcbiAgICAgICAgYmV0TGluZXMuYWRkQ2hpbGRBdCh0aGlzLCAwKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldChnbG9iYWxYLCBnbG9iYWxZKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyBkZWZhdWx0IHN5bWJvbHMgcGFyYW1zIGFuZCByZXR1cm4gcGFyZW50IHRvIHJlZWwgaWYgaXQgd2FzIGNoYW5nZWRcclxuICAgICAqL1xyXG4gICAgcGxheUlkbGUgKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGUuc2V0KHRoaXMuc3RhcnRTY2FsZSk7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDE7XHJcblxyXG4gICAgICAgIGlmKHRoaXMucGFyZW50UmVlbCl7XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50UmVlbC5hZGRDaGlsZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQodGhpcy5sb2NhbFgsIHRoaXMubG9jYWxZKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wYXJlbnRSZWVsID0gbnVsbDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7dGV4dHVyZXN9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5pbXBvcnQge29ic2VydmFibGVNaXhpbn0gZnJvbSBcIi4vbWFpbi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RvciBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgbGVmdFNyYywgcmlnaHRTcmMsIHBvc3NpYmxlVmFsdWVzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG4gICAgICAgIHRoaXMubWludXNCdXR0b24gPSBuZXcgQnV0dG9uKDAsIDAsIGxlZnRTcmMsIHRoaXMubWludXNPbmUuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgdGhpcy5wbHVzQnV0dG9uID0gbmV3IEJ1dHRvbigyMDAsIDAsIHJpZ2h0U3JjLCB0aGlzLnBsdXNPbmUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zc2libGVWYWx1ZXMgPSBwb3NzaWJsZVZhbHVlcztcclxuICAgICAgICB0aGlzLmN1cnJlbnRWYWx1ZSA9IDE7XHJcbiAgICAgICAgdGhpcy5udW1iZXIgPSB0aGlzLmFkZE51bWJlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmFkZENoaWxkKHRoaXMubWludXNCdXR0b24sIHRoaXMucGx1c0J1dHRvbiwgdGhpcy5udW1iZXIpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBtaW51c09uZSgpIHtcclxuICAgICAgICB0aGlzLm51bWJlci50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5wb3NzaWJsZVZhbHVlc1sgLS10aGlzLmN1cnJlbnRWYWx1ZSBdXTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkRpc2FibGVDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHBsdXNPbmUgKCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLnBvc3NpYmxlVmFsdWVzWyArK3RoaXMuY3VycmVudFZhbHVlIF1dO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRGlzYWJsZUNoZWNrKCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGlzYWJsZS9lbmFibGUgYnV0dG9ucyBkZXBlbmQgb24gY3VycmVudFZhbHVlXHJcbiAgICAgKi9cclxuICAgIGJ1dHRvbkRpc2FibGVDaGVjaygpe1xyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSA+PSB0aGlzLnBvc3NpYmxlVmFsdWVzLmxlbmd0aCAtIDEpe1xyXG4gICAgICAgICAgICB0aGlzLnBsdXNCdXR0b24uZGlzYWJsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGx1c0J1dHRvbi5lbmFibGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRWYWx1ZSA8IDEpe1xyXG4gICAgICAgICAgICB0aGlzLm1pbnVzQnV0dG9uLmRpc2FibGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm1pbnVzQnV0dG9uLmVuYWJsZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpcmVFdmVudChcIm5vdGlmeTpiZXRDaGFuZ2VkXCIsIHRoaXMuY3VycmVudFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZXMgc2VsZWN0b3IgbnVtYmVyIHNwcml0ZVxyXG4gICAgICogQHJldHVybnMge1BJWEkuU3ByaXRlfSB0ZXh0dXJlIG9mIHNlbGVjdG9yIG51bWJlclxyXG4gICAgICovXHJcbiAgICBhZGROdW1iZXIgKCkge1xyXG4gICAgICAgIGNvbnN0IG51bWJlciA9IG5ldyBQSVhJLlNwcml0ZSh0ZXh0dXJlc1t0aGlzLnBvc3NpYmxlVmFsdWVzW3RoaXMuY3VycmVudFZhbHVlXV0pO1xyXG4gICAgICAgIG51bWJlci5hbmNob3Iuc2V0KDAuNSk7XHJcbiAgICAgICAgbnVtYmVyLndpZHRoID0gMTI1O1xyXG4gICAgICAgIG51bWJlci5oZWlnaHQgPSAxMjU7XHJcbiAgICAgICAgbnVtYmVyLnBvc2l0aW9uLnNldCgxMDAsIDApO1xyXG5cclxuICAgICAgICByZXR1cm4gbnVtYmVyXHJcbiAgICB9XHJcbn0iLCIvKipcclxuICogY3JlYXRlcyByYW5kb20gaW50ZWdlciB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gbWluIHBvc3NpYmxlIHZhbHVlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggbWF4IHBvc3NpYmxlIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICBsZXQgcmFuZCA9IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbik7XHJcbiAgICByYW5kID0gTWF0aC5mbG9vcihyYW5kKTtcclxuICAgIHJldHVybiByYW5kO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGltZUJldHdlZW5GcmFtZXMgPSAxNi42NzsiLCJleHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGV4dGVuZHMgUElYSS5HcmFwaGljcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMubGluZVN0eWxlKDEsIDB4MDAwMDAwLCAxKTtcclxuICAgICAgICB0aGlzLmJlZ2luRmlsbChjb2xvcik7XHJcbiAgICAgICAgdGhpcy5kcmF3UmVjdCgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmVuZEZpbGwoKTtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgIH1cclxufSIsImltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi9yZWN0YW5nbGVcIjtcclxuaW1wb3J0IHtvYnNlcnZhYmxlTWl4aW59IGZyb20gXCIuLi9tYWluL29ic2VydmFibGVNaXhpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdpblNjcmVlbiBleHRlbmRzIFBJWEkuR3JhcGhpY3N7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBjb2xvcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgICAgICB0aGlzLnNjcmVlbiA9IG5ldyBSZWN0YW5nbGUoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpO1xyXG4gICAgICAgIHRoaXMuc2NyZWVuLmFscGhhID0gMC4zO1xyXG4gICAgICAgIHRoaXMubWVzc2FnZSA9IHRoaXMuY3JlYXRlTWVzc2FnZSh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLnNjcmVlbiwgdGhpcy5tZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmhpZGVTY3JlZW4oKTtcclxuICAgICAgICB0aGlzLmFscGhhID0gMC41O1xyXG5cclxuICAgICAgICB0aGlzLmJ5KHtcclxuICAgICAgICAgICAgXCJub3RpZnk6c3BpblN0YXJ0XCIgOiB0aGlzLmhpZGVTY3JlZW4sXHJcbiAgICAgICAgICAgIFwibm90aWZ5OnNwaW5PdmVyXCIgOiB0aGlzLnNob3dTY3JlZW4sXHJcbiAgICAgICAgICAgIFwibm90aWZ5OmJldENoYW5nZWRcIiA6IHRoaXMuaGlkZVNjcmVlblxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcylcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVNZXNzYWdlICh4LCB5LCB3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IG5ldyBQSVhJLlRleHQoXCJZb3Ugd29uXCIpO1xyXG4gICAgICAgIG1lc3NhZ2Uuc3R5bGUgPSB7XHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwiQXJpYWxcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDM2LFxyXG4gICAgICAgICAgICBmaWxsOiBcIndoaXRlXCJcclxuICAgICAgICB9O1xyXG4gICAgICAgIG1lc3NhZ2UuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIG1lc3NhZ2UucG9zaXRpb24uc2V0KHggKyB3aWR0aC8yLCB5ICsgaGVpZ2h0LzIpO1xyXG5cclxuICAgICAgICByZXR1cm4gbWVzc2FnZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1ha2VzIHdpblNjcmVlbiB2aXNpYmxlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIHNlcnZlcidzIHJlc3VsdCBjb25maWdcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb25maWcud2luQW1vdW50IGFtb3VudCBvZiB3aW4gcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIHNob3dTY3JlZW4gKGNvbmZpZyl7XHJcbiAgICAgICAgaWYoY29uZmlnICYmIGNvbmZpZy53aW5BbW91bnQgPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdpbk1zZyA9IFwiWW91IHdvbiBcIiArIGNvbmZpZy53aW5BbW91bnQgKyBcIiAhISFcIjtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlLnRleHQgPSB3aW5Nc2c7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoaWRlcyB3aW5TY3JlZW5cclxuICAgICAqL1xyXG4gICAgaGlkZVNjcmVlbiAoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9