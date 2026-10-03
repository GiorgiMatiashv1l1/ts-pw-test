import { test } from '../src/fixtures';
import { USER } from '../src/data/Constants';

test('registered user can log in', async ({ loginSteps }) => {
  await loginSteps.open();
  await loginSteps.loginAs(USER.username, USER.password);
  await loginSteps.verifyLoggedIn();
});