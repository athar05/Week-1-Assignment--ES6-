//Given a and b, your function should return the value of a to the power b

const power = (a, b) => Math.pow(a, b);

//Given length of a regular hexagon, your function should return area of the hexagon.

const areaOfHex = (a) => 3 * Math.sqrt(3) * Math.pow(a, 2);

//Given a sentence, your functions should return the number of words in the sentence.

const lengthOfSentence = (sentence) => sentence.split(" ").length;

//Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.

const findMin = (...nums) => {
  return Math.min(...nums);
};

//Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.

const findMax = (...nums) => {
  return Math.max(...nums);
};

//Given three angles of a triange, your function should return if it is a scalene, isosceles, equilateral triangle or not a triangle at all.

const checkTriangle = (x, y, z) => {
  if (x == y && y == z) return "Equilateral Triangle";
  else if (x == y || y == z || z == x) return "Isosceles Triangle";
  else return "Scalene Triangle";
};

//Given an array, your function should return the length of the array.

const arrLength = (array) => array.length;

//Given an array and an item, your function should return the index at which the item is present.

const indexOfArray = (array, item) => array.indexOf(item);

//Given an array and two numbers, your function should replace all entries of first number in an array with the second number.

const replaceAll = (array, del, replace) =>
  array.map((val) => (val === del ? replace : val));

//Given two arrays, your function should return single merged array.

const mergeArrays = (array1, array2) => [...array1, ...array2];

//Given a string and an index, your function should return the character present at that index in the string.

const findIndex = (str, character) => str[character];


