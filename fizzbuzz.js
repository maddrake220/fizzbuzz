let answer = "";
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0) {
    answer += "fizz\n";
  } else {
    answer += `${i}\n`;
  }
}

console.log(answer);
