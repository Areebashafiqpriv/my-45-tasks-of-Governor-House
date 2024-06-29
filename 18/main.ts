//18.Seeing the World:think of at least five places in the world you di like to visit.
//Store the locations in a array.Make sure the aaray is not an alphabetic order.
//Print youe array in its original order. 
let places : string [] = ['faislabad','delhi','cape town','kashmeer']
console.log('original' + places);

// Print your array in alphabetic order without nodifing the actual list.
console.log('copy ' + [...places].sort());

// Show that your array is still in its original order by printing it.
console.log('original :'+ places);

// Print your array in reverse alphabetical order without changing the order of the oriinal list.
console.log('copy ' + [...places].sort().reverse());

// Show that your array is still in its originalorder by printing it again.
console.log('copy ' + [...places].sort().reverse());