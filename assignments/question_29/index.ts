// Question # 29
// Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
// independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
let favorite_fruits:string[]=['Mango','Orange','Gava'];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
if(favorite_fruits.some(arrayValue => arrayValue === 'Banana')){
    console.log('You really like oranges!');
}
if(favorite_fruits.some(arrayValue => arrayValue === 'Apple')){
    console.log('You really like oranges!');
}
if(favorite_fruits.some(arrayValue => arrayValue === 'Grapes')){
    console.log('You really like oranges!');
}
if(favorite_fruits.some(arrayValue => arrayValue === 'Orange')){
    console.log('You really like Oranges!');
}
if(favorite_fruits.some(arrayValue => arrayValue === 'Mango')){
    console.log('You really like Mango!');
}
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!