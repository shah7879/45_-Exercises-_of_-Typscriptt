"use strict";
let places = ['italy', 'eifel tower', 'england', 'burj kalifa', 'times square'];
//print your array in its orignal order
console.log('orignal' + places);
//print your array in alphabetical order without modifying the actual list.
console.log('copy' + [...places].sort());
//show that your array is still in its orignal order by printing it.
console.log('orignal' + places);
//print your array in reverse alphabetical order without changing the order of the orignal list.
console.log('copy ' + [...places].sort().reverse());
//show that your array is still in its orignal order by printing it again.
console.log('orignal ' + places);
//reverse the order of your list.print the array to show that its order has changed.
console.log('orignal ' + places.reverse());
//reverse the order of your list again.print the list to show it back to its orignal order.
console.log(places.reverse());
//sort your array so its stored in alphabetical order.print the array to show that its order has been changed.
console.log(places.sort());
//sort to change your array its stored in reverse alphabetical order.print the list to show thatits order has changed.
console.log(places.sort().reverse());
