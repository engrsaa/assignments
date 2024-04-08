// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. 
// Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show 
// that you have one array of the original names and one array with the Great added to each magician’s name.

let megies=['Aslam','Haris','Jamal'];
function show_megies(megiesName:string[]){
    megiesName.forEach(mname=>{
        console.log(mname);
    })
}
function make_great2(grtName:string[]):string[]{
    let grtNameCopy:string[]=[];
    grtName.forEach(gN=>{
        grtNameCopy.push(`${gN} the Great`);
    })
    return grtNameCopy;
}
let honrName=make_great2(megies.slice());
console.log('Orignal Names:');
show_megies(megies);
console.log('Special Names:');
show_megies(honrName);