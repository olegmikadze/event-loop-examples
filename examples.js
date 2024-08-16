const fs = require('fs');

// console.log("----------Syncronous code-------------");

// console.log("----------1-------------");

const firstFunction = () => console.log("firstFunction");
const secondFunction = () => console.log("secondFunction");
const thirdFunction = () => console.log("thirdFunction");

firstFunction();
secondFunction();
thirdFunction();

// console.log("-----------2------------");

const firstFunction = () => console.log("firstFunction");
const secondFunction = () => console.log("secondFunction");
const thirdFunction = () => console.log("thirdFunction");

firstFunction();
for(let i = 0; i < 5; i++) {
    secondFunction();
}
thirdFunction();

// console.log("-----------3------------");

const firstFunction = () => console.log("firstFunction");
const secondFunction = () => {
    console.log("secondFunction");
    thirdFunction();
}
const thirdFunction = () => console.log("thirdFunction");
const fourthFunction = () => console.log("fourthFunction");

firstFunction();
secondFunction();
thirdFunction();
fourthFunction();


// console.log("----------Asyncronous code-------------");

// console.log("----------4-------------");

const firstFunction = () => console.log("firstFunction");
const secondFunction = () => console.log("secondFunction");
const thirdFunction = () => console.log("thirdFunction");

firstFunction();
setTimeout(secondFunction, 1000);
thirdFunction();

// console.log("----------5-------------");

const first = () => console.log('first');
const second = () => console.log('second (setTimeout)');
const third = () => console.log('third (in a blocking loop)');

first();
setTimeout(second, 0);

const startTime = new Date();
const fiveMoreSeconds = 5000;
const endTime = new Date(startTime.getTime() + fiveMoreSeconds);

while (new Date() < endTime) {
    third();
}

// console.log("----------6-------------");

const first = () => console.log('first');

let count = 0;

const second = () => {
    console.log('second (setInterval)');
    count++;

    if (count >= 5) {
        clearInterval(myInterval);
    }
};

const third = () => console.log('third');

first();
const myInterval = setInterval(second, 0);
third();

// console.log("----------7-------------");

const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

pushed as FIFO queue 
setTimeout(first, 5000);
setTimeout(second, 100);
setTimeout(third, 1000);

// console.log("----------7-------------");

const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

first();
setImmediate(second);
third();

// console.log("----------8-------------");

const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

setTimeout(first, 0);
setImmediate(second);
third();

// console.log("----------9-------------");

const first = () => console.log('first setImmediate');
const second = () => console.log('second setTimeout');
const third = () => console.log('third');

setImmediate(first);
setTimeout(second, 0);
third();

// console.log("----------10-------------");

const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

setTimeout(first, 0);
setImmediate(second);
third();

// console.log("----------11-------------");

const firstSetImmediate = () => console.log('setImmediate 1');
const secondSetImmediate = () => console.log('setImmediate 2');
const thirdSetImmediate = () => console.log('setImmediate 3');
const fourthSetImmediate = () => console.log('setImmediate 4');

const firstSetTimeout = () => console.log('setTimeout 1');
const secondSetTimeout = () => console.log('setTimeout 2');
const thirdSetTimeout = () => console.log('setTimeout 3');
const fourthSetTimeout = () => console.log('setTimeout 4');

setImmediate(firstSetImmediate);
setTimeout(firstSetTimeout, 0);
setImmediate(secondSetImmediate);
setTimeout(secondSetTimeout, 0);
setImmediate(thirdSetImmediate);
setImmediate(fourthSetImmediate);
setTimeout(thirdSetTimeout, 0);
setTimeout(fourthSetTimeout, 0);

// result 1

// setTimeout 1
// setImmediate 1
// setImmediate 2
// setImmediate 3
// setImmediate 4
// setTimeout 2
// setTimeout 3
// setTimeout 4


// result 2

// setTimeout 1
// setTimeout 2
// setTimeout 3
// setTimeout 4
// setImmediate 1
// setImmediate 2
// setImmediate 3
// setImmediate 4

// console.log("----------12-------------");

const firstSetImmediate = () => console.log('setImmediate 1');
const secondSetImmediate = () => console.log('setImmediate 2');
const thirdSetImmediate = () => console.log('setImmediate 3');
const fourthSetImmediate = () => console.log('setImmediate 4');

const firstSetTimeout = () => console.log('setTimeout 1');
const secondSetTimeout = () => console.log('setTimeout 2');
const thirdSetTimeout = () => console.log('setTimeout 3');
const fourthSetTimeout = () => console.log('setTimeout 4');


fs.readFile('package.json', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }

    setImmediate(firstSetImmediate);
    setTimeout(firstSetTimeout, 0);
    setImmediate(secondSetImmediate);
    setTimeout(secondSetTimeout, 0);
    setImmediate(thirdSetImmediate);
    setImmediate(fourthSetImmediate);
    setTimeout(thirdSetTimeout, 0);
    setTimeout(fourthSetTimeout, 0);
});

// results always because fs readfile runs in poll phase, 
// after which setImmediate calls first and setTimeout are after according to their phases diagram

// setImmediate 1
// setImmediate 2
// setImmediate 3
// setImmediate 4
// setTimeout 1
// setTimeout 2
// setTimeout 3
// setTimeout 4

// console.log("----------13-------------");

const first = () => console.log('1');
const second = () => console.log('2');
const third = () => console.log('3');

first();
process.nextTick(second)
third();

// console.log("----------14-------------");
const first = () => console.log('first (setTimeout)');
const second = () => console.log('second (process nextTick)');
const third = () => console.log('third');


setTimeout(first, 0);
process.nextTick(second);
third()

// console.log("----------15-------------");

const first = () => console.log('first (setImmediate)');
const second = () => console.log('second (setTimeout)');
const third = () => console.log('third (process.nextTick)');
const fourth = () => console.log('fourth')

setImmediate(first)
setTimeout(second, 0);
process.nextTick(third);
fourth()

// console.log("----------16-------------");

const first = () => console.log('first (setImmediate)');
const second = () => console.log('second (setTimeout)');
const third = () => console.log('third (process.nextTick)');
const fourth = () => console.log('fourth')


fs.readFile('package.json', 'utf8', (err, data) => {
    if (err) {
        return console.log(err);
    }
    setImmediate(first);
    setTimeout(second, 0);
    process.nextTick(third);
    fourth();
})

// console.log("----------17-------------");


const firstSetTimeout = () => console.log('setTimeout 1');

const secondSetTimeout = () => {
    console.log('setTimeout 2');
    process.nextTick(firstProcessNextTick);
    process.nextTick(secondProcessNextTick);
};

const thirdSetTimeout = () => console.log('setTimeout 3');

const firstProcessNextTick = () => console.log('process.nextTick 1');
const secondProcessNextTick = () => console.log('process.nextTick 2');
const thirdProcessNextTick = () => console.log('process.nextTick 3');

setTimeout(firstSetTimeout, 0);
setTimeout(secondSetTimeout, 0);
setTimeout(thirdSetTimeout, 0);
process.nextTick(thirdProcessNextTick);


// console.log("----------18-------------");

const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

Promise.resolve().then(first).then(second);

third();

// console.log("----------18-------------");

const first = () => console.log('first');
const second = () => console.log('second');
const third = () => console.log('third');

Promise.resolve().then(first).then(second);

process.nextTick(third);

// console.log("----------19-------------");

const firstPromiseCallback = () => console.log('promise callback 1');
const secondPromiseCallback = () => console.log('promise callback 2');
const thirdPromiseCallback = () => console.log('promise callback 3');
const fourthPromiseCallback = () => console.log('promise callback 4');

const firstProcessNextTickCallback = () => console.log('process.nextTick 1');
const secondProcessNextTickCallback = () => console.log('process.nextTick 2');
const thirdProcessNextTickCallback = () => console.log('process.nextTick 3');
const fourthProcessNextTickCallback = () => console.log('process.nextTick 4');

Promise.resolve().then(firstPromiseCallback);
process.nextTick(firstProcessNextTickCallback);
process.nextTick(secondProcessNextTickCallback);
Promise.resolve().then(secondPromiseCallback);
Promise.resolve().then(thirdPromiseCallback);
process.nextTick(thirdProcessNextTickCallback);
process.nextTick(fourthProcessNextTickCallback);
Promise.resolve().then(fourthPromiseCallback);

// console.log("----------20-------------");

const promiseCallback1 = () => console.log('promise callback 1');
const promiseCallback2 = () => console.log('promise callback 2');
const promiseCallback3 = () => console.log('promise callback 3');

const processNextTickCallback1 = () => console.log('process.nextTick 1');
const processNextTickCallback2 = () => console.log('process.nextTick 2');
const processNextTickCallback3 = () => console.log('process.nextTick 3');

Promise.resolve().then(promiseCallback1);
Promise.resolve().then(promiseCallback2);
Promise.resolve().then(() => process.nextTick(processNextTickCallback2));
Promise.resolve().then(() => process.nextTick(processNextTickCallback3));
Promise.resolve().then(promiseCallback3);

process.nextTick(processNextTickCallback1);
