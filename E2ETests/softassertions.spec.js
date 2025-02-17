import {expect, test} from '@playwright/test';


test('Soft Assertion', async ({page}) => {

    await page.goto('https://www.demoblaze.com/index.html');

    //Hard assertions
    await expect(page).toHaveTitle('STORE');
    await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
    await expect(page.locator('#navbarExample ul.navbar-nav.ml-auto')).toBeVisible();

    //Soft assertions
    await expect.soft(page).toHaveTitle('STORE123');
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html/test');

});