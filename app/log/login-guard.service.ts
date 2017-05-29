import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "./login.service";
import { Router } from "@angular/router";


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router) { }
    canActivate() {
        if (this.authService.isLoggedIn) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    }
}