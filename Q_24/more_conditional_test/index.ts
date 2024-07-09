//Equality & inequality test 1
console.log("Equality test with strings ", "Apple" ==="Apple");

//Equality & inequality test 2
console.log("Equality test with strings ", ("Apple" as string) !=="Orange");

//test using the lower case function
console.log("Lower case fuction test: ", "Hello".toLowerCase() === "hello");

//numerical tests involving equality and inequality
console.log("Equality test with strings" , 26 === 26);

//numerical tests involving  and inequality
console.log("inequality test with strings" ,(26 as number) != 35);


//greater than test
console.log("greater than test", 10 > 5);
//less than test
console.log("less than test", 5 < 10);

//greater than or equal to
console.log("greater than and equal to test", 10 >= 10 );

//Less than & equal to
console.log("Less than and equal to test", 5 <= 10);

//test using "and" operator
console.log("And operator test", 5===5 && 10 > 5);

//test using  "or" operator
console.log("Or operator test", 5===5 || false);

//test whether an item is in a array
const fruits : string [] = ['Nashpati', 'Banana', 'Gava'];
console.log('Test "Nashpati" in the array: ',fruits.includes("Nashpati"));

//test whether an item is not in a array
console.log('Testing "Apple is not an array ', !fruits.includes('Apple'));






