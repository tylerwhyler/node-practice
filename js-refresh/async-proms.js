const fetchData = () => {
  const somePromise = new Promise((res, err) => {
    setTimeout(() => {
      res("Done!");
    }, 2000);
  });
  return somePromise;
};

setTimeout(() => {
  console.log("timer done");
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log("is this syncronous?");
