import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly username: Locator;
    readonly password: Locator;
    readonly submit: Locator;
    readonly errorMessage: Locator;

    constructor(page: Page){
        this.username = page.getByTestId('username');
        this.password = page.getByTestId('password');
        this.submit = page.getByTestId('login-button');
        this.errorMessage = page.getByTestId('error');
    }
}