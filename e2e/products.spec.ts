import { test, expect } from "@playwright/test";

test("products page works", async ({ page, isMobile }) => {
  await page.goto("/");

  if (isMobile) {
    await page.click('[data-testid="mobile-menu-button"]');
  }

  await page.click("text=Products");
  await expect(page).toHaveURL("/products");
  await expect(page.locator("h1")).toContainText("Products");
});
