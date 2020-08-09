const person = {
    name: "Tyler",
    age: 22,
    greet() {
        return ("hi, im a function of an object and my name is " + this.name)
    }
}

const printName = ({ name, greet }) => {
    console.log(name, greet());
}

printName(person);

const hobbies = ['sports', 'games'];

// for (let hobby in hobbies) {
//     console.log(hobby)
// }

// for (let hobby of hobbies) {
//     console.log(hobby)
// }

hobbies.push("programming js");
hobbies.push("scripting js");

// console.log(hobbies.map(hobby => hobby))
// console.log(hobbies)

// const copiedArray = [...hobbies]
// console.log(copiedArray)

// const toArray = (...args) => {
//     return args;
// }

// console.log(toArray(1, 2, 3, 4, 5))