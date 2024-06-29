var guest_list = ['Mehek', 'Ayesha', 'Alishba', 'Annie'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThankyou\n');
}
var not_present = 'Ayesha';
var new_guest = 'Mehwish Hayat';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited you on dinner tomorrow.\n\nThankyou\n');
}
console.log("Mrs.".concat(not_present, "will not coming tomorrow dinner. "));
