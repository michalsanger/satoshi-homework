import { test, expect } from "@playwright/test";

test("homepage works", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("Homepage");
});
