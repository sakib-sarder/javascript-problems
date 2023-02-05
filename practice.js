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

//-------------------------------------------------------------

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
//-------------------------------------------------------------------

// problem no. 1

/* 
let sum = 0;
for (let i = 1; i <= 6; i++){
  let singleNumber = i;
  sum = sum + singleNumber;
}
console.log(sum); 
*/

// problem no. 2

function multiplicationTable(multiplicationNumber) {
  let multiplicationTableResult = 1;
  for (let i = 1; i <= multiplicationNumber; i++){
    let number = i;
    multiplicationTableResult = 3 + 'x' + number + '=' + 3 * number;
  }
 return multiplicationTableResult;
}
console.log(multiplicationTable(10));


// problem no. 3

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
