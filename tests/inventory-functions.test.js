const inventoryFunctions = require('../inventory-functions.js');

//calculateDiscount
describe("inventoryFunctions.calculateDiscount", function() {
  test("applies a valid discount rate", () => {
    expect(inventoryFunctions.calculateDiscount(100, 0.1)).toBe(90);
  });
});

test("handles an invalid discount rate gracefully", () => {
    expect(inventoryFunctions.calculateDiscount(100, -0.1)).toBe(null);
});

test("handles edge case with price of 0", () => {
    expect(inventoryFunctions.calculateDiscount(0, 0.2)).toBe(0);
});


const numbers = [1, 2, 3, 4, 5, 6];
const cat = "Nova";


//filterProducts
describe("inventoryFunctions.filterProducts", function() {
  test("Positive Test Case", () => {
    expect(inventoryFunctions.filterProducts(numbers, number => number % 2 === 0)).toEqual([2, 4, 6]);
  });
});

test("Negative Test Case: Should give empty array for non-array first argument", () => {
    expect(inventoryFunctions.filterProducts(cat, number => number % 2 === 0)).toEqual([]);
});

test("Negative Test Case: Should give empty array for non-function second argument", () => {
    expect(inventoryFunctions.filterProducts(numbers, cat)).toEqual([]);
});

test("Edge Test Case: Should handle filtering everything out of array", () => {
    expect(inventoryFunctions.filterProducts(numbers, number => number > 7)).toEqual([]);
});

//sortInventory
describe("inventoryFunctions.sortInventory", function() {
  test("Positive Test Case", () => {
    expect(inventoryFunctions.sortInventory()).toBe();
  });
});

test("Negative Test Case", () => {
    expect(inventoryFunctions.sortInventory()).toBe();
});

test("Edge Test Case", () => {
    expect(inventoryFunctions.sortInventory()).toBe();
});