const fetchData = asdf => {
    setTimeout(() => {
        asdf("Done!")
    }, 2000)
}

setTimeout(() => {
    console.log("timer done")
    fetchData(text => {
        console.log(text)
    })
}, 2000)

console.log("is this syncronous?")
