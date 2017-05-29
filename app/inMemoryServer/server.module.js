"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var index_1 = require("../index");
var InMemoryServerModule = (function () {
    function InMemoryServerModule() {
    }
    return InMemoryServerModule;
}());
InMemoryServerModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule,
            http_1.HttpModule,
            forms_1.FormsModule
        ],
        declarations: [
            index_1.RegistrationComponent,
            index_1.LoginComponent,
            index_1.ProductList
        ]
    })
], InMemoryServerModule);
exports.InMemoryServerModule = InMemoryServerModule;
//# sourceMappingURL=server.module.js.map