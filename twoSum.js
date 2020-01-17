function twoSumObject(nums, target) {
    const hash = Object.create(null);
    const finMap = new Map();
    nums.map(function(item, index, array) {
        let diff = target - item;
        if(diff in hash) {
            finMap.set(hash[diff][1], index);
        }
        hash[item] = [diff, index];
    });
    return finMap;
}

function twoSumBruteForce(nums, target) {
    const finMap = new Map();
    
    for (let i = 0; i <= nums.length - 1; i++) {
        let currentNum = nums[i];
        for (let j = i+1; j <= nums.length - 1; j++) {
            let nextNum = nums[j];
            let numsSum = currentNum + nextNum;
            if (numsSum === target) {
                finMap.set(i, j);
            } 
        }       
    }    
    return finMap;
}

function twoSumMap(nums, target) {
    const hash = new Map();
    const finMap = new Map();
    nums.map(function(item, index, array) {
        let diff = target - item;
        if(hash.has(diff)) {
            finMap.set(hash.get(diff)[1], index);
        }
        hash.set(item, [diff, index])
    });
    return finMap;
}

function executionTimeLoggerDecorator(func, showArgs = false) {
    return function (...args) {
        function getFunctionString() {
            if (showArgs) {
                return `${func.name}(${args})`;
            } else {
                return `${func.name}()`;
            }
        }

        const startMoment = new Date();
        console.log(`executionTimeLogger: started execution of ${getFunctionString()} at: ${getCurrentMomentString(startMoment)}`);

        const result = func(...args);

        const finishMoment = new Date();
        console.log(`executionTimeLogger: finished execution of ${getFunctionString()} at: ${getCurrentMomentString(finishMoment)}`);
        console.log(`executionTimeLogger: execution time of ${getFunctionString()}: ${finishMoment - startMoment} milliseconds`);

        return result;
    }

    function getCurrentMomentString(startMoment) {
        const currentMomentString = `${startMoment.getHours()}:${startMoment.getMinutes()}:${startMoment.getSeconds()}:${startMoment.getMilliseconds()}`;
        return currentMomentString;
    }
}

function buildBigArray(count) {
    const arr = [];
    for(let i = 0; i < count; i++) {
        arr.push(getRandomInteger(1, count));
    }
    return arr;

    function getRandomInteger(min, max) {
        max += 1;
        return (min + Math.trunc(Math.random() * (max - min)));
    }
}

let buildBigArrayDecorated = executionTimeLoggerDecorator(buildBigArray, false);
const bigArr = buildBigArrayDecorated(100000);


let twoSumMapDecorated = executionTimeLoggerDecorator(twoSumMap, false);
let twoSumBruteForceDecorated = executionTimeLoggerDecorator(twoSumBruteForce, false);
let twoSumObjectDecorated = executionTimeLoggerDecorator(twoSumObject, false);
let target = 10;
let resultMap = twoSumMapDecorated(bigArr, target);
let resultBruteForce = twoSumBruteForceDecorated(bigArr, target);
let resultObject = twoSumObjectDecorated(bigArr, target);

let stop = true;