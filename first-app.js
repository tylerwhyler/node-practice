// const person = {
//     name: "Tyler",
//     age: 22,
//     greet() {
//         console.log("hi, im a function of an object and my name is " + this.name)
//     }
// }

const hobbies = ['sports', 'games'];

for (let hobby in hobbies) {
    console.log(hobby)
}

for (let hobby of hobbies) {
    console.log(hobby)
}