const { Builder } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function playVideo() {
    let driver = await new Builder().forBrowser('chrome').setChromeOptions(new chrome.Options()).build();

    try {
        await driver.get('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');

        // Give some time for the video page to load and then click the video to play since wasn't playing in my last commit.
        await driver.sleep(2000); 
        await driver.findElement(By.css('video')).click();

    } catch (error) {
        console.error('Error occurred:', error);
    } finally {

    }
})();
