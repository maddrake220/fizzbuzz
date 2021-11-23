let answer = "";
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    answer += "fizzbuzz\n";
  } else if (i % 3 === 0) {
    answer += `fizz\n`;
  } else if (i % 5 === 0) {
    answer += "buzz\n";
  } else {
    answer += `${i}\n`;
  }
}

console.log(answer);
