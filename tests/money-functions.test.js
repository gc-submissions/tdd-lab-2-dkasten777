const {formatCurrency, getCoins} = require("../src/js/money-functions");

describe("formatCurrency", () => {
  test("add formatCurrency tests here", () => {
    expect(formatCurrency(0)).toBe("$0.00"); 
  });
  test("add formatCurrency tests here", () => {
    expect(formatCurrency(1)).toBe("$1.00"); 
  });
  test("add formatCurrency tests here", () => {
    expect(formatCurrency(1.5)).toBe("$1.50"); 
  });
  test("add formatCurrency tests here", () => {
    expect(formatCurrency(0.01)).toBe("$0.01"); 
  });
  test("add formatCurrency tests here", () => {
    expect(formatCurrency(527.6789)).toBe("$527.68"); 
  });

  test("add formatCurrency tests here", () => {
    expect(formatCurrency(-1)).toBe("-$1.00"); 
  });
});

describe("getCoins", () => {
  test("add getCoins tests here", () => {
    expect(getCoins(32)).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2})
  });
  test("add getCoins tests here", () => {
    expect(getCoins(10)).toEqual({quarters: 0, dimes: 1, nickels: 0, pennies: 0})
  });
  test("add getCoins tests here", () => {
    expect(getCoins(27)).toEqual({quarters: 1, dimes: 0, nickels: 0, pennies: 2})
  });
  test("add getCoins tests here", () => {
    expect(getCoins(68)).toEqual({quarters: 2, dimes: 1, nickels: 1, pennies: 3})
  });

});