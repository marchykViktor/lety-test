import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { AuthService } from "./login.service";
import { Router } from "@angular/router";

@Component({
    moduleId: module.id,
    selector: "login",
    templateUrl: "login.component.html",
    styleUrls: ["login.component.css"]
})

export class LoginComponent  {

    login: string;
    password: string;
    authGuardState: boolean;
    usersArray: any[];

    constructor(private router: Router, private http: Http, private aService: AuthService) { }
    
    goToReg() {
        this.router.navigate(["registration"]);
    }

    authGuard(users) {
        this.authGuardState = false;
        for (let i = 0; i < users.length; ++i) {
            if (this.login === users[i].login && this.password === users[i].password) {
                this.authGuardState = true;
                this.aService.login();
                this.router.navigate(["products"]);
                break
            };
        }
        if (this.authGuardState === false) {
            alert('Вы ввели неправильно логин или пароль')
        }
    }

    logIn() {
        this.http.get("app/items").subscribe(
            result => {
                this.usersArray = result.json().data;
                this.authGuard(this.usersArray);
            },
            error => console.log(error.statusText)
        );
    }
}