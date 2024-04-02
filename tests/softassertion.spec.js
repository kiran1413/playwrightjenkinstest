const{test, expect}= require('@playwright/test')
test('soft assertions',async({page})=>{
    await page.goto('https://www.demoblaze.com/')
    // hard assertion
    await expect.soft(page).toHaveTitle('STORE123');
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await expect(page.locator('.navbar-brand')).toBeVisible()
    await page.waitForTimeout(1000)

})