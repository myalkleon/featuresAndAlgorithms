function twoSum(nums, target) {
    const hash = arrayToMap(nums, target);
    const finMap = new Map();
    for(let pair of hash) {
        if(hash.get(pair[1]) === pair[0]) {
            const first = nums.indexOf(pair[0]);
            const second = nums.indexOf(pair[1]);
            finMap.set(first, second);
        }
    }
    return finMap;
}

function arrayToMap(arr, target) {
    const hash = new Map();
    for(let i = 0; i < arr.length; i++) {
        const key = arr[i];
        const value = target - key;
        hash.set(key, value);
    }
    return hash;
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
}

function getRandomInteger(min, max) {
    max += 1;
    return (min + Math.trunc(Math.random() * (max - min)));
}










let twoSumDecorated = executionTimeLoggerDecorator(twoSum, false);
let buildBigArrayDecorated = executionTimeLoggerDecorator(buildBigArray, false);

const bigArr = buildBigArrayDecorated(100000)
let result = twoSumDecorated(bigArr, 666666);
let stop = true;