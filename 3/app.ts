// lower case
let personalName:string="Areeba"
console.log("lower case:", personalName.toLowerCase());

// upper case
console.log("upper case:", personalName.toLocaleUpperCase());

// Title case
console.log("title case:", personalName.replace(/\bw/g,c => c.toUpperCase()));