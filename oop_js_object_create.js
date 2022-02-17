// * first create prototype that we will assig to other objects

const PersonProto = {
    calcAge(){
        return parseInt(new Date().getFullYear()) - parseInt(this.yearOfBirth)
    }
}

const steven = Object.create(PersonProto)
// * returns new, empty object linked with the PersonProto prototype
steven.name = "Steven"
steven.yearOfBirth = "1990"

console.log(steven.calcAge())