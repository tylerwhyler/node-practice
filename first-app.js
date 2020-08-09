const person = {
    name: "Tyler",
    age: 22,
    greet() {
        console.log("hi, im a function of an object and my name is " + this.name)
    }
}

person.greet();