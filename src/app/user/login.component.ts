import { Component } from "@angular/core";
import { AuthService } from "./auth.service";
import { Router } from "@angular/router";

@Component({
    templateUrl: './login.component.html',
    styles: [`
        em { float: right; color: #E05C65; padding-left: 10px; }
    `]
})
export class LoginComponent {

    username
    password
    mouseoverLogin

    constructor(private auth: AuthService, private router: Router) {

    }

    login(fomrValues) {
        this.auth.loginUser(fomrValues.userName, fomrValues.password);

        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }

}
