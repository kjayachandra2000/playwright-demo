import BasePage from './basePage'

export class DashboardPage extends BasePage {
  constructor(page) {
    super(page)
    this.upgradeBtn = this.page.locator('.orangehrm-upgrade-button');
  }

  isDisplayed = async () => {
    await this.upgradeBtn.waitFor({ timeout: 5000 });
    return await this.upgradeBtn.isVisible();
  }
}