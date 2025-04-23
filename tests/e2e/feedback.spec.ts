import { test, expect } from '@playwright/test';

test.describe('Feedback Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/feedback', route => {
      if (route.request().method() === 'POST') {
        return route.fulfill({
          status: 200,
          contentType: 'application/json',
          body: JSON.stringify({
            success: true,
            message: 'whatever',
          }),
        });
      }
      return route.continue();
    });
  });

  test('submits form and shows success message', async ({ page }) => {
    await page.goto('/feedback');
    await page.fill('input[name="name"]', 'Test User');
    await page.fill('input[name="email"]', 'test@example.com');
    await page.fill('textarea[name="message"]', 'Great app!');
    await page.click('button:has-text("Send Feedback")');

    await expect(page.getByText('Submitted successfully!')).toBeVisible({ timeout: 10_000 });

    await expect(page.locator('input[name="name"]')).toHaveValue('');
    await expect(page.locator('input[name="email"]')).toHaveValue('');
    await expect(page.locator('textarea[name="message"]')).toHaveValue('');
  });
});
