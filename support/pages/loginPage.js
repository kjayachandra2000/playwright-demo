import BasePage from './basePage'

export class LoginPage extends BasePage {
  constructor(page) {
    super(page)
    this.username = 'input[name="username"]';
    this.password = 'input[name="password"]';
    this.submitButton = 'button[type="submit"]';
  }

  open = async (path = '/') => {
    await this.page.goto(path);
  };

  login = async (username = 'Admin', password = 'admin123') => {
    await this.open();
    await this.page.fill(this.username, username);
    await this.page.fill(this.password, password);
    await this.page.click(this.submitButton);
  };
}
