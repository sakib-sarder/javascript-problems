// extra things:

/*
function isEven( ){
  let result={}
  for(var i=0 ; i<arguments.length;i++){
      const elem=arguments[i];
        const reminder = elem %2;
  if( reminder ===0){
  result[elem]= 'even'
}
  else{
     result[elem]= 'odd'
  }
  }
 
return result
}
console.log(isEven(15, 45, 78, 75)); 
*/

// Second Largest Number:

/* 
function secondLargest(numbers) {
  let emptyArr = [];
  for (let i = 0; i < numbers.length; i++) {
    singleNumber = numbers[i];
    emptyArr.push(singleNumber);
  }
  let finalResult = emptyArr.sort(function (a, b) { return b - a; });
  return finalResult;
}

let arr = [10, 20, -10, 302, 85];
let result = secondLargest(arr);
console.log(result[1]); */


/* let arr = [10, 20, -10, 302, 85];
let result = arr.sort(function (a, b) { return b - a });
console.log(result[1]); */

/* 
function tallestFriend ( height ) {
  let tallest = height[0];
  for(let i = 0; i < height.length; i++){
    let element = height[i];
    if(element > tallest){
      tallest = element;
    }
  }
  return tallest;
}
let heightArray = [157, 138, 188];
const result = tallestFriend(heightArray);
console.log(result); 
*/

/* 
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points); 
*/

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//problem solving checklist::::==>

//    1. --->

/* 
function feetToInch(feet) {
  return feet * 12;
}
console.log(feetToInch(12)); 
*/

//    2. --->

/* 
function centimeterToMeter(centimeter) {
  let result = centimeter / 100;
  return result;
}
console.log(centimeterToMeter(15)); 
*/

//    3. --->

/* 
function paperRequirements(firstBooksCopy, secondBookCopy, thirdBookCopy) {
  const firstBooksNeedPage = firstBooksCopy * 100;
  const secondBooksNeedPage = secondBookCopy * 200;
  const thirdBooksNeedPage = thirdBookCopy * 300;
  const result = firstBooksNeedPage + secondBooksNeedPage + thirdBooksNeedPage;
  return result;
}
console.log('Total Paper Need:',paperRequirements(1,2,3)); 
*/

//    4. --->

/* 
function bestFriend(array) {
  let forResult = [0];
  for (let i = 0; i < array.length; i++){
    element = array[i];
    if (element.length > forResult.length) {
      forResult = element;
    }
  }
  return forResult;
}

let friends = ['sakib', 'farhan labib', 'sajidur rahman tasin', 'gulbadin bellal', 'paul axe', 'hedayetul anik halar put chodanir pola'];
console.log(bestFriend(friends)); 
*/

//    5. --->

/* 
function onlyPositive(numbers) {
  let forResult = [];
  for (let i = 0; i < numbers.length; i++){
    let element = numbers[i];
    if (element >= 0) {
      forResult.push(element);
    }
  }
  return forResult;
}
let myNumbers = [-38, 0, -45, 25, 45, 85, 100, -58, 150, -455, 855];
console.log(onlyPositive(myNumbers)); 
*/

// isoscele test

/* 
function checkTriangle(side1, side2, side3){
  //write your code here
    if((side1 == side2 && side1 != side3) || (side1 !=side2 && side2 == side3) ||(side1 ==side3 && side1 != side2)){
      return 'Yes';
    }
    else{
      return 'NO';
    }
  //don't forget to write return
}
console.log(checkTriangle(8, 9, 9)); 
*/

// reverse a string

/* 
const reverseMaker = (word) => {
  let resultStr = [];
  //Write Your solution Here
  for (let i = word.length - 1; i >= 0; i--){
    let element = word[i];
    resultStr = resultStr + element;
  }
  return resultStr;
}

console.log(reverseMaker('heelloo'));
*/

// another one

/* let myStr = 'hello';
const result = myStr.split('');
console.log(result); */

// array join()

/* 
let myArr = ['sakib', 'rakib', 'rafin', 'meraj'];
const result = myArr.reverse().join(' ');
console.log(result); 
*/

// vowel

/* 
function vowelTest(letter){
  let letterSmall = letter.toLowerCase();

  if(letterSmall == 'a' || letterSmall =='e' || letterSmall == 'i' || letterSmall =='o' || letterSmall == 'u'){
    return 'VOWEL';
  }
  else{
    return 'CONSONANT';
  }
}
console.log(vowelTest('E')); 
*/

// conceptual docs
//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Basid
// problem no. Basic 1

/* 
let sum = 0;
for (let i = 1; i <= 6; i++){
  let singleNumber = i;
  sum = sum + singleNumber;
}
console.log(sum); 
*/

// problem no. Basic 2

/* 
for (let i = 1; i <= 10; i++) {
  let number = i;
  console.log(3 + "x" + number + "=" + 3 * number);
}
 */
// problem no. Basic 3

/* 
function greaterThanFive(numbersArray){
  let sum = 0;
  for(let i = 0; i < numbersArray.length ; i++){
    singleNumber = numbersArray[i];
    if(singleNumber > 5){
      sum =sum + 1;
    }
  }
  return sum;
}

let numbers = [-1,2,-3,4,5,6,-7,8,-9,10];
console.log(greaterThanFive(numbers)); 
*/

// problem no. Basic 4

/*
 function friends(friend1, friend2) {
  if (friend1.length > friend2.length) {
    return friend1.split('').reverse().join('');
  }
  else {
    return friend2.split('').reverse().join('');
  }
}
console.log(friends('rakib', 'shakib')); 
*/

// problem no. Basic 5

/* 
function waterVolume(milimeter) {
  let result = milimeter / 1000;
  return result;
}
console.log(waterVolume(10)); 
*/

// problem no. Basic 6

/* 
function lowerLengthAge(friendsArray) {
  let result =friendsArray[0];
  for (let i = 0; i < friendsArray.length; i++){
    let singleElement = friendsArray[i];
    if (singleElement.age > result.age) {
      result = singleElement;
    }
  }
  return 'Youngest Person Is :'+ result.name;

}

let friends = [
  { name: 'sakib', age: 30 },
  { name: 'samiul', age: 20 },
  { name: 'sahid', age: 50 },
  { name: 'samin', age: 10 }
];
console.log(lowerLengthAge(friends)); 
*/

// ----------------------------------------------------------------------------------------PROBLEMS-------------------------------------------------------------------------------------------

// Problem '1'

/* 
function radianToDegree(radian) {
  let firstExpression = 180 / Math.PI;
  let result = radian * firstExpression;
  return result.toFixed(2);
}
console.log(radianToDegree(10)); 
*/

// Problem '2'

/*
 function isJavaScriptFile(String) {
  let stringSmall = String.toLowerCase();
  if (stringSmall.endsWith('.js')) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isJavaScriptFile("hello.Js")); 
*/

// Problem '3'
