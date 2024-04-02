import {test,expect} from '@playwright/test'
test('built-in-locators',async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // get by alt text
    /*const logo= await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();*/
    await page.getByPlaceholder('Username').fill("admin")
    await page.getByPlaceholder('Password').fill("admin123")
    await page.getByRole('button',{type:"submit"}).click()
    await expect(await page.getByText)
 
})