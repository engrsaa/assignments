//Question no. 3
//Name Cases: Store a person’s name in a variable, 
//and then print that person’s name in lowercase, uppercase, and titlecase.
var eg_name = "ASLaM ali kHaN";
console.log("Lower Case : " + eg_name.toLowerCase());
console.log("Upper Case : ", eg_name.toUpperCase());
var name_array = eg_name.split(" ");
console.log("Title Case : ");
for (var i = 0; i < name_array.length; i++) {
    console.log(name_array[i].charAt(0).toUpperCase() + name_array[i].slice(1).toLowerCase());
}
//according to discord 100-days-of-coding-challenge channel given method 
//variable containing more than one word value could not convert in titlecase completely
//console.log(eg_name.charAt(0).toUpperCase()+eg_name.slice(1).toLowerCase());
