const spinner = (arr) => {
  let time = 0;
  for (let sym of arr) {
    setTimeout(() => {
      process.stdout.write(sym);
    }, time += 50);
  }
  setTimeout(() => {
    console.log('');
  }, time += 50)
};

const spins = ['\r| ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r| ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
spinner(spins);




