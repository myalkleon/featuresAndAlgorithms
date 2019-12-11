let arr = [500, -1, 0, 4, 100, 95, 4, 0, 11];

let count = 0;

function selectionSort(arr, increase = true) {
    for(let out = 0; out < arr.length - 1; out++) {
        let compared = arr[out];
        for (let inn = out + 1; inn < arr.length; inn++) {
            if(increase) {
                if(compared > arr[inn]) {
                    swap(out, inn, arr);
                    compared = arr[out];
                }
            } else {
                if(compared < arr[inn]) {
                    swap(out, inn, arr);
                    compared = arr[out];
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

selectionSort(arr, true);
console.log(arr.join(', '));
console.log(`Operations: ${count}`);