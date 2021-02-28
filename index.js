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



