import { test as base, expect } from '@playwright/test';
import { LoginPage } from '@pages/loginPage';
import { DashboardPage } from '@pages/dashboardPage';

const test = base.extend({
  /** @type {LoginPage} */
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  /** @type {DashboardPage} */
  dashboardPage: async ({ page }, use) => {
    await use(new DashboardPage(page));
  },
});


export { test, expect };
