import { async, TestBed } from '@angular/core/testing';
import { ProfilePrivatePageComponent } from './profile-private-page.component';
describe('ProfilePrivatePageComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProfilePrivatePageComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProfilePrivatePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profile-private-page.component.spec.js.map