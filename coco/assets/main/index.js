System.register("chunks:///_virtual/EnvCheck.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Button, sys, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      sys = module.sys;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "1cea6lVxEhCg7XcsVvbU5NJ", "EnvCheck", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var EnvCheck = exports('EnvCheck', (_dec = ccclass('EnvCheck'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(EnvCheck, _Component);
        function EnvCheck() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "popUpNode", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "titleLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "messageLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "proceedButtonNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "targetStartPanel", _descriptor5, _assertThisInitialized(_this));
          // ← 指向你的 StartPanel（MiniHorse 用的）
          _this.reasons = [];
          return _this;
        }
        var _proto = EnvCheck.prototype;
        _proto.onLoad = function onLoad() {
          var _this$proceedButtonNo,
            _this2 = this;
          // 預設：先鎖住開始面板
          if (this.targetStartPanel) this.targetStartPanel.active = false;
          var ok = this.runChecks();
          this.renderUI(ok);

          // 綁定「我了解，繼續」按鈕
          var btn = (_this$proceedButtonNo = this.proceedButtonNode) == null ? void 0 : _this$proceedButtonNo.getComponent(Button);
          if (btn) {
            btn.interactable = true;
            btn.node.on('click', function () {
              return _this2.onProceed(ok);
            });
          }
        };
        _proto.runChecks = function runChecks() {
          this.reasons.length = 0;

          // 1) 手機裝置
          var isMobile = sys.isMobile || /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

          // 2) 瀏覽器（Safari / Chrome）
          var ua = navigator.userAgent;
          var isIOS = /iPad|iPhone|iPod/.test(ua);
          // iOS 上的所有瀏覽器都是 WebKit，但我們仍允許標稱的 Safari/Chrome
          var isSafari = /Safari/.test(ua) && !/Chrome|CriOS|EdgiOS|OPiOS/i.test(ua);
          var isChrome = /Chrome|CriOS/i.test(ua);
          var isAllowedBrowser = isSafari || isChrome;

          // 避免嵌入式 WebView（常見：FB/IG/LINE）
          var isInApp = /FBAN|FBAV|Instagram|Line\/|Line/i.test(ua);

          // 3) HTTPS（或本機）
          var isHTTPS = location.protocol === 'https:' || location.hostname === 'localhost';

          // 4) 感測器可用性（至少能監聽 devicemotion）
          var motionAvailable = typeof window !== 'undefined' && 'ondevicemotion' in window;
          if (!isMobile) this.reasons.push('必須使用「手機或平板」裝置。');
          if (!isAllowedBrowser) this.reasons.push('請使用「Safari」或「Chrome」瀏覽器。');
          if (isInApp) this.reasons.push('請以「Safari/Chrome」開啟（避免在 LINE/FB/IG 內建瀏覽器）。');
          if (!isHTTPS) this.reasons.push('請使用「HTTPS」網址（或本機環境）。');
          if (!motionAvailable) this.reasons.push('此裝置/瀏覽器不支援「裝置動態 (Devicemotion)」。');
          return this.reasons.length === 0;
        };
        _proto.renderUI = function renderUI(browserOk) {
          if (browserOk) {
            this.popUpNode.active = false;
            if (this.targetStartPanel) this.targetStartPanel.active = true;
            console.log(browserOk);
            return;
          }
          this.popUpNode.active = true;
          console.log(browserOk);
          if (this.titleLabel) {
            this.titleLabel.string = browserOk ? '環境檢查通過' : '請使用建議環境';
          }

          // const tips = [
          //   '1. 必須使用手機或平板裝置',
          //   '2. 建議使用 Safari（iOS）或 Chrome（Android/iOS）遊玩',
          //   '3. 使用 HTTPS 網址（避免 http）',
          //   '4. 若在 App 內嵌瀏覽器（LINE/FB/IG）開啟，請改用 Safari/Chrome',
          //   '5. 稍後按下開始時，系統會請求「感測器」使用權限',
          // ].join('\n');

          var body = browserOk ? '您的裝置看起來可以正常遊玩。\n\n' : '偵測到以下問題：\n- ' + this.reasons.join('\n- ');
          if (this.messageLabel) this.messageLabel.string = body;
        };
        _proto.onProceed = function onProceed(ok) {
          console.log(ok);
          this.popUpNode.active = false;
          if (this.targetStartPanel) this.targetStartPanel.active = true;
        };
        return EnvCheck;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "popUpNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "titleLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "messageLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "proceedButtonNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "targetStartPanel", [_dec6], {
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

System.register("chunks:///_virtual/main", ['./EnvCheck.ts', './MiniHorse.ts'], function () {
  return {
    setters: [null, null],
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
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "45d49rPkZpCUb3+vvEPIhdb", "MiniHorse", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MiniHorse = exports('MiniHorse', (_dec = ccclass('MiniHorse'), _dec2 = property({
        type: ProgressBar
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Label
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
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
          _initializerDefineProperty(_this, "logLabel", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "horse", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startPanel", _descriptor5, _assertThisInitialized(_this));
          _this.timeLeft = 30;
          _this.isPlaying = false;
          _this.progress = 0;
          _this.lastShakeAt = 0;
          _this.onDeviceMotion = function (event) {
            if (!_this.isPlaying) return;
            var acc = event.accelerationIncludingGravity;
            if (!acc) return;
            var magnitude = Math.abs(acc.x || 0) + Math.abs(acc.y || 0) + Math.abs(acc.z || 0);
            var now = performance.now();
            if (magnitude > 18 && now - _this.lastShakeAt > 60) {
              // 門檻/節流可依實機調整
              _this.lastShakeAt = now;
              _this.updateProgress(_this.progress + 0.02);
            }
          };
          return _this;
        }
        var _proto = MiniHorse.prototype;
        // ← 修正名稱
        _proto.setLog = function setLog(msg) {
          if (this.logLabel) this.logLabel.string = msg;
        };
        _proto.onLoad = function onLoad() {
          // 初始化 UI（不要自動 start）
          this.updateProgress(0);
          if (this.timerLabel) this.timerLabel.string = " 倒數秒數: " + '30';

          // 顯示開始面板，等待使用者點擊
          if (this.startPanel) this.startPanel.active = true;
        }

        // Start 按鈕的 onClick 綁這個方法
        ;

        _proto.onClickStart = /*#__PURE__*/
        function () {
          var _onClickStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  console.log("Start");
                  _context.next = 3;
                  return this.enableMotion();
                case 3:
                  // <- 使用者互動觸發的授權
                  this.startGame();
                case 4:
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
            var isIOS, dm, dor, res, res2;
            return _regeneratorRuntime().wrap(function _callee2$(_context2) {
              while (1) switch (_context2.prev = _context2.next) {
                case 0:
                  isIOS = sys.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent);
                  dm = globalThis.DeviceMotionEvent;
                  dor = globalThis.DeviceOrientationEvent;
                  _context2.prev = 3;
                  if (!isIOS) {
                    _context2.next = 17;
                    break;
                  }
                  if (!(dm && typeof dm.requestPermission === 'function')) {
                    _context2.next = 11;
                    break;
                  }
                  this.setLog('Requesting DeviceMotion permission…');
                  _context2.next = 9;
                  return dm.requestPermission();
                case 9:
                  res = _context2.sent;
                  this.setLog("DeviceMotion: " + res);
                case 11:
                  if (!(dor && typeof dor.requestPermission === 'function')) {
                    _context2.next = 17;
                    break;
                  }
                  this.setLog('Requesting DeviceOrientation permission…');
                  _context2.next = 15;
                  return dor.requestPermission();
                case 15:
                  res2 = _context2.sent;
                  this.setLog("DeviceOrientation: " + res2);
                case 17:
                  _context2.next = 23;
                  break;
                case 19:
                  _context2.prev = 19;
                  _context2.t0 = _context2["catch"](3);
                  console.warn('Motion permission request error:', _context2.t0);
                  this.setLog('Permission error, check Safari setting / HTTPS');
                case 23:
                  // 綁定 devicemotion（若支援）
                  if (typeof window !== 'undefined' && 'ondevicemotion' in window) {
                    this.setLog('Binding devicemotion…');
                    window.addEventListener('devicemotion', this.onDeviceMotion, {
                      passive: true
                    });
                  } else {
                    this.setLog('devicemotion not supported in this environment.');
                  }
                case 24:
                case "end":
                  return _context2.stop();
              }
            }, _callee2, this, [[3, 19]]);
          }));
          function enableMotion() {
            return _enableMotion.apply(this, arguments);
          }
          return enableMotion;
        }();
        _proto.startGame = function startGame() {
          this.isPlaying = true;
          this.timeLeft = 30;
          this.updateProgress(0);
          if (this.timerLabel) this.timerLabel.string = " 倒數秒數: " + '30';
          if (this.startPanel) this.startPanel.active = false;
        };
        _proto.endGame = function endGame() {
          this.isPlaying = false;
          if (this.startPanel) this.startPanel.active = true;
          if (typeof window !== 'undefined') {
            window.removeEventListener('devicemotion', this.onDeviceMotion);
          }
        };
        _proto.update = function update(dt) {
          if (!this.isPlaying) return;
          this.timeLeft -= dt;
          if (this.timerLabel) {
            this.timerLabel.string = " 倒數秒數: " + Math.max(0, Math.ceil(this.timeLeft)).toString();
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "logLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "horse", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "startPanel", [_dec6], {
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