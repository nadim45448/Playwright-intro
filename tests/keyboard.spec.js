import {test, expect} from '@playwright/test';

test("keyboard events", async ({page})=>{

    await page.goto('https://gotranscript.com/text-compare');
    await page.getByRole("textbox", {name : "Paste one version of the text here."}).fill("Hello World");

    // select the text
    await page.keyboard.down("Control");
    await page.keyboard.press("A");
    await page.keyboard.up("Control");
    // await page.keyboard.press("Control+A");

    // copy the text
    await page.keyboard.down("Control");
    await page.keyboard.press("C");
    await page.keyboard.up("Control");
    // await page.keyboard.press("Control+C");

    // move to the second text box
    await page.keyboard.press("Tab");

    // paste the text
    await page.keyboard.down("Control");
    await page.keyboard.press("V");
    await page.keyboard.up("Control");
    // await page.keyboard.press("Control+V");

    await page.pause();

    // mouse hover 
    //await page.hover('#myElement');

    // double click
    //  await page.dblclick('#myElement');

    // right click / context click
     //await page.click(  '#myElement' , { button: 'right' }  );





})