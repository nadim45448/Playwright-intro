import {test, expect} from '@playwright/test';

test("read table data", async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.evaluate( ()=>{
        window.scrollBy(0, 1000);
    });

    // explicit wait
    await page.locator("tbody tr").first().waitFor({timeout: 5000});

    const firstRow = await page.locator("tbody tr").first();
    const cells = await firstRow.locator("th").allTextContents();
    console.log("First row data: " + cells);

    const secondRow = await page.locator("tbody tr").nth(1);
    const data = await secondRow.locator("td").nth(0).textContent();
    console.log("Second row data: " + data);







})