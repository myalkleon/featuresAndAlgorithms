'use strict';
function getFirstUniqCharByHashMap(s) {
    let map = new Map();
    for(let char of s) {
        if(!map.has(char)) {
            map.set(char, 1);
        } else {
            map.set(char, map.get(char) + 1);
        }
    }
    for(let i = 0; i < s.length; i++) {
        if(map.get(s[i]) === 1) {
            return i;
        }
    }
    return -1;
};

function getFirstUniqCharByLastIndexOf(s) {
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
}

console.log(getFirstUniqCharByHashMap('letmewin'));
console.log(getFirstUniqCharByLastIndexOf('etmewin'));