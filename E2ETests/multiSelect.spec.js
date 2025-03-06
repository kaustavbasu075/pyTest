import {expect, test} from '@playwright/test';


test('MultiSelect', async ({page}) => {


        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page.locator('#header-inner .titlewrapper')).toBeVisible();


        //Selecting from MultiSelect

        await page.selectOption('#colors',['Red','Blue']);// Direct Text


       //Assertions on MultiSelect

        const Values = await page.locator('#colors option');
        await expect(Values).toHaveCount(7);

        const Values1 = await page.$$('#colors option');
        await expect(Values1.length).toBe(7);

       //check presence of text in dropdown
        const Values2 = await page.locator('#colors').textContent();
        await expect(Values2.includes('White')).toBeTruthy();
        await expect(Values2.includes('Penguin')).toBeFalsy;




});


