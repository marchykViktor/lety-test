import { Component } from "@angular/core";
import { Http, RequestOptions } from "@angular/http";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { User } from "./user";

@Component({
    moduleId: module.id,
    selector: "registration",
    templateUrl: "registration.component.html",
    styleUrls: ["registration.component.css"]
})
export class RegistrationComponent   {


    constructor(private router: Router, private http: Http) { }

    user: User = new User();
    
    goToLogin() {
        this.router.navigate(["login"]);
    }
    
    checkFieldPassword(){
        if (this.user.password === this.user.rePassword) {
            return true;
        } else {
            return false;
        }
    }

    addUser() {    
        this.http.post("app/items", {
            login: this.user.email,
            password: this.user.password
        }).subscribe(
            result => {
                let json = result.json();
                if (json)
                    this.goToLogin();
            },
            error => console.log(error.statusText)
            );
    }
    
}
