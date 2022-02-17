class PersonCl {
    constructor(first, last, height, weight, yob){
        this.first = first
        this.last = last
        this.height = height
        this.weight = weight
        this.yearOfBirth = yob
    }
    // * when method is defined as regular function expresion it metters on what this methot is called uppon
    // * and not where is defined
    calcAge(){
        return parseInt(new Date().getFullYear()) - parseInt(this.yearOfBirth)
    }
}

const milan = new PersonCl("milan", "zivkovic", "185", "88", "1987")

console.log(milan.calcAge())