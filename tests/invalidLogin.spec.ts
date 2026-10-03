import { test } from '../src/fixtures';
import {USER} from "../src/data/Constants";
import {expect} from "@playwright/test";

test('log in with invalid password and user', async({loginSteps}) => {
    await loginSteps.open();
    await loginSteps.loginAs(USER.invalidUsername, USER.invalidPassword);
    await loginSteps.verifyErrorShown();
})