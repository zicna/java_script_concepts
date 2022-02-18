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

// ! Using spread operator


