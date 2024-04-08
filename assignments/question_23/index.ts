// Question # 23
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction 
// for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let mycar="Toyota Vitz";
console.log("Is car=='Toyota Vitz'? I predict True.");
console.log("Test No. 1 result is",mycar=='Toyota Vitz');

console.log("Is car=='Toyota VITZ'? I predict False.");
console.log("Test No. 2 result is",mycar=='Toyota VITZ');

console.log("Is car=='Toyota vitz'? I predict False.");
console.log("Test No. 3 result is",mycar=='Toyota vitz');

console.log("Is car=='Toyota V itz'? I predict Flase.");
console.log("Test No. 4 result is",mycar=='Toyota V itz');

console.log("Is car=='TOyota Vitz'? I predict False.");
console.log("Test No. 5 result is",mycar=='TOyota Vitz');

console.log("Is car=='Vitz'? I predict False.");
console.log("Test No. 6 result is",mycar=='Vitz');

mycar="Toyota Corolla";
console.log("Is car=='Toyota Corolla'? I predict True.");
console.log("Test No. 7 result is",mycar=='Toyota Corolla');

mycar='Honda Civic';
console.log("Is car=='Honda Civic'? I predict True.");
console.log("Test No. 8 result is",mycar=='Honda Civic');

console.log("Is car=='honda civic'? I predict True.");
console.log("Test No. 9 result is",mycar.toLowerCase()=='honda civic');

console.log("Is car=='HONDA CIVIC'? I predict True.");
console.log("Test No. 10 result is",mycar.toUpperCase()=='HONDA CIVIC');