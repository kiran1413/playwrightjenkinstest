const { test, expect } = require('@playwright/test')
test('handle input box', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F')
    // inputbox-first name
    // before filling text box validate visibile or not?, empty or not?,disable?,enable?
    await expect(await page.locator("//input[@id='FirstName']")).toBeVisible(); //to validate visible or not input box
    await expect(await page.locator("//input[@id='FirstName']")).toBeEmpty(); //to validate wheather the input box is empty or not
    await expect(await page.locator("//input[@id='FirstName']")).toBeEditable(); //to validate wheather the input box is editable or not
    await expect(await page.locator("//input[@id='FirstName']")).toBeEnabled(); //to validate wheather the input box is enabled or not?
    await page.locator("//input[@id='FirstName']").fill("sai")
    //await page.fill("//input[@id='FirstName']",'sai'); //to fill the input text box
    await page.waitForTimeout(5000); //to pause the execution for 5 seconds 5000 milli seconds means 5secs 
})