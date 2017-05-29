"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var angular2_in_memory_web_api_1 = require("angular2-in-memory-web-api");
var login_guard_service_1 = require("./log/login-guard.service");
var inMemoryServer_1 = require("./inMemoryServer/inMemoryServer");
var server_module_1 = require("./inMemoryServer/server.module");
var pagination_service_1 = require("./products/pagination.service");
var login_service_1 = require("./log/login.service");
var forms_1 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            router_1.RouterModule.forRoot(app_routes_1.routes),
            http_1.HttpModule,
            http_1.JsonpModule,
            angular2_in_memory_web_api_1.InMemoryWebApiModule.forRoot(inMemoryServer_1.ItemData),
            server_module_1.InMemoryServerModule,
            forms_1.FormsModule
        ],
        providers: [login_guard_service_1.AuthGuard, login_service_1.AuthService, pagination_service_1.PaginationService],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map