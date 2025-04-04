import { test, expect } from '@playwright/test';

test('Check if HubSpot form opens after submitting email', async ({ page }) => {
  // Navigate to the SurveySparrow demo request page
  await page.goto('https://surveysparrow.com/request-demo/');

  // Enter the email address
  await page.fill('input[aria-label="Work Email*"]', 'nikhil@macro.com');

  // Click the submit button
  await page.click('button:has-text("Next, pick a demo slot")');

  // Wait for the HubSpot form to appear (adjust selector as needed)
  const hubspotForm = await page.waitForSelector('form[data-hubspot-form]');

  // Assert that the HubSpot form is visible
  expect(hubspotForm).toBeTruthy();
});