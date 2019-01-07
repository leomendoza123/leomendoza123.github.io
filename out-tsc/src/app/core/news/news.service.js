var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { ErrorHandlerService } from '../error-handler/error-handler.service';
import { retry, catchError, flatMap } from 'rxjs/operators';
// TODO: It might be posuble to return the news response as a JSON from the backend to avoid adding XML2JS in to production bundle.
import { Parser } from 'xml2js';
import { Observable } from 'rxjs';
var NewsService = /** @class */ (function () {
    function NewsService(_http, _errorHandler) {
        this._http = _http;
        this._errorHandler = _errorHandler;
        this.parser = new Parser();
    }
    NewsService.prototype.getNews = function () {
        var _this = this;
        return this._http.get(environment.API_NEWS, { responseType: 'text' }).pipe(retry(3), catchError(this._errorHandler.handleError), flatMap(function (data) {
            return Observable.create(function (observer) {
                _this.parser.parseString(data, function (error, parsedData) {
                    if (!error) {
                        if (parsedData &&
                            parsedData.rss &&
                            parsedData.rss.channel &&
                            parsedData.rss.channel[0] &&
                            parsedData.rss.channel[0].item) {
                            observer.next(parsedData.rss.channel[0].item.filter(function (item, index) {
                                return index < 6;
                            }));
                        }
                        else {
                            _this._errorHandler.xml2jsParser('invalid data response');
                        }
                    }
                    else {
                        _this._errorHandler.xml2jsParser(error);
                    }
                });
            });
        }));
    };
    NewsService = __decorate([
        Injectable({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [HttpClient,
            ErrorHandlerService])
    ], NewsService);
    return NewsService;
}());
export { NewsService };
//# sourceMappingURL=news.service.js.map