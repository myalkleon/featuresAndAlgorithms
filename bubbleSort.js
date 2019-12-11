let arr = [500, -1, 0, 4, 100, 95, 4, 0, 11];

let count = 0;

function bubbleSort(arr, increase = true) {
    for(let out = 0; out < arr.length - 1; out++) {
        for(let inn = 0; inn < arr.length - 1 - out; inn++) {
            if(increase) {
                if(arr[inn] > arr[inn + 1]) {
                    swap(inn + 1, inn, arr);
                }
            } else {
                if(arr[inn] < arr[inn + 1]) {
                    swap(inn + 1, inn, arr);
                }
            }
        }
    }
    function swap(aIndex, bIndex, arr) {
        const swap = arr[aIndex];
        arr[aIndex] = arr[bIndex];
        arr[bIndex] = swap;
        count++;
    }
}

bubbleSort(arr, true);
console.log(arr.join(', '));
console.log(`Operations: ${count}`);