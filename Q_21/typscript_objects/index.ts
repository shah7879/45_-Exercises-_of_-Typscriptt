// They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

interface person {
    age : number,
    name : string,
    nationality : string,
    student : boolean

}
let person :person = {
    age : 26,
    name : 'shahji',
    nationality : 'pakistan',
    student : true

}
console.log(person)

interface car {
    maker : string,
    color : string,
    automatic : boolean
}


let car = {
  maker : 'toyota',
  color : 'white',
  automatic : true
}

console.log(car)








