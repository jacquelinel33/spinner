const chars = ['|', '/', '-', '\\', '|', '/', '-', '\\'];

let delay = 0;
for (const char of chars) {
  delay += 200;
  // console.log(char, when);
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
};
