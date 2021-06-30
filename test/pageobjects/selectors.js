const Page = require("./page");

class Selectors extends Page{

    get firstHeader() { return $("//img[@alt='letcode']"); }
    get workspacePage() { return $("//a[@id='testing']"); }
    get secondHeader() { return $('//h1[@class="title"]'); }
    get form() { return $('//button[@id="forms"]'); }
    get thirdHeader() { return $('//h2[@class="subtitle"]'); }
    get firstName() { return $('//input[@id="firstname"]'); }
    get lastName() { return $('//input[@id="lasttname"]'); }
    get email() { return $('//input[@id="email"]'); }
    get countryCode() { return $('//div[@class="select"]//option[@value="213"]'); }
    get phNo() { return $('//input[@id="Phno"]'); }
    get addLine1() { return $('//input[@id="Addl1"]'); }
    get addLine2() { return $('//input[@id="Addl2"]'); }
    get State() { return $('//input[@id="state"]'); }
    get postalCode() { return $('//input[@id="postalcode"]'); }
    get country() { return $('//div[@class="select"]//option[@value="Canada"]'); }
    get date() { return $('//input[@type="date"]'); }
    get gender() { return $('//input[@id="male"]'); }
    get checkbox() { return $('//input[@type="checkbox"]'); }
    get submit() { return $("//input[@type='submit']"); }

    openBrowser() {
        // browser.url(path)
        // browser.maximizeWindow();
        super.open();
    }

    async workSpace() {
        await (await this.workspacePage).waitForClickable({ timeout: 3000 });
        (await this.workspacePage).click();

    }

    async Form() {
        (await this.form).click();
    }

    async input(firstname, lastname, emailId, phoneNum, addr1, addr2, state, pinCode, calendarDate) {
        await (await this.firstName).setValue(firstname);
        await (await this.lastName).setValue(lastname);
        await (await this.email).setValue(emailId);
        await (await this.countryCode).click();
        await (await this.phNo).setValue(phoneNum);
        await (await this.addLine1).setValue(addr1);
        await (await this.addLine2).setValue(addr2);
        await (await this.State).setValue(state);
        await (await this.postalCode).setValue(pinCode);
        await (await this.country).click();
        await (await this.date).setValue(calendarDate);
        await (await this.gender).click();
        await (await this.checkbox).click();
        await (await this.submit).click();
    }
}
module.exports = new Selectors();