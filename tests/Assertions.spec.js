import { test, expect } from '@playwright/test'
test('assertions', async ({ page }) => {
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    await expect(await page.locator('.header-logo')).toBeVisible()
    // await expect (await page.locator('#small-searchterms')).toBeDisabled()
    await page.locator('#gender-male').click()
    await expect(await page.locator('#gender-male')).toBeChecked()
    await expect(await page.locator('#Newsletter')).toBeChecked()
    await expect(await page.locator('#register-button')).toHaveAttribute('type','submit')
    await expect(await page.locator('.page-title h1')).toHaveText('Register')
    await expect(await page.locator("//strong[normalize-space()='Your Personal Details']")).toContainText('personal')

})