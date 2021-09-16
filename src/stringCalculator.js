function numInArr(numbersArray) {
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
      sum += parseInt(numbersArray[i]);
    }
    return sum;
  }
  function delimeters(str) {
    const findBrackets = /(?<=\[).+?(?=\])/g;
    del = str.match(findBrackets);
    let sum = 0;
    findStr = str.substr(str.indexOf("\n") + 1, str.length - 1);
    for (let i = 0; i < findStr.length; i++) {
      findStr = findStr.replace(del[i], "+");
    }
    n = findStr.split("+");
    sum = numInArr(n);
    return sum;
  }
  function invalidFormat(str) {
    let regex = /\d+/g;
    let digit = /[^0-9]/g;
  
    for (let i = 0; i < str.length; i++) {
      lastChar = str[str.length - 1];
      let testLast = regex.test(lastChar);
      let testFirst = str.match(regex);
      let testAgain = regex.test(testFirst[0]);
      if (str.includes("//") && testLast === true) {
        if (str.charAt(0, 1) === "/" && str.charAt(0) === "/") {
          return true;
        }
      } else if (!str.includes("//") && testAgain === true && testLast === true) {
        return true;
      } else {
        throw "ERROR: invalid input";
      }
    }
  }
  function add(num) {
    if (num !== "") {
      var search = /[0-9]+/g;
      var searchNeg = /-?\d+/g;
      var testSearch = searchNeg.test(num);
      var searchNum2 = num.match(search).map(Number);
      var searchNum3 = num.match(searchNeg).map(Number);
      invalidFormat(num);
      if (testSearch == true) {
        var count2 = 0;
        if (num.charAt(2) == "[") return delimeters(num);
  
        for (var j in searchNum2) {
          if (searchNum3[j] < 0) {
            throw new Error("negatives not allowed");
          } else if (searchNum2[j] >= 1000) {
            searchNum2[j] == 0;
            count2 += 0;
          } else {
            count2 += searchNum3[j];
          }
        }
        return count2;
      }
    } else {
      return 0;
    }
  }
  
  console.log(add("1,2,3;\n1000,1;2"))

  module.exports = add;