// const Car = function(make, model, year, doorNumber){
//     this.make = make
//     this.model = model
//     this.year = year
//     this.doorNumber = doorNumber

//     // ! this is not a good practice, evey instance of Car class will have a copy of this.age function
//     // * add methods for constructor function
//     this.age = function(){
//         return parseInt(new Date().getFullYear()) - parseInt(this.year)
//     }
// }
// // * make an instance of Car class
// const hondica = new Car("honda", "accord", "2015", "4")

// console.log(hondica.age())
// console.dir(hondica)


const Car = function(make, model, year, doorNumber){
    this.make = make
    this.model = model
    this.year = year
    this.doorNumber = doorNumber
}
// ! this is the right way to add methods to JS constructor class
// ! this way each instance of Car class will have access to this.age but wouldn't copy it
Car.prototype.age = function(){
        return parseInt(new Date().getFullYear()) - parseInt(this.year)
    }

// * make an instance of Car class
const hondica = new Car("honda", "accord", "2015", "4")

console.log(hondica.age())
// * this.age is now added through prototype inheritance
console.dir(hondica)

// console.log(hondica.age())
// console.dir(hondica)