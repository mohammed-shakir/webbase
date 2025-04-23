import { test, expect } from '@playwright/test';

test.describe('Announcements Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.route('**/api/announcements', route => {
      route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify([
          { id: '1', title: 'Hello', body: 'World', createdAt: new Date().toISOString() },
          { id: '2', title: 'Foo', body: 'Bar', createdAt: new Date().toISOString() },
        ]),
      });
    });
  });

  test('should display list of announcements', async ({ page }) => {
    await page.goto('/announcements');
    await expect(page.getByRole('heading', { name: 'Announcements' })).toBeVisible();
    await expect(page.getByText('Hello')).toBeVisible();
    await expect(page.getByText('Foo')).toBeVisible();
  });
});
