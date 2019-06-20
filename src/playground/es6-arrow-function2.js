//arguments object - no longer bound with arrow functions

const add = (a,  b) => {
    //console.log(arguments);
    return a + b;
}
console.log(add(55, 1, 1001));

//this keyword - no longer bound

const user = {
    name: 'Elisha',
    cities: ['Atlanta', 'Chicago'],
    printPlacesLived() { 
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

const multiplier = {
    multiplyBy: 8,
    numbers: [47, 86, 7, 29],
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
}
console.log(multiplier.multiply());