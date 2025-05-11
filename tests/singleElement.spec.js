import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.skip("Single element locating", async({page})=>{

    await page.goto("opencart/index.php?route=account/register")

    //single element locator
    const firstNameTxt = page.locator("#input-firstname"); // by id
    const lastNameTxt = page.locator("input[name='lastname']"); //by css selector
    const emailTxt =page.locator("//input[@name='email']"); // by xpath

    await firstNameTxt.fill("Nadim");
    await lastNameTxt.fill("Hossain"); 
    await emailTxt.fill("nadim@gmail.com")
    await page.pause();



})

test.skip("Multiple element locating", async ({page})=>{
    await page.goto("opencart/index.php?route=account/register");

    //multiple element locator
    const formControl = page.locator(".form-control"); // by class name

    console.log("Total number of elements: " + await formControl.count());

    await formControl.first().fill("Nadim"); // fill first element

    await formControl.nth(1).fill("salman"); // fill second element
    await formControl.nth(2).fill("rahman"); // fill third element
    await formControl.last().fill("1234"); // fill last element

    await page.pause();

})

test.only("Playwright specific locator", async ({page})=>{
    await page.goto("opencart/index.php?route=account/register");

    //playwright specific locator
    let firstNameTxt = page.getByRole("textbox", {name:"* First Name"}); // by role
    let lastNameTxt =  page.getByRole("textbox", {name:"* Last Name"}); // by role
    let personal = page.getByText("Your Personal Details");
    let email = page.getByLabel("E-Mail");
    let phoneNumTxt = page.getByPlaceholder("Telephone");
    let passwordTxt = page.getByPlaceholder("Password");
    let imgLocator1 = page.getByAltText("naveenopencart");
    let imglocator2 = page.getByTitle("naveenopencart");

    await firstNameTxt.fill(faker.person.firstName());
    await lastNameTxt.fill(faker.person.lastName());

    await personal.isVisible();
    await email.fill(faker.internet.email());
    await phoneNumTxt.fill(faker.phone.number());
    await passwordTxt.first().fill("1234");
    await passwordTxt.last().fill("1234");
    await imgLocator1.isVisible();
    await imglocator2.isVisible();

    await page.getByRole("radio", {name:"Yes"}).click();
    await page.getByRole("checkbox").click();
    await page.getByRole("button", {name:"Continue"}).click();

    let successmsg = await page.locator("h1").textContent();
    await expect(successmsg).toBe("Your Account Has Been Created!");
    await expect(successmsg).toContain("Created!");

    let msg = await page.locator("h1");
    await expect(msg).toHaveText("Your Account Has Been Created!");
    await expect(msg).toContainText("Created!");
   

    await page.pause();



})