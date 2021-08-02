const Cart = require("../src/js/Cart");
const Product = require("../src/js/Product");

describe("Cart", () => {
  let myCart = new Cart()

  test("array is made", () => {
    expect(myCart.items).toEqual([]);
  })

  test("items are properly added to the array", () => {
    // arrange; set some stuff up to be knocked down
    
    
    let lamp = new Product("lamp", 20, true);
    
    myCart.add(lamp)
    
    expect(myCart.items).toEqual([{name : "lamp", price : 20, taxable : true}]);
  })

  test("this test tests add a second time for some reason", () => {

    let wrench = new Product("wrench", 10, true);

    myCart.add(wrench)
    expect(myCart.items).toEqual([{name : "lamp", price : 20, taxable : true}, {name : "wrench", price : 10, taxable : true}])
  })

  test("getItemCount returns array.length", () => {
    expect(myCart.getItemCount()).toEqual(2)
  })

  test("getItemCount returns array.length PART 2", () => {
    let sock = new Product("sock", 4, true);
    myCart.add(sock)
    
    expect(myCart.getItemCount()).toEqual(3)
  })

  test("add items w/o tax", () => {
    expect(myCart.getTotalBeforeTax()).toEqual(34)
  })

  test("add up them taxes", () => {
    expect(myCart.getTotalWithTax()).toBeCloseTo(37.4)
  })

  test("taxes only", () => {
    expect(myCart.getTax()).toBeCloseTo(3.4)
  })
});