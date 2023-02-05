const friends = [12, 23, 34, 34, 24, 64, 29, 60];

//Removes elements from an array 
//and, if necessary, inserts new elements in their place,
//returning the deleted elements.
//will change the original array

const partial = friends.splice(2, 3,65, 484, 'sakib', 'hello', 'wow','hi');
console.log(partial);
console.log(friends);