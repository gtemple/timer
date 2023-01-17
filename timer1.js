const input = process.argv.slice(2);

const timer = (args) => {
  const converted = args.map(x => Number(x))
  for (let time of converted) {

    if (time < 0 || typeof time !== 'number') continue;
    
    let seconds = time * 1000;
    setTimeout(() => {
      console.log(`It has been ${time} seconds`);
      process.stdout.write('\x07');
    }, seconds);
  }
};

timer(input);

// timer(4, 3, 1, 8, 9);

// timer(4, 'apple', 1, false, 9);

// timer(4, 3, 1, -7, 9);



