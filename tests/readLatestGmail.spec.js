import { da } from '@faker-js/faker';
import {test, expect} from '@playwright/test';

const baseUrl = " "
const token = ""

test ("Read latest gmail using API", async ({request}) => {

    // part 1: get the latest email id

    const response1 = await request.get(baseUrl + "/gmail/v1/users/me/messages/", {

        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }

        
    })

    const data = await response1.json();
    console.log("Response 1: ", data);
    const emailId = await data.messages[0].id;

    
    // part 2: read the latest email using the email id

    const response2 = await request.get(baseUrl + "/gmail/v1/users/me/messages/"+ emailId, {

        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer " + token
        }

        
    })

    const data2 = await response2.json();
    console.log("Response 2: ", data2); // full email data
    console.log("My latest email: ", data2.snippet); // email snippet












})