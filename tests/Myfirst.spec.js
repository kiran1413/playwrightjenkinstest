const { test, expect } = require('@playwright/test')
test('my first test',async({page})=>{
await page.goto('https://google.com')
await expect(page).toHaveTitle('Google')
})