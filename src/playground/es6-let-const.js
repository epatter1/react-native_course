var nameVar = 'Elisha';
nameVar = 'Franz'
console.log('nameVar', nameVar)

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Freddy';
console.log('nameConst', nameConst);

function getPetName() {
    const petName = 'Minky';
    return petName;
}

const petName = getPetName();
console.log(petName);

//Block scoping
var fullname = 'Peach Patterson';

let firstName
if (fullname) {
    firstName = fullname.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);