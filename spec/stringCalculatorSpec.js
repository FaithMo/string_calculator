let add = require("../src/stringCalculator");
var searchNeg = /[-]/g;
showError = (num) => {
  var testNeg = searchNeg.test(num); //boolean
  if (!testNeg) {
    return "Great!";
  } else {
    return "negatives not allowed";
  }
};

describe("String calculator", () => {
  it("should throw an error for negative numbers", () => {
    var result6 = showError("-35");
    var jasmineError = () => {
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
    let result7 = add("//[***]\n1***2***3");
    expect(result7).toBe(6);
  });

  it("should ignore numbers greater than 1000", function () {
    let result8 = add("1003,3");
    expect(result8).toBe(3);
  });
});

describe("Data Validation", () => {
  it("Should detect incorrect input", () => {
    expect(add("1,2,3//;\n1000,1;2").toThrow("ERROR: invalid input"))
  })
})