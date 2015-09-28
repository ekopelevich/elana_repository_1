//Reverse a word

// var specialWord = "elanabanana";
//
// function stringReverse (word) {
//     var i, reverseString;
//     var reverseArr = [];
//     for (i = 0; i < word.length; i++){
//         reverseArr.unshift(word.charAt(i));
//         reverseString = reverseArr.toString();
//         finalRevString = reverseString.replace(/,/g,"");
//     }
//     console.log(finalRevString);
// }
//
// stringReverse(specialWord);


//Reverse the words in a sentence

// var specialSentence = "Elana is Smart";
//
// function sentenceSwitcher (original, separator) {
//   var stringArray = original.split(separator)
//                             .reverse()
//                             .toString()
//                             .replace(/,/g, " ");
//
//   console.log(original);
//   console.log(stringArray);
// }
//
// sentenceSwitcher(specialSentence, " ");

//Calculate a remainder (given a numerator and denominator)

// function calcRemainder (numerator, denominator){
//   var remainder = numerator % denominator;
//   console.log(remainder);
// }
//
// calcRemainder(26,3);

//Return distinct values from a list including duplicates
//The expected result is [1, 3, 5, 7]

// var newList = [1, 3, 5, 3, 7, 3, 1, 1, 5];
// var i;
// var uniqueValues = [];
//
// function distinctValues(list) {
//   for (i=0; i < list.length; i++){
//     if (list.indexOf(list[i]) === i){
//       uniqueValues.push(list[i]);
//     }
//   }
//   console.log(newList);
//   console.log(uniqueValues);
// }
//
// distinctValues(newList);

//Return distinct values and their counts
//(i.e. the list above becomes "1(3) 3(3) 5(2) 7(1)")

// var newList = [1, 3, 5, 3, 7, 3, 1, 1, 5];
//
// function uniqueValsAndCounts(list) {
//
//   var finalArr = []; //Put final results in this array
//   var counts = {}; //Store counts for each value
//   var count = 0;   //Initialialze count
//   var i, semiFinalStr, finalStr;
//
//   for (i = 0; i < list.length; i++){
//     count = counts[list[i]] || 0; //Use existing count or start at 0;
//     count++; // Increment count
//     counts[list[i]] = count; //Update counts object with latest count
//   }
//
//   for (var key in counts) {
//     finalArr.push(parseInt(key, 10));
//     finalArr.push('(' + counts[key] + ')');
//   }
//
//   semiFinalStr = finalArr.toString();
//   finalStr = semiFinalStr.replace(/,/g, " ");
//
//   console.log(newList);
//   console.log(counts);
//   console.log(finalArr);
//   console.log(finalStr);
// }
//
// uniqueValsAndCounts(newList);


// Given a string of expressions and a set of variable/value pairs,
// Return the result of the expression.
// Expected result for expression below is 1.

// var str = "a + b + c - d";
// var keyObj = {a: 1, b: 2, c: 3, d: 4};
// var expression, solution;
// 
// function algebra (newStr) {
//   //solution = newStr.replace(/ /g, "");
//   for (i = 0; i < newStr.length; i++) {
//     expression = newStr.replace('a', keyObj.a);
//     expression = expression.replace('b', keyObj.b);
//     expression = expression.replace('c', keyObj.c);
//     expression = expression.replace('d', keyObj.d);
//   }
//   solution = eval(expression);
//   console.log(expression);
//   console.log(solution);
// }
//
// algebra (str);
