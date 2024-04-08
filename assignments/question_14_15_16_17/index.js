"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.forQuestion19 = void 0;
//Question # 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
// Make a list that includes at least three people you’d like to invite to dinner. 
// Then use your list to print a message to each person, inviting them to dinner.
console.log("\tAnswer # 14");
var gstnames = ['Kumail', 'Masood', 'Muneer'];
for (var i = 0; i < gstnames.length; i++) {
    console.log("Hello ".concat(gstnames[i], ", please join us for dinner tommorrow."));
}
var forQuestion19 = __spreadArray([], gstnames, true);
exports.forQuestion19 = forQuestion19;
// Question # 15
/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating
the name of the guest who can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
console.log("\tAnswer # 15");
// this code is written by myself(Asad) which is "Wrong"
// console.log(`Unfortunately ${gstnames[1]} is busy somewhere.`);
// gstnames.splice(1,1,"Arshsad");
// for(let i=0;i<gstnames.length;i++){
//     console.log(`Hi ${gstnames[i]}, would you like to have dinner with us on Saturday?`);
// }
// this code is as per discord guidance
var absentToBe = "Masood";
console.log("".concat(absentToBe, " can't make it to dinner."));
gstnames[gstnames.indexOf(absentToBe)] = "Arshad"; //in indexOf function we may use array value like "Kumail"
gstnames.forEach(function (mygsts) {
    console.log("Dear ".concat(mygsts, ", would you like to join me for dinner?"));
});
//Question # 16
/*More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people
that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array.
• Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
console.log("\tAnswer # 16");
console.log('Luckily I got the reservation of large table with more sitting capacity!');
gstnames.unshift('Asghar');
gstnames.splice(3, 0, "Sajjad");
gstnames.push("Murtaza");
for (var i = 0; i < gstnames.length; i++) {
    console.log("Dear ".concat(gstnames[i], ", please join us for dinner on Saturday."));
}
/*Question # 17
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner,
and you have space for only two guests.
• Start with your program from Exercise 16.
Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
Each time you pop a name from your list, print a message to that person letting them know
you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list.
Print your list to make sure you actually have an empty list at the end of your program.*/
console.log("\tAnswer # 17");
console.log("Unfortunately I would be able to invite only 2 persons.");
for (var i = gstnames.length - 1; i > 1; i--) {
    console.log("Sorry ".concat(gstnames[i], ", I can't invite you for dinner."));
    gstnames.pop();
}
for (var i = 0; i < gstnames.length; i++) {
    console.log("Hello ".concat(gstnames[i], ", you are still invited for dinner on Saturday."));
}
gstnames.splice(0, gstnames.length);
console.log('now the array look like this', gstnames, ' i.e. empty');
