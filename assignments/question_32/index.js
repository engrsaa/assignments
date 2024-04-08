// Question # 32
// Checking Usernames: Do the following to create a program that 
// simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users = ['Murtaza', 'Ali', 'Raza', 'Qasim', 'Aqeel', 'Baqar', 'Sajjad', 'ghalib'];
// current_users.forEach(aryvlu=>{aryvlu.toLowerCase();})
// • Make another list of five usernames called new_users. 
// Make sure one or two of the new usernames are also in the current_users list.
var new_users = ['Furqan', 'Azhar', 'Lala', 'qasim', 'Ghalib'];
// new_users.forEach(aryvlu=>{aryvlu.toLowerCase();})
// • Loop through the new_users list to see if each new username has already been used. 
// If it has, print a message that the person will need to enter a new username. 
// If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach(function (nwusr) {
    if (current_users.some(function (crntusr) { return crntusr.toLowerCase() === nwusr.toLowerCase(); })) {
        console.log("Username ".concat(nwusr, " is not available, please enter new username."));
    }
    else {
        console.log("Username ".concat(nwusr, " is available."));
    }
});
