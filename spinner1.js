process.stdout.write('hello from spinner1.js... \rheyyy\n');
let spinner = ['\r|   ', '\r/   ', '\r-   ','\r\\   ', '\r|   ', '\r/   ', '\r-   ','\r\\   '];

let delay = 100;
for (let i = 0; i < spinner.length; i++) {
  setTimeout(() => {
    if (i !== spinner.length - 1) {
      process.stdout.write(spinner[i]);
      // console.log(sentence[i]);
    }
    else {
      process.stdout.write(spinner[i] + '\n');
      // console.log(sentence[i] + '\n');
    } //delay counter is updating everytime
  }, delay);
  delay += 200;
};




/////REFACTOR LATER/////////
// const print = (spinner) => {
// let delay = 100;
//   for (const i of spinner) {
//     setTimeout(() => {
//       process.stdout.write(i);
//     }
//     , delay);
//   } delay += 200;
// };
// print(spinner);
