var words = ["ground", "control", "to", "major", "tom"];

function map(arr, b) {
  for (i = 0; i < arr.length; i++) {
    results.push(b(arr[i]));
  }; 
};

// when calling:

// var results = []

// map(words, function(word) {
//   return word.length;
// });

// map(words, function(word) {
//   return word.toUpperCase();
// });

// map(words, function(word) {
//   return word.split('').reverse().join('');
// });

// console.log(results)


//return should be
// [6, 7, 2, 5, 3]

// [ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

// [ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ]