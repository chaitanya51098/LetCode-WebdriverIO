describe('Let code Page', () => {
    it('Should go to main page and verify title', async() => {
        await browser.url('/')
        await browser.maximizeWindow();
        await browser.pause(2000);
        const header=await $("//img[@alt='letcode']");
        expect(header).toHaveTitle("letcode");
        
    });
    it('should go to workspace page and verify header', async() => {
        const workspace=await $("//a[@id='testing']");
        await workspace.click();
        await browser.pause(2000);
        const header=await $('//h1[@class="title"]');
        expect(header).toHaveTextContaining("Automation Engineer");
        
    });
    it('should go to form page verify header, fill details and click on submit', async() => {
        const form=await $('//button[@id="forms"]');
        await form.click();
        await browser.pause(4000);
        const header=await $('//h2[@class="subtitle"]');
        expect(header).toHaveTextContaining("different fields");
        (await $('//input[@id="firstname"]')).addValue("chaitanya");
        await browser.pause(2000);
        (await $('//input[@id="lasttname"]')).addValue("parimi");
        (await $('//input[@id="email"]')).clearValue();
        await browser.pause(2000);
        (await $('//input[@id="email"]')).addValue("hello@gmail.com");
        await browser.pause(2000);
        (await $('//div[@class="select"]//option[@value="213"]')).click();
        browser.pause(2000);
        (await $('//input[@id="Phno"]')).addValue("1234567890");
        await browser.pause(2000);
        (await $('//input[@id="Addl1"]')).addValue("Uppal");
        await browser.pause(2000);
        (await $('//input[@id="Addl2"]')).addValue("Hyd");
        await browser.pause(2000);
        (await $('//input[@id="state"]')).addValue("Telangana");
        await browser.pause(2000);
        (await $('//input[@id="postalcode"]')).addValue("500098");
        await browser.pause(2000);
        (await $('//div[@class="select"]//option[@value="Canada"]')).click();
        await browser.pause(2000);
        (await $('//input[@type="date"]')).addValue("6/25/2021");
        await browser.pause(2000);
        (await $('//input[@id="male"]')).click();
        await browser.pause(2000);
        (await $('//input[@type="checkbox"]')).click();
        await browser.pause(2000);
        (await $("//input[@type='submit']")).click();
        await browser.pause(5000);
        
    });
});