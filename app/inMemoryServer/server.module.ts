import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { RegistrationComponent, LoginComponent, ProductList } from "../index";

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        FormsModule
    ],
    declarations: [
        RegistrationComponent,
        LoginComponent,
        ProductList
    ]
})
export class InMemoryServerModule {

}