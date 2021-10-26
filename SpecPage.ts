import { WebDriver, By } from "selenium-webdriver";

export class SpecPage {
    driver: WebDriver
    url: string = "https://www.google.com/"

    search: By = By.css('input[name="q"]')
    results: By = By.xpath('//div[@class="abuKkc"]')

    constructor(param1: WebDriver) {
        this.driver = param1
    }

    async navigate() {
        return await this.driver.get(this.url)
    }

    async doSearch(word: string) {
        return await this.driver.findElement(this.search).sendKeys(`${word}\n`)
    }

    async getText(results: By) {
        return await this.driver.findElement(this.results).getText()
    }

    async getResults() {
        return this.getText(this.results);
    }

}