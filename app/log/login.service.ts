import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    isLoggedIn: boolean = false;

    login(): void {
       this.isLoggedIn = true;
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
