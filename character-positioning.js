// First, ask yourself:
// What would the resulting object (key-value mapping) look like with the same example string
// ("lighthouse in the house")?

//1 loop over characters - because we still want the characters



function countPosition (str) {
  let uniqueChars = {};

  for (let i = 0; i < str.length; i++) {
    let curChar = str[i];

      if (uniqueChars[curChar]) {
        uniqueChars[curChar].push(i);
      } else {
        uniqueChars[curChar] = [i];
      }
  }

  delete uniqueChars[' '];

  return uniqueChars;

};

console.log(countPosition("lighthouse in the house"));



//answer looks like:

// {
//   l: [0]
//   i: [1, 10]
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }


// let  = ;
// console.log(str.indexOf('i');