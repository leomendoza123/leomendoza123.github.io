(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{L6id:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),r=function(){},o=t("pMnS"),a=t("Ip0R"),u=t("mrSG"),i=t("n6gG"),s=t("Wf4p"),d=100,m=Object(s.h)(function(n){this._elementRef=n},"primary"),c=new e.r("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:d}}}),p=function(n){function l(l,t,e,r,o){var a=n.call(this,l)||this;return a._elementRef=l,a._document=e,a.animationMode=r,a.defaults=o,a._value=0,a._fallbackAnimation=!1,a._noopAnimations="NoopAnimations"===a.animationMode&&!!a.defaults&&!a.defaults._forceAnimations,a._diameter=d,a.mode="determinate",a._fallbackAnimation=t.EDGE||t.TRIDENT,o&&(o.diameter&&(a.diameter=o.diameter),o.strokeWidth&&(a.strokeWidth=o.strokeWidth)),l.nativeElement.classList.add("mat-progress-spinner-indeterminate"+(a._fallbackAnimation?"-fallback":"")+"-animation"),a}return Object(u.c)(l,n),Object.defineProperty(l.prototype,"diameter",{get:function(){return this._diameter},set:function(n){this._diameter=Object(i.d)(n),this._fallbackAnimation||l.diameters.has(this._diameter)||this._attachStyleNode()},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"strokeWidth",{get:function(){return this._strokeWidth||this.diameter/10},set:function(n){this._strokeWidth=Object(i.d)(n)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"value",{get:function(){return"determinate"===this.mode?this._value:0},set:function(n){this._value=Math.max(0,Math.min(100,Object(i.d)(n)))},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_circleRadius",{get:function(){return(this.diameter-10)/2},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_viewBox",{get:function(){var n=2*this._circleRadius+this.strokeWidth;return"0 0 "+n+" "+n},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_strokeCircumference",{get:function(){return 2*Math.PI*this._circleRadius},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_strokeDashOffset",{get:function(){return"determinate"===this.mode?this._strokeCircumference*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._strokeCircumference:null},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_circleStrokeWidth",{get:function(){return this.strokeWidth/this.diameter*100},enumerable:!0,configurable:!0}),l.prototype._attachStyleNode=function(){var n=l.styleTag;n||(n=this._document.createElement("style"),this._document.head.appendChild(n),l.styleTag=n),n&&n.sheet&&n.sheet.insertRule(this._getAnimationText(),0),l.diameters.add(this.diameter)},l.prototype._getAnimationText=function(){return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*this._strokeCircumference).replace(/END_VALUE/g,""+.2*this._strokeCircumference).replace(/DIAMETER/g,""+this.diameter)},l.diameters=new Set([d]),l.styleTag=null,l}(m),f=function(){},b=t("Fzqc"),g=t("ZYjt"),h=t("dWZg"),_=t("wFw1"),x=e.pb({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function k(n){return e.Hb(0,[(n()(),e.rb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(n,l){var t=l.component;n(l,0,0,t._circleRadius,"mat-progress-spinner-stroke-rotate-"+t.diameter,t._strokeDashOffset,t._strokeCircumference,t._circleStrokeWidth)})}function y(n){return e.Hb(0,[(n()(),e.rb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(n,l){var t=l.component;n(l,0,0,t._circleRadius,t._strokeDashOffset,t._strokeCircumference,t._circleStrokeWidth)})}function O(n){return e.Hb(2,[(n()(),e.rb(0,0,null,null,5,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),e.qb(1,16384,null,0,a.o,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),e.jb(16777216,null,null,1,null,k)),e.qb(3,278528,null,0,a.p,[e.S,e.P,a.o],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),e.jb(16777216,null,null,1,null,y)),e.qb(5,278528,null,0,a.p,[e.S,e.P,a.o],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(n,l){n(l,1,0,"indeterminate"===l.component.mode),n(l,3,0,!0),n(l,5,0,!1)},function(n,l){var t=l.component;n(l,0,0,t.diameter,t.diameter,t._viewBox)})}var v=t("bujt"),C=t("UodH"),w=t("lLAP"),P=(t("ey9i"),function(){function n(n){this._news=n}return n.prototype.ngOnInit=function(){var n=this;this._news.getNews().subscribe(function(l){n.news=l})},n.prototype.navigate=function(n){window.location.href=n[0]},n.prototype.moreNews=function(){window.location.href="https://orcid.org/about/news"},n}()),A=t("7wBh"),M=e.pb({encapsulation:0,styles:[[".handset   [_nghost-%COMP%], .tablet   [_nghost-%COMP%]{margin-bottom:50px;-ms-flex-wrap:wrap;flex-wrap:wrap}.handset   [_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%], .tablet   [_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.handset   [_nghost-%COMP%]{padding:50px 16px;margin-left:-16px;margin-right:-16px}.handset   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]{-ms-flex:1 1 100%;flex:1 1 100%}.tablet   [_nghost-%COMP%]{padding:50px 24px;margin-left:-24px;margin-right:-24px}.tablet   [_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%]{margin-left:-16px}.tablet   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]{margin:0 0 14px 14px;-ms-flex:1 1 33%;flex:1 1 33%}[_nghost-%COMP%]{display:-ms-flexbox;display:flex;padding:50px 26px 50px 16px;-ms-flex-direction:column;flex-direction:column;margin-top:-24px;margin-right:-24px}.edge.desktop   [_nghost-%COMP%], .ie.desktop   [_nghost-%COMP%]{display:block;margin:0;-webkit-transform:translateX(66px);-ms-transform:translateX(66px);transform:translateX(66px)}.date[_ngcontent-%COMP%]{margin-bottom:10px}.card[_ngcontent-%COMP%]{padding:19px 16px;box-shadow:0 3px 6px 0 rgba(0,0,0,.16);margin-bottom:14px;cursor:pointer}button[_ngcontent-%COMP%]{width:160px;margin-left:auto}.author[_ngcontent-%COMP%]{margin-top:8px}.spinner-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:distribute;justify-content:space-around;padding-top:33%}body[dir]   [_nghost-%COMP%]{margin-left:-24px;margin-right:unset}body[dir]   .tabletOrHandset   [_nghost-%COMP%]{margin-left:-16px;margin-right:-16px}body[dir]   .edge.desktop   [_nghost-%COMP%], body[dir]   .ie.desktop   [_nghost-%COMP%]{display:block;margin:0;-webkit-transform:translateX(-66px);-ms-transform:translateX(-66px);transform:translateX(-66px)}"]],data:{animation:[{type:7,name:"listAnimation",definitions:[{type:1,expr:"* => *",animation:[{type:11,selector:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:12,timings:100,animation:[{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"0.2s"}]}],options:null}],options:null}],options:{}}]}});function E(n){return e.Hb(0,[(n()(),e.rb(0,0,null,null,2,"div",[["class","spinner-container"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,1,"mat-progress-spinner",[["class","mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuenow",0],[1,"mode",0]],null,null,O,x)),e.qb(2,49152,null,0,p,[e.l,h.a,[2,a.d],[2,_.a],c],{color:[0,"color"],mode:[1,"mode"]},null)],function(n,l){n(l,2,0,l.component.primary,"indeterminate")},function(n,l){n(l,1,0,e.zb(l,2)._noopAnimations,e.zb(l,2).diameter,e.zb(l,2).diameter,"determinate"===e.zb(l,2).mode?0:null,"determinate"===e.zb(l,2).mode?100:null,e.zb(l,2).value,e.zb(l,2).mode)})}function F(n){return e.Hb(0,[(n()(),e.rb(0,0,null,null,6,"div",[["class","card mat-ripple"],["matRipple",""]],[[2,"mat-ripple-unbounded",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.navigate(n.context.$implicit.link)&&e),e},null,null)),e.qb(1,212992,null,0,s.f,[e.l,e.B,h.a,[2,s.d],[2,_.a]],null,null),(n()(),e.rb(2,0,null,null,1,"div",[["class","date"]],null,null,null,null,null)),(n()(),e.Fb(3,null,["",""])),(n()(),e.Fb(4,null,[" "," "])),(n()(),e.rb(5,0,null,null,1,"div",[["class","author"]],null,null,null,null,null)),(n()(),e.Fb(6,null,["by ",""]))],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,e.zb(l,1).unbounded),n(l,3,0,l.context.$implicit.pubDate[0].slice(0,22)),n(l,4,0,l.context.$implicit.title),n(l,6,0,l.context.$implicit["dc:creator"])})}function R(n){return e.Hb(0,[(n()(),e.rb(0,0,null,null,6,null,null,null,null,null,null,null)),(n()(),e.rb(1,0,null,null,2,"div",[["class","cart-container"]],[[24,"@listAnimation",0]],null,null,null,null)),(n()(),e.jb(16777216,null,null,1,null,F)),e.qb(3,278528,null,0,a.k,[e.S,e.P,e.u],{ngForOf:[0,"ngForOf"]},null),(n()(),e.rb(4,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.moreNews()&&e),e},v.b,v.a)),e.qb(5,180224,null,0,C.b,[e.l,h.a,w.d,[2,_.a]],{color:[0,"color"]},null),(n()(),e.Fb(-1,0,["\u904e\u53bb\u306e\u30cb\u30e5\u30fc\u30b9"]))],function(n,l){n(l,3,0,l.component.news),n(l,5,0,"primary")},function(n,l){n(l,1,0,l.component.news.length),n(l,4,0,e.zb(l,5).disabled||null,"NoopAnimations"===e.zb(l,5)._animationMode)})}function D(n){return e.Hb(0,[(n()(),e.rb(0,0,null,null,3,"div",[["class","count"]],null,null,null,null,null)),(n()(),e.Fb(-1,null,[" 5,566,081 "])),(n()(),e.rb(2,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u4ee5\u4e0a\u306e ORCID iD\u3002"])),(n()(),e.rb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u6700\u65b0\u306e\u30cb\u30e5\u30fc\u30b9"])),(n()(),e.jb(16777216,null,null,1,null,E)),e.qb(7,16384,null,0,a.l,[e.S,e.P],{ngIf:[0,"ngIf"]},null),(n()(),e.jb(16777216,null,null,1,null,R)),e.qb(9,16384,null,0,a.l,[e.S,e.P],{ngIf:[0,"ngIf"]},null)],function(n,l){var t=l.component;n(l,7,0,!t.news),n(l,9,0,t.news)},null)}var S=function(){function n(n){var l=this;n.getPlatformInfo().subscribe(function(n){l.tabletOrHandset=n.tabletOrHandset})}return n.prototype.ngOnInit=function(){},n}(),T=t("GXSC"),j=e.pb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%], .container.mdc-layout-grid__inner[_ngcontent-%COMP%]{margin-bottom:48px}.home-container.mdc-layout-grid__inner[_ngcontent-%COMP%]{height:100%}.edge[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%], .ie[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]{max-width:100vw}.edge   [_nghost-%COMP%], .ie   [_nghost-%COMP%]{display:-ms-flexbox;display:flex}"]],data:{animation:[{type:7,name:"enterAnimation",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:400}],options:null}],options:{}}]}});function I(n){return e.Hb(0,[(n()(),e.rb(0,0,null,null,69,"div",[["class","home-container mdc-layout-grid__inner"]],null,null,null,null,null)),(n()(),e.rb(1,0,null,null,2,"div",[],null,null,null,null,null)),e.qb(2,278528,null,0,a.j,[e.u,e.v,e.l,e.G],{ngClass:[0,"ngClass"]},null),e.Bb(3,{"mdc-layout-grid__cell--span-1":0}),(n()(),e.rb(4,0,null,null,58,"main",[],[[24,"@enterAnimation",0]],null,null,null,null)),e.qb(5,278528,null,0,a.j,[e.u,e.v,e.l,e.G],{ngClass:[0,"ngClass"]},null),e.Bb(6,{"mdc-layout-grid__cell--span-7":0,"mdc-layout-grid__cell--span-12":1}),(n()(),e.rb(7,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.rb(8,0,null,null,4,"h1",[],null,null,null,null,null)),(n()(),e.rb(9,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u81ea\u5206\u3092\u4ed6\u306e\u4eba\u3068\u533a\u5225\u3059\u308b\u306b\u306f"])),(n()(),e.rb(11,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["3 \u30b9\u30c6\u30c3\u30d7\u3067<"])),(n()(),e.rb(13,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["ORCID \u306f\u3001\u6c38\u7d9a\u7684\u3067\u4e00\u610f\u7684\u306a\u30c7\u30b8\u30bf\u30eb ID \u3092\u4ed8\u4e0e\u3059\u308b\u3053\u3068\u306b\u3088\u308a\u3001\u3042\u306a\u305f\u3068\u4ed6\u306e\u7814\u7a76\u8005\u3092\u533a\u5225\u3057\u3001\u307e\u305f\u8ad6\u6587\u6295\u7a3f\u3084\u7814\u7a76\u52a9\u6210\u7533\u8acb\u306a\u3069\u306e\u5de5\u7a0b\u3078\u306e\u7d44\u307f\u8fbc\u307f\u306b\u3088\u308a\u3001\u3042\u306a\u305f\u306e\u7814\u7a76\u696d\u7e3e\u3068\u306e\u81ea\u52d5\u7684\u306a\u30ea\u30f3\u30af\u3092\u56f3\u308a\u3001\u696d\u7e3e\u304c\u6b63\u3057\u304f\u8a8d\u8b58\u3055\u308c\u308b\u3088\u3046\u306b\u652f\u63f4\u3057\u307e\u3059\u3002\u3059\u306a\u308f\u3061:"])),(n()(),e.rb(15,0,null,null,1,"a",[],null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u8a73\u7d30\u60c5\u5831"])),(n()(),e.rb(17,0,null,null,34,"div",[["class","container mdc-layout-grid__inner"]],null,null,null,null,null)),(n()(),e.rb(18,0,null,null,5,"div",[["class","mdc-layout-grid__cell--span-3"]],null,null,null,null,null)),(n()(),e.rb(19,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["1"])),(n()(),e.Fb(-1,null,["- "])),(n()(),e.rb(22,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u767b\u9332"])),(n()(),e.rb(24,0,null,null,6,"div",[["class","mdc-layout-grid__cell--span-9"]],null,null,null,null,null)),(n()(),e.rb(25,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u81ea\u5206\u306e\u4e00\u610f\u7684\u306a ORCID ID \u3092\u5165\u624b\u3057\u307e\u3059\u3002"])),(n()(),e.rb(27,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u3044\u307e\u3059\u3050\u767b\u9332\u3057\u307e\u3057\u3087\u3046!"])),(n()(),e.rb(29,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u767b\u9332\u306f 30 \u79d2\u3067\u3059\u307f\u307e\u3059\u3002"])),(n()(),e.rb(31,0,null,null,7,"div",[["class","mdc-layout-grid__cell--span-3"]],null,null,null,null,null)),(n()(),e.rb(32,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["2"])),(n()(),e.Fb(-1,null,["- "])),(n()(),e.rb(35,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u81ea\u5206\u306e\u60c5\u5831\u3092"])),(n()(),e.rb(37,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u8ffd\u52a0"])),(n()(),e.rb(39,0,null,null,2,"div",[["class","mdc-layout-grid__cell--span-9"]],null,null,null,null,null)),(n()(),e.rb(40,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u81ea\u5206\u306e ORCID \u30ec\u30b3\u30fc\u30c9\u306b\u3001\u81ea\u5206\u306e\u30d7\u30ed\u30d5\u30a3\u30fc\u30eb\u3084\u4ed6\u306e ID (Scopus \u3084 ResearcherID \u3084 LinkedIn \u306a\u3069) \u3068\u306e\u30ea\u30f3\u30af\u3092\u66f8\u304d\u8fbc\u3080\u3002"])),(n()(),e.rb(42,0,null,null,7,"div",[["class","mdc-layout-grid__cell--span-3"]],null,null,null,null,null)),(n()(),e.rb(43,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["3"])),(n()(),e.Fb(-1,null,[" -"])),(n()(),e.rb(46,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["ORCID ID"])),(n()(),e.rb(48,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u3092\u4f7f\u3046"])),(n()(),e.rb(50,0,null,null,1,"div",[["class","mdc-layout-grid__cell--span-9"]],null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u81ea\u5206\u306e ORCID ID \u3092\u81ea\u5206\u306e\u30a6\u30a7\u30d6\u30da\u30fc\u30b8\u306b\u66f8\u304d\u8fbc\u3093\u3060\u308a\u3001\u8ad6\u6587\u3001\u7814\u7a76\u52a9\u6210\u7533\u8acb\u3001\u305d\u306e\u4ed6\u5404\u7a2e\u306e\u7814\u7a76\u5de5\u7a0b\u3067\u3001\u81ea\u5206\u306e\u696d\u7e3e\u304c\u6b63\u3057\u304f\u8a8d\u8b58\u3055\u308c\u308b\u305f\u3081\u306b\u4f7f\u7528\u3059\u308b\u3002"])),(n()(),e.rb(52,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(n()(),e.rb(53,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u4f1a\u54e1\u306e\u7686\u69d8\u304cORCID\u3092\u652f\u3048\u3066\u3044\u307e\u3059!"])),(n()(),e.rb(55,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),e.rb(56,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["ORCID\u306f\u3001\u7814\u7a76\u7d44\u7e54\u3001\u51fa\u7248\u793e\u3001\u8cc7\u91d1\u63d0\u4f9b\u8005\u3001\u5c02\u9580\u5bb6\u56e3\u4f53\u3001\u304a\u3088\u3073\u7814\u7a76\u751f\u614b\u7cfb\u306b\u304a\u3051\u308b\u305d\u306e\u4ed6\u306e\u5229\u5bb3\u95a2\u4fc2\u8005\u3092\u542b\u3080\u7d44\u7e54\u4f1a\u54e1\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u30b3\u30df\u30e5\u30cb\u30c6\u30a3\u306b\u3088\u308a\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"])),(n()(),e.rb(58,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e.rb(59,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u3069\u306e\u3088\u3046\u306a\u4eba\u304c\u4f1a\u54e1\u306b\u306a\u3063\u3066\u3044\u308b\u306e\u304b\u3054\u5b58\u77e5\u3067\u3059\u304b?"])),(n()(),e.rb(61,0,null,null,1,null,null,null,null,null,null,null)),(n()(),e.Fb(-1,null,["\u4f1a\u54e1\u7d44\u7e54\u306e\u30ea\u30b9\u30c8\u5168\u4f53\u3092\u898b\u308b"])),(n()(),e.rb(63,0,null,null,2,"div",[],null,null,null,null,null)),e.qb(64,278528,null,0,a.j,[e.u,e.v,e.l,e.G],{ngClass:[0,"ngClass"]},null),e.Bb(65,{"mdc-layout-grid__cell--span-1":0}),(n()(),e.rb(66,0,null,null,3,"app-news",[],null,null,null,D,M)),e.qb(67,278528,null,0,a.j,[e.u,e.v,e.l,e.G],{ngClass:[0,"ngClass"]},null),e.Bb(68,{"mdc-layout-grid__cell--span-3":0,"mdc-layout-grid__cell--span-12":1}),e.qb(69,114688,null,0,P,[A.a],null,null)],function(n,l){var t=l.component;n(l,2,0,n(l,3,0,!t.tabletOrHandset)),n(l,5,0,n(l,6,0,!t.tabletOrHandset,t.tabletOrHandset)),n(l,64,0,n(l,65,0,!t.tabletOrHandset)),n(l,67,0,n(l,68,0,!t.tabletOrHandset,t.tabletOrHandset)),n(l,69,0)},function(n,l){n(l,4,0,void 0)})}var X=e.nb("app-home",S,function(n){return e.Hb(0,[(n()(),e.rb(0,0,null,null,1,"app-home",[],null,null,null,I,j)),e.qb(1,114688,null,0,S,[T.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),L=t("t/Na"),N=t("ZYCi"),H=function(){},U=t("pKmL");t.d(l,"HomeModuleNgFactory",function(){return V});var V=e.ob(r,[],function(n){return e.wb([e.xb(512,e.k,e.eb,[[8,[o.a,X]],[3,e.k],e.z]),e.xb(4608,a.n,a.m,[e.w,[2,a.x]]),e.xb(4608,L.h,L.n,[a.d,e.D,L.l]),e.xb(4608,L.o,L.o,[L.h,L.m]),e.xb(5120,L.a,function(n){return[n]},[L.o]),e.xb(4608,L.k,L.k,[]),e.xb(6144,L.i,null,[L.k]),e.xb(4608,L.g,L.g,[L.i]),e.xb(6144,L.b,null,[L.g]),e.xb(4608,L.f,L.j,[L.b,e.s]),e.xb(4608,L.c,L.c,[L.f]),e.xb(1073742336,a.c,a.c,[]),e.xb(1073742336,N.m,N.m,[[2,N.s],[2,N.l]]),e.xb(1073742336,H,H,[]),e.xb(1073742336,b.a,b.a,[]),e.xb(1073742336,s.e,s.e,[[2,s.b],[2,g.g]]),e.xb(1073742336,h.b,h.b,[]),e.xb(1073742336,s.g,s.g,[]),e.xb(1073742336,C.c,C.c,[]),e.xb(1073742336,L.e,L.e,[]),e.xb(1073742336,L.d,L.d,[]),e.xb(1073742336,U.a,U.a,[]),e.xb(1073742336,f,f,[]),e.xb(1073742336,r,r,[]),e.xb(256,e.w,"ja",[]),e.xb(1024,N.j,function(){return[[{path:"",component:S}]]},[]),e.xb(256,L.l,"XSRF-TOKEN",[]),e.xb(256,L.m,"X-XSRF-TOKEN",[]),e.xb(256,e.O,"xlf2",[])])})}}]);