System.register("chunks:///_virtual/Countdown.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Component, Vec3, tween;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Component = module.Component;
      Vec3 = module.Vec3;
      tween = module.tween;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "5aa80x/yXRA2pG8/60gXYCf", "Countdown", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var Countdown = exports('Countdown', (_dec = ccclass('Countdown'), _dec2 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(Countdown, _Component);
        function Countdown() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "countdownLabel", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = Countdown.prototype;
        _proto.onLoad = function onLoad() {
          this.play(function () {
            console.log("GOOOOOO!");
          });
        };
        _proto.play = function play(callback) {
          var _this2 = this;
          if (!this.countdownLabel) return;
          var texts = ["3", "2", "1", "GO"];
          var index = 0;
          var showNext = function showNext() {
            if (index >= texts.length) {
              if (callback) callback();
              return;
            }
            var text = texts[index];
            index++;
            _this2.countdownLabel.string = text;
            _this2.countdownLabel.node.scale = new Vec3(0, 0, 0);
            tween(_this2.countdownLabel.node).to(1.0, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: "backOut"
            }) // 由小到大
            // .delay(0.3) // 停一下
            .call(function () {
              showNext();
            }).start();
          };
          showNext();
        };
        return Countdown;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "countdownLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DescPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FadeGroup.ts', './MainGame01.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Component, FadeGroup, MainGame01;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      FadeGroup = module.FadeGroup;
    }, function (module) {
      MainGame01 = module.MainGame01;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "a8f986Ra1lEo4r9LypeqzAo", "DescPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DescPanel = exports('DescPanel', (_dec = ccclass('DescPanel'), _dec2 = property(FadeGroup), _dec3 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DescPanel, _Component);
        function DescPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fadeGroup", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startBtn", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DescPanel.prototype;
        _proto.onLoad = function onLoad() {
          this.startBtn.interactable = true;
          this.startBtn.node.on(Button.EventType.CLICK, this.onClickStart, this);
        };
        _proto.onClickStart = function onClickStart() {
          var _this2 = this;
          // 禁用按鈕，防止二次點擊
          this.startBtn.interactable = false;

          // 用類別取得，比字串穩
          var fadeGroup = this.getComponent(FadeGroup);
          if (!fadeGroup) {
            console.warn('[MainGame01] titlePage 上沒有掛 FadeGroup 元件');
            return;
          }
          fadeGroup.fadeOut(0.5, function () {
            console.log('淡出完成');
            MainGame01.instance.ShowGame();
            _this2.node.active = false;
          });
        };
        return DescPanel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fadeGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startBtn", [_dec3], {
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

System.register("chunks:///_virtual/DialogPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FadeGroup.ts', './TypingText.ts', './MainGame01.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Animation, input, Input, Component, FadeGroup, TypingText, TypingEvents, MainGame01;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Animation = module.Animation;
      input = module.input;
      Input = module.Input;
      Component = module.Component;
    }, function (module) {
      FadeGroup = module.FadeGroup;
    }, function (module) {
      TypingText = module.TypingText;
      TypingEvents = module.TypingEvents;
    }, function (module) {
      MainGame01 = module.MainGame01;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "8e7f4ZrfqNEIr+TG3S+t2+S", "DialogPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DialogPanel = exports('DialogPanel', (_dec = ccclass('DialogPanel'), _dec2 = property(FadeGroup), _dec3 = property(Animation), _dec4 = property(FadeGroup), _dec5 = property(TypingText), _dec6 = property(String), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DialogPanel, _Component);
        function DialogPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "fadeGroup", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "playerAnim", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dialogBox", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dialogNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dialogText", _descriptor5, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DialogPanel.prototype;
        _proto.onLoad = function onLoad() {
          if (!this.fadeGroup) {
            this.fadeGroup = this.getComponent(FadeGroup);
          }
          this.show();
        };
        _proto.show = function show() {
          var _this$dialogNode,
            _this2 = this;
          console.log("DialogPanel show");
          (_this$dialogNode = this.dialogNode) == null || _this$dialogNode.clearText();
          this.node.active = true;
          this.fadeGroup.uiOpacity.opacity = 0;
          this.fadeGroup.fadeIn(2.0, function () {
            _this2.playerAnim.play("FadeIn");

            // 監聽一次動畫完成
            _this2.playerAnim.once(Animation.EventType.FINISHED, function () {
              _this2.dialogBox.uiOpacity.opacity = 0;
              _this2.dialogBox.fadeIn(1.0, function () {
                console.log("Dialog FadeIn 完成");
                _this2.setDialogText();
              });
            }, _this2);
          });
        };
        _proto.setDialogText = function setDialogText() {
          // this.dialogNode!.charsPerSecond = 28;
          this.dialogNode.bus.on(TypingEvents.LINE_DONE, this.onLineDone, this);
          this.dialogNode.bus.on(TypingEvents.ALL_DONE, this.onAllDone, this);
          this.dialogNode.playLines([this.dialogText.toString()]);
        };
        _proto.onLineDone = function onLineDone() {/* 顯示「下一句」按鈕，或自動延遲進下一句（這裡已自動） */};
        _proto.onAllDone = function onAllDone() {
          /* 對接你的 FSM：切到 HowTo 或 Playing 等狀態 */

          input.on(Input.EventType.TOUCH_START, this.onAnyTouch, this);

          // 如果要支援滑鼠，也可加上 MOUSE_DOWN
          input.on(Input.EventType.MOUSE_DOWN, this.onAnyTouch, this);
        };
        _proto.onAnyTouch = function onAnyTouch(event) {
          console.log("螢幕被點擊，進到下一步");
          this.goNext();
        };
        _proto.goNext = function goNext() {
          var _this3 = this;
          // 這裡可以呼叫你的 DialogPanel.next() 或切換場景
          input.off(Input.EventType.TOUCH_START, this.onAnyTouch, this);
          input.off(Input.EventType.MOUSE_DOWN, this.onAnyTouch, this);
          this.fadeGroup.fadeOut(0.5, function () {
            console.log('淡出完成');
            MainGame01.instance.ShowDesc();
            _this3.node.active = false;
          });
        };
        _proto.onDestroy = function onDestroy() {
          input.off(Input.EventType.TOUCH_START, this.onAnyTouch, this);
          input.off(Input.EventType.MOUSE_DOWN, this.onAnyTouch, this);
        };
        _proto.start = function start() {};
        _proto.update = function update(deltaTime) {};
        return DialogPanel;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "fadeGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "playerAnim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "dialogBox", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dialogNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dialogText", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/DialogueExample.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './TypingText.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Component, TypingText, TypingEvents;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Component = module.Component;
    }, function (module) {
      TypingText = module.TypingText;
      TypingEvents = module.TypingEvents;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "e36d3is+6dKGb+6eKCxiU/3", "DialogueExample", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DialogueExample = exports('DialogueExample', (_dec = ccclass('DialogueExample'), _dec2 = property(TypingText), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DialogueExample, _Component);
        function DialogueExample() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "typer", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = DialogueExample.prototype;
        _proto.start = function start() {
          this.typer.charsPerSecond = 28;
          this.typer.bus.on(TypingEvents.LINE_DONE, this.onLineDone, this);
          this.typer.bus.on(TypingEvents.ALL_DONE, this.onAllDone, this);
          this.typer.playLines(['嗨，探員。歡迎加入任務！', '請握緊手機，準備開始運動吧！', '<color=#FFD166>小提醒：</color> 使用 Safari 或 Chrome 效果最佳。']);
        };
        _proto.onLineDone = function onLineDone() {/* 顯示「下一句」按鈕，或自動延遲進下一句（這裡已自動） */};
        _proto.onAllDone = function onAllDone() {/* 對接你的 FSM：切到 HowTo 或 Playing 等狀態 */};
        return DialogueExample;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "typer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

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

System.register("chunks:///_virtual/FadeGroup.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UIOpacity, tween, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "b7389kiXWxN1ov64R16vEZF", "FadeGroup", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FadeGroup = exports('FadeGroup', (_dec = ccclass('FadeGroup'), _dec2 = property(UIOpacity), _dec3 = property(Number), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FadeGroup, _Component);
        function FadeGroup() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "uiOpacity", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "duration", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FadeGroup.prototype;
        _proto.onLoad = function onLoad() {
          if (this.uiOpacity === null) {
            this.uiOpacity = this.getComponent(UIOpacity);
          }

          // // 測試：開場自動淡入，結束後印訊息
          // this.fadeIn(this.duration, () => {
          //     console.log("淡入完成！");
          // });
        };

        _proto.fadeIn = function fadeIn(duration, callback) {
          if (duration === void 0) {
            duration = this.duration;
          }
          tween(this.uiOpacity).to(duration, {
            opacity: 255
          }).call(function () {
            if (callback) callback();
          }).start();
        };
        _proto.fadeOut = function fadeOut(duration, callback) {
          if (duration === void 0) {
            duration = this.duration;
          }
          tween(this.uiOpacity).to(duration, {
            opacity: 0
          }).call(function () {
            if (callback) callback();
          }).start();
        };
        return FadeGroup;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiOpacity", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "duration", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/FailPanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainGame01.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, Component, MainGame01;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
      Component = module.Component;
    }, function (module) {
      MainGame01 = module.MainGame01;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "692bdtnGytGWLjzulzUIQbO", "FailPanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var FailPanel = exports('FailPanel', (_dec = ccclass('FailPanel'), _dec2 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(FailPanel, _Component);
        function FailPanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "retryBtn", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = FailPanel.prototype;
        _proto.start = function start() {
          this.retryBtn.node.on(Button.EventType.CLICK, this.onRetryGame, this);
        };
        _proto.onRetryGame = function onRetryGame() {
          MainGame01.instance.RestartGame();
        };
        _proto.update = function update(deltaTime) {};
        return FailPanel;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "retryBtn", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/GamePanel.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './MainGame01.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Sprite, Label, Node, Component, Vec3, tween, sys, MainGame01;
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
      Sprite = module.Sprite;
      Label = module.Label;
      Node = module.Node;
      Component = module.Component;
      Vec3 = module.Vec3;
      tween = module.tween;
      sys = module.sys;
    }, function (module) {
      MainGame01 = module.MainGame01;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "45d49rPkZpCUb3+vvEPIhdb", "GamePanel", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var GamePanel = exports('GamePanel', (_dec = ccclass('GamePanel'), _dec2 = property({
        type: Sprite
      }), _dec3 = property({
        type: Label
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node,
        tooltip: '點擊以開始的UI（授權會綁在此按鈕）'
      }), _dec6 = property(Label), _dec7 = property({
        type: Label
      }), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(GamePanel, _Component);
        function GamePanel() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "energyProgress", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "timerLabel", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "horse", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "readyPanel", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "countdownLabel", _descriptor5, _assertThisInitialized(_this));
          _this.timeLeft = 30;
          _this.isPlaying = false;
          _this.progress = 0;
          _this.lastShakeAt = 0;
          _initializerDefineProperty(_this, "logLabel", _descriptor6, _assertThisInitialized(_this));
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
        var _proto = GamePanel.prototype;
        // ← 修正名稱
        _proto.setLog = function setLog(msg) {
          if (this.logLabel) this.logLabel.string = msg;
        };
        _proto.onLoad = function onLoad() {
          // 初始化 UI（不要自動 start）
          this.updateProgress(0);
          if (this.timerLabel) this.timerLabel.string = " 倒數秒數: " + '30';

          // 顯示開始面板，等待使用者點擊
          // if (this.startPanel) this.startPanel.active = true;
        };

        _proto.onEnable = function onEnable() {
          this.onClickStart();
        }

        // start() {
        //     //初始就開始遊戲
        //     this.onClickStart();
        // }

        // Start 按鈕的 onClick 綁這個方法
        ;

        _proto.onClickStart = /*#__PURE__*/
        function () {
          var _onClickStart = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var _this2 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return this.enableMotion();
                case 2:
                  // <- 使用者互動觸發的授權
                  this.readyPanel.active = true;
                  this.ReadyTween(function () {
                    _this2.startGame();
                  });
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
        }() //啟動加速度計授權
        ;

        _proto.enableMotion = /*#__PURE__*/
        function () {
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
        }() //播放準備動畫效果
        ;

        _proto.ReadyTween = function ReadyTween(callback) {
          var _this3 = this;
          if (!this.countdownLabel) return;
          var texts = ["3", "2", "1", "GO"];
          var index = 0;
          var showNext = function showNext() {
            if (index >= texts.length) {
              if (callback) callback();
              return;
            }
            var text = texts[index];
            index++;
            _this3.countdownLabel.string = text;
            _this3.countdownLabel.node.scale = new Vec3(0, 0, 0);
            tween(_this3.countdownLabel.node).to(1.0, {
              scale: new Vec3(1, 1, 1)
            }, {
              easing: "backOut"
            }) // 由小到大
            // .delay(0.3) // 停一下
            .call(function () {
              showNext();
            }).start();
          };
          showNext();
        };
        _proto.startGame = function startGame() {
          this.readyPanel.active = false;
          this.isPlaying = true;
          this.timeLeft = 30;
          this.updateProgress(0);
          if (this.timerLabel) this.timerLabel.string = '30';
          if (this.readyPanel) this.readyPanel.active = false;
        };
        _proto.endGame = function endGame() {
          this.isPlaying = false;
          if (typeof window !== 'undefined') {
            window.removeEventListener('devicemotion', this.onDeviceMotion);
          }
          MainGame01.instance.ShowEnd(this.progress >= 1);
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
          if (this.energyProgress) this.energyProgress.fillRange = this.progress;
          if (this.progress >= 1) {
            this.endGame();
          }
        };
        return GamePanel;
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
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "readyPanel", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "countdownLabel", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "logLabel", [_dec7], {
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

System.register("chunks:///_virtual/main", ['./EnvCheck.ts', './GamePanel.ts', './MainGame01.ts', './DialogueExample.ts', './DescPanel.ts', './DialogPanel.ts', './FailPanel.ts', './Countdown.ts', './StateMachine.ts', './UseState.ts', './TypingText.ts', './FadeGroup.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/MainGame01.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './FadeGroup.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Node, Button, EventHandler, Component, FadeGroup;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Button = module.Button;
      EventHandler = module.EventHandler;
      Component = module.Component;
    }, function (module) {
      FadeGroup = module.FadeGroup;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _class3;
      cclegacy._RF.push({}, "f6f104OsZtKtpZrrcDM1Sn3", "MainGame01", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var MainGame01 = exports('MainGame01', (_dec = ccclass('MainGame01'), _dec2 = property(Node), _dec3 = property(Button), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(MainGame01, _Component);
        function MainGame01() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          //開始標題頁面
          _initializerDefineProperty(_this, "titlePage", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "startBtn", _descriptor2, _assertThisInitialized(_this));
          //故事對話頁面
          _initializerDefineProperty(_this, "storyPage", _descriptor3, _assertThisInitialized(_this));
          //遊戲說明
          _initializerDefineProperty(_this, "descPage", _descriptor4, _assertThisInitialized(_this));
          //遊戲頁面
          _initializerDefineProperty(_this, "gamePage", _descriptor5, _assertThisInitialized(_this));
          //成功頁面
          _initializerDefineProperty(_this, "successPage", _descriptor6, _assertThisInitialized(_this));
          //失敗頁面
          _initializerDefineProperty(_this, "failPage", _descriptor7, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = MainGame01.prototype;
        _proto.onLoad = function onLoad() {
          if (MainGame01._instance && MainGame01._instance !== this) {
            // 如果已經有別的實例存在，刪掉多餘的
            this.node.destroy();
            return;
          }
          MainGame01._instance = this;

          // 安全檢查
          if (!this.titlePage) {
            console.warn('[MainGame01] titlePage 未指定');
            return;
          }
          if (!this.startBtn) {
            console.warn('[MainGame01] startBtn 未指定');
            return;
          }
          this.titlePage.active = true;

          // 方式 A：用 clickEvents（沿用你的寫法，但修正 component 名稱）
          var eh = new EventHandler();
          eh.target = this.node; // 這個 node 上要掛有 MainGame01
          eh.component = 'MainGame01'; // ⚠️ 要填 @ccclass 的名稱
          eh.handler = 'onClickStart';
          // eh.customEventData = 'optional';
          this.startBtn.clickEvents.push(eh);

          // 方式 B（更直覺）：直接監聽 Button 事件（2選1即可）
          // this.startBtn.node.on(Button.EventType.CLICK, this.onClickStart, this);
        };

        _proto.init = function init() {
          this.startBtn.interactable = true;
        };
        _proto.onClickStart = function onClickStart() {
          var _this2 = this;
          if (!this.titlePage) return;
          if (!this.startBtn) return;

          // 禁用按鈕，防止二次點擊
          this.startBtn.interactable = false;

          // 用類別取得，比字串穩
          var fadeGroup = this.titlePage.getComponent(FadeGroup);
          if (!fadeGroup) {
            console.warn('[MainGame01] titlePage 上沒有掛 FadeGroup 元件');
            return;
          }
          fadeGroup.fadeOut(0.5, function () {
            console.log('淡出完成');
            _this2.storyPage.active = true;
            _this2.titlePage.active = false;
          });
        };
        _proto.ShowDesc = function ShowDesc() {
          this.descPage.active = true;
          var fadeGroup = this.descPage.getComponent(FadeGroup);
          fadeGroup.fadeIn(2.0);
        };
        _proto.ShowGame = function ShowGame() {
          this.gamePage.active = true;
          // const fadeGroup = this.gamePage.getComponent(FadeGroup);
          // fadeGroup.fadeIn(2.0);
        };

        _proto.ShowEnd = function ShowEnd(success) {
          this.gamePage.active = false;
          this.successPage.active = success;
          this.failPage.active = !success;
          // success ?  : this.failPage.active = true;
        };

        _proto.RestartGame = function RestartGame() {
          this.successPage.active = false;
          this.failPage.active = false;
          this.ShowGame();
        };
        _createClass(MainGame01, null, [{
          key: "instance",
          get: function get() {
            if (!this._instance) {
              console.warn("MainGame01 還沒有被綁定到 Node 上！");
            }
            return this._instance;
          }
        }]);
        return MainGame01;
      }(Component), _class3._instance = null, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titlePage", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "startBtn", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "storyPage", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "descPage", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "gamePage", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "successPage", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "failPage", [_dec8], {
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

System.register("chunks:///_virtual/StateMachine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _extends, _createClass, cclegacy, EventTarget;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
    }],
    execute: function () {
      cclegacy._RF.push({}, "ab1bdUIQEdBBZrTJI29iymH", "StateMachine", undefined);

      // 事件回呼統一的資訊結構

      var StateMachine = exports('StateMachine', /*#__PURE__*/function () {
        function StateMachine() {
          // === 內部儲存 ===
          this._states = new Map();
          this._current = null;
          this._events = new EventTarget();
        }

        /** 建立事件鍵值：<state>|<event>；支援 '*' 為所有狀態 */
        var _proto = StateMachine.prototype;
        _proto._ek = function _ek(state, evt) {
          return String(state) + '|' + evt;
        }

        /** 是否有該狀態 */;
        _proto.hasState = function hasState(name) {
          return this._states.has(name);
        }

        /** 目前狀態 */;
        /** 新增/覆蓋狀態定義（可重複呼叫覆蓋） */
        _proto.addState = function addState(name, hooks) {
          if (hooks === void 0) {
            hooks = {};
          }
          this._states.set(name, _extends({
            name: name
          }, hooks));
          return this;
        }

        /** 移除狀態（若為當前狀態，不會自動切換走，僅移除定義） */;
        _proto.removeState = function removeState(name) {
          return this._states["delete"](name);
        }

        /**
         * 切換狀態
         * @returns 是否成功切換（不存在或相同狀態將回傳 false）
         */;
        _proto.changeState = function changeState(next, payload) {
          if (!this._states.has(next)) {
            console.warn("[StateMachine] changeState fail: state \"" + String(next) + "\" not found.");
            return false;
          }
          var prev = this._current;
          if (prev === next) {
            // 相同狀態就不切換；如果你希望同狀態也觸發 enter，可在此改行為
            return false;
          }

          // 1) 先執行前一狀態 onExit & 事件
          if (prev !== null) {
            var prevState = this._states.get(prev);
            try {
              prevState.onExit == null || prevState.onExit(next, payload);
            } catch (e) {
              console.error('[StateMachine] onExit error:', e);
            }
            this._emit(prev, 'exit', {
              prev: prev,
              curr: next,
              payload: payload
            });
          }

          // 2) 設定新狀態
          this._current = next;

          // 3) 執行新狀態 onEnter & 事件
          var nextState = this._states.get(next);
          try {
            nextState.onEnter == null || nextState.onEnter(prev, payload);
          } catch (e) {
            console.error('[StateMachine] onEnter error:', e);
          }
          this._emit(next, 'enter', {
            prev: prev,
            curr: next,
            payload: payload
          });

          // 4) 廣播變更事件（特定狀態 + 全域）
          this._emit(next, 'change', {
            prev: prev,
            curr: next,
            payload: payload
          });
          this._emit('*', 'change', {
            prev: prev,
            curr: next,
            payload: payload
          });
          return true;
        }

        /** 在遊戲循環中呼叫（例如某個 Component 的 update） */;
        _proto.update = function update(dt) {
          if (this._current === null) return;
          var st = this._states.get(this._current);
          try {
            st == null || st.onUpdate == null || st.onUpdate(dt);
          } catch (e) {
            console.error('[StateMachine] onUpdate error:', e);
          }
          // 也提供事件型式的 update（方便外部掛）
          this._emit(this._current, 'update', {
            prev: this._current,
            curr: this._current,
            dt: dt
          });
        }

        /**
         * 註冊事件
         * @param state 狀態名或 '*'（監聽全部狀態）
         * @param event 事件種類：'enter' | 'exit' | 'update' | 'change'
         * @param cb    回呼
         * @param target 可選：Cocos 綁定 this 的目標（與 EventTarget 相容）
         */;
        _proto.on = function on(state, event, cb, target) {
          this._events.on(this._ek(state, event), cb, target);
        }

        /** 取消事件監聽 */;
        _proto.off = function off(state, event, cb, target) {
          this._events.off(this._ek(state, event), cb, target);
        }

        /** 清空所有狀態與事件（慎用） */;
        _proto.reset = function reset() {
          this._states.clear();
          this._current = null;
          // EventTarget 沒有 clearAll，這裡透過重建達成
          this._events = new EventTarget();
        };
        _proto._emit = function _emit(state, event, info) {
          this._events.emit(this._ek(state, event), info);
        };
        _createClass(StateMachine, [{
          key: "current",
          get: function get() {
            return this._current;
          }
        }], [{
          key: "inst",
          get: function get() {
            if (!this._inst) this._inst = new StateMachine();
            return this._inst;
          }
        }]);
        return StateMachine;
      }());
      // === 單例 ===
      StateMachine._inst = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TypingText.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, Label, RichText, EventTarget, input, Input, Component;
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
      Label = module.Label;
      RichText = module.RichText;
      EventTarget = module.EventTarget;
      input = module.input;
      Input = module.Input;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "ed359p4WAFEbasM6V5oA0QS", "TypingText", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;

      /** 用來通知外部：每句完成 / 全段完成 */
      var TypingEvents = exports('TypingEvents', {
        LINE_DONE: 'LINE_DONE',
        ALL_DONE: 'ALL_DONE'
      });
      var TypingText = exports('TypingText', (_dec = ccclass('TypingText'), _dec2 = property({
        tooltip: '每秒顯示幾個字（不含標籤）'
      }), _dec3 = property({
        tooltip: '是否啟用標點停頓（，。！？、…）'
      }), _dec4 = property({
        tooltip: '逗號類停頓（毫秒）'
      }), _dec5 = property({
        tooltip: '句號類停頓（毫秒）'
      }), _dec6 = property(Label), _dec7 = property(RichText), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(TypingText, _Component);
        function TypingText() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "charsPerSecond", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "punctuationPause", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "commaPauseMs", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "periodPauseMs", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "label", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "richText", _descriptor6, _assertThisInitialized(_this));
          _this.bus = new EventTarget();
          _this._queue = [];
          _this._playing = false;
          _this._skip = false;
          return _this;
        }
        var _proto = TypingText.prototype;
        /** 外部呼叫：丟多句會依序播放 */
        _proto.playLines = function playLines(lines) {
          var _this$_queue;
          (_this$_queue = this._queue).push.apply(_this$_queue, lines);
          if (!this._playing) this._next();
        }

        /** 外部呼叫：馬上顯示目前句子的全文（再自動進到下一句） */;
        _proto.skipCurrent = function skipCurrent() {
          this._skip = true;
        }

        /** 外部呼叫：清空一切（停止播放） */;
        _proto.stop = function stop() {
          this._queue.length = 0;
          this._playing = false;
        };
        _proto.onEnable = function onEnable() {
          input.on(Input.EventType.TOUCH_START, this.onTap, this);
        };
        _proto.onDisable = function onDisable() {
          input.off(Input.EventType.TOUCH_START, this.onTap, this);
        };
        _proto.clearText = function clearText() {
          if (this.label) this.label.string = '';
          if (this.richText) this.richText.string = '';
        };
        _proto.onTap = function onTap() {
          this._skip = true;
        };
        _proto._next = function _next() {
          var _this2 = this;
          var line = this._queue.shift();
          if (line == null) {
            this.bus.emit(TypingEvents.ALL_DONE);
            this._playing = false;
            return;
          }
          this._playing = true;
          this._skip = false;
          this._typeLine(line).then(function () {
            _this2.bus.emit(TypingEvents.LINE_DONE);
            _this2._next();
          });
        };
        _proto._typeLine = /*#__PURE__*/function () {
          var _typeLine2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(line) {
            var fps, stepMs, tokens, visCount, partial, ch;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  this._setText(''); // 先清空
                  fps = Math.max(1, this.charsPerSecond);
                  stepMs = 1000 / fps; // 解析：把文字分成「可見字元陣列」並保留 RichText 標籤
                  tokens = this._tokenizeRich(line); // {visible:string[], slices:string[]}
                  visCount = 0;
                case 5:
                  if (!(visCount <= tokens.visible.length)) {
                    _context.next = 28;
                    break;
                  }
                  if (!this._skip) {
                    _context.next = 11;
                    break;
                  }
                  // 直接顯示全文
                  this._setText(tokens.slices[tokens.slices.length - 1]);
                  _context.next = 10;
                  return this._sleep(0);
                case 10:
                  return _context.abrupt("break", 28);
                case 11:
                  partial = this._richSlice(tokens, visCount);
                  this._setText(partial);

                  // 下一個字
                  if (!(visCount === tokens.visible.length)) {
                    _context.next = 15;
                    break;
                  }
                  return _context.abrupt("break", 28);
                case 15:
                  ch = tokens.visible[visCount];
                  visCount++;

                  // 時間步進
                  _context.next = 19;
                  return this._sleep(stepMs);
                case 19:
                  if (!this.punctuationPause) {
                    _context.next = 26;
                    break;
                  }
                  if (!/[，、；,]/.test(ch)) {
                    _context.next = 23;
                    break;
                  }
                  _context.next = 23;
                  return this._sleep(this.commaPauseMs);
                case 23:
                  if (!/[。！？!?…]/.test(ch)) {
                    _context.next = 26;
                    break;
                  }
                  _context.next = 26;
                  return this._sleep(this.periodPauseMs);
                case 26:
                  _context.next = 5;
                  break;
                case 28:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function _typeLine(_x) {
            return _typeLine2.apply(this, arguments);
          }
          return _typeLine;
        }() /** 把 RichText 文字切成：可見字元（不含標籤）＋ 每一可見位置對應的完整字串切片 */;
        _proto._tokenizeRich = function _tokenizeRich(src) {
          var outVisible = [];
          var outSlices = []; // 第 n 個可見字元顯示完後應該輸出的完整字串
          var insideTag = false;
          var buf = '';
          var codepoints = Array.from(src); // 支援 emoji / 合字

          for (var k = 0; k < codepoints.length; k++) {
            var c = codepoints[k];
            if (c === '<') {
              insideTag = true;
              buf += c;
              continue;
            }
            if (c === '>' && insideTag) {
              insideTag = false;
              buf += c;
              continue;
            }
            if (insideTag) {
              buf += c;
              continue;
            }

            // 可見字元
            buf += c;
            outVisible.push(c);
            outSlices.push(buf);
          }

          // 如果整串只有標籤（沒有可見字），至少保留原文
          if (outVisible.length === 0) outSlices.push(buf);
          return {
            visible: outVisible,
            slices: outSlices,
            raw: src
          };
        }

        /** 取前 n 個可見字元的完整輸出，確保標籤完整不被截斷 */;
        _proto._richSlice = function _richSlice(tokens, n) {
          var _tokens$slices;
          if (n <= 0) return '';
          var idx = Math.min(n, tokens.slices.length);
          return (_tokens$slices = tokens.slices[idx - 1]) != null ? _tokens$slices : '';
        };
        _proto._setText = function _setText(s) {
          if (this.label) this.label.string = s;
          if (this.richText) this.richText.string = s;
        };
        _proto._sleep = function _sleep(ms) {
          return new Promise(function (r) {
            return setTimeout(r, ms);
          });
        };
        return TypingText;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "charsPerSecond", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 24;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "punctuationPause", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "commaPauseMs", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 120;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "periodPauseMs", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 220;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "label", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "richText", [_dec7], {
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

System.register("chunks:///_virtual/UseState.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './StateMachine.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, input, Input, KeyCode, Component, StateMachine;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      input = module.input;
      Input = module.Input;
      KeyCode = module.KeyCode;
      Component = module.Component;
    }, function (module) {
      StateMachine = module.StateMachine;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "7fe6c0fOxdNzL/GKYPDWXf5", "UseState", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UseState = exports('UseState', (_dec = ccclass('UseState'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UseState, _Component);
        function UseState() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.fsm = StateMachine.inst;
          return _this;
        }
        var _proto = UseState.prototype;
        _proto.start = function start() {
          // 1) 定義狀態
          this.fsm.addState('Idle', {
            onEnter: function onEnter(prev) {
              console.log('Enter Idle from', prev);
            },
            onUpdate: function onUpdate(dt) {/* do idle update */},
            onExit: function onExit(next) {
              console.log('Exit Idle to', next);
            }
          });
          this.fsm.addState('Run', {
            onEnter: function onEnter() {/* play run anim */}
          });

          // 2) 事件註冊（針對特定狀態）
          var onRunEnter = function onRunEnter(info) {
            console.log('[Run enter]', info.prev, '->', info.curr);
          };
          this.fsm.on('Run', 'enter', onRunEnter);

          // 3) 事件註冊（監聽所有狀態的變更）
          this.fsm.on('*', 'change', function (info) {
            console.log("[CHANGE] " + info.prev + " -> " + info.curr, info.payload);
          });
          input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        };
        _proto.update = function update(deltaTime) {
          this.fsm.changeState('Idle'); // 初始進入 Idle
        };

        _proto.onKeyDown = function onKeyDown(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              console.log('Press a key');
              break;
          }
        };
        _proto.onKeyUp = function onKeyUp(event) {
          switch (event.keyCode) {
            case KeyCode.KEY_A:
              this.fsm.changeState('Run', {
                speed: 5
              }); // 切到 Run 並帶 payload
              break;
          }
        };
        return UseState;
      }(Component)) || _class));
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