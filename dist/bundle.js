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

        Object.assign(_this, observableMixin);
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

            var betLines = _gameConfig.gameConfig.activeBetLines;
            var positions = _gameConfig.gameConfig.reelsPosition;
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
         * @param {array} linePoints array with pints for lines
         * @returns {Array} array with lines
         */

    }, {
        key: "addLines",
        value: function addLines(linePoints) {
            var allLines = [];
            for (var i = 0; i < linePoints.length; i++) {
                var betLine = void 0;
                var config = linePoints[i];

                betLine = new _line.Line(config);

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
            if (config) {
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

        _this.createLineByPints(arrConfig);
        _this.hideWinLine();
        return _this;
    }

    /**
     * creates line using x,y points from array
     * @param {array} arrConfig array with x,y points
     */


    _createClass(Line, [{
        key: "createLineByPints",
        value: function createLineByPints(arrConfig) {
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
        Object.assign(_this, observableMixin);
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
exports.animationRequired = exports.renderLoop = exports.winHandler = exports.betLines = exports.serverMock = exports.betSelector = exports.winScreen = exports.reels = exports.spinButton = exports.background = exports.textures = undefined;
exports.changeAnimRequireTo = changeAnimRequireTo;

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
    winHandler = exports.winHandler = void 0;

var renderLoop = exports.renderLoop = [];
var animationRequired = exports.animationRequired = false;

function setup() {
    exports.textures = textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    exports.background = background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    exports.betLines = betLines = new _betLines.BetLines();
    exports.reels = reels = new _reels.Reels();

    exports.spinButton = spinButton = new _button.Button(400, 450, spinButtonSrc, onSpinButtonClicked);
    spinButton.by({ "notify:spinOver": spinButton.enable });

    exports.winScreen = winScreen = new _winScreen.WinScreen(0, 0, _gameConfig.gameConfig.gameSize.width, _gameConfig.gameConfig.gameSize.height);
    exports.betSelector = betSelector = new _selector.Selector(550, 450, leftSelector, rightSelector, numbers);

    var selectorDisableCheck = betSelector.buttonDisableCheck;
    betSelector.buttonDisableCheck = function () {
        selectorDisableCheck.apply(this, arguments);
        this.fireEvent("notify:betChanged", this.currentValue);
    };

    exports.winHandler = winHandler = new _winHandler.WinHandler();

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
function changeAnimRequireTo(boolean) {
    exports.animationRequired = animationRequired = boolean;
}

/**
 * start/stop spin depending on animationRequired param
 */
function onSpinButtonClicked() {
    if (animationRequired) {
        changeAnimRequireTo(false);
        this.disable();
        /*quickStop()*/
    } else {
        this.fireEvent("notify:spinStart", betSelector.currentValue + 1);
        // makeSpin()
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
    activeBetLines: [[0, 0, 0, 0, 0], [1, 1, 1, 1, 1], [2, 2, 2, 2, 2], [0, 1, 2, 1, 0], [2, 1, 0, 1, 2], [1, 0, 1, 0, 1], [1, 2, 1, 2, 1]],

    /**
     * create and return reelSets
     * @returns {array} two-levels array with reelSets
     */
    addReelsets: function addReelsets() {
        var reelSets = [[[1, 0, 2, 0, 2, 0, 1, 0, 2], [0, 0, 2, 1, 0, 1, 2, 0, 2], [1, 1, 2, 2, 2, 0, 1, 0, 1], [1, 1, 0, 0, 2, 0, 0, 1, 2], [0, 0, 1, 1, 0, 0, 2, 2, 1]], [[0, 2, 2, 1, 0, 0, 2, 1, 2], [2, 2, 1, 1, 0, 1, 2, 0, 1], [1, 1, 0, 2, 1, 0, 2, 0, 0], [2, 1, 1, 2, 0, 0, 1, 0, 2], [1, 0, 2, 2, 2, 1, 0, 2, 0]], [[1, 2, 0, 1, 0, 1, 2, 1, 2], [1, 1, 0, 0, 2, 0, 0, 1, 2], [0, 1, 0, 2, 1, 0, 2, 0, 1], [1, 0, 2, 2, 2, 1, 0, 2, 0], [1, 1, 0, 0, 2, 0, 0, 1, 2]]];
        return reelSets;
    },

    gameSize: {
        width: 800,
        height: 400,
        rows: 3,
        reels: 5
    },

    reelsPosition: {
        topOffset: 10,

        reels: {
            left: 80,
            slotLength: 133,
            symbolDimensions: { width: 125, height: 125 },
            visibleSymbNum: 3,
            symbolsNumber: 4
        },

        //can't find the solution how to set context here
        reelsPoints: [{ x: 80, y: 133 / 2 }, { x: 80 * 3, y: 133 / 2 }, { x: 80 * 5, y: 133 / 2 }, { x: 80 * 7, y: 133 / 2 }, { x: 80 * 9, y: 133 / 2 }],

        symbolsPoint: [{ x: 0, y: 0 }, { x: 0, y: 133 }, { x: 0, y: 133 * 2 }, { x: 0, y: 133 * 3 }]
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ServerMock = exports.ServerMock = function () {
    function ServerMock() {
        _classCallCheck(this, ServerMock);

        this.reelsetsList = _gameConfig.gameConfig.addReelsets();
        this.betLines = _gameConfig.gameConfig.activeBetLines;
        this.spinResult = [];
        Object.assign(this, observableMixin);

        this.by({ "notify:spinStart": this.start });

        this.generatedResponse = null;
    }

    /**
     * upon request from client creates spin/bet result and inform the client
     * @param {number} betSize multiplier for win points
     */


    _createClass(ServerMock, [{
        key: "start",
        value: function start(betSize) {
            var _this = this;

            this.currentReelset = this.selectReelset(this.reelsetsList);
            this.spinResult = this.selectPositions(this.currentReelset);
            this.generatedResponse = this.checkBetLines(this.spinResult, betSize);
            setTimeout(function () {
                _this.fireEvent("notify:serverManager.newResponse", _this.generatedResponse);
                _this.generatedResponse = null;
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
         * @returns {Array} two-levels array with spin result
         */

    }, {
        key: "selectPositions",
        value: function selectPositions(currentReelset) {

            var spinResult = [];

            for (var i = 0; i < currentReelset.length; i++) {
                var curSet = currentReelset[i];

                // 3 symbols after startPoint are required
                var startPoint = (0, _utils.randomInt)(0, curSet.length - 3);
                var curReel = [];

                curReel.push(curSet[startPoint]);
                curReel.push(curSet[startPoint + 1]);
                curReel.push(curSet[startPoint + 2]);

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
         *          {array} resultConfig.spinResult two-levels array with spin result
         */

    }, {
        key: "checkBetLines",
        value: function checkBetLines(spinResult, betSize) {

            var winPoints = 0;
            var winSymbols = [];
            var winLines = [];
            var resultConfig = {};

            for (var i = 0; i < this.betLines.length; i++) {
                var currentLine = this.betLines[i];
                var symbsMatched = 1;

                var symbolNum = [];

                for (var j = 0; j < spinResult.length - 1; j++) {
                    if (spinResult[j][currentLine[j]] === spinResult[j + 1][currentLine[j + 1]]) {
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

            resultConfig.winAmount = winPoints * betSize;
            resultConfig.winLines = winLines;
            resultConfig.winSymbols = winSymbols;
            resultConfig.spinResult = spinResult;

            return resultConfig;
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
exports.WinHandler = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _gameConfig = __webpack_require__(/*! ./gameConfig */ "./javascript/main/gameConfig.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WinHandler = exports.WinHandler = function () {
    function WinHandler() {
        _classCallCheck(this, WinHandler);

        Object.assign(this, observableMixin);
        this.by({ "notify:serverManager.newResponse": this.createWinConfig });
    }

    /**
     * generate win config depends on server response
     * @param {object} serverConfig
     * @param {number} serverConfig.winAmount amount of win point
     * @param {array} serverConfig.winLines array with win bet lines
     * @param {array} serverConfig.winSymbols array with win symbols
     */


    _createClass(WinHandler, [{
        key: "createWinConfig",
        value: function createWinConfig(serverConfig) {
            var result = null;

            if (serverConfig.winAmount > 0) {

                result = {};
                result.matrix = this.createTemplateMatrix();
                result.winAmount = serverConfig.winAmount;
                result.winLines = serverConfig.winLines;

                for (var i = 0; i < serverConfig.winSymbols.length; i++) {
                    var curLine = serverConfig.winSymbols[i];

                    for (var j = 0; j < curLine.length; j++) {
                        var curReel = result.matrix[j];
                        var symbIndex = curLine[j];

                        curReel[symbIndex] = true;
                    }
                }
            }

            this.fireEvent("notify:winHandler.newResponse", result);
        }

        /**
         * create matrix depends on gameConfig params
         * @returns {Array} matrix with false params
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

    return WinHandler;
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

        _this.symbolsCounter = _this.symbols.length;
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
         * @param {function} onComplete callback function, which called when all iterations are finished
         */

    }, {
        key: "start",
        value: function start(onComplete) {
            var _this2 = this;

            this.symbolsBeforeResult = Infinity;
            this.onComplete = onComplete;

            this.symbols.forEach(function (symbol) {
                symbol.startSpin(_this2.onStartBounceFinished.bind(_this2));
            });
        }

        /**
         *
         * @param {array} betResult array with result for current bet
         * @param {number} symbsBfResult amount of iteration before result
         */

    }, {
        key: "addServerValues",
        value: function addServerValues(betResult, symbsBfResult) {
            this.symbolsBeforeResult = symbsBfResult;
            this.resultSymbols = betResult;
            this.curResultSymbIndex = this.resultSymbols.length - 1;
            this.serverDataReceived = true;
        }

        /**
         *
         * @param {boolean} useRandomSymb if true add randomSymbol
         */

    }, {
        key: "moveLastSymbOnTop",
        value: function moveLastSymbOnTop() {
            var _this3 = this;

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

            this.symbols.forEach(function (symbol) {
                symbol.moveOneSlot(_this3.onSymbolMovedOneSlot.bind(_this3));
            });
        }

        /**
         * when all symbols are finished start bounce, reset the symbolsCounter
         * and call moveLastSymbOnTop
         */

    }, {
        key: "onStartBounceFinished",
        value: function onStartBounceFinished() {
            this.symbolsCounter--;
            if (this.symbolsCounter === 0) {
                this.symbolsCounter = this.symbols.length;
                this.moveLastSymbOnTop();
            }
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

                if (this.symbolsBeforeResult > 0 && _engine.animationRequired || !this.serverDataReceived) {
                    this.moveLastSymbOnTop();
                } else if (this.curResultSymbIndex >= 0) {
                    this.moveLastSymbOnTop(false);
                    this.curResultSymbIndex--;
                } else {
                    this.symbols.forEach(function (symbol) {
                        symbol.endSpin(_this4.onEndBounceFinished.bind(_this4));
                    });
                }
            }
        }

        /**
         * when all symbols are finished end bounce, reset the symbolsCounter
         * and call onSpinOver
         */

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
            this.serverDataReceived = false;
            this.resultSymbols = [];
            this.onComplete();
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

        _this.reelsCounter = _this.allReels.length;
        _this.winAnimRequired = false;
        _this.resultConfig = null;

        app.stage.addChild(_this);

        Object.assign(_this, observableMixin);

        _this.by({
            "notify:spinStart": _this.start,
            "notify:serverManager.newResponse": _this.addServerValues,
            "notify:winHandler.newResponse": _this.addWinHandlerValues
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
         * start spinning reels
         */

    }, {
        key: "start",
        value: function start() {
            (0, _engine.changeAnimRequireTo)(true);

            for (var i = 0; i < this.allReels.length; i++) {
                this.allReels[i].start(this.onReelStopped.bind(this));
            }
        }

        /**
         *
         * @param {object} resultConfig resultConfig from server
         * @param {array} resultConfig.spinResult array with bet result for each reel
         * @param {number} resultConfig.winAmount win points on current bet
         * @param {number} symbsBfResult amount of random symbols before result
         */

    }, {
        key: "addServerValues",
        value: function addServerValues(resultConfig) {
            var symbsBfResult = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;


            for (var i = 0; i < this.allReels.length; i++) {
                this.allReels[i].addServerValues(resultConfig.spinResult[i], symbsBfResult + i, this.onReelStopped.bind(this));
            }
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
            this.resultConfig = resultConfig;
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

                this.showWinAnimation(this.resultConfig);
                this.fireEvent("notify:spinOver", this.resultConfig);
            }
        }

        /**
         * if winAnimRequired, show win/loss animation for each symbol
         * @param {object} resultConfig
         * @param {array} resultConfig.matrix two-levels array with true/false param
         */

    }, {
        key: "showWinAnimation",
        value: function showWinAnimation(resultConfig) {
            if (this.winAnimRequired) {

                for (var i = 0; i < resultConfig.matrix.length; i++) {
                    var curResultReel = resultConfig.matrix[i];
                    var curReel = this.allReels[i];

                    for (var j = 0; j < curResultReel.length; j++) {

                        if (curResultReel[j]) {
                            curReel.symbols[j].playWinAnimation();
                        } else {
                            curReel.symbols[j].playLossAnimation();
                        }
                    }
                }
                this.winAnimRequired = false;
            }
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

        Object.assign(_this, observableMixin);

        _this.width = config.symbolDimensions.width;
        _this.height = config.symbolDimensions.height;
        _this.slotLength = config.slotLength;

        _this.type = textureSrc;
        _this.anchor.set(0.5);

        _this.speed = 160;

        _this.startScale = _this.scale._x;
        _this.endScale = _this.startScale * 1.25;

        _this.by({ "notify:betChanged": _this.playIdle });

        _this.tween = new _customTween.CustomTween(_this, "y", _this.y, _this.y + _this.slotLength, _this.speed);
        _this.bounceTween = new _customTween.CustomTween(_this, "y", _this.y, _this.y - _this.height / 2, _this.speed * 2 / 3);

        _this.scaleTween = new _customTween.CustomTween(_this, "symbScale", _this.startScale, _this.endScale, _this.speed * 3);

        return _this;
    }

    /**
     *
     * @param {function} callback callback function called when bounceTweens are finished
     */


    _createClass(_Symbol, [{
        key: "startSpin",
        value: function startSpin(callback) {
            this.playIdle();
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
            this.tween.play(this.y, this.y + this.slotLength, this.speed, onComplete);
        }

        /**
         *
         * @param {function} callback function called when bounceTweens are finished
         */

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
            this.scaleTween.play(this.endScale, this.startScale, this.speed * 3, this.stub.bind(this));
        }

        /**
         * saves current parent params and change parent to betLines to change the layer
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
        key: "stub",
        value: function stub() {
            //stub
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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Selector = exports.Selector = function (_PIXI$Container) {
    _inherits(Selector, _PIXI$Container);

    function Selector(x, y, leftSrc, rightSrc, possibleValues) {
        _classCallCheck(this, Selector);

        var _this = _possibleConstructorReturn(this, (Selector.__proto__ || Object.getPrototypeOf(Selector)).call(this));

        Object.assign(_this, observableMixin);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WinScreen = exports.WinScreen = function (_PIXI$Graphics) {
    _inherits(WinScreen, _PIXI$Graphics);

    function WinScreen(x, y, width, height) {
        _classCallCheck(this, WinScreen);

        var _this = _possibleConstructorReturn(this, (WinScreen.__proto__ || Object.getPrototypeOf(WinScreen)).call(this));

        Object.assign(_this, observableMixin);
        _this.message = new PIXI.Text("You won");
        _this.message.style = {
            fontFamily: "Arial",
            fontSize: 36,
            fill: "white"
        };
        _this.message.position.set(width / 2 - 130, height / 2 - 36);

        _this.addChild(_this.message);
        _this.hideScreen();
        _this.alpha = 0.7;

        _this.by({
            "notify:spinStart": _this.hideScreen,
            "notify:spinOver": _this.showScreen,
            "notify:betChanged": _this.hideScreen
        });

        app.stage.addChild(_this);
        return _this;
    }

    /**
     * makes winScreen visible
     * @param {object} config server's result config
     * @param {number} config.winAmount amount of win points
     */


    _createClass(WinScreen, [{
        key: "showScreen",
        value: function showScreen(config) {
            if (config) {
                var winMsg = "You won " + config.winAmount + " !!!!!";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9iZXRMaW5lcy9iZXRMaW5lcy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L2JldExpbmVzL2xpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9tYWluL2dhbWVDb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9tYWluL3NlcnZlci5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L21haW4vd2luSGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3JlZWxzL2N1c3RvbVR3ZWVuLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvcmVlbC5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3JlZWxzL3JlZWxzLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMvc3ltYm9sLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvc2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9qYXZhc2NyaXB0L3dpblNjcmVlbi93aW5TY3JlZW4uanMiXSwibmFtZXMiOlsiQmV0TGluZXMiLCJsaW5lUG9pbnRzIiwiYWRkTGluZVBvaW50cyIsImFsbExpbmVzIiwiYWRkTGluZXMiLCJPYmplY3QiLCJhc3NpZ24iLCJvYnNlcnZhYmxlTWl4aW4iLCJieSIsImhpZGVXaW5MaW5lcyIsInNob3dXaW5MaW5lcyIsImFwcCIsInN0YWdlIiwiYWRkQ2hpbGQiLCJiZXRMaW5lcyIsImdhbWVDb25maWciLCJhY3RpdmVCZXRMaW5lcyIsInBvc2l0aW9ucyIsInJlZWxzUG9zaXRpb24iLCJ0b3BPZmZzZXQiLCJyZWVscyIsInNsb3RMZW5ndGgiLCJsaW5lUG9zaXRpb25zIiwiaSIsImxlbmd0aCIsImN1ckJldExpbmUiLCJjdXJMaW5lUG9pbnRzIiwiaiIsInhQb2ludCIsInJlZWxzUG9pbnRzIiwieCIsInlQb2ludCIsInN5bWJvbHNQb2ludCIsInkiLCJwdXNoIiwiYmV0TGluZSIsImNvbmZpZyIsIkxpbmUiLCJ3aW5MaW5lcyIsImN1ckxpbmUiLCJzaG93V2luTGluZSIsImZvckVhY2giLCJsaW5lIiwiaGlkZVdpbkxpbmUiLCJQSVhJIiwiQ29udGFpbmVyIiwiYXJyQ29uZmlnIiwibGluZVN0eWxlIiwiY3JlYXRlTGluZUJ5UGludHMiLCJtb3ZlVG8iLCJjdXJQb2ludENvbmZpZyIsImxpbmVUbyIsInZpc2libGUiLCJHcmFwaGljcyIsIkJ1dHRvbiIsImJ1dHRvblRleHR1cmVzIiwiY2FsbGJhY2siLCJ0ZXh0dXJlcyIsImlkbGUiLCJpZGxlVGV4dHVyZSIsImhvdmVyVGV4dHVyZSIsImhvdmVyIiwiZG93blRleHR1cmUiLCJkb3duIiwiZGlzYWJsZWRUZXh0dXJlIiwiZGlzYWJsZWQiLCJ3aWR0aCIsImhlaWdodCIsImFuY2hvciIsInNldCIsInBvc2l0aW9uIiwiaW50ZXJhY3RpdmUiLCJzZXRIaXRBcmVhIiwidGV4dHVyZSIsInJhZGl1cyIsImhpdEFyZWEiLCJDaXJjbGUiLCJTcHJpdGUiLCJjaGFuZ2VBbmltUmVxdWlyZVRvIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2aWV3IiwiTG9hZGVyIiwic2hhcmVkIiwiYWRkIiwibG9hZCIsInNldHVwIiwiYmFja2dyb3VuZCIsInNwaW5CdXR0b24iLCJ3aW5TY3JlZW4iLCJiZXRTZWxlY3RvciIsInNlcnZlck1vY2siLCJ3aW5IYW5kbGVyIiwicmVuZGVyTG9vcCIsImFuaW1hdGlvblJlcXVpcmVkIiwicmVzb3VyY2VzIiwiUmVlbHMiLCJzcGluQnV0dG9uU3JjIiwib25TcGluQnV0dG9uQ2xpY2tlZCIsImVuYWJsZSIsIldpblNjcmVlbiIsImdhbWVTaXplIiwiU2VsZWN0b3IiLCJsZWZ0U2VsZWN0b3IiLCJyaWdodFNlbGVjdG9yIiwibnVtYmVycyIsInNlbGVjdG9yRGlzYWJsZUNoZWNrIiwiYnV0dG9uRGlzYWJsZUNoZWNrIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJmaXJlRXZlbnQiLCJjdXJyZW50VmFsdWUiLCJXaW5IYW5kbGVyIiwiU2VydmVyTW9jayIsInRpY2tlciIsImdhbWVMb29wIiwiZGVsdGEiLCJ1cGRhdGUiLCJib29sZWFuIiwiZGlzYWJsZSIsImFkZFJlZWxzZXRzIiwicmVlbFNldHMiLCJyb3dzIiwibGVmdCIsInN5bWJvbERpbWVuc2lvbnMiLCJ2aXNpYmxlU3ltYk51bSIsInN5bWJvbHNOdW1iZXIiLCJyZWVsc2V0c0xpc3QiLCJzcGluUmVzdWx0Iiwic3RhcnQiLCJnZW5lcmF0ZWRSZXNwb25zZSIsImJldFNpemUiLCJjdXJyZW50UmVlbHNldCIsInNlbGVjdFJlZWxzZXQiLCJzZWxlY3RQb3NpdGlvbnMiLCJjaGVja0JldExpbmVzIiwic2V0VGltZW91dCIsImluZGV4IiwiY3VyU2V0Iiwic3RhcnRQb2ludCIsImN1clJlZWwiLCJ3aW5Qb2ludHMiLCJ3aW5TeW1ib2xzIiwicmVzdWx0Q29uZmlnIiwiY3VycmVudExpbmUiLCJzeW1ic01hdGNoZWQiLCJzeW1ib2xOdW0iLCJ3aW5BbW91bnQiLCJjcmVhdGVXaW5Db25maWciLCJzZXJ2ZXJDb25maWciLCJyZXN1bHQiLCJtYXRyaXgiLCJjcmVhdGVUZW1wbGF0ZU1hdHJpeCIsInN5bWJJbmRleCIsInRlbXBsYXRlIiwicm93c051bSIsInJlZWxzTnVtIiwiQ3VzdG9tVHdlZW4iLCJvYmoiLCJwcm9wZXJ0eU5hbWUiLCJlbmQiLCJwZXJpb2QiLCJnZXRTcGVlZCIsInVwZGF0ZVJlcXVpcmVkIiwiZGlzdGFuY2UiLCJzcGVlZCIsIm9uQ29tcGxldGUiLCJudW1PZkZyYW1lcyIsInRpbWVCZXR3ZWVuRnJhbWVzIiwiUmVlbCIsInBvc2l0aW9uQ29uZmlnIiwic3ltYm9scyIsImFkZFN5bWJvbHMiLCJzeW1ib2xzQmVmb3JlUmVzdWx0IiwicmVzdWx0U3ltYm9scyIsImN1clJlc3VsdFN5bWJJbmRleCIsInNlcnZlckRhdGFSZWNlaXZlZCIsInN5bWJvbHNDb3VudGVyIiwiY3VyU3ltYiIsInBvc3NpYmxlU3ltU3JjIiwic3ltYm9sIiwiU3ltYm9sIiwiSW5maW5pdHkiLCJzdGFydFNwaW4iLCJvblN0YXJ0Qm91bmNlRmluaXNoZWQiLCJiaW5kIiwiYmV0UmVzdWx0Iiwic3ltYnNCZlJlc3VsdCIsInVzZVJhbmRvbVN5bWIiLCJsYXN0SW5kZXgiLCJsYXN0U3ltYm9sIiwibmV3SW5kZXgiLCJzZXROZXdTeW1ib2wiLCJ1bnNoaWZ0IiwicG9wIiwibW92ZU9uZVNsb3QiLCJvblN5bWJvbE1vdmVkT25lU2xvdCIsIm1vdmVMYXN0U3ltYk9uVG9wIiwiZW5kU3BpbiIsIm9uRW5kQm91bmNlRmluaXNoZWQiLCJvblNwaW5PdmVyIiwiYWxsUmVlbHMiLCJhZGRSZWVscyIsIm1hc2siLCJhZGRNYXNrIiwicmVlbHNDb3VudGVyIiwid2luQW5pbVJlcXVpcmVkIiwiYWRkU2VydmVyVmFsdWVzIiwiYWRkV2luSGFuZGxlclZhbHVlcyIsImN1clJlZWxQb2ludHMiLCJyZWVsIiwicmVlbHNNYXNrIiwiYmVnaW5GaWxsIiwiZHJhd1JlY3QiLCJvblJlZWxTdG9wcGVkIiwic2hvd1dpbkFuaW1hdGlvbiIsImN1clJlc3VsdFJlZWwiLCJwbGF5V2luQW5pbWF0aW9uIiwicGxheUxvc3NBbmltYXRpb24iLCJ0ZXh0dXJlU3JjIiwidHlwZSIsInN0YXJ0U2NhbGUiLCJzY2FsZSIsIl94IiwiZW5kU2NhbGUiLCJwbGF5SWRsZSIsInR3ZWVuIiwiYm91bmNlVHdlZW4iLCJzY2FsZVR3ZWVuIiwic3RhcnRDYWxsYmFjayIsInBsYXkiLCJib3VuY2VEb3duIiwiZW5kQ2FsbGJhY2siLCJib3VuY2VVcCIsInNjYWxlVXAiLCJzY2FsZURvd24iLCJzdHViIiwicGFyZW50UmVlbCIsInBhcmVudCIsImdsb2JhbFgiLCJnZXRHbG9iYWxQb3NpdGlvbiIsImdsb2JhbFkiLCJsb2NhbFgiLCJsb2NhbFkiLCJhbHBoYSIsImFkZENoaWxkQXQiLCJ2YWx1ZSIsImxlZnRTcmMiLCJyaWdodFNyYyIsInBvc3NpYmxlVmFsdWVzIiwibWludXNCdXR0b24iLCJtaW51c09uZSIsInBsdXNCdXR0b24iLCJwbHVzT25lIiwibnVtYmVyIiwiYWRkTnVtYmVyIiwicmFuZG9tSW50IiwibWluIiwibWF4IiwicmFuZCIsIk1hdGgiLCJyYW5kb20iLCJmbG9vciIsIm1lc3NhZ2UiLCJUZXh0Iiwic3R5bGUiLCJmb250RmFtaWx5IiwiZm9udFNpemUiLCJmaWxsIiwiaGlkZVNjcmVlbiIsInNob3dTY3JlZW4iLCJ3aW5Nc2ciLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBOztBQUNBOzs7Ozs7OztJQUVhQSxRLFdBQUFBLFE7OztBQUNULHdCQUFj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QUtMLE9BQUwsQ0FBYWxNLFFBQWIsQ0FBc0JELEdBQXRCLENBQTBCSCxRQUFNLENBQU4sR0FBVSxHQUFwQyxFQUF5Q0MsU0FBTyxDQUFQLEdBQVcsRUFBcEQ7O0FBRUEsY0FBS3RELFFBQUwsQ0FBYyxNQUFLMlAsT0FBbkI7QUFDQSxjQUFLTSxVQUFMO0FBQ0EsY0FBS3pCLEtBQUwsR0FBYSxHQUFiOztBQUVBLGNBQUs3TyxFQUFMLENBQVE7QUFDSixnQ0FBcUIsTUFBS3NRLFVBRHRCO0FBRUosK0JBQW9CLE1BQUtDLFVBRnJCO0FBR0osaUNBQXNCLE1BQUtEO0FBSHZCLFNBQVI7O0FBTUFuUSxZQUFJQyxLQUFKLENBQVVDLFFBQVY7QUF0QjZCO0FBdUJoQzs7QUFFRDs7Ozs7Ozs7O21DQUtZdUIsTSxFQUFPO0FBQ2YsZ0JBQUdBLE1BQUgsRUFBVztBQUNQLG9CQUFJNE8sU0FBUyxhQUFhNU8sT0FBT2dILFNBQXBCLEdBQWdDLFFBQTdDO0FBQ0EscUJBQUtoRyxPQUFMLEdBQWUsSUFBZjtBQUNBLHFCQUFLb04sT0FBTCxDQUFhUyxJQUFiLEdBQW9CRCxNQUFwQjtBQUNIO0FBQ0o7O0FBRUQ7Ozs7OztxQ0FHYztBQUNWLGlCQUFLNU4sT0FBTCxHQUFlLEtBQWY7QUFDSDs7OztFQTVDMEJSLEtBQUtTLFEiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9qYXZhc2NyaXB0L2VuZ2luZS5qc1wiKTtcbiIsImltcG9ydCB7TGluZX0gZnJvbSBcIi4vbGluZVwiO1xyXG5pbXBvcnQge2dhbWVDb25maWd9IGZyb20gXCIuLi9tYWluL2dhbWVDb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCZXRMaW5lcyBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5saW5lUG9pbnRzID0gdGhpcy5hZGRMaW5lUG9pbnRzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuYWxsTGluZXMgPSB0aGlzLmFkZExpbmVzKHRoaXMubGluZVBvaW50cyk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgICAgICB0aGlzLmJ5KHtcclxuICAgICAgICAgICAgXCJub3RpZnk6c3BpblN0YXJ0XCIgOiB0aGlzLmhpZGVXaW5MaW5lcyxcclxuICAgICAgICAgICAgXCJub3RpZnk6c3Bpbk92ZXJcIiA6IHRoaXMuc2hvd1dpbkxpbmVzLFxyXG4gICAgICAgICAgICBcIm5vdGlmeTpiZXRDaGFuZ2VkXCIgOiB0aGlzLmhpZGVXaW5MaW5lc1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIGxpbmUgcG9pbnRzIGRlcGVuZHMgb24gZ2FtZUNvbmZpZyBwYXJhbXMgYW5kIGFkZCBpdCB0byBhcnJheVxyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIGxpbmUgcG9pbnRzXHJcbiAgICAgKi9cclxuICAgIGFkZExpbmVQb2ludHMgKCkge1xyXG5cclxuICAgICAgICBsZXQgYmV0TGluZXMgPSBnYW1lQ29uZmlnLmFjdGl2ZUJldExpbmVzO1xyXG4gICAgICAgIGxldCBwb3NpdGlvbnMgPSBnYW1lQ29uZmlnLnJlZWxzUG9zaXRpb247XHJcbiAgICAgICAgbGV0IHRvcE9mZnNldCA9IHBvc2l0aW9ucy50b3BPZmZzZXQgKyBwb3NpdGlvbnMucmVlbHMuc2xvdExlbmd0aC8yO1xyXG5cclxuICAgICAgICBsZXQgbGluZVBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYmV0TGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1ckJldExpbmUgPSBiZXRMaW5lc1tpXTtcclxuICAgICAgICAgICAgbGV0IGN1ckxpbmVQb2ludHMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjdXJCZXRMaW5lLmxlbmd0aDsgaisrKXtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgeFBvaW50ID0gcG9zaXRpb25zLnJlZWxzUG9pbnRzW2pdLng7XHJcbiAgICAgICAgICAgICAgICBsZXQgeVBvaW50ID0gcG9zaXRpb25zLnN5bWJvbHNQb2ludFtjdXJCZXRMaW5lW2pdXS55ICsgdG9wT2Zmc2V0O1xyXG5cclxuICAgICAgICAgICAgICAgIGN1ckxpbmVQb2ludHMucHVzaCh7eDogeFBvaW50LCB5OiB5UG9pbnR9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGluZVBvc2l0aW9ucy5wdXNoKGN1ckxpbmVQb2ludHMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbGluZVBvc2l0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSBsaW5lcyB1c2luZyBsaW5lcyBwb2ludHMgYW5kIGFkZCBpdCB0byBhcnJheVxyXG4gICAgICogQHBhcmFtIHthcnJheX0gbGluZVBvaW50cyBhcnJheSB3aXRoIHBpbnRzIGZvciBsaW5lc1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIGxpbmVzXHJcbiAgICAgKi9cclxuICAgIGFkZExpbmVzIChsaW5lUG9pbnRzKSB7XHJcbiAgICAgICAgbGV0IGFsbExpbmVzID0gW107XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmVQb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGJldExpbmU7XHJcbiAgICAgICAgICAgIGxldCBjb25maWcgPSBsaW5lUG9pbnRzW2ldO1xyXG5cclxuICAgICAgICAgICAgYmV0TGluZSA9IG5ldyBMaW5lKGNvbmZpZyk7XHJcblxyXG4gICAgICAgICAgICBhbGxMaW5lcy5wdXNoKGJldExpbmUpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKGJldExpbmUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGFsbExpbmVzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogIHNob3cgd2luIGxpbmVzIGRlcGVuZHMgb24gY29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gY29uZmlnIHJlc3VsdCBjb25maWdcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNvbmZpZy53aW5MaW5lcyBhcnJheSB3aXRoIHdpbiBsaW5lc1xyXG4gICAgICovXHJcbiAgICBzaG93V2luTGluZXMoY29uZmlnKSB7XHJcbiAgICAgICAgaWYoY29uZmlnKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvbmZpZy53aW5MaW5lcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyTGluZSA9IGNvbmZpZy53aW5MaW5lc1tpXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsTGluZXNbY3VyTGluZV0uc2hvd1dpbkxpbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBkZWZhdWx0IHBhcmFtcyBmb3IgYWxsIGxpbmVzXHJcbiAgICAgKi9cclxuICAgIGhpZGVXaW5MaW5lcygpIHtcclxuICAgICAgICB0aGlzLmFsbExpbmVzLmZvckVhY2goIChsaW5lKSA9PiB7XHJcbiAgICAgICAgICAgIGxpbmUuaGlkZVdpbkxpbmUoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBMaW5lIGV4dGVuZHMgUElYSS5HcmFwaGljcyB7XHJcbiAgICBjb25zdHJ1Y3RvciAoIGFyckNvbmZpZyApIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubGluZVN0eWxlKDMsIDB4MDBmZjAwLCAwLjUpO1xyXG5cclxuICAgICAgICB0aGlzLmNyZWF0ZUxpbmVCeVBpbnRzKGFyckNvbmZpZyk7XHJcbiAgICAgICAgdGhpcy5oaWRlV2luTGluZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlcyBsaW5lIHVzaW5nIHgseSBwb2ludHMgZnJvbSBhcnJheVxyXG4gICAgICogQHBhcmFtIHthcnJheX0gYXJyQ29uZmlnIGFycmF5IHdpdGggeCx5IHBvaW50c1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVMaW5lQnlQaW50cyhhcnJDb25maWcpIHtcclxuICAgICAgICB0aGlzLm1vdmVUbyhhcnJDb25maWdbMF0ueCwgYXJyQ29uZmlnWzBdLnkpO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyQ29uZmlnLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGN1clBvaW50Q29uZmlnID0gYXJyQ29uZmlnW2ldO1xyXG4gICAgICAgICAgICB0aGlzLmxpbmVUbyhjdXJQb2ludENvbmZpZy54LCBjdXJQb2ludENvbmZpZy55KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtYWtlcyBsaW5lIHZpc2libGVcclxuICAgICAqL1xyXG4gICAgc2hvd1dpbkxpbmUoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGhpZGVzIGxpbmVcclxuICAgICAqL1xyXG4gICAgaGlkZVdpbkxpbmUgKCkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHt0ZXh0dXJlc30gZnJvbSBcIi4vZW5naW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5LCBidXR0b25UZXh0dXJlcywgY2FsbGJhY2spe1xyXG4gICAgICAgIHN1cGVyKHRleHR1cmVzW2J1dHRvblRleHR1cmVzLmlkbGVdKTtcclxuXHJcbiAgICAgICAgdGhpcy5pZGxlVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmlkbGU7XHJcbiAgICAgICAgdGhpcy5ob3ZlclRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5ob3ZlcjtcclxuICAgICAgICB0aGlzLmRvd25UZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuZG93bjtcclxuICAgICAgICB0aGlzLmRpc2FibGVkVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmRpc2FibGVkO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gMTAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xyXG5cclxuICAgICAgICB0aGlzLnNldEhpdEFyZWEoMTI1KTtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbW91c2VvdmVyKCkge1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRoaXMuZGlzYWJsZWQgPyB0ZXh0dXJlc1t0aGlzLmRpc2FibGVkVGV4dHVyZV0gOiB0ZXh0dXJlc1t0aGlzLmhvdmVyVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2VvdXQoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5kaXNhYmxlZCA/IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXSA6IHRleHR1cmVzW3RoaXMuaWRsZVRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdXNlZG93bigpIHtcclxuICAgICAgICBpZih0aGlzLmRpc2FibGVkKXtcclxuICAgICAgICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuZG93blRleHR1cmVdO1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxiYWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNldXAoKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0dXJlID0gdGhpcy5kaXNhYmxlZCA/IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXSA6IHRleHR1cmVzW3RoaXMuaG92ZXJUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGUoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuaWRsZVRleHR1cmVdO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGUgKCkge1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXMgaGl0QXJlYSByYWRpdXNcclxuICAgICAqL1xyXG4gICAgc2V0SGl0QXJlYSAocmFkaXVzKSB7XHJcbiAgICAgICAgdGhpcy5oaXRBcmVhID0gbmV3IFBJWEkuQ2lyY2xlKDAsIDAsIHJhZGl1cyk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7UmVlbHN9IGZyb20gXCIuL3JlZWxzL3JlZWxzXCI7XHJcbmltcG9ydCB7V2luU2NyZWVufSBmcm9tIFwiLi93aW5TY3JlZW4vd2luU2NyZWVuXCI7XHJcbmltcG9ydCB7U2VsZWN0b3J9IGZyb20gXCIuL3NlbGVjdG9yXCI7XHJcbmltcG9ydCB7U2VydmVyTW9ja30gZnJvbSBcIi4vbWFpbi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHtCZXRMaW5lc30gZnJvbSBcIi4vYmV0TGluZXMvYmV0TGluZXNcIjtcclxuaW1wb3J0IHtXaW5IYW5kbGVyfSBmcm9tIFwiLi9tYWluL3dpbkhhbmRsZXJcIjtcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi9tYWluL2dhbWVDb25maWdcIjtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLnZpZXcpO1xyXG5cclxuUElYSS5Mb2FkZXIuc2hhcmVkXHJcbiAgICAuYWRkKFwiLi9pbWFnZXMvc2hlZXQuanNvblwiKVxyXG4gICAgLmxvYWQoc2V0dXApO1xyXG5cclxuZXhwb3J0IGxldCB0ZXh0dXJlcyxcclxuICAgIGJhY2tncm91bmQsXHJcbiAgICBzcGluQnV0dG9uLFxyXG4gICAgcmVlbHMsXHJcbiAgICB3aW5TY3JlZW4sXHJcbiAgICBiZXRTZWxlY3RvcixcclxuICAgIHNlcnZlck1vY2ssXHJcbiAgICBiZXRMaW5lcyxcclxuICAgIHdpbkhhbmRsZXI7XHJcblxyXG5leHBvcnQgbGV0IHJlbmRlckxvb3AgPSBbXTtcclxuZXhwb3J0IGxldCBhbmltYXRpb25SZXF1aXJlZCA9IGZhbHNlO1xyXG5cclxuZnVuY3Rpb24gc2V0dXAoKSB7XHJcbiAgICB0ZXh0dXJlcyA9IFBJWEkuTG9hZGVyLnNoYXJlZC5yZXNvdXJjZXNbXCIuL2ltYWdlcy9zaGVldC5qc29uXCJdLnRleHR1cmVzO1xyXG5cclxuICAgIGJhY2tncm91bmQgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZXNbXCJiYWNrZ3JvdW5kLnBuZ1wiXSk7XHJcbiAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQoYmFja2dyb3VuZCk7XHJcblxyXG5cclxuICAgIGJldExpbmVzID0gbmV3IEJldExpbmVzKCk7XHJcbiAgICByZWVscyA9IG5ldyBSZWVscygpO1xyXG5cclxuICAgIHNwaW5CdXR0b24gPSBuZXcgQnV0dG9uKDQwMCwgNDUwLCBzcGluQnV0dG9uU3JjLCBvblNwaW5CdXR0b25DbGlja2VkKTtcclxuICAgIHNwaW5CdXR0b24uYnkoe1wibm90aWZ5OnNwaW5PdmVyXCI6IHNwaW5CdXR0b24uZW5hYmxlfSk7XHJcblxyXG4gICAgd2luU2NyZWVuID0gbmV3IFdpblNjcmVlbigwLDAsIGdhbWVDb25maWcuZ2FtZVNpemUud2lkdGgsIGdhbWVDb25maWcuZ2FtZVNpemUuaGVpZ2h0KTtcclxuICAgIGJldFNlbGVjdG9yID0gbmV3IFNlbGVjdG9yKDU1MCwgNDUwLCBsZWZ0U2VsZWN0b3IsIHJpZ2h0U2VsZWN0b3IsIG51bWJlcnMpO1xyXG5cclxuICAgIGxldCBzZWxlY3RvckRpc2FibGVDaGVjayA9IGJldFNlbGVjdG9yLmJ1dHRvbkRpc2FibGVDaGVjaztcclxuICAgIGJldFNlbGVjdG9yLmJ1dHRvbkRpc2FibGVDaGVjayA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNlbGVjdG9yRGlzYWJsZUNoZWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJub3RpZnk6YmV0Q2hhbmdlZFwiLCB0aGlzLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbkhhbmRsZXIgPSBuZXcgV2luSGFuZGxlcigpO1xyXG5cclxuICAgIHNlcnZlck1vY2sgPSBuZXcgU2VydmVyTW9jaygpO1xyXG5cclxuICAgIGFwcC50aWNrZXIuYWRkKGRlbHRhID0+IGdhbWVMb29wKGRlbHRhKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdhbWVMb29wKGRlbHRhKXtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZW5kZXJMb29wLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICByZW5kZXJMb29wW2ldLnVwZGF0ZShkZWx0YSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBnaXZlcyBzcGluQnV0dG9uIGFuIG9wdGlvbiB0byBzdG9wIHNwaW4gd2l0aCBjdXJyZW50IGl0ZXJhdGlvblxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IGJvb2xlYW4gc2V0IGFuaW1hdGlvblJlcXVpcmVkIHRvIHRydWUgb3IgZmFsc2VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VBbmltUmVxdWlyZVRvIChib29sZWFuKSB7XHJcbiAgICBhbmltYXRpb25SZXF1aXJlZCA9IGJvb2xlYW47XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogc3RhcnQvc3RvcCBzcGluIGRlcGVuZGluZyBvbiBhbmltYXRpb25SZXF1aXJlZCBwYXJhbVxyXG4gKi9cclxuZnVuY3Rpb24gb25TcGluQnV0dG9uQ2xpY2tlZCgpIHtcclxuICAgIGlmKGFuaW1hdGlvblJlcXVpcmVkKXtcclxuICAgICAgICBjaGFuZ2VBbmltUmVxdWlyZVRvKGZhbHNlKTtcclxuICAgICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgICAgICAvKnF1aWNrU3RvcCgpKi9cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJub3RpZnk6c3BpblN0YXJ0XCIsIGJldFNlbGVjdG9yLmN1cnJlbnRWYWx1ZSArIDEpXHJcbiAgICAgICAgLy8gbWFrZVNwaW4oKVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBnYW1lQ29uZmlnICA9IHtcclxuICAgIGFjdGl2ZUJldExpbmVzIDogW1xyXG4gICAgICAgIFswLDAsMCwwLDBdLFxyXG4gICAgICAgIFsxLDEsMSwxLDFdLFxyXG4gICAgICAgIFsyLDIsMiwyLDJdLFxyXG4gICAgICAgIFswLDEsMiwxLDBdLFxyXG4gICAgICAgIFsyLDEsMCwxLDJdLFxyXG4gICAgICAgIFsxLDAsMSwwLDFdLFxyXG4gICAgICAgIFsxLDIsMSwyLDFdXHJcbiAgICBdLFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIGFuZCByZXR1cm4gcmVlbFNldHNcclxuICAgICAqIEByZXR1cm5zIHthcnJheX0gdHdvLWxldmVscyBhcnJheSB3aXRoIHJlZWxTZXRzXHJcbiAgICAgKi9cclxuICAgIGFkZFJlZWxzZXRzIDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGNvbnN0IHJlZWxTZXRzID0gW1xyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwwLDIsMCwyLDAsMSwwLDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsMCwyLDEsMCwxLDIsMCwyXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMiwyLDIsMCwxLDAsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwxLDAsMCwyLDAsMCwxLDJdLFxyXG4gICAgICAgICAgICAgICAgWzAsMCwxLDEsMCwwLDIsMiwxXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMCwyLDIsMSwwLDAsMiwxLDJdLFxyXG4gICAgICAgICAgICAgICAgWzIsMiwxLDEsMCwxLDIsMCwxXSxcclxuICAgICAgICAgICAgICAgIFsxLDEsMCwyLDEsMCwyLDAsMF0sXHJcbiAgICAgICAgICAgICAgICBbMiwxLDEsMiwwLDAsMSwwLDJdLFxyXG4gICAgICAgICAgICAgICAgWzEsMCwyLDIsMiwxLDAsMiwwXVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBbXHJcbiAgICAgICAgICAgICAgICBbMSwyLDAsMSwwLDEsMiwxLDJdLFxyXG4gICAgICAgICAgICAgICAgWzEsMSwwLDAsMiwwLDAsMSwyXSxcclxuICAgICAgICAgICAgICAgIFswLDEsMCwyLDEsMCwyLDAsMV0sXHJcbiAgICAgICAgICAgICAgICBbMSwwLDIsMiwyLDEsMCwyLDBdLFxyXG4gICAgICAgICAgICAgICAgWzEsMSwwLDAsMiwwLDAsMSwyXVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgXTtcclxuICAgICAgICByZXR1cm4gcmVlbFNldHM7XHJcbiAgICB9LFxyXG5cclxuICAgIGdhbWVTaXplIDoge1xyXG4gICAgICAgIHdpZHRoOiA4MDAsXHJcbiAgICAgICAgaGVpZ2h0OiA0MDAsXHJcbiAgICAgICAgcm93czogMyxcclxuICAgICAgICByZWVsczogNVxyXG4gICAgfSxcclxuXHJcbiAgICByZWVsc1Bvc2l0aW9uIDoge1xyXG4gICAgICAgIHRvcE9mZnNldCA6IDEwLFxyXG5cclxuICAgICAgICByZWVscyA6IHtcclxuICAgICAgICAgICAgbGVmdDogODAsXHJcbiAgICAgICAgICAgIHNsb3RMZW5ndGg6IDEzMyxcclxuICAgICAgICAgICAgc3ltYm9sRGltZW5zaW9uczoge3dpZHRoOiAxMjUsIGhlaWdodDogMTI1fSxcclxuICAgICAgICAgICAgdmlzaWJsZVN5bWJOdW06IDMsXHJcbiAgICAgICAgICAgIHN5bWJvbHNOdW1iZXI6IDRcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvL2Nhbid0IGZpbmQgdGhlIHNvbHV0aW9uIGhvdyB0byBzZXQgY29udGV4dCBoZXJlXHJcbiAgICAgICAgcmVlbHNQb2ludHMgOiBbXHJcbiAgICAgICAgICAgIHt4IDogODAsIHkgOiAxMzMvMn0sXHJcbiAgICAgICAgICAgIHt4IDogODAgKiAzLCB5IDogMTMzLzJ9LFxyXG4gICAgICAgICAgICB7eCA6IDgwICogNSwgeSA6IDEzMy8yfSxcclxuICAgICAgICAgICAge3ggOiA4MCAqIDcsIHkgOiAxMzMvMn0sXHJcbiAgICAgICAgICAgIHt4IDogODAgKiA5LCB5IDogMTMzLzJ9XHJcbiAgICAgICAgXSxcclxuXHJcbiAgICAgICAgc3ltYm9sc1BvaW50IDogW1xyXG4gICAgICAgICAgICB7eCA6IDAsIHkgOiAwfSxcclxuICAgICAgICAgICAge3ggOiAwLCB5IDogMTMzfSxcclxuICAgICAgICAgICAge3ggOiAwLCB5IDogMTMzICogMn0sXHJcbiAgICAgICAgICAgIHt4IDogMCwgeSA6IDEzMyAqIDN9LFxyXG5cclxuICAgICAgICBdXHJcbiAgICB9LFxyXG5cclxufTsiLCJpbXBvcnQge3JhbmRvbUludH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7Z2FtZUNvbmZpZ30gZnJvbSBcIi4vZ2FtZUNvbmZpZ1wiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBTZXJ2ZXJNb2NrIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMucmVlbHNldHNMaXN0ID0gZ2FtZUNvbmZpZy5hZGRSZWVsc2V0cygpO1xyXG4gICAgICAgIHRoaXMuYmV0TGluZXMgPSBnYW1lQ29uZmlnLmFjdGl2ZUJldExpbmVzO1xyXG4gICAgICAgIHRoaXMuc3BpblJlc3VsdCA9IFtdO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuXHJcbiAgICAgICAgdGhpcy5ieSh7XCJub3RpZnk6c3BpblN0YXJ0XCIgOiB0aGlzLnN0YXJ0fSk7XHJcblxyXG4gICAgICAgIHRoaXMuZ2VuZXJhdGVkUmVzcG9uc2UgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdXBvbiByZXF1ZXN0IGZyb20gY2xpZW50IGNyZWF0ZXMgc3Bpbi9iZXQgcmVzdWx0IGFuZCBpbmZvcm0gdGhlIGNsaWVudFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGJldFNpemUgbXVsdGlwbGllciBmb3Igd2luIHBvaW50c1xyXG4gICAgICovXHJcbiAgICBzdGFydChiZXRTaXplKXtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSZWVsc2V0ID0gdGhpcy5zZWxlY3RSZWVsc2V0KHRoaXMucmVlbHNldHNMaXN0KTtcclxuICAgICAgICB0aGlzLnNwaW5SZXN1bHQgPSB0aGlzLnNlbGVjdFBvc2l0aW9ucyh0aGlzLmN1cnJlbnRSZWVsc2V0KTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlZFJlc3BvbnNlID0gdGhpcy5jaGVja0JldExpbmVzICh0aGlzLnNwaW5SZXN1bHQsIGJldFNpemUpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVFdmVudChcIm5vdGlmeTpzZXJ2ZXJNYW5hZ2VyLm5ld1Jlc3BvbnNlXCIsIHRoaXMuZ2VuZXJhdGVkUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmdlbmVyYXRlZFJlc3BvbnNlID0gbnVsbDtcclxuICAgICAgICB9LDEwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJhbmRvbWx5IHNlbGVjdCByZWVsc2V0IGZyb20gcmVlbHNldHNMaXN0XHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZWVsc2V0c0xpc3QgYXJyYXkgd2l0aCByZWVsc2V0c1xyXG4gICAgICogQHJldHVybnMge2FycmF5fSBzZWxlY3RlZCByZWVsc2V0XHJcbiAgICAgKi9cclxuICAgIHNlbGVjdFJlZWxzZXQgKHJlZWxzZXRzTGlzdCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHJhbmRvbUludCgwLCByZWVsc2V0c0xpc3QubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgcmV0dXJuIHJlZWxzZXRzTGlzdFtpbmRleF07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByYW5kb21seSBzZWxlY3RzIHN0YXJ0IHBvc2l0aW9ucyBvbiBlYWNoIHJlZWwgYW5kIGdlbmVyYXRlIG5ldyBhcnJheSB3aXRoIG5leHQgMyBzeW1ib2xzXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBjdXJyZW50UmVlbHNldCBhcnJheSB3aXRoIHBvc3NpYmxlIHZhbHVlcyBmb3IgZWFjaCByZWVsXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IHR3by1sZXZlbHMgYXJyYXkgd2l0aCBzcGluIHJlc3VsdFxyXG4gICAgICovXHJcbiAgICBzZWxlY3RQb3NpdGlvbnMgKGN1cnJlbnRSZWVsc2V0KSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHNwaW5SZXN1bHQgPSBbXTtcclxuXHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGN1cnJlbnRSZWVsc2V0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IGN1clNldCA9IGN1cnJlbnRSZWVsc2V0W2ldO1xyXG5cclxuICAgICAgICAgICAgLy8gMyBzeW1ib2xzIGFmdGVyIHN0YXJ0UG9pbnQgYXJlIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvaW50ID0gcmFuZG9tSW50KDAsIGN1clNldC5sZW5ndGggLSAzKTtcclxuICAgICAgICAgICAgbGV0IGN1clJlZWwgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGN1clJlZWwucHVzaChjdXJTZXRbc3RhcnRQb2ludF0pO1xyXG4gICAgICAgICAgICBjdXJSZWVsLnB1c2goY3VyU2V0W3N0YXJ0UG9pbnQgKyAxXSk7XHJcbiAgICAgICAgICAgIGN1clJlZWwucHVzaChjdXJTZXRbc3RhcnRQb2ludCArIDJdKTtcclxuXHJcbiAgICAgICAgICAgIHNwaW5SZXN1bHQucHVzaChjdXJSZWVsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHNwaW5SZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkZXBlbmRzIG9uIHNwaW4gcmVzdWx0IGNoZWNrIGJldCBsaW5lcyBhbmQgZ2VuZXJhdGVzIHJlc3VsdCBjb25maWdcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHNwaW5SZXN1bHQgdHdvLWxldmVscyBhcnJheSB3aXRoIHNwaW4gcmVzdWx0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYmV0U2l6ZSB3aW4gcG9pbnRzIG11bHRpcGxpZXJcclxuICAgICAqIEByZXR1cm5zIHtvYmplY3R9IHJlc3VsdENvbmZpZyByZXN1bHQgY29uZmlndXJhdGlvbiBvZiBjdXJyZW50IGJldFxyXG4gICAgICogICAgICAgICAge251bWJlcn0gcmVzdWx0Q29uZmlnLndpbkFtb3VudCBhbW91bnQgb2Ygd2luIHBvaW50XHJcbiAgICAgKiAgICAgICAgICB7YXJyYXl9IHJlc3VsdENvbmZpZy53aW5MaW5lcyBhcnJheSB3aXRoIHdpbiBiZXQgbGluZXNcclxuICAgICAqICAgICAgICAgIHthcnJheX0gcmVzdWx0Q29uZmlnLndpblN5bWJvbHMgYXJyYXkgd2l0aCB3aW4gc3ltYm9sc1xyXG4gICAgICogICAgICAgICAge2FycmF5fSByZXN1bHRDb25maWcuc3BpblJlc3VsdCB0d28tbGV2ZWxzIGFycmF5IHdpdGggc3BpbiByZXN1bHRcclxuICAgICAqL1xyXG4gICAgY2hlY2tCZXRMaW5lcyAoc3BpblJlc3VsdCwgYmV0U2l6ZSl7XHJcblxyXG4gICAgICAgIGxldCB3aW5Qb2ludHMgPSAwO1xyXG4gICAgICAgIGxldCB3aW5TeW1ib2xzID0gW107XHJcbiAgICAgICAgbGV0IHdpbkxpbmVzID0gW107XHJcbiAgICAgICAgbGV0IHJlc3VsdENvbmZpZyA9IHt9O1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYmV0TGluZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRMaW5lICA9IHRoaXMuYmV0TGluZXNbaV07XHJcbiAgICAgICAgICAgIGxldCBzeW1ic01hdGNoZWQgPSAxO1xyXG5cclxuICAgICAgICAgICAgbGV0IHN5bWJvbE51bSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHNwaW5SZXN1bHQubGVuZ3RoIC0gMTsgaisrKXtcclxuICAgICAgICAgICAgICAgIGlmIChzcGluUmVzdWx0W2pdW2N1cnJlbnRMaW5lW2pdXSA9PT0gc3BpblJlc3VsdFtqICsgMV1bY3VycmVudExpbmVbaisxXV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBzeW1ic01hdGNoZWQgKz0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzeW1ic01hdGNoZWQgPCAzKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sTnVtLnB1c2goY3VycmVudExpbmVbal0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2xOdW0ucHVzaChjdXJyZW50TGluZVtqKzFdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ltYm9sTnVtLnB1c2goY3VycmVudExpbmVbaisxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChzeW1ic01hdGNoZWQgPiAyKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5TeW1ib2xzLnB1c2goc3ltYm9sTnVtKTtcclxuICAgICAgICAgICAgICAgIHdpbkxpbmVzLnB1c2goaSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc3ltYnNNYXRjaGVkID09PSAzKXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc3ltYnNNYXRjaGVkID09PSA0KXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMzA7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoc3ltYnNNYXRjaGVkID09PSA1KXtcclxuICAgICAgICAgICAgICAgICAgICB3aW5Qb2ludHMgKz0gMTAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBzeW1ic01hdGNoZWQgPSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzdWx0Q29uZmlnLndpbkFtb3VudCA9ICB3aW5Qb2ludHMgKiBiZXRTaXplO1xyXG4gICAgICAgIHJlc3VsdENvbmZpZy53aW5MaW5lcyA9IHdpbkxpbmVzO1xyXG4gICAgICAgIHJlc3VsdENvbmZpZy53aW5TeW1ib2xzID0gd2luU3ltYm9scztcclxuICAgICAgICByZXN1bHRDb25maWcuc3BpblJlc3VsdCA9IHNwaW5SZXN1bHQ7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHRDb25maWc7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi9nYW1lQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgV2luSGFuZGxlciB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcbiAgICAgICAgdGhpcy5ieSh7XCJub3RpZnk6c2VydmVyTWFuYWdlci5uZXdSZXNwb25zZVwiIDogdGhpcy5jcmVhdGVXaW5Db25maWd9KTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmF0ZSB3aW4gY29uZmlnIGRlcGVuZHMgb24gc2VydmVyIHJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gc2VydmVyQ29uZmlnXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2VydmVyQ29uZmlnLndpbkFtb3VudCBhbW91bnQgb2Ygd2luIHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBzZXJ2ZXJDb25maWcud2luTGluZXMgYXJyYXkgd2l0aCB3aW4gYmV0IGxpbmVzXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBzZXJ2ZXJDb25maWcud2luU3ltYm9scyBhcnJheSB3aXRoIHdpbiBzeW1ib2xzXHJcbiAgICAgKi9cclxuICAgIGNyZWF0ZVdpbkNvbmZpZyAoc2VydmVyQ29uZmlnKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XHJcblxyXG4gICAgICAgIGlmKHNlcnZlckNvbmZpZy53aW5BbW91bnQgPiAwKXtcclxuXHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHt9O1xyXG4gICAgICAgICAgICByZXN1bHQubWF0cml4ID0gdGhpcy5jcmVhdGVUZW1wbGF0ZU1hdHJpeCgpO1xyXG4gICAgICAgICAgICByZXN1bHQud2luQW1vdW50ID0gc2VydmVyQ29uZmlnLndpbkFtb3VudDtcclxuICAgICAgICAgICAgcmVzdWx0LndpbkxpbmVzID0gc2VydmVyQ29uZmlnLndpbkxpbmVzO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXJ2ZXJDb25maWcud2luU3ltYm9scy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBsZXQgY3VyTGluZSA9IHNlcnZlckNvbmZpZy53aW5TeW1ib2xzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBjdXJMaW5lLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyUmVlbCA9ICByZXN1bHQubWF0cml4W2pdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzeW1iSW5kZXggPSBjdXJMaW5lW2pdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjdXJSZWVsW3N5bWJJbmRleF0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5maXJlRXZlbnQoXCJub3RpZnk6d2luSGFuZGxlci5uZXdSZXNwb25zZVwiLCByZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlIG1hdHJpeCBkZXBlbmRzIG9uIGdhbWVDb25maWcgcGFyYW1zXHJcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9IG1hdHJpeCB3aXRoIGZhbHNlIHBhcmFtc1xyXG4gICAgICovXHJcbiAgICBjcmVhdGVUZW1wbGF0ZU1hdHJpeCgpe1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IFtdO1xyXG5cclxuICAgICAgICBsZXQgcm93c051bSA9IGdhbWVDb25maWcuZ2FtZVNpemUucm93cztcclxuICAgICAgICBsZXQgcmVlbHNOdW0gPSBnYW1lQ29uZmlnLmdhbWVTaXplLnJlZWxzO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVlbHNOdW07IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjdXJSZWVsID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgcm93c051bTsgaisrKXtcclxuICAgICAgICAgICAgICAgIGN1clJlZWwucHVzaChmYWxzZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5wdXNoKGN1clJlZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IHtyZW5kZXJMb29wfSBmcm9tIFwiLi4vZW5naW5lXCI7XHJcbmltcG9ydCB7dGltZUJldHdlZW5GcmFtZXN9IGZyb20gXCIuLi91dGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbVR3ZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgcHJvcGVydHlOYW1lLCBzdGFydCwgZW5kLCBwZXJpb2Qpe1xyXG5cclxuICAgICAgICB0aGlzLm9iaiA9IG9iajtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5wcm9wZXJ0eU5hbWUgPSBwcm9wZXJ0eU5hbWU7XHJcbiAgICAgICAgdGhpcy5nZXRTcGVlZChwZXJpb2QpO1xyXG5cclxuICAgICAgICByZW5kZXJMb29wLnB1c2godGhpcyk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb24gZWFjaCBmcmFtZSBldmVubHkgY2hhbmdlIHJlcXVpcmVkIHBhcmFtLCBmcm9tIHRoZSBzdGFydCBwb2ludCB0byB0aGUgZW5kLCBmb3IgYSBzZXQgcGVyaW9kIG9mIHRpbWVcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBkZWx0YSBlbGltaW5hdGVzIGRlbGF5cyBiZXR3ZWVuIGZyYW1lc1xyXG4gICAgICovXHJcbiAgICB1cGRhdGUgKGRlbHRhKXtcclxuICAgICAgICBpZih0aGlzLnVwZGF0ZVJlcXVpcmVkKXtcclxuICAgICAgICAgICAgaWYodGhpcy5kaXN0YW5jZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPCB0aGlzLmVuZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSAgPj0gdGhpcy5lbmQgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSA9IHRoaXMuZW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vYmpbdGhpcy5wcm9wZXJ0eU5hbWVdID4gdGhpcy5lbmQpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2JqW3RoaXMucHJvcGVydHlOYW1lXSArPSB0aGlzLnNwZWVkICogZGVsdGE7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gIDw9IHRoaXMuZW5kICApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9ialt0aGlzLnByb3BlcnR5TmFtZV0gPSB0aGlzLmVuZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlcyBzcGVlZCBkZXBlbmQgb24gZGlzdGFuY2UgYW5kIHBlcmlvZFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBlcmlvZCBwZXJpb2Qgb2YgdGltZSBuZWVkZWQgdG8gcmVhY2ggdGhlIGVuZHBvaW50XHJcbiAgICAgKi9cclxuICAgIGdldFNwZWVkIChwZXJpb2QpIHtcclxuICAgICAgICB0aGlzLmRpc3RhbmNlID0gdGhpcy5lbmQgLSB0aGlzLnN0YXJ0O1xyXG4gICAgICAgIHRoaXMubnVtT2ZGcmFtZXMgPSBwZXJpb2QvdGltZUJldHdlZW5GcmFtZXM7XHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IHRoaXMuZGlzdGFuY2UvdGhpcy5udW1PZkZyYW1lcztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnQgc3RhcnQgcG9pbnRcclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBlbmQgZW5kIHBvaW50XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGVyaW9kIHBlcmlvZCBvZiB0aW1lIG5lZWRlZCB0byByZWFjaCB0aGUgZW5kcG9pbnRcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uQ29tcGxldGUgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgcGxheShzdGFydCwgZW5kLCBwZXJpb2QsIG9uQ29tcGxldGUpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5lbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5nZXRTcGVlZChwZXJpb2QpO1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZSA9IG9uQ29tcGxldGU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHthbmltYXRpb25SZXF1aXJlZH0gZnJvbSBcIi4uL2VuZ2luZVwiO1xyXG5pbXBvcnQge3JhbmRvbUludH0gZnJvbSBcIi4uL3V0aWxzXCI7XHJcbmltcG9ydCB7U3ltYm9sfSBmcm9tIFwiLi9zeW1ib2xcIjtcclxuaW1wb3J0IHtnYW1lQ29uZmlnfSBmcm9tIFwiLi4vbWFpbi9nYW1lQ29uZmlnXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVlbCBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb25Db25maWcgPSBnYW1lQ29uZmlnLnJlZWxzUG9zaXRpb24ucmVlbHM7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzUG9pbnQgPSBnYW1lQ29uZmlnLnJlZWxzUG9zaXRpb24uc3ltYm9sc1BvaW50O1xyXG5cclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzID0gdGhpcy5hZGRTeW1ib2xzKHRoaXMuc3ltYm9sc1BvaW50KTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID0gMDtcclxuICAgICAgICB0aGlzLnJlc3VsdFN5bWJvbHMgPSBbXTtcclxuICAgICAgICB0aGlzLmN1clJlc3VsdFN5bWJJbmRleCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJEYXRhUmVjZWl2ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlciA9IHRoaXMuc3ltYm9scy5sZW5ndGg7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGRpbmcgc3ltYm9scyB0byByZWVsIGJ5IHN5bWJvbHNQb2ludCBmcm9tIGdhbWVDb25maWdcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHN5bWJvbHNQb2ludCBhcnJheSB3aXRoIHBvaW50cyBmb3Igc3ltYm9sc1xyXG4gICAgICogQHJldHVybnMge0FycmF5fSBhcnJheSB3aXRoIHN5bWJvbHNcclxuICAgICAqL1xyXG4gICAgYWRkU3ltYm9scyhzeW1ib2xzUG9pbnQpIHtcclxuICAgICAgICBsZXQgc3ltYm9scyA9IFtdO1xyXG5cclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc3ltYm9sc1BvaW50Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJTeW1iID0gc3ltYm9sc1BvaW50W2ldO1xyXG5cclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gcmFuZG9tSW50KDAsIHBvc3NpYmxlU3ltU3JjLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gbmV3IFN5bWJvbChwb3NzaWJsZVN5bVNyY1tpbmRleF0sIHRoaXMucG9zaXRpb25Db25maWcpO1xyXG4gICAgICAgICAgICBzeW1ib2wucG9zaXRpb24uc2V0KGN1clN5bWIueCAsIGN1clN5bWIueSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3ltYm9sKTtcclxuICAgICAgICAgICAgc3ltYm9scy5wdXNoKHN5bWJvbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3ltYm9scztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogc3RhcnQgc3Bpbm5pbmcgc3ltYm9sc1xyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Db21wbGV0ZSBjYWxsYmFjayBmdW5jdGlvbiwgd2hpY2ggY2FsbGVkIHdoZW4gYWxsIGl0ZXJhdGlvbnMgYXJlIGZpbmlzaGVkXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0IChvbkNvbXBsZXRlKSB7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID0gSW5maW5pdHk7XHJcbiAgICAgICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzLmZvckVhY2goKHN5bWJvbCkgPT4ge1xyXG4gICAgICAgICAgICBzeW1ib2wuc3RhcnRTcGluKCB0aGlzLm9uU3RhcnRCb3VuY2VGaW5pc2hlZC5iaW5kKHRoaXMpICk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBiZXRSZXN1bHQgYXJyYXkgd2l0aCByZXN1bHQgZm9yIGN1cnJlbnQgYmV0XHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3ltYnNCZlJlc3VsdCBhbW91bnQgb2YgaXRlcmF0aW9uIGJlZm9yZSByZXN1bHRcclxuICAgICAqL1xyXG4gICAgYWRkU2VydmVyVmFsdWVzIChiZXRSZXN1bHQsIHN5bWJzQmZSZXN1bHQpIHtcclxuICAgICAgICB0aGlzLnN5bWJvbHNCZWZvcmVSZXN1bHQgPSBzeW1ic0JmUmVzdWx0O1xyXG4gICAgICAgIHRoaXMucmVzdWx0U3ltYm9scyA9IGJldFJlc3VsdDtcclxuICAgICAgICB0aGlzLmN1clJlc3VsdFN5bWJJbmRleCA9IHRoaXMucmVzdWx0U3ltYm9scy5sZW5ndGggLSAxO1xyXG4gICAgICAgIHRoaXMuc2VydmVyRGF0YVJlY2VpdmVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHVzZVJhbmRvbVN5bWIgaWYgdHJ1ZSBhZGQgcmFuZG9tU3ltYm9sXHJcbiAgICAgKi9cclxuICAgIG1vdmVMYXN0U3ltYk9uVG9wKHVzZVJhbmRvbVN5bWIgPSB0cnVlKXtcclxuICAgICAgICBsZXQgbGFzdEluZGV4ID0gdGhpcy5zeW1ib2xzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgbGV0IGxhc3RTeW1ib2wgPSB0aGlzLnN5bWJvbHNbbGFzdEluZGV4XTtcclxuICAgICAgICBsZXQgbmV3SW5kZXg7XHJcblxyXG4gICAgICAgIGlmKHVzZVJhbmRvbVN5bWIpe1xyXG4gICAgICAgICAgICBuZXdJbmRleCA9IHJhbmRvbUludCgwLCBwb3NzaWJsZVN5bVNyYy5sZW5ndGggLSAxKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBuZXdJbmRleCA9IHRoaXMucmVzdWx0U3ltYm9sc1t0aGlzLmN1clJlc3VsdFN5bWJJbmRleF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsYXN0U3ltYm9sLnNldE5ld1N5bWJvbChuZXdJbmRleCk7XHJcblxyXG4gICAgICAgIGxhc3RTeW1ib2wueSA9IC10aGlzLnBvc2l0aW9uQ29uZmlnLnNsb3RMZW5ndGg7XHJcblxyXG4gICAgICAgIHRoaXMuc3ltYm9scy51bnNoaWZ0KHRoaXMuc3ltYm9scy5wb3AoKSk7XHJcblxyXG4gICAgICAgIHRoaXMuc3ltYm9scy5mb3JFYWNoKChzeW1ib2wpID0+IHtcclxuICAgICAgICAgICAgc3ltYm9sLm1vdmVPbmVTbG90KCB0aGlzLm9uU3ltYm9sTW92ZWRPbmVTbG90LmJpbmQodGhpcykgKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogd2hlbiBhbGwgc3ltYm9scyBhcmUgZmluaXNoZWQgc3RhcnQgYm91bmNlLCByZXNldCB0aGUgc3ltYm9sc0NvdW50ZXJcclxuICAgICAqIGFuZCBjYWxsIG1vdmVMYXN0U3ltYk9uVG9wXHJcbiAgICAgKi9cclxuICAgIG9uU3RhcnRCb3VuY2VGaW5pc2hlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlci0tO1xyXG4gICAgICAgIGlmICh0aGlzLnN5bWJvbHNDb3VudGVyID09PSAwKXtcclxuICAgICAgICAgICAgdGhpcy5zeW1ib2xzQ291bnRlciA9IHRoaXMuc3ltYm9scy5sZW5ndGg7XHJcbiAgICAgICAgICAgIHRoaXMubW92ZUxhc3RTeW1iT25Ub3AoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB3aGVuIGVhY2ggc3ltYm9sIG1vdmVkIG9uZSBzbG90LCBpdCByZWR1Y2VzIHN5bWJvbHNDb3VudGVyXHJcbiAgICAgKiB3aGVuIGFsbCBzeW1ib2xzIGFyZSBmaW5pc2hlZCwgcmVzZXQgdGhlIGNvdW50ZXJcclxuICAgICAqIGlmIG1vcmUgaXRlcmF0aW9ucyBhcmUgcmVxdWlyZWQsIGNhbGwgdGhpcy5tb3ZlTGFzdFN5bWJPblRvcFxyXG4gICAgICovXHJcbiAgICBvblN5bWJvbE1vdmVkT25lU2xvdCgpIHtcclxuICAgICAgICB0aGlzLnN5bWJvbHNDb3VudGVyLS07XHJcbiAgICAgICAgaWYgKHRoaXMuc3ltYm9sc0NvdW50ZXIgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNDb3VudGVyID0gdGhpcy5zeW1ib2xzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0LS07XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID4gMCAmJiBhbmltYXRpb25SZXF1aXJlZCB8fCAhdGhpcy5zZXJ2ZXJEYXRhUmVjZWl2ZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW92ZUxhc3RTeW1iT25Ub3AoKTtcclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLmN1clJlc3VsdFN5bWJJbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmVMYXN0U3ltYk9uVG9wKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VyUmVzdWx0U3ltYkluZGV4LS07XHJcbiAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3ltYm9scy5mb3JFYWNoKChzeW1ib2wpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzeW1ib2wuZW5kU3BpbiggdGhpcy5vbkVuZEJvdW5jZUZpbmlzaGVkLmJpbmQodGhpcykgKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHdoZW4gYWxsIHN5bWJvbHMgYXJlIGZpbmlzaGVkIGVuZCBib3VuY2UsIHJlc2V0IHRoZSBzeW1ib2xzQ291bnRlclxyXG4gICAgICogYW5kIGNhbGwgb25TcGluT3ZlclxyXG4gICAgICovXHJcbiAgICBvbkVuZEJvdW5jZUZpbmlzaGVkICgpIHtcclxuICAgICAgICB0aGlzLnN5bWJvbHNDb3VudGVyLS07XHJcbiAgICAgICAgaWYgKHRoaXMuc3ltYm9sc0NvdW50ZXIgPT09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnN5bWJvbHNDb3VudGVyID0gdGhpcy5zeW1ib2xzLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5vblNwaW5PdmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogV2hlbiBjdXJyZW50IHNwaW4gaXMgb3ZlciBzZXQgZGVmYXVsdCB2YWx1ZXMgYW5kIGNhbGwgY2FsbGJhY2sgZnVuY3Rpb25cclxuICAgICAqL1xyXG4gICAgb25TcGluT3ZlcigpIHtcclxuICAgICAgICB0aGlzLnNlcnZlckRhdGFSZWNlaXZlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0U3ltYm9scyA9IFtdO1xyXG4gICAgICAgIHRoaXMub25Db21wbGV0ZSgpO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7Y2hhbmdlQW5pbVJlcXVpcmVUb30gZnJvbSBcIi4uL2VuZ2luZVwiO1xyXG5pbXBvcnQge1JlZWx9IGZyb20gXCIuL3JlZWxcIlxyXG5pbXBvcnQge2dhbWVDb25maWd9IGZyb20gXCIuLi9tYWluL2dhbWVDb25maWdcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWVscyBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy55ID0gZ2FtZUNvbmZpZy5yZWVsc1Bvc2l0aW9uLnRvcE9mZnNldDtcclxuXHJcbiAgICAgICAgdGhpcy5hbGxSZWVscyA9IHRoaXMuYWRkUmVlbHMoKTtcclxuICAgICAgICB0aGlzLm1hc2sgPSB0aGlzLmFkZE1hc2soKTtcclxuXHJcbiAgICAgICAgdGhpcy5yZWVsc0NvdW50ZXIgPSB0aGlzLmFsbFJlZWxzLmxlbmd0aDtcclxuICAgICAgICB0aGlzLndpbkFuaW1SZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVzdWx0Q29uZmlnID0gbnVsbDtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcblxyXG4gICAgICAgIHRoaXMuYnkoe1xyXG4gICAgICAgICAgICBcIm5vdGlmeTpzcGluU3RhcnRcIiA6IHRoaXMuc3RhcnQsXHJcbiAgICAgICAgICAgIFwibm90aWZ5OnNlcnZlck1hbmFnZXIubmV3UmVzcG9uc2VcIiA6IHRoaXMuYWRkU2VydmVyVmFsdWVzLFxyXG4gICAgICAgICAgICBcIm5vdGlmeTp3aW5IYW5kbGVyLm5ld1Jlc3BvbnNlXCI6IHRoaXMuYWRkV2luSGFuZGxlclZhbHVlc1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY3JlYXRlcyByZWVscyBkZXBlbmRpbmcgb24gZ2FtZUNvbmZpZyBwYXJhbXNcclxuICAgICAqIEByZXR1cm5zIHtBcnJheX0gYXJyYXkgd2l0aCByZWVsc1xyXG4gICAgICovXHJcbiAgICBhZGRSZWVscygpIHtcclxuICAgICAgICBsZXQgcmVlbHNQb2ludHMgPSBnYW1lQ29uZmlnLnJlZWxzUG9zaXRpb24ucmVlbHNQb2ludHM7XHJcbiAgICAgICAgbGV0IGFsbFJlZWxzID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZWVsc1BvaW50cy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGxldCBjdXJSZWVsUG9pbnRzID0gcmVlbHNQb2ludHNbaV07XHJcbiAgICAgICAgICAgIGxldCByZWVsID0gbmV3IFJlZWwoY3VyUmVlbFBvaW50cy54LCBjdXJSZWVsUG9pbnRzLnkpO1xyXG4gICAgICAgICAgICBhbGxSZWVscy5wdXNoKHJlZWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHJlZWwpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhbGxSZWVscztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGNyZWF0ZSBhIG1hc2sgdG8gbGltaXQgdmlzaWJsZSB6b25lXHJcbiAgICAgKiBAcmV0dXJucyB7UElYSS5HcmFwaGljc30gcmVlbHMgbWFza1xyXG4gICAgICovXHJcbiAgICBhZGRNYXNrKCkge1xyXG4gICAgICAgIGxldCByZWVsc01hc2sgPSBuZXcgUElYSS5HcmFwaGljcygpO1xyXG4gICAgICAgIHJlZWxzTWFzay5iZWdpbkZpbGwoKTtcclxuICAgICAgICByZWVsc01hc2suZHJhd1JlY3QoMCwgLXRoaXMueSwgZ2FtZUNvbmZpZy5nYW1lU2l6ZS53aWR0aCwgZ2FtZUNvbmZpZy5nYW1lU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgIHRoaXMuYWRkQ2hpbGQocmVlbHNNYXNrKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHJlZWxzTWFzaztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHN0YXJ0IHNwaW5uaW5nIHJlZWxzXHJcbiAgICAgKi9cclxuICAgIHN0YXJ0KCkge1xyXG4gICAgICAgIGNoYW5nZUFuaW1SZXF1aXJlVG8odHJ1ZSk7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbFJlZWxzLmxlbmd0aDsgaSsrICl7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsUmVlbHNbaV0uc3RhcnQoIHRoaXMub25SZWVsU3RvcHBlZC5iaW5kKHRoaXMpICk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRDb25maWcgcmVzdWx0Q29uZmlnIGZyb20gc2VydmVyXHJcbiAgICAgKiBAcGFyYW0ge2FycmF5fSByZXN1bHRDb25maWcuc3BpblJlc3VsdCBhcnJheSB3aXRoIGJldCByZXN1bHQgZm9yIGVhY2ggcmVlbFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJlc3VsdENvbmZpZy53aW5BbW91bnQgd2luIHBvaW50cyBvbiBjdXJyZW50IGJldFxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHN5bWJzQmZSZXN1bHQgYW1vdW50IG9mIHJhbmRvbSBzeW1ib2xzIGJlZm9yZSByZXN1bHRcclxuICAgICAqL1xyXG4gICAgYWRkU2VydmVyVmFsdWVzIChyZXN1bHRDb25maWcsIHN5bWJzQmZSZXN1bHQgPSA2KSB7XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmFsbFJlZWxzLmxlbmd0aDsgaSsrICl7XHJcbiAgICAgICAgICAgIHRoaXMuYWxsUmVlbHNbaV0uYWRkU2VydmVyVmFsdWVzKHJlc3VsdENvbmZpZy5zcGluUmVzdWx0W2ldLCBzeW1ic0JmUmVzdWx0K2ksIHRoaXMub25SZWVsU3RvcHBlZC5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIHJlc3VsdCBjb25maWdcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRDb25maWcgZnJvbSB3aW5IYW5kbGVyXHJcbiAgICAgKi9cclxuICAgIGFkZFdpbkhhbmRsZXJWYWx1ZXMgKHJlc3VsdENvbmZpZykge1xyXG4gICAgICAgIGlmKHJlc3VsdENvbmZpZykge1xyXG4gICAgICAgICAgICB0aGlzLndpbkFuaW1SZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVzdWx0Q29uZmlnID0gcmVzdWx0Q29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogd2hlbiBlYWNoIHJlZWwgZmluaXNoZWQgc3BpbiwgaXQgcmVkdWNlcyByZWVsc0NvdW50ZXJcclxuICAgICAqIHdoZW4gYWxsIHJlZWxzIGFyZSBmaW5pc2hlZCwgcmVzZXQgdGhlIGNvdW50ZXIsIGFuZCBjaGVjayBiZXQgbGluZXNcclxuICAgICAqL1xyXG4gICAgb25SZWVsU3RvcHBlZCAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWVsc0NvdW50ZXItLTtcclxuICAgICAgICBpZiAodGhpcy5yZWVsc0NvdW50ZXIgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5yZWVsc0NvdW50ZXIgPSB0aGlzLmFsbFJlZWxzLmxlbmd0aDtcclxuICAgICAgICAgICAgY2hhbmdlQW5pbVJlcXVpcmVUbyhmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dXaW5BbmltYXRpb24odGhpcy5yZXN1bHRDb25maWcpO1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVFdmVudChcIm5vdGlmeTpzcGluT3ZlclwiLCB0aGlzLnJlc3VsdENvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogaWYgd2luQW5pbVJlcXVpcmVkLCBzaG93IHdpbi9sb3NzIGFuaW1hdGlvbiBmb3IgZWFjaCBzeW1ib2xcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRDb25maWdcclxuICAgICAqIEBwYXJhbSB7YXJyYXl9IHJlc3VsdENvbmZpZy5tYXRyaXggdHdvLWxldmVscyBhcnJheSB3aXRoIHRydWUvZmFsc2UgcGFyYW1cclxuICAgICAqL1xyXG4gICAgc2hvd1dpbkFuaW1hdGlvbihyZXN1bHRDb25maWcpIHtcclxuICAgICAgICBpZiAodGhpcy53aW5BbmltUmVxdWlyZWQpe1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHRDb25maWcubWF0cml4Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJSZXN1bHRSZWVsID0gcmVzdWx0Q29uZmlnLm1hdHJpeFtpXTtcclxuICAgICAgICAgICAgICAgIGxldCBjdXJSZWVsID0gdGhpcy5hbGxSZWVsc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgY3VyUmVzdWx0UmVlbC5sZW5ndGg7IGorKyl7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGN1clJlc3VsdFJlZWxbal0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJSZWVsLnN5bWJvbHNbal0ucGxheVdpbkFuaW1hdGlvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyUmVlbC5zeW1ib2xzW2pdLnBsYXlMb3NzQW5pbWF0aW9uKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMud2luQW5pbVJlcXVpcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQge3RleHR1cmVzfSBmcm9tIFwiLi4vZW5naW5lXCI7XHJcbmltcG9ydCB7Q3VzdG9tVHdlZW59IGZyb20gXCIuL2N1c3RvbVR3ZWVuXCI7XHJcbmltcG9ydCB7YmV0TGluZXN9IGZyb20gXCIuLi9lbmdpbmVcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU3ltYm9sIGV4dGVuZHMgUElYSS5TcHJpdGV7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0dXJlU3JjLCBjb25maWcpe1xyXG4gICAgICAgIHN1cGVyKHRleHR1cmVzW3RleHR1cmVTcmNdKTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSBjb25maWcuc3ltYm9sRGltZW5zaW9ucy53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGNvbmZpZy5zeW1ib2xEaW1lbnNpb25zLmhlaWdodDtcclxuICAgICAgICB0aGlzLnNsb3RMZW5ndGggPSBjb25maWcuc2xvdExlbmd0aDtcclxuXHJcbiAgICAgICAgdGhpcy50eXBlID0gdGV4dHVyZVNyYztcclxuICAgICAgICB0aGlzLmFuY2hvci5zZXQoMC41KTtcclxuXHJcbiAgICAgICAgdGhpcy5zcGVlZCA9IDE2MDtcclxuXHJcbiAgICAgICAgdGhpcy5zdGFydFNjYWxlID0gdGhpcy5zY2FsZS5feDtcclxuICAgICAgICB0aGlzLmVuZFNjYWxlID0gdGhpcy5zdGFydFNjYWxlKjEuMjU7XHJcblxyXG4gICAgICAgIHRoaXMuYnkoe1wibm90aWZ5OmJldENoYW5nZWRcIiA6IHRoaXMucGxheUlkbGV9KTtcclxuXHJcbiAgICAgICAgdGhpcy50d2VlbiA9IG5ldyBDdXN0b21Ud2Vlbih0aGlzLCBcInlcIiwgdGhpcy55LCB0aGlzLnkgKyAgdGhpcy5zbG90TGVuZ3RoLCB0aGlzLnNwZWVkKTtcclxuICAgICAgICB0aGlzLmJvdW5jZVR3ZWVuID0gbmV3IEN1c3RvbVR3ZWVuKHRoaXMsIFwieVwiLCB0aGlzLnksIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzIsIHRoaXMuc3BlZWQqMi8zKTtcclxuXHJcbiAgICAgICAgdGhpcy5zY2FsZVR3ZWVuID0gbmV3IEN1c3RvbVR3ZWVuKHRoaXMsIFwic3ltYlNjYWxlXCIsIHRoaXMuc3RhcnRTY2FsZSwgIHRoaXMuZW5kU2NhbGUsIHRoaXMuc3BlZWQqMyk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIGNhbGxiYWNrIGZ1bmN0aW9uIGNhbGxlZCB3aGVuIGJvdW5jZVR3ZWVucyBhcmUgZmluaXNoZWRcclxuICAgICAqL1xyXG4gICAgc3RhcnRTcGluIChjYWxsYmFjaykge1xyXG4gICAgICAgIHRoaXMucGxheUlkbGUoKTtcclxuICAgICAgICB0aGlzLnN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcclxuICAgICAgICB0aGlzLmJvdW5jZVR3ZWVuLnBsYXkodGhpcy55LCB0aGlzLnkgLSB0aGlzLmhlaWdodC8yLHRoaXMuc3BlZWQqMy80LCB0aGlzLmJvdW5jZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gc3ltYm9sIHRvIHN0YXJ0IHBvc2l0aW9uIGFmdGVyIHVwQm91bmNlXHJcbiAgICAgKi9cclxuICAgIGJvdW5jZURvd24gKCkge1xyXG4gICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSArIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCoyLzMsIHRoaXMuc3RhcnRDYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXRzIGRlZmF1bHQgc3ltYm9scyBwYXJhbXMgYmVmb3JlIG5leHQgc3BpblxyXG4gICAgICogZXZlbmx5IGNoYW5nZSBwb3NpdGlvbiBieSBvbmUgc2xvdCB1c2luZyB0d2VlblxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gb25Db21wbGV0ZSBjYWxsYmFjayBmdW5jdGlvbiBjYWxsZWQgd2hlbiB0d2VlbiBpcyBmaW5pc2hlZFxyXG4gICAgICovXHJcbiAgICBtb3ZlT25lU2xvdCAob25Db21wbGV0ZSkge1xyXG4gICAgICAgIHRoaXMudHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSArIHRoaXMuc2xvdExlbmd0aCwgdGhpcy5zcGVlZCwgb25Db21wbGV0ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgZnVuY3Rpb24gY2FsbGVkIHdoZW4gYm91bmNlVHdlZW5zIGFyZSBmaW5pc2hlZFxyXG4gICAgICovXHJcbiAgICBlbmRTcGluKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdGhpcy5lbmRDYWxsYmFjayA9IGNhbGxiYWNrO1xyXG4gICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSArIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCoyLzMsIHRoaXMuYm91bmNlVXAuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gc3ltYm9sIHRvIHN0YXJ0IHBvc2l0aW9uIGFmdGVyIGRvd25Cb3VuY2VcclxuICAgICAqL1xyXG4gICAgYm91bmNlVXAgKCkge1xyXG4gICAgICAgIHRoaXMuYm91bmNlVHdlZW4ucGxheSh0aGlzLnksIHRoaXMueSAtIHRoaXMuaGVpZ2h0LzIsdGhpcy5zcGVlZCoyLzMsIHRoaXMuZW5kQ2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IHN5bWJvbCBuZXcgdGV4dHVyZSBhbmQgdHlwZVxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IHRleHR1cmUgaW5kZXggb2YgbmV3IHN5bWJvbFxyXG4gICAgICovXHJcbiAgICBzZXROZXdTeW1ib2woaW5kZXgpe1xyXG4gICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3Bvc3NpYmxlU3ltU3JjW2luZGV4XV07XHJcbiAgICAgICAgdGhpcy50eXBlID0gcG9zc2libGVTeW1TcmNbaW5kZXhdO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICpcclxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IG51bWJlciBvZiBzeW1ib2wncyBzY2FsZSBwcm9wZXJ0eVxyXG4gICAgICovXHJcbiAgICBnZXQgc3ltYlNjYWxlICgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zY2FsZS5feDtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdmFsdWUgc2V0IHN5bWJvbCdzIHNjYWxlIHByb3BlcnR5XHJcbiAgICAgKi9cclxuICAgIHNldCBzeW1iU2NhbGUgKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zY2FsZS5zZXQodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhbmltYXRpb24gZm9yIHdpbiBzeW1ib2xzXHJcbiAgICAgKi9cclxuICAgIHBsYXlXaW5BbmltYXRpb24gKCkge1xyXG4gICAgICAgIHRoaXMuc2NhbGVVcCgpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBldmVubHkgc2NhbGVzIHN5bWJvbCB1cCB1c2luZyB0d2VlblxyXG4gICAgICovXHJcbiAgICBzY2FsZVVwICgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlVHdlZW4ucGxheSh0aGlzLnN0YXJ0U2NhbGUsIHRoaXMuZW5kU2NhbGUsIHRoaXMuc3BlZWQqMywgdGhpcy5zY2FsZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGV2ZW5seSBzY2FsZXMgc3ltYm9sIGRvd24gdXNpbmcgdHdlZW5cclxuICAgICAqL1xyXG4gICAgc2NhbGVEb3duICgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlVHdlZW4ucGxheSh0aGlzLmVuZFNjYWxlLCB0aGlzLnN0YXJ0U2NhbGUsIHRoaXMuc3BlZWQqMywgdGhpcy5zdHViLmJpbmQodGhpcykpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNhdmVzIGN1cnJlbnQgcGFyZW50IHBhcmFtcyBhbmQgY2hhbmdlIHBhcmVudCB0byBiZXRMaW5lcyB0byBjaGFuZ2UgdGhlIGxheWVyXHJcbiAgICAgKi9cclxuICAgIHBsYXlMb3NzQW5pbWF0aW9uKCkge1xyXG5cclxuICAgICAgICB0aGlzLnBhcmVudFJlZWwgPSB0aGlzLnBhcmVudDtcclxuICAgICAgICBsZXQgZ2xvYmFsWCA9IHRoaXMuZ2V0R2xvYmFsUG9zaXRpb24oKS54O1xyXG4gICAgICAgIGxldCBnbG9iYWxZID0gdGhpcy5nZXRHbG9iYWxQb3NpdGlvbigpLnk7XHJcbiAgICAgICAgdGhpcy5sb2NhbFggPSB0aGlzLng7XHJcbiAgICAgICAgdGhpcy5sb2NhbFkgPSB0aGlzLnk7XHJcblxyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjU7XHJcblxyXG4gICAgICAgIGJldExpbmVzLmFkZENoaWxkQXQodGhpcywgMCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoZ2xvYmFsWCwgZ2xvYmFsWSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHNldHMgZGVmYXVsdCBzeW1ib2xzIHBhcmFtcyBhbmQgcmV0dXJuIHBhcmVudCB0byByZWVsIGlmIGl0IHdhcyBjaGFuZ2VkXHJcbiAgICAgKi9cclxuICAgIHBsYXlJZGxlICgpIHtcclxuICAgICAgICB0aGlzLnNjYWxlLnNldCh0aGlzLnN0YXJ0U2NhbGUpO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAxO1xyXG5cclxuICAgICAgICBpZih0aGlzLnBhcmVudFJlZWwpe1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudFJlZWwuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHRoaXMubG9jYWxYLCB0aGlzLmxvY2FsWSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGFyZW50UmVlbCA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgc3R1YiAoKSB7XHJcbiAgICAgICAgLy9zdHViXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge0J1dHRvbn0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7dGV4dHVyZXN9IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgU2VsZWN0b3IgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lcntcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIGxlZnRTcmMsIHJpZ2h0U3JjLCBwb3NzaWJsZVZhbHVlcykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIE9iamVjdC5hc3NpZ24odGhpcywgb2JzZXJ2YWJsZU1peGluKTtcclxuICAgICAgICB0aGlzLm1pbnVzQnV0dG9uID0gbmV3IEJ1dHRvbigwLCAwLCBsZWZ0U3JjLCB0aGlzLm1pbnVzT25lLmJpbmQodGhpcykpO1xyXG4gICAgICAgIHRoaXMucGx1c0J1dHRvbiA9IG5ldyBCdXR0b24oMjAwLCAwLCByaWdodFNyYywgdGhpcy5wbHVzT25lLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICB0aGlzLnBvc3NpYmxlVmFsdWVzID0gcG9zc2libGVWYWx1ZXM7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50VmFsdWUgPSAxO1xyXG4gICAgICAgIHRoaXMubnVtYmVyID0gdGhpcy5hZGROdW1iZXIoKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1pbnVzQnV0dG9uLCB0aGlzLnBsdXNCdXR0b24sIHRoaXMubnVtYmVyKTtcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5zZXQoeCwgeSk7XHJcblxyXG5cclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgbWludXNPbmUoKSB7XHJcbiAgICAgICAgdGhpcy5udW1iZXIudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMucG9zc2libGVWYWx1ZXNbIC0tdGhpcy5jdXJyZW50VmFsdWUgXV07XHJcbiAgICAgICAgdGhpcy5idXR0b25EaXNhYmxlQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwbHVzT25lICgpIHtcclxuICAgICAgICB0aGlzLm51bWJlci50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5wb3NzaWJsZVZhbHVlc1sgKyt0aGlzLmN1cnJlbnRWYWx1ZSBdXTtcclxuICAgICAgICB0aGlzLmJ1dHRvbkRpc2FibGVDaGVjaygpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRpc2FibGUvZW5hYmxlIGJ1dHRvbnMgZGVwZW5kIG9uIGN1cnJlbnRWYWx1ZVxyXG4gICAgICovXHJcbiAgICBidXR0b25EaXNhYmxlQ2hlY2soKXtcclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VmFsdWUgPj0gdGhpcy5wb3NzaWJsZVZhbHVlcy5sZW5ndGggLSAxKXtcclxuICAgICAgICAgICAgdGhpcy5wbHVzQnV0dG9uLmRpc2FibGUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBsdXNCdXR0b24uZW5hYmxlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5jdXJyZW50VmFsdWUgPCAxKXtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi5kaXNhYmxlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5taW51c0J1dHRvbi5lbmFibGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBjcmVhdGVzIHNlbGVjdG9yIG51bWJlciBzcHJpdGVcclxuICAgICAqIEByZXR1cm5zIHtQSVhJLlNwcml0ZX0gdGV4dHVyZSBvZiBzZWxlY3RvciBudW1iZXJcclxuICAgICAqL1xyXG4gICAgYWRkTnVtYmVyICgpIHtcclxuICAgICAgICBjb25zdCBudW1iZXIgPSBuZXcgUElYSS5TcHJpdGUodGV4dHVyZXNbdGhpcy5wb3NzaWJsZVZhbHVlc1t0aGlzLmN1cnJlbnRWYWx1ZV1dKTtcclxuICAgICAgICBudW1iZXIuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIG51bWJlci53aWR0aCA9IDEyNTtcclxuICAgICAgICBudW1iZXIuaGVpZ2h0ID0gMTI1O1xyXG4gICAgICAgIG51bWJlci5wb3NpdGlvbi5zZXQoMTAwLCAwKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG51bWJlclxyXG4gICAgfVxyXG5cclxuXHJcbn0iLCIvKipcclxuICogY3JlYXRlcyByYW5kb20gaW50ZWdlciB2YWx1ZSBiZXR3ZWVuIG1pbiBhbmQgbWF4XHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtaW4gbWluIHBvc3NpYmxlIHZhbHVlXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBtYXggbWF4IHBvc3NpYmxlIHZhbHVlXHJcbiAqIEByZXR1cm5zIHtudW1iZXJ9XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICBsZXQgcmFuZCA9IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbik7XHJcbiAgICByYW5kID0gTWF0aC5mbG9vcihyYW5kKTtcclxuICAgIHJldHVybiByYW5kO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdGltZUJldHdlZW5GcmFtZXMgPSAxNi42NzsiLCJleHBvcnQgY2xhc3MgV2luU2NyZWVuIGV4dGVuZHMgUElYSS5HcmFwaGljc3tcclxuICAgIGNvbnN0cnVjdG9yKHgsIHksIHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMsIG9ic2VydmFibGVNaXhpbik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbmV3IFBJWEkuVGV4dChcIllvdSB3b25cIik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlLnN0eWxlID0ge1xyXG4gICAgICAgICAgICBmb250RmFtaWx5OiBcIkFyaWFsXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAzNixcclxuICAgICAgICAgICAgZmlsbDogXCJ3aGl0ZVwiXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2UucG9zaXRpb24uc2V0KHdpZHRoLzIgLSAxMzAsIGhlaWdodC8yIC0gMzYgKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRDaGlsZCh0aGlzLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRoaXMuaGlkZVNjcmVlbigpO1xyXG4gICAgICAgIHRoaXMuYWxwaGEgPSAwLjc7XHJcblxyXG4gICAgICAgIHRoaXMuYnkoe1xyXG4gICAgICAgICAgICBcIm5vdGlmeTpzcGluU3RhcnRcIiA6IHRoaXMuaGlkZVNjcmVlbixcclxuICAgICAgICAgICAgXCJub3RpZnk6c3Bpbk92ZXJcIiA6IHRoaXMuc2hvd1NjcmVlbixcclxuICAgICAgICAgICAgXCJub3RpZnk6YmV0Q2hhbmdlZFwiIDogdGhpcy5oaWRlU2NyZWVuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFwcC5zdGFnZS5hZGRDaGlsZCh0aGlzKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWFrZXMgd2luU2NyZWVuIHZpc2libGVcclxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBjb25maWcgc2VydmVyJ3MgcmVzdWx0IGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbmZpZy53aW5BbW91bnQgYW1vdW50IG9mIHdpbiBwb2ludHNcclxuICAgICAqL1xyXG4gICAgc2hvd1NjcmVlbiAoY29uZmlnKXtcclxuICAgICAgICBpZihjb25maWcpIHtcclxuICAgICAgICAgICAgbGV0IHdpbk1zZyA9IFwiWW91IHdvbiBcIiArIGNvbmZpZy53aW5BbW91bnQgKyBcIiAhISEhIVwiO1xyXG4gICAgICAgICAgICB0aGlzLnZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1lc3NhZ2UudGV4dCA9IHdpbk1zZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBoaWRlcyB3aW5TY3JlZW5cclxuICAgICAqL1xyXG4gICAgaGlkZVNjcmVlbiAoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==