import {expect , test} from '@playwright/test';


test('Checkbox', async ({page}) => {


  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  var placeHolder = await page.getByPlaceholder('Username');
  await expect(placeHolder).toBeVisible();

  placeHolder.fill('Admin');

  var placeHolder1 = await page.getByPlaceholder('Password');
  await expect(placeHolder).toBeVisible();

   placeHolder1.fill('admin123');

   //captures an element based on what role the element is performing,for example this a button which is clicking on submit
   var submitButton = await page.getByRole('button',{type: 'submit'});
   await submitButton.click();

   //captures an element based on the inner text in the UI.
   var getTextValue = await page.getByText('Buzz Latest Posts');
   await expect(getTextValue).toBeVisible();

   var mulItems = await page.locator('a.oxd-main-menu-item span');
   await mulItems.nth(0).click();

   await expect(page.locator('.oxd-table-filter-title')).toBeVisible();;


   //single checkbox .oxd-checkbox-input-icon

   await page.locator('.oxd-checkbox-input-icon').nth(2).check();

   await expect(page.locator('.oxd-checkbox-input-icon').nth(2)).toBeChecked();
   await expect(page.locator('.oxd-checkbox-input-icon').nth(2).isChecked()).toBeTruthy();
   await expect(page.locator('.oxd-checkbox-input-icon').nth(3)).not.toBeChecked();

   await page.waitForTimeout(5000);

   await page.locator('.oxd-checkbox-input-icon').nth(2).uncheck();
   await expect(page.locator('.oxd-checkbox-input-icon').nth(2)).not.toBeChecked();

   await page.waitForTimeout(5000);

   var mulElements = await page.$$('.oxd-checkbox-input-icon');

   for(let i = 0; i < mulElements.length; i++){
     if(i > 0){
      await page.locator('.oxd-checkbox-input-icon').nth(i).check();
      await page.waitForTimeout(500);
      await page.locator('.oxd-checkbox-input-icon').nth(i).uncheck();
     }
   }

});