import {test, expect} from '@playwright/test';
import { request } from 'http';

test.use( {
    httpCredentials:{
        username: "admin",
        password: "admin"
    }

})


test("authenticated access to secure page", async ({page})=>{
    // await page.goto("https://admin:admin@the-internet.herokuapp.com/basic_auth"); 
    await page.goto("https://the-internet.herokuapp.com/basic_auth"); 

    await expect(page).toHaveTitle("The Internet");
    await page.pause();









})