System.register("chunks:///_virtual/main",["./MindARAgent.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/MindARAgent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,r,o,n,a,s,p,c,l,d,h,g;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,r=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,s=t.Node,p=t.RichText,c=t.sys,l=t.Mat4,d=t.Vec3,h=t.Quat,g=t.Component}],execute:function(){var u,m,R,_,f,v,A;n._RF.push({},"baa7f2vO2RCxIMP5bli/3jY","MindARAgent",void 0);var y=a.ccclass,w=a.property;t("MindARAgent",(u=y("MindARAgent"),m=w({type:s,tooltip:"要被 AR 控制的 3D 物體根節點"}),R=w({type:p,tooltip:"要被 AR 控制的 3D 物體根節點"}),u((v=e((f=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n))||this,r(e,"targetNode",v,o(e)),r(e,"targetText",A,o(e)),e._tempMat4=new l,e._tempPos=new d,e._tempRot=new h,e._tempScale=new d,e._fixRotation=new h,e}i(e,t);var n=e.prototype;return n.start=function(){c.isBrowser?(this.targetNode&&(this.targetNode.active=!1),window.addEventListener("mindar-update",this.onARUpdate.bind(this)),this.targetText.string="開始遊戲"):console.warn("AR 只能在瀏覽器環境運行")},n.onARUpdate=function(t){var e=t.detail;this.targetNode&&(e.visible?(this.targetText.string="偵測到物件",this.targetNode.active||(this.targetNode.active=!0),l.fromArray(this._tempMat4,e.matrix),this._tempMat4.getRotation(this._tempRot),this._tempMat4.getPosition(this._tempPos),this._tempMat4.getScale(this._tempScale),this.targetNode.setWorldPosition(this._tempPos),this.targetNode.setWorldRotation(this._tempRot),this.targetNode.setWorldScale(this._tempScale)):(this.targetNode.active&&(this.targetNode.active=!1),this.targetText.string="物件消失"))},n.onDestroy=function(){window.removeEventListener("mindar-update",this.onARUpdate.bind(this))},e}(g)).prototype,"targetNode",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=e(f.prototype,"targetText",[R],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=f))||_));n._RF.pop()}}}));

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