'use strict';

const easy = require('./lib/easy.js')

let array1 = [1,2,3,4,5];

console.log('are you there God, it\'s me Margaret');

console.log(easy.arrayPush(array1, 2));

// because arrayPush modifies original array, so have to reassign to original
array1 = [1,2,3,4,5];

console.log(`after second push ${easy.arrayPush(array1, 2)}`);

array1 = [1,2,3,4,5];

console.log(`after pop ${easy.arrayPop(array1)}`);

array1 = [1,2,3,4,5];

console.log(`after shift ${easy.arrayShift(array1)}`);

array1 = [1,2,3,4,5];

console.log(`after unshift ${easy.arrayUnshift(array1, 0)}`);

array1 = [1,2,3,4,5];

//should return 4
console.log(`after indexOf ${easy.arrayIndexOf(array1, 5)}`)

array1 = [1,2,3,4,5];
console.log(`after indexOf with item not found ${easy.arrayIndexOf(array1, 12)}`);