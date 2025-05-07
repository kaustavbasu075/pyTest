import {expect, test} from '@playwright/test';


test('Rows and Columns', async ({page}) => {


        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page.locator('#productTable')).toBeVisible();

        const table = await page.locator('#productTable');
        const rows = await table.locator('tbody tr');
        const columns = await table.locator('thead tr th');

         expect(await rows.count()).toBe(5);
         expect(await columns.count()).toBe(4);



});

test('Clicking on a Product', async ({page}) => {


        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page.locator('#productTable')).toBeVisible();

        const table = await page.locator('#productTable');
        const rows = await table.locator('tbody tr');
        const columns = await table.locator('thead tr th');

        const filterValue = await rows.filter({

              has: page.locator('td'),
              hasText: 'Smartphone'

        });

        await filterValue.locator('input[type="checkbox"]').check();



});

test('Clicking on a Multiple Product', async ({page}) => {


        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page.locator('#productTable')).toBeVisible();

        const table = await page.locator('#productTable');
        const rows = await table.locator('tbody tr');
        const columns = await table.locator('thead tr th');

        async function multipleProduct(rows,page, name){

        const filterValue = await rows.filter({

                      has: page.locator('td'),
                      hasText: name

                });

        await filterValue.locator('input[type="checkbox"]').check();

        }

        multipleProduct(rows, page, 'Smartwatch');
        multipleProduct(rows, page, 'Tablet');
        await page.waitForTimeout(6000);

});

test('Pagination', async ({page}) => {


        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page.locator('#productTable')).toBeVisible();

        const table = await page.locator('#productTable');
        const rows = await table.locator('tbody tr');
        const columns = await table.locator('thead tr th');

        const pagination = await page.locator('#pagination li a');

        for(let p=0;p< await pagination.count(); p++ ){

          if(p>0){
            await pagination.nth(p).click();

          }


        for(let i=0;i< await rows.count(); i++ ){

                const row = await rows.nth(i);
                const td  = row.locator('td');

        for(let j=0;j< await td.count()-1; j++ ){

        console.log(await td.nth(j).textContent());

        }
          }
            }
});