const { Builder, By, Key } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function playVideo() {
    // Set Chrome options to allow autoplay without user interaction considering most of the internet has a non autoplay policy i guess.
    // had to manually turn off the autoplay policy that most people have enabled. below shown is the script turning it off when ran so it always plays. :D
    const options = new chrome.Options();
    options.addArguments("--autoplay-policy=no-user-gesture-required");

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');

        await driver.sleep(2000); 
        await driver.findElement(By.css('body')).sendKeys(Key.SPACE);

        await driver.sleep(2000);
        await driver.findElement(By.css('body')).sendKeys('f');

    } catch (error) {
        console.error('Error occurred:', error);
    } finally {

    }
})();
