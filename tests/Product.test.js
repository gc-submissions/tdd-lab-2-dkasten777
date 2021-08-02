const Product = require("../src/js/Product")

describe("Product", () => {
  test("confirm 3 correct parameters", () => {
    // Arange
    let apples = new Product("apples", 2, false);
   
   // Act

    // Assert 
   expect(apples).toEqual({name:"apples",price:2,taxable:false})
  });
  
  test("make sure taxable true products add the tax", () => {
    //arrange
    let toys = new Product("toys", 15, true);

    //assert
    expect(toys.getPriceWithTax()).toBeCloseTo(16.5)
  })

  test("make sure taxable false products only return base price", () => {
    let eggs = new Product("eggs", 4, false);

    expect(eggs.getPriceWithTax()).toBe(4)
  })
});