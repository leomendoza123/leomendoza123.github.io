import { async, TestBed } from '@angular/core/testing';
import { ProfileGeneralDataComponent } from './profile-general-data.component';
describe('ProfileGeneralDataComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProfileGeneralDataComponent],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProfileGeneralDataComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profile-general-data.component.spec.js.map