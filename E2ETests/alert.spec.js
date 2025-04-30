import {test,expect} from '@playwright/test';


test('Alerts',async ({page}) => {

      await page.goto('https://testautomationpractice.blogspot.com/');
      await expect(page.locator('#name')).toBeVisible();

      page.on('Dialog', async dialog => {

      await expect(dialog.type()).toContain('alert');
      await expect(dailog.text()).toContain('I am an alert box!');
      await dialog.accept();

      });

      await page.locator('button[id="alertBtn"]').click();
      await page.waitForTimeout(10000);
});

test.skip('Confirmation Alert', async ({page}) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    await expect(page.locator('.wikipedia-search-input')).toBeVisible();

    page.on('Alert', async dialog1 => {

    await expect(dialog1.type()).toContain('alert');
    await expect(dialog1.text()).toContain('Press a button!');
    await dialog1.accept();
    });

    await page.locator('button[id="confirmBtn"]').click();
    await page.waitForTimeout(10000);
    await expect(page.locator('#demo')).toContain('You pressed OK!');

    });


test.skip('Prompt alert', async ({page}) => {

     await page.goto('https://testautomationpractice.blogspot.com/');
     await expect(page.locator('.wikipedia-search-button')).toBeVisible();

     page.on('Alert 2', async dialog2 => {
     await expect(dialog2.type()).toContain('alert');
     await expect(dialog2.text()).toContain('Please enter your name:');
     await expect(dialog2.defaultValue()).toHaveText('Harry Potter');
     await dialog2.accept('Test');

     });

     await page.locator('button[id="promptBtn"]').click();
     await page.waitForTimeout(10000);
     await expect(page.locator('#demo')).toContain('Hello Test! How are you today?');

});