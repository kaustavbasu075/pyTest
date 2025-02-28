const { expect , test} = require('@playwright/test');


test('Actions', async ({page}) => {


            await page.goto('https://demo.nopcommerce.com/register');

            //InputBox
            await page.waitForSelector('#FirstName');
            await expect(page.locator('#FirstName')).toBeVisible();
            await expect(page.locator('#FirstName')).toBeEmpty();
            await expect(page.locator('#FirstName')).toBeEditable();
            await page.locator('#FirstName').fill('Test');

            await page.waitForTimeout(5000); //pausing for 5 seconds

});
