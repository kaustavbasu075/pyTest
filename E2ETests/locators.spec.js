import {expect, test} from '@playwright/test';

test('Loactors Feature', async ({page})=> {


  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  //captures image where the selector must be placed in alt for example alt="company-branding"
  var text = await page.getByAltText('company-branding');
  await expect(text).toBeVisible();

  //captures element where the selector is a placeholder
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

   //captures an element based on the <label>Kaustav</label>
   //page.getByLabel('Kaustav');

   //captures an element based on the Title <span title>25</span>
   //var getLabel = await page.getByTitle('25');
   //await expect(getLabel).toBeVisible();

   //captures an element based on the custom test id <button data-testid="testElement">Iteration</button>
   //var getTestId = await page.getByTestId('testElement');
   //await expect(getTestId).toBeVisible();


});