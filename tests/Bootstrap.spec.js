import { test, expect } from '@playwright/test'
test('assertions', async ({ page }) => {
  await page.goto('https://www.jquery-az.com/boots/demo.php?ex=63.0_2');
  await page.locator('.multiselect').click();
  /*//Assertion 1 to count the elements in drop down box

   const Options=await page.locator('ul>li label input');
   await expect(Options).toHaveCount(11);
   */
  /* //Assertion 2 to count the elements in drop down box by using array ,note:$$ is used to select all elements in array
   const Options=await page.$$('ul>li label input');
   await expect(Options.length).toBe(11);
*/
  //Assertions 3 select options from  drop down
 /* const Options = await page.$$('ul>li label');
  for (let option of Options) {
    const value = await option.textContent()
    // console.log('value is',value);
    if (value.includes('Angular') || value.includes('Java')) {
      await option.click();
    }
  }*/
  //to delect options in check box use same code as above to click on check box for deselect options of HTMl and CSS
  const Options = await page.$$('ul>li label');
  for (let option of Options) {
    const value = await option.textContent()
    // console.log('value is',value);
    if (value.includes('Angular') || value.includes('Java')) {
      await option.click();
    }
  }
})