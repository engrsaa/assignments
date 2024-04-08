// Question # 24
// More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
// If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, 
// and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
let fruitName='Orange Apple';
console.log(`If we compare '${fruitName}' == 'orange' it gives`,fruitName=='orange');
console.log(`Comparing '${fruitName}'.toLowerCase() == 'orange apple' it gives`,fruitName.toLowerCase()=='orange apple');
let a=10, b=5;
console.log('10 == 5',a==b);
console.log("10 != 5",a!=b);
console.log('10 > 5',a>b);
console.log("10 < 5",a<b);
console.log("10 >= 5",a>=b);
console.log("10 <= 5",a<=b);
console.log("10 < 5 and 10 > 5",a<b&&a>b);
console.log("10 < 5 or 10 > 5",a<b||a>b);
let fruitsArray:string[]=fruitName.split(" ");
// console.log(`Is apple a fruit?`,fruisArray.includes('Apple'));
console.log(`Is apple a fruit?`,fruitsArray.some(arrayVales => arrayVales== 'Apple'));
// console.log(`Is cucumber a fruit?`,fruitName.includes('cucumber'));
console.log(`Is cucumber a fruit?`,fruitsArray.some(arrayValues => arrayValues == 'Cucumber'));