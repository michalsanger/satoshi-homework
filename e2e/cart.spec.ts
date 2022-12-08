import { test, expect } from "@playwright/test";

test("shopping cart page works", async ({ page, isMobile }) => {
  await page.goto("/");

  if (isMobile) {
    await page.click('[data-testid="mobile-menu-button"]');
  }

  await page.click('[data-testid="shopping-cart"]');
  await expect(page).toHaveURL("/cart");
  await expect(page.locator("h1")).toContainText("Shopping Cart");
});
