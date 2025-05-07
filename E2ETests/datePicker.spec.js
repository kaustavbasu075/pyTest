import {expect, test} from '@playwright/test';


test('Date Picker', async ({page}) => {


        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page.locator('button[name="start"]')).toBeVisible();


        const year="2025";
        const month="August";
        const day="13";

        await page.locator('#datepicker').click();

        while(true)
        {
          const yearValue= await page.locator('.ui-datepicker-year').textContent();
          const monthValue= await page.locator('.ui-datepicker-month').textContent();


          if(yearValue==year && monthValue==month)
          {

                break;
          }

          await page.locator('.ui-icon-circle-triangle-e').click()


        }

        const daysValue = await page.$$('a.ui-state-default');

        for(let dt of daysValue){

           if(await dt.textContent()==day){
                    await dt.click();
                    break;
           }

        }

        await page.waitForTimeout(2000);

});


test('Date Picker 2', async ({page}) => {


        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page.locator('button[name="start"]')).toBeVisible();


        const year="2025";
        const month="August";
        const day="13";

        await page.locator('#datepicker').click();

        while(true)
        {
          const yearValue= await page.locator('.ui-datepicker-year').textContent();
          const monthValue= await page.locator('.ui-datepicker-month').textContent();


          if(yearValue==year && monthValue==month)
          {

                break;
          }

          await page.locator('.ui-icon-circle-triangle-e').click()


        }

        await page.locator(`a.ui-state-default[data-date='${day}']`).click();


        await page.waitForTimeout(2000);

});