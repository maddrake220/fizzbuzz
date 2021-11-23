Array.from(Array(100).keys()).forEach((i) => {
  let fizz = (i + 1) % 3 == 0,
    buzz = (i + 1) % 5 == 0;
  console.log(fizz ? (buzz ? "fizzbuzz" : "fizz") : buzz ? "buzz" : i + 1);
});
