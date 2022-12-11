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

test("cart notification works", async ({ page, isMobile }) => {
  await page.goto("/product/1");
  await page.click("text=Add to cart");

  if (isMobile) {
    await page.click('[data-testid="mobile-menu-button"]');
  }

  const cartNotification = page.locator('[data-testid="shopping-cart-notification"]');
  expect(cartNotification).toBeVisible();
});

test("item can be removed from cart", async ({ page, isMobile }) => {
  await page.goto("/product/1");
  await page.click("text=Add to cart");

  if (isMobile) {
    await page.getByTestId("mobile-menu-button").click();
  }
  await page.getByTestId("shopping-cart").click();

  expect(page.locator(".cart-item")).toHaveCount(1);

  await page.click("text=Remove");
  expect(page.locator(".cart-item")).toHaveCount(0);
});

test("quantity can be changed", async ({ page, isMobile }) => {
  await page.goto("/product/1");
  await page.click("text=Add to cart");

  if (isMobile) {
    await page.getByTestId("mobile-menu-button").click();
  }
  await page.getByTestId("shopping-cart").click();

  const quantity = page.getByTestId("quantity");
  const subtotal = page.getByTestId("subtotal");

  expect(await quantity.inputValue()).toEqual("1");
  expect(await subtotal.textContent()).toEqual("$9");

  await quantity.selectOption("2");
  expect(await subtotal.textContent()).toEqual("$18");
});
