import {test, expect} from '@playwright/test';

test('DemoBlaze Title', async ({page})=> {
    await page.goto('https://www.demoblaze.com/index.html');
    //const pageTitle = page.title();
    await expect(page).toHaveTitle('STORE');
    // clcking on button
    await page.locator('#login2').click();
    //await page.click('id="login2"); another method of locating elements

    //checking for the visibility of the modal
    await expect(page.locator('#logInModalLabel')).toBeVisible();

    //fill in username and password
    const username = 'pavanol'
    await page.locator('input[type="text"]#loginusername').fill(username);
    await page.fill('input[type="password"]#loginpassword','test@123'); //page.type(); is deprecated

    //click on button
    
    await page.click('[onclick="logIn()"].btn-primary');

    // checking visibility of logged in username
    await expect(page.locator('#nameofuser')).toContainText(username);
    await page.waitForSelector('#tbodyid a.hrefch');
    var mulElements = await page.$$('#tbodyid a.hrefch');

    //verifying the number of phone links
     expect(mulElements.length).toEqual(9);
     for (var mulElement of mulElements) {
        const mulEle = await mulElement.textContent();
        if(await mulEle ==='Sony vaio i5'){
            console.log('Sony vaio i5');
        }

     }
    page.close();
});