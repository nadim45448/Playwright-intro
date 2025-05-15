import {test, expect} from '@playwright/test';

test.skip("Handle single select dropdown", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.evaluate(() =>{
        window.scrollBy(0, 900);
        
    })
    await page.locator("#country").selectOption("Canada"); // select by text/label
    // await page.locator("#country").selectOption( {value : "uk"}); // select by value
    // await page.locator("#country").selectOption( {index : 3}); // select by index
    await page.pause();


})

test.only("Handle Multiple select dropdown", async ({page}) => {
    await page.goto("https://testautomationpractice.blogspot.com/");

    page.evaluate(() =>{
        window.scrollBy(0, 900);
        
    })
   
    await page.selectOption("#colors", ['red', 'green', 'blue']); // select by text/label
    await page.pause();


})