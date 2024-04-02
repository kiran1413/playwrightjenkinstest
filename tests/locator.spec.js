// const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test'
test('locator', async ({ page }) => {
    //to open a website in browser we are using goto function and giving there url to the application
    await page.goto("https://www.demoblaze.com/");
    // to click on login button  -property
    // await page.locator('id=login2').click()
    await page.click('id=login2')
    // to provide username -css
    // await page.locator('#loginusername').fill("saikiran")
    await page.fill('#loginusername','saikiran')
    // await page.type('#loginusername','saikiran')

    // provide password
    await page.fill('#loginpassword','test@123')

    // click on login buttton
    await page.click("//button[normalize-space()='Log in']")
    // verify logout link presence
   const logoutlink= await page.locator("//button[normalize-space()='Log in']")
await expect(logoutlink).toBeVisible();
})