import { Locator, Page } from "@playwright/test";

export class HomePage {
    readonly productNames: Locator;
    readonly searchInput: Locator;
    readonly searchSubmit: Locator;
    readonly signInLink: Locator;

    constructor(page: Page){
        this.productNames = page.getByTestId('product-name');
        this.searchInput = page.getByTestId('search-query');
        this.searchSubmit = page.getByTestId('search-submit');
        this.signInLink = page.getByTestId('nav-sign-in');
    }
}

