"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var post_service_1 = require("../services/post.service");
var BookComponent = (function () {
    function BookComponent(PostsService) {
        this.PostsService = PostsService;
    }
    BookComponent.prototype.searchBook = function (search) {
        var _this = this;
        this.PostsService.getPost(search).subscribe(function (posts) {
            _this.posts = posts.items;
            // console.log(posts.items[1].volumeInfo.publishedDate)
        });
    };
    return BookComponent;
}());
BookComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'book',
        templateUrl: "book.component.html",
        providers: [post_service_1.PostsService]
    }),
    __metadata("design:paramtypes", [post_service_1.PostsService])
], BookComponent);
exports.BookComponent = BookComponent;
//# sourceMappingURL=book.component.js.map