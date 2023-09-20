const { Builder, By, Key, Actions } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function playVideo() {
    const options = new chrome.Options();
    options.addArguments("--autoplay-policy=no-user-gesture-required");
    options.addArguments("--incognito");
    options.addArguments("--disable-background-networking");
    options.addArguments("--start-maximized");

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');

        let iframeElement = await driver.wait(until.elementLocated(By.css('iframe')), 10000);
        await driver.switchTo().frame(iframeElement);

        await driver.sleep(2000);
        await driver.findElement(By.css('body')).sendKeys(Key.SPACE);

        await driver.sleep(2000);
        let theaterModeButton = await driver.findElement(By.css('button[title="Theater mode"]'));
        await theaterModeButton.click();

    } catch (error) {
        console.error('Error occurred:', error);
    }
})();