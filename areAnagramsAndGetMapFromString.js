'use strict'
function areAnagrams(s1, s2) {
    s1 = s1.toLowerCase();
    s1 = s1.trim();
    s2 = s2.toLowerCase();
    s2 = s2.trim();

    if (s1.length === s2.length) { 
        const map1 = getMapFromString(s1);
        const map2 = getMapFromString(s2);
        for(let row of map1) {
            let valueFromMap1 = row[1];
            let valueFromMap2 = map2.get(row[0]);
            if(valueFromMap1 !== valueFromMap2) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}

function getMapFromString(str) {
    const map = new Map();
        for(let char of str) {
            let value = map.get(char);
            if(isFinite(value)) {
                value+=1;
            } else {
                value = 1;
            }
            map.set(char, value);
        }
    return map;
}

console.log(areAnagrams('гОрб ', 'гроб'));