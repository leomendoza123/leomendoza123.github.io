var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule, } from '@angular/router';
import { ProfilePublicPageComponent } from './pages/profile-public-page/profile-public-page.component';
import { ProfilePrivatePageComponent } from './pages/profile-private-page/profile-private-page.component';
var idMatcher = function (url) {
    console.log(url);
    var regExp = new RegExp('([0-9]{4}-){3}[0-9]{4}');
    if (url[0] && regExp.test(url[0].path)) {
        return {
            consumed: [url[0]],
        };
    }
    return { consumed: [] };
};
var routes = [
    {
        matcher: idMatcher,
        component: ProfilePublicPageComponent,
    },
    {
        path: 'myOrcid',
        component: ProfilePrivatePageComponent,
    },
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forChild(routes)],
            exports: [RouterModule],
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());
export { ProfileRoutingModule };
//# sourceMappingURL=profile-routing.module.js.map