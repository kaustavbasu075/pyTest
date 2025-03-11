import {expect , test} from '@playwright/test';


test('Autosuggest Dropdown', async ({page}) => {


    await page.goto('https://www.redbus.in/');
    await expect(page.locator('#src')).toBeVisible();

    await page.fill('#src','Delhi');
    await page.waitForSelector('ul[class^="sc"] li div text[class*="placeHolderMainText"]');

    const mulValues = await page.$$('ul[class^="sc"] li div text[class*="placeHolderMainText"]');

    for(let values of mulValues)
    {

        let textValues = await values.textContent();
        if(textValues.includes('Anand Vihar'))
        {

        await values.click();
        break;
        }


    }
});