import {test, expect} from '@playwright/test';
import { request } from 'http';

let userId;

test.skip("Get API testing", async({request}) =>{

    const response = await request.get("https://reqres.in/api/users?page=2", {
       
        //body
        //header
        
    });
    console.log(await response.json());
    // expect(response.status()).toBe(200);
})

test("Post API testing", async({request}) =>{
    const response = await request.post("https://reqres.in/api/users", {

        data: {
            name: "morpheus",
            job: "leader"
        },
        headers: {
            // "Content-Type": "application/json",
            "Accept": "application/json",
            "x-api-key": "reqres-free-v1"


        }

    })
    console.log(await response.json());
    expect(response.status()).toBe(201);

    const responseBody = await response.json();
    userId = responseBody.id;
    console.log("User id "+userId);

})

test("PUT API testing", async({request}) =>{
    const response = await request.put("https://reqres.in/api/users/"+ userId, {

        data: {
            "name": "Nadim",
            "job": "QA"
        },
        headers: {
            // "Content-Type": "application/json",
            "Accept": "application/json",
            "x-api-key": "reqres-free-v1"


        }

    })
    console.log(await response.json());
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    let userName = responseBody.name;
    console.log("User name: "+userName);

})

test("Patch API testing", async({request}) =>{
    const response = await request.patch("https://reqres.in/api/users/"+ userId, {

        data: {
            "name": "Rahman"
            
        },
        headers: {
            // "Content-Type": "application/json",
            "Accept": "application/json",
            "x-api-key": "reqres-free-v1"


        }

    })
    console.log(await response.json());
    expect(response.status()).toBe(200);

    const responseBody = await response.json();
    let userName = responseBody.name;
    console.log("User name: "+userName);

})

test("Delete API testing", async({request}) =>{
    const response = await request.delete("https://reqres.in/api/users/"+ userId, {


        headers: {
            // "Content-Type": "application/json",
            "Accept": "application/json",
            "x-api-key": "reqres-free-v1"
        }

    })
    
    expect(response.status()).toBe(204);


})