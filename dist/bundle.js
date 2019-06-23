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

    function Button(x, y, buttonTextures) {
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

        _this.setHitArea(65);

        _engine.app.stage.addChild(_this);
        return _this;
    }

    _createClass(Button, [{
        key: "mouseover",
        value: function mouseover() {
            this.disabled ? this.texture = _engine.textures[this.disabledTexture] : this.texture = _engine.textures[this.hoverTexture];
        }
    }, {
        key: "mouseout",
        value: function mouseout() {
            this.disabled ? this.texture = _engine.textures[this.disabledTexture] : this.texture = _engine.textures[this.idleTexture];
        }
    }, {
        key: "mousedown",
        value: function mousedown() {
            if (!_engine.animationRequired && !this.disabled) {
                this.texture = _engine.textures[this.downTexture];
                (0, _engine.makeSpin)(2);
            } else {
                this.disabled = true;
                this.texture = _engine.textures[this.disabledTexture];
                (0, _engine.changeAnimRequireTo)(false);
            }
        }
    }, {
        key: "mouseup",
        value: function mouseup() {
            this.disabled ? this.texture = _engine.textures[this.disabledTexture] : this.texture = _engine.textures[this.hoverTexture];
        }
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
exports.gameSize = exports.renderLoop = exports.animationRequired = exports.possibleSymSrc = exports.testDate = exports.evenlyChangeValueBetween = exports.reelsMask = exports.reels = exports.gameArea = exports.button = exports.background = exports.textures = exports.app = undefined;
exports.makeSpin = makeSpin;
exports.changeAnimRequireTo = changeAnimRequireTo;
exports.spinOverFiltration = spinOverFiltration;

var _button = __webpack_require__(/*! ./button */ "./javascript/button.js");

var _reel = __webpack_require__(/*! ./reel */ "./javascript/reel.js");

var _evenlyChangeValueBetween = __webpack_require__(/*! ./evenlyChangeValueBetween */ "./javascript/evenlyChangeValueBetween.js");

var _reels = __webpack_require__(/*! ./reels */ "./javascript/reels.js");

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
    reels = exports.reels = void 0,
    reelsMask = exports.reelsMask = void 0,
    evenlyChangeValueBetween = exports.evenlyChangeValueBetween = void 0,
    testDate = exports.testDate = void 0;

var possibleSymSrc = exports.possibleSymSrc = ["agent.png", "batman.png", "captain.png", "deadPool.png", "girl.png", "hulk.png", "ironMan.png", "robot.png", "spiderW.png"];

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

/*export let test = {
    start : 23,
    end : 57
};*/

function setup() {
    exports.textures = textures = PIXI.Loader.shared.resources["./images/sheet.json"].textures;

    exports.background = background = new PIXI.Sprite(textures["background.png"]);
    app.stage.addChild(background);

    exports.reels = reels = new _reels.Reels();
    addMask(reels);

    /*testDate = new Date();
    evenlyChangeValueBetween = new EvenlyChangeValueBetween(test, 2000, justForTest);*/

    exports.button = button = new _button.Button(400, 450, spinButtonSrc);

    app.ticker.add(function (delta) {
        return gameLoop(delta);
    });
}

function gameLoop(delta) {

    for (var i = 0; i < renderLoop.length; i++) {
        renderLoop[i].update(delta);
    }

    reelsMask.beginFill();
    reelsMask.drawRect(0, 0, gameSize.width, gameSize.height);
}

function makeSpin(addSymb) {
    reels.allReels.forEach(function (reel) {
        reel.spin(addSymb);
    });
}

function changeAnimRequireTo(boolean) {
    exports.animationRequired = animationRequired = boolean;
}

function spinOverFiltration() {
    changeAnimRequireTo(false);
    button.disabled = false;
}

function addMask(obj) {
    exports.reelsMask = reelsMask = new PIXI.Graphics();
    app.stage.addChild(reelsMask);
    reelsMask.position.set(0, 0);
    reelsMask.lineStyle(0);
    reelsMask.clear();

    obj.mask = reelsMask;
}

// function justForTest() {
//     console.log(test.start);
//     console.log(new Date() - testDate);
// }

/***/ }),

/***/ "./javascript/evenlyChangeValueBetween.js":
/*!************************************************!*\
  !*** ./javascript/evenlyChangeValueBetween.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EvenlyChangeValueBetween = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EvenlyChangeValueBetween = exports.EvenlyChangeValueBetween = function () {
    function EvenlyChangeValueBetween(obj, period, onComplete) {
        _classCallCheck(this, EvenlyChangeValueBetween);

        this.obj = obj;

        this.end = this.obj.y + this.obj.height;

        this.distance = this.end - this.obj.y;
        this.timeBetweenFrames = 1000 / 60;
        this.numOfFrames = period / this.timeBetweenFrames;

        this.speed = this.distance / this.numOfFrames;
        _engine.renderLoop.push(this);
        this.updateRequired = false;
        this.callBack = onComplete;
    }

    _createClass(EvenlyChangeValueBetween, [{
        key: "update",
        value: function update(delta) {
            if (this.updateRequired) {
                if (this.obj.y < this.end) {
                    this.obj.y += this.speed * delta;
                }
                if (this.obj.y >= this.end) {
                    this.obj.y = this.end;
                    this.updateRequired = false;
                    this.callBack();
                    this.obj.symbolsBeforeResult--;

                    if (this.obj.symbolsBeforeResult > 0 && _engine.animationRequired) {
                        // TODO: should be done on reel level
                        this.makeSpin();
                    } else {
                        (0, _engine.spinOverFiltration)();
                    }
                }
            }
        }
    }, {
        key: "makeSpin",
        value: function makeSpin() {
            this.end = this.obj.y + this.obj.height;
            this.updateRequired = true;
        }
    }]);

    return EvenlyChangeValueBetween;
}();

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

    function Reel(x, y, symbolsNum) {
        _classCallCheck(this, Reel);

        var _this = _possibleConstructorReturn(this, (Reel.__proto__ || Object.getPrototypeOf(Reel)).call(this));

        _this.position.set(x, y);
        _this.step = _engine.gameSize.height / symbolsNum;
        _this.symbols = [];

        _this.addSymbols(symbolsNum + 1);

        _engine.renderLoop.push(_this);
        return _this;
    }

    _createClass(Reel, [{
        key: "addSymbols",
        value: function addSymbols(symbolsNum) {
            for (var i = 0; i < symbolsNum; i++) {

                var index = (0, _utils.randomInt)(0, _engine.possibleSymSrc.length - 1);
                var symbol = new _symbol.Symbol(_engine.possibleSymSrc[index], this.step);
                symbol.position.set(0, this.step * i);
                this.addChild(symbol);
                this.symbols.push(symbol);
            }
        }
    }, {
        key: "spin",
        value: function spin(symbNum) {
            var lastIndex = this.symbols.length - 1;
            var lastSymbol = this.symbols[lastIndex];
            var index = (0, _utils.randomInt)(0, _engine.possibleSymSrc.length - 1);
            // debugger;
            lastSymbol.texture = _engine.textures[_engine.possibleSymSrc[index]];
            lastSymbol.position.set(0, -lastSymbol.height);

            this.symbols.unshift(this.symbols.pop());

            (0, _engine.changeAnimRequireTo)(true);

            this.symbols.forEach(function (symbol) {
                symbol.symbolsBeforeResult = symbNum;
                symbol.twin.makeSpin();
            });
        }
    }, {
        key: "update",
        value: function update(delta) {
            this.symbols.forEach(function (symbol) {
                symbol.update(delta);
            });
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

var _engine = __webpack_require__(/*! ./engine */ "./javascript/engine.js");

var _reel = __webpack_require__(/*! ./reel */ "./javascript/reel.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Reels = exports.Reels = function (_PIXI$Container) {
    _inherits(Reels, _PIXI$Container);

    function Reels() {
        _classCallCheck(this, Reels);

        var _this = _possibleConstructorReturn(this, (Reels.__proto__ || Object.getPrototypeOf(Reels)).call(this));

        _this.width = _engine.gameSize.width;
        _this.height = _engine.gameSize.height;
        _this.allReels = [];

        for (var i = 0; i < _engine.gameSize.reels; i++) {
            var reel = new _reel.Reel(_engine.gameSize.width / _engine.gameSize.reels * i, 0, _engine.gameSize.rows);
            _this.allReels.push(reel);
            _this.addChild(reel);
        }

        _engine.app.stage.addChild(_this);
        return _this;
    }

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

var _evenlyChangeValueBetween = __webpack_require__(/*! ./evenlyChangeValueBetween */ "./javascript/evenlyChangeValueBetween.js");

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

        _this.symbolsBeforeResult = 0;
        _this.speed = 1000;

        _this.twin = new _evenlyChangeValueBetween.EvenlyChangeValueBetween(_this, _this.speed, _this.informParrent);

        return _this;
    }

    _createClass(_Symbol, [{
        key: "update",
        value: function update(delta) {
            this.twin.update(delta);
        }
    }, {
        key: "informParrent",
        value: function informParrent() {
            // TODO: should inform reel that symbol is in the end position
            console.error("end position reached");
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
exports.randomInt = randomInt;
function randomInt(min, max) {
    var rand = min + Math.random() * (max + 1 - min);
    rand = Math.floor(rand);
    return rand;
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9lbmdpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9ldmVubHlDaGFuZ2VWYWx1ZUJldHdlZW4uanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9yZWVsLmpzIiwid2VicGFjazovLy8uL2phdmFzY3JpcHQvcmVlbHMuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC9zeW1ib2wuanMiLCJ3ZWJwYWNrOi8vLy4vamF2YXNjcmlwdC91dGlscy5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJ4IiwieSIsImJ1dHRvblRleHR1cmVzIiwidGV4dHVyZXMiLCJpZGxlIiwiaWRsZVRleHR1cmUiLCJob3ZlclRleHR1cmUiLCJob3ZlciIsImRvd25UZXh0dXJlIiwiZG93biIsImRpc2FibGVkVGV4dHVyZSIsImRpc2FibGVkIiwid2lkdGgiLCJoZWlnaHQiLCJhbmNob3IiLCJzZXQiLCJwb3NpdGlvbiIsImludGVyYWN0aXZlIiwic2V0SGl0QXJlYSIsImFwcCIsInN0YWdlIiwiYWRkQ2hpbGQiLCJ0ZXh0dXJlIiwiYW5pbWF0aW9uUmVxdWlyZWQiLCJyYWRpdXMiLCJoaXRBcmVhIiwiUElYSSIsIkNpcmNsZSIsIlNwcml0ZSIsIm1ha2VTcGluIiwiY2hhbmdlQW5pbVJlcXVpcmVUbyIsInNwaW5PdmVyRmlsdHJhdGlvbiIsIkFwcGxpY2F0aW9uIiwiZG9jdW1lbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJ2aWV3IiwiTG9hZGVyIiwic2hhcmVkIiwiYWRkIiwibG9hZCIsInNldHVwIiwiYmFja2dyb3VuZCIsImJ1dHRvbiIsImdhbWVBcmVhIiwicmVlbHMiLCJyZWVsc01hc2siLCJldmVubHlDaGFuZ2VWYWx1ZUJldHdlZW4iLCJ0ZXN0RGF0ZSIsInBvc3NpYmxlU3ltU3JjIiwic3BpbkJ1dHRvblNyYyIsInJlbmRlckxvb3AiLCJnYW1lU2l6ZSIsInJvd3MiLCJyZXNvdXJjZXMiLCJSZWVscyIsImFkZE1hc2siLCJ0aWNrZXIiLCJnYW1lTG9vcCIsImRlbHRhIiwiaSIsImxlbmd0aCIsInVwZGF0ZSIsImJlZ2luRmlsbCIsImRyYXdSZWN0IiwiYWRkU3ltYiIsImFsbFJlZWxzIiwiZm9yRWFjaCIsInJlZWwiLCJzcGluIiwiYm9vbGVhbiIsIm9iaiIsIkdyYXBoaWNzIiwibGluZVN0eWxlIiwiY2xlYXIiLCJtYXNrIiwiRXZlbmx5Q2hhbmdlVmFsdWVCZXR3ZWVuIiwicGVyaW9kIiwib25Db21wbGV0ZSIsImVuZCIsImRpc3RhbmNlIiwidGltZUJldHdlZW5GcmFtZXMiLCJudW1PZkZyYW1lcyIsInNwZWVkIiwicHVzaCIsInVwZGF0ZVJlcXVpcmVkIiwiY2FsbEJhY2siLCJzeW1ib2xzQmVmb3JlUmVzdWx0IiwiUmVlbCIsInN5bWJvbHNOdW0iLCJzdGVwIiwic3ltYm9scyIsImFkZFN5bWJvbHMiLCJpbmRleCIsInN5bWJvbCIsIlN5bWJvbCIsInN5bWJOdW0iLCJsYXN0SW5kZXgiLCJsYXN0U3ltYm9sIiwidW5zaGlmdCIsInBvcCIsInR3aW4iLCJDb250YWluZXIiLCJ0ZXh0dXJlU3JjIiwidHlwZSIsImluZm9ybVBhcnJlbnQiLCJjb25zb2xlIiwiZXJyb3IiLCJyYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJyYW5kIiwiTWF0aCIsInJhbmRvbSIsImZsb29yIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNB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QVNBLFNBQVQsQ0FBbUJDLEdBQW5CLEVBQXdCQyxHQUF4QixFQUE2QjtBQUNoQyxRQUFJQyxPQUFPRixNQUFNRyxLQUFLQyxNQUFMLE1BQWlCSCxNQUFNLENBQU4sR0FBVUQsR0FBM0IsQ0FBakI7QUFDQUUsV0FBT0MsS0FBS0UsS0FBTCxDQUFXSCxJQUFYLENBQVA7QUFDQSxXQUFPQSxJQUFQO0FBQ0gsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2phdmFzY3JpcHQvZW5naW5lLmpzXCIpO1xuIiwiaW1wb3J0IHt0ZXh0dXJlcywgYXBwLCBtYWtlU3BpbiwgYW5pbWF0aW9uUmVxdWlyZWQsIGNoYW5nZUFuaW1SZXF1aXJlVG99IGZyb20gXCIuL2VuZ2luZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiBleHRlbmRzIFBJWEkuU3ByaXRle1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgYnV0dG9uVGV4dHVyZXMpe1xyXG4gICAgICAgIHN1cGVyKHRleHR1cmVzW2J1dHRvblRleHR1cmVzLmlkbGVdKTtcclxuXHJcbiAgICAgICAgdGhpcy5pZGxlVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmlkbGU7XHJcbiAgICAgICAgdGhpcy5ob3ZlclRleHR1cmUgPSBidXR0b25UZXh0dXJlcy5ob3ZlcjtcclxuICAgICAgICB0aGlzLmRvd25UZXh0dXJlID0gYnV0dG9uVGV4dHVyZXMuZG93bjtcclxuICAgICAgICB0aGlzLmRpc2FibGVkVGV4dHVyZSA9IGJ1dHRvblRleHR1cmVzLmRpc2FibGVkO1xyXG5cclxuICAgICAgICB0aGlzLndpZHRoID0gMTAwO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMTAwO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yLnNldCgwLjUpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRIaXRBcmVhKDY1KTtcclxuXHJcbiAgICAgICAgYXBwLnN0YWdlLmFkZENoaWxkKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBtb3VzZW92ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA/IHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXSA6IHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuaG92ZXJUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBtb3VzZW91dCgpIHtcclxuICAgICAgICB0aGlzLmRpc2FibGVkID8gdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5kaXNhYmxlZFRleHR1cmVdIDogdGhpcy50ZXh0dXJlID0gdGV4dHVyZXNbdGhpcy5pZGxlVGV4dHVyZV07XHJcbiAgICB9XHJcblxyXG4gICAgbW91c2Vkb3duKCkge1xyXG4gICAgICAgIGlmKCFhbmltYXRpb25SZXF1aXJlZCAmJiAgIXRoaXMuZGlzYWJsZWQpe1xyXG4gICAgICAgICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlc1t0aGlzLmRvd25UZXh0dXJlXTtcclxuICAgICAgICAgICAgbWFrZVNwaW4oMik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXTtcclxuICAgICAgICAgICAgY2hhbmdlQW5pbVJlcXVpcmVUbyhmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1vdXNldXAoKSB7XHJcbiAgICAgICAgdGhpcy5kaXNhYmxlZCA/IHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuZGlzYWJsZWRUZXh0dXJlXSA6IHRoaXMudGV4dHVyZSA9IHRleHR1cmVzW3RoaXMuaG92ZXJUZXh0dXJlXTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRIaXRBcmVhIChyYWRpdXMpIHtcclxuICAgICAgICB0aGlzLmhpdEFyZWEgPSBuZXcgUElYSS5DaXJjbGUoMCwgMCwgcmFkaXVzKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7QnV0dG9ufSBmcm9tIFwiLi9idXR0b25cIjtcclxuaW1wb3J0IHtSZWVsfSBmcm9tIFwiLi9yZWVsXCI7XHJcbmltcG9ydCB7RXZlbmx5Q2hhbmdlVmFsdWVCZXR3ZWVufSBmcm9tIFwiLi9ldmVubHlDaGFuZ2VWYWx1ZUJldHdlZW5cIjtcclxuaW1wb3J0IHtSZWVsc30gZnJvbSBcIi4vcmVlbHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhcHAgPSBuZXcgUElYSS5BcHBsaWNhdGlvbiAoe1xyXG4gICAgd2lkdGg6IDgwMCxcclxuICAgIGhlaWdodDogNTAwXHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAudmlldyk7XHJcblxyXG5QSVhJLkxvYWRlci5zaGFyZWRcclxuICAgIC5hZGQoXCIuL2ltYWdlcy9zaGVldC5qc29uXCIpXHJcbiAgICAubG9hZChzZXR1cCk7XHJcblxyXG5leHBvcnQgbGV0IHRleHR1cmVzLFxyXG4gICAgYmFja2dyb3VuZCxcclxuICAgIGJ1dHRvbixcclxuICAgIGdhbWVBcmVhLFxyXG4gICAgcmVlbHMsXHJcbiAgICByZWVsc01hc2ssXHJcbiAgICBldmVubHlDaGFuZ2VWYWx1ZUJldHdlZW4sXHJcbiAgICB0ZXN0RGF0ZTtcclxuXHJcbmV4cG9ydCBjb25zdCBwb3NzaWJsZVN5bVNyYyA9IFtcclxuICAgIFwiYWdlbnQucG5nXCIsXHJcbiAgICBcImJhdG1hbi5wbmdcIixcclxuICAgIFwiY2FwdGFpbi5wbmdcIixcclxuICAgIFwiZGVhZFBvb2wucG5nXCIsXHJcbiAgICBcImdpcmwucG5nXCIsXHJcbiAgICBcImh1bGsucG5nXCIsXHJcbiAgICBcImlyb25NYW4ucG5nXCIsXHJcbiAgICBcInJvYm90LnBuZ1wiLFxyXG4gICAgXCJzcGlkZXJXLnBuZ1wiXHJcbl07XHJcblxyXG5jb25zdCBzcGluQnV0dG9uU3JjID0ge1xyXG4gICAgaWRsZSA6IFwiYnV0dG9uX2lkbGUucG5nXCIsXHJcbiAgICBob3ZlcjogXCJidXR0b25faG92ZXIucG5nXCIsXHJcbiAgICBkb3duIDogXCJidXR0b25fZG93bi5wbmdcIixcclxuICAgIGRpc2FibGVkIDogXCJidXR0b25fZGlzYWJsZWQucG5nXCJcclxufTtcclxuXHJcbmV4cG9ydCBsZXQgYW5pbWF0aW9uUmVxdWlyZWQgPSBmYWxzZTtcclxuZXhwb3J0IGxldCByZW5kZXJMb29wID0gW107XHJcblxyXG5leHBvcnQgY29uc3QgZ2FtZVNpemUgPSB7XHJcbiAgICB3aWR0aDogODAwLFxyXG4gICAgaGVpZ2h0OiA0MDAsXHJcbiAgICByb3dzOiAzLFxyXG4gICAgcmVlbHM6IDVcclxufTtcclxuXHJcbi8qZXhwb3J0IGxldCB0ZXN0ID0ge1xyXG4gICAgc3RhcnQgOiAyMyxcclxuICAgIGVuZCA6IDU3XHJcbn07Ki9cclxuXHJcbmZ1bmN0aW9uIHNldHVwKCkge1xyXG4gICAgdGV4dHVyZXMgPSBQSVhJLkxvYWRlci5zaGFyZWQucmVzb3VyY2VzW1wiLi9pbWFnZXMvc2hlZXQuanNvblwiXS50ZXh0dXJlcztcclxuXHJcbiAgICBiYWNrZ3JvdW5kID0gbmV3IFBJWEkuU3ByaXRlKHRleHR1cmVzW1wiYmFja2dyb3VuZC5wbmdcIl0pO1xyXG4gICAgYXBwLnN0YWdlLmFkZENoaWxkKGJhY2tncm91bmQpO1xyXG5cclxuICAgIHJlZWxzID0gbmV3IFJlZWxzKCk7XHJcbiAgICBhZGRNYXNrKHJlZWxzKTtcclxuXHJcbiAgICAvKnRlc3REYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGV2ZW5seUNoYW5nZVZhbHVlQmV0d2VlbiA9IG5ldyBFdmVubHlDaGFuZ2VWYWx1ZUJldHdlZW4odGVzdCwgMjAwMCwganVzdEZvclRlc3QpOyovXHJcblxyXG4gICAgYnV0dG9uID0gbmV3IEJ1dHRvbig0MDAsIDQ1MCwgc3BpbkJ1dHRvblNyYyk7XHJcblxyXG4gICAgYXBwLnRpY2tlci5hZGQoZGVsdGEgPT4gZ2FtZUxvb3AoZGVsdGEpKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2FtZUxvb3AoZGVsdGEpe1xyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByZW5kZXJMb29wLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICByZW5kZXJMb29wW2ldLnVwZGF0ZShkZWx0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVlbHNNYXNrLmJlZ2luRmlsbCgpO1xyXG4gICAgcmVlbHNNYXNrLmRyYXdSZWN0KDAsIDAsIGdhbWVTaXplLndpZHRoLCBnYW1lU2l6ZS5oZWlnaHQpXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYWtlU3BpbihhZGRTeW1iKSB7XHJcbiAgICByZWVscy5hbGxSZWVscy5mb3JFYWNoKChyZWVsKSA9PiB7XHJcbiAgICAgICAgcmVlbC5zcGluKGFkZFN5bWIpO1xyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUFuaW1SZXF1aXJlVG8gKGJvb2xlYW4pIHtcclxuICAgIGFuaW1hdGlvblJlcXVpcmVkID0gYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNwaW5PdmVyRmlsdHJhdGlvbigpIHtcclxuICAgIGNoYW5nZUFuaW1SZXF1aXJlVG8oZmFsc2UpO1xyXG4gICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRNYXNrKG9iaikge1xyXG4gICAgcmVlbHNNYXNrID0gbmV3IFBJWEkuR3JhcGhpY3MoKTtcclxuICAgIGFwcC5zdGFnZS5hZGRDaGlsZChyZWVsc01hc2spO1xyXG4gICAgcmVlbHNNYXNrLnBvc2l0aW9uLnNldCgwLDApO1xyXG4gICAgcmVlbHNNYXNrLmxpbmVTdHlsZSgwKTtcclxuICAgIHJlZWxzTWFzay5jbGVhcigpO1xyXG5cclxuICAgIG9iai5tYXNrID0gcmVlbHNNYXNrO1xyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBqdXN0Rm9yVGVzdCgpIHtcclxuLy8gICAgIGNvbnNvbGUubG9nKHRlc3Quc3RhcnQpO1xyXG4vLyAgICAgY29uc29sZS5sb2cobmV3IERhdGUoKSAtIHRlc3REYXRlKTtcclxuLy8gfSIsImltcG9ydCB7cmVuZGVyTG9vcCwgc3Bpbk92ZXJGaWx0cmF0aW9uLCBhbmltYXRpb25SZXF1aXJlZH0gZnJvbSBcIi4vZW5naW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgRXZlbmx5Q2hhbmdlVmFsdWVCZXR3ZWVuIHtcclxuICAgIGNvbnN0cnVjdG9yKG9iaiwgcGVyaW9kLCBvbkNvbXBsZXRlKXtcclxuXHJcbiAgICAgICAgdGhpcy5vYmogPSBvYmo7XHJcblxyXG4gICAgICAgIHRoaXMuZW5kID0gdGhpcy5vYmoueSArIHRoaXMub2JqLmhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5kaXN0YW5jZSA9IHRoaXMuZW5kIC0gdGhpcy5vYmoueTtcclxuICAgICAgICB0aGlzLnRpbWVCZXR3ZWVuRnJhbWVzID0gMTAwMC82MDtcclxuICAgICAgICB0aGlzLm51bU9mRnJhbWVzID0gcGVyaW9kL3RoaXMudGltZUJldHdlZW5GcmFtZXM7XHJcblxyXG4gICAgICAgIHRoaXMuc3BlZWQgPSB0aGlzLmRpc3RhbmNlL3RoaXMubnVtT2ZGcmFtZXM7XHJcbiAgICAgICAgcmVuZGVyTG9vcC5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhbGxCYWNrID0gb25Db21wbGV0ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGRlbHRhKXtcclxuICAgICAgICBpZih0aGlzLnVwZGF0ZVJlcXVpcmVkKXtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JqLnkgPCB0aGlzLmVuZCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9iai55ICs9IHRoaXMuc3BlZWQgKiBkZWx0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5vYmoueSA+PSB0aGlzLmVuZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmoueSA9IHRoaXMuZW5kO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVSZXF1aXJlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jYWxsQmFjaygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vYmouc3ltYm9sc0JlZm9yZVJlc3VsdC0tO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm9iai5zeW1ib2xzQmVmb3JlUmVzdWx0ID4gMCAmJiBhbmltYXRpb25SZXF1aXJlZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVE9ETzogc2hvdWxkIGJlIGRvbmUgb24gcmVlbCBsZXZlbFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWFrZVNwaW4oKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzcGluT3ZlckZpbHRyYXRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbWFrZVNwaW4oKSB7XHJcbiAgICAgICAgdGhpcy5lbmQgPSB0aGlzLm9iai55ICsgdGhpcy5vYmouaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudXBkYXRlUmVxdWlyZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7Z2FtZVNpemUsIHBvc3NpYmxlU3ltU3JjLCByZW5kZXJMb29wLCBjaGFuZ2VBbmltUmVxdWlyZVRvLCB0ZXh0dXJlc30gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7cmFuZG9tSW50fSBmcm9tIFwiLi91dGlsc1wiO1xyXG5pbXBvcnQge1N5bWJvbH0gZnJvbSBcIi4vc3ltYm9sXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVlbCBleHRlbmRzIFBJWEkuQ29udGFpbmVye1xyXG4gICAgY29uc3RydWN0b3IoeCwgeSwgc3ltYm9sc051bSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zaXRpb24uc2V0KHgsIHkpO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IGdhbWVTaXplLmhlaWdodC9zeW1ib2xzTnVtO1xyXG4gICAgICAgIHRoaXMuc3ltYm9scyA9IFtdO1xyXG5cclxuICAgICAgICB0aGlzLmFkZFN5bWJvbHMoc3ltYm9sc051bSArIDEpO1xyXG5cclxuICAgICAgICByZW5kZXJMb29wLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkU3ltYm9scyhzeW1ib2xzTnVtKSB7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHN5bWJvbHNOdW07IGkrKykge1xyXG5cclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gcmFuZG9tSW50KDAsIHBvc3NpYmxlU3ltU3JjLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgc3ltYm9sID0gbmV3IFN5bWJvbChwb3NzaWJsZVN5bVNyY1tpbmRleF0sIHRoaXMuc3RlcCk7XHJcbiAgICAgICAgICAgIHN5bWJvbC5wb3NpdGlvbi5zZXQoMCwgdGhpcy5zdGVwICogaSk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGQoc3ltYm9sKTtcclxuICAgICAgICAgICAgdGhpcy5zeW1ib2xzLnB1c2goc3ltYm9sKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3BpbihzeW1iTnVtKXtcclxuICAgICAgICBsZXQgbGFzdEluZGV4ID0gdGhpcy5zeW1ib2xzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgbGV0IGxhc3RTeW1ib2wgPSB0aGlzLnN5bWJvbHNbbGFzdEluZGV4XTtcclxuICAgICAgICBsZXQgaW5kZXggPSByYW5kb21JbnQoMCwgcG9zc2libGVTeW1TcmMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgLy8gZGVidWdnZXI7XHJcbiAgICAgICAgbGFzdFN5bWJvbC50ZXh0dXJlID0gdGV4dHVyZXNbcG9zc2libGVTeW1TcmNbaW5kZXhdXTtcclxuICAgICAgICBsYXN0U3ltYm9sLnBvc2l0aW9uLnNldCgwLCAtbGFzdFN5bWJvbC5oZWlnaHQpO1xyXG5cclxuICAgICAgICB0aGlzLnN5bWJvbHMudW5zaGlmdCh0aGlzLnN5bWJvbHMucG9wKCkpO1xyXG5cclxuICAgICAgICBjaGFuZ2VBbmltUmVxdWlyZVRvKHRydWUpO1xyXG5cclxuICAgICAgICB0aGlzLnN5bWJvbHMuZm9yRWFjaCgoc3ltYm9sKSA9PiB7XHJcbiAgICAgICAgICAgIHN5bWJvbC5zeW1ib2xzQmVmb3JlUmVzdWx0ID0gc3ltYk51bTtcclxuICAgICAgICAgICAgc3ltYm9sLnR3aW4ubWFrZVNwaW4oKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICB0aGlzLnN5bWJvbHMuZm9yRWFjaCgoc3ltYm9sKSA9PiB7XHJcbiAgICAgICAgICAgIHN5bWJvbC51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQge2dhbWVTaXplLCBhcHAsIGdhbWVBcmVhfSBmcm9tIFwiLi9lbmdpbmVcIjtcclxuaW1wb3J0IHtSZWVsfSBmcm9tIFwiLi9yZWVsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmVlbHMgZXh0ZW5kcyBQSVhJLkNvbnRhaW5lcntcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgIHRoaXMud2lkdGggPSBnYW1lU2l6ZS53aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGdhbWVTaXplLmhlaWdodDtcclxuICAgICAgICB0aGlzLmFsbFJlZWxzID0gW107XHJcblxyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lU2l6ZS5yZWVsczsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IHJlZWwgPSBuZXcgUmVlbChnYW1lU2l6ZS53aWR0aC9nYW1lU2l6ZS5yZWVscyAqIGksMCxnYW1lU2l6ZS5yb3dzKTtcclxuICAgICAgICAgICAgdGhpcy5hbGxSZWVscy5wdXNoKHJlZWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZENoaWxkKHJlZWwpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhcHAuc3RhZ2UuYWRkQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHt0ZXh0dXJlcywgYW5pbWF0aW9uUmVxdWlyZWQsIHNwaW5PdmVyRmlsdHJhdGlvbn0gZnJvbSBcIi4vZW5naW5lXCI7XHJcbmltcG9ydCB7RXZlbmx5Q2hhbmdlVmFsdWVCZXR3ZWVufSBmcm9tIFwiLi9ldmVubHlDaGFuZ2VWYWx1ZUJldHdlZW5cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTeW1ib2wgZXh0ZW5kcyBQSVhJLlNwcml0ZXtcclxuICAgIGNvbnN0cnVjdG9yKHRleHR1cmVTcmMsIHdpZHRoKXtcclxuICAgICAgICBzdXBlcih0ZXh0dXJlc1t0ZXh0dXJlU3JjXSk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdGV4dHVyZVNyYztcclxuXHJcbiAgICAgICAgdGhpcy5zeW1ib2xzQmVmb3JlUmVzdWx0ID0gMDtcclxuICAgICAgICB0aGlzLnNwZWVkID0gMTAwMDtcclxuXHJcbiAgICAgICAgdGhpcy50d2luID0gbmV3IEV2ZW5seUNoYW5nZVZhbHVlQmV0d2Vlbih0aGlzLCB0aGlzLnNwZWVkLCB0aGlzLmluZm9ybVBhcnJlbnQpXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkZWx0YSkge1xyXG4gICAgICAgIHRoaXMudHdpbi51cGRhdGUoZGVsdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGluZm9ybVBhcnJlbnQoKSB7XHJcbiAgICAgICAgLy8gVE9ETzogc2hvdWxkIGluZm9ybSByZWVsIHRoYXQgc3ltYm9sIGlzIGluIHRoZSBlbmQgcG9zaXRpb25cclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiZW5kIHBvc2l0aW9uIHJlYWNoZWRcIik7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gcmFuZG9tSW50KG1pbiwgbWF4KSB7XHJcbiAgICBsZXQgcmFuZCA9IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSAtIG1pbik7XHJcbiAgICByYW5kID0gTWF0aC5mbG9vcihyYW5kKTtcclxuICAgIHJldHVybiByYW5kO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==