
describe("Calculate a string", function(){
	it("should return 0 for a empty string", function(){
	let result = add("");
	expect(result).toBe(0);
	});
	it("should handle two numbers", function(){
	let result2 = add("1,2");
	expect(result2).toBe(3);
	});
	it("should handle one number", function(){
		let resultg = add("1");
		expect(resultg).toBe(1);
		});
	it("should handle an unknown amount of numbers", function(){
	let result3 = add("1,2,3,4");
	expect(result3).toBe(10);
	});
	it("should detect demiliters and split with them", function(){
		let result4 = add("//;\n1;2");
		expect(result4).toBe(3);
		});
	it("should not handle negative numbers", function(){
		let resultu = add("-3,5");
		expect(resultu).toBe("negatives not allowed");
		});

	it("should handle delimiters of any length", function(){
		let resultu = add("//[***]\n1***2***3");
		expect(resultu).toBe(6);
		});
	
	it("should ignore numbers greater than 1000", function(){
		let resultu = add("1003,3");
		expect(resultu).toBe(3);
		});

})