const Selectors = require('../pageobjects/selectors')
const addFeature  = require('@wdio/allure-reporter').default
const testdata=require('../resources/tesdata.json')
const constants=require('../constants/constant')

describe('Let code Page', () => {
    it('Should go to main page and verify title', async () => {
        Selectors.openBrowser();
        expect(browser).toHaveTitle(constants.TITLE);
        //await expect(Selectors.firstHeader).toHaveAttribute("alt", "letcode");
    });

    it('should go to workspace page and verify header', async () => {
        await Selectors.workSpace();
        await expect(Selectors.secondHeader).toHaveTextContaining(constants.HEADER);
    });

    it('should go to form page fill details and click on submit', async () => {
        addFeature.addSeverity('Critical');
        await Selectors.Form();
        expect(await Selectors.thirdHeader).toHaveTextContaining(constants.FORM_HEADER);
        const data=testdata.formdata;
        await Selectors.input(data.firstname,data.lastname,data.email,data.phNo,data.adr1,
            data.adr2,data.state,data.pincode,data.date);
    });
});