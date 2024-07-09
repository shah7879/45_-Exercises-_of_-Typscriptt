let guest_list : string[] = ['Imran khan','Nawaz sharif','Asif ali zardari'];
for(let i= 0; i <guest_list.length; i++){

    console.log('Dear Mr. '+ guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}
let absent_guest :string = 'Imran khan';
let new_guest :string = 'Kamran khan tessori';
guest_list[0] = new_guest ;


for(let i= 0; i <guest_list.length; i++){

    console.log('Dear Mr. '+ guest_list[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank you!\n\n')
}
console.log(`Mr.${absent_guest}is not comming to the party`)