const timer = (...args) => {
  const times = args.sort(); //not entirely necessary but this would ensure that the seconds are as exact as possible within the stack

  for (let time of times) {
    if (time < 0 || typeof time !== 'number') continue;
    
    let seconds = time * 1000;
    setTimeout(() => {
      console.log(`It has been ${time} seconds`);
      process.stdout.write('\x07');
    }, seconds);
  }
};


timer(4, 3, 1, 8, 9);

timer(4, 'apple', 1, false, 9);

timer(4, 3, 1, -7, 9);