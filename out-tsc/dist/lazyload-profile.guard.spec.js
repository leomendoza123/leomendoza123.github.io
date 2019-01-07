import { TestBed, inject } from '@angular/core/testing';
import { LazyloadProfileGuard } from './lazyload-profile.guard';
describe('LazyloadProfileGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [LazyloadProfileGuard]
        });
    });
    it('should ...', inject([LazyloadProfileGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=lazyload-profile.guard.spec.js.map