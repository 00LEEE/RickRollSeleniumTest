const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function playVideo() {
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();

    try {
        await driver.get('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');
    } catch (error) {
        console.error('Error occurred:', error);
    } finally {
        // terminates browser after test is ran.
        // await driver.quit();
    }
})();