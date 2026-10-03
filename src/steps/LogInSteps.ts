import { Page, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ROUTES } from "../data/Constants";

export class LogInSteps {
    constructor(
        private readonly page: Page,
        private readonly loginPage: LoginPage,
    ){}

    async open(): Promise<this> {
        await this.page.goto(ROUTES.baseUrl);
        await expect(this.loginPage.submit).toBeVisible();
        
        return this;
    }

    async loginAs(username: string, password: string): Promise<this>{
        await this.loginPage.username.fill(username);
        await this.loginPage.password.fill(password);
        await this.loginPage.submit.click();

        return this;
    }

    async verifyLoggedIn(): Promise<this>{
        await expect(this.page).toHaveURL(/\/inventory.html/);
        
        return this;
    }

    async verifyErrorShown(): Promise<this>{
        await expect(this.loginPage.errorMessage).toBeVisible();

        return this;
    }
}