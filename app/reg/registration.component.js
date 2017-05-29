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
var router_1 = require("@angular/router");
var user_1 = require("./user");
var RegistrationComponent = (function () {
    function RegistrationComponent(router, http) {
        this.router = router;
        this.http = http;
        this.user = new user_1.User();
    }
    RegistrationComponent.prototype.goToLogin = function () {
        this.router.navigate(["login"]);
    };
    RegistrationComponent.prototype.checkFieldPassword = function () {
        if (this.user.password === this.user.rePassword) {
            return true;
        }
        else {
            return false;
        }
    };
    RegistrationComponent.prototype.addUser = function () {
        var _this = this;
        this.http.post("app/items", {
            login: this.user.email,
            password: this.user.password
        }).subscribe(function (result) {
            var json = result.json();
            if (json)
                _this.goToLogin();
        }, function (error) { return console.log(error.statusText); });
    };
    return RegistrationComponent;
}());
RegistrationComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "registration",
        templateUrl: "registration.component.html",
        styleUrls: ["registration.component.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router, http_1.Http])
], RegistrationComponent);
exports.RegistrationComponent = RegistrationComponent;
//# sourceMappingURL=registration.component.js.map