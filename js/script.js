// #1

// for (let i = 1; i < 101; i++) {
//     console.log(i);
// };

// #2

// for (let i = 100; i > 0; i--) {
//     console.log(i);
// };

// #3

// for (let i = 0; i < 101; i++) {
//    if (i % 2 === 1) continue;
//     console.log(i);
// };

// #4

const arr = [1, 2, 3, 4, 5];
let i = 0;
let sum = 0;

while (i <= arr.length - 1) {
    sum += arr[i];
    i++;
}
console.log(sum);

// #5

const arrPow = [1, 2, 3, 4, 5];
let sumPow = 0;

for ( let i of arrPow ) {
    sumPow += Math.pow(i, 2);
}
console.log(sumPow);
