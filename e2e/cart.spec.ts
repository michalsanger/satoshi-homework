import { test, expect } from "@playwright/test";

test("empty shopping cart page works", async ({ page, isMobile }) => {
  await page.goto("/");

  if (isMobile) {
    await page.getByTestId("mobile-menu-button").click();
  }

  await page.getByTestId("shopping-cart").click();
  await expect(page).toHaveURL("/cart");
  await expect(page.locator("h1")).toHaveText("Shopping cart is empty");
});

test("cart notification works", async ({ page, isMobile }) => {
  await page.goto("/product/1");
  await page.click("text=Add to cart");

  if (isMobile) {
    await page.getByTestId("mobile-menu-button").click();
  }

  expect(page.getByTestId("shopping-cart-notification")).toBeVisible();
});
