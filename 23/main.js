var car = 'subaru';
// Test:1 Equality comparision (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru'); //True
// Test:2 Strict equality comparsion (True)
console.log("Is car ==='subaru'? I predict True.");
console.log(car === 'subaru'); //True
//Test:3 Inequality comparion (False)
console.log("Is car != 'subaru'? I predict True.");
console.log(car != 'subaru'); //False
// Test:4 Strict Inequlity condition (False)
console.log("Is car !=- 'subaru'? I predict True.");
console.log(car !== 'subaru'); //False
// Test:5 Less than comparrisson (False)
console.log("Is car < 'subaru'? I predict True.");
console.log(car < 'subaru'); //False (lexicongraphic comparrision)
// Test:6 Greater than comparrison (False)
console.log("Is car >'subaru'? I predict True.");
console.log(car > 'subaru'); //False (lexicongraphic comparission)
// Test:7 Less than or equal comparission (True)
console.log("Is car <=  'subaru'? I predict True.");
console.log(car <= 'subaru'); //False
// Test:8 Greater than or equal comparission (True)
console.log("Is car >= 'subaru'? I predict True.");
console.log(car >= 'subaru'); //true
// Test:9 Checking truthiness (True)
console.log("Is car? 'subaru'? I predict True.");
console.log(car); //True (non-empty string is truthy)
