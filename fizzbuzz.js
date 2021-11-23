let answer = "";
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    answer += "buzz\n";
  } else {
    answer += `${i}\n`;
  }
}

console.log(answer);
