import { test, expect } from "@playwright/test";

test("item can be removed from cart", async ({ page, isMobile }) => {
  await page.goto("/product/1");
  await page.click("text=Add to cart");

  if (isMobile) {
    await page.getByTestId("mobile-menu-button").click();
  }
  expect(page.getByTestId("shopping-cart-notification")).toBeVisible();
  await page.getByTestId("shopping-cart").click();

  await expect(page.locator("h1")).toHaveText("Shopping cart");
  expect(page.locator(".cart-item")).toHaveCount(1);

  await page.click("text=Remove");
  expect(page.locator(".cart-item")).toHaveCount(0);
  await expect(page.locator("h1")).toHaveText("Shopping cart is empty");
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
  expect(await subtotal.textContent()).toEqual("$9.00");

  await quantity.selectOption("2");
  expect(await subtotal.textContent()).toEqual("$18.00");
});
