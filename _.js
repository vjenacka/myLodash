const _ = {
  clamp(num, lower, upper) {
    return num <= lower ? lower : num >= upper ? upper : num;
  },
  inRange(num, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }
    if (start > end) {
      let temp = start;
      start = end;
      end = temp;
    }
    return num < start
      ? false
      : num >= end
      ? false
      : num >= start && num < end
      ? true
      : false;
  },
  words(str) {
    return str.split(" ");
  },
  pad(str, padNum) {
    if (str.length >= padNum) return str;
    let startPaddingLength = Math.floor((padNum - str.length) / 2);
    let endPaddingLength = padNum - str.length - startPaddingLength;
    let paddedString =
      " ".repeat(startPaddingLength) + str + " ".repeat(endPaddingLength);
    return paddedString;
  }
};

// Do not write or modify code below this line.
module.exports = _;
