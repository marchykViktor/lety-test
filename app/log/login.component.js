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
var login_service_1 = require("./login.service");
var router_1 = require("@angular/router");
var LoginComponent = (function () {
    function LoginComponent(router, http, aService) {
        this.router = router;
        this.http = http;
        this.aService = aService;
    }
    LoginComponent.prototype.goToReg = function () {
        this.router.navigate(["registration"]);
    };
    LoginComponent.prototype.authGuard = function (users) {
        this.authGuardState = false;
        for (var i = 0; i < users.length; ++i) {
            if (this.login === users[i].login && this.password === users[i].password) {
                this.authGuardState = true;
                this.aService.login();
                this.router.navigate(["products"]);
                break;
            }
            ;
        }
        if (this.authGuardState === false) {
            alert('Вы ввели неправильно логин или пароль');
        }
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.http.get("app/items").subscribe(function (result) {
            _this.usersArray = result.json().data;
            _this.authGuard(_this.usersArray);
        }, function (error) { return console.log(error.statusText); });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "login",
        templateUrl: "login.component.html",
        styleUrls: ["login.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http, login_service_1.AuthService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map