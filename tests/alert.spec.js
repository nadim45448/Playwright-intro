import {test, expect} from '@playwright/test';

test("handle normal alert", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page. waitForTimeout(2000); // thread.sleep(2000);

    page.on("dialog", async dialog => {
        expect(dialog.type()).toContain('alert');
        expect(dialog.message()).toContain("I am an alert box!");
        await dialog.accept();

    })

    await page.locator("#alertBtn").click();

    await page.waitForTimeout(2000);

})

test("Handle confirm alert", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page. waitForTimeout(2000); // thread.sleep(2000);


    page.on('dialog', async dialog => {
        expect (dialog.type()).toContain('confirm');
        expect (dialog.message()).toContain("Press a button!");
        await dialog.accept();      // to accept the alert
        // await dialog.dismiss(); // to cancel the alert

    })

    await page.locator("#confirmBtn").click();
    await page.getByText("You pressed OK!").isVisible();
    await page.waitForTimeout(2000);
    //await page.getByText("You pressed Cancel!").isHidden();
})

test("Handle prompt alert", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page. waitForTimeout(2000); // thread.sleep(2000);

    page.on('dialog', async dialog => {
        expect (dialog.type()).toContain('prompt');
        expect (dialog.message()).toContain("Please enter your name:");
        // await dialog.clear(); 
        await dialog.accept("Nadim");    // to accept the alert
        // await dialog.dismiss(); // to cancel the alert

    })

    await page.locator("#promptBtn").click();
    await page.getByText("Hello Harry Potter! How are you today?").isVisible();
    await page.waitForTimeout(2000);


})