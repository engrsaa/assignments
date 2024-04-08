//      Question # 41
// Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
console.log('\tAnswer # 41');
let megicians:string[]=['Fakhir','Sajjad','Mudassir'];
function show_megicians(mName:string[]){
    mName.forEach(array_Values=>{
        console.log(array_Values);
    })
}
show_megicians(megicians);
//      Question # 42
// Great Magicians: Start with a copy of your program from Exercise 39. 
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. 
// Call show_magicians() to see that the list has actually been modified.
console.log('\tAnswer # 42');
function make_great(nameWithMessage:string[]){
    nameWithMessage.forEach(ArrayValue=>{
    nameWithMessage[nameWithMessage.indexOf(ArrayValue)]=ArrayValue.concat(' the Great');
    })
}
make_great(megicians);
show_megicians(megicians);