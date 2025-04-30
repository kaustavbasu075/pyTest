import {expect,test} from '@playwright/test';


test('Frames', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const val = await page.frame({url: 'https://ui.vision/demo/webtest/frames/frame_1.html'}); //url

    await val.fill('input[name="mytext1"]','TestKB');

    //await expect(val.locator('input[name="mytext1"]')).toHaveText('TestKB');



});

test('FrameLocator', async ({page}) => {

    await page.goto('https://ui.vision/demo/webtest/frames/');

    const val1 = await page.frameLocator('frame[src="frame_2.html"]').locator('[name="mytext2"]');
    await val1.fill('TestK');


});


test('Child Frames', async ({page}) => {

     await page.goto('https://ui.vision/demo/webtest/frames/');
     //await expect(page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3.html'})).toBeVisible();


     const frame1 = await page.frame({url : 'https://ui.vision/demo/webtest/frames/frame_3.html'});
     await frame1.locator('[name="mytext3"]').fill('Typo');

     const childFrame = await frame1.childFrames();
     await childFrame[0].locator('[id="i6"]').check();
     await expect(childFrame[0].locator('[id="i6"]')).toBeChecked();
});