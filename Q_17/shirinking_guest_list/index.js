"use strict";
let guest_list = ['Imran khan', 'Nawaz sharif', 'Asif ali zardari'];
/*for(let i= 0; i <guest_list.length; i++){

    console.log('Dear Mr. '+ guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}*/
let absent_guest = 'Imran khan';
let new_guest = 'Kamran khan tessori';
guest_list[0] = new_guest;
/*for(let i= 0; i <guest_list.length; i++){
  console.log('Dear Mr. '+ guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}*/
console.log(`Mr.${absent_guest}is not comming to the party`);
console.log('Good news! we find big table so we are living 3 more guests.');
// arry main 3 guest add kiye hain.
guest_list.unshift('sir zia khan');
guest_list.splice(2, 0, 'Maryam nawaz');
guest_list.push('Bilawal zardai');
// yahn par mene 6 arry ko print karvaya he.
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n');
}
// sorry message to guest for not inviting
console.log('\nsorry we can not arrange big table,only two peoplels will be invited.');
// yahn par mene guest remove kiye hain
while (guest_list.length > 2) {
    let remove_guest = guest_list.pop();
    console.log(`sorry mr. ${remove_guest}, you are not invited for dinner.`);
}
// hamare bache hue 2 guest
for (let i = 0; i < guest_list.length; i++) {
    console.log('Dear Mr. ' + guest_list[i] + ',\n\nyou are still invited.\n\nThank you!\n\n');
}
// mene sare guest arry se remove kar diye
guest_list.splice(0, 2);
console.log(guest_list);
