import { test, expect } from '@fixtures/baseFixture';

test('user able to login', async ({ page, loginPage }) => {
  await loginPage.login();
  await expect(page).toHaveTitle(/OrangeHRM/);
});

test('able to land on dashboard', async ({ loginPage, dashboardPage }) => {
  await loginPage.login();
  expect(await dashboardPage.isDisplayed()).toBeTruthy();
});