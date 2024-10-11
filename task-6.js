let input;
input = prompt("Please enter a number!");
const numbers = [];
numbers.push(parseFloat(input));
console.log(numbers);
let total = 0;
for (let i = 0; i < numbers.length; i += 1) {
  total += numbers[i];
}
console.log(total);
