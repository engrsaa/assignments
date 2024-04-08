//      Question # 36
// T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
// that should be printed on the shirt. The function should print a sentence summarizing 
// the size of the shirt and the message printed on it. Call the function.
console.log('\tAnswer # 36');
function make_shirt(size, message) {
    console.log("Shirt Size : ".concat(size, "\nShirt Text : ").concat(message));
}
make_shirt('Large', 'Learning Typescript');
//      Question # 37
// Large Shirts: Modify the make_shirt() function so that 
// shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, 
// and a shirt of any size with a different message.
console.log('\tAnswer # 37');
function make_shirt_2(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love Typescript'; }
    console.log("Shirt Size: ".concat(size, "\nShirt Text: ").concat(message));
}
make_shirt_2();
make_shirt_2('Medium');
make_shirt_2('Small', 'Kids are learning Typescript too');
