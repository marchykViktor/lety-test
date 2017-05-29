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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var pagination_service_1 = require("../products/pagination.service");
var login_service_1 = require("../log/login.service");
var router_1 = require("@angular/router");
var ProductList = (function () {
    function ProductList(router, jsonp, paginationService, aService) {
        this.router = router;
        this.jsonp = jsonp;
        this.paginationService = paginationService;
        this.aService = aService;
        this.pager = {};
    }
    ProductList.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductList.prototype.logOut = function () {
        this.aService.logout();
        this.router.navigate(["login"]);
    };
    ProductList.prototype.getProducts = function () {
        var _this = this;
        var productsUrl = "http://www.json-generator.com/api/json/get/bZTcBnsIgO";
        var params = new http_1.URLSearchParams();
        params.set("callback", "JSONP_CALLBACK");
        params.set("format", "json");
        this.jsonp.get(productsUrl, { search: params });
        this.jsonp.get(productsUrl, { search: params }).subscribe(function (result) {
            _this.productsArray = result.json();
            _this.setPage(1);
        }, function (error) { return console.log(error.statusText); });
    };
    ProductList.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.pager = this.paginationService.getPager(this.productsArray.length, page);
        this.pagedItems = this.productsArray.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    return ProductList;
}());
ProductList = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "products-list",
        templateUrl: "products-list.component.html",
        styleUrls: ["products-list.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Jsonp, pagination_service_1.PaginationService, login_service_1.AuthService])
], ProductList);
exports.ProductList = ProductList;
//# sourceMappingURL=products-list.component.js.map