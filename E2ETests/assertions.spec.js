import {test,expect} from '@playwright/test';


test('Assertions', async ({page})=> {


        await page.goto('https://demo.nopcommerce.com/register');

        await expect(page).toHaveURL('https://demo.nopcommerce.com/register');
        await expect(page).toHaveTitle('nopCommerce demo store. Register');

        var placeHolderValue = await page.getByPlaceholder('Search store');
        await expect(placeHolderValue).toBeVisible();


        var elementEnabled = await page.locator('.search-box-button');
        await expect(elementEnabled).toBeEnabled();

        var maleCheckbox = await page.locator('#gender-male');
        await expect(maleCheckbox).not.toBeChecked();

        var alreadyCheckbox = await page.locator('#Newsletter');
        await expect(alreadyCheckbox).toBeChecked();

        var registerButton = await page.locator('#register-button');
        await expect(registerButton).toHaveAttribute('type','submit');


        var title = await page.locator('.page-title h1');
        await expect(title).toHaveText('Register'); //complete text
        await expect(title).toContainText('ster'); //partia text

        var emailText = await page.locator('#Email');
        await emailText.fill('Testing');
        await expect(emailText).toHaveValue('Testing');


        var list = await page.locator('.footer-block.information ul.list li');
        await expect(list).toHaveCount(6);
        await expect(list).not.toHaveCount(13);
});