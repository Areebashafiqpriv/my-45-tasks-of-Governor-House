var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//18.Seeing the World:think of at least five places in the world you di like to visit.
//Store the locations in a array.Make sure the aaray is not an alphabetic order.
//Print youe array in its original order. 
var places = ['faislabad', 'delhi', 'cape town', 'kashmeer'];
console.log('original' + places);
// Print your array in alphabetic order without nodifing the actual list.
console.log('copy ' + __spreadArray([], places, true).sort());
// Show that your array is still in its original order by printing it.
console.log('original :' + places);
// Print your array in reverse alphabetical order without changing the order of the oriinal list.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
// Show that your array is still in its originalorder by printing it again.
console.log('copy ' + __spreadArray([], places, true).sort().reverse());
