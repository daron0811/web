System.register("chunks:///_virtual/main",["./MindARAgent.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/MindARAgent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,o,n,a,r,s,c,d,p,l,h;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,s=t.Node,c=t.sys,d=t.Mat4,p=t.Vec3,l=t.Quat,h=t.Component}],execute:function(){var u,g,m,_,v;a._RF.push({},"baa7f2vO2RCxIMP5bli/3jY","MindARAgent",void 0);var R=r.ccclass,f=r.property;t("MindARAgent",(u=R("MindARAgent"),g=f({type:s,tooltip:"要被 AR 控制的 3D 物體根節點"}),u((v=e((_=function(t){function e(){for(var e,i=arguments.length,a=new Array(i),r=0;r<i;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,o(e,"targetNode",v,n(e)),e._tempMat4=new d,e._tempPos=new p,e._tempRot=new l,e._tempScale=new p,e._fixRotation=new l,e}i(e,t);var a=e.prototype;return a.start=function(){c.isBrowser?(this.targetNode&&(this.targetNode.active=!1),window.addEventListener("mindar-update",this.onARUpdate.bind(this))):console.warn("AR 只能在瀏覽器環境運行")},a.onARUpdate=function(t){var e=t.detail;this.targetNode&&(e.visible?(this.targetNode.active||(this.targetNode.active=!0),d.fromArray(this._tempMat4,e.matrix),this._tempMat4.getRotation(this._tempRot),this._tempMat4.getPosition(this._tempPos),this._tempMat4.getScale(this._tempScale),this.targetNode.setWorldPosition(this._tempPos),this.targetNode.setWorldRotation(this._tempRot),this.targetNode.setWorldScale(this._tempScale)):this.targetNode.active&&(this.targetNode.active=!1))},a.onDestroy=function(){window.removeEventListener("mindar-update",this.onARUpdate.bind(this))},e}(h)).prototype,"targetNode",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),m=_))||m));a._RF.pop()}}}));

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