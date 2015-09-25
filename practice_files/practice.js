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

var newList = [1, 3, 5, 3, 7, 3, 1, 1, 5];
var uniqueValues = [];

function distinctValues(list) {
  for (i=0; i < list.length; i++){
    if (list.indexOf(list[i]) === i){
      uniqueValues.push(list[i]);
    }
  }
  console.log(newList);
  console.log(uniqueValues);
}

distinctValues(newList);
