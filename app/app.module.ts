import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { HttpModule, JsonpModule } from "@angular/http";
import { AppComponent } from "./app.component";
import { routes } from "./app.routes";
import { InMemoryWebApiModule } from "angular2-in-memory-web-api";
import { AuthGuard } from "./log/login-guard.service";
import { ItemData } from "./inMemoryServer/inMemoryServer";
import { InMemoryServerModule } from "./inMemoryServer/server.module";
import { PaginationService } from "./products/pagination.service";
import { AuthService } from "./log/login.service";
import { FormsModule } from "@angular/forms";


@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        HttpModule, 
        JsonpModule,
        InMemoryWebApiModule.forRoot(ItemData),
        InMemoryServerModule,
        FormsModule  
    ],
    providers: [AuthGuard, AuthService, PaginationService],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
