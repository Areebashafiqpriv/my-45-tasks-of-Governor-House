let Car: string = 'sabaru';
let Age: number = 25;
let NUMBER: number [] = [1, 2, 3, 4];

//**String Tests**

//Test : 1 Equality (True)
console.log("Is car == 'subaru'? I predict True.");
console.log(Car == 'subaru'); //True(case-instensive)

//Test : 2 Strict equality (False)//
console.log("Is car === 'subaru'? I predict false.");
console.log(Car === 'subaru'); //false( case-instensive)

//Test : 3 Inequality (True)
console.log("Is car != 'Toyota'? I predict True.")
console.log(Car != 'Toyota');//True

//Test: 4 Inequality (False)
console.log("Is car !=='subaru'? I predict False.")
console.log(Car !== 'subaru');//False(case-instensive)


//**LOWER FUNCTION TESTS**

//Test: 5 Lowercase conversion (True)
console.log("Is car.toLowerCase() == 'subaru'? I predict True.");
console.log(Car.toLowerCase() == 'subaru');// True (converted in to lowercase)

//Test :6 Lowercase conversion (False)
console.log("Is car === car.toLowerCase()?  I predict False.");
console.log(Car === Car.toLowerCase());// False (converted in to lowercase)


//**NUMERIC TESTS**

//Test: 7 Equality (True)
console.log("Is age =25? I predict true.");
console.log(Age = 25); //True


//Test: 8 Inequlity (false)
console.log("Is age != 40? I predict true.");
console.log(Age != 40); //true


//Test:9 Greater than (False)
console.log("Is age > 30? I predict false. ");
console.log(Age > 30); //False


//Test :10 Less than or equal(true)
console.log("is age <= 25? I predict true.");
console.log(Age >= 25); //True 


//**LOGICAL OPERATORS **


//Test: 11 AND (True)
console.log("Is age > 20 && age < 30? I predict True.");
console.log(Age > 20 && Age < 30); //True (both condition met)

//Test : 12 OR (false)
console.log("Is age > 30 || age < 18? I predict false");
console.log(Age > 30 || Age < 18); //false(neither condition met)


//**ARRAYS TESTS**


//Test: 13 In array  (True) 
console.log("Is 3 in numbers? I predict True.");
console.log("3 in numbers"); //True (check foe index existace)

//Test :14 Not in array (False)
console.log("Is 5 not in numbers? I predict True.");
console.log(5  in NUMBER); //True (nagation of "in" operator)