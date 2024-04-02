import { test, expect } from '@playwright/test'
test('assertions', async ({ page }) => {
  await page.goto('https://www.redbus.in/');
  await page.locator('#src').fill("hyderabad");
  await page.waitForSelector("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]");
  const options=await page.$$("//li[contains(@class,'sc-iwsKbI jTMXri')]/div/text[1]"); //locator for list of places in city //for capturing options $$ is used
  for(let option of options)
  {
    const value=await option.textContent()
    //console.log(value)
    if (value.includes('Suchitra')){
      await option.click();
      break;
    }
  }

  
  await page.waitForTimeout(9000)
})