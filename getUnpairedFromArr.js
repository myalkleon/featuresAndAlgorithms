function getUnpairedFromArr(arr) {
    const set = new Set();
    for(element of arr) {
        if(!set.has(element)) {
            set.add(element);
        } else {
            set.delete(element);
        }
    }
    return Array.from(set.values())[0];
}

console.log(getUnpairedFromArr([1, 2, 3, 2, 1]))