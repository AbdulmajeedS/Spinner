// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(()=> {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   process.stdout.write('\r\\   ');
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);

let symbols = "|/-\|/-\|";
let time = 100;
let a = 0;
for (const str of symbols) {
  setTimeout(() => {
    symbols[a] = str
    a++;
    if (a !== symbols.length) {
      process.stdout.write(`\r${str}    `);
    } else {
      process.stdout.write(`\r${str}   \n`);
    }
  }, time += 200)

}