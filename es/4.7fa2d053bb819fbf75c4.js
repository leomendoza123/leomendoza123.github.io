(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{L6id:function(n,l,e){"use strict";e.r(l);var t=e("CcnG"),r=function(){},o=e("pMnS"),a=e("Ip0R"),i=e("mrSG"),u=e("n6gG"),s=e("Wf4p"),d=100,c=Object(s.h)(function(n){this._elementRef=n},"primary"),m=new t.r("mat-progress-spinner-default-options",{providedIn:"root",factory:function(){return{diameter:d}}}),p=function(n){function l(l,e,t,r,o){var a=n.call(this,l)||this;return a._elementRef=l,a._document=t,a.animationMode=r,a.defaults=o,a._value=0,a._fallbackAnimation=!1,a._noopAnimations="NoopAnimations"===a.animationMode&&!!a.defaults&&!a.defaults._forceAnimations,a._diameter=d,a.mode="determinate",a._fallbackAnimation=e.EDGE||e.TRIDENT,o&&(o.diameter&&(a.diameter=o.diameter),o.strokeWidth&&(a.strokeWidth=o.strokeWidth)),l.nativeElement.classList.add("mat-progress-spinner-indeterminate"+(a._fallbackAnimation?"-fallback":"")+"-animation"),a}return Object(i.c)(l,n),Object.defineProperty(l.prototype,"diameter",{get:function(){return this._diameter},set:function(n){this._diameter=Object(u.d)(n),this._fallbackAnimation||l.diameters.has(this._diameter)||this._attachStyleNode()},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"strokeWidth",{get:function(){return this._strokeWidth||this.diameter/10},set:function(n){this._strokeWidth=Object(u.d)(n)},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"value",{get:function(){return"determinate"===this.mode?this._value:0},set:function(n){this._value=Math.max(0,Math.min(100,Object(u.d)(n)))},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_circleRadius",{get:function(){return(this.diameter-10)/2},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_viewBox",{get:function(){var n=2*this._circleRadius+this.strokeWidth;return"0 0 "+n+" "+n},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_strokeCircumference",{get:function(){return 2*Math.PI*this._circleRadius},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_strokeDashOffset",{get:function(){return"determinate"===this.mode?this._strokeCircumference*(100-this._value)/100:this._fallbackAnimation&&"indeterminate"===this.mode?.2*this._strokeCircumference:null},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_circleStrokeWidth",{get:function(){return this.strokeWidth/this.diameter*100},enumerable:!0,configurable:!0}),l.prototype._attachStyleNode=function(){var n=l.styleTag;n||(n=this._document.createElement("style"),this._document.head.appendChild(n),l.styleTag=n),n&&n.sheet&&n.sheet.insertRule(this._getAnimationText(),0),l.diameters.add(this.diameter)},l.prototype._getAnimationText=function(){return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*this._strokeCircumference).replace(/END_VALUE/g,""+.2*this._strokeCircumference).replace(/DIAMETER/g,""+this.diameter)},l.diameters=new Set([d]),l.styleTag=null,l}(c),f=function(){},b=e("Fzqc"),g=e("ZYjt"),h=e("dWZg"),_=e("wFw1"),x=t.pb({encapsulation:2,styles:[".mat-progress-spinner{display:block;position:relative}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:transparent;transform-origin:center;transition:stroke-dashoffset 225ms linear}._mat-animation-noopable.mat-progress-spinner circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{animation:mat-progress-spinner-linear-rotate 2s linear infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition-property:stroke;animation-duration:4s;animation-timing-function:cubic-bezier(.35,0,.25,1);animation-iteration-count:infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-animation[mode=indeterminate] circle{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{animation:mat-progress-spinner-stroke-rotate-fallback 10s cubic-bezier(.87,.03,.33,1) infinite}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate]{transition:none;animation:none}.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition-property:stroke}._mat-animation-noopable.mat-progress-spinner.mat-progress-spinner-indeterminate-fallback-animation[mode=indeterminate] circle{transition:none;animation:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.60617px;transform:rotate(0)}12.5%{stroke-dashoffset:56.54867px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.60617px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.54867px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.60617px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.54867px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.60617px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.54867px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.54867px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.60617px;transform:rotateX(180deg) rotate(341.5deg)}}@keyframes mat-progress-spinner-stroke-rotate-fallback{0%{transform:rotate(0)}25%{transform:rotate(1170deg)}50%{transform:rotate(2340deg)}75%{transform:rotate(3510deg)}100%{transform:rotate(4680deg)}}"],data:{}});function y(n){return t.Hb(0,[(n()(),t.rb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"animation-name",null],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(n,l){var e=l.component;n(l,0,0,e._circleRadius,"mat-progress-spinner-stroke-rotate-"+e.diameter,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)})}function k(n){return t.Hb(0,[(n()(),t.rb(0,0,null,null,0,":svg:circle",[["cx","50%"],["cy","50%"]],[[1,"r",0],[4,"stroke-dashoffset","px"],[4,"stroke-dasharray","px"],[4,"stroke-width","%"]],null,null,null,null))],null,function(n,l){var e=l.component;n(l,0,0,e._circleRadius,e._strokeDashOffset,e._strokeCircumference,e._circleStrokeWidth)})}function O(n){return t.Hb(2,[(n()(),t.rb(0,0,null,null,5,":svg:svg",[["focusable","false"],["preserveAspectRatio","xMidYMid meet"]],[[4,"width","px"],[4,"height","px"],[1,"viewBox",0]],null,null,null,null)),t.qb(1,16384,null,0,a.o,[],{ngSwitch:[0,"ngSwitch"]},null),(n()(),t.jb(16777216,null,null,1,null,y)),t.qb(3,278528,null,0,a.p,[t.S,t.P,a.o],{ngSwitchCase:[0,"ngSwitchCase"]},null),(n()(),t.jb(16777216,null,null,1,null,k)),t.qb(5,278528,null,0,a.p,[t.S,t.P,a.o],{ngSwitchCase:[0,"ngSwitchCase"]},null)],function(n,l){n(l,1,0,"indeterminate"===l.component.mode),n(l,3,0,!0),n(l,5,0,!1)},function(n,l){var e=l.component;n(l,0,0,e.diameter,e.diameter,e._viewBox)})}var v=e("bujt"),C=e("UodH"),w=e("lLAP"),A=(e("ey9i"),function(){function n(n){this._news=n}return n.prototype.ngOnInit=function(){var n=this;this._news.getNews().subscribe(function(l){n.news=l})},n.prototype.navigate=function(n){window.location.href=n[0]},n.prototype.moreNews=function(){window.location.href="https://orcid.org/about/news"},n}()),M=e("7wBh"),E=t.pb({encapsulation:0,styles:[[".handset   [_nghost-%COMP%], .tablet   [_nghost-%COMP%]{margin-bottom:50px;-ms-flex-wrap:wrap;flex-wrap:wrap}.handset   [_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%], .tablet   [_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.handset   [_nghost-%COMP%]{padding:50px 16px;margin-left:-16px;margin-right:-16px}.handset   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]{-ms-flex:1 1 100%;flex:1 1 100%}.tablet   [_nghost-%COMP%]{padding:50px 24px;margin-left:-24px;margin-right:-24px}.tablet   [_nghost-%COMP%]   .cart-container[_ngcontent-%COMP%]{margin-left:-16px}.tablet   [_nghost-%COMP%]   .card[_ngcontent-%COMP%]{margin:0 0 14px 14px;-ms-flex:1 1 33%;flex:1 1 33%}[_nghost-%COMP%]{display:-ms-flexbox;display:flex;padding:50px 26px 50px 16px;-ms-flex-direction:column;flex-direction:column;margin-top:-24px;margin-right:-24px}.edge.desktop   [_nghost-%COMP%], .ie.desktop   [_nghost-%COMP%]{display:block;margin:0;-webkit-transform:translateX(66px);-ms-transform:translateX(66px);transform:translateX(66px)}.date[_ngcontent-%COMP%]{margin-bottom:10px}.card[_ngcontent-%COMP%]{padding:19px 16px;box-shadow:0 3px 6px 0 rgba(0,0,0,.16);margin-bottom:14px;cursor:pointer}button[_ngcontent-%COMP%]{width:160px;margin-left:auto}.author[_ngcontent-%COMP%]{margin-top:8px}.spinner-container[_ngcontent-%COMP%]{display:-ms-flexbox;display:flex;height:100%;-ms-flex-pack:distribute;justify-content:space-around;padding-top:33%}body[dir]   [_nghost-%COMP%]{margin-left:-24px;margin-right:unset}body[dir]   .tabletOrHandset   [_nghost-%COMP%]{margin-left:-16px;margin-right:-16px}body[dir]   .edge.desktop   [_nghost-%COMP%], body[dir]   .ie.desktop   [_nghost-%COMP%]{display:block;margin:0;-webkit-transform:translateX(-66px);-ms-transform:translateX(-66px);transform:translateX(-66px)}"]],data:{animation:[{type:7,name:"listAnimation",definitions:[{type:1,expr:"* => *",animation:[{type:11,selector:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:12,timings:100,animation:[{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:"0.2s"}]}],options:null}],options:null}],options:{}}]}});function P(n){return t.Hb(0,[(n()(),t.rb(0,0,null,null,2,"div",[["class","spinner-container"]],null,null,null,null,null)),(n()(),t.rb(1,0,null,null,1,"mat-progress-spinner",[["class","mat-progress-spinner"],["mode","indeterminate"],["role","progressbar"]],[[2,"_mat-animation-noopable",null],[4,"width","px"],[4,"height","px"],[1,"aria-valuemin",0],[1,"aria-valuemax",0],[1,"aria-valuenow",0],[1,"mode",0]],null,null,O,x)),t.qb(2,49152,null,0,p,[t.l,h.a,[2,a.d],[2,_.a],m],{color:[0,"color"],mode:[1,"mode"]},null)],function(n,l){n(l,2,0,l.component.primary,"indeterminate")},function(n,l){n(l,1,0,t.zb(l,2)._noopAnimations,t.zb(l,2).diameter,t.zb(l,2).diameter,"determinate"===t.zb(l,2).mode?0:null,"determinate"===t.zb(l,2).mode?100:null,t.zb(l,2).value,t.zb(l,2).mode)})}function S(n){return t.Hb(0,[(n()(),t.rb(0,0,null,null,6,"div",[["class","card mat-ripple"],["matRipple",""]],[[2,"mat-ripple-unbounded",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.navigate(n.context.$implicit.link)&&t),t},null,null)),t.qb(1,212992,null,0,s.f,[t.l,t.B,h.a,[2,s.d],[2,_.a]],null,null),(n()(),t.rb(2,0,null,null,1,"div",[["class","date"]],null,null,null,null,null)),(n()(),t.Fb(3,null,["",""])),(n()(),t.Fb(4,null,[" "," "])),(n()(),t.rb(5,0,null,null,1,"div",[["class","author"]],null,null,null,null,null)),(n()(),t.Fb(6,null,["by ",""]))],function(n,l){n(l,1,0)},function(n,l){n(l,0,0,t.zb(l,1).unbounded),n(l,3,0,l.context.$implicit.pubDate[0].slice(0,22)),n(l,4,0,l.context.$implicit.title),n(l,6,0,l.context.$implicit["dc:creator"])})}function R(n){return t.Hb(0,[(n()(),t.rb(0,0,null,null,6,null,null,null,null,null,null,null)),(n()(),t.rb(1,0,null,null,2,"div",[["class","cart-container"]],[[24,"@listAnimation",0]],null,null,null,null)),(n()(),t.jb(16777216,null,null,1,null,S)),t.qb(3,278528,null,0,a.k,[t.S,t.P,t.u],{ngForOf:[0,"ngForOf"]},null),(n()(),t.rb(4,0,null,null,2,"button",[["color","primary"],["mat-raised-button",""]],[[8,"disabled",0],[2,"_mat-animation-noopable",null]],[[null,"click"]],function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.moreNews()&&t),t},v.b,v.a)),t.qb(5,180224,null,0,C.b,[t.l,h.a,w.d,[2,_.a]],{color:[0,"color"]},null),(n()(),t.Fb(-1,0,["M\xe1s novedades"]))],function(n,l){n(l,3,0,l.component.news),n(l,5,0,"primary")},function(n,l){n(l,1,0,l.component.news.length),n(l,4,0,t.zb(l,5).disabled||null,"NoopAnimations"===t.zb(l,5)._animationMode)})}function F(n){return t.Hb(0,[(n()(),t.rb(0,0,null,null,3,"div",[["class","count"]],null,null,null,null,null)),(n()(),t.Fb(-1,null,[" 5,566,081 "])),(n()(),t.rb(2,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["ORCID iDs y contando."])),(n()(),t.rb(4,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["\xdaLTIMAS NOVEDADES"])),(n()(),t.jb(16777216,null,null,1,null,P)),t.qb(7,16384,null,0,a.l,[t.S,t.P],{ngIf:[0,"ngIf"]},null),(n()(),t.jb(16777216,null,null,1,null,R)),t.qb(9,16384,null,0,a.l,[t.S,t.P],{ngIf:[0,"ngIf"]},null)],function(n,l){var e=l.component;n(l,7,0,!e.news),n(l,9,0,e.news)},null)}var D=function(){function n(n){var l=this;n.getPlatformInfo().subscribe(function(n){l.tabletOrHandset=n.tabletOrHandset})}return n.prototype.ngOnInit=function(){},n}(),T=e("GXSC"),I=t.pb({encapsulation:0,styles:[[".container[_ngcontent-%COMP%], .container.mdc-layout-grid__inner[_ngcontent-%COMP%]{margin-bottom:48px}.home-container.mdc-layout-grid__inner[_ngcontent-%COMP%]{height:100%}.edge[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%], .ie[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]{max-width:100vw}.edge   [_nghost-%COMP%], .ie   [_nghost-%COMP%]{display:-ms-flexbox;display:flex}"]],data:{animation:[{type:7,name:"enterAnimation",definitions:[{type:1,expr:":enter",animation:[{type:6,styles:{opacity:0},offset:null},{type:4,styles:{type:6,styles:{opacity:1},offset:null},timings:400}],options:null}],options:{}}]}});function j(n){return t.Hb(0,[(n()(),t.rb(0,0,null,null,69,"div",[["class","home-container mdc-layout-grid__inner"]],null,null,null,null,null)),(n()(),t.rb(1,0,null,null,2,"div",[],null,null,null,null,null)),t.qb(2,278528,null,0,a.j,[t.u,t.v,t.l,t.G],{ngClass:[0,"ngClass"]},null),t.Bb(3,{"mdc-layout-grid__cell--span-1":0}),(n()(),t.rb(4,0,null,null,58,"main",[],[[24,"@enterAnimation",0]],null,null,null,null)),t.qb(5,278528,null,0,a.j,[t.u,t.v,t.l,t.G],{ngClass:[0,"ngClass"]},null),t.Bb(6,{"mdc-layout-grid__cell--span-7":0,"mdc-layout-grid__cell--span-12":1}),(n()(),t.rb(7,0,null,null,9,"div",[["class","container"]],null,null,null,null,null)),(n()(),t.rb(8,0,null,null,4,"h1",[],null,null,null,null,null)),(n()(),t.rb(9,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["DIST\xcdNGASE EN"])),(n()(),t.rb(11,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["SENCILLOS PASOS"])),(n()(),t.rb(13,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["ORCID proporciona un identificador digital persistente que lo distingue a usted de todos los otros investigadores y, por medio de la integraci\xf3n en flujos de trabajo de investigaci\xf3n clave, como presentaci\xf3n de manuscritos y subvenciones, acepta enlaces automatizados entre usted y sus actividades profesionales, garantizando que su trabajo sea reconocido."])),(n()(),t.rb(15,0,null,null,1,"a",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Obtenga m\xe1s informaci\xf3n"])),(n()(),t.rb(17,0,null,null,34,"div",[["class","container mdc-layout-grid__inner"]],null,null,null,null,null)),(n()(),t.rb(18,0,null,null,5,"div",[["class","mdc-layout-grid__cell--span-3"]],null,null,null,null,null)),(n()(),t.rb(19,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["1"])),(n()(),t.Fb(-1,null,["- "])),(n()(),t.rb(22,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["REG\xcdSTRESE"])),(n()(),t.rb(24,0,null,null,6,"div",[["class","mdc-layout-grid__cell--span-9"]],null,null,null,null,null)),(n()(),t.rb(25,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["Obtenga su identificador \xfanico ORCID"])),(n()(),t.rb(27,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["\xa1Reg\xedstrese ahora!"])),(n()(),t.rb(29,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["Registrarse lleva 30 segundos."])),(n()(),t.rb(31,0,null,null,7,"div",[["class","mdc-layout-grid__cell--span-3"]],null,null,null,null,null)),(n()(),t.rb(32,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["2"])),(n()(),t.Fb(-1,null,["- "])),(n()(),t.rb(35,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["A\xd1ADA SU"])),(n()(),t.rb(37,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["INFORMACI\xd3N"])),(n()(),t.rb(39,0,null,null,2,"div",[["class","mdc-layout-grid__cell--span-9"]],null,null,null,null,null)),(n()(),t.rb(40,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["Mejore su registro ORCID con su informaci\xf3n profesional y vinc\xfalelo con sus otros identificadores (como Scopus o ResearcherID o LinkedIn)."])),(n()(),t.rb(42,0,null,null,7,"div",[["class","mdc-layout-grid__cell--span-3"]],null,null,null,null,null)),(n()(),t.rb(43,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["3"])),(n()(),t.Fb(-1,null,[" -"])),(n()(),t.rb(46,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["UTILICE SU"])),(n()(),t.rb(48,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["ORCID ID"])),(n()(),t.rb(50,0,null,null,1,"div",[["class","mdc-layout-grid__cell--span-9"]],null,null,null,null,null)),(n()(),t.Fb(-1,null,["Incluya su ORCID iD en su sitio web, al presentar publicaciones, solicitar subvenciones, y en cualquier flujo de trabajo de investigaci\xf3n para asegurarse de obtener reconocimiento por su trabajo."])),(n()(),t.rb(52,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(n()(),t.rb(53,0,null,null,1,"h2",[],null,null,null,null,null)),(n()(),t.Fb(-1,null,["\xa1LOS MIEMBROS SUSTENTAN LA EXISTENCIA DE ORCID!"])),(n()(),t.rb(55,0,null,null,7,"div",[],null,null,null,null,null)),(n()(),t.rb(56,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["ORCID es una organizaci\xf3n sin fines de lucro apoyada por una comunidad global de miembros organizacionales, incluidas las organizaciones de investigaci\xf3n, editoriales, patrocinadores, asociaciones profesionales y otras partes interesadas en el entorno de la investigaci\xf3n."])),(n()(),t.rb(58,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),t.rb(59,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["\xbfDesea saber qui\xe9nes son nuestros miembros?"])),(n()(),t.rb(61,0,null,null,1,null,null,null,null,null,null,null)),(n()(),t.Fb(-1,null,["Vea nuestra lista completa de organizaciones miembro"])),(n()(),t.rb(63,0,null,null,2,"div",[],null,null,null,null,null)),t.qb(64,278528,null,0,a.j,[t.u,t.v,t.l,t.G],{ngClass:[0,"ngClass"]},null),t.Bb(65,{"mdc-layout-grid__cell--span-1":0}),(n()(),t.rb(66,0,null,null,3,"app-news",[],null,null,null,F,E)),t.qb(67,278528,null,0,a.j,[t.u,t.v,t.l,t.G],{ngClass:[0,"ngClass"]},null),t.Bb(68,{"mdc-layout-grid__cell--span-3":0,"mdc-layout-grid__cell--span-12":1}),t.qb(69,114688,null,0,A,[M.a],null,null)],function(n,l){var e=l.component;n(l,2,0,n(l,3,0,!e.tabletOrHandset)),n(l,5,0,n(l,6,0,!e.tabletOrHandset,e.tabletOrHandset)),n(l,64,0,n(l,65,0,!e.tabletOrHandset)),n(l,67,0,n(l,68,0,!e.tabletOrHandset,e.tabletOrHandset)),n(l,69,0)},function(n,l){n(l,4,0,void 0)})}var N=t.nb("app-home",D,function(n){return t.Hb(0,[(n()(),t.rb(0,0,null,null,1,"app-home",[],null,null,null,j,I)),t.qb(1,114688,null,0,D,[T.a],null,null)],function(n,l){n(l,1,0)},null)},{},{},[]),L=e("t/Na"),X=e("ZYCi"),U=function(){},q=e("pKmL");e.d(l,"HomeModuleNgFactory",function(){return z});var z=t.ob(r,[],function(n){return t.wb([t.xb(512,t.k,t.eb,[[8,[o.a,N]],[3,t.k],t.z]),t.xb(4608,a.n,a.m,[t.w,[2,a.x]]),t.xb(4608,L.h,L.n,[a.d,t.D,L.l]),t.xb(4608,L.o,L.o,[L.h,L.m]),t.xb(5120,L.a,function(n){return[n]},[L.o]),t.xb(4608,L.k,L.k,[]),t.xb(6144,L.i,null,[L.k]),t.xb(4608,L.g,L.g,[L.i]),t.xb(6144,L.b,null,[L.g]),t.xb(4608,L.f,L.j,[L.b,t.s]),t.xb(4608,L.c,L.c,[L.f]),t.xb(1073742336,a.c,a.c,[]),t.xb(1073742336,X.m,X.m,[[2,X.s],[2,X.l]]),t.xb(1073742336,U,U,[]),t.xb(1073742336,b.a,b.a,[]),t.xb(1073742336,s.e,s.e,[[2,s.b],[2,g.g]]),t.xb(1073742336,h.b,h.b,[]),t.xb(1073742336,s.g,s.g,[]),t.xb(1073742336,C.c,C.c,[]),t.xb(1073742336,L.e,L.e,[]),t.xb(1073742336,L.d,L.d,[]),t.xb(1073742336,q.a,q.a,[]),t.xb(1073742336,f,f,[]),t.xb(1073742336,r,r,[]),t.xb(256,t.w,"es",[]),t.xb(1024,X.j,function(){return[[{path:"",component:D}]]},[]),t.xb(256,L.l,"XSRF-TOKEN",[]),t.xb(256,L.m,"X-XSRF-TOKEN",[]),t.xb(256,t.O,"xlf2",[])])})}}]);