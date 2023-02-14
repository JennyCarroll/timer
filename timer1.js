const args = process.argv.slice(2);

// const args = [1, 3, 6];

const timer = function (args) {
  let time = 0;
  for (let arg of args) {
    if (arg < 0 || isNaN(arg)) {
      return;
    }
    time = arg * 1000;
    setTimeout(() => process.stdout.write("\x07"), time);
  }
};

timer(args);

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
