(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home-home-module"
	],
	"./profile/profile.module": [
		"./src/app/profile/profile.module.ts",
		"profile-profile-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule',
    },
    {
        path: '',
        loadChildren: './profile/profile.module#ProfileModule',
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"router-container mdc-layout-grid\">\n  <router-outlet> </router-outlet>\n</div>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-footer {\n  position: absolute;\n  bottom: 0;\n  width: 100%; }\n\n.router-container {\n  -ms-flex: 1 0 auto;\n      flex: 1 0 auto;\n  display: -ms-flexbox;\n  display: flex; }\n\n:host.tabletOrHandset .router-container {\n  padding-bottom: 195px; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = /** @class */ (function () {
    function AppComponent(_breakpointObserver, _platform) {
        var _this = this;
        this._breakpointObserver = _breakpointObserver;
        this._platform = _platform;
        this.ie = _platform.TRIDENT;
        this.edge = _platform.EDGE;
        this._breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset]).subscribe(function (state) {
            if (state.matches) {
                _this.handset = true;
            }
            else {
                _this.handset = false;
            }
        });
        this._breakpointObserver.observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Tablet]).subscribe(function (state) {
            if (state.matches) {
                _this.tablet = true;
            }
            else {
                _this.tablet = false;
            }
        });
        this._breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Tablet])
            .subscribe(function (state) {
            if (state.matches) {
                _this.tabletOrHandset = true;
                _this.desktop = false;
            }
            else {
                _this.tabletOrHandset = false;
                _this.desktop = true;
            }
        });
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.edge'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "edge", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.ie'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "ie", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.tabletOrHandset'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "tabletOrHandset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.handset'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "handset", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.tablet'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "tablet", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.desktop'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "desktop", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"],
            _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]],
            declarations: [],
            providers: [],
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer [ngClass]=\"{ tabletOrHandset: tabletOrHandset }\">\n  <ul class=\"buttons-container\">\n    <li>\n      <button mat-button>\n        <div class=\"button-wrapper\" i18n=\"@@footer.contactus\">Contact us</div>\n      </button>\n    </li>\n    <li>\n      <button mat-button>\n        <div class=\"button-wrapper\" i18n=\"@@footer.privacypolicy\">\n          Privacy Policy\n        </div>\n      </button>\n    </li>\n    <li>\n      <button mat-button>\n        <div class=\"button-wrapper\" i18n=\"@@footer.termsofuse\">\n          Terms of Use\n        </div>\n      </button>\n    </li>\n    <li>\n      <button mat-button>\n        <div class=\"button-wrapper\">\n          <div i18n=\"@@footer.openSource\">Open Source Project</div>\n          <div class=\"logo\"><img src=\"./assets/vectors/github.logo.svg\" /></div>\n        </div>\n      </button>\n    </li>\n  </ul>\n</footer>\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\n  height: 46px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around;\n  bottom: 0;\n  width: 100%; }\n  footer ul.buttons-container {\n    display: -ms-flexbox;\n    display: flex;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    -ms-flex-align: center;\n        align-items: center; }\n  footer ul.buttons-container li {\n      height: 100%;\n      display: -ms-flexbox;\n      display: flex; }\n  footer ul.buttons-container li .button-wrapper {\n        padding: 0 10px;\n        display: -ms-flexbox;\n        display: flex; }\n  footer ul.buttons-container li .button-wrapper .logo {\n          display: -ms-flexbox;\n          display: flex;\n          -ms-flex-align: center;\n              align-items: center;\n          margin-left: 12px; }\n  footer ul.buttons-container li .button-wrapper .logo img {\n            width: 18px;\n            opacity: 0.57; }\n  .tabletOrHandset :host footer {\n  height: 195px; }\n  .tabletOrHandset :host footer ul.buttons-container {\n    -ms-flex-direction: column;\n        flex-direction: column; }\n  .tabletOrHandset :host footer ul.buttons-container li .button-wrapper .logo {\n  margin: none;\n  margin-right: 12px; }\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(_breakpointObserver) {
        var _this = this;
        this._breakpointObserver = _breakpointObserver;
        this._breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["Breakpoints"].Tablet])
            .subscribe(function (state) {
            if (state.matches) {
                _this.tabletOrHandset = true;
            }
            else {
                _this.tabletOrHandset = false;
            }
        });
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/layout/footer/footer.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_1__["BreakpointObserver"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- WEB VERSION -->\n<header *ngIf=\"!tabletOrHandset\">\n  <div class=\"logo\"><img src=\"./assets/vectors/orcid.logo.svg\" /></div>\n</header>\n<nav (mouseleave)=\"mouseLeave()\" *ngIf=\"!tabletOrHandset\">\n  <div class=\"top-bar\">\n    <div class=\"main-menu\">\n      <ul class=\"buttons-container\">\n        <li [ngClass]=\"{ active: menu.researchers.route === currentRoute }\">\n          <button\n            mat-button\n            (click)=\"click('researchers')\"\n            (mouseenter)=\"mouseEnter('researchers')\"\n            i18n=\"@@public-layout.for_researchers\"\n          >\n            For Researchers\n          </button>\n        </li>\n        <li [ngClass]=\"{ active: menu.organizations.route === currentRoute }\">\n          <button\n            mat-button\n            (click)=\"click('organizations')\"\n            (mouseenter)=\"mouseEnter('organizations')\"\n            i18n=\"@@public-layout.for_organizations\"\n          >\n            For Organizations\n          </button>\n        </li>\n        <li [ngClass]=\"{ active: menu.about.route === currentRoute }\">\n          <button\n            mat-button\n            (click)=\"click('about')\"\n            (mouseenter)=\"mouseEnter('about')\"\n            i18n=\"@@public-layout.about\"\n          >\n            About\n          </button>\n        </li>\n        <li [ngClass]=\"{ active: menu.help.route === currentRoute }\">\n          <button\n            mat-button\n            (click)=\"click('help')\"\n            (mouseenter)=\"mouseEnter('help')\"\n            i18n=\"@@public-layout.help\"\n          >\n            Help\n          </button>\n        </li>\n        <li [ngClass]=\"{ active: menu.signIn.route === currentRoute }\">\n          <button\n            mat-button\n            (click)=\"click('signIn')\"\n            (mouseenter)=\"mouseEnter('signIn')\"\n            i18n=\"@@public-layout.sign_in\"\n          >\n            Sign in\n          </button>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"search-menu\">\n      <i class=\"material-icons\"> search </i>\n      <button mat-button [matMenuTriggerFor]=\"languageMenu\">\n        <div class=\"language\">\n          <i class=\"material-icons\"> language </i>\n          <p>{{ languageMenuOptions[locale] }}</p>\n          <i class=\"material-icons\"> expand_more </i>\n        </div>\n      </button>\n    </div>\n  </div>\n\n  <div class=\"bottom-bar\">\n    <div class=\"secondary-menu\" *ngIf=\"menu.researchers.hover\">\n      <ul class=\"buttons-container\">\n        <li>\n          <button mat-button i18n=\"@@public-layout.sign_in\">SIGN IN</button>\n        </li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.register\">\n            Register for an ORCID iD\n          </button>\n        </li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.for_researchers\">\n            Learn more\n          </button>\n        </li>\n      </ul>\n    </div>\n    <div class=\"secondary-menu\" *ngIf=\"menu.organizations.hover\">\n      <ul class=\"buttons-container\">\n        <li>\n          <button mat-button i18n=\"@@public-layout.funders\">Funders</button>\n        </li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.publishers\">\n            Publishers\n          </button>\n        </li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.research_organizations\">\n            Research Organizations\n          </button>\n        </li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.associations\">\n            Associations\n          </button>\n        </li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.integrators\">\n            Integrators\n          </button>\n        </li>\n      </ul>\n    </div>\n    <div class=\"secondary-menu\" *ngIf=\"menu.about.hover\">\n      <ul class=\"buttons-container\">\n        <li>\n          <button mat-button i18n=\"@@public-layout.what_is_orcid\">\n            What is ORCID\n          </button>\n        </li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.the_orcid_team\">\n            The ORCID Team\n          </button>\n        </li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.the_orcid_community\">\n            The ORCID Community\n          </button>\n        </li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.membership\">\n            Membership\n          </button>\n        </li>\n        <li><button mat-button i18n=\"@@public-layout.news\">News</button></li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.events\">Events</button>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"secondary-menu\" *ngIf=\"menu.help.hover\">\n      <ul class=\"buttons-container\">\n        <li><button mat-button i18n=\"@@public-layout.faq\">FAQ</button></li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.contact_us\">\n            Contact us\n          </button>\n        </li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.give_feedback\">\n            Give Feedback\n          </button>\n        </li>\n        <li>\n          <button mat-button i18n=\"@@public-layout.knowledge_base\">\n            Knowledge Base\n          </button>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n\n<!-- HANDSET AND TABLET VERSION -->\n<nav *ngIf=\"tabletOrHandset\">\n  <div class=\"top-bar\">\n    <div class=\"main-menu\">\n      <div class=\"menu-logo-container\">\n        <button mat-icon-button [matMenuTriggerFor]=\"appMenu\">\n          <div class=\"icon-button\"><i class=\"material-icons\"> menu </i></div>\n        </button>\n\n        <div class=\"logo\"><img src=\"./assets/vectors/orcid.logo.svg\" /></div>\n      </div>\n      <div class=\"search-menu\">\n        <i class=\"material-icons\"> search </i>\n        <button mat-icon-button [matMenuTriggerFor]=\"languageMenu\">\n          <div class=\"icon-button\">\n            <i class=\"material-icons\"> language </i>\n          </div>\n        </button>\n      </div>\n    </div>\n  </div>\n\n  <mat-menu #appMenu=\"matMenu\">\n    <div [ngClass]=\"{ active: menu.researchers.route === currentRoute }\">\n      <button\n        mat-menu-item\n        [matMenuTriggerFor]=\"researchers\"\n        i18n=\"@@public-layout.for_researchers\"\n      >\n        For Researchers\n      </button>\n    </div>\n\n    <div>\n      <button\n        mat-menu-item\n        [matMenuTriggerFor]=\"organizations\"\n        [ngClass]=\"{ active: menu.organizations.route === currentRoute }\"\n        i18n=\"@@public-layout.for_organizations\"\n      >\n        For organizations\n      </button>\n    </div>\n\n    <div>\n      <button\n        mat-menu-item\n        [matMenuTriggerFor]=\"about\"\n        [ngClass]=\"{ active: menu.about.route === currentRoute }\"\n        i18n=\"@@public-layout.about\"\n      >\n        About\n      </button>\n    </div>\n\n    <div>\n      <button\n        mat-menu-item\n        [matMenuTriggerFor]=\"help\"\n        [ngClass]=\"{ active: menu.help.route === currentRoute }\"\n        i18n=\"@@public-layout.help\"\n      >\n        Help\n      </button>\n    </div>\n    <div>\n      <button\n        mat-menu-item\n        [ngClass]=\"{ active: menu.signIn.route === currentRoute }\"\n        i18n=\"@@public-layout.sign_in\"\n      >\n        Sign in\n      </button>\n    </div>\n  </mat-menu>\n\n  <mat-menu #researchers=\"matMenu\">\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.sign_in\">SIGN IN</button>\n    </div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.register\">\n        Register for an ORCID iD\n      </button>\n    </div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.for_researchers\">\n        Learn more\n      </button>\n    </div>\n  </mat-menu>\n\n  <mat-menu #organizations=\"matMenu\">\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.funders\">FUNDERS</button>\n    </div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.publishers\">\n        Publishers\n      </button>\n    </div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.research_organizations\">\n        Research Organizations\n      </button>\n    </div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.associations\">\n        Associations\n      </button>\n    </div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.integrators\">\n        Integrators\n      </button>\n    </div>\n  </mat-menu>\n\n  <mat-menu #about=\"matMenu\">\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.what_is_orcid\">\n        What is orcid\n      </button>\n    </div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.the_orcid_team\">\n        The ORCID team\n      </button>\n    </div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.the_orcid_community\">\n        The ORCID Community\n      </button>\n    </div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.membership\">\n        Membership\n      </button>\n    </div>\n    <div><button mat-menu-item i18n=\"@@public-layout.news\">NEWS</button></div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.events\">EVENTS</button>\n    </div>\n  </mat-menu>\n\n  <mat-menu #help=\"matMenu\">\n    <div><button mat-menu-item i18n=\"@@public-layout.faq\">FAQ</button></div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.contact_us\">\n        Contact us\n      </button>\n    </div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.give_feedback\">\n        Give Feedback\n      </button>\n    </div>\n    <div>\n      <button mat-menu-item i18n=\"@@public-layout.knowledge_base\">\n        Knowledge Base\n      </button>\n    </div>\n  </mat-menu>\n</nav>\n\n<mat-menu #languageMenu=\"matMenu\">\n  <div\n    *ngFor=\"let language of (languageMenuOptions | keyvalue)\"\n    [ngClass]=\"{ active: language.key === locale }\"\n    (click)=\"changeLanguage(language.key)\"\n  >\n    <button mat-menu-item>{{ language.value }}</button>\n  </div>\n</mat-menu>\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header {\n  height: 55px; }\n  header .logo {\n    margin-left: 24px;\n    width: 103px;\n    padding-top: 12px;\n    cursor: pointer; }\n  nav {\n  z-index: 2;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column; }\n  nav .top-bar {\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n    padding-left: 24px;\n    padding-right: 24px;\n    height: 50px;\n    font-weight: 600;\n    margin-left: -15px; }\n  nav .top-bar .search-menu {\n      width: 189px;\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n      -ms-flex-align: center;\n          align-items: center; }\n  nav .top-bar .search-menu .language {\n        display: -ms-flexbox;\n        display: flex;\n        -ms-flex-align: center;\n            align-items: center;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n        width: 105px;\n        height: 50px; }\n  nav .top-bar li {\n      height: 100%; }\n  nav .bottom-bar {\n    z-index: 1;\n    padding-left: 24px;\n    padding-right: 24px;\n    display: -ms-flexbox;\n    display: flex;\n    -ms-flex-direction: column-reverse;\n        flex-direction: column-reverse;\n    box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16);\n    height: 40px;\n    margin-left: -15px; }\n  nav .bottom-bar .secondary-menu {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      height: 100%; }\n  nav .bottom-bar .secondary-menu .buttons-container {\n        margin-top: 1px; }\n  nav .bottom-bar .secondary-menu .buttons-container li {\n          height: 38px;\n          padding-bottom: 1px; }\n  nav ul {\n    height: 100%; }\n  nav ul li {\n      display: -ms-flexbox;\n      display: flex;\n      -ms-flex-align: center;\n          align-items: center;\n      min-width: 20px; }\n  nav ul li button {\n        height: 100%;\n        width: 100%; }\n  nav ul li button.mat-button {\n        text-transform: uppercase; }\n  nav li,\n  nav i {\n    cursor: pointer; }\n  nav .buttons-container {\n    display: -ms-flexbox;\n    display: flex;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n    height: 100%;\n    -ms-flex-align: center;\n        align-items: center;\n    max-width: 100%; }\n  .tabletOrHandset :host nav .top-bar {\n  height: unset; }\n  .tabletOrHandset :host nav .logo {\n  margin-left: 6px;\n  width: 103px;\n  cursor: pointer;\n  padding: 0; }\n  .tabletOrHandset :host nav .menu-logo-container {\n  margin-left: -10px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n  .tabletOrHandset :host nav .main-menu {\n  height: 61px;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  -ms-flex-pack: justify;\n      justify-content: space-between; }\n  .tabletOrHandset :host nav .top-bar {\n  margin-left: unset;\n  padding-left: 16px;\n  padding-right: 16px;\n  box-shadow: 0 3px 6px 0px rgba(0, 0, 0, 0.16); }\n  .tabletOrHandset :host nav .top-bar .search-menu {\n    width: 70px;\n    margin-right: -10px; }\n  .tabletOrHandset :host nav .icon-button {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: distribute;\n      justify-content: space-around; }\n  body[dir] :host header .logo {\n  margin-left: unset;\n  margin-right: 24px; }\n  body[dir] :host nav .top-bar {\n  margin-left: unset;\n  margin-right: -15px; }\n  body[dir] :host nav .bottom-bar {\n  margin-right: -15px;\n  margin-left: unset; }\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(_router, _breakpointObserver, locale) {
        var _this = this;
        this.locale = locale;
        this.menu = {
            researchers: {
                hover: true,
                route: '/',
                buttons: {
                    signIn: {},
                    signUp: {},
                    learMore: {},
                },
            },
            organizations: {
                hover: false,
                active: false,
                buttons: {
                    funders: {},
                    publishers: {},
                    organizations: {},
                    outreach: {},
                    api: {},
                },
            },
            about: {
                hover: false,
                active: false,
                buttons: {
                    what: {},
                    are: {},
                    serve: {},
                    membership: {},
                    events: {},
                },
            },
            help: {
                hover: false,
                active: false,
                buttons: {
                    help: {},
                    faq: {},
                    base: {},
                    feedback: {},
                },
            },
            signIn: {
                hover: false,
                active: false,
            },
        };
        this.languageMenuOptions = _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].LANGUAGE_MENU_OPTIONS;
        _router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }))
            .subscribe(function (val) {
            _this.currentRoute = _router.url;
        });
        _breakpointObserver
            .observe([_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Handset, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["Breakpoints"].Tablet])
            .subscribe(function (state) {
            if (state.matches) {
                _this.tabletOrHandset = true;
            }
            else {
                _this.tabletOrHandset = false;
            }
        });
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent.prototype.mouseEnter = function (ul) {
        var _this = this;
        Object.keys(this.menu).forEach(function (button) {
            if (button === ul) {
                _this.menu[button].hover = true;
            }
            else {
                _this.menu[button].hover = false;
            }
        });
        this.menu[ul].hover = true;
    };
    HeaderComponent.prototype.mouseLeave = function () {
        var _this = this;
        Object.keys(this.menu).forEach(function (button) {
            _this.menu[button].hover = _this.menu[button].route === _this.currentRoute;
        });
    };
    HeaderComponent.prototype.click = function (ul) { };
    HeaderComponent.prototype.changeLanguage = function (languageKey) {
        window.location.href = '/' + languageKey;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/layout/header/header.component.scss")],
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["BreakpointObserver"], String])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"]],
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    API_NEWS: 'http://localhost:4100/https://orcid.org/blog/feed',
    API_WEB: 'http://localhost:4100/https://qa.orcid.org/',
    // Use https://cors.io/ to proxy the news endpoint to avoid CORS errors during development/demo
    BLOG_NEWS: 'https://orcid.org/about/news',
    LANGUAGE_MENU_OPTIONS: {
        ar: 'العربية',
        cs: 'Čeština',
        en: 'English',
        es: 'Español',
        fr: 'Français',
        it: 'Italiano',
        ja: '日本語',
        ko: '한국어',
        pt: 'Português',
        ru: 'Русский',
        'zh-CN': '简体中文',
        'zh-TW': '繁體中文',
        xx: '** xx',
        lr: '** lr',
        rl: '** rl',
        uk: '** Ukrainian',
        ca: '** Catalan',
    },
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/leo/Code/orcid-angular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map