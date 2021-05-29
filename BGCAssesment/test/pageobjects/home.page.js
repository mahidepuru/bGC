import Page from './page';

class HomePage extends Page {

    constructor() {
		super();
	}
    
    get headerText () { return $('[class*="ssrcss-12x0ma7-ContentWrapper"]') }
    get acceptcookiesElement() { return $('button.ssrcss-bxitjb-ConsentButton.exhqgzu2') }
    get searchButton() { return $('[class*="ssrcss-3bcvvu-NavigationLink"] [class*="ssrcss-1hhm2vt-SearchText"]') }
    get inputSearchBox () { return $('input#ls-c-search__input-label.ls-c-search__input.gel-pica') }
    get weatherLink() { return $('a.ssrcss-baiu6x-NavigationLink.eki2hvo9')}
    get placeHolder() { return $('input#ls-c-search__input-label.ls-c-search__input.gel-pica')}

 
   async cookiesButton() {
   
        await (await this.acceptcookiesElement).click();
    }
   async navigateToWeather() {

        await(await this.weatherLink).click();
    }
    

    async SearchModule() {
        await expect(await this.inputSearchBox).toBeExisting();
        browser.pause(1000);
        await(await this.inputSearchBox).setValue('Melbourne');
        await $('//a[@id="daylink-1"]/div[4]/div/div/div[4]/div/div/span[2]/span/span').click();
		await expect( $('//a[@id="daylink-1"]/div[4]/div/div/div[4]/div/div/span[2]/span/span')).toHaveTextContaining(`12°`);
		await $('//a[@id="daylink-1"]/div[4]/div/div/div[2]/div').click();
		await $('//a[@id="daylink-1"]/div[4]/div[2]/div').click();
		await $('//a[@id="daylink-1"]/div[4]/div/div/div[4]/div/div[2]/span[2]/span/span').click();
		await expect( $('//a[@id="daylink-1"]/div[4]/div/div/div[4]/div/div[2]/span[2]/span/span')).toHaveTextContaining(`3°`);
		await $('#daylink-2').click();
		await expect( $('//a[@id="daylink-2"]/div[4]/div/div/div[4]/div/div/span[2]/span/span')).toHaveTextContaining(`15°`);
		await $('//a[@id="daylink-3"]/div[4]/div/div/div[2]/div').click();
		await expect( $('//a[@id="daylink-3"]/div[2]/div/span[2]/span/span')).toHaveTextContaining(`1st`);
    }

    open () {
        return super.open('home');
    }
}

export default new HomePage();
