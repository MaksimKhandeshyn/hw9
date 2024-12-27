// --1--
function logItems(array) {
  array = ["Mango", "ananas", "orange", "apple"];
  for (let i = 0; i < array.length; i++) {
    console.log(`${i + 1} - ${array[i]}`);
  }
  return array;
}
logItems();
// --2--
function calculateEngravingPrice(message, pricePerWord) {
  message = prompt("Enter word(s) for engraving");
  pricePerWord = Number(prompt("Enter price for one word"));

  const sum = message.split(" ");
  console.log(sum.length * pricePerWord);
  return sum.length * pricePerWord;
}
calculateEngravingPrice();
//--3--
function findLongestWord(string) {
  string = prompt("Enter any words");

  const stringObj = string.split(" ");
  let first = stringObj[0];
  for (let i = 0; i < string.length; i++) {
    if (string[i].length > first.length) {
      first = string[i];
    }
  }
  console.log(stringObj);
  console.log(first);
  return first;
}
findLongestWord();

// -- 4--
function formatString(string) {
  string = prompt("Please enter text, no longer that 40 symbols");
  while (string.length <= 40) {
    return formatString();
  }
  if (string.length > 40) {
    console.log(string.slice(-40) + "...");
    return string.slice(0, 40) + "...";
  }
}
formatString();
//--5--
function checkForSpam(message) {
  message = prompt("Enter any message");
  const newWord = message.toLowerCase();
  if (newWord === "spam" || newWord === "sale") {
    console.log(true);
    return true;
  } else {
    console.log(false);
    return false;
  }
}
checkForSpam();
//--6--
function addingToArray() {
  let input = prompt("Введіть число"),
    numbers = [],
    total = 0;

  while (input) {
    numbers.push(Number(input));
    input = prompt("Введіть число");
  }

  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  console.log("array is: " + numbers);
  console.log("Sum is: " + total);
}
addingToArray();
