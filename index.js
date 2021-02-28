const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Lab Instructions

// map() takes 2 arguments — a callback and the optional context. 
// The callback is called for each value in the original array and the modified value is added to a new array. 
// Its return value is a new array that is the same length as the original array. 
// Using map() saves time while making the code simpler and more expressive.

/**
 * NOTES:
 * 
 * .map() takes 2 arg - \tutorials and phrase\
 * .map() also takes a cb() & and optional text - \firstLetters is the callback and el is the optional text
 * firstLetters is called for each value in the original arr and the modified value is added to the new array - \ tutorials and phrase \
 * 
 * .map() is called on the the original arr and passed into the cb() which takes those values & pushes it into the new arr
 * .split() is called on the new arr and then .map() is called on the new arr and passed a cb() \word\ 
 * .charAt(0) is called on word which takes the 1at charAt index 0 in that element of the new arr and attached the .toUpperCase()
 * concat the remaining letters in the element of the arr via .slice(1) from index 1
 * .join(" ") returns a new string by concat all of th elements in an arr, separated by commas or specificed separator 
 * 
 */


const titleCased = () => tutorials.map(el => firstLetters(el)) 


const firstLetters = (phrase) => phrase.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")

// const toTitleCase = (phrase) => {
//   return phrase
//     .toLowerCase()
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(' ');
// };

// let result = toTitleCase('maRy hAd a lIttLe LaMb');
// console.log(result);





// const firstLetters = (phrase) => phrase.split(" ")
// phrase.map(words => words[0].toUpperCase() + words.slice(1)).join(" ")


// Const titleCased = () => tut.map(x => capS(x));

// Const capS = (sent) => sent.split(“ ”).map(word[0].toUpperCase() + word.slice(1)).join(“ ”);



