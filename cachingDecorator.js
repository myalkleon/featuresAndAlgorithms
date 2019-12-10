'use strict'
const worker = {
    summNumbers(...args) {
        let sum = 0;
        for(let element of args) {
            sum = sum + element;
        }
        return sum;
    }
};

function hash(args) {
    return Array.prototype.join.call(args, ', ');
}

function cachingDecorator(func, hash) {
    const cache = new Map();
    return function(...args) {
        const hashString = hash(args);
        if (!cache.has(hashString)) {
            const sum = func.apply(this, args);
            cache.set(hashString, sum);
            return sum;
        } else {
            return cache.get(hashString);
        }
    }
}

worker.summNumbersCaching = cachingDecorator(worker.summNumbers, hash);
console.log(worker.summNumbersCaching(1, 1, 2, 3, 4, 5, 666));
console.log(worker.summNumbersCaching(1, 1, 2, 3, 4, 5, 666));