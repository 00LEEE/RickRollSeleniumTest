const { Builder, By, Key, Actions } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

(async function playVideo() {
    const options = new chrome.Options();
    options.addArguments("--autoplay-policy=no-user-gesture-required");
    options.addArguments("--incognito");
    options.addArguments("--disable-background-networking");

    let driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    try {
        await driver.get('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley');

        const mainWindowHandle = await driver.getWindowHandle();

        await driver.sleep(2000); 
        await driver.findElement(By.css('body')).sendKeys(Key.SPACE);

        await driver.sleep(2000);
        let videoElement = await driver.findElement(By.css('video'));
        await videoElement.click();  // Set focus on the video element before double-clicking. If not executed; selenium will lose grip on the window and error out.
        
        let actions = driver.actions();
        await actions.doubleClick(videoElement).perform();

        // Switch back to the main window handle.
        await driver.sleep(2000);
        await driver.switchTo().window(mainWindowHandle);

    } catch (error) {
        console.error('Error occurred:', error);
    }
})();

