import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('chrome-error://chromewebdata/');
  await page.goto('https://spandan.infinite.com/sites/spandanhome/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'HOLIDAY LIST' }).click();
  const page1 = await page1Promise;
  await page1.locator('#MSOImageWebPart_WebPartWPQ2').click();
  await page1.locator('#MSOImageWebPart_WebPartWPQ2').click();
  await page1.locator('#MSOImageWebPart_WebPartWPQ2').click();
  await page1.locator('#zz5_Menu_t').click();
  await page1.getByRole('link', { name: 'Sign Out' }).click();
});