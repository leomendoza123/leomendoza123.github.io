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
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
var FooterComponent = /** @class */ (function () {
    function FooterComponent(_breakpointObserver) {
        var _this = this;
        this._breakpointObserver = _breakpointObserver;
        this._breakpointObserver
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
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = __decorate([
        Component({
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.scss'],
        }),
        __metadata("design:paramtypes", [BreakpointObserver])
    ], FooterComponent);
    return FooterComponent;
}());
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map