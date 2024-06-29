let guest_list : string [] = ['Mehek','Ayesha','Alishba','Annie'];
//for(let i=0; i<guest_list.length; i++){
//console.log('Respected Sir/Madam' + guest_list[i] +',\nWe invited you on dinner tomorrow.\n\nThankyou\n')
//}
let not_present : string = 'Ayesha';
let new_guest : string = 'Mehwish Hayat';
guest_list[1] = new_guest;
//for(let i=0; i<guest_list.length; i++){
  //  console.log('Respected Sir/Madam' + guest_list[i] +',\nWe invited you on dinner tomorrow.\n\nThankyou\n')
  //  }
  guest_list.unshift('Ahmed','Umer','Akber');
  //for(let i=0; i<guest_list.length; i++){
    //console.log('Respected Sir/Madam ' + guets_list[i] +',\We invited you on dinner tomorrow.\n\nThankyou\n')
  //}
console.log('\nUnfortunately we can not arrange big table , Only two people allow.')
while(guest_list.length){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam.${remove_guest} You are not invited for dinner.`)
  }
  for(let i=0; i<guest_list.length; i++ ){
console.log('Respected Madem/Sir ' + guest_list[i] + ',\nYes you are still invited on tomorrow dinner\nThank yoy\n')
  }

  for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Medam'+guest_list[i]+ ',\nYou are still invited on tommorrow dinner \nthank you\n ');

    
}
  guest_list.splice(0,2)
  console.log(guest_list)