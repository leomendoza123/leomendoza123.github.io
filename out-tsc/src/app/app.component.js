var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { Breakpoints } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { HostBinding } from '@angular/core';
var AppComponent = /** @class */ (function () {
    function AppComponent(_breakpointObserver, _platform) {
        var _this = this;
        this._breakpointObserver = _breakpointObserver;
        this._platform = _platform;
        this.ie = _platform.TRIDENT;
        this.edge = _platform.EDGE;
        this._breakpointObserver.observe([Breakpoints.Handset]).subscribe(function (state) {
            if (state.matches) {
                _this.handset = true;
            }
            else {
                _this.handset = false;
            }
        });
        this._breakpointObserver.observe([Breakpoints.Tablet]).subscribe(function (state) {
            if (state.matches) {
                _this.tablet = true;
            }
            else {
                _this.tablet = false;
            }
        });
        this._breakpointObserver
            .observe([Breakpoints.Handset, Breakpoints.Tablet])
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
        HostBinding('class.edge'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "edge", void 0);
    __decorate([
        HostBinding('class.ie'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "ie", void 0);
    __decorate([
        HostBinding('class.tabletOrHandset'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "tabletOrHandset", void 0);
    __decorate([
        HostBinding('class.handset'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "handset", void 0);
    __decorate([
        HostBinding('class.tablet'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "tablet", void 0);
    __decorate([
        HostBinding('class.desktop'),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "desktop", void 0);
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss'],
        }),
        __metadata("design:paramtypes", [BreakpointObserver,
            Platform])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map