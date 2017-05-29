"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
exports.routes = [
    {
        path: "",
        redirectTo: "registration",
        pathMatch: "full"
    },
    {
        path: "registration",
        component: index_1.RegistrationComponent
    },
    {
        path: "login",
        component: index_1.LoginComponent
    },
    {
        path: "products",
        component: index_1.ProductList,
        canActivate: [index_1.AuthGuard]
    }
];
//# sourceMappingURL=app.routes.js.map