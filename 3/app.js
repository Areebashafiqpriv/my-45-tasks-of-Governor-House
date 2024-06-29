// lower case
var personalName = "Areeba";
console.log("lower case:", personalName.toLowerCase());
// upper case
console.log("upper case:", personalName.toLocaleUpperCase());
// Title case
console.log("title case:", personalName.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
