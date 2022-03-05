function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(x) {
  return x * 60;
}
var min = convertHoursToMinutes(8);
console.log('min', min);

function getGreeting(name) {
  return 'hello ' + name;
}
var string = getGreeting('world!');
console.log('string', string);

function addAndMultiplyBy5(z, p) {
  return (z + p) * 5;
}
var multadd = addAndMultiplyBy5(3, 5);
console.log('multadd', multadd);

function multiplyAndDivideBy5(x, y) {
  return (x * y) / 5;
}
var multDivide = multiplyAndDivideBy5(35, 10);
console.log('multDivide', multDivide);

function subtractTwoNumbers(x, z) {
  return x - z;
}
var sub = subtractTwoNumbers(22, 7);
console.log('sub', sub);

function getCircleCircumference(radius) {
  return (radius * 2) * 3.14;
}
var circumference = getCircleCircumference(5);
console.log('circumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + lastName;
}
var fullName = getFullName('Gabriela ', 'Romero');
console.log('fullName', fullName);

function cube(number) {
  return number * number * number;
}
var num = cube(5);
console.log('num', num);
