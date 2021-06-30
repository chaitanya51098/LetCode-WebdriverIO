const Selectors = require('../pageobjects/selectors')
const addFeature  = require('@wdio/allure-reporter').default
describe('Let code Page', () => {
    it('Should go to main page and verify title', async () => {
        Selectors.openBrowser();
        expect(browser).toHaveTitle("LetCode with Koushik");
        expect(Selectors.firstHeader).toHaveAttribute("alt", "letcode");
    });

    it('should go to workspace page and verify header', async () => {
        await Selectors.workSpace();
        await expect(Selectors.secondHeader).toHaveTextContaining("Automation Engineer 123");
    });

    it('should go to form page fill details and click on submit', async () => {
        addFeature.addSeverity('Critical');
        await Selectors.Form();
        expect(await Selectors.thirdHeader).toHaveTextContaining("different fields");
        await Selectors.input("Chaitanya", "parimi", "hello@gmail.com", "1234567890", "uppl",
            "hyd", "telangana", "500098", "29/06/2021");
    });
});