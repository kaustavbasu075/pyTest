import {expect, test} from '@playwright/test';


test('Dropdown', async ({page}) => {


        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page.locator('#header-inner .titlewrapper')).toBeVisible();


        //Selecting from dropdown
        await page.locator('#country').selectOption({label: 'India'}); //By Label
        await page.locator('#country').selectOption('France'); // By Text
        await page.locator('#country').selectOption({value: 'australia'}); //By Value
        await page.locator('#country').selectOption({index: 6}); //By Index

        await page.selectOption('#country','Brazil');// Direct Text


       //Assertions on dropdown
       await expect(page.locator('#country option')).toHaveCount(10);

       const Options = await page.$$('#country option');   //returns an array
       await expect(Options.length).toBe(10);


       //check presence of text in dropdown

       const Value = await page.locator('#country').textContent();
       await expect(Value.includes('India')).toBeTruthy();


       //looping statement to check presence of element

       const DD = await page.$$('#country option');
       let initialValue = false;

       for(const dd of DD){
       let actualCheck = await dd.textContent();

       if(actualCheck.includes('China')){
       initialValue=true;
       break;

       };

       };
       expect(initialValue).toBeTruthy();


});


test('Dropdown1', async ({page}) => {


        await page.goto('https://testautomationpractice.blogspot.com/');
        await expect(page.locator('#header-inner .titlewrapper')).toBeVisible();


        //Selecting from dropdown
        await page.locator('#country').selectOption({label: 'India'}); //By Label
        await page.locator('#country').selectOption('France'); // By Text
        await page.locator('#country').selectOption({value: 'australia'}); //By Value
        await page.locator('#country').selectOption({index: 6}); //By Index

        await page.selectOption('#country','Brazil');// Direct Text


       //Assertions on dropdown
       await expect(page.locator('#country option')).toHaveCount(10);

       const Options = await page.$$('#country option');   //returns an array
       await expect(Options.length).toBe(10);


       //check presence of text in dropdown

       const Value = await page.locator('#country').textContent();
       await expect(Value.includes('India')).toBeTruthy();


       //looping statement to select of element

       const ee = await page.$$('#country option');

       for(const ff of ee){
       let gg = await ff.textContent();
       if(gg.includes('India'))
       {
       await page.locator('#country').selectOption('India');
       break;

       };
       };

});