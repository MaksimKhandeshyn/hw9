// --1--
function logItems(array) {
  array = ["Mango", "ananas", "orange", "apple"];
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
  return array;
}
console.log(logItems());
// --2--
// function calculateEngravingPrice(message, pricePerWord) {
//   message = prompt("Enter word(s) for engraving");
//   pricePerWord = Number(prompt("Enter price for one word"));

//   const sum = message.split(" ");
//   console.log(sum.length * pricePerWord);
//   return sum.length * pricePerWord;
// }
// calculateEngravingPrice();
//--3--
// function findLongestWord(string) {
//   string = prompt("Enter any words");

//   const stringObj = string.split(" ");
//   let first = stringObj[0];
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].length > first.length) {
//       first = string[i];
//     }
//   }
//   console.log(stringObj);
//   console.log(first);
//   return first;
// }
// findLongestWord();

// -- 4--
// function formatString(string) {
//   string = prompt("Please enter text, no longer that 40 symbols");
//   while (string.length <= 40) {
//     return formatString();
//   }
//   if (string.length > 40) {
//     console.log(string.slice(-40) + "...");
//     return string.slice(0, 40) + "...";
//   }
// }
// formatString();
//--5--
// function checkForSpam(message) {
//   message = prompt("Enter any message");
//   const newWord = message.toLowerCase();
//   if (newWord === "spam" || newWord === "sale") {
//     console.log(true);
//     return true;
//   } else {
//     console.log(false);
//     return false;
//   }
// }
// checkForSpam();
//--6--
function addingToArray() {
  let input;
  let numbers = [];
  let total = 0;
  const quest = prompt("Enter any numbers");
  if (!quest) {
    return false;
  } else {
    // input = quest.split(" ");
    // input.concat(quest.split(" "));
    // numbers.concat(quest.split(" "));
    // console.log(input.concat(quest.split(" ")));
    input = quest;
    let num = input.concat(numbers);
    for (let i = 0; i < input.length; i++) {
      console.log(typeof num);
    }
    addingToArray();
    return numbers;
  }
}
addingToArray();
