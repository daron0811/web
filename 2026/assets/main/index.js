System.register("chunks:///_virtual/main",["./MindARAgent.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/MindARAgent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,r,a,o,n,s,l,p,c,h,u,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){o=t.cclegacy,n=t._decorator,s=t.Node,l=t.RichText,p=t.sys,c=t.Mat4,h=t.Vec3,u=t.Quat,d=t.Component}],execute:function(){var g,m,_,f,y,R,v,A,b;o._RF.push({},"02193qbLiNJCob7+9N43oO5","MindARAgent",void 0);var M=n.ccclass,N=n.property;t("MindARAgent",(g=M("MindARAgent"),m=N({type:s,tooltip:"要被 AR 控制的 3D 物體根節點"}),_=N({type:l,tooltip:"狀態顯示文字"}),f=N({tooltip:"縮放倍率修正 (若模型太小可調大，例如 10 或 100)"}),g((v=e((R=function(t){function e(){for(var e,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return e=t.call.apply(t,[this].concat(o))||this,r(e,"targetNode",v,a(e)),r(e,"targetText",A,a(e)),r(e,"scaleMultiplier",b,a(e)),e._tempMat4=new c,e._tempPos=new h,e._tempRot=new u,e._tempScale=new h,e}i(e,t);var o=e.prototype;return o.start=function(){p.isBrowser?(this.targetNode&&(this.targetNode.active=!1),this.targetText&&(this.targetText.string="等待 AR 啟動..."),window.addEventListener("mindar-update",this.onARUpdate.bind(this))):console.warn("AR 只能在瀏覽器環境運行")},o.onARUpdate=function(t){var e=t.detail;this.targetNode&&(e.visible?(this.targetText&&(this.targetText.string="偵測到物件！"),this.targetNode.active||(this.targetNode.active=!0),c.fromArray(this._tempMat4,e.matrix),this._tempMat4.getRotation(this._tempRot),this._tempMat4.getPosition(this._tempPos),this._tempMat4.getScale(this._tempScale),this._tempPos.multiplyScalar(this.scaleMultiplier),this._tempScale.multiplyScalar(this.scaleMultiplier),this.targetNode.setWorldPosition(this._tempPos),this.targetNode.setWorldRotation(this._tempRot),this.targetNode.setWorldScale(this._tempScale)):(this.targetNode.active&&(this.targetNode.active=!1),this.targetText&&(this.targetText.string="搜尋目標中...")))},o.onDestroy=function(){window.removeEventListener("mindar-update",this.onARUpdate.bind(this))},e}(d)).prototype,"targetNode",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=e(R.prototype,"targetText",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),b=e(R.prototype,"scaleMultiplier",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),y=R))||y));o._RF.pop()}}}));

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