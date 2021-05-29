import HomePage from  '../pageobjects/home.page';
describe('BBC Web application - Testsuite', () => {
    it('should validate home page and accept cookies', async () => {
        
        await HomePage.open();
        await expect(HomePage.headerText).toBeExisting();
        await expect(HomePage.headerText).toHaveTextContaining("Welcome to the BBC"); 
        browser.pause(1000);
        HomePage.cookiesButton()
        browser.pause(1000);
        HomePage.navigateToWeather()
        await expect(HomePage.placeHolder).toBeExisting(); 
   
  
    });
});
