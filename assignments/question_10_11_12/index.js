//Question # 10
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. 
// If you don’t have anything specific to write because your programs are too simple at this point, 
// just add your name and the current date at the top of each program file. 
// Then write one sentence describing what the program does.
//Question # 11
// Names: Store the names of a few of your friends in a array called names. 
// Print each person’s name by accessing each element in the list, one at a time.
console.log('\tAnswer # 11');
var names = ['Ammar', 'Shameer', 'Saqib'];
console.log(names[1]);
console.log(names[0]);
console.log(names[2]);
//Question # 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
// print a message to them. The text of each message should be the same, 
// but each message should be personalized with the person’s name.
console.log('\tAnswer # 12');
var plan = "Hi friend,what about the hangout planned this weekend?";
console.log(plan.replace("friend", names[0]));
console.log(plan.replace("friend", names[1]));
console.log(plan.replace("friend", names[2]));
