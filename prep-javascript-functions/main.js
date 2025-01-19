function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(2, 2);
console.log('adding 2 plus 2:', sum);

function convertHoursToMinutes(hours) {
  const result = hours * 60;
  return result;
}
const minutes = convertHoursToMinutes(2);
console.log('converting 2 hours to minutes:', minutes);

function getGreeting(name) {
  const result = 'Good morning, ' + name + '!';
  return result;
}
const greeting = getGreeting('Ryan');
console.log('greeting value:', greeting);

function addAndMultiplyBy5(num1, num2) {
  const result = (num1 + num2) * 5;
  return result;
}
const sumTimesFive = addAndMultiplyBy5(10, 15);
console.log('(10 plus 15) multiply by 5:', sumTimesFive);

function multiplyAndDivideBy5(num1, num2) {
  const result = (num1 * num2) / 5;
  return result;
}
const productDividedBy5 = multiplyAndDivideBy5(15, 20);
console.log('(15 times 20) divided by 5:', productDividedBy5);

function subtractTwoNumbers(num1, num2) {
  const result = num1 - num2;
  return result;
}
const difference = subtractTwoNumbers(50, 25);
console.log('50 minus 25:', difference);

function getCircleCircumference(radius) {
  const result = 2 * Math.PI * radius;
  return result;
}
const circumference = getCircleCircumference(5);
console.log('value of circumference:', circumference);

function getFullName(firstName, lastName) {
  const result = firstName + ' ' + lastName;
  return result;
}
const fullName = getFullName('Ryan', 'Garcia');
console.log('full Name value:', fullName);

function cube(number) {
  const result = number * number * number;
  return result;
}
const cubed = cube(22);
console.log('22 cubed:', cubed);
