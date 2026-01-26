System.register("chunks:///_virtual/main",["./MindARAgent.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/MindARAgent.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,i,o,r,n,a,s,l,p,c,h,d,g;return{setters:[function(t){e=t.applyDecoratedDescriptor,i=t.inheritsLoose,o=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){n=t.cclegacy,a=t._decorator,s=t.Node,l=t.RichText,p=t.sys,c=t.Mat4,h=t.Vec3,d=t.Quat,g=t.Component}],execute:function(){var u,m,_,f,R,v,y;n._RF.push({},"baa7f2vO2RCxIMP5bli/3jY","MindARAgent",void 0);var A=a.ccclass,w=a.property;t("MindARAgent",(u=A("MindARAgent"),m=w({type:s,tooltip:"要被 AR 控制的 3D 物體根節點"}),_=w({type:l,tooltip:"要被 AR 控制的 3D 物體根節點"}),u((v=e((R=function(t){function e(){for(var e,i=arguments.length,n=new Array(i),a=0;a<i;a++)n[a]=arguments[a];return e=t.call.apply(t,[this].concat(n))||this,o(e,"targetNode",v,r(e)),o(e,"targetText",y,r(e)),e._tempMat4=new c,e._tempPos=new h,e._tempRot=new d,e._tempScale=new h,e._fixRotation=new d,e}i(e,t);var n=e.prototype;return n.start=function(){p.isBrowser?(this.targetNode&&(this.targetNode.active=!1),window.addEventListener("mindar-update",this.onARUpdate.bind(this)),this.targetText.string="開始遊戲"):console.warn("AR 只能在瀏覽器環境運行")},n.onARUpdate=function(t){var e=t.detail;if(this.targetNode)if(e.visible){"偵測到物件"!==this.targetText.string&&(console.log("System: 辨識成功！"),this.targetText.string="偵測到物件"),this.targetNode.active||(this.targetNode.active=!0),c.fromArray(this._tempMat4,e.matrix),this._tempMat4.getRotation(this._tempRot),this._tempMat4.getPosition(this._tempPos),this._tempMat4.getScale(this._tempScale);var i=10;this.targetNode.setWorldPosition(this._tempPos.x*i,this._tempPos.y*i,this._tempPos.z*i),this.targetNode.setWorldRotation(this._tempRot),this.targetNode.setWorldScale(this._tempScale.x*i,this._tempScale.y*i,this._tempScale.z*i)}else this.targetNode.active&&(console.log("System: 目標丟失"),this.targetNode.active=!1),"物件消失"!==this.targetText.string&&(this.targetText.string="物件消失")},n.onDestroy=function(){window.removeEventListener("mindar-update",this.onARUpdate.bind(this))},e}(g)).prototype,"targetNode",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),y=e(R.prototype,"targetText",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),f=R))||f));n._RF.pop()}}}));

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