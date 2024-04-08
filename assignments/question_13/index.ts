// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, 
// and make a list that stores several examples. Use your list to print a series of statements about these items, 
// such as “I would like to own a Honda motorcycle.”
let vehicles_array:string[]=['Bicycle','Bike','Car','Chopper','Jet'];
for(let i=0;i<vehicles_array.length;i++){
    console.log(`I would like to own a ${vehicles_array[i]}`);
}