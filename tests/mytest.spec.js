import { test, expect } from '@playwright/test';
const myValue = process.env.MY_VALUE;
test('test', async ({ page }) => {
  await page.goto('https://demoblaze.com/');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('saikiran123');
  await page.locator('#loginpassword').fill('saikiran123');
  await page.waitForTimeout(5000)
  if(myValue && myValue.toLowerCase() === 'true'){
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Log out' }).click();
  }
  else {
    console.log('MY_VALUE is not set to true. Skipping order placement.');
  }
});