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

        _this.linePoints = _this.addLinePoints();

        _this.allLines = _this.addLines(_this.linePoints);

        Object.assign(_this, _observableMixin.observableMixin);
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
            if (!config || !Array.isArray(config.winLines)) {
                return;
            }
            for (var i = 0; i < config.winLines.length; i++) {
                var curLine = config.winLines[i];
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

        //can't find the solution how to set context here
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

                var onReelPositions = [];

                var generatedLine = spinResult.map(function (reel, i) {
                    var curIndex = currentLine[i];
                    onReelPositions.push(curIndex);
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

                    winSymbols.push(onReelPositions.slice(0, symbsMatched));
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

            return new Promise(function (resolve) {
                _this2.symbolsBeforeResult = Infinity;

                Promise.all(_this2.symbols.map(function (sym) {
                    return sym.startSpin();
                })).then(resolve).then(_this2.moveLastSymbOnTop.bind(_this2));
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

        /**
         *
         * @param {boolean} useRandomSymb if true add randomSymbol
         */

    }, {
        key: "moveLastSymbOnTop",
        value: function moveLastSymbOnTop() {
            var useRandomSymb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

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

            Promise.all(this.symbols.map(function (symbol) {
                return symbol.moveOneSlot();
            })).then(this.onSymbolMovedOneSlot.bind(this));
        }

        /**
         * when each symbol moved one slot, it reduces symbolsCounter
         * when all symbols are finished, reset the counter
         * if more iterations are required, call this.moveLastSymbOnTop
         */

    }, {
        key: "onSymbolMovedOneSlot",
        value: function onSymbolMovedOneSlot() {
            this.symbolsBeforeResult--;

            if (this.symbolsBeforeResult > 0 && _engine.areReelsSpinning || !this.serverDataReceived) {
                this.moveLastSymbOnTop();
            } else if (this.curResultSymbIndex >= 0) {
                this.moveLastSymbOnTop(false);
                this.curResultSymbIndex--;
            } else {

                Promise.all(this.symbols.map(function (symbol) {
                    return symbol.endSpin();
                })).then(this.onSpinOver.bind(this));
            }
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
            var _this3 = this;

            return new Promise(function (resolve) {
                (0, _engine.changeReelsSpinningTo)(true);

                Promise.all(_this3.allReels.map(function (reel) {
                    return reel.start();
                })).then(resolve);
            });
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
    }, {
        key: "serverResponseResolve",
        value: function serverResponseResolve() {}

        /**
         * @param {number} symbsBfResult amount of random symbols before result
         * @returns {Promise<any>} promise
         */

    }, {
        key: "startStopSequence",
        value: function startStopSequence() {
            var _this4 = this;

            var symbsBfResult = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;

            return new Promise(function (resolve) {

                Promise.all(_this4.allReels.map(function (reel, i) {
                    return reel.startStopSequence(_this4.resultConfig.spinResult[i], symbsBfResult + i * 2);
                })).then(resolve);
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
         * when each reel finished spin, it reduces reelsCounter
         * when all reels are finished, reset the counter, and check bet lines
         */

    }, {
        key: "onSpinComplete",
        value: function onSpinComplete() {
            var _this5 = this;

            (0, _engine.changeReelsSpinningTo)(false);

            setTimeout(function () {
                _this5.showWinAnimation(_this5.symbolsResultConfig);
                _this5.fireEvent("notify:spinOver", _this5.resultConfig);
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
     * sets default symbols params before next spin and makes up/down bounce using twin
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
         * makes down/up bounce using twin
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
            message.position.set(x + width / 2 - 130, y + height / 2 - 18);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9iZXRMaW5lcy9iZXRMaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2JldExpbmVzL2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9tYWluL2dhbWVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9tYWluL29ic2VydmFibGVNaXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L21haW4vc2VydmVyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvbWFpbi93aW5IYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvY3VzdG9tVHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWVscy9yZWVsLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvcmVlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWVscy9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3V0aWxzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvd2luU2NyZWVuL3JlY3RhbmdsZS5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3dpblNjcmVlbi93aW5TY3JlZW4uanMiXSwibmFtZXMiOlsiQmV0TGluZXMiLCJsaW5lUG9pbnRzIiwiYWRkTGluZVBvaW50cyIsImFsbExpbmVzIiwiYWRkTGluZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJvYnNlcnZhYmxlTWl4aW4iLCJieSIsImhpZGVXaW5MaW5lcyIsInNob3dXaW5MaW5lcyIsImFwcCIsInN0YWdlIiwiYWRkQ2hpbGQiLCJjb25maWciLCJnYW1lQ29uZmlnIiwiYmV0TGluZXMiLCJwb3NpdGlvbnMiLCJyZWVsc1Bvc2l0aW9uIiwidG9wT2Zmc2V0IiwicmVlbHMiLCJzbG90TGVuZ3RoIiwibGluZVBvc2l0aW9ucyIsImkiLCJsZW5ndGgiLCJjdXJCZXRMaW5lIiwiY3VyTGluZVBvaW50cyIsImoiLCJ4UG9pbnQiLCJyZWVsc1BvaW50cyIsIngiLCJ5UG9pbnQiLCJzeW1ib2xzUG9pbnQiLCJ5IiwicHVzaCIsImJldExpbmUiLCJMaW5lIiwiQXJyYXkiLCJpc0FycmF5Iiwid2luTGluZXMiLCJjdXJMaW5lIiwic2hvd1dpbkxpbmUiLCJmb3JFYWNoIiwibGluZSIsImhpZGVXaW5MaW5lIiwiUElYSSIsIkNvbnRhaW5lciIsImFyckNvbmZpZyIsImxpbmVTdHlsZSIsImNyZWF0ZUxpbmVCeVBvaW50cyIsIm1vdmVUbyIsImN1clBvaW50Q29uZmlnIiwibGluZVRvIiwidmlzaWJsZSIsIkdyYXBoaWNzIiwiQnV0dG9uIiwiYnV0dG9uVGV4dHVyZXMiLCJjYWxsYmFjayIsInRleHR1cmVzIiwiaWRsZSIsImlkbGVUZXh0dXJlIiwiaG92ZXJUZXh0dXJlIiwiaG92ZXIiLCJkb3duVGV4dHVyZSIsImRvd24iLCJkaXNhYmxlZFRleHR1cmUiLCJkaXNhYmxlZCIsIndpZHRoIiwiaGVpZ2h0IiwiYW5jaG9yIiwic2V0IiwicG9zaXRpb24iLCJpbnRlcmFjdGl2ZSIsInNldEhpdEFyZWEiLCJ0ZXh0dXJlIiwicmFkaXVzIiwiaGl0QXJlYSIsIkNpcmNsZSIsIlNwcml0ZSIsImNoYW5nZVJlZWxzU3Bpbm5pbmdUbyIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwidmlldyIsIkxvYWRlciIsInNoYXJlZCIsImFkZCIsImxvYWQiLCJzZXR1cCIsImJhY2tncm91bmQiLCJzcGluQnV0dG9uIiwid2luU2NyZWVuIiwiYmV0U2VsZWN0b3IiLCJzZXJ2ZXJNb2NrIiwid2luU3ltYm9scyIsInJlbmRlckxvb3AiLCJhcmVSZWVsc1NwaW5uaW5nIiwicmVzb3VyY2VzIiwiUmVlbHMiLCJzcGluQnV0dG9uU3JjIiwib25TcGluQnV0dG9uQ2xpY2tlZCIsImVuYWJsZSIsIldpblNjcmVlbiIsImdhbWVTaXplIiwiU2VsZWN0b3IiLCJsZWZ0U2VsZWN0b3IiLCJyaWdodFNlbGVjdG9yIiwibnVtYmVycyIsIldpblN5bWJvbHMiLCJTZXJ2ZXJNb2NrIiwidGlja2VyIiwiZ2FtZUxvb3AiLCJkZWx0YSIsInVwZGF0ZSIsImJvb2xlYW4iLCJkaXNhYmxlIiwiZmlyZUV2ZW50IiwiY3VycmVudFZhbHVlIiwicmVlbHNldHMiLCJyb3dzIiwibGVmdE9mZnNldCIsImxlZnQiLCJzeW1ib2xEaW1lbnNpb25zIiwidmlzaWJsZVN5bWJOdW0iLCJzeW1ib2xzTnVtYmVyIiwic3ltYm9sU3BlZWQiLCJwYXJhbXMiLCJldmVudEhhbmRsZXJzIiwiZXZlbnROYW1lIiwiaGFzT3duUHJvcGVydHkiLCJldmVudHMiLCJhZGRMaXN0ZW5lciIsImFyZ3MiLCJyZWVsc2V0c0xpc3QiLCJyZWVsc0xlbmd0aCIsInN0YXJ0IiwiYmV0U2l6ZSIsImN1cnJlbnRSZWVsc2V0Iiwic2VsZWN0UmVlbHNldCIsInNwaW5SZXN1bHQiLCJzZWxlY3RQb3NpdGlvbnMiLCJnZW5lcmF0ZWRSZXNwb25zZSIsImNoZWNrQmV0TGluZXMiLCJzZXRUaW1lb3V0IiwiaW5kZXgiLCJjdXJTZXQiLCJzdGFydFBvaW50IiwiY3VyUmVlbCIsIndpblBvaW50cyIsInJlc3BvbnNlIiwiY3VycmVudExpbmUiLCJzeW1ic01hdGNoZWQiLCJvblJlZWxQb3NpdGlvbnMiLCJnZW5lcmF0ZWRMaW5lIiwibWFwIiwicmVlbCIsImN1ckluZGV4Iiwic2xpY2UiLCJ3aW5BbW91bnQiLCJjcmVhdGVTeW1ib2xzQ29uZmlnIiwic2VydmVyUmVzdWx0IiwibWF0cml4IiwiY3JlYXRlVGVtcGxhdGVNYXRyaXgiLCJzeW1iSW5kZXgiLCJ0ZW1wbGF0ZSIsInJvd3NOdW0iLCJyZWVsc051bSIsIkN1c3RvbVR3ZWVuIiwib2JqIiwicHJvcGVydHlOYW1lIiwiZW5kIiwicGVyaW9kIiwiZ2V0U3BlZWQiLCJ1cGRhdGVSZXF1aXJlZCIsImRpc3RhbmNlIiwic3BlZWQiLCJvbkNvbXBsZXRlIiwibnVtT2ZGcmFtZXMiLCJ0aW1lQmV0d2VlbkZyYW1lcyIsIlByb21pc2UiLCJyZXNvbHZlIiwiUmVlbCIsInBvc2l0aW9uQ29uZmlnIiwic3ltYm9scyIsImFkZFN5bWJvbHMiLCJzeW1ib2xzQmVmb3JlUmVzdWx0IiwicmVzdWx0U3ltYm9scyIsImN1clJlc3VsdFN5bWJJbmRleCIsInNlcnZlckRhdGFSZWNlaXZlZCIsImN1clN5bWIiLCJwb3NzaWJsZVN5bVNyYyIsInN5bWJvbCIsIlN5bWJvbCIsIkluZmluaXR5IiwiYWxsIiwic3ltIiwic3RhcnRTcGluIiwidGhlbiIsIm1vdmVMYXN0U3ltYk9uVG9wIiwiYmluZCIsImJldFJlc3VsdCIsInN5bWJzQmZSZXN1bHQiLCJyZXNvbHZlQ2hhaW4iLCJ1c2VSYW5kb21TeW1iIiwibGFzdEluZGV4IiwibGFzdFN5bWJvbCIsIm5ld0luZGV4Iiwic2V0TmV3U3ltYm9sIiwidW5zaGlmdCIsInBvcCIsIm1vdmVPbmVTbG90Iiwib25TeW1ib2xNb3ZlZE9uZVNsb3QiLCJlbmRTcGluIiwib25TcGluT3ZlciIsInBsYXlXaW5BbmltYXRpb24iLCJwbGF5TG9zc0FuaW1hdGlvbiIsInBsYXlJZGxlIiwiYWxsUmVlbHMiLCJhZGRSZWVscyIsIm1hc2siLCJhZGRNYXNrIiwid2luQW5pbVJlcXVpcmVkIiwicmVzdWx0Q29uZmlnIiwic2VydmVyUmVzcG9uc2VSZWNlaXZlZCIsImFkZFdpbkhhbmRsZXJWYWx1ZXMiLCJjdXJSZWVsUG9pbnRzIiwicmVlbHNNYXNrIiwiYmVnaW5GaWxsIiwiZHJhd1JlY3QiLCJzdGFydFJlZWxzU3BpbiIsInNlcnZlclJlc3BvbnNlUmVzb2x2ZSIsInN0YXJ0U3RvcFNlcXVlbmNlIiwib25TcGluQ29tcGxldGUiLCJzeW1ib2xzUmVzdWx0Q29uZmlnIiwic2hvd1dpbkFuaW1hdGlvbiIsImN1clJlc3VsdFJlZWwiLCJzaG93V2luU3ltYiIsInRleHR1cmVTcmMiLCJ0eXBlIiwic3RhcnRTY2FsZSIsInNjYWxlIiwiX3giLCJlbmRTY2FsZSIsInR3ZWVuIiwiYm91bmNlVHdlZW4iLCJzY2FsZVR3ZWVuIiwicGxheSIsInNjYWxlVXAiLCJzY2FsZURvd24iLCJwYXJlbnRSZWVsIiwicGFyZW50IiwiZ2xvYmFsWCIsImdldEdsb2JhbFBvc2l0aW9uIiwiZ2xvYmFsWSIsImxvY2FsWCIsImxvY2FsWSIsImFscGhhIiwiYWRkQ2hpbGRBdCIsInZhbHVlIiwibGVmdFNyYyIsInJpZ2h0U3JjIiwicG9zc2libGVWYWx1ZXMiLCJtaW51c0J1dHRvbiIsIm1pbnVzT25lIiwicGx1c0J1dHRvbiIsInBsdXNPbmUiLCJudW1iZXIiLCJhZGROdW1iZXIiLCJidXR0b25EaXNhYmxlQ2hlY2siLCJyYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIiwiUmVjdGFuZ2xlIiwiY29sb3IiLCJlbmRGaWxsIiwic2NyZWVuIiwibWVzc2FnZSIsImNyZWF0ZU1lc3NhZ2UiLCJoaWRlU2NyZWVuIiwic2hvd1NjcmVlbiIsIlRleHQiLCJzdHlsZSIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImZpbGwiLCJ3aW5Nc2ciLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtB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QkFBUWpOLFFBQVIsQ0FBaUJELEdBQWpCLENBQXFCeEMsSUFBSXFDLFFBQU0sQ0FBVixHQUFjLEdBQW5DLEVBQXdDbEMsSUFBSW1DLFNBQU8sQ0FBWCxHQUFlLEVBQXZEOztBQUVBLG1CQUFPb04sT0FBUDtBQUNIOztBQUVEOzs7Ozs7OzttQ0FLWTFRLE0sRUFBTztBQUNmLGdCQUFHQSxVQUFVQSxPQUFPZ0osU0FBUCxHQUFtQixDQUFoQyxFQUFtQztBQUMvQixvQkFBTW1JLFNBQVMsYUFBYW5SLE9BQU9nSixTQUFwQixHQUFnQyxNQUEvQztBQUNBLHFCQUFLekcsT0FBTCxHQUFlLElBQWY7QUFDQSxxQkFBS21PLE9BQUwsQ0FBYVUsSUFBYixHQUFvQkQsTUFBcEI7QUFDSDtBQUNKOztBQUVEOzs7Ozs7cUNBR2M7QUFDVixpQkFBSzVPLE9BQUwsR0FBZSxLQUFmO0FBQ0g7Ozs7RUFwRDBCUixLQUFLUyxRIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vamF2YXNjcmlwdC9lbmdpbmUuanNcIik7XG4iLCJpbXBvcnQge0xpbmV9IGZyb20gXCIuL2xpbmVcIjtcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi4vbWFpbi9nYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi4vbWFpbi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCZXRMaW5lcyBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5saW5lUG9pbnRzID0gdGhpcy5hZGRMaW5lUG9pbnRzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWxsTGluZXMgPSB0aGlzLmFkZExpbmVzKHRoaXMubGluZVBvaW50cyk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgICAgICB0aGlzLmJ5KHtcclxuICAgICAgICAgICAgXCJub3RpZnk6c3BpblN0YXJ0XCIgOiB0aGlzLmhpZGVXaW5MaW5lcyxcclxuICAgICAgICAgICAgXCJub3RpZnk6c3Bpbk92ZXJcIiA6IHRoaXMuc2hvd1dpbkxpbmVzLFxyXG4gICAgICAgICAgICBcIm5vdGlmeTpiZXRDaGFuZ2VkXCIgOiB0aGlzLmhpZGVXaW5MaW5lc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIGxpbmUgcG9pbnRzIGRlcGVuZHMgb24gZ2FtZUNvbmZpZyBwYXJhbXMgYW5kIGFkZCBpdCB0byBhcnJheVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIGxpbmUgcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIGFkZExpbmVQb2ludHMgKCkge1xyXG5cclxuICAgICAgICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHt9LCBnYW1lQ29uZmlnKTtcclxuICAgICAgICBjb25zdCBiZXRMaW5lcyA9IGNvbmZpZy5iZXRMaW5lcztcclxuICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBjb25maWcucmVlbHNQb3NpdGlvbjtcclxuICAgICAgICBjb25zdCB0b3BPZmZzZXQgPSBwb3NpdGlvbnMudG9wT2Zmc2V0ICsgcG9zaXRpb25zLnJlZWxzLnNsb3RMZW5ndGgvMjtcclxuXHJcbiAgICAgICAgY29uc3QgbGluZVBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYmV0TGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyQmV0TGluZSA9IGJldExpbmVzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJMaW5lUG9pbnRzID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgY3VyQmV0TGluZS5sZW5ndGg7IGorKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgeFBvaW50ID0gcG9zaXRpb25zLnJlZWxzUG9pbnRzW2pdLng7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB5UG9pbnQgPSBwb3NpdGlvbnMuc3ltYm9sc1BvaW50W2N1ckJldExpbmVbal1dLnkgKyB0b3BPZmZzZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgY3VyTGluZVBvaW50cy5wdXNoKHt4OiB4UG9pbnQsIHk6IHlQb2ludH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsaW5lUG9zaXRpb25zLnB1c2goY3VyTGluZVBvaW50cylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBsaW5lUG9zaXRpb25zO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIGxpbmVzIHVzaW5nIGxpbmVzIHBvaW50cyBhbmQgYWRkIGl0IHRvIGFycmF5XHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBsaW5lUG9pbnRzIGFycmF5IHdpdGggcG9pbnRzIGZvciBsaW5lc1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIGxpbmVzXHJcbiAgICAgKi9cclxuICAgIGFkZExpbmVzIChsaW5lUG9pbnRzKSB7XHJcbiAgICAgICAgY29uc3QgYWxsTGluZXMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGluZVBvaW50cy5sZW5ndGg7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gbGluZVBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYmV0TGluZSA9IG5ldyBMaW5lKGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICBhbGxMaW5lcy5wdXNoKGJldExpbmUpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGJldExpbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFsbExpbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIHNob3cgd2luIGxpbmVzIGRlcGVuZHMgb24gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIHJlc3VsdCBjb25maWdcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNvbmZpZy53aW5MaW5lcyBhcnJheSB3aXRoIHdpbiBsaW5lc1xyXG4gICAgICovXHJcbiAgICBzaG93V2luTGluZXMoY29uZmlnKSB7XHJcbiAgICAgICAgaWYoICFjb25maWcgfHwgIUFycmF5LmlzQXJyYXkoY29uZmlnLndpbkxpbmVzKSApe1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb25maWcud2luTGluZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBjdXJMaW5lID0gY29uZmlnLndpbkxpbmVzW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmFsbExpbmVzW2N1ckxpbmVdLnNob3dXaW5MaW5lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IGRlZmF1bHQgcGFyYW1zIGZvciBhbGwgbGluZXNcclxuICAgICAqL1xyXG4gICAgaGlkZVdpbkxpbmVzKCkge1xyXG4gICAgICAgIHRoaXMuYWxsTGluZXMuZm9yRWFjaCggKGxpbmUpID0+IHtcclxuICAgICAgICAgICAgbGluZS5oaWRlV2luTGluZSgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIExpbmUgZXh0ZW5kcyBQSVhJLkdyYXBoaWNzIHtcclxuICAgIGNvbnN0cnVjdG9yICggYXJyQ29uZmlnICkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5saW5lU3R5bGUoMywgMHgwMGZmMDAsIDAuNSk7XHJcblxyXG4gICAgICAgIHRoaXMuY3JlYXRlTGluZUJ5UG9pbnRzKGFyckNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5oaWRlV2luTGluZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlcyBsaW5lIHVzaW5nIHgseSBwb2ludHMgZnJvbSBhcnJheVxyXG4gICAgICogQHBhcmFtIHthcnJheX0gYXJyQ29uZmlnIEFycmF5PHt4OiBudW1iZXIsIHk6bnVtYmVyfT4gYXJyYXkgd2l0aCB4LHkgcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZUxpbmVCeVBvaW50cyhhcnJDb25maWcpIHtcclxuICAgICAgICB0aGlzLm1vdmVUbyhhcnJDb25maWdbMF0ueCwgYXJyQ29uZmlnWzBdLnkpO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyQ29uZmlnLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgY29uc3QgY3VyUG9pbnRDb25maWcgPSBhcnJDb25maWdbaV07XHJcbiAgICAgICAgICAgIHRoaXMubGluZVRvKGN1clBvaW50Q29uZmlnLngsIGN1clBvaW50Q29uZmlnLnkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1ha2VzIGxpbmUgdmlzaWJsZVxyXG4gICAgICovXHJcbiAgICBzaG93V2luTGluZSgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaGlkZXMgbGluZVxyXG4gICAgICovXHJcbiAgICBoaWRlV2luTGluZSAoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge3RleHR1cmVzfSBmcm9tIFwiLi9lbmdpbmVcIjtcclxuaW1wb3J0IHtvYnNlcnZhYmxlTWl4aW59IGZyb20gXCIuL21haW4vb2JzZXJ2YWJsZU1peGluXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBidXR0b25UZXh0dXJlcywgY2FsbGJhY2spe1xyXG4gICAgICAgIHN1cGVyKHRleHR1cmVzW2J1dHRvblRleHR1cmVzLmlkbGVdKTtcclxuXHJcbiAgICAgICAgdGhpcy5pZGxlVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmlkbGU7XHJcbiAgICAgICAgdGhpcy5ob3ZlclRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5ob3ZlcjtcclxuICAgICAgICB0aGlzLmRvd25UZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuZG93bjtcclxuICAgICAgICB0aGlzLmRpc2FibGVkVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmRpc2FibGVkO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gMTAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICAgICAgICB0aGlzLnNldEhpdEFyZWEoMTI1KTtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbW91c2VvdmVyKCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZGlzYWJsZWQgPyB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV0gOiB0ZXh0dXJlc1t0aGlzLmhvdmVyVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VvdXQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5kaXNhYmxlZCA/IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXSA6IHRleHR1cmVzW3RoaXMuaWRsZVRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlZG93bigpIHtcclxuICAgICAgICBpZih0aGlzLmRpc2FibGVkKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuZG93blRleHR1cmVdO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNldXAoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5kaXNhYmxlZCA/IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXSA6IHRleHR1cmVzW3RoaXMuaG92ZXJUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuaWRsZVRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGUgKCkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgaGl0QXJlYSByYWRpdXNcclxuICAgICAqL1xyXG4gICAgc2V0SGl0QXJlYSAocmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuQ2lyY2xlKDAsIDAsIHJhZGl1cyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7UmVlbHN9IGZyb20gXCIuL3JlZWxzL3JlZWxzXCI7XHJcbmltcG9ydCB7V2luU2NyZWVufSBmcm9tIFwiLi93aW5TY3JlZW4vd2luU2NyZWVuXCI7XHJcbmltcG9ydCB7U2VsZWN0b3J9IGZyb20gXCIuL3NlbGVjdG9yXCI7XHJcbmltcG9ydCB7U2VydmVyTW9ja30gZnJvbSBcIi4vbWFpbi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCZXRMaW5lc30gZnJvbSBcIi4vYmV0TGluZXMvYmV0TGluZXNcIjtcclxuaW1wb3J0IHtXaW5TeW1ib2xzfSBmcm9tIFwiLi9tYWluL3dpbkhhbmRsZXJcIjtcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi9tYWluL2dhbWVDb25maWdcIjtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLnZpZXcpO1xyXG5cclxuUElYSS5Mb2FkZXIuc2hhcmVkXHJcbiAgICAuYWRkKFwiLi9pbWFnZXMvc2hlZXQuanNvblwiKVxyXG4gICAgLmxvYWQoc2V0dXApO1xyXG5cclxuZXhwb3J0IGxldCB0ZXh0dXJlcyxcclxuICAgIGJhY2tncm91bmQsXHJcbiAgICBzcGluQnV0dG9uLFxyXG4gICAgcmVlbHMsXHJcbiAgICB3aW5TY3JlZW4sXHJcbiAgICBiZXRTZWxlY3RvcixcclxuICAgIHNlcnZlck1vY2ssXHJcbiAgICBiZXRMaW5lcyxcclxuICAgIHdpblN5bWJvbHM7XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTG9vcCA9IFtdO1xyXG5leHBvcnQgbGV0IGFyZVJlZWxzU3Bpbm5pbmcgPSBmYWxzZTtcclxuXHJcbmZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgdGV4dHVyZXMgPSBQSVhJLkxvYWRlci5zaGFyZWQucmVzb3VyY2VzW1wiLi9pbWFnZXMvc2hlZXQuanNvblwiXS50ZXh0dXJlcztcclxuXHJcbiAgICBiYWNrZ3JvdW5kID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmVzW1wiYmFja2dyb3VuZC5wbmdcIl0pO1xyXG4gICAgYXBwLnN0YWdlLmFkZENoaWxkKGJhY2tncm91bmQpO1xyXG5cclxuXHJcbiAgICBiZXRMaW5lcyA9IG5ldyBCZXRMaW5lcygpO1xyXG4gICAgcmVlbHMgPSBuZXcgUmVlbHMoKTtcclxuXHJcbiAgICBzcGluQnV0dG9uID0gbmV3IEJ1dHRvbig0MDAsIDQ1MCwgc3BpbkJ1dHRvblNyYywgb25TcGluQnV0dG9uQ2xpY2tlZCk7XHJcbiAgICBzcGluQnV0dG9uLmJ5KHtcIm5vdGlmeTpzcGluT3ZlclwiOiBzcGluQnV0dG9uLmVuYWJsZX0pO1xyXG5cclxuICAgIHdpblNjcmVlbiA9IG5ldyBXaW5TY3JlZW4oMCxnYW1lQ29uZmlnLmdhbWVTaXplLmhlaWdodCwgMzAwLCAxMDAsIDB4Njk2OTY5KTtcclxuICAgIGJldFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKDU1MCwgNDUwLCBsZWZ0U2VsZWN0b3IsIHJpZ2h0U2VsZWN0b3IsIG51bWJlcnMpO1xyXG5cclxuICAgIHdpblN5bWJvbHMgPSBuZXcgV2luU3ltYm9scygpO1xyXG5cclxuICAgIHNlcnZlck1vY2sgPSBuZXcgU2VydmVyTW9jaygpO1xyXG5cclxuICAgIGFwcC50aWNrZXIuYWRkKGRlbHRhID0+IGdhbWVMb29wKGRlbHRhKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVMb29wKGRlbHRhKXtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZW5kZXJMb29wLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICByZW5kZXJMb29wW2ldLnVwZGF0ZShkZWx0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnaXZlcyBzcGluQnV0dG9uIGFuIG9wdGlvbiB0byBzdG9wIHNwaW4gd2l0aCBjdXJyZW50IGl0ZXJhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJvb2xlYW4gc2V0IGFuaW1hdGlvblJlcXVpcmVkIHRvIHRydWUgb3IgZmFsc2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VSZWVsc1NwaW5uaW5nVG8gKGJvb2xlYW4pIHtcclxuICAgIGFyZVJlZWxzU3Bpbm5pbmcgPSBib29sZWFuO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIHN0YXJ0L3N0b3Agc3BpbiBkZXBlbmRpbmcgb24gYXJlUmVlbHNTcGlubmluZyBwYXJhbVxyXG4gKi9cclxuZnVuY3Rpb24gb25TcGluQnV0dG9uQ2xpY2tlZCgpIHtcclxuICAgIGlmKGFyZVJlZWxzU3Bpbm5pbmcpe1xyXG4gICAgICAgIGNoYW5nZVJlZWxzU3Bpbm5pbmdUbyhmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KFwibm90aWZ5OnNwaW5TdGFydFwiLCBiZXRTZWxlY3Rvci5jdXJyZW50VmFsdWUgKyAxKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBnYW1lQ29uZmlnICA9IHtcclxuICAgIGJldExpbmVzIDogW1xyXG4gICAgICAgIFswLDAsMCwwLDBdLFxyXG4gICAgICAgIFsxLDEsMSwxLDFdLFxyXG4gICAgICAgIFsyLDIsMiwyLDJdLFxyXG4gICAgICAgIFswLDEsMiwxLDBdLFxyXG4gICAgICAgIFsyLDEsMCwxLDJdLFxyXG4gICAgICAgIFsxLDAsMSwwLDFdLFxyXG4gICAgICAgIFsxLDIsMSwyLDFdXHJcbiAgICBdLFxyXG5cclxuXHJcbiAgICByZWVsc2V0cyA6IFtcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsMCwyLDAsMiwwLDEsMCwyXSxcclxuICAgICAgICAgICAgICAgIFswLDAsMiwxLDAsMSwyLDAsMl0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDIsMiwyLDAsMSwwLDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsMSwwLDAsMiwwLDAsMSwyXSxcclxuICAgICAgICAgICAgICAgIFswLDAsMSwxLDAsMCwyLDIsMV1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzAsMiwyLDEsMCwwLDIsMSwyXSxcclxuICAgICAgICAgICAgICAgIFsyLDIsMSwxLDAsMSwyLDAsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDAsMiwxLDAsMiwwLDBdLFxyXG4gICAgICAgICAgICAgICAgWzIsMSwxLDIsMCwwLDEsMCwyXSxcclxuICAgICAgICAgICAgICAgIFsxLDAsMiwyLDIsMSwwLDIsMF1cclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgW1xyXG4gICAgICAgICAgICAgICAgWzEsMiwwLDEsMCwxLDIsMSwyXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMCwwLDIsMCwwLDEsMl0sXHJcbiAgICAgICAgICAgICAgICBbMCwxLDAsMiwxLDAsMiwwLDFdLFxyXG4gICAgICAgICAgICAgICAgWzEsMCwyLDIsMiwxLDAsMiwwXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMCwwLDIsMCwwLDEsMl1cclxuICAgICAgICAgICAgXVxyXG4gICAgXSxcclxuXHJcblxyXG4gICAgZ2FtZVNpemUgOiB7XHJcbiAgICAgICAgd2lkdGg6IDgwMCxcclxuICAgICAgICBoZWlnaHQ6IDQwMCxcclxuICAgICAgICByb3dzOiAzLFxyXG4gICAgICAgIHJlZWxzOiA1XHJcbiAgICB9LFxyXG5cclxuICAgIHJlZWxzUG9zaXRpb24gOiB7XHJcbiAgICAgICAgdG9wT2Zmc2V0IDogMTAsXHJcbiAgICAgICAgbGVmdE9mZnNldCA6IDE1LFxyXG5cclxuICAgICAgICByZWVscyA6IHtcclxuICAgICAgICAgICAgbGVmdDogODAsXHJcbiAgICAgICAgICAgIHNsb3RMZW5ndGg6IDEzNCxcclxuICAgICAgICAgICAgc3ltYm9sRGltZW5zaW9uczoge3dpZHRoOiAxMTAsIGhlaWdodDogMTEwfSxcclxuICAgICAgICAgICAgdmlzaWJsZVN5bWJOdW06IDMsXHJcbiAgICAgICAgICAgIHN5bWJvbHNOdW1iZXI6IDQsXHJcbiAgICAgICAgICAgIHN5bWJvbFNwZWVkIDogMTYwXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLy9jYW4ndCBmaW5kIHRoZSBzb2x1dGlvbiBob3cgdG8gc2V0IGNvbnRleHQgaGVyZVxyXG4gICAgICAgIHJlZWxzUG9pbnRzIDogW1xyXG4gICAgICAgICAgICB7eCA6IDgwLCB5IDogMTM0LzJ9LFxyXG4gICAgICAgICAgICB7eCA6IDgwICogMywgeSA6IDEzNC8yfSxcclxuICAgICAgICAgICAge3ggOiA4MCAqIDUsIHkgOiAxMzQvMn0sXHJcbiAgICAgICAgICAgIHt4IDogODAgKiA3LCB5IDogMTM0LzJ9LFxyXG4gICAgICAgICAgICB7eCA6IDgwICogOSwgeSA6IDEzNC8yfVxyXG4gICAgICAgIF0sXHJcblxyXG4gICAgICAgIHN5bWJvbHNQb2ludCA6IFtcclxuICAgICAgICAgICAge3ggOiAwLCB5IDogMH0sXHJcbiAgICAgICAgICAgIHt4IDogMCwgeSA6IDEzNH0sXHJcbiAgICAgICAgICAgIHt4IDogMCwgeSA6IDEzNCAqIDJ9LFxyXG4gICAgICAgICAgICB7eCA6IDAsIHkgOiAxMzQgKiAzfSxcclxuXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXHJcblxyXG59OyIsIlxyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcclxuZXhwb3J0IGNvbnN0IG9ic2VydmFibGVNaXhpbiA9IHtcclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBwYXJhbXMge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59XHJcbiAgICAgKi9cclxuICAgIGJ5IDogZnVuY3Rpb24gKHBhcmFtcykge1xyXG4gICAgICAgIGlmKCAhdGhpcy5ldmVudEhhbmRsZXJzICl7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRIYW5kbGVycyA9IHt9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yKCBsZXQgZXZlbnROYW1lIGluIHBhcmFtcykge1xyXG4gICAgICAgICAgICBpZiggcGFyYW1zLmhhc093blByb3BlcnR5KGV2ZW50TmFtZSkgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoICF0aGlzLmV2ZW50SGFuZGxlcnNbZXZlbnROYW1lXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLmFkZExpc3RlbmVyKGV2ZW50TmFtZSwgdGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudEhhbmRsZXJzW2V2ZW50TmFtZV0gPSBwYXJhbXNbZXZlbnROYW1lXSA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWUgZXZlbnROYW1lXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhcmdzIGFycmF5IHdpdGggYXJndW1lbnRzXHJcbiAgICAgKi9cclxuICAgIGZpcmVFdmVudCA6IGZ1bmN0aW9uKGV2ZW50TmFtZSwgLi4uYXJncyl7XHJcbiAgICAgICAgZXZlbnRzLmZpcmVFdmVudChldmVudE5hbWUsIGFyZ3MpO1xyXG4gICAgfVxyXG59OyIsImltcG9ydCB7cmFuZG9tSW50fSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJNb2NrIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVlbHNldHNMaXN0ID0gZ2FtZUNvbmZpZy5yZWVsc2V0cztcclxuICAgICAgICB0aGlzLmJldExpbmVzID0gZ2FtZUNvbmZpZy5iZXRMaW5lcztcclxuICAgICAgICB0aGlzLnJlZWxzTGVuZ3RoID0gZ2FtZUNvbmZpZy5nYW1lU2l6ZS5yb3dzO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuXHJcbiAgICAgICAgdGhpcy5ieSh7XCJub3RpZnk6c3BpblN0YXJ0XCIgOiB0aGlzLnN0YXJ0fSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBvbiByZXF1ZXN0IGZyb20gY2xpZW50IGNyZWF0ZXMgc3Bpbi9iZXQgcmVzdWx0IGFuZCBpbmZvcm0gdGhlIGNsaWVudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJldFNpemUgbXVsdGlwbGllciBmb3Igd2luIHBvaW50c1xyXG4gICAgICovXHJcbiAgICBzdGFydChiZXRTaXplKXtcclxuICAgICAgICBjb25zdCBjdXJyZW50UmVlbHNldCA9IHRoaXMuc2VsZWN0UmVlbHNldCh0aGlzLnJlZWxzZXRzTGlzdCk7XHJcbiAgICAgICAgY29uc3Qgc3BpblJlc3VsdCA9IHRoaXMuc2VsZWN0UG9zaXRpb25zKGN1cnJlbnRSZWVsc2V0KTtcclxuICAgICAgICBjb25zdCBnZW5lcmF0ZWRSZXNwb25zZSA9IHRoaXMuY2hlY2tCZXRMaW5lcyAoc3BpblJlc3VsdCwgYmV0U2l6ZSk7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KFwibm90aWZ5OnNlcnZlck1hbmFnZXIubmV3UmVzcG9uc2VcIiwgZ2VuZXJhdGVkUmVzcG9uc2UpO1xyXG4gICAgICAgIH0sMTAwMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmFuZG9tbHkgc2VsZWN0IHJlZWxzZXQgZnJvbSByZWVsc2V0c0xpc3RcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlZWxzZXRzTGlzdCBhcnJheSB3aXRoIHJlZWxzZXRzXHJcbiAgICAgKiBAcmV0dXJucyB7YXJyYXl9IHNlbGVjdGVkIHJlZWxzZXRcclxuICAgICAqL1xyXG4gICAgc2VsZWN0UmVlbHNldCAocmVlbHNldHNMaXN0KSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSByYW5kb21JbnQoMCwgcmVlbHNldHNMaXN0Lmxlbmd0aCAtIDEpO1xyXG4gICAgICAgIHJldHVybiByZWVsc2V0c0xpc3RbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmFuZG9tbHkgc2VsZWN0cyBzdGFydCBwb3NpdGlvbnMgb24gZWFjaCByZWVsIGFuZCBnZW5lcmF0ZSBuZXcgYXJyYXkgd2l0aCBuZXh0IDMgc3ltYm9sc1xyXG4gICAgICogQHBhcmFtIHthcnJheX0gY3VycmVudFJlZWxzZXQgYXJyYXkgd2l0aCBwb3NzaWJsZSB2YWx1ZXMgZm9yIGVhY2ggcmVlbFxyXG4gICAgICogQHJldHVybnMge0FycmF5fSAyZCBhcnJheSB3aXRoIHNwaW4gcmVzdWx0XHJcbiAgICAgKi9cclxuICAgIHNlbGVjdFBvc2l0aW9ucyAoY3VycmVudFJlZWxzZXQpIHtcclxuXHJcbiAgICAgICAgY29uc3Qgc3BpblJlc3VsdCA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3VycmVudFJlZWxzZXQubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBjdXJTZXQgPSBjdXJyZW50UmVlbHNldFtpXTtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCBzdGFydFBvaW50ID0gcmFuZG9tSW50KDAsIGN1clNldC5sZW5ndGggLSB0aGlzLnJlZWxzTGVuZ3RoKTtcclxuICAgICAgICAgICAgY29uc3QgY3VyUmVlbCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRoaXMucmVlbHNMZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgY3VyUmVlbC5wdXNoKGN1clNldFtzdGFydFBvaW50ICsgal0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzcGluUmVzdWx0LnB1c2goY3VyUmVlbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzcGluUmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZGVwZW5kcyBvbiBzcGluIHJlc3VsdCBjaGVjayBiZXQgbGluZXMgYW5kIGdlbmVyYXRlcyByZXN1bHQgY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBzcGluUmVzdWx0IHR3by1sZXZlbHMgYXJyYXkgd2l0aCBzcGluIHJlc3VsdFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJldFNpemUgd2luIHBvaW50cyBtdWx0aXBsaWVyXHJcbiAgICAgKiBAcmV0dXJucyB7b2JqZWN0fSByZXN1bHRDb25maWcgcmVzdWx0IGNvbmZpZ3VyYXRpb24gb2YgY3VycmVudCBiZXRcclxuICAgICAqICAgICAgICAgIHtudW1iZXJ9IHJlc3VsdENvbmZpZy53aW5BbW91bnQgYW1vdW50IG9mIHdpbiBwb2ludFxyXG4gICAgICogICAgICAgICAge2FycmF5fSByZXN1bHRDb25maWcud2luTGluZXMgYXJyYXkgd2l0aCB3aW4gYmV0IGxpbmVzXHJcbiAgICAgKiAgICAgICAgICB7YXJyYXl9IHJlc3VsdENvbmZpZy53aW5TeW1ib2xzIGFycmF5IHdpdGggd2luIHN5bWJvbHNcclxuICAgICAqICAgICAgICAgIHthcnJheX0gcmVzdWx0Q29uZmlnLnNwaW5SZXN1bHQgMmQgYXJyYXkgd2l0aCBzcGluIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBjaGVja0JldExpbmVzIChzcGluUmVzdWx0LCBiZXRTaXplKXtcclxuXHJcbiAgICAgICAgbGV0IHdpblBvaW50cyA9IDA7XHJcbiAgICAgICAgY29uc3Qgd2luU3ltYm9scyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IHdpbkxpbmVzID0gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0ge307XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5iZXRMaW5lcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50TGluZSAgPSB0aGlzLmJldExpbmVzW2ldO1xyXG4gICAgICAgICAgICBsZXQgc3ltYnNNYXRjaGVkID0gMTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG9uUmVlbFBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZ2VuZXJhdGVkTGluZSA9IHNwaW5SZXN1bHQubWFwKCAocmVlbCwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VySW5kZXggPSBjdXJyZW50TGluZVtpXTtcclxuICAgICAgICAgICAgICAgIG9uUmVlbFBvc2l0aW9ucy5wdXNoKGN1ckluZGV4KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWVsW2N1ckluZGV4XTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgZ2VuZXJhdGVkTGluZS5sZW5ndGggLSAxOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyYXRlZExpbmVbal0gPT09IGdlbmVyYXRlZExpbmVbaisxXSkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBzeW1ic01hdGNoZWQgKz0xO1xyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICBpZiAoc3ltYnNNYXRjaGVkID4gMikge1xyXG5cclxuICAgICAgICAgICAgICAgIHdpblN5bWJvbHMucHVzaChvblJlZWxQb3NpdGlvbnMuc2xpY2UoMCwgc3ltYnNNYXRjaGVkKSk7XHJcbiAgICAgICAgICAgICAgICB3aW5MaW5lcy5wdXNoKGkpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHN5bWJzTWF0Y2hlZCA9PT0gMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luUG9pbnRzICs9IDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHN5bWJzTWF0Y2hlZCA9PT0gNCl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luUG9pbnRzICs9IDMwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHN5bWJzTWF0Y2hlZCA9PT0gNSl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luUG9pbnRzICs9IDEwMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3BvbnNlLndpbkFtb3VudCA9ICB3aW5Qb2ludHMgKiBiZXRTaXplO1xyXG4gICAgICAgIHJlc3BvbnNlLndpbkxpbmVzID0gd2luTGluZXM7XHJcbiAgICAgICAgcmVzcG9uc2Uud2luU3ltYm9scyA9IHdpblN5bWJvbHM7XHJcbiAgICAgICAgcmVzcG9uc2Uuc3BpblJlc3VsdCA9IHNwaW5SZXN1bHQ7XHJcblxyXG4gICAgICAgIHJldHVybiByZXNwb25zZTtcclxuXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5TeW1ib2xzICB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcbiAgICAgICAgdGhpcy5ieSh7XCJub3RpZnk6c2VydmVyTWFuYWdlci5uZXdSZXNwb25zZVwiIDogdGhpcy5jcmVhdGVTeW1ib2xzQ29uZmlnfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2VuZXJhdGUgd2luIGNvbmZpZyBkZXBlbmRzIG9uIHNlcnZlciByZXNwb25zZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHNlcnZlclJlc3VsdFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNlcnZlclJlc3VsdC53aW5BbW91bnQgYW1vdW50IG9mIHdpbiBwb2ludFxyXG4gICAgICogQHBhcmFtIHthcnJheX0gc2VydmVyUmVzdWx0LndpbkxpbmVzIGFycmF5IHdpdGggd2luIGJldCBsaW5lc1xyXG4gICAgICogQHBhcmFtIHthcnJheX0gc2VydmVyUmVzdWx0LndpblN5bWJvbHMgYXJyYXkgd2l0aCB3aW4gc3ltYm9sc1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVTeW1ib2xzQ29uZmlnIChzZXJ2ZXJSZXN1bHQpIHtcclxuXHJcbiAgICAgICAgaWYoc2VydmVyUmVzdWx0LndpbkFtb3VudCA9PT0gMCl7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1hdHJpeCA9IHRoaXMuY3JlYXRlVGVtcGxhdGVNYXRyaXgoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2ZXJSZXN1bHQud2luU3ltYm9scy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IGN1ckxpbmUgPSBzZXJ2ZXJSZXN1bHQud2luU3ltYm9sc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjdXJMaW5lLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1clJlZWwgPSAgbWF0cml4W2pdO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ltYkluZGV4ID0gY3VyTGluZVtqXTtcclxuXHJcbiAgICAgICAgICAgICAgICBjdXJSZWVsW3N5bWJJbmRleF0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KFwibm90aWZ5OndpblN5bWJvbHNQcm9jZXNzZWRcIiwgbWF0cml4KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgbWF0cml4IGRlcGVuZHMgb24gZ2FtZUNvbmZpZyBwYXJhbXNcclxuICAgICAqIEByZXR1cm5zIHthcnJheX0gbWF0cml4IHdpdGggZmFsc2UgcGFyYW1zXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVRlbXBsYXRlTWF0cml4KCl7XHJcbiAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBbXTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm93c051bSA9IGdhbWVDb25maWcuZ2FtZVNpemUucm93cztcclxuICAgICAgICBjb25zdCByZWVsc051bSA9IGdhbWVDb25maWcuZ2FtZVNpemUucmVlbHM7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZWVsc051bTsgaSsrKXtcclxuICAgICAgICAgICAgY29uc3QgY3VyUmVlbCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHJvd3NOdW07IGorKyl7XHJcbiAgICAgICAgICAgICAgICBjdXJSZWVsLnB1c2goZmFsc2UpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGVtcGxhdGUucHVzaChjdXJSZWVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcclxuICAgIH1cclxufSIsImltcG9ydCB7cmVuZGVyTG9vcH0gZnJvbSBcIi4uL2VuZ2luZVwiO1xyXG5pbXBvcnQge3RpbWVCZXR3ZWVuRnJhbWVzfSBmcm9tIFwiLi4vdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21Ud2VlbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihvYmosIHByb3BlcnR5TmFtZSwgc3RhcnQsIGVuZCwgcGVyaW9kKXtcclxuXHJcbiAgICAgICAgdGhpcy5vYmogPSBvYmo7XHJcbiAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMucHJvcGVydHlOYW1lID0gcHJvcGVydHlOYW1lO1xyXG4gICAgICAgIHRoaXMuZ2V0U3BlZWQocGVyaW9kKTtcclxuXHJcbiAgICAgICAgcmVuZGVyTG9vcC5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9uIGVhY2ggZnJhbWUgZXZlbmx5IGNoYW5nZSByZXF1aXJlZCBwYXJhbSwgZnJvbSB0aGUgc3RhcnQgcG9pbnQgdG8gdGhlIGVuZCwgZm9yIGEgc2V0IHBlcmlvZCBvZiB0aW1lXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGEgZWxpbWluYXRlcyBkZWxheXMgYmV0d2VlbiBmcmFtZXNcclxuICAgICAqL1xyXG4gICAgdXBkYXRlIChkZWx0YSl7XHJcbiAgICAgICAgaWYodGhpcy51cGRhdGVSZXF1aXJlZCl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZGlzdGFuY2UgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdIDwgdGhpcy5lbmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSArPSB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gID49IHRoaXMuZW5kICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPSB0aGlzLmVuZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA+IHRoaXMuZW5kKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gKz0gdGhpcy5zcGVlZCAqIGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICggdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdICA8PSB0aGlzLmVuZCAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdID0gdGhpcy5lbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmF0ZXMgc3BlZWQgZGVwZW5kIG9uIGRpc3RhbmNlIGFuZCBwZXJpb2RcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwZXJpb2QgcGVyaW9kIG9mIHRpbWUgbmVlZGVkIHRvIHJlYWNoIHRoZSBlbmRwb2ludFxyXG4gICAgICovXHJcbiAgICBnZXRTcGVlZCAocGVyaW9kKSB7XHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuZW5kIC0gdGhpcy5zdGFydDtcclxuICAgICAgICB0aGlzLm51bU9mRnJhbWVzID0gcGVyaW9kL3RpbWVCZXR3ZWVuRnJhbWVzO1xyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmRpc3RhbmNlL3RoaXMubnVtT2ZGcmFtZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN0YXJ0IHN0YXJ0IHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZW5kIGVuZCBwb2ludFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcmlvZCBwZXJpb2Qgb2YgdGltZSBuZWVkZWQgdG8gcmVhY2ggdGhlIGVuZHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBvbkNvbXBsZXRlIGNhbGxiYWNrIGZ1bmN0aW9uXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAgICovXHJcbiAgICBwbGF5KHN0YXJ0LCBlbmQsIHBlcmlvZCwgb25Db21wbGV0ZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IHN0YXJ0O1xyXG4gICAgICAgICAgICB0aGlzLmVuZCA9IGVuZDtcclxuICAgICAgICAgICAgdGhpcy5nZXRTcGVlZChwZXJpb2QpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcGxldGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7YXJlUmVlbHNTcGlubmluZ30gZnJvbSBcIi4uL2VuZ2luZVwiO1xyXG5pbXBvcnQge3JhbmRvbUludH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7U3ltYm9sfSBmcm9tIFwiLi9zeW1ib2xcIjtcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi4vbWFpbi9nYW1lQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVlbCBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Db25maWcgPSBnYW1lQ29uZmlnLnJlZWxzUG9zaXRpb24ucmVlbHM7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzUG9pbnQgPSBnYW1lQ29uZmlnLnJlZWxzUG9zaXRpb24uc3ltYm9sc1BvaW50O1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzID0gdGhpcy5hZGRTeW1ib2xzKHRoaXMuc3ltYm9sc1BvaW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID0gMDtcclxuICAgICAgICB0aGlzLnJlc3VsdFN5bWJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1clJlc3VsdFN5bWJJbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJEYXRhUmVjZWl2ZWQgPSBmYWxzZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpbmcgc3ltYm9scyB0byByZWVsIGJ5IHN5bWJvbHNQb2ludCBmcm9tIGdhbWVDb25maWdcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHN5bWJvbHNQb2ludCBhcnJheSB3aXRoIHBvaW50cyBmb3Igc3ltYm9sc1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIHN5bWJvbHNcclxuICAgICAqL1xyXG4gICAgYWRkU3ltYm9scyhzeW1ib2xzUG9pbnQpIHtcclxuICAgICAgICBjb25zdCBzeW1ib2xzID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzeW1ib2xzUG9pbnQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY3VyU3ltYiA9IHN5bWJvbHNQb2ludFtpXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcmFuZG9tSW50KDAsIHBvc3NpYmxlU3ltU3JjLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBjb25zdCBzeW1ib2wgPSBuZXcgU3ltYm9sKHBvc3NpYmxlU3ltU3JjW2luZGV4XSwgdGhpcy5wb3NpdGlvbkNvbmZpZyk7XHJcbiAgICAgICAgICAgIHN5bWJvbC5wb3NpdGlvbi5zZXQoY3VyU3ltYi54ICwgY3VyU3ltYi55KTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChzeW1ib2wpO1xyXG4gICAgICAgICAgICBzeW1ib2xzLnB1c2goc3ltYm9sKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBzeW1ib2xzO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzdGFydCBzcGlubmluZyBzeW1ib2xzXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBwcm9taXNlXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNCZWZvcmVSZXN1bHQgPSBJbmZpbml0eTtcclxuXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKHRoaXMuc3ltYm9scy5tYXAoc3ltID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzeW0uc3RhcnRTcGluKCk7XHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzb2x2ZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHRoaXMubW92ZUxhc3RTeW1iT25Ub3AuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnRTdG9wU2VxdWVuY2UoYmV0UmVzdWx0LCBzeW1ic0JmUmVzdWx0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID0gc3ltYnNCZlJlc3VsdDtcclxuICAgICAgICAgICAgdGhpcy5yZXN1bHRTeW1ib2xzID0gYmV0UmVzdWx0O1xyXG4gICAgICAgICAgICB0aGlzLmN1clJlc3VsdFN5bWJJbmRleCA9IHRoaXMucmVzdWx0U3ltYm9scy5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNlcnZlckRhdGFSZWNlaXZlZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlc29sdmVDaGFpbiA9IHJlc29sdmVcclxuICAgICAgICB9KVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZVJhbmRvbVN5bWIgaWYgdHJ1ZSBhZGQgcmFuZG9tU3ltYm9sXHJcbiAgICAgKi9cclxuICAgIG1vdmVMYXN0U3ltYk9uVG9wKHVzZVJhbmRvbVN5bWIgPSB0cnVlKXtcclxuICAgICAgICBjb25zdCBsYXN0SW5kZXggPSB0aGlzLnN5bWJvbHMubGVuZ3RoIC0gMTtcclxuICAgICAgICBjb25zdCBsYXN0U3ltYm9sID0gdGhpcy5zeW1ib2xzW2xhc3RJbmRleF07XHJcbiAgICAgICAgbGV0IG5ld0luZGV4O1xyXG5cclxuICAgICAgICBpZih1c2VSYW5kb21TeW1iKXtcclxuICAgICAgICAgICAgbmV3SW5kZXggPSByYW5kb21JbnQoMCwgcG9zc2libGVTeW1TcmMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3SW5kZXggPSB0aGlzLnJlc3VsdFN5bWJvbHNbdGhpcy5jdXJSZXN1bHRTeW1iSW5kZXhdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGFzdFN5bWJvbC5zZXROZXdTeW1ib2wobmV3SW5kZXgpO1xyXG5cclxuICAgICAgICBsYXN0U3ltYm9sLnkgPSAtdGhpcy5wb3NpdGlvbkNvbmZpZy5zbG90TGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLnN5bWJvbHMudW5zaGlmdCh0aGlzLnN5bWJvbHMucG9wKCkpO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbCh0aGlzLnN5bWJvbHMubWFwKCBzeW1ib2wgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gc3ltYm9sLm1vdmVPbmVTbG90KCk7XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgICAgIC50aGVuKCB0aGlzLm9uU3ltYm9sTW92ZWRPbmVTbG90LmJpbmQodGhpcykpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHdoZW4gZWFjaCBzeW1ib2wgbW92ZWQgb25lIHNsb3QsIGl0IHJlZHVjZXMgc3ltYm9sc0NvdW50ZXJcclxuICAgICAqIHdoZW4gYWxsIHN5bWJvbHMgYXJlIGZpbmlzaGVkLCByZXNldCB0aGUgY291bnRlclxyXG4gICAgICogaWYgbW9yZSBpdGVyYXRpb25zIGFyZSByZXF1aXJlZCwgY2FsbCB0aGlzLm1vdmVMYXN0U3ltYk9uVG9wXHJcbiAgICAgKi9cclxuICAgIG9uU3ltYm9sTW92ZWRPbmVTbG90KCkge1xyXG4gICAgICAgIHRoaXMuc3ltYm9sc0JlZm9yZVJlc3VsdC0tO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID4gMCAmJiBhcmVSZWVsc1NwaW5uaW5nIHx8ICF0aGlzLnNlcnZlckRhdGFSZWNlaXZlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vdmVMYXN0U3ltYk9uVG9wKCk7XHJcblxyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmN1clJlc3VsdFN5bWJJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUxhc3RTeW1iT25Ub3AoZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmN1clJlc3VsdFN5bWJJbmRleC0tO1xyXG4gICAgICAgIH1lbHNlIHtcclxuXHJcbiAgICAgICAgICAgIFByb21pc2UuYWxsKHRoaXMuc3ltYm9scy5tYXAoIHN5bWJvbCA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3ltYm9sLmVuZFNwaW4oKTtcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbih0aGlzLm9uU3Bpbk92ZXIuYmluZCh0aGlzKSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBjdXJyZW50IHNwaW4gaXMgb3ZlciBzZXQgZGVmYXVsdCB2YWx1ZXMgYW5kIGNhbGwgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgb25TcGluT3ZlcigpIHtcclxuICAgICAgICB0aGlzLnNlcnZlckRhdGFSZWNlaXZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0U3ltYm9scyA9IFtdO1xyXG4gICAgICAgIHRoaXMucmVzb2x2ZUNoYWluKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2hvd1dpblN5bWIgKHN5bWJvbHMpIHtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKyl7XHJcblxyXG4gICAgICAgICAgICBpZihzeW1ib2xzW2ldKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sc1tpXS5wbGF5V2luQW5pbWF0aW9uKClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9sc1tpXS5wbGF5TG9zc0FuaW1hdGlvbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheUlkbGUoKSB7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzLmZvckVhY2goIHN5bWJvbCA9PiB7XHJcbiAgICAgICAgICAgIHN5bWJvbC5wbGF5SWRsZSgpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHtjaGFuZ2VSZWVsc1NwaW5uaW5nVG99IGZyb20gXCIuLi9lbmdpbmVcIjtcclxuaW1wb3J0IHtSZWVsfSBmcm9tIFwiLi9yZWVsXCJcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi4vbWFpbi9nYW1lQ29uZmlnXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi4vbWFpbi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWVscyBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy55ID0gZ2FtZUNvbmZpZy5yZWVsc1Bvc2l0aW9uLnRvcE9mZnNldDtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxSZWVscyA9IHRoaXMuYWRkUmVlbHMoKTtcclxuICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLmFkZE1hc2soKTtcclxuXHJcbiAgICAgICAgdGhpcy53aW5BbmltUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlc3VsdENvbmZpZyA9IG51bGw7XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKTtcclxuXHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbih0aGlzLCBvYnNlcnZhYmxlTWl4aW4pO1xyXG5cclxuICAgICAgICB0aGlzLmJ5KHtcclxuICAgICAgICAgICAgXCJub3RpZnk6c3BpblN0YXJ0XCIgOiB0aGlzLnN0YXJ0LFxyXG4gICAgICAgICAgICBcIm5vdGlmeTpzZXJ2ZXJNYW5hZ2VyLm5ld1Jlc3BvbnNlXCIgOiB0aGlzLnNlcnZlclJlc3BvbnNlUmVjZWl2ZWQsXHJcbiAgICAgICAgICAgIFwibm90aWZ5OndpblN5bWJvbHNQcm9jZXNzZWRcIjogdGhpcy5hZGRXaW5IYW5kbGVyVmFsdWVzLFxyXG4gICAgICAgICAgICBcIm5vdGlmeTpiZXRDaGFuZ2VkXCIgOiB0aGlzLnBsYXlJZGxlXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZXMgcmVlbHMgZGVwZW5kaW5nIG9uIGdhbWVDb25maWcgcGFyYW1zXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IGFycmF5IHdpdGggcmVlbHNcclxuICAgICAqL1xyXG4gICAgYWRkUmVlbHMoKSB7XHJcbiAgICAgICAgbGV0IHJlZWxzUG9pbnRzID0gZ2FtZUNvbmZpZy5yZWVsc1Bvc2l0aW9uLnJlZWxzUG9pbnRzO1xyXG4gICAgICAgIGxldCBhbGxSZWVscyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVlbHNQb2ludHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgY3VyUmVlbFBvaW50cyA9IHJlZWxzUG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBsZXQgcmVlbCA9IG5ldyBSZWVsKGN1clJlZWxQb2ludHMueCwgY3VyUmVlbFBvaW50cy55KTtcclxuICAgICAgICAgICAgYWxsUmVlbHMucHVzaChyZWVsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZChyZWVsKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYWxsUmVlbHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGUgYSBtYXNrIHRvIGxpbWl0IHZpc2libGUgem9uZVxyXG4gICAgICogQHJldHVybnMge1BJWEkuR3JhcGhpY3N9IHJlZWxzIG1hc2tcclxuICAgICAqL1xyXG4gICAgYWRkTWFzaygpIHtcclxuICAgICAgICBsZXQgcmVlbHNNYXNrID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgICAgICByZWVsc01hc2suYmVnaW5GaWxsKCk7XHJcbiAgICAgICAgcmVlbHNNYXNrLmRyYXdSZWN0KDAsIC10aGlzLnksIGdhbWVDb25maWcuZ2FtZVNpemUud2lkdGgsIGdhbWVDb25maWcuZ2FtZVNpemUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLmFkZENoaWxkKHJlZWxzTWFzayk7XHJcblxyXG4gICAgICAgIHJldHVybiByZWVsc01hc2s7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwcm9jZXNzaW5nIHRoZSBzcGluXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFJlZWxzU3BpbigpLFxyXG4gICAgICAgICAgICBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHRoaXMuc2VydmVyUmVzcG9uc2VSZXNvbHZlID0gcmVzb2x2ZSlcclxuICAgICAgICBdKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB0aGlzLnN0YXJ0U3RvcFNlcXVlbmNlKCkpXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHRoaXMub25TcGluQ29tcGxldGUoKSlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzdGFydCBzcGlubmluZyByZWVsc1xyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBzdGFydFJlZWxzU3BpbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgY2hhbmdlUmVlbHNTcGlubmluZ1RvKHRydWUpO1xyXG5cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwoIHRoaXMuYWxsUmVlbHMubWFwKCByZWVsID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZWVsLnN0YXJ0KClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXNvbHZlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdENvbmZpZyByZXN1bHRDb25maWcgZnJvbSBzZXJ2ZXJcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlc3VsdENvbmZpZy5zcGluUmVzdWx0IGFycmF5IHdpdGggYmV0IHJlc3VsdCBmb3IgZWFjaCByZWVsXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmVzdWx0Q29uZmlnLndpbkFtb3VudCB3aW4gcG9pbnRzIG9uIGN1cnJlbnQgYmV0XHJcbiAgICAgKi9cclxuICAgIHNlcnZlclJlc3BvbnNlUmVjZWl2ZWQocmVzdWx0Q29uZmlnKSB7XHJcbiAgICAgICAgdGhpcy5yZXN1bHRDb25maWcgPSByZXN1bHRDb25maWc7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJSZXNwb25zZVJlc29sdmUoKVxyXG4gICAgfVxyXG5cclxuICAgIHNlcnZlclJlc3BvbnNlUmVzb2x2ZSgpe31cclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzeW1ic0JmUmVzdWx0IGFtb3VudCBvZiByYW5kb20gc3ltYm9scyBiZWZvcmUgcmVzdWx0XHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBwcm9taXNlXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0U3RvcFNlcXVlbmNlICggc3ltYnNCZlJlc3VsdCA9IDYpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIHJlc29sdmUgPT4ge1xyXG5cclxuICAgICAgICAgICAgUHJvbWlzZS5hbGwodGhpcy5hbGxSZWVscy5tYXAoIChyZWVsLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVlbC5zdGFydFN0b3BTZXF1ZW5jZSggdGhpcy5yZXN1bHRDb25maWcuc3BpblJlc3VsdFtpXSwgc3ltYnNCZlJlc3VsdCtpKjIpO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlc29sdmUpXHJcblxyXG4gICAgICAgIH0pXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldHMgcmVzdWx0IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHJlc3VsdENvbmZpZyBmcm9tIHdpbkhhbmRsZXJcclxuICAgICAqL1xyXG4gICAgYWRkV2luSGFuZGxlclZhbHVlcyAocmVzdWx0Q29uZmlnKSB7XHJcbiAgICAgICAgaWYocmVzdWx0Q29uZmlnKSB7XHJcbiAgICAgICAgICAgIHRoaXMud2luQW5pbVJlcXVpcmVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzUmVzdWx0Q29uZmlnID0gcmVzdWx0Q29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogd2hlbiBlYWNoIHJlZWwgZmluaXNoZWQgc3BpbiwgaXQgcmVkdWNlcyByZWVsc0NvdW50ZXJcclxuICAgICAqIHdoZW4gYWxsIHJlZWxzIGFyZSBmaW5pc2hlZCwgcmVzZXQgdGhlIGNvdW50ZXIsIGFuZCBjaGVjayBiZXQgbGluZXNcclxuICAgICAqL1xyXG4gICAgb25TcGluQ29tcGxldGUgKCkge1xyXG4gICAgICAgIGNoYW5nZVJlZWxzU3Bpbm5pbmdUbyhmYWxzZSk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaG93V2luQW5pbWF0aW9uKHRoaXMuc3ltYm9sc1Jlc3VsdENvbmZpZyk7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KFwibm90aWZ5OnNwaW5PdmVyXCIsIHRoaXMucmVzdWx0Q29uZmlnKTtcclxuICAgICAgICB9LDEwMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaWYgd2luQW5pbVJlcXVpcmVkLCBzaG93IHdpbi9sb3NzIGFuaW1hdGlvbiBmb3IgZWFjaCBzeW1ib2xcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IG1hdHJpeCAyZCBhcnJheSB3aXRoIHRydWUvZmFsc2UgcGFyYW1cclxuICAgICAqL1xyXG4gICAgc2hvd1dpbkFuaW1hdGlvbihtYXRyaXgpIHtcclxuICAgICAgICBpZiAoIXRoaXMud2luQW5pbVJlcXVpcmVkKXtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaXgubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBjb25zdCBjdXJSZXN1bHRSZWVsID0gbWF0cml4W2ldO1xyXG4gICAgICAgICAgICBjb25zdCBjdXJSZWVsID0gdGhpcy5hbGxSZWVsc1tpXTtcclxuXHJcbiAgICAgICAgICAgIGN1clJlZWwuc2hvd1dpblN5bWIoY3VyUmVzdWx0UmVlbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLndpbkFuaW1SZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHBsYXlJZGxlKCkge1xyXG4gICAgICAgIHRoaXMuYWxsUmVlbHMuZm9yRWFjaCggcmVlbCA9PiB7XHJcbiAgICAgICAgICAgIHJlZWwucGxheUlkbGUoKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHt0ZXh0dXJlc30gZnJvbSBcIi4uL2VuZ2luZVwiO1xyXG5pbXBvcnQge0N1c3RvbVR3ZWVufSBmcm9tIFwiLi9jdXN0b21Ud2VlblwiO1xyXG5pbXBvcnQge2JldExpbmVzfSBmcm9tIFwiLi4vZW5naW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ltYm9sIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlU3JjLCBjb25maWcpe1xyXG4gICAgICAgIHN1cGVyKHRleHR1cmVzW3RleHR1cmVTcmNdKTtcclxuXHJcbiAgICAgICAgdGhpcy53aWR0aCA9IGNvbmZpZy5zeW1ib2xEaW1lbnNpb25zLndpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gY29uZmlnLnN5bWJvbERpbWVuc2lvbnMuaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuc2xvdExlbmd0aCA9IGNvbmZpZy5zbG90TGVuZ3RoO1xyXG5cclxuICAgICAgICB0aGlzLnR5cGUgPSB0ZXh0dXJlU3JjO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG5cclxuICAgICAgICB0aGlzLnNwZWVkID0gY29uZmlnLnN5bWJvbFNwZWVkO1xyXG5cclxuICAgICAgICB0aGlzLnN0YXJ0U2NhbGUgPSB0aGlzLnNjYWxlLl94O1xyXG4gICAgICAgIHRoaXMuZW5kU2NhbGUgPSB0aGlzLnN0YXJ0U2NhbGUqMS4yNTtcclxuXHJcbiAgICAgICAgdGhpcy50d2VlbiA9IG5ldyBDdXN0b21Ud2Vlbih0aGlzLCBcInlcIiwgdGhpcy55LCB0aGlzLnkgKyAgdGhpcy5zbG90TGVuZ3RoLCB0aGlzLnNwZWVkKTtcclxuICAgICAgICB0aGlzLmJvdW5jZVR3ZWVuID0gbmV3IEN1c3RvbVR3ZWVuKHRoaXMsIFwieVwiLCB0aGlzLnksIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzIsIHRoaXMuc3BlZWQqMi8zKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZVR3ZWVuID0gbmV3IEN1c3RvbVR3ZWVuKHRoaXMsIFwic3ltYlNjYWxlXCIsIHRoaXMuc3RhcnRTY2FsZSwgIHRoaXMuZW5kU2NhbGUsIHRoaXMuc3BlZWQqMyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0cyBkZWZhdWx0IHN5bWJvbHMgcGFyYW1zIGJlZm9yZSBuZXh0IHNwaW4gYW5kIG1ha2VzIHVwL2Rvd24gYm91bmNlIHVzaW5nIHR3aW5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHByb21pc2VcclxuICAgICAqL1xyXG4gICAgc3RhcnRTcGluICgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBsYXlJZGxlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCozLzQsICgpID0+IHt9KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5ib3VuY2VUd2Vlbi5wbGF5KHRoaXMueSwgdGhpcy55ICsgdGhpcy5oZWlnaHQvMix0aGlzLnNwZWVkKjIvMywgcmVzb2x2ZSkpXHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZXZlbmx5IGNoYW5nZSBwb3NpdGlvbiBieSBvbmUgc2xvdCB1c2luZyB0d2VlblxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcHJvbWlzZVxyXG4gICAgICovXHJcbiAgICBtb3ZlT25lU2xvdCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCByZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbi5wbGF5KHRoaXMueSwgdGhpcy55ICsgdGhpcy5zbG90TGVuZ3RoLCB0aGlzLnNwZWVkLCByZXNvbHZlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1ha2VzIGRvd24vdXAgYm91bmNlIHVzaW5nIHR3aW5cclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHByb21pc2VcclxuICAgICAqL1xyXG4gICAgZW5kU3BpbigpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoIHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmJvdW5jZVR3ZWVuLnBsYXkodGhpcy55LCB0aGlzLnkgKyB0aGlzLmhlaWdodC8yLHRoaXMuc3BlZWQqMi8zLCAoKSA9PiB7fSlcclxuICAgICAgICAgICAgICAgIC50aGVuKCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ib3VuY2VUd2Vlbi5wbGF5KHRoaXMueSwgdGhpcy55IC0gdGhpcy5oZWlnaHQvMix0aGlzLnNwZWVkKjIvMywgcmVzb2x2ZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IHN5bWJvbCBuZXcgdGV4dHVyZSBhbmQgdHlwZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IHRleHR1cmUgaW5kZXggb2YgbmV3IHN5bWJvbFxyXG4gICAgICovXHJcbiAgICBzZXROZXdTeW1ib2woaW5kZXgpe1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3Bvc3NpYmxlU3ltU3JjW2luZGV4XV07XHJcbiAgICAgICAgdGhpcy50eXBlID0gcG9zc2libGVTeW1TcmNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IG51bWJlciBvZiBzeW1ib2wncyBzY2FsZSBwcm9wZXJ0eVxyXG4gICAgICovXHJcbiAgICBnZXQgc3ltYlNjYWxlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5feDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgc2V0IHN5bWJvbCdzIHNjYWxlIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIHNldCBzeW1iU2NhbGUgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5zZXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYW5pbWF0aW9uIGZvciB3aW4gc3ltYm9sc1xyXG4gICAgICovXHJcbiAgICBwbGF5V2luQW5pbWF0aW9uICgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlVXAoKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZXZlbmx5IHNjYWxlcyBzeW1ib2wgdXAgdXNpbmcgdHdlZW5cclxuICAgICAqL1xyXG4gICAgc2NhbGVVcCAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZVR3ZWVuLnBsYXkodGhpcy5zdGFydFNjYWxlLCB0aGlzLmVuZFNjYWxlLCB0aGlzLnNwZWVkKjMsIHRoaXMuc2NhbGVEb3duLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZXZlbmx5IHNjYWxlcyBzeW1ib2wgZG93biB1c2luZyB0d2VlblxyXG4gICAgICovXHJcbiAgICBzY2FsZURvd24gKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGVUd2Vlbi5wbGF5KHRoaXMuZW5kU2NhbGUsIHRoaXMuc3RhcnRTY2FsZSwgdGhpcy5zcGVlZCozLCAoKSA9PiB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzYXZlcyBjdXJyZW50IHBhcmVudCBwYXJhbXMgdG8gYmUgYWJsZSB0byByZXN0b3JlIGl0IGxhdGVyXHJcbiAgICAgKiBhbmQgY2hhbmdlIHBhcmVudCB0byBiZXRMaW5lcyB0byBjaGFuZ2UgdGhlIGxheWVyXHJcbiAgICAgKi9cclxuICAgIHBsYXlMb3NzQW5pbWF0aW9uKCkge1xyXG5cclxuICAgICAgICB0aGlzLnBhcmVudFJlZWwgPSB0aGlzLnBhcmVudDtcclxuICAgICAgICBjb25zdCBnbG9iYWxYID0gdGhpcy5nZXRHbG9iYWxQb3NpdGlvbigpLng7XHJcbiAgICAgICAgY29uc3QgZ2xvYmFsWSA9IHRoaXMuZ2V0R2xvYmFsUG9zaXRpb24oKS55O1xyXG4gICAgICAgIHRoaXMubG9jYWxYID0gdGhpcy54O1xyXG4gICAgICAgIHRoaXMubG9jYWxZID0gdGhpcy55O1xyXG5cclxuICAgICAgICB0aGlzLmFscGhhID0gMC41O1xyXG5cclxuICAgICAgICBiZXRMaW5lcy5hZGRDaGlsZEF0KHRoaXMsIDApO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KGdsb2JhbFgsIGdsb2JhbFkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGRlZmF1bHQgc3ltYm9scyBwYXJhbXMgYW5kIHJldHVybiBwYXJlbnQgdG8gcmVlbCBpZiBpdCB3YXMgY2hhbmdlZFxyXG4gICAgICovXHJcbiAgICBwbGF5SWRsZSAoKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5zZXQodGhpcy5zdGFydFNjYWxlKTtcclxuICAgICAgICB0aGlzLmFscGhhID0gMTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5wYXJlbnRSZWVsKXtcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnRSZWVsLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh0aGlzLmxvY2FsWCwgdGhpcy5sb2NhbFkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBhcmVudFJlZWwgPSBudWxsO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi9idXR0b25cIjtcclxuaW1wb3J0IHt0ZXh0dXJlc30gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi9tYWluL29ic2VydmFibGVNaXhpblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNlbGVjdG9yIGV4dGVuZHMgUElYSS5Db250YWluZXJ7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBsZWZ0U3JjLCByaWdodFNyYywgcG9zc2libGVWYWx1ZXMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcbiAgICAgICAgdGhpcy5taW51c0J1dHRvbiA9IG5ldyBCdXR0b24oMCwgMCwgbGVmdFNyYywgdGhpcy5taW51c09uZS5iaW5kKHRoaXMpKTtcclxuICAgICAgICB0aGlzLnBsdXNCdXR0b24gPSBuZXcgQnV0dG9uKDIwMCwgMCwgcmlnaHRTcmMsIHRoaXMucGx1c09uZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NzaWJsZVZhbHVlcyA9IHBvc3NpYmxlVmFsdWVzO1xyXG4gICAgICAgIHRoaXMuY3VycmVudFZhbHVlID0gMTtcclxuICAgICAgICB0aGlzLm51bWJlciA9IHRoaXMuYWRkTnVtYmVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5taW51c0J1dHRvbiwgdGhpcy5wbHVzQnV0dG9uLCB0aGlzLm51bWJlcik7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG5cclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIG1pbnVzT25lKCkge1xyXG4gICAgICAgIHRoaXMubnVtYmVyLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLnBvc3NpYmxlVmFsdWVzWyAtLXRoaXMuY3VycmVudFZhbHVlIF1dO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uRGlzYWJsZUNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcGx1c09uZSAoKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMucG9zc2libGVWYWx1ZXNbICsrdGhpcy5jdXJyZW50VmFsdWUgXV07XHJcbiAgICAgICAgdGhpcy5idXR0b25EaXNhYmxlQ2hlY2soKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkaXNhYmxlL2VuYWJsZSBidXR0b25zIGRlcGVuZCBvbiBjdXJyZW50VmFsdWVcclxuICAgICAqL1xyXG4gICAgYnV0dG9uRGlzYWJsZUNoZWNrKCl7XHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZhbHVlID49IHRoaXMucG9zc2libGVWYWx1ZXMubGVuZ3RoIC0gMSl7XHJcbiAgICAgICAgICAgIHRoaXMucGx1c0J1dHRvbi5kaXNhYmxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wbHVzQnV0dG9uLmVuYWJsZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFZhbHVlIDwgMSl7XHJcbiAgICAgICAgICAgIHRoaXMubWludXNCdXR0b24uZGlzYWJsZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMubWludXNCdXR0b24uZW5hYmxlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlyZUV2ZW50KFwibm90aWZ5OmJldENoYW5nZWRcIiwgdGhpcy5jdXJyZW50VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlcyBzZWxlY3RvciBudW1iZXIgc3ByaXRlXHJcbiAgICAgKiBAcmV0dXJucyB7UElYSS5TcHJpdGV9IHRleHR1cmUgb2Ygc2VsZWN0b3IgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIGFkZE51bWJlciAoKSB7XHJcbiAgICAgICAgY29uc3QgbnVtYmVyID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmVzW3RoaXMucG9zc2libGVWYWx1ZXNbdGhpcy5jdXJyZW50VmFsdWVdXSk7XHJcbiAgICAgICAgbnVtYmVyLmFuY2hvci5zZXQoMC41KTtcclxuICAgICAgICBudW1iZXIud2lkdGggPSAxMjU7XHJcbiAgICAgICAgbnVtYmVyLmhlaWdodCA9IDEyNTtcclxuICAgICAgICBudW1iZXIucG9zaXRpb24uc2V0KDEwMCwgMCk7XHJcblxyXG4gICAgICAgIHJldHVybiBudW1iZXJcclxuICAgIH1cclxuXHJcblxyXG59IiwiLyoqXHJcbiAqIGNyZWF0ZXMgcmFuZG9tIGludGVnZXIgdmFsdWUgYmV0d2VlbiBtaW4gYW5kIG1heFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWluIG1pbiBwb3NzaWJsZSB2YWx1ZVxyXG4gKiBAcGFyYW0ge251bWJlcn0gbWF4IG1heCBwb3NzaWJsZSB2YWx1ZVxyXG4gKiBAcmV0dXJucyB7bnVtYmVyfVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbUludChtaW4sIG1heCkge1xyXG4gICAgbGV0IHJhbmQgPSBtaW4gKyBNYXRoLnJhbmRvbSgpICogKG1heCArIDEgLSBtaW4pO1xyXG4gICAgcmFuZCA9IE1hdGguZmxvb3IocmFuZCk7XHJcbiAgICByZXR1cm4gcmFuZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHRpbWVCZXR3ZWVuRnJhbWVzID0gMTYuNjc7IiwiZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBleHRlbmRzIFBJWEkuR3JhcGhpY3Mge1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICB0aGlzLmxpbmVTdHlsZSgxLCAweDAwMDAwMCwgMSk7XHJcbiAgICAgICAgdGhpcy5iZWdpbkZpbGwoY29sb3IpO1xyXG4gICAgICAgIHRoaXMuZHJhd1JlY3QoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5lbmRGaWxsKCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4vcmVjdGFuZ2xlXCI7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZU1peGlufSBmcm9tIFwiLi4vbWFpbi9vYnNlcnZhYmxlTWl4aW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBXaW5TY3JlZW4gZXh0ZW5kcyBQSVhJLkdyYXBoaWNze1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgd2lkdGgsIGhlaWdodCwgY29sb3IpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcbiAgICAgICAgdGhpcy5zY3JlZW4gPSBuZXcgUmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvbG9yKTtcclxuICAgICAgICB0aGlzLnNjcmVlbi5hbHBoYSA9IDAuMztcclxuICAgICAgICB0aGlzLm1lc3NhZ2UgPSB0aGlzLmNyZWF0ZU1lc3NhZ2UoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQodGhpcy5zY3JlZW4sIHRoaXMubWVzc2FnZSk7XHJcbiAgICAgICAgdGhpcy5oaWRlU2NyZWVuKCk7XHJcbiAgICAgICAgdGhpcy5hbHBoYSA9IDAuNTtcclxuXHJcbiAgICAgICAgdGhpcy5ieSh7XHJcbiAgICAgICAgICAgIFwibm90aWZ5OnNwaW5TdGFydFwiIDogdGhpcy5oaWRlU2NyZWVuLFxyXG4gICAgICAgICAgICBcIm5vdGlmeTpzcGluT3ZlclwiIDogdGhpcy5zaG93U2NyZWVuLFxyXG4gICAgICAgICAgICBcIm5vdGlmeTpiZXRDaGFuZ2VkXCIgOiB0aGlzLmhpZGVTY3JlZW5cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpXHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTWVzc2FnZSAoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBuZXcgUElYSS5UZXh0KFwiWW91IHdvblwiKTtcclxuICAgICAgICBtZXNzYWdlLnN0eWxlID0ge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICBtZXNzYWdlLnBvc2l0aW9uLnNldCh4ICsgd2lkdGgvMiAtIDEzMCwgeSArIGhlaWdodC8yIC0gMTggKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlcyB3aW5TY3JlZW4gdmlzaWJsZVxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZyBzZXJ2ZXIncyByZXN1bHQgY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29uZmlnLndpbkFtb3VudCBhbW91bnQgb2Ygd2luIHBvaW50c1xyXG4gICAgICovXHJcbiAgICBzaG93U2NyZWVuIChjb25maWcpe1xyXG4gICAgICAgIGlmKGNvbmZpZyAmJiBjb25maWcud2luQW1vdW50ID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB3aW5Nc2cgPSBcIllvdSB3b24gXCIgKyBjb25maWcud2luQW1vdW50ICsgXCIgISEhXCI7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubWVzc2FnZS50ZXh0ID0gd2luTXNnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhpZGVzIHdpblNjcmVlblxyXG4gICAgICovXHJcbiAgICBoaWRlU2NyZWVuICgpIHtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9