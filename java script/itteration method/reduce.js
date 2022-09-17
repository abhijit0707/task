const number = [4,5,3];
const sum = number.reduce((result, curr) =>result + curr);
console.log(sum);

const mult = number.reduce((result, curr) =>result * curr);
console.log(mult);

const min = number.reduce((result, curr) =>result - curr);
console.log(min);

const div = number.reduce((result, curr) =>result / curr);
console.log(div);