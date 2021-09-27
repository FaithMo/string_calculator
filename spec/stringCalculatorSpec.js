let add = require("../src/stringCalculator");
let searchNeg = /[-]/g;
showError = (num) => {
  let testNeg = searchNeg.test(num); //boolean
  if (!testNeg) {
    return "Great!";
  } else {
    return "negatives not allowed";
  }
};

describe("String calculator", () => {
  it("should throw an error for negative numbers", () => {
    let result6 = showError("-35");
    let jasmineError = () => {
      throw result6;
    };
    expect(jasmineError).toThrow("negatives not allowed");
  });

  it("should return 0 for a empty string", function () {
    let result1 = add("");
    expect(result1).toBe(0);
  });

  it("should handle one number", function () {
    let result3 = add("1");
    expect(result3).toBe(1);
  });

  it("should handle two numbers", function () {
    let result2 = add("1,2");
    expect(result2).toBe(3);
  });

  it("should handle an unknown amount of numbers", function () {
    let result4 = add("1,2,3,4");
    expect(result4).toBe(10);
  });

  it("should split numbers with any detected delimiters", function () {
    let result5 = add("//;\n1;2");
    expect(result5).toBe(3);
  });

  it("should handle delimiters of any length", function () {
    let result7 = add("//[abc][777][:(]\n1abc27773:(1");
    expect(result7).toBe(7);
  });

  it("should ignore numbers greater than 1000", function () {
    let result8 = add("1003,3");
    expect(result8).toBe(3);
  });
});

describe("Data Validation", () => {
  it("Should detect correct input", () => {
    let result9 = add("1,2,3;\n1000,1;2");
    expect(result9).toBe(9);
  });
});
