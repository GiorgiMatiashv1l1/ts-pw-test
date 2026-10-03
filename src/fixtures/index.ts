import {test as base} from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';
import { LogInSteps } from '../steps/LogInSteps';

type Pages = {
    homepage: HomePage;
    loginPage: LoginPage;
    loginSteps: LogInSteps;
};

export const test = base.extend<Pages>({
    homepage: async ({page}, use) => {
        await use(new HomePage(page));
    },

    loginPage: async({page}, use) => {
        await use(new LoginPage(page));
    },

    loginSteps: async({page, loginPage}, use) => {
        await use(new LogInSteps(page, loginPage));
    }
});


export { expect } from '@playwright/test';

