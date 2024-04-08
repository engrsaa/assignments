//      Question # 28
// Stages of Life: Write an if-else chain that determines a person’s stage of life. 
// Set a value for the variable age, and then:
console.log('\tAnswer # 28');
let myAge= 29;
// • If the person is less than 2 years old, print a message that the person is a baby.
if(myAge<2){console.log('The person is a baby.');}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
else if(myAge<4){console.log('The person is a toddler.');}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
else if(myAge<13){console.log('The person is a kid.');}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
else if(myAge<20){console.log('The person is a teenager.');}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
else if(myAge<65){console.log('The person is an adult.');}
// • If the person is age 65 or older, print a message that the person is an elder.
else {console.log('The person is an elder.');}
//      Questioin # 31
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.
console.log('\tAnswer # 31');
let userList:string[]=[];//may comment this line and uncomment next line to check if condition
// let userList:string[]=['Asad','Ali'];
if(userList.length==0){
    console.log('We need to find some users!')
}
else{
    console.log(`Welcome ${userList}`)
}