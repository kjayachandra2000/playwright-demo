export default class BasePage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
    }

    open = async (path = '/') => {
        await this.page.goto(path);
    };
}
