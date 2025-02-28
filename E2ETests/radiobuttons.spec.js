const { expect , test} = require('@playwright/test');


test('Radiobuttons', async ({page}) => {


            await page.goto('https://demo.nopcommerce.com/register');

            //Radio buttob
            await page.waitForSelector('#gender-male');
            await page.locator('#gender-male').check();

            await expect(page.locator('#gender-male')).toBeChecked();
            await expect(page.locator('#gender-male').isChecked()).toBeTruthy();

            await expect(page.locator('#gender-female')).not.toBeChecked();
            await page.waitForTimeout(5000); //pausing for 5 seconds

});
