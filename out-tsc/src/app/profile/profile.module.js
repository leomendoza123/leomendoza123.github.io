var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileGeneralDataComponent } from './components/profile-general-data/profile-general-data.component';
import { ProfileBiographyComponent } from './components/profile-biography/profile-biography.component';
import { ProfileRecordsComponent } from './components/profile-records/profile-records.component';
import { ProfilePublicPageComponent } from './pages/profile-public-page/profile-public-page.component';
import { ProfilePrivatePageComponent } from './pages/profile-private-page/profile-private-page.component';
var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        NgModule({
            imports: [CommonModule, ProfileRoutingModule],
            declarations: [
                ProfileGeneralDataComponent,
                ProfileBiographyComponent,
                ProfileRecordsComponent,
                ProfilePublicPageComponent,
                ProfilePrivatePageComponent,
            ],
        })
    ], ProfileModule);
    return ProfileModule;
}());
export { ProfileModule };
//# sourceMappingURL=profile.module.js.map