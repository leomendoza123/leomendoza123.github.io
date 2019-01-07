var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Breakpoints } from '@angular/cdk/layout';
import { Inject } from '@angular/core';
import { LOCALE_ID } from '@angular/core';
import { environment } from '../../../environments/environment';
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
        this.languageMenuOptions = environment.LANGUAGE_MENU_OPTIONS;
        _router.events
            .pipe(filter(function (event) { return event instanceof NavigationEnd; }))
            .subscribe(function (val) {
            _this.currentRoute = _router.url;
        });
        _breakpointObserver
            .observe([Breakpoints.Handset, Breakpoints.Tablet])
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
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
        }),
        __param(2, Inject(LOCALE_ID)),
        __metadata("design:paramtypes", [Router,
            BreakpointObserver, String])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map