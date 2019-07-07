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
  },
  has(obj,key){
    return obj[key]===undefined? false : true
  },
  invert(obj){
    let newObj={};
    for(let prop in obj){
      newObj[obj[prop]]=prop;
    }
    return newObj;
  },
  findKey(obj,func){
    for(let prop in obj){
      if(func(obj[prop]))return prop
    }
    return undefined
  },
  drop(arr,n){
    if(arr.length<=n) return [];
    if(n===undefined) return arr.splice(1);
    return arr.splice(n,2);
  },
  dropWhile(arr,func){
    let eleIndex=arr.findIndex((ele,index)=>!func(ele,index,arr))
    return this.drop(arr,eleIndex);
  },
  chunk(arr,size=1){
    let arrayChunks=[];
    for(let i=0;i<arr.length;i+=size){
      let arrChunk= arr.slice(i,i+size);
      arrayChunks.push(arrChunk);
    }
    return arrayChunks;
  }
};

// Do not write or modify code below this line.
module.exports = _;
