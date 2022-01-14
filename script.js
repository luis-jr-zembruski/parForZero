const array = [1, 4, 6, 8, 10, 43, 66, 77, 88];

const arrayModify = [];

array.map(value => {
  if ((value % 2) === 0) {
    arrayModify.push(0);
  } else {
    arrayModify.push(value);
  }
})

console.log(arrayModify);