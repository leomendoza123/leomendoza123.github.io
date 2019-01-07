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
import { NewsService } from '../../../core/news/news.service';
import { environment } from '../../../../environments/environment.sandbox';
import { trigger } from '@angular/animations';
import { transition } from '@angular/animations';
import { style } from '@angular/animations';
import { animate } from '@angular/animations';
import { stagger } from '@angular/animations';
import { query } from '@angular/animations';
var NewsComponent = /** @class */ (function () {
    function NewsComponent(_news) {
        this._news = _news;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._news.getNews().subscribe(function (data) {
            _this.news = data;
        });
    };
    NewsComponent.prototype.navigate = function (url) {
        window.location.href = url[0];
    };
    NewsComponent.prototype.moreNews = function () {
        window.location.href = environment.BLOG_NEWS;
    };
    NewsComponent = __decorate([
        Component({
            selector: 'app-news',
            templateUrl: './news.component.html',
            styleUrls: ['./news.component.scss'],
            animations: [
                trigger('listAnimation', [
                    transition('* => *', [
                        query(':enter', [
                            style({ opacity: 0 }),
                            stagger(100, [animate('0.2s', style({ opacity: 1 }))]),
                        ]),
                    ]),
                ]),
            ],
        }),
        __metadata("design:paramtypes", [NewsService])
    ], NewsComponent);
    return NewsComponent;
}());
export { NewsComponent };
//# sourceMappingURL=news.component.js.map