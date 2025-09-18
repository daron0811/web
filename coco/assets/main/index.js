System.register("chunks:///_virtual/main", ['./MiniHorse.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MiniHorse.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, ProgressBar, Label, Node, Component, sys;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ProgressBar = module.ProgressBar;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
      sys = module.sys;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4;
      cclegacy._RF.push({}, "45d49rPkZpCUb3+vvEPIhdb", "MiniHorse", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MiniHorse = exports('MiniHorse', (_dec = ccclass('MiniHorse'), _dec2 = property({
        type: ProgressBar
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node,
        tooltip: '點擊以開始的UI（授權會綁在此按鈕）'
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MiniHorse, _Component);
        function MiniHorse() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "energyProgress", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timerLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "horse", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startPanel", _descriptor4, _assertThisInitialized(_this));
          _this.timeLeft = 30;
          _this.isPlaying = false;
          _this.progress = 0;
          _this.lastShakeAt = 0;
          // 使用箭頭函式綁定 this
          _this.onDeviceMotion = function (event) {
            if (!_this.isPlaying) return;
            var acc = event.accelerationIncludingGravity;
            if (!acc) return;

            // 基本搖晃強度估算（可依裝置調整閾值）
            var magnitude = Math.abs(acc.x || 0) + Math.abs(acc.y || 0) + Math.abs(acc.z || 0);
            var now = performance.now();

            // 以節流方式計數，避免極高頻率造成誤差
            if (magnitude > 18 && now - _this.lastShakeAt > 60) {
              _this.lastShakeAt = now;
              _this.updateProgress(_this.progress + 0.02); // 每次有效搖動推進 2%
            }
          };

          return _this;
        }
        var _proto = MiniHorse.prototype;
        _proto.onLoad = function onLoad() {
          // 初始化 UI
          this.updateProgress(0);
          if (this.timerLabel) this.timerLabel.string = '30';
          this.onClickStart();
        };
        _proto.onClickStart = /*#__PURE__*/function () {
          var _onClickStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.enableMotion();
                case 2:
                  this.startGame();
                case 3:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function onClickStart() {
            return _onClickStart.apply(this, arguments);
          }
          return onClickStart;
        }();
        _proto.enableMotion = /*#__PURE__*/function () {
          var _enableMotion = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
            var isIOS, dm, dor;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  // 必須在 HTTPS + 真機瀏覽器執行
                  // 1) iOS (Safari 13+) 需要 requestPermission
                  isIOS = sys.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent);
                  dm = globalThis.DeviceMotionEvent;
                  dor = globalThis.DeviceOrientationEvent;
                  _context2.prev = 3;
                  if (!isIOS) {
                    _context2.next = 11;
                    break;
                  }
                  if (!(dm && typeof dm.requestPermission === 'function')) {
                    _context2.next = 8;
                    break;
                  }
                  _context2.next = 8;
                  return dm.requestPermission();
                case 8:
                  if (!(dor && typeof dor.requestPermission === 'function')) {
                    _context2.next = 11;
                    break;
                  }
                  _context2.next = 11;
                  return dor.requestPermission();
                case 11:
                  _context2.next = 16;
                  break;
                case 13:
                  _context2.prev = 13;
                  _context2.t0 = _context2["catch"](3);
                  console.warn('Motion permission request error:', _context2.t0);
                case 16:
                  // 綁定事件（若不支援則給出警告）
                  if (typeof window !== 'undefined' && 'ondevicemotion' in window) {
                    window.addEventListener('devicemotion', this.onDeviceMotion, false);
                  } else {
                    console.warn('devicemotion not supported in this environment.');
                  }
                case 17:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[3, 13]]);
          }));
          function enableMotion() {
            return _enableMotion.apply(this, arguments);
          }
          return enableMotion;
        }();
        _proto.startGame = function startGame() {
          this.isPlaying = true;
          this.timeLeft = 30;
          this.progress = 0;
          this.updateProgress(0);
          if (this.timerLabel) this.timerLabel.string = '30';
          if (this.startPanel) this.startPanel.active = false;
        };
        _proto.endGame = function endGame() {
          this.isPlaying = false;
          // 收尾：可在此彈出成功/失敗面板
          if (this.startPanel) this.startPanel.active = true;
          // 移除監聽，避免重複疊加
          if (typeof window !== 'undefined') {
            window.removeEventListener('devicemotion', this.onDeviceMotion);
          }
        };
        _proto.update = function update(dt) {
          if (!this.isPlaying) return;
          this.timeLeft -= dt;
          if (this.timerLabel) {
            this.timerLabel.string = Math.max(0, Math.ceil(this.timeLeft)).toString();
          }
          if (this.timeLeft <= 0) {
            this.endGame();
          }
        };
        _proto.updateProgress = function updateProgress(v) {
          this.progress = Math.max(0, Math.min(1, v));
          if (this.energyProgress) this.energyProgress.progress = this.progress;
          if (this.progress >= 1) {
            this.endGame();
          }
        };
        return MiniHorse;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "energyProgress", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timerLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "horse", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "startPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});