import { Routes } from "@angular/router";
import { RegistrationComponent, LoginComponent, ProductList, AuthGuard } from "./index"

export const routes: Routes = [
    {
        path: "",
        redirectTo: "registration",
        pathMatch: "full"
    },
    {
        path: "registration",
        component: RegistrationComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "products",
        component: ProductList,
        canActivate: [AuthGuard]
    }
];