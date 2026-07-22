import { test, expect } from "@playwright/test";

test("Homepage title should be correct", async ({ page }) => {
  await page.goto("file://" + process.cwd() + "/index.html");

  await expect(page).toHaveTitle("Online Voting App");
});