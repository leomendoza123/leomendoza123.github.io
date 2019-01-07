import { async, TestBed } from '@angular/core/testing';
import { ProfileRecordsComponent } from './profile-records.component';
describe('ProfileRecordsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ProfileRecordsComponent],
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ProfileRecordsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=profile-records.component.spec.js.map