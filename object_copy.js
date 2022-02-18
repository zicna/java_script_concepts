const person = {
    first_name: "Mike",
    last_Name: "Zigmund",
    address: {
        street: "Zion Em, #2",
        zip: "60674",
        city: "Chicago"
    }
}

// ! wrong way to make copy of an objects
// * now bouth person and copyOfPerson are pointing to same palce in heap memory
// * so by changing one we are changing the other too
const copyOfPerson = person
copyOfPerson.yearOfBirth = "1970"

console.log(copyOfPerson)
console.log(person)
console.log(person === copyOfPerson)
// => true
// * 1. Spread operator
// ! with spread operator we make copy of an oject only one level deep
const rightWayCopy = {...person}
console.log(person === rightWayCopy)
// => false; person object and rightWayCopy object are no longer passing same reference in execution context of call stack (of JS engine)

console.log(rightWayCopy)
rightWayCopy.first_name = "Miki"

console.log(rightWayCopy)
console.log(person)
console.log(person === rightWayCopy)

// ! BUT there is problem => ... (spread operator) only makes shallow copy

console.log(rightWayCopy.address)
rightWayCopy.address.street = 'Aya Sofia 1'
// ! changes made here will reflect to person object
console.log(rightWayCopy.address)
console.log(person.address)

//* 2. Object assign
// ! with object assign operator we make copy of an oject only one level deep

const copyByObjAss = Object.assign({}, person)

console.log(copyByObjAss)
console.log(copyByObjAss === person)
// => false; same as on line 25.
// again this way we are creating only shallow copy of an object


//* 3. Using JSON.stringify() and JSON.parse

const copyByJSON = JSON.parse(JSON.stringify(person))

console.log(person === copyByJSON)
console.log(copyByJSON)

copyByJSON.address = {}
console.log(copyByJSON)
// * now we only change address in copyOfJSON without affecting person object
console.log(person)
