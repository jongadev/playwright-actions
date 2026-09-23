import { test } from '@playwright/test';

test('teste simples', async ({ page }) => {
  await page.goto('https://example.com');
});