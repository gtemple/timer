const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

process.stdin.on('data', (key) => {
  let seconds = key * 1000;

  if (key == "b") {
    setTimeout(() => {
      console.log(`\nBuzz buzz! you pressed ${key}`)
      process.stdout.write('\x07');
    }, 0);
  }

  if (key > 0 && key < 10) {
    console.log(`\nSetting timer for ${key} seconds`)
    setTimeout(() => {
      console.log(`Wake up! Your alarm for ${key} seconds has passed.`);
      process.stdout.write('\x07');
    }, seconds);
  }
});

// const stdin = process.stdin;

// stdin.setRawMode(true);
// stdin.setEncoding("utf8");

// stdin.on("data", (key) => {
//   if (key === "b") {
//     console.log(`Buzz buzz! you pressed ${key}`)
//     process.stdout.write("\x07");
//   }
// });

// console.log('after callback');