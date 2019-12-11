function getRandomInteger(min, max) {
    max += 1;
    return (min + Math.trunc(Math.random() * (max - min)));
}

function getMapWithRollNTimesLogging(min, max, n, roller) {
    const map = new Map();
    for (let i = 0; i < n; i ++) {
        let int = roller(min, max);
        if(map.has(int)) {
            map.set(int, (map.get(int) + 1));
        } else {
            map.set(int, 1)
        }
    }
    return map;
}

let map = getMapWithRollNTimesLogging(1, 2, 1000000, getRandomInteger);
map = new Map([...map.entries()].sort(function (a, b) {
    return a[0] - b[0];
}));
for(let pair of map) {
    console.log(`The number ${pair[0]} rolled ${pair[1]} times`);
}
