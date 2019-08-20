var num;
function add(num){

    if(num !== ""){

        var search = /[0-9]+/g;
        var searchNeg = /-?\d+/g;
        var testSearch = searchNeg.test(num);
        var searchNum2 = num.match(search).map(Number);
        var searchNum3 = num.match(searchNeg).map(Number);

        if(testSearch == true){

            var count2 = 0;

            for(var j in searchNum2){

                if(searchNum3[j]<0){

                    return "negatives not allowed";

                }else if(searchNum2[j]>1000){

                    searchNum2[j] == 0;
                    count2 += 0;

                }else{
                    count2 += searchNum3[j];
                }
            }
            return count2;
        }
    }else{
        return 0;
    }
}

//add("//;\n1;-2");