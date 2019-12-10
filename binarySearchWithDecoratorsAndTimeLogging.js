function binarySearch(list, element) {
    let low = 0;
    let high = list.length - 1;

    while(low <= high) {
        const mid = Math.floor((low + high) / 2);
        const guess = list[mid];
        if (guess === element) {return mid};
        if(element < guess) {
            high = mid - 1;
        } else if (element > guess) {
            low = mid + 1;
        }
    }
    
    return null;
}

function buildBigArray(start = 0, end = 100, step = 1) {
    const arr = [];
    for(let i = start; i < end; ) {
        arr.push(i);
        i = i + step;
    }
    return arr;
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

function searchLoggerDecorator(func) {
    return function(...args) {
        console.log(`searchLogger: trying to find ${args[1]} in ${typeof args[0]}`);
        const result = func(...args);
        console.log(`searchLogger: the position of ${args[1]} in ${typeof args[0]} is: ${result}`);
        return result;
    }
}

console.clear();

const buildBigArrayWithTimeLogging = executionTimeLoggerDecorator(buildBigArray, true);
const bigArr = buildBigArrayWithTimeLogging(0, 2000000, 1);

const binarySearchWithTimeAndDefaultSearchLogging = searchLoggerDecorator(executionTimeLoggerDecorator(binarySearch));

let element = 500000;
let elementPosition = binarySearchWithTimeAndDefaultSearchLogging(bigArr, element);

element = -1;
elementPosition = binarySearchWithTimeAndDefaultSearchLogging(bigArr, element);

